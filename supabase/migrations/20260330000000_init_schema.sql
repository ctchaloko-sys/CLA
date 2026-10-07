-- Initial Schema Migration for TURFELITE-PMU / TURF PERFORMANCE PRO

-- 1. PROFILES
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    nom TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    pays TEXT DEFAULT 'France',
    role TEXT CHECK (role IN ('user', 'admin')) DEFAULT 'user',
    suspendu BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. ACCESS CODES (SHA-256 Hashed)
CREATE TABLE IF NOT EXISTS public.access_codes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code_hash TEXT UNIQUE NOT NULL,
    plan TEXT CHECK (plan IN ('weekly', 'monthly', 'yearly')) NOT NULL,
    statut TEXT CHECK (statut IN ('actif', 'désactivé')) DEFAULT 'actif',
    expires_at TIMESTAMPTZ,
    usage TEXT CHECK (usage IN ('single', 'multi')) DEFAULT 'single',
    used_count INT DEFAULT 0,
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    created_by UUID REFERENCES public.profiles(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. SUBSCRIPTIONS
CREATE TABLE IF NOT EXISTS public.subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    plan TEXT NOT NULL,
    debut TIMESTAMPTZ DEFAULT NOW(),
    fin TIMESTAMPTZ NOT NULL,
    statut TEXT CHECK (statut IN ('actif', 'expiré', 'révoqué')) DEFAULT 'actif',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. MEETINGS & RACES
CREATE TABLE IF NOT EXISTS public.meetings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reunion TEXT NOT NULL,
    hippodrome TEXT NOT NULL,
    date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS public.races (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    meeting_id UUID REFERENCES public.meetings(id) ON DELETE CASCADE,
    course TEXT NOT NULL,
    nom_prix TEXT NOT NULL,
    heure TIMESTAMPTZ NOT NULL,
    discipline TEXT NOT NULL,
    distance TEXT NOT NULL,
    allocation TEXT NOT NULL
);

-- 5. FREE PICKS & VIP PICKS
CREATE TABLE IF NOT EXISTS public.free_picks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    discipline TEXT CHECK (discipline IN ('quinte', 'quarte', 'pmu', 'trio')) NOT NULL,
    favoris TEXT[] NOT NULL,
    date DATE DEFAULT CURRENT_DATE,
    analyse_courte TEXT
);

CREATE TABLE IF NOT EXISTS public.vip_picks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    race_id UUID REFERENCES public.races(id) ON DELETE CASCADE,
    favori JSONB,
    tuyau JSONB,
    outsider JSONB,
    tokard JSONB,
    combinaisons JSONB,
    synthese TEXT,
    statut TEXT CHECK (statut IN ('brouillon', 'publié', 'programmé')) DEFAULT 'brouillon',
    publish_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. RESULTS, TESTIMONIALS, SETTINGS & LOGS
CREATE TABLE IF NOT EXISTS public.results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    race_id UUID REFERENCES public.races(id) ON DELETE CASCADE,
    partants INT NOT NULL,
    numeros_arrivee TEXT,
    non_partants TEXT,
    statut_publie BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    pseudo TEXT NOT NULL,
    pays TEXT NOT NULL,
    avatar TEXT,
    commentaire TEXT NOT NULL,
    etoiles INT CHECK (etoiles BETWEEN 1 AND 5) DEFAULT 5,
    is_demo BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS public.settings (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL
);

CREATE TABLE IF NOT EXISTS public.access_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    action TEXT NOT NULL,
    details JSONB,
    ip_address TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.vip_picks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "VIP picks viewable only by active VIP members" ON public.vip_picks
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.subscriptions s
            WHERE s.user_id = auth.uid()
            AND s.statut = 'actif'
            AND s.fin > NOW()
        )
    );

-- SERVER-SIDE RPC SECURITY DEFINER FOR ACCESS CODE VALIDATION
CREATE OR REPLACE FUNCTION validate_access_code(input_code TEXT, pepper TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    computed_hash TEXT;
    code_record RECORD;
BEGIN
    computed_hash := encode(digest(input_code || pepper, 'sha256'), 'hex');

    SELECT * INTO code_record FROM public.access_codes
    WHERE code_hash = computed_hash AND statut = 'actif';

    IF NOT FOUND THEN
        RETURN jsonb_build_object('valid', false, 'message', 'Code VIP invalide ou désactivé.');
    END IF;

    IF code_record.expires_at IS NOT NULL AND code_record.expires_at < NOW() THEN
        RETURN jsonb_build_object('valid', false, 'message', 'Code VIP expiré.');
    END IF;

    IF code_record.usage = 'single' AND code_record.used_count >= 1 THEN
        RETURN jsonb_build_object('valid', false, 'message', 'Code VIP déjà utilisé.');
    END IF;

    -- Update code usage
    UPDATE public.access_codes
    SET used_count = used_count + 1
    WHERE id = code_record.id;

    RETURN jsonb_build_object('valid', true, 'plan', code_record.plan, 'message', 'Accès VIP déverrouillé avec succès !');
END;
$$;
