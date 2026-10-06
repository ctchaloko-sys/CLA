/* ==========================================================================
   TURFELITE - PREMIUM EQUESTRIAN PREDICTIONS PLATFORM
   Core Application Engine, State Architecture & Interactive Modules
   ========================================================================== */

const APP_STORAGE_KEY = 'turfelite_app_state_v1';

// --- INITIAL DEMO STATE ---
const DEFAULT_STATE = {
    currentUser: null, // { id: 1, name: 'Alexandre de Saint-Clair', email: 'alex@turfelite.fr', role: 'MEMBER'|'ADMIN', hasVipAccess: false, bookmarks: [...] }
    hasVipSessionAccess: false, // Session level unlock flag (e.g. unlocked via VIP Code or WhatsApp Request)
    users: [
        { id: 1, name: 'Alexandre de Saint-Clair', email: 'member@turfelite.fr', password: 'password123', role: 'MEMBER', avatar: 'A', status: 'ACTIVE', hasVipAccess: true },
        { id: 2, name: 'Jean-Pierre Expert Turf', email: 'admin@turfelite.fr', password: 'admin123', role: 'ADMIN', avatar: 'J', status: 'ACTIVE', hasVipAccess: true }
    ],
    vipCodes: ['TURFEVIP2026', 'QUINTE88', 'TURFELITE100'],
    settings: {
        whatsappNumber: '+22646553556',
        whatsappStatus: 'En ligne - Réponse en 5 min',
        contactEmail: 'contact@turfelite.fr',
        siteName: 'TurfElite',
        announcementBanner: '🏆 QUINTÉ+ VINCENNES : Notre Tuyau VIP est disponible ! Consultez la synthèse du jour.',
        allowPushNotifications: true
    },
    races: [
        {
            id: 1,
            num: 'R1C4',
            prix: 'Prix d\'Amérique ZEturf Legend Race',
            hippodrome: 'Vincennes',
            discipline: 'Attelé',
            distance: '2700m',
            heureDepart: '2026-03-30T15:15:00',
            statut: 'UPCOMING', // UPCOMING, LIVE, FINISHED
            allocation: '1 000 000 €',
            partantsCount: 16,
            favori: { num: 4, nom: 'Idao de Tillard', jockey: 'C. Duvaldestin' },
            outsider: { num: 12, nom: 'Inmarosa', jockey: 'L. Abrivard' },
            tuyau: { num: 7, nom: 'Go On Boy', jockey: 'R. Derieux' },
            tokard: { num: 15, nom: 'Hussard du Landret', jockey: 'B. Robin' },
            combinations: {
                tierce: '4 - 7 - 12',
                quarte: '4 - 7 - 12 - 15',
                quinte: '4 - 7 - 12 - 15 - 9 - 2',
                couple: '4 - 7',
                multi: '4 - 7 - 12 - 15 - 9'
            },
            analyse: 'Excellente forme pour Idao de Tillard qui vise le doublé. Go On Boy sera à l\'affût au moindre faux pas. Piste rapide prévue à Vincennes, le départ à l\'autostart sera déterminant pour les places de tête.',
            pronostiqueur: 'Jean-Pierre Turf',
            officialArrival: null // Filled when finished: e.g. "4 - 7 - 12 - 15 - 9"
        },
        {
            id: 2,
            num: 'R1C1',
            prix: 'Grand Prix de Paris',
            hippodrome: 'Vincennes',
            discipline: 'Attelé',
            distance: '4150m',
            heureDepart: '2026-03-30T13:50:00',
            statut: 'UPCOMING',
            allocation: '400 000 €',
            partantsCount: 14,
            favori: { num: 2, nom: 'Ampia Mede Sm', jockey: 'F. Nivard' },
            outsider: { num: 8, nom: 'Hooker Berry', jockey: 'N. Bazire' },
            tuyau: { num: 5, nom: 'Hokkaido Jiel', jockey: 'D. Thomain' },
            tokard: { num: 11, nom: 'Elvis du Vallon', jockey: 'Y. Lebourgeois' },
            combinations: {
                tierce: '2 - 5 - 8',
                quarte: '2 - 5 - 8 - 11',
                quinte: '2 - 5 - 8 - 11 - 3 - 6',
                couple: '2 - 5',
                multi: '2 - 5 - 8 - 11 - 3'
            },
            analyse: 'Un marathon éprouvant. Ampia Mede Sm a la fraîcheur nécessaire pour s\'imposer sur les 4150 mètres.',
            pronostiqueur: 'Jean-Pierre Turf',
            officialArrival: null
        },
        {
            id: 3,
            num: 'R3C2',
            prix: 'Prix Ganay - Qatar',
            hippodrome: 'Longchamp',
            discipline: 'Galop',
            distance: '2100m',
            heureDepart: '2026-03-29T16:00:00',
            statut: 'FINISHED',
            allocation: '300 000 €',
            partantsCount: 10,
            favori: { num: 3, nom: 'Ace Impact', jockey: 'C. Demuro' },
            outsider: { num: 6, nom: 'Feed The Flame', jockey: 'C. Soumillon' },
            tuyau: { num: 1, nom: 'Horizon Doré', jockey: 'M. Barzalona' },
            tokard: { num: 9, nom: 'Zarakem', jockey: 'M. Guyon' },
            combinations: {
                tierce: '3 - 1 - 6',
                quarte: '3 - 1 - 6 - 9',
                quinte: '3 - 1 - 6 - 9 - 4 - 8',
                couple: '3 - 1',
                multi: '3 - 1 - 6 - 9 - 4'
            },
            analyse: 'Victoire éclatante au galop sur le gazon bon souple de Longchamp. Le sprint final a fait la différence.',
            pronostiqueur: 'Équipe Galop',
            officialArrival: '3 - 1 - 6 - 9 - 4'
        },
        {
            id: 4,
            num: 'R4C5',
            prix: 'Prix la Haye Jousselin',
            hippodrome: 'Auteuil',
            discipline: 'Haies',
            distance: '5500m',
            heureDepart: '2026-03-28T14:20:00',
            statut: 'FINISHED',
            allocation: '350 000 €',
            partantsCount: 12,
            favori: { num: 5, nom: 'Grandeur Nature', jockey: 'G. Masure' },
            outsider: { num: 8, nom: 'Gran Diose', jockey: 'T. Beaurain' },
            tuyau: { num: 2, nom: 'Rosario Baron', jockey: 'J. Charron' },
            tokard: { num: 10, nom: 'Spes Militurf', jockey: 'K. Nabet' },
            combinations: {
                tierce: '5 - 8 - 2',
                quarte: '5 - 8 - 2 - 10',
                quinte: '5 - 8 - 2 - 10 - 1 - 4',
                couple: '5 - 8',
                multi: '5 - 8 - 2 - 10 - 1'
            },
            analyse: 'Parcours parfait sur le parcours de steeple d\'Auteuil sans aucun saut manqué.',
            pronostiqueur: 'Expert Obstacle',
            officialArrival: '5 - 8 - 2 - 10 - 1'
        }
    ],
    news: [
        {
            id: 1,
            title: 'L\'Analyse complète du Quinté+ à Vincennes',
            category: 'Analyse',
            date: '2026-03-29',
            image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=800&q=80',
            summary: 'Retrouvez le décryptage étape par étape des 16 partants du Prix de la journée.',
            content: 'Nos experts ont passé au cribles les performances récentes et la vitesse moyenne sur la grande piste...'
        },
        {
            id: 2,
            title: 'Interview exclusive du Jockey Vainqueur',
            category: 'Interview',
            date: '2026-03-27',
            image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
            summary: 'Confidences sur la stratégie de course et l\'entraînement préparatoire du cheval star.',
            content: '« Le cheval répond parfaitement à mes sollicitations en fin de parcours... »'
        }
    ],
    media: [
        {
            id: 1,
            title: 'Replay : Arrivée spectaculaire à Vincennes',
            category: 'Grands Prix',
            type: 'VIDEO',
            thumbnail: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
            embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
            id: 2,
            title: 'Les plus beaux hippodromes de France',
            category: 'Hippodromes',
            type: 'PHOTO',
            thumbnail: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=800&q=80',
            embedUrl: null
        }
    ],
    notifications: [
        { id: 1, title: 'Nouveau Pronostic Quinté+', message: 'Le pronostic pour R1C4 Vincennes est en ligne !', time: 'Il y a 10 min', read: false }
    ]
};

// --- STATE MANAGEMENT HELPERS ---
let appState = loadState();

function loadState() {
    const saved = localStorage.getItem(APP_STORAGE_KEY);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('State parse error, fallback to default:', e);
        }
    }
    return DEFAULT_STATE;
}

function saveState() {
    localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(appState));
}

// --- DYNAMIC BACKGROUND CANVAS ANIMATION ---
function initBackgroundCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.floor((width * height) / 16000);

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            color: Math.random() > 0.5 ? 'rgba(245, 158, 11, ' : 'rgba(16, 185, 129, ',
            alpha: Math.random() * 0.4 + 0.1
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color + p.alpha + ')';
            ctx.fill();
        }

        requestAnimationFrame(animate);
    }

    animate();
}

// --- ACCESS CONTROL HELPER ---
function isVipUnlocked() {
    if (appState.hasVipSessionAccess) return true;
    if (appState.currentUser && (appState.currentUser.hasVipAccess || appState.currentUser.role === 'ADMIN')) return true;
    return false;
}

// --- ROUTING & VIEW NAVIGATION ---
function switchView(viewId) {
    document.querySelectorAll('.page-view').forEach((view) => {
        view.classList.remove('active');
    });

    // Enforce account creation / login before accessing VIP space ('predictions')
    if (viewId === 'predictions' && !appState.currentUser) {
        showToast('Connexion requise : Veuillez vous connecter ou créer un compte pour accéder à l\'espace Pronostics VIP.', 'error');
        showAuthModal('login');
        return;
    }

    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) {
        targetView.classList.add('active');
    }

    document.querySelectorAll('.nav-link').forEach((link) => {
        link.classList.remove('active');
    });

    const activeLink = document.querySelector(`.nav-link[onclick*="'${viewId}'"]`);
    if (activeLink) activeLink.classList.add('active');

    // Close mobile nav drawer if open
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) navMenu.classList.remove('open');

    // Render specific view contents
    if (viewId === 'home') {
        renderHomePage();
    } else if (viewId === 'predictions') {
        renderPredictionsPage();
    } else if (viewId === 'results') {
        renderResultsPage();
    } else if (viewId === 'media') {
        renderMediaPage();
    } else if (viewId === 'member-dashboard') {
        renderMemberDashboard();
    } else if (viewId === 'admin-dashboard') {
        renderAdminDashboard();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileNav() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) navMenu.classList.toggle('open');
}

function handleHeroQuinteClick() {
    switchView('predictions');
    showToast("Consulter les pronostics fiables avec nos analyses combinées avec l'IA qui donne 100% de score.", "info");
}

// --- HOME PAGE RENDERER ---
function renderHomePage() {
    // Announcement Banner
    const banner = document.getElementById('announcement-banner-text');
    if (banner) banner.innerText = appState.settings.announcementBanner;

    // Upcoming races count down grid
    const racesContainer = document.getElementById('home-upcoming-races');
    if (!racesContainer) return;

    const upcomingRaces = appState.races.filter((r) => r.statut === 'UPCOMING');

    if (upcomingRaces.length === 0) {
        racesContainer.innerHTML = `<div class="glass-panel text-center" style="grid-column: 1/-1;"><p class="text-muted">Aucune course à venir programmé pour le moment.</p></div>`;
        return;
    }

    racesContainer.innerHTML = upcomingRaces.map((race) => createRaceCardHTML(race)).join('');
    startLiveCountdowns();

    // Featured Prediction Ticket
    const featuredTicket = document.getElementById('home-featured-ticket');
    if (featuredTicket && upcomingRaces.length > 0) {
        featuredTicket.innerHTML = createCouponTicketHTML(upcomingRaces[0]);
    }
}

function createRaceCardHTML(race) {
    const isBookmarked = appState.currentUser && appState.currentUser.bookmarks && appState.currentUser.bookmarks.includes(race.id);

    return `
        <div class="race-card">
            <div class="race-card-header">
                <span class="race-number-badge">${race.num}</span>
                <span class="race-time-pill"><i class="fa-solid fa-clock"></i> ${race.heureDepart.substring(11, 16)}</span>
            </div>
            <h3 class="race-title">${race.prix}</h3>
            <div class="race-meta">
                <span><i class="fa-solid fa-location-dot text-gold"></i> ${race.hippodrome}</span>
                <span><i class="fa-solid fa-horse text-emerald"></i> ${race.discipline}</span>
                <span><i class="fa-solid fa-ruler-horizontal"></i> ${race.distance}</span>
            </div>

            <div class="race-countdown-box">
                <div class="countdown-timer" id="countdown-race-${race.id}">00h 00m 00s</div>
                <div class="countdown-label">Départ imminence</div>
            </div>

            <div style="display:flex; gap:0.5rem;">
                <button class="btn btn-gold btn-block btn-sm" onclick="openRaceDetailsModal(${race.id})">
                    <i class="fa-solid fa-ticket"></i> Voir Pronostic
                </button>
                ${
                    appState.currentUser
                        ? `
                    <button class="btn btn-outline btn-sm" onclick="toggleBookmark(${race.id})">
                        <i class="fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark text-gold"></i>
                    </button>
                `
                        : ''
                }
            </div>
        </div>
    `;
}

function createCouponTicketHTML(race) {
    const unlocked = isVipUnlocked();

    let combinationsContent = '';

    if (unlocked) {
        combinationsContent = `
            <div class="combination-boxes">
                <div class="comb-badge">
                    <span class="comb-type">Tiercé</span>
                    ${race.combinations.tierce}
                </div>
                <div class="comb-badge">
                    <span class="comb-type">Quarté</span>
                    ${race.combinations.quarte}
                </div>
                <div class="comb-badge" style="border-color:var(--gold-bright);">
                    <span class="comb-type" style="color:var(--gold-bright);">Quinté+ VIP</span>
                    ${race.combinations.quinte}
                </div>
                <div class="comb-badge">
                    <span class="comb-type">Couplé</span>
                    ${race.combinations.couple}
                </div>
                <div class="comb-badge">
                    <span class="comb-type">Multi</span>
                    ${race.combinations.multi}
                </div>
            </div>
        `;
    } else {
        combinationsContent = `
            <div style="position:relative;">
                <div class="combination-boxes blurred-content">
                    <div class="comb-badge"><span class="comb-type">Tiercé</span> X - X - X</div>
                    <div class="comb-badge"><span class="comb-type">Quarté</span> X - X - X - X</div>
                    <div class="comb-badge"><span class="comb-type">Quinté+ VIP</span> X - X - X - X - X</div>
                </div>

                <div class="vip-lock-overlay-card">
                    <div class="vip-lock-icon">
                        <i class="fa-solid fa-lock"></i>
                    </div>
                    <h4 style="font-size:1.15rem; font-weight:800; margin-bottom:0.5rem;" class="gold-gradient-text">ACCÈS RESTREINT AUX COMBINAISONS (TIERCÉ, QUINTÉ+, MULTI)</h4>
                    <p class="text-muted" style="font-size:0.88rem; margin-bottom:1.25rem;">
                        Les numéros officiels de combinaison sont réservés aux membres VIP. Veuillez déverrouiller l'accès :
                    </p>
                    <div style="display:flex; gap:0.75rem; justify-content:center; flex-wrap:wrap;">
                        <button class="btn btn-gold btn-sm" onclick="showAuthModal('login')">
                            <i class="fa-solid fa-right-to-bracket"></i> Se Connecter
                        </button>
                        <button class="btn btn-outline-gold btn-sm" onclick="showVipCodeModal()">
                            <i class="fa-solid fa-key"></i> Entrer un Code VIP
                        </button>
                        <button class="btn btn-emerald btn-sm" onclick="showVipRequestModal()">
                            <i class="fa-brands fa-whatsapp"></i> Demander Accès VIP
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    return `
        <div class="coupon-ticket">
            <div class="coupon-header">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
                    <div>
                        <span class="badge badge-gold">${race.num} - ${race.hippodrome}</span>
                        <h3 style="font-size:1.4rem; font-weight:800; margin-top:0.3rem;" class="gold-gradient-text">${race.prix}</h3>
                        <p class="text-muted" style="font-size:0.88rem;">Discipline: ${race.discipline} | Distance: ${race.distance} | Allocation: ${race.allocation}</p>
                    </div>
                    <div style="text-align:right;">
                        <span class="text-muted" style="font-size:0.8rem;">Analyse par:</span><br>
                        <strong class="text-emerald"><i class="fa-solid fa-user-check"></i> ${race.pronostiqueur}</strong>
                    </div>
                </div>
            </div>

            <h4 style="font-size:0.95rem; font-weight:800; margin-bottom:0.75rem;" class="text-gold"><i class="fa-solid fa-star"></i> RECOMMANDATIONS CLÉS</h4>
            <div class="coupon-grid">
                <div class="recommendation-card">
                    <div class="rec-title">Favori Sûr</div>
                    <div class="rec-number">N°${race.favori.num}</div>
                    <div class="rec-name">${race.favori.nom}</div>
                </div>
                <div class="recommendation-card">
                    <div class="rec-title">Tuyau du Jour</div>
                    <div class="rec-number">N°${race.tuyau.num}</div>
                    <div class="rec-name">${race.tuyau.nom}</div>
                </div>
                <div class="recommendation-card">
                    <div class="rec-title">Outsider</div>
                    <div class="rec-number">N°${race.outsider.num}</div>
                    <div class="rec-name">${race.outsider.nom}</div>
                </div>
                <div class="recommendation-card">
                    <div class="rec-title">Tokard</div>
                    <div class="rec-number">N°${race.tokard.num}</div>
                    <div class="rec-name">${race.tokard.nom}</div>
                </div>
            </div>

            <h4 style="font-size:0.95rem; font-weight:800; margin-bottom:0.75rem;" class="text-emerald"><i class="fa-solid fa-list-check"></i> COMBINAISONS PROPOSÉES (TIERCÉ / QUARTÉ / QUINTÉ+)</h4>

            ${combinationsContent}

            <div style="background:rgba(7,12,20,0.6); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--glass-border-subtle); margin-bottom:1rem;">
                <h5 style="font-size:0.88rem; color:var(--gold-bright); margin-bottom:0.3rem;"><i class="fa-solid fa-quote-left"></i> Synthèse du Pronostiqueur</h5>
                <p style="font-size:0.9rem; color:var(--text-muted);">${race.analyse}</p>
            </div>

            <!-- INFORMATIONAL LEGAL BADGE ON COUPON -->
            <div class="coupon-legal-warning">
                <i class="fa-solid fa-circle-info"></i>
                <div>
                    <strong>Information :</strong> Pronostics fournis à titre uniquement indicatif et informatif.
                </div>
            </div>
        </div>
    `;
}

// --- COUNTDOWN TIMER SYSTEM ---
let timerInterval = null;

function startLiveCountdowns() {
    if (timerInterval) clearInterval(timerInterval);

    function update() {
        appState.races.forEach((race) => {
            const elem = document.getElementById(`countdown-race-${race.id}`);
            if (!elem) return;

            const targetTime = new Date(race.heureDepart).getTime();
            const now = new Date().getTime();
            const diff = targetTime - now;

            if (diff <= 0) {
                elem.innerText = 'EN COURS / TERMINÉ';
                elem.style.color = 'var(--emerald-bright)';
            } else {
                const hours = Math.floor(diff / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                elem.innerText = `${padZero(hours)}h ${padZero(minutes)}m ${padZero(seconds)}s`;
            }
        });
    }

    update();
    timerInterval = setInterval(update, 1000);
}

function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

// --- VIP CODE & REQUEST MODALS LOGIC ---
function showVipCodeModal() {
    document.getElementById('modal-vip-code').classList.remove('hidden');
}

function closeVipCodeModal() {
    document.getElementById('modal-vip-code').classList.add('hidden');
}

function handleVipCodeSubmit(e) {
    e.preventDefault();
    const code = document.getElementById('input-vip-code').value.trim().toUpperCase();

    if (appState.vipCodes.includes(code)) {
        appState.hasVipSessionAccess = true;
        saveState();
        closeVipCodeModal();
        renderHomePage();
        if (document.getElementById('view-predictions').classList.contains('active')) {
            renderPredictionsPage();
        }
        showToast('Code VIP validé ! Les combinaisons sont déverrouillées.', 'success');
    } else {
        showToast('Code VIP invalide. Veuillez contacter l\'administrateur sur WhatsApp pour obtenir votre code.', 'error');
    }
}

function showVipRequestModal() {
    document.getElementById('modal-vip-request').classList.remove('hidden');
}

function closeVipRequestModal() {
    document.getElementById('modal-vip-request').classList.add('hidden');
}

function handleVipRequestSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('vip-req-name').value.trim();
    const email = document.getElementById('vip-req-email').value.trim();
    const phone = document.getElementById('vip-req-phone').value.trim();
    const formula = document.getElementById('vip-req-formula').value;

    // Auto grant session access for seamless UX
    appState.hasVipSessionAccess = true;
    saveState();

    closeVipRequestModal();
    renderHomePage();
    if (document.getElementById('view-predictions').classList.contains('active')) {
        renderPredictionsPage();
    }

    showToast(`Demande enregistrée ! Redirection vers WhatsApp...`, 'success');

    // Redirect to WhatsApp with formatted prefilled message
    const num = appState.settings.whatsappNumber.replace(/[^0-9+]/g, '');
    const msgText = `Bonjour TurfElite, je suis ${name} (${phone}, ${email}). Je souhaite demander un accès VIP (${formula}) pour consulter les numéros du Quinté+.`;
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(msgText)}`, '_blank');
}

// --- PREDICTIONS LISTING PAGE ---
function renderPredictionsPage() {
    const container = document.getElementById('predictions-list-container');
    if (!container) return;

    container.innerHTML = appState.races
        .map((race) => createCouponTicketHTML(race))
        .join('');
}

// --- OFFICIAL RESULTS PAGE WITH ABSOLUTE OFFICIAL ARRIVAL RULE ---
function renderResultsPage() {
    const tbody = document.getElementById('results-table-tbody');
    if (!tbody) return;

    const hippodromeFilter = document.getElementById('results-hippodrome-filter')?.value || 'ALL';
    const disciplineFilter = document.getElementById('results-discipline-filter')?.value || 'ALL';

    const filtered = appState.races.filter((race) => {
        const matchHip = hippodromeFilter === 'ALL' || race.hippodrome === hippodromeFilter;
        const matchDis = disciplineFilter === 'ALL' || race.discipline === disciplineFilter;
        return matchHip && matchDis;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted" style="padding:2rem;">Aucun résultat correspondant aux filtres.</td></tr>`;
        return;
    }

    tbody.innerHTML = filtered
        .map((race) => {
            let arrivalHTML = '';

            // ABSOLUTE RULE: Never generate synthetic results. Show official status badge if pending.
            if (race.officialArrival) {
                const nums = race.officialArrival.split('-').map((n) => n.trim());
                arrivalHTML = `
                <div class="arrival-order-badge">
                    ${nums.map((n) => `<span class="arrival-num">${n}</span>`).join('')}
                </div>
            `;
            } else {
                arrivalHTML = `<span class="arrival-pending"><i class="fa-solid fa-hourglass-half"></i> En attente d'arrivée officielle</span>`;
            }

            return `
            <tr>
                <td><strong><code>${race.num}</code></strong></td>
                <td>
                    <strong>${race.prix}</strong><br>
                    <small class="text-muted">${race.heureDepart.substring(0, 10)} à ${race.heureDepart.substring(11, 16)}</small>
                </td>
                <td><i class="fa-solid fa-location-dot text-gold"></i> ${race.hippodrome}</td>
                <td><span class="badge badge-info">${race.discipline}</span></td>
                <td>${arrivalHTML}</td>
                <td>
                    <button class="btn btn-outline btn-sm" onclick="openRaceDetailsModal(${race.id})">
                        <i class="fa-solid fa-eye"></i> Détails
                    </button>
                </td>
            </tr>
        `;
        })
        .join('');
}

// --- MEDIA GALLERY PAGE ---
function renderMediaPage() {
    const grid = document.getElementById('media-gallery-grid');
    if (!grid) return;

    grid.innerHTML = appState.media
        .map(
            (item) => `
        <div class="media-card" onclick="openMediaModal(${item.id})">
            <div class="media-thumb-container">
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="media-play-overlay">
                    <i class="fa-solid ${item.type === 'VIDEO' ? 'fa-circle-play' : 'fa-expand'}"></i>
                </div>
            </div>
            <div class="media-info">
                <span class="badge badge-gold" style="margin-bottom:0.4rem;">${item.category}</span>
                <h4 class="media-title">${item.title}</h4>
            </div>
        </div>
    `
        )
        .join('');
}

function openMediaModal(mediaId) {
    const item = appState.media.find((m) => m.id === mediaId);
    if (!item) return;

    const modal = document.getElementById('modal-media-viewer');
    const container = document.getElementById('media-viewer-content');

    if (item.type === 'VIDEO' && item.embedUrl) {
        container.innerHTML = `
            <h3 style="margin-bottom:1rem;" class="gold-gradient-text">${item.title}</h3>
            <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:var(--radius-sm);">
                <iframe src="${item.embedUrl}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allowfullscreen></iframe>
            </div>
        `;
    } else {
        container.innerHTML = `
            <h3 style="margin-bottom:1rem;" class="gold-gradient-text">${item.title}</h3>
            <img src="${item.thumbnail}" style="width:100%; border-radius:var(--radius-sm);" alt="${item.title}">
        `;
    }

    modal.classList.remove('hidden');
}

function closeMediaModal() {
    document.getElementById('modal-media-viewer').classList.add('hidden');
}

// --- AUTHENTICATION MODULE ---
function showAuthModal(type = 'login') {
    const modal = document.getElementById('modal-auth');
    modal.classList.remove('hidden');

    if (type === 'login') {
        document.getElementById('auth-login-form-wrap').classList.remove('hidden');
        document.getElementById('auth-register-form-wrap').classList.add('hidden');
    } else {
        document.getElementById('auth-login-form-wrap').classList.add('hidden');
        document.getElementById('auth-register-form-wrap').classList.remove('hidden');
    }
}

function closeAuthModal() {
    document.getElementById('modal-auth').classList.add('hidden');
}

function handleLoginSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    const user = appState.users.find((u) => u.email === email && u.password === password);

    if (user) {
        appState.currentUser = { ...user, bookmarks: user.bookmarks || [] };
        saveState();
        closeAuthModal();
        updateNavState();
        showToast(`Bienvenue, ${user.name} !`, 'success');

        // Automatic subscription popup trigger upon login
        setTimeout(() => {
            showVipRequestModal();
        }, 600);

        if (user.role === 'ADMIN') {
            switchView('admin-dashboard');
        } else {
            switchView('member-dashboard');
        }
    } else {
        showToast('Identifiants ou mot de passe incorrects.', 'error');
    }
}

function handleGoogleOAuthLogin() {
    // Simulated 1-click Google OAuth 2.0
    appState.currentUser = {
        id: 99,
        name: 'Membre Google OAuth',
        email: 'oauth.google@turfelite.fr',
        role: 'MEMBER',
        hasVipAccess: true,
        avatar: 'G',
        bookmarks: []
    };
    saveState();
    closeAuthModal();
    updateNavState();
    showToast('Connexion reussie via Google OAuth !', 'success');
    switchView('member-dashboard');
}

function handleRegisterSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value.trim();

    const newUser = {
        id: appState.users.length + 1,
        name: name,
        email: email,
        password: password,
        role: 'MEMBER',
        hasVipAccess: true,
        avatar: name.charAt(0).toUpperCase(),
        status: 'ACTIVE'
    };

    appState.users.push(newUser);
    appState.currentUser = { ...newUser, bookmarks: [] };
    saveState();
    closeAuthModal();
    updateNavState();
    showToast('Compte crée avec succès ! Bienvenue sur TurfElite.', 'success');
    switchView('member-dashboard');
}

function logout() {
    appState.currentUser = null;
    appState.hasVipSessionAccess = false;
    saveState();
    updateNavState();
    switchView('home');
    showToast('Vous êtes déconnecté.', 'info');
}

function updateNavState() {
    const guestActions = document.getElementById('nav-guest-actions');
    const userActions = document.getElementById('nav-user-actions');
    const adminLink = document.getElementById('nav-admin-link');

    if (appState.currentUser) {
        if (guestActions) guestActions.classList.add('hidden');
        if (userActions) userActions.classList.remove('hidden');

        document.getElementById('nav-user-name').innerText = appState.currentUser.name;
        document.getElementById('nav-user-avatar').innerText = appState.currentUser.avatar || 'U';

        if (appState.currentUser.role === 'ADMIN') {
            if (adminLink) adminLink.classList.remove('hidden');
        } else {
            if (adminLink) adminLink.classList.add('hidden');
        }
    } else {
        if (guestActions) guestActions.classList.remove('hidden');
        if (userActions) userActions.classList.add('hidden');
        if (adminLink) adminLink.classList.add('hidden');
    }
}

// --- MEMBER DASHBOARD ---
function renderMemberDashboard() {
    if (!appState.currentUser) {
        switchView('home');
        showAuthModal('login');
        return;
    }

    document.getElementById('dash-user-name').innerText = appState.currentUser.name;

    // Bookmarks list
    const bookmarksContainer = document.getElementById('member-bookmarks-list');
    if (bookmarksContainer) {
        const bookmarkedRaces = appState.races.filter((r) => appState.currentUser.bookmarks && appState.currentUser.bookmarks.includes(r.id));

        if (bookmarkedRaces.length === 0) {
            bookmarksContainer.innerHTML = `<p class="text-muted">Aucun pronostic favori enregistré.</p>`;
        } else {
            bookmarksContainer.innerHTML = bookmarkedRaces.map((r) => createRaceCardHTML(r)).join('');
            startLiveCountdowns();
        }
    }
}

function toggleBookmark(raceId) {
    if (!appState.currentUser) {
        showAuthModal('login');
        return;
    }

    if (!appState.currentUser.bookmarks) appState.currentUser.bookmarks = [];

    const index = appState.currentUser.bookmarks.indexOf(raceId);
    if (index > -1) {
        appState.currentUser.bookmarks.splice(index, 1);
        showToast('Retiré de vos favoris.', 'info');
    } else {
        appState.currentUser.bookmarks.push(raceId);
        showToast('Ajouté à vos pronostics favoris !', 'success');
    }

    saveState();
    renderHomePage();
    if (document.getElementById('view-member-dashboard').classList.contains('active')) {
        renderMemberDashboard();
    }
}

// --- ADMIN DASHBOARD (BACK-OFFICE) ---
function renderAdminDashboard() {
    if (!appState.currentUser || appState.currentUser.role !== 'ADMIN') {
        switchView('home');
        showToast('Accès restreint au Back-Office Admin.', 'error');
        return;
    }

    switchAdminTab('races');
}

function switchAdminTab(tabName) {
    document.querySelectorAll('.admin-tab-btn').forEach((btn) => btn.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach((panel) => panel.classList.add('hidden'));

    const activeBtn = document.querySelector(`.admin-tab-btn[onclick*="'${tabName}'"]`);
    if (activeBtn) activeBtn.classList.add('active');

    const targetPanel = document.getElementById(`admin-tab-${tabName}`);
    if (targetPanel) targetPanel.classList.remove('hidden');

    if (tabName === 'races') renderAdminRacesTable();
    if (tabName === 'results') renderAdminResultsTable();
    if (tabName === 'vip-codes') renderAdminVipCodesTable();
    if (tabName === 'users') renderAdminUsersTable();
    if (tabName === 'settings') renderAdminSettingsForm();
}

function handleAdminPublishDailyRace(e) {
    e.preventDefault();
    const prix = document.getElementById('admin-daily-prix').value.trim();
    const hippodrome = document.getElementById('admin-daily-hippodrome').value.trim();
    const num = document.getElementById('admin-daily-num').value.trim();
    const discipline = document.getElementById('admin-daily-discipline').value;
    const favoriText = document.getElementById('admin-daily-favori').value.trim();
    const quinteText = document.getElementById('admin-daily-quinte').value.trim();

    const parts = favoriText.split('-');
    const favNum = parseInt(parts[0]) || 4;
    const favNom = parts[1] ? parts[1].trim() : favoriText;

    const newRace = {
        id: Date.now(),
        num: num,
        prix: prix,
        hippodrome: hippodrome,
        discipline: discipline,
        distance: '2700m',
        heureDepart: new Date(Date.now() + 3600000 * 2).toISOString(),
        statut: 'UPCOMING',
        allocation: '500 000 €',
        partantsCount: 16,
        favori: { num: favNum, nom: favNom, jockey: 'Pronostiqueur IA' },
        outsider: { num: 12, nom: 'Inmarosa', jockey: 'L. Abrivard' },
        tuyau: { num: 7, nom: 'Go On Boy', jockey: 'R. Derieux' },
        tokard: { num: 15, nom: 'Hussard du Landret', jockey: 'B. Robin' },
        combinations: {
            tierce: quinteText.split('-').slice(0, 3).join(' - '),
            quarte: quinteText.split('-').slice(0, 4).join(' - '),
            quinte: quinteText,
            couple: quinteText.split('-').slice(0, 2).join(' - '),
            multi: quinteText
        },
        analyse: 'Pronostic généré par analyse combinée avec l\'IA TurfElite avec un score de fiabilité élevé.',
        pronostiqueur: 'IA & Expert Turf',
        officialArrival: null
    };

    appState.races.unshift(newRace);
    saveState();
    renderAdminRacesTable();
    showToast(`Numéro de départ et pronostic VIP publiés pour ${prix} !`, 'success');

    document.getElementById('admin-daily-prix').value = '';
    document.getElementById('admin-daily-hippodrome').value = '';
    document.getElementById('admin-daily-num').value = '';
    document.getElementById('admin-daily-favori').value = '';
    document.getElementById('admin-daily-quinte').value = '';
}

function renderAdminRacesTable() {
    const tbody = document.getElementById('admin-races-tbody');
    if (!tbody) return;

    tbody.innerHTML = appState.races
        .map(
            (race) => `
        <tr>
            <td><strong><code>${race.num}</code></strong></td>
            <td>${race.prix}</td>
            <td>${race.hippodrome} (${race.discipline})</td>
            <td>${race.heureDepart.substring(0, 16)}</td>
            <td><span class="badge ${race.statut === 'UPCOMING' ? 'badge-gold' : 'badge-emerald'}">${race.statut}</span></td>
            <td>
                <button class="btn btn-outline btn-sm" onclick="openEditRaceModal(${race.id})"><i class="fa-solid fa-pen"></i> Modifier</button>
                <button class="btn btn-danger btn-sm" onclick="deleteRace(${race.id})"><i class="fa-solid fa-trash"></i> Supprimer</button>
            </td>
        </tr>
    `
        )
        .join('');
}

function openEditRaceModal(raceId) {
    const race = appState.races.find((r) => r.id === raceId);
    if (!race) return;

    const newName = prompt('Nouveau nom du Prix :', race.prix);
    if (newName && newName.trim()) {
        race.prix = newName.trim();
        saveState();
        renderAdminRacesTable();
        showToast('Intitulé de la course mis à jour !', 'success');
    }
}

function deleteRace(raceId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette course ?')) {
        appState.races = appState.races.filter((r) => r.id !== raceId);
        saveState();
        renderAdminRacesTable();
        showToast('Course supprimée avec succès.', 'info');
    }
}

function renderAdminVipCodesTable() {
    const tbody = document.getElementById('admin-vip-codes-tbody');
    if (!tbody) return;

    if (appState.vipCodes.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" class="text-center text-muted">Aucun code VIP configuré.</td></tr>`;
        return;
    }

    tbody.innerHTML = appState.vipCodes
        .map(
            (code) => `
        <tr>
            <td><strong class="text-gold" style="font-size:1.1rem; letter-spacing:1px;">${code}</strong></td>
            <td><span class="badge badge-emerald"><i class="fa-solid fa-check-circle"></i> ACTIF</span></td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteVipCode('${code}')">
                    <i class="fa-solid fa-trash"></i> Supprimer
                </button>
            </td>
        </tr>
    `
        )
        .join('');
}

function handleCreateVipCode(e) {
    e.preventDefault();
    const input = document.getElementById('admin-new-vip-code');
    const newCode = input.value.trim().toUpperCase();

    if (!newCode) return;

    if (appState.vipCodes.includes(newCode)) {
        showToast('Ce code VIP existe déjà.', 'error');
        return;
    }

    appState.vipCodes.push(newCode);
    saveState();
    input.value = '';
    renderAdminVipCodesTable();
    showToast(`Code VIP "${newCode}" créé et publié avec succès !`, 'success');
}

function deleteVipCode(code) {
    if (confirm(`Voulez-vous supprimer le code VIP "${code}" ?`)) {
        appState.vipCodes = appState.vipCodes.filter((c) => c !== code);
        saveState();
        renderAdminVipCodesTable();
        showToast(`Code VIP "${code}" supprimé.`, 'info');
    }
}

function renderAdminResultsTable() {
    const tbody = document.getElementById('admin-results-tbody');
    if (!tbody) return;

    tbody.innerHTML = appState.races
        .map(
            (race) => `
        <tr>
            <td><strong><code>${race.num}</code></strong></td>
            <td>${race.prix}</td>
            <td>${race.officialArrival ? `<strong class="text-emerald">${race.officialArrival}</strong>` : '<span class="badge badge-gold">Non Saisi</span>'}</td>
            <td>
                <button class="btn btn-gold btn-sm" onclick="promptOfficialArrival(${race.id})">
                    <i class="fa-solid fa-square-check"></i> Saisir Arrivée Officielle
                </button>
            </td>
        </tr>
    `
        )
        .join('');
}

function promptOfficialArrival(raceId) {
    const race = appState.races.find((r) => r.id === raceId);
    if (!race) return;

    const arrival = prompt(`Entrez l'arrivée officielle pour ${race.num} - ${race.prix} (ex: 5 - 12 - 3 - 8 - 1) :`, race.officialArrival || '');

    if (arrival !== null) {
        race.officialArrival = arrival.trim();
        race.statut = 'FINISHED';
        saveState();
        renderAdminResultsTable();
        showToast(`Arrivée officielle enregistrée pour ${race.num}`, 'success');
    }
}

function renderAdminUsersTable() {
    const tbody = document.getElementById('admin-users-tbody');
    if (!tbody) return;

    tbody.innerHTML = appState.users
        .map(
            (u) => `
        <tr>
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td><span class="badge ${u.role === 'ADMIN' ? 'badge-gold' : 'badge-info'}">${u.role}</span></td>
            <td><span class="badge ${u.status === 'ACTIVE' ? 'badge-emerald' : 'badge-danger'}">${u.status}</span></td>
            <td>
                <button class="btn btn-outline btn-sm" onclick="toggleUserStatus(${u.id})">
                    ${u.status === 'ACTIVE' ? 'Suspendre' : 'Réactiver'}
                </button>
            </td>
        </tr>
    `
        )
        .join('');
}

function toggleUserStatus(userId) {
    const user = appState.users.find((u) => u.id === userId);
    if (!user) return;

    user.status = user.status === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE';
    saveState();
    renderAdminUsersTable();
    showToast(`Statut de ${user.name} mis à jour.`, 'info');
}

function renderAdminSettingsForm() {
    document.getElementById('set-whatsapp').value = appState.settings.whatsappNumber;
    document.getElementById('set-banner').value = appState.settings.announcementBanner;
}

function handleSaveSettings(e) {
    e.preventDefault();
    appState.settings.whatsappNumber = document.getElementById('set-whatsapp').value.trim();
    appState.settings.announcementBanner = document.getElementById('set-banner').value.trim();
    saveState();
    showToast('Paramètres de la plateforme enregistrés !', 'success');
    renderHomePage();
}

function handleContactEmailSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    const targetEmail = appState.settings.contactEmail || 'contact@turfelite.fr';

    // Construct mailto URI
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoUrl;

    showToast('Votre message a été transmis à votre client de messagerie !', 'success');

    document.getElementById('contact-name').value = '';
    document.getElementById('contact-email').value = '';
    document.getElementById('contact-subject').value = '';
    document.getElementById('contact-message').value = '';
}

// --- WHATSAPP FLOATING BUTTON LOGIC ---
function triggerWhatsAppRedirect() {
    const num = appState.settings.whatsappNumber.replace(/[^0-9+]/g, '');
    const msg = encodeURIComponent("Bonjour TurfElite, je souhaite obtenir des renseignements sur les pronostics du jour.");
    window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
}

// --- RACE DETAILS MODAL ---
function openRaceDetailsModal(raceId) {
    const race = appState.races.find((r) => r.id === raceId);
    if (!race) return;

    const modal = document.getElementById('modal-race-details');
    const content = document.getElementById('race-details-modal-content');

    content.innerHTML = createCouponTicketHTML(race);
    modal.classList.remove('hidden');
}

function closeRaceDetailsModal() {
    document.getElementById('modal-race-details').classList.add('hidden');
}

// --- FAQ ACCORDION TOGGLE ---
function toggleFaq(header) {
    const item = header.parentElement;
    item.classList.toggle('active');
}

// --- TOAST NOTIFICATION HELPERS ---
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-triangle-exclamation';

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}

// --- THEME MODE TOGGLE ---
function toggleThemeMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('turfelite_theme', newTheme);

    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
        if (newTheme === 'light') {
            btn.innerHTML = `<i class="fa-solid fa-sun"></i> <span class="theme-mode-text">Mode Clair</span>`;
        } else {
            btn.innerHTML = `<i class="fa-solid fa-moon"></i> <span class="theme-mode-text">Mode Sombre</span>`;
        }
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('turfelite_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
        if (savedTheme === 'light') {
            btn.innerHTML = `<i class="fa-solid fa-sun"></i> <span class="theme-mode-text">Mode Clair</span>`;
        } else {
            btn.innerHTML = `<i class="fa-solid fa-moon"></i> <span class="theme-mode-text">Mode Sombre</span>`;
        }
    }
}

// --- COOKIE CONSENT MANAGEMENT ---
function checkCookieConsent() {
    const consent = localStorage.getItem('turfelite_cookie_consent');
    if (!consent) {
        setTimeout(() => {
            const banner = document.getElementById('cookie-banner');
            if (banner) banner.classList.remove('hidden');
        }, 1200);
    }
}

function handleCookieChoice(accepted) {
    localStorage.setItem('turfelite_cookie_consent', accepted ? 'ACCEPTED' : 'REFUSED');
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.classList.add('hidden');

    if (accepted) {
        showToast('Préférences de cookies enregistrées (Acceptés).', 'success');
    } else {
        showToast('Cookies non-essentiels refusés.', 'info');
    }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    checkCookieConsent();
    initBackgroundCanvas();
    updateNavState();
    renderHomePage();
});
