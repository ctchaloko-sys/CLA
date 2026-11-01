/**
 * PORTFOLIO MULTILINGUE & LAB INTERACTIF
 * Clarius Emmanuel Tchaloko (CET)
 * Vanilla JavaScript ES6+
 */

// =============================================================================
// 1. DICTIONNAIRE MULTILINGUE COMPLET (FR / EN / DE)
// =============================================================================
const i18n = {
    fr: {
        meta: {
            title: "Clarius Emmanuel TCHALOKO | Linguiste, Spécialiste Projets & Cybersécurité",
            description: "Portfolio professionnel de Clarius Emmanuel Tchaloko - Master 1 Linguistique Allemand (UAC), Licence Sociologie, Expert Suivi-Évaluation & Cybersécurité."
        },
        nav: {
            roleTag: "Linguistique • Projets • Cybersécurité",
            home: "Accueil",
            about: "À propos",
            cv: "Curriculum",
            certifs: "Certificats",
            skills: "Compétences",
            terminal: "Live Lab Cyber",
            contact: "Contact"
        },
        hero: {
            badge: "Étudiant en Master 1 • Université d'Abomey-Calavi (UAC)",
            greeting: "Bonjour, je suis",
            typewriter: [
                "Linguiste & Spécialiste de la langue allemande",
                "Sociologue & Chargé d'enquêtes terrain",
                "Expert Suivi-Évaluation & KoboToolbox",
                "Passionné de Cybersécurité Défensive & Données"
            ],
            description: "Allier la précision linguistique à l'impact social du développement et à la rigueur de la cybersécurité. Spécialisé en linguistique allemande, sociologie de terrain, suivi-évaluation de projets et sensibilisation aux cyber-menaces.",
            ctaDiscover: "Découvrir mon profil",
            ctaCv: "Consulter le CV",
            ctaChat: "Échanger",
            statCertifs: "Certificats Validés",
            statLanguages: "Langues Maîtrisées",
            statDegrees: "Cursus Universitaires",
            statusAvailable: "Disponible & Engagé",
            togglePoster: "Version Poster"
        },
        about: {
            sectionTag: "// À PROPOS & PARCOURS",
            title: "Un profil polyvalent et interdisciplinaire",
            subtitle: "De la linguistique des langues germaniques aux enquêtes de terrain, jusqu'à la gouvernance numérique et la cybersécurité.",
            academicTitle: "Formation Universitaire",
            academicSub: "Université d'Abomey-Calavi (Bénin)",
            degree1Title: "Master 1 en Linguistique de l'Allemand",
            degree1Desc: "Approche sociolinguistique, analyse du discours, morphosyntaxe et traduction professionnelle.",
            degree2Title: "Licence Professionnelle en Sociologie",
            degree2Desc: "Sociologie du développement, méthodologies qualitatives/quantitatives, conduite d'enquêtes de terrain.",
            approachTitle: "Approche & Philosophie",
            approachSub: "Synergie terrain, rigueur & numérique",
            bioP1: "Mon parcours atypique conjugue la maîtrise des langues vivantes (Allemand, Anglais, Français, Fon) à une solide expertise en gestion de projets communautaires et collecte de données mobiles (KoboToolbox).",
            bioP2: "Passionné par la souveraineté numérique et la sécurité des systèmes d'information, je développe des compétences en cybersécurité défensive : analyse des risques, sensibilisation aux attaques par ingénierie sociale, chiffrement appliqué et hygiène informatique."
        },
        lang: {
            levelNative: "Natif",
            levelGerman: "C1 / Académique",
            levelEnglish: "B2 / Professionnel",
            levelFon: "Langue maternelle"
        },
        cv: {
            tag: "Document Officiel Actualisé",
            title: "Curriculum Vitae de Clarius Emmanuel Tchaloko",
            desc: "Consultez directement le CV en ligne via la visionneuse interactive intégrée ou téléchargez le fichier au format PDF pour vos archives.",
            versionInfo: "Formats bilingues disponibles • Mise à jour 2026",
            btnView: "Voir le CV",
            btnDownload: "Télécharger le CV (PDF)",
            btnDownloadShort: "Télécharger",
            modalTitle: "Aperçu du Curriculum Vitae",
            viewerFallbackTitle: "Document CV Prêt à être Intégré",
            viewerFallbackDesc: "Le fichier PDF officiel sera affiché directement dans cette liseuse interactive dès son versement dans le dossier assets/cv/."
        },
        certifs: {
            sectionTag: "// ACADÉMIE & VALORISATION DES COMPÉTENCES",
            title: "Galerie des Certificats & Attestations",
            subtitle: "14 attestations de formation validées auprès d'organismes de référence (Campus AFD, Coursera, MTN Academy, Innovista, KoboToolbox, CEBELAE).",
            filterAll: "Tous (14)",
            filterProjets: "Gestion de Projets",
            filterTerrain: "Terrain & Données",
            filterCyber: "Numérique & Cybersécurité",
            filterComm: "Communication & Langues",
            btnVerify: "Vérifier l'authenticité",
            previewPending: "Aperçu bientôt disponible",
            previewPendingDesc: "Le document numérisé est en cours d'archivage haute définition. L'authenticité peut être vérifiée auprès de l'institution émettrice."
        },
        skills: {
            sectionTag: "// SAVOIR-FAIRE & CONTACT DIRECT",
            title: "Compétences Opérationnelles",
            subtitle: "Cliquez sur le bouton WhatsApp d'une compétence pour m'écrire directement avec un message contextualisé.",
            btnContact: "Me contacter à ce sujet"
        },
        cyber: {
            sectionTag: "// LABORATOIRE D'EXPÉRIMENTATION DÉFENSIVE",
            title: "Terminal Interactif Cybersécurité",
            subtitle: "Démonstrations pédagogiques 100% défensives et simulées en environnement local sécurisé.",
            disclaimerTitle: "Avertissement éthique & pédagogique :",
            disclaimerText: "Toutes les fonctionnalités ci-dessous sont purement pédagogiques, défensives et exécutées localement dans votre navigateur. Aucun paquet réseau n'est injecté, aucune donnée n'est collectée.",
            tabPassword: "Force Mot de Passe",
            tabSha: "Hachage SHA-256",
            tabLogs: "Analyse de Logs SIEM",
            tabCaesar: "Chiffrement César"
        },
        contact: {
            sectionTag: "// TRAVAILLONS ENSEMBLE",
            title: "Prendre Contact",
            subtitle: "Une opportunité de projet, un besoin de formation ou un échange linguistique ? Écrivez-moi.",
            locationLabel: "Localisation",
            emailLabel: "Email Direct",
            phoneLabel: "WhatsApp Professionnel",
            networkTitle: "Engagements & Communauté",
            networkDesc: "Membre actif de réseaux d'art oratoire, d'associations étudiantes de l'UAC et de cercles de partage en technologies civiques.",
            formName: "Nom complet *",
            formEmail: "Adresse Email *",
            formSubject: "Objet du message *",
            formMessage: "Votre Message *",
            btnSend: "Envoyer le message",
            toastSuccess: "Merci pour votre message ! Clarius vous répondra dans les plus brefs délais."
        },
        common: {
            close: "Fermer"
        },
        whatsappMessages: {
            "Suivi-évaluation": "Bonjour Clarius, j'ai vu votre portfolio et je suis intéressé(e) par votre expertise en Suivi-évaluation de projets. Pouvons-nous échanger ?",
            "Cadre logique": "Bonjour Clarius, j'ai vu votre portfolio et votre maîtrise du Cadre Logique m'intéresse vivement pour un projet.",
            "Pilotage de projets": "Bonjour Clarius, je souhaite échanger avec vous concernant vos compétences en Pilotage de projets de développement.",
            "KoboToolbox": "Bonjour Clarius, j'ai vu votre portfolio et je suis intéressé(e) par votre compétence en KoboToolbox et collecte mobile de données.",
            "Enquêtes terrain": "Bonjour Clarius, votre profil d'enquêteur et sociologue de terrain m'intéresse pour une mission d'évaluation.",
            "Allemand": "Guten Tag Clarius, ich habe Ihr Portfolio gesehen und möchte mich mit Ihnen über Ihre Deutschkenntnisse und linguistischen Fähigkeiten austauschen.",
            "Anglais": "Hello Clarius, I came across your portfolio and I would like to discuss potential collaboration requiring your English communication skills.",
            "Cybersécurité": "Bonjour Clarius, vos projets et compétences en cybersécurité défensive et sensibilisation m'intéressent beaucoup.",
            "Microsoft 365": "Bonjour Clarius, j'aimerais échanger avec vous sur vos compétences en Microsoft 365 et productivité de bureau.",
            "PowerPoint & Communication": "Bonjour Clarius, vos réalisations de présentations à fort impact et d'art oratoire ont retenu toute mon attention.",
            "HTML/CSS/JS": "Bonjour Clarius, vos réalisations web modernes et interactives m'intéressent pour un projet numérique."
        }
    },
    en: {
        meta: {
            title: "Clarius Emmanuel TCHALOKO | Linguist, Project Specialist & Cybersecurity",
            description: "Professional portfolio of Clarius Emmanuel Tchaloko - Master 1 German Linguistics (UAC), Bachelor in Sociology, M&E & Cybersecurity Expert."
        },
        nav: {
            roleTag: "Linguistics • Projects • Cybersecurity",
            home: "Home",
            about: "About",
            cv: "Curriculum",
            certifs: "Certificates",
            skills: "Skills",
            terminal: "Cyber Live Lab",
            contact: "Contact"
        },
        hero: {
            badge: "Master 1 Student • University of Abomey-Calavi (UAC)",
            greeting: "Hello, I am",
            typewriter: [
                "Linguist & German Language Specialist",
                "Sociologist & Field Survey Lead",
                "Monitoring & Evaluation & KoboToolbox Expert",
                "Defensive Cybersecurity & Data Advocate"
            ],
            description: "Combining linguistic precision with the social impact of development programs and the rigor of cybersecurity. Specializing in German linguistics, field sociology, project monitoring and evaluation, and cyber threat awareness.",
            ctaDiscover: "Explore my profile",
            ctaCv: "View Resume",
            ctaChat: "Let's Talk",
            statCertifs: "Verified Certificates",
            statLanguages: "Languages Spoken",
            statDegrees: "University Degrees",
            statusAvailable: "Available & Engaged",
            togglePoster: "Poster Version"
        },
        about: {
            sectionTag: "// ABOUT & BACKGROUND",
            title: "A versatile and interdisciplinary profile",
            subtitle: "From Germanic linguistics to field surveys, digital governance, and defensive cybersecurity.",
            academicTitle: "Academic Education",
            academicSub: "University of Abomey-Calavi (Benin)",
            degree1Title: "Master 1 in German Linguistics",
            degree1Desc: "Sociolinguistic perspectives, discourse analysis, morphosyntax, and professional translation.",
            degree2Title: "Bachelor of Arts in Sociology",
            degree2Desc: "Development sociology, qualitative & quantitative fieldwork methodologies, survey coordination.",
            approachTitle: "Approach & Vision",
            approachSub: "Field synergy, rigor & digital empowerment",
            bioP1: "My unique journey brings together fluency in modern languages (German, English, French, Fon) with proven field expertise in development projects and mobile data collection (KoboToolbox).",
            bioP2: "Passionate about digital resilience and information security, I hone practical skills in defensive cybersecurity: threat modeling, social engineering awareness, applied cryptography, and cyber hygiene."
        },
        lang: {
            levelNative: "Native",
            levelGerman: "C1 / Academic",
            levelEnglish: "B2 / Professional",
            levelFon: "Mother tongue"
        },
        cv: {
            tag: "Updated Official Document",
            title: "Curriculum Vitae of Clarius Emmanuel Tchaloko",
            desc: "Browse the interactive online resume directly or download the official PDF copy for your records.",
            versionInfo: "Multilingual formats available • Updated 2026",
            btnView: "View Resume",
            btnDownload: "Download Resume (PDF)",
            btnDownloadShort: "Download",
            modalTitle: "Resume Document Preview",
            viewerFallbackTitle: "CV Document Ready for Display",
            viewerFallbackDesc: "The official PDF file will render directly within this interactive viewer as soon as placed in the assets/cv/ directory."
        },
        certifs: {
            sectionTag: "// ACADEMY & CREDENTIALS",
            title: "Certificates & Credentials Gallery",
            subtitle: "14 verified certificates issued by renowned institutions (Campus AFD, Coursera, MTN Academy, Innovista, KoboToolbox, CEBELAE).",
            filterAll: "All (14)",
            filterProjets: "Project Management",
            filterTerrain: "Field & Data",
            filterCyber: "Digital & Cybersecurity",
            filterComm: "Communication & Languages",
            btnVerify: "Verify Credential",
            previewPending: "Preview coming soon",
            previewPendingDesc: "High-definition digital archiving is in progress. Verification remains available with issuing bodies."
        },
        skills: {
            sectionTag: "// SKILLS & DIRECT CONTACT",
            title: "Operational Capabilities",
            subtitle: "Click any skill's WhatsApp button to reach me directly with a pre-filled, contextual message.",
            btnContact: "Contact me on this topic"
        },
        cyber: {
            sectionTag: "// DEFENSIVE CYBER LAB",
            title: "Interactive Cybersecurity Terminal",
            subtitle: "100% defensive educational simulations executed locally inside your browser.",
            disclaimerTitle: "Ethical & Educational Notice:",
            disclaimerText: "All demonstrations below are strictly educational, defensive, and run client-side. No network packets are transmitted, no private data is collected.",
            tabPassword: "Password Strength",
            tabSha: "SHA-256 Hashing",
            tabLogs: "SIEM Log Analysis",
            tabCaesar: "Caesar Cipher"
        },
        contact: {
            sectionTag: "// LET'S COLLABORATE",
            title: "Get in Touch",
            subtitle: "Have a project opportunity, a training need, or a linguistic assignment? Send me a message.",
            locationLabel: "Location",
            emailLabel: "Direct Email",
            phoneLabel: "Professional WhatsApp",
            networkTitle: "Community & Engagements",
            networkDesc: "Active contributor in public speaking associations, UAC student organizations, and civic tech networks.",
            formName: "Full Name *",
            formEmail: "Email Address *",
            formSubject: "Subject *",
            formMessage: "Your Message *",
            btnSend: "Send Message",
            toastSuccess: "Thank you for reaching out! Clarius will get back to you shortly."
        },
        common: {
            close: "Close"
        },
        whatsappMessages: {
            "Suivi-évaluation": "Hello Clarius, I reviewed your portfolio and would like to discuss your expertise in Project Monitoring & Evaluation.",
            "Cadre logique": "Hello Clarius, I saw your portfolio and I am very interested in your logical framework and project planning skills.",
            "Pilotage de projets": "Hello Clarius, I would like to discuss potential collaboration in development project leadership.",
            "KoboToolbox": "Hello Clarius, I saw your portfolio and I am keen to discuss your skills in KoboToolbox and mobile data gathering.",
            "Enquêtes terrain": "Hello Clarius, your field sociology and surveyor profile matches our upcoming mission requirements.",
            "Allemand": "Guten Tag Clarius, ich habe Ihr Portfolio gesehen und möchte mich mit Ihnen über Ihre Deutschkenntnisse und linguistischen Fähigkeiten austauschen.",
            "Anglais": "Hello Clarius, I came across your portfolio and would like to connect regarding an opportunity requiring English proficiency.",
            "Cybersécurité": "Hello Clarius, your defensive cybersecurity simulations and security hygiene expertise caught my interest.",
            "Microsoft 365": "Hello Clarius, I would like to exchange with you regarding Microsoft 365 productivity workflows.",
            "PowerPoint & Communication": "Hello Clarius, your public speaking background and presentation design skills are impressive.",
            "HTML/CSS/JS": "Hello Clarius, your modern interactive web interfaces align well with our upcoming digital initiatives."
        }
    },
    de: {
        meta: {
            title: "Clarius Emmanuel TCHALOKO | Linguist, Projektexperte & Cybersicherheit",
            description: "Berufliches Portfolio von Clarius Emmanuel Tchaloko – Master 1 Germanistische Linguistik (UAC), Soziologie-Absolvent, Monitoring & Evaluation sowie Cybersicherheit."
        },
        nav: {
            roleTag: "Linguistik • Projekte • Cybersicherheit",
            home: "Startseite",
            about: "Über mich",
            cv: "Lebenslauf",
            certifs: "Zertifikate",
            skills: "Kompetenzen",
            terminal: "Cyber Live-Labor",
            contact: "Kontakt"
        },
        hero: {
            badge: "Master-1-Student • Universität Abomey-Calavi (UAC)",
            greeting: "Guten Tag, ich bin",
            typewriter: [
                "Linguist & Spezialist für deutsche Sprache",
                "Soziologe & Leiter von Feldumfragen",
                "Experte für Monitoring & Evaluation und KoboToolbox",
                "Engagiert in defensiver Cybersicherheit & Datenschutz"
            ],
            description: "Verbindung sprachlicher Präzision mit der gesellschaftlichen Wirkung von Entwicklungsprojekten und der Gründlichkeit defensiver Cybersicherheit. Spezialisiert auf Germanistik, empirische Soziologie und Sensibilisierung für Cyber-Gefahren.",
            ctaDiscover: "Profil entdecken",
            ctaCv: "Lebenslauf ansehen",
            ctaChat: "Austausch starten",
            statCertifs: "Anerkannte Zertifikate",
            statLanguages: "Sprachkenntnisse",
            statDegrees: "Universitätsabschlüsse",
            statusAvailable: "Verfügbar & Engagiert",
            togglePoster: "Poster-Ansicht"
        },
        about: {
            sectionTag: "// ÜBER MICH & WERDEGANG",
            title: "Ein vielseitiges und interdisziplinäres Profil",
            subtitle: "Von der germanistischen Sprachwissenschaft über empirische Feldanalysen bis hin zur digitalen Souveränität und Cybersicherheit.",
            academicTitle: "Universitäre Ausbildung",
            academicSub: "Universität Abomey-Calavi (Benin)",
            degree1Title: "Master 1 in Germanistischer Linguistik",
            degree1Desc: "Soziolinguistische Ansätze, Diskursanalyse, Morphosyntax und Fachübersetzung.",
            degree2Title: "Bachelor in Soziologie",
            degree2Desc: "Entwicklungssoziologie, qualitative und quantitative Erhebungsmethoden, Leitung von Datenerhebungen.",
            approachTitle: "Arbeitsweise & Leitbild",
            approachSub: "Felderfahrung, Präzision & digitale Kompetenz",
            bioP1: "Mein interdisziplinärer Werdegang verbindet fundierte Mehrsprachigkeit (Deutsch, Englisch, Französisch, Fon) mit praktischer Erfahrung im Management von Gemeinschaftsprojekten und mobiler Datenerfassung (KoboToolbox).",
            bioP2: "Mit Leidenschaft für digitale Sicherheit vertiefe ich fortlaufend meine Fähigkeiten in defensiver Cybersicherheit: Risikoanalyse, Sensibilisierung gegen Social Engineering, angewandte Verschlüsselung und IT-Hygiene."
        },
        lang: {
            levelNative: "Muttersprache",
            levelGerman: "C1 / Akademisch",
            levelEnglish: "B2 / Verhandlungssicher",
            levelFon: "Muttersprache"
        },
        cv: {
            tag: "Aktualisiertes Dokument",
            title: "Lebenslauf von Clarius Emmanuel Tchaloko",
            desc: "Betrachten Sie den Lebenslauf direkt in der interaktiven Online-Ansicht oder laden Sie das PDF-Dokument für Ihre Unterlagen herunter.",
            versionInfo: "Mehrsprachige Versionen verfügbar • Stand 2026",
            btnView: "Lebenslauf ansehen",
            btnDownload: "Lebenslauf herunterladen (PDF)",
            btnDownloadShort: "Download",
            modalTitle: "Vorschau des Lebenslaufs",
            viewerFallbackTitle: "Lebenslauf bereit zur Einbindung",
            viewerFallbackDesc: "Die offizielle PDF-Datei wird direkt in diesem interaktiven Viewer angezeigt, sobald sie im Verzeichnis assets/cv/ bereitsteht."
        },
        certifs: {
            sectionTag: "// AKADEMIE & ZERTIFIZIERUNGEN",
            title: "Galerie der Zertifikate & Nachweise",
            subtitle: "14 überprüfte Fortbildungsnachweise anerkannter Institutionen (Campus AFD, Coursera, MTN Academy, Innovista, KoboToolbox, CEBELAE).",
            filterAll: "Alle (14)",
            filterProjets: "Projektmanagement",
            filterTerrain: "Feldforschung & Daten",
            filterCyber: "Digitales & Cybersicherheit",
            filterComm: "Kommunikation & Sprachen",
            btnVerify: "Authentizität prüfen",
            previewPending: "Vorschau in Kürze verfügbar",
            previewPendingDesc: "Die hochauflösende digitale Archivierung wird vorbereitet. Eine Überprüfung über die ausstellende Institution ist gewährleistet."
        },
        skills: {
            sectionTag: "// KOMPETENZEN & DIREKTKONTAKT",
            title: "Praktische Fähigkeiten",
            subtitle: "Klicken Sie auf den WhatsApp-Button einer Kompetenz, um mir direkt eine themenspezifische Nachricht zu senden.",
            btnContact: "Hierzu kontaktieren"
        },
        cyber: {
            sectionTag: "// DEFENSIVES CYBER-LABOR",
            title: "Interaktives Cybersicherheits-Terminal",
            subtitle: "100 % defensive, pädagogische Simulationen in sicherer, lokaler Browserumgebung.",
            disclaimerTitle: "Ethischer & pädagogischer Hinweis:",
            disclaimerText: "Alle nachfolgenden Module dienen ausschließlich Bildungszwecken und werden lokal in Ihrem Browser simuliert. Es werden keinerlei Netzwerkpakete injiziert oder private Daten erhoben.",
            tabPassword: "Passwortstärke",
            tabSha: "SHA-256 Hashwert",
            tabLogs: "SIEM Log-Analyse",
            tabCaesar: "Cäsar-Verschlüsselung"
        },
        contact: {
            sectionTag: "// ZUSAMMENARBEIT",
            title: "Kontakt aufnehmen",
            subtitle: "Haben Sie ein Projektangebot, Trainingsbedarf oder möchten Sie sich fachlich austauschen? Schreiben Sie mir gerne.",
            locationLabel: "Standort",
            emailLabel: "Direkte E-Mail",
            phoneLabel: "Geschäftliches WhatsApp",
            networkTitle: "Engagement & Netzwerke",
            networkDesc: "Aktives Mitglied in Rhetorikclubs, studentischen Vereinigungen der UAC und bürgernahen Technologieforen.",
            formName: "Vollständiger Name *",
            formEmail: "E-Mail-Adresse *",
            formSubject: "Betreff *",
            formMessage: "Ihre Nachricht *",
            btnSend: "Nachricht absenden",
            toastSuccess: "Vielen Dank für Ihre Nachricht! Clarius wird sich in Kürze bei Ihnen melden."
        },
        common: {
            close: "Schließen"
        },
        whatsappMessages: {
            "Suivi-évaluation": "Guten Tag Clarius, ich habe Ihr Portfolio gesehen und interessiere mich für Ihre Expertise im Bereich Monitoring & Evaluation.",
            "Cadre logique": "Guten Tag Clarius, Ihre Kenntnisse im Logischen Rahmenplan (Logical Framework) sind für unsere Projektplanung von großem Interesse.",
            "Pilotage de projets": "Guten Tag Clarius, ich möchte mich gerne mit Ihnen über Entwicklungsprojekt-Kooperationen austauschen.",
            "KoboToolbox": "Guten Tag Clarius, Ihre Expertise mit KoboToolbox und mobiler Datenerhebung ist sehr interessant für uns.",
            "Enquêtes terrain": "Guten Tag Clarius, Ihr Profil als Feldforscher und Soziologe passt ideal zu unserem Erhebungsbedarf.",
            "Allemand": "Guten Tag Clarius, ich habe Ihr Portfolio gesehen und möchte mich mit Ihnen über Ihre Deutschkenntnisse und linguistischen Fähigkeiten austauschen.",
            "Anglais": "Guten Tag Clarius, ich habe Ihr Portfolio gesehen und möchte Sie bezüglich eines internationalen Vorhabens kontaktieren.",
            "Cybersécurité": "Guten Tag Clarius, Ihre defensiven Cybersicherheits-Simulationen und IT-Hygiene-Kenntnisse haben mich sehr angesprochen.",
            "Microsoft 365": "Guten Tag Clarius, ich würde mich gerne mit Ihnen über Microsoft 365 und digitale Produktivität austauschen.",
            "PowerPoint & Communication": "Guten Tag Clarius, Ihre Erfahrung in Rhetorik und professioneller Foliengestaltung ist beeindruckend.",
            "HTML/CSS/JS": "Guten Tag Clarius, Ihre modernen Weblösungen und interaktiven Benutzeroberflächen interessieren mich für ein digitales Projekt."
        }
    }
};

// Langue courante
let currentLang = 'fr';

// =============================================================================
// 2. GESTION DE LA LANGUE & I18N
// =============================================================================
function initLanguage() {
    let saved = null;
    try {
        saved = localStorage.getItem('cet_portfolio_lang');
    } catch (e) {
        console.warn('localStorage not accessible for lang:', e);
    }

    if (!saved) {
        const browserLang = (navigator.language || navigator.userLanguage || 'fr').toLowerCase();
        if (browserLang.startsWith('de')) saved = 'de';
        else if (browserLang.startsWith('en')) saved = 'en';
        else saved = 'fr';
    }

    changeLanguage(saved || 'fr', false);
}

function changeLanguage(lang, restartTypewriter = true) {
    if (!i18n[lang]) lang = 'fr';
    currentLang = lang;

    try {
        localStorage.setItem('cet_portfolio_lang', lang);
    } catch (e) {}

    // Mise à jour balise HTML lang, title & description
    document.documentElement.lang = lang;
    if (i18n[lang].meta) {
        document.title = i18n[lang].meta.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', i18n[lang].meta.description);
    }

    // Mise à jour des boutons de langue
    ['fr', 'en', 'de'].forEach(l => {
        const btn = document.getElementById(`lang-btn-${l}`);
        if (btn) {
            if (l === lang) {
                btn.className = "lang-btn px-2 py-1 rounded transition-all bg-cyan-500 text-white font-bold";
                btn.setAttribute('aria-pressed', 'true');
            } else {
                btn.className = "lang-btn px-2 py-1 rounded transition-all text-slate-400 hover:text-white";
                btn.setAttribute('aria-pressed', 'false');
            }
        }
    });

    // Traduction de tous les éléments ayant l'attribut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = getTranslation(lang, key);
        if (translation !== undefined) {
            el.textContent = translation;
        }
    });

    // Traduction des placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translation = getTranslation(lang, key);
        if (translation !== undefined) {
            el.setAttribute('placeholder', translation);
        }
    });

    // Re-rendre les cartes dynamiques
    renderCertificates();
    renderSkills();

    // Adapter le CV à la langue
    updateCvLanguageLinks();

    // Redémarrer l'animation typewriter si demandé
    if (restartTypewriter) {
        startTypewriter();
    }
}

function getTranslation(lang, keyPath) {
    const keys = keyPath.split('.');
    let obj = i18n[lang] || i18n.fr;
    for (let k of keys) {
        if (!obj || obj[k] === undefined) {
            obj = i18n.fr; // fallback FR
            for (let fk of keys) {
                if (!obj || obj[fk] === undefined) return undefined;
                obj = obj[fk];
            }
            return obj;
        }
        obj = obj[k];
    }
    return obj;
}

function updateCvLanguageLinks() {
    const downloadBtn = document.getElementById('download-cv-btn');
    const modalDownloadBtn = document.getElementById('modal-download-cv-btn');
    const langHint = document.getElementById('cv-modal-lang-hint');

    const cvFileName = `assets/cv/cv_${currentLang}.pdf`;
    const cvFallback = 'assets/cv/cv_fr.pdf';

    const langLabel = currentLang === 'de' ? 'Deutsch' : (currentLang === 'en' ? 'English' : 'Français');

    if (downloadBtn) {
        downloadBtn.href = cvFileName;
        downloadBtn.setAttribute('download', `CV_Clarius_Emmanuel_Tchaloko_${currentLang.toUpperCase()}.pdf`);
    }
    if (modalDownloadBtn) {
        modalDownloadBtn.href = cvFileName;
        modalDownloadBtn.setAttribute('download', `CV_Clarius_Emmanuel_Tchaloko_${currentLang.toUpperCase()}.pdf`);
    }
    if (langHint) {
        langHint.textContent = `Version : ${langLabel}`;
    }
}

// =============================================================================
// 3. CANVAS DE PARTICULES DYNAMIQUE
// =============================================================================
const canvas = document.getElementById('bg-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let particlesArray = [];
let animationFrameId = null;
let isTabVisible = true;

function initCanvas() {
    if (!canvas || !ctx) return;
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    particlesArray = [];
    const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 18000), 75);
    for (let i = 0; i < count; i++) {
        particlesArray.push(new Particle());
    }

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animateParticles();
    }
}

function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * (canvas ? canvas.width : window.innerWidth);
        this.y = Math.random() * (canvas ? canvas.height : window.innerHeight);
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.color = Math.random() > 0.5 ? '6, 182, 212' : '139, 92, 246';
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            this.reset();
        }
    }
    draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animateParticles() {
    if (!isTabVisible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            // Lignes de connexion entre particules proches
            for (let j = i + 1; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - dist / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    animationFrameId = requestAnimationFrame(animateParticles);
}

document.addEventListener('visibilitychange', () => {
    isTabVisible = !document.hidden;
    if (isTabVisible && !animationFrameId && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animateParticles();
    } else if (!isTabVisible && animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
});

// =============================================================================
// 4. ANIMATION TYPEWRITER DU HERO
// =============================================================================
let typewriterTimeout = null;
let twIndex = 0;
let charIndex = 0;
let isDeleting = false;

function startTypewriter() {
    const el = document.getElementById('hero-typewriter');
    if (!el) return;

    if (typewriterTimeout) {
        clearTimeout(typewriterTimeout);
        typewriterTimeout = null;
    }

    twIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typeLoop();
}

function typeLoop() {
    const el = document.getElementById('hero-typewriter');
    if (!el) return;

    const phrases = (i18n[currentLang] && i18n[currentLang].hero.typewriter) ? i18n[currentLang].hero.typewriter : i18n.fr.hero.typewriter;
    const currentPhrase = phrases[twIndex % phrases.length];

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.textContent = currentPhrase;
        return;
    }

    if (isDeleting) {
        el.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        el.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let delta = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
        delta = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        twIndex++;
        delta = 400;
    }

    typewriterTimeout = setTimeout(typeLoop, delta);
}

// =============================================================================
// 5. COMPTEURS ANIMÉS
// =============================================================================
function initCounters() {
    const counters = document.querySelectorAll('.counter-stat');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'), 10) || 0;
                animateCount(entry.target, target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

function animateCount(element, target) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        element.textContent = target;
        return;
    }
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeOut * target);
        element.textContent = currentVal;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    requestAnimationFrame(updateCounter);
}

// =============================================================================
// 6. PHOTO PROFILE TILT 3D & BASCULE POSTER
// =============================================================================
let isPosterActive = false;

function initPhotoTilt() {
    const wrapper = document.getElementById('hero-photo-wrapper');
    if (!wrapper || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (window.innerWidth < 768) return; // Désactivé sur mobile

    wrapper.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        wrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    wrapper.addEventListener('mouseleave', () => {
        wrapper.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
}

function togglePosterPhoto(e) {
    if (e) e.stopPropagation();
    const img = document.getElementById('profile-photo-img');
    if (!img) return;

    isPosterActive = !isPosterActive;
    if (isPosterActive) {
        img.src = 'assets/photo-poster.jpg';
        showToast('Version poster chargée !');
    } else {
        img.src = 'assets/photo.jpg';
        showToast('Photo portrait chargée.');
    }
}

// =============================================================================
// 7. THÈME SOMBRE / CLAIR & MENU MOBILE
// =============================================================================
function initTheme() {
    let saved = null;
    try {
        saved = localStorage.getItem('cet_portfolio_theme');
    } catch (e) {}

    if (saved === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        updateThemeIcon(true);
    } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        updateThemeIcon(false);
    }
}

function toggleTheme() {
    const isLight = document.documentElement.classList.contains('light');
    if (isLight) {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        try { localStorage.setItem('cet_portfolio_theme', 'dark'); } catch (e) {}
        updateThemeIcon(false);
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        try { localStorage.setItem('cet_portfolio_theme', 'light'); } catch (e) {}
        updateThemeIcon(true);
    }
}

function updateThemeIcon(isLight) {
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    if (isLight) {
        icon.className = 'fa-solid fa-sun text-base text-amber-400';
    } else {
        icon.className = 'fa-solid fa-moon text-base text-slate-300';
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    if (!menu) return;
    menu.classList.toggle('hidden');
    if (icon) {
        if (menu.classList.contains('hidden')) {
            icon.className = 'fa-solid fa-bars text-lg';
        } else {
            icon.className = 'fa-solid fa-xmark text-lg';
        }
    }
}

// =============================================================================
// 8. GALERIE DES 14 CERTIFICATS AVEC FILTRES ET LIGHTBOX
// =============================================================================
const certificatesData = [
    {
        id: "afd-se",
        title: "Suivi et évaluation des projets de développement",
        issuer: "Campus AFD",
        category: "projets",
        file: "assets/certificats/afd-suivi-evaluation.jpg",
        date: "2024",
        verifyUrl: ""
    },
    {
        id: "afd-cl",
        title: "Le cadre logique : concevoir et piloter un projet",
        issuer: "Campus AFD",
        category: "projets",
        file: "assets/certificats/afd-cadre-logique.jpg",
        date: "2024",
        verifyUrl: ""
    },
    {
        id: "afd-pp",
        title: "Pilotage et gouvernance des projets de développement",
        issuer: "Campus AFD",
        category: "projets",
        file: "assets/certificats/afd-pilotage-projets.jpg",
        date: "2024",
        verifyUrl: ""
    },
    {
        id: "afd-dec",
        title: "Décentralisation et gouvernance locale",
        issuer: "Campus AFD",
        category: "projets",
        file: "assets/certificats/afd-decentralisation.jpg",
        date: "2024",
        verifyUrl: ""
    },
    {
        id: "mtn-m365",
        title: "Microsoft 365 Digital Skills & Productivity",
        issuer: "MTN Skills Academy",
        category: "numerique",
        file: "assets/certificats/mtn-microsoft-365.jpg",
        date: "2024",
        verifyUrl: ""
    },
    {
        id: "kobo-ess",
        title: "KoboToolbox Essentials : Collecte de données mobiles",
        issuer: "KoboToolbox Academy",
        category: "terrain",
        file: "assets/certificats/kobotoolbox-essentials.jpg",
        date: "2024",
        verifyUrl: ""
    },
    {
        id: "tobilly-ci",
        title: "Animateur-Enquêteur de terrain & Collecte sociologique",
        issuer: "Cabinet Tobilly CI",
        category: "terrain",
        file: "assets/certificats/tobilly-ci-animateur.jpg",
        date: "2023",
        verifyUrl: ""
    },
    {
        id: "mtn-ia",
        title: "Bases et Fondements de l'Intelligence Artificielle",
        issuer: "MTN Skills Academy",
        category: "numerique",
        file: "assets/certificats/mtn-bases-ia.jpg",
        date: "2024",
        verifyUrl: ""
    },
    {
        id: "mtn-net",
        title: "Fondamentaux d'Internet, Réseaux & Protocoles",
        issuer: "MTN Skills Academy",
        category: "numerique",
        file: "assets/certificats/mtn-fondamentaux-internet.jpg",
        date: "2024",
        verifyUrl: ""
    },
    {
        id: "innovista-cyber",
        title: "Cyber Security Defensive Practices & Digital Marketing",
        issuer: "Innovista",
        category: "numerique",
        file: "assets/certificats/innovista-cyber-marketing.jpg",
        date: "2024",
        verifyUrl: ""
    },
    {
        id: "coursera-ppt-1",
        title: "Work Smarter with Microsoft PowerPoint : Design & Layout",
        issuer: "Coursera",
        category: "communication",
        file: "assets/certificats/coursera-powerpoint-1.jpg",
        date: "2023",
        verifyUrl: ""
    },
    {
        id: "coursera-ppt-2",
        title: "Advanced Microsoft PowerPoint : Impactful Storytelling",
        issuer: "Coursera",
        category: "communication",
        file: "assets/certificats/coursera-powerpoint-2.jpg",
        date: "2023",
        verifyUrl: ""
    },
    {
        id: "ola-speakers",
        title: "Art Oratoire, Prise de Parole en Public & Leadership",
        issuer: "Ola Speakers Academy",
        category: "communication",
        file: "assets/certificats/ola-speakers-art-oratoire.jpg",
        date: "2023",
        verifyUrl: ""
    },
    {
        id: "cebelae-anglais",
        title: "Attestation de Formation en Anglais Général & Professionnel",
        issuer: "CEBELAE (Centre Béninois des Langues Étrangères)",
        category: "communication",
        file: "assets/certificats/cebelae-cours-anglais.jpg",
        date: "2023",
        verifyUrl: ""
    }
];

let activeCertFilter = 'all';
let currentLightboxIndex = 0;
let filteredCerts = [...certificatesData];

function renderCertificates() {
    const grid = document.getElementById('certificates-grid');
    if (!grid) return;

    filteredCerts = activeCertFilter === 'all'
        ? certificatesData
        : certificatesData.filter(c => c.category === activeCertFilter);

    grid.innerHTML = '';

    filteredCerts.forEach((cert, idx) => {
        const card = document.createElement('div');
        card.className = "glass glow-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group cursor-pointer transition-all";
        card.onclick = () => openCertLightbox(idx);

        card.innerHTML = `
            <div class="relative aspect-[16/10] bg-slate-900/80 flex items-center justify-center p-4 overflow-hidden border-b border-white/10">
                <img src="${cert.file}" alt="${cert.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="hidden w-full h-full flex-col items-center justify-center text-slate-400 space-y-2">
                    <i class="fa-solid fa-file-shield text-3xl text-cyan-400/60"></i>
                    <span class="text-[11px] font-mono text-center text-slate-400 px-2">${getTranslation(currentLang, 'certifs.previewPending')}</span>
                </div>
                <div class="absolute top-3 left-3">
                    <span class="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                        ${cert.issuer}
                    </span>
                </div>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                    <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider">${cert.date}</span>
                    <h4 class="font-bold text-slate-100 text-sm group-hover:text-cyan-400 transition-colors line-clamp-2 mt-1">
                        ${cert.title}
                    </h4>
                </div>
                <div class="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-slate-400">
                    <span class="text-[11px]"><i class="fa-solid fa-magnifying-glass-plus mr-1 text-cyan-400"></i>Agrandir</span>
                    <span class="font-mono text-[10px] text-purple-400">#${cert.id}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterCertificates(category) {
    activeCertFilter = category;
    document.querySelectorAll('.cert-filter-btn').forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.className = "cert-filter-btn active px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-white transition-all shadow-md";
        } else {
            btn.className = "cert-filter-btn px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 transition-all border border-white/10";
        }
    });
    renderCertificates();
}

function openCertLightbox(index) {
    currentLightboxIndex = index;
    const cert = filteredCerts[currentLightboxIndex];
    if (!cert) return;

    const modal = document.getElementById('cert-lightbox');
    const title = document.getElementById('lightbox-title');
    const badge = document.getElementById('lightbox-badge');
    const date = document.getElementById('lightbox-date');
    const counter = document.getElementById('lightbox-counter');
    const img = document.getElementById('lightbox-img');
    const placeholder = document.getElementById('lightbox-placeholder');
    const verifyBtn = document.getElementById('lightbox-verify-btn');

    if (!modal) return;

    title.textContent = cert.title;
    badge.textContent = cert.issuer;
    date.textContent = `${cert.date} • Référence ID : ${cert.id}`;
    counter.textContent = `${currentLightboxIndex + 1} / ${filteredCerts.length}`;

    if (verifyBtn) {
        if (cert.verifyUrl) {
            verifyBtn.href = cert.verifyUrl;
            verifyBtn.classList.remove('hidden');
        } else {
            verifyBtn.classList.add('hidden');
        }
    }

    img.src = cert.file;
    img.onload = () => {
        img.classList.remove('hidden');
        placeholder.classList.add('hidden');
    };
    img.onerror = () => {
        img.classList.add('hidden');
        placeholder.classList.remove('hidden');
    };

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCertLightbox() {
    const modal = document.getElementById('cert-lightbox');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function nextLightboxCert() {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredCerts.length;
    openCertLightbox(currentLightboxIndex);
}

function prevLightboxCert() {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredCerts.length) % filteredCerts.length;
    openCertLightbox(currentLightboxIndex);
}

// =============================================================================
// 9. COMPÉTENCES AVEC BOUTONS WHATSAPP CONTEXTUALISÉS
// =============================================================================
const skillsData = [
    { name: "Suivi-évaluation", category: "projets", level: "92%", icon: "fa-chart-line", color: "from-cyan-500 to-blue-500" },
    { name: "Cadre logique", category: "projets", level: "90%", icon: "fa-diagram-project", color: "from-blue-500 to-indigo-500" },
    { name: "Pilotage de projets", category: "projets", level: "88%", icon: "fa-bars-progress", color: "from-purple-500 to-pink-500" },
    { name: "KoboToolbox", category: "terrain", level: "95%", icon: "fa-mobile-screen-button", color: "from-emerald-500 to-teal-500" },
    { name: "Enquêtes terrain", category: "terrain", level: "94%", icon: "fa-users-viewfinder", color: "from-teal-500 to-cyan-500" },
    { name: "Allemand", category: "langues", level: "C1 (Linguistique)", icon: "fa-language", color: "from-amber-500 to-orange-500" },
    { name: "Anglais", category: "langues", level: "B2 (CEBELAE)", icon: "fa-earth-americas", color: "from-indigo-500 to-blue-500" },
    { name: "Cybersécurité", category: "cyber", level: "85%", icon: "fa-shield-halved", color: "from-red-500 to-rose-500" },
    { name: "Microsoft 365", category: "numerique", level: "95%", icon: "fa-file-lines", color: "from-blue-600 to-cyan-500" },
    { name: "PowerPoint & Communication", category: "numerique", level: "96%", icon: "fa-person-chalkboard", color: "from-orange-500 to-amber-500" },
    { name: "HTML/CSS/JS", category: "cyber", level: "80%", icon: "fa-code", color: "from-cyan-400 to-emerald-400" }
];

function renderSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const btnText = getTranslation(currentLang, 'skills.btnContact') || "Me contacter à ce sujet";
    const phone = "2290157812140";

    skillsData.forEach(sk => {
        const defaultMsg = (i18n[currentLang] && i18n[currentLang].whatsappMessages && i18n[currentLang].whatsappMessages[sk.name])
            ? i18n[currentLang].whatsappMessages[sk.name]
            : `Bonjour Clarius, j'ai vu votre portfolio et souhaite échanger sur votre compétence en ${sk.name}.`;

        const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMsg)}`;

        const card = document.createElement('div');
        card.className = "glass glow-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4";
        card.innerHTML = `
            <div class="flex items-start justify-between">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-tr ${sk.color} text-white flex items-center justify-center text-xl shadow-lg">
                    <i class="fa-solid ${sk.icon}"></i>
                </div>
                <span class="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-white/5 border border-white/10 text-cyan-300">
                    ${sk.level}
                </span>
            </div>
            <div>
                <h4 class="font-bold text-slate-100 text-base">${sk.name}</h4>
                <div class="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
                    <div class="bg-gradient-to-r ${sk.color} h-1.5 rounded-full" style="width: ${sk.level.includes('%') ? sk.level : '90%'}"></div>
                </div>
            </div>
            <div class="pt-2">
                <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all group">
                    <i class="fa-brands fa-whatsapp text-sm group-hover:scale-110 transition-transform"></i>
                    <span>${btnText}</span>
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// =============================================================================
// 10. LIVE LAB CYBERSÉCURITÉ DÉFENSIF (4 SCÉNARIOS)
// =============================================================================
let currentTerminalTab = 'password';
let isTerminalPlaying = true;
let terminalTimer = null;

const terminalScripts = {
    password: {
        code: [
            "// Scénario A : Analyseur Défensif de Force de Mot de Passe",
            "function evaluatePasswordSecurity(password) {",
            "    let score = 0;",
            "    if (password.length >= 12) score += 25;",
            "    if (/[A-Z]/.test(password)) score += 25;",
            "    if (/[0-9]/.test(password)) score += 25;",
            "    if (/[^A-Za-z0-9]/.test(password)) score += 25;",
            "    return { score, isRobust: score >= 75 };",
            "}"
        ],
        interactiveHTML: `
            <div class="space-y-3">
                <label class="block text-xs font-semibold text-slate-300">Testez la robustesse d'une chaîne (traitement 100% local, rien n'est stocké) :</label>
                <div class="relative">
                    <input type="password" id="sim-pwd-input" oninput="runPasswordAssessment(this.value)" placeholder="Tapez un mot de passe d'exemple..." class="w-full px-3 py-2 rounded-lg bg-black/40 border border-cyan-500/30 font-mono text-xs text-white focus:outline-none focus:border-cyan-400">
                    <button type="button" onclick="togglePasswordVisibility()" class="absolute right-3 top-2.5 text-slate-400 hover:text-white text-xs"><i class="fa-solid fa-eye" id="sim-pwd-eye"></i></button>
                </div>
                <div class="space-y-1">
                    <div class="flex justify-between text-xs font-mono">
                        <span id="pwd-score-label">Score : 0%</span>
                        <span id="pwd-strength-text" class="text-rose-400 font-bold">Faible</span>
                    </div>
                    <div class="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div id="pwd-score-bar" class="bg-rose-500 h-2 transition-all duration-300" style="width: 0%"></div>
                    </div>
                </div>
                <div id="pwd-tips" class="text-[11px] text-slate-400 space-y-1 font-mono">
                    • Conseils : minimum 12 caractères, majuscules, minuscules, chiffres et symboles.
                </div>
            </div>
        `
    },
    sha256: {
        code: [
            "// Scénario B : Hachage Cryptographique SHA-256 via Web Crypto API",
            "async function computeSha256(text) {",
            "    const msgUint8 = new TextEncoder().encode(text);",
            "    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);",
            "    const hashArray = Array.from(new Uint8Array(hashBuffer));",
            "    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');",
            "}",
            "// Démontre l'effet avalanche : 1 bit changé = empreinte entièrement mutée."
        ],
        interactiveHTML: `
            <div class="space-y-3">
                <label class="block text-xs font-semibold text-slate-300">Calculateur d'empreinte SHA-256 instantané :</label>
                <input type="text" id="sim-sha-input" oninput="runSha256Demo(this.value)" value="Clarius" placeholder="Saisissez un message..." class="w-full px-3 py-2 rounded-lg bg-black/40 border border-cyan-500/30 font-mono text-xs text-white focus:outline-none focus:border-cyan-400">
                <div class="p-3 rounded-lg bg-black/60 border border-white/10 font-mono text-xs">
                    <div class="text-slate-400 text-[10px]">DIGEST SHA-256 :</div>
                    <div id="sha256-output" class="text-cyan-300 break-all select-all font-bold mt-1">Calcul en cours...</div>
                </div>
                <div class="text-[11px] text-slate-400 font-mono">
                    <span class="text-purple-400">&bull; Effet avalanche :</span> Changez une seule lettre pour observer une transformation totale du hash.
                </div>
            </div>
        `
    },
    bruteforce: {
        code: [
            "// Scénario C : Détection de tentative Brute-Force (Règles SIEM)",
            "const THRESHOLD = 5; // tentatives par minute",
            "function inspectLoginEvent(ip, status) {",
            "    if (status === 'FAILURE') {",
            "        tracker[ip] = (tracker[ip] || 0) + 1;",
            "        if (tracker[ip] >= THRESHOLD) triggerSecurityAlert(ip);",
            "    }",
            "}"
        ],
        interactiveHTML: `
            <div class="space-y-3 font-mono text-xs">
                <div class="flex items-center justify-between">
                    <span class="text-slate-300 font-semibold">Simulateur d'ingestion de logs serveur :</span>
                    <button onclick="injectSimulatedLog()" class="px-2.5 py-1 rounded bg-rose-500/20 border border-rose-500/40 text-rose-300 hover:bg-rose-500/30 transition-colors">
                        <i class="fa-solid fa-plus-circle mr-1"></i>Simuler Échec Connexion
                    </button>
                </div>
                <div id="siem-logs-window" class="p-3 rounded-lg bg-black/70 border border-white/10 h-32 overflow-y-auto space-y-1 text-[11px]">
                    <div class="text-slate-400">[SYSTEM] SIEM Engine Initialized. Monitoring port 443 / auth logs.</div>
                </div>
            </div>
        `
    },
    caesar: {
        code: [
            "// Scénario D : Démonstrateur Pédagogique de Chiffrement de César",
            "function caesarCipher(str, shift = 3) {",
            "    return str.split('').map(char => {",
            "        const code = char.charCodeAt(0);",
            "        if (code >= 65 && code <= 90) return String.fromCharCode((code - 65 + shift) % 26 + 65);",
            "        if (code >= 97 && code <= 122) return String.fromCharCode((code - 97 + shift) % 26 + 97);",
            "        return char;",
            "    }).join('');",
            "}"
        ],
        interactiveHTML: `
            <div class="space-y-3 font-mono text-xs">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[11px] text-slate-300 mb-1">Message clair :</label>
                        <input type="text" id="sim-caesar-input" oninput="runCaesarDemo()" value="CYBER DEFENSE 2026" class="w-full px-3 py-2 rounded-lg bg-black/40 border border-cyan-500/30 text-white focus:outline-none">
                    </div>
                    <div>
                        <div class="flex justify-between text-[11px] text-slate-300 mb-1">
                            <span>Décalage (Shift) :</span>
                            <span id="caesar-shift-val" class="text-cyan-400 font-bold">3</span>
                        </div>
                        <input type="range" id="sim-caesar-shift" min="1" max="25" value="3" oninput="runCaesarDemo()" class="w-full accent-cyan-400">
                    </div>
                </div>
                <div class="p-3 rounded-lg bg-black/60 border border-white/10">
                    <span class="text-slate-400 text-[10px]">RÉSULTAT DU CHIFFREMENT :</span>
                    <div id="caesar-output" class="text-emerald-400 font-bold text-sm tracking-wider mt-1">...</div>
                </div>
            </div>
        `
    }
};

function switchTerminalScenario(scenario) {
    currentTerminalTab = scenario;
    ['password', 'sha256', 'bruteforce', 'caesar'].forEach(tab => {
        const btn = document.getElementById(`tab-term-${tab}`);
        if (btn) {
            if (tab === scenario) {
                btn.className = "term-tab px-3 py-2 rounded-t-lg bg-white/10 text-cyan-400 font-bold border-b-2 border-cyan-400 flex items-center gap-1.5";
            } else {
                btn.className = "term-tab px-3 py-2 rounded-t-lg text-slate-400 hover:text-white flex items-center gap-1.5";
            }
        }
    });

    renderTerminalContent();
}

function renderTerminalContent() {
    const codeDisplay = document.getElementById('terminal-code-display');
    const interactiveArea = document.getElementById('terminal-interactive-area');
    const statusLeft = document.getElementById('term-status-left');
    const data = terminalScripts[currentTerminalTab];

    if (!codeDisplay || !interactiveArea || !data) return;

    // Code avec coloration syntaxique
    codeDisplay.innerHTML = `<pre><code>${highlightCode(data.code.join('\n'))}</code></pre>`;
    interactiveArea.innerHTML = data.interactiveHTML;

    if (currentTerminalTab === 'password') {
        runPasswordAssessment('');
        if (statusLeft) statusLeft.textContent = "> Module Password Audit prêt.";
    } else if (currentTerminalTab === 'sha256') {
        const input = document.getElementById('sim-sha-input');
        runSha256Demo(input ? input.value : 'Clarius');
        if (statusLeft) statusLeft.textContent = "> Module SHA-256 Web Crypto activé.";
    } else if (currentTerminalTab === 'caesar') {
        runCaesarDemo();
        if (statusLeft) statusLeft.textContent = "> Module César Cipher actif.";
    } else if (currentTerminalTab === 'bruteforce') {
        if (statusLeft) statusLeft.textContent = "> Module SIEM Alerting en écoute passive.";
    }
}

function highlightCode(rawCode) {
    return rawCode
        .replace(/(\/\/.+)/g, '<span class="token-comment">$1</span>')
        .replace(/\b(async|function|return|const|let|if|else)\b/g, '<span class="token-keyword">$1</span>')
        .replace(/\b(evaluatePasswordSecurity|computeSha256|inspectLoginEvent|triggerSecurityAlert|caesarCipher)\b/g, '<span class="token-function">$1</span>')
        .replace(/('SHA-256'|'FAILURE')/g, '<span class="token-string">$1</span>')
        .replace(/\b([0-9]+)\b/g, '<span class="token-number">$1</span>');
}

function toggleTerminalPlayPause() {
    isTerminalPlaying = !isTerminalPlaying;
    const icon = document.getElementById('play-pause-icon');
    if (icon) {
        icon.className = isTerminalPlaying ? "fa-solid fa-pause text-xs" : "fa-solid fa-play text-xs";
    }
    showToast(isTerminalPlaying ? "Terminal en lecture" : "Terminal en pause");
}

function restartTerminalScenario() {
    renderTerminalContent();
    showToast("Scénario réinitialisé");
}

// Scénario A : Password Audit
function runPasswordAssessment(pwd) {
    const scoreBar = document.getElementById('pwd-score-bar');
    const scoreLabel = document.getElementById('pwd-score-label');
    const strengthText = document.getElementById('pwd-strength-text');
    if (!scoreBar || !scoreLabel || !strengthText) return;

    if (!pwd) {
        scoreBar.style.width = '0%';
        scoreBar.className = "h-2 bg-slate-700 transition-all duration-300";
        scoreLabel.textContent = "Score : 0%";
        strengthText.textContent = "Aucun";
        strengthText.className = "text-slate-400 font-bold";
        return;
    }

    let score = 0;
    if (pwd.length >= 8) score += 20;
    if (pwd.length >= 12) score += 20;
    if (/[A-Z]/.test(pwd)) score += 20;
    if (/[0-9]/.test(pwd)) score += 20;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 20;

    scoreBar.style.width = `${score}%`;
    scoreLabel.textContent = `Score : ${score}%`;

    if (score <= 40) {
        scoreBar.className = "h-2 bg-rose-500 transition-all duration-300";
        strengthText.textContent = "Faible / Vulnérable";
        strengthText.className = "text-rose-400 font-bold";
    } else if (score <= 60) {
        scoreBar.className = "h-2 bg-amber-500 transition-all duration-300";
        strengthText.textContent = "Moyen";
        strengthText.className = "text-amber-400 font-bold";
    } else {
        scoreBar.className = "h-2 bg-emerald-500 transition-all duration-300";
        strengthText.textContent = "Robuste / Fort";
        strengthText.className = "text-emerald-400 font-bold";
    }
}

function togglePasswordVisibility() {
    const input = document.getElementById('sim-pwd-input');
    const eye = document.getElementById('sim-pwd-eye');
    if (!input || !eye) return;
    if (input.type === 'password') {
        input.type = 'text';
        eye.className = 'fa-solid fa-eye-slash';
    } else {
        input.type = 'password';
        eye.className = 'fa-solid fa-eye';
    }
}

// Scénario B : SHA-256 via Web Crypto
async function runSha256Demo(text) {
    const output = document.getElementById('sha256-output');
    if (!output) return;

    try {
        const msgUint8 = new TextEncoder().encode(text || '');
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        output.textContent = hashHex;
    } catch (e) {
        output.textContent = "Support WebCrypto limité sur ce navigateur";
    }
}

// Scénario C : Logs Brute-Force
let simFailedAttempts = 0;
function injectSimulatedLog() {
    const logBox = document.getElementById('siem-logs-window');
    if (!logBox) return;

    simFailedAttempts++;
    const now = new Date().toTimeString().split(' ')[0];
    const fakeIp = "192.168.1.105";

    const entry = document.createElement('div');
    if (simFailedAttempts < 5) {
        entry.className = "text-amber-400";
        entry.textContent = `[${now}] WARN: Authentication failure for user 'admin' from IP ${fakeIp} (Attempt ${simFailedAttempts}/5)`;
    } else {
        entry.className = "text-rose-400 font-bold bg-rose-950/40 p-1 rounded border border-rose-500/50";
        entry.textContent = `[${now}] ALERT [BRUTE-FORCE DETECTED] Threshold exceeded! Auto-blocking IP ${fakeIp} for 3600s.`;
        simFailedAttempts = 0;
    }

    logBox.appendChild(entry);
    logBox.scrollTop = logBox.scrollHeight;
}

// Scénario D : Chiffrement César
function runCaesarDemo() {
    const input = document.getElementById('sim-caesar-input');
    const shiftInput = document.getElementById('sim-caesar-shift');
    const shiftVal = document.getElementById('caesar-shift-val');
    const output = document.getElementById('caesar-output');

    if (!input || !shiftInput || !output) return;

    const shift = parseInt(shiftInput.value, 10) || 3;
    if (shiftVal) shiftVal.textContent = shift;

    const raw = input.value || '';
    const res = raw.split('').map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCharCode((code - 65 + shift) % 26 + 65);
        if (code >= 97 && code <= 122) return String.fromCharCode((code - 97 + shift) % 26 + 97);
        return char;
    }).join('');

    output.textContent = res;
}

// =============================================================================
// 11. COMMAND PALETTE (CTRL+K) & NAVIGATION
// =============================================================================
const commandList = [
    { name: "Aller à l'Accueil", action: () => scrollToSection('hero') },
    { name: "À propos & Parcours", action: () => scrollToSection('about') },
    { name: "Consulter le Curriculum Vitae", action: () => openCvModal() },
    { name: "Galerie des Certificats", action: () => scrollToSection('certifications') },
    { name: "Compétences & WhatsApp", action: () => scrollToSection('skills') },
    { name: "Live Terminal Cybersécurité", action: () => scrollToSection('cyber-terminal') },
    { name: "Prendre Contact", action: () => scrollToSection('contact') },
    { name: "Changer langue : Français", action: () => changeLanguage('fr') },
    { name: "Changer langue : English", action: () => changeLanguage('en') },
    { name: "Changer langue : Deutsch", action: () => changeLanguage('de') },
    { name: "Basculer Thème Clair / Sombre", action: () => toggleTheme() }
];

function toggleCommandPalette() {
    const p = document.getElementById('command-palette');
    const inp = document.getElementById('palette-search-input');
    if (!p) return;
    p.classList.toggle('hidden');
    if (!p.classList.contains('hidden')) {
        if (inp) {
            inp.value = '';
            inp.focus();
        }
        filterPaletteCommands();
    }
}

function filterPaletteCommands() {
    const inp = document.getElementById('palette-search-input');
    const results = document.getElementById('palette-results');
    if (!results) return;

    const q = (inp ? inp.value : '').toLowerCase().trim();
    const filtered = commandList.filter(c => c.name.toLowerCase().includes(q));

    results.innerHTML = '';
    if (filtered.length === 0) {
        results.innerHTML = `<div class="p-3 text-slate-400 text-center text-xs">Aucune commande trouvée.</div>`;
        return;
    }

    filtered.forEach(cmd => {
        const item = document.createElement('button');
        item.type = "button";
        item.className = "w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 text-slate-200 hover:text-cyan-400 transition-colors flex items-center justify-between";
        item.innerHTML = `
            <span>${cmd.name}</span>
            <i class="fa-solid fa-arrow-right text-[10px] text-slate-500"></i>
        `;
        item.onclick = () => {
            cmd.action();
            toggleCommandPalette();
        };
        results.appendChild(item);
    });
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// =============================================================================
// 12. MODALE CV, REVEAL AU SCROLL, RETOUR EN HAUT & EASTER EGG
// =============================================================================
function openCvModal() {
    const modal = document.getElementById('cv-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeCvModal() {
    const modal = document.getElementById('cv-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function skipIntro() {
    const intro = document.getElementById('intro-screen');
    if (intro) {
        intro.style.opacity = '0';
        setTimeout(() => intro.remove(), 400);
    }
}

// Konami code Easter Egg
const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiPos = 0;

document.addEventListener('keydown', (e) => {
    // Ctrl+K ou Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        toggleCommandPalette();
    }
    // Échap pour fermer modales
    if (e.key === 'Escape') {
        const pal = document.getElementById('command-palette');
        if (pal && !pal.classList.contains('hidden')) pal.classList.add('hidden');
        closeCvModal();
        closeCertLightbox();
    }
    // Flèches pour lightbox
    const lb = document.getElementById('cert-lightbox');
    if (lb && !lb.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') nextLightboxCert();
        if (e.key === 'ArrowLeft') prevLightboxCert();
    }

    // Konami code
    if (e.key.toLowerCase() === konamiCode[konamiPos].toLowerCase()) {
        konamiPos++;
        if (konamiPos === konamiCode.length) {
            document.body.classList.toggle('hacker-mode');
            showToast("🎮 Matrix Hacker Mode activé !");
            konamiPos = 0;
        }
    } else {
        konamiPos = 0;
    }
});

// Toast notification simple
function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = "px-4 py-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-slate-100 text-xs shadow-xl backdrop-blur-md flex items-center gap-2 transform transition-all duration-300";
    toast.innerHTML = `<i class="fa-solid fa-circle-info text-cyan-400"></i><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Formulaire de contact
function handleContactSubmit(e) {
    e.preventDefault();
    const msg = getTranslation(currentLang, 'contact.toastSuccess') || "Message envoyé avec succès !";
    showToast(msg);
    e.target.reset();
}

// Scroll Spy & Reveal animations
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    // Bouton retour en haut
    const backBtn = document.getElementById('back-to-top-btn');
    if (backBtn) {
        if (scrollPos > 400) {
            backBtn.classList.remove('opacity-0', 'pointer-events-none');
            backBtn.classList.add('opacity-100');
        } else {
            backBtn.classList.add('opacity-0', 'pointer-events-none');
            backBtn.classList.remove('opacity-100');
        }
    }

    // Surlignage lien nav actif
    const sections = ['hero', 'about', 'cv-section', 'certifications', 'skills', 'cyber-terminal', 'contact'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (el && link) {
            const top = el.offsetTop - 120;
            const height = el.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
                link.classList.add('active-nav');
            } else {
                link.classList.remove('active-nav');
            }
        }
    });
});

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(r => observer.observe(r));
}

// =============================================================================
// INITIALISATION GÉNÉRALE AU CHARGEMENT DU DOM
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initCanvas();
    startTypewriter();
    initPhotoTilt();
    initCounters();
    initScrollReveal();
    switchTerminalScenario('password');

    // Auto-skip intro après 1.2s max
    setTimeout(() => {
        skipIntro();
    }, 1200);
});
