/* ==========================================================================
   e-Scolarité Dynamic Frontend Logic & Interactive Background
   ========================================================================== */

// --- GLOBAL STATE & STORAGE MOCK DATA ---
const MOCK_STORAGE_KEY = 'e_scolarite_app_state_v1';

const DEFAULT_STATE = {
    currentUser: null, // { role: 'STUDENT'|'STAFF', id: 1, name: '...', matricule/email: '...' }
    staffRole: 'AGENT', // 'AGENT' or 'DECANAT'
    typeActes: [
        { id: 1, libelle: 'Certificat de Scolarité', frais: 1000, delai: 2, description: 'Atteste l\'inscription pour l\'année universitaire en cours.' },
        { id: 2, libelle: 'Relevé de Notes Officiel', frais: 2000, delai: 5, description: 'Relevé récapitulatif des notes et crédits validés.' },
        { id: 3, libelle: 'Attestation de Succès / Diplôme', frais: 5000, delai: 7, description: 'Document officiel certifiant l\'obtention du diplôme.' },
        { id: 4, libelle: 'Duplicata de Carte d\'Étudiant', frais: 1500, delai: 3, description: 'Remplacement de la carte d\'étudiant égarée.' }
    ],
    students: [
        { id: 101, matricule: '21004892', nom: 'BIO', prenoms: 'Saliou', email: 'saliou.bio@etud.univ.bj', telephone: '+229 97 00 11 22', filiere: 'Informatique & Systèmes', departement: 'Maths-Info', password: '123' },
        { id: 102, matricule: '21005510', nom: 'GNIHO', prenoms: 'Codjo Kevin', email: 'kevin.gniho@etud.univ.bj', telephone: '+229 96 44 33 22', filiere: 'Droit Privé', departement: 'Sciences Juridiques', password: '123' }
    ],
    requests: [
        {
            id: 1,
            code_suivi: 'PARAKOU-2026-1001',
            etudiant_id: 101,
            type_acte_id: 1,
            statut_code: 'READY', // PENDING, PROCESSING, VALIDATED, REJECTED, READY
            annee_academique: '2025-2026',
            motif: 'Dossier de candidature Bourse d\'études',
            commentaires: 'Vérifié par la scolarité. Signé électroniquement par le Doyen.',
            created_at: '2026-03-20 09:30',
            updated_at: '2026-03-21 14:15',
            files: [
                { name: 'quittance_2025_2026.pdf', type: 'JUSTIFICATIF', url: '#' },
                { name: 'Certificat_Scolarite_Signe.pdf', type: 'ACTE_SIGNE', url: '#' }
            ]
        },
        {
            id: 2,
            code_suivi: 'PARAKOU-2026-1002',
            etudiant_id: 101,
            type_acte_id: 2,
            statut_code: 'PROCESSING',
            annee_academique: '2024-2025',
            motif: 'Transfert de dossier universitaire',
            commentaires: 'Transmission à l\'agent de vérification des PV.',
            created_at: '2026-03-24 11:00',
            updated_at: '2026-03-24 11:30',
            files: [
                { name: 'releve_semestre_1_2.pdf', type: 'JUSTIFICATIF', url: '#' }
            ]
        },
        {
            id: 3,
            code_suivi: 'PARAKOU-2026-1003',
            etudiant_id: 102,
            type_acte_id: 3,
            statut_code: 'PENDING',
            annee_academique: '2024-2025',
            motif: 'Demande d\'emploi',
            commentaires: 'En attente d\'attribution à un agent.',
            created_at: '2026-03-25 15:45',
            updated_at: '2026-03-25 15:45',
            files: [
                { name: 'attestation_reussite.pdf', type: 'JUSTIFICATIF', url: '#' }
            ]
        }
    ]
};

let appState = loadState();

function loadState() {
    const saved = localStorage.getItem(MOCK_STORAGE_KEY);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Error loading state:', e);
        }
    }
    return DEFAULT_STATE;
}

function saveState() {
    localStorage.setItem(MOCK_STORAGE_KEY, JSON.stringify(appState));
}

// --- DYNAMIC BACKGROUND CANVAS ANIMATION ---
function initDynamicBackground() {
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
    const particleCount = Math.floor((width * height) / 18000);

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.6;
            this.vy = (Math.random() - 0.5) * 0.6;
            this.radius = Math.random() * 2 + 1;
            this.alpha = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(59, 130, 246, ${this.alpha})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        particles.forEach((p) => {
            p.update();
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// --- NAVIGATION & VIEW MANAGEMENT ---
function switchView(viewId) {
    document.querySelectorAll('.page-view').forEach((view) => {
        view.classList.remove('active');
    });

    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) {
        targetView.classList.add('active');
    }

    // Update active navbar links
    document.querySelectorAll('.nav-link').forEach((link) => {
        link.classList.remove('active');
    });

    if (viewId === 'student-portal') {
        renderStudentDashboard();
    } else if (viewId === 'staff-portal') {
        renderStaffDashboard();
    }
}

// --- AUTHENTICATION SYSTEM ---
function showAuthModal(type) {
    const modal = document.getElementById('modal-auth');
    const studentForm = document.getElementById('auth-student-form-container');
    const staffForm = document.getElementById('auth-staff-form-container');

    modal.classList.remove('hidden');

    if (type === 'student') {
        studentForm.classList.remove('hidden');
        staffForm.classList.add('hidden');
    } else {
        studentForm.classList.add('hidden');
        staffForm.classList.remove('hidden');
    }
}

function closeAuthModal() {
    document.getElementById('modal-auth').classList.add('hidden');
}

function handleStudentLogin(e) {
    e.preventDefault();
    const matricule = document.getElementById('st-login-matricule').value.trim();
    const password = document.getElementById('st-login-password').value.trim();

    const student = appState.students.find((s) => s.matricule === matricule && s.password === password);

    if (student) {
        appState.currentUser = {
            role: 'STUDENT',
            id: student.id,
            name: `${student.prenoms} ${student.nom}`,
            matricule: student.matricule
        };
        saveState();
        closeAuthModal();
        updateNavState();
        switchView('student-portal');
        showToast(`Bienvenue, ${student.prenoms} !`, 'success');
    } else {
        showToast('Matricule ou mot de passe incorrect.', 'error');
    }
}

function handleStaffLogin(e) {
    e.preventDefault();
    const email = document.getElementById('staff-login-email').value.trim();

    if (email.includes('decanat')) {
        appState.currentUser = {
            role: 'STAFF',
            staffRole: 'DECANAT',
            id: 2,
            name: 'Prof. Doyen Faculté',
            email: email
        };
        appState.staffRole = 'DECANAT';
    } else {
        appState.currentUser = {
            role: 'STAFF',
            staffRole: 'AGENT',
            id: 1,
            name: 'M. Agent Scolarité',
            email: email
        };
        appState.staffRole = 'AGENT';
    }

    saveState();
    closeAuthModal();
    updateNavState();
    switchView('staff-portal');
    showToast('Connexion Staff réussie.', 'success');
}

function logout() {
    appState.currentUser = null;
    saveState();
    updateNavState();
    switchView('public-portal');
    showToast('Vous avez été déconnecté.', 'info');
}

function updateNavState() {
    const btnStudent = document.getElementById('btn-portal-student');
    const btnStaff = document.getElementById('btn-portal-staff');
    const btnLogout = document.getElementById('btn-logout');

    if (appState.currentUser) {
        btnStudent.classList.add('hidden');
        btnStaff.classList.add('hidden');
        btnLogout.classList.remove('hidden');
    } else {
        btnStudent.classList.remove('hidden');
        btnStaff.classList.remove('hidden');
        btnLogout.classList.add('hidden');
    }
}

// --- PUBLIC ANONYMOUS TRACKING ---
function trackPublicRequest() {
    const inputCode = document.getElementById('public-tracking-input').value.trim().toUpperCase();
    const resultContainer = document.getElementById('public-tracking-result');

    if (!inputCode) {
        showToast('Veuillez saisir un code de suivi.', 'error');
        return;
    }

    const req = appState.requests.find((r) => r.code_suivi === inputCode);

    if (!req) {
        resultContainer.classList.remove('hidden');
        resultContainer.innerHTML = `
            <div style="text-align: center; padding: 1.5rem; color: #ef4444;">
                <i class="fa-solid fa-triangle-exclamation" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
                <p><strong>Code inconnu :</strong> Aucun dossier ne correspond au code <code>${inputCode}</code>.</p>
            </div>
        `;
        return;
    }

    const student = appState.students.find((s) => s.id === req.etudiant_id) || { nom: 'Étudiant', prenoms: '' };
    const typeActe = appState.typeActes.find((t) => t.id === req.type_acte_id) || { libelle: 'Acte Académique' };

    // Steps rendering
    const steps = [
        { code: 'PENDING', label: 'Soumis' },
        { code: 'PROCESSING', label: 'En Vérification' },
        { code: 'VALIDATED', label: 'Validé / Signé' },
        { code: 'READY', label: 'Prêt' }
    ];

    let currentStepIndex = 0;
    if (req.statut_code === 'PROCESSING') currentStepIndex = 1;
    if (req.statut_code === 'VALIDATED') currentStepIndex = 2;
    if (req.statut_code === 'READY') currentStepIndex = 3;
    if (req.statut_code === 'REJECTED') currentStepIndex = -1;

    let timelineHTML = `<div class="timeline">`;
    steps.forEach((step, index) => {
        let stepClass = '';
        if (req.statut_code === 'REJECTED') {
            stepClass = 'rejected';
        } else if (index < currentStepIndex) {
            stepClass = 'completed';
        } else if (index === currentStepIndex) {
            stepClass = 'active';
        }

        timelineHTML += `
            <div class="timeline-step ${stepClass}">
                <div class="timeline-icon">
                    <i class="fa-solid ${stepClass === 'completed' ? 'fa-check' : stepClass === 'rejected' ? 'fa-xmark' : 'fa-circle-notch'}"></i>
                </div>
                <div class="timeline-label">${step.label}</div>
            </div>
        `;
    });
    timelineHTML += `</div>`;

    resultContainer.classList.remove('hidden');
    resultContainer.innerHTML = `
        <div style="background: rgba(15,23,42,0.4); padding: 1.25rem; border-radius: 8px; border: 1px solid var(--glass-border);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
                <div>
                    <h4 style="font-size: 1.1rem; font-weight:700;">${typeActe.libelle}</h4>
                    <span style="font-size:0.85rem; color:var(--text-muted);">Dossier de ${student.prenoms} ${student.nom} | Année : ${req.annee_academique}</span>
                </div>
                <div>
                    ${getStatusBadgeHTML(req.statut_code)}
                </div>
            </div>

            ${timelineHTML}

            <div style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-muted); border-top: 1px dashed var(--glass-border); padding-top:0.75rem;">
                <strong><i class="fa-solid fa-clock"></i> Dernière mise à jour :</strong> ${req.updated_at}<br>
                <strong><i class="fa-solid fa-comment-dots"></i> Remarque administration :</strong> ${req.commentaires || 'Aucune remarque.'}
            </div>

            ${
                req.statut_code === 'READY' || req.statut_code === 'VALIDATED'
                    ? `<div style="margin-top: 1rem; text-align:right;">
                        <button class="btn btn-primary btn-sm" onclick="openDocumentPreview(${req.id})">
                            <i class="fa-solid fa-file-pdf"></i> Voir le Document Certifié avec QR Code
                        </button>
                    </div>`
                    : ''
            }
        </div>
    `;
}

// --- STUDENT DASHBOARD & SUBMISSION ---
function renderStudentDashboard() {
    if (!appState.currentUser || appState.currentUser.role !== 'STUDENT') {
        switchView('public-portal');
        return;
    }

    document.getElementById('student-display-name').innerText = appState.currentUser.name;
    document.getElementById('student-display-matricule').innerText = appState.currentUser.matricule;

    const myRequests = appState.requests.filter((r) => r.etudiant_id === appState.currentUser.id);

    // Stats
    document.getElementById('st-stat-total').innerText = myRequests.length;
    document.getElementById('st-stat-pending').innerText = myRequests.filter((r) => r.statut_code === 'PENDING' || r.statut_code === 'PROCESSING').length;
    document.getElementById('st-stat-ready').innerText = myRequests.filter((r) => r.statut_code === 'READY' || r.statut_code === 'VALIDATED').length;

    const tbody = document.getElementById('student-requests-tbody');
    if (!tbody) return;

    if (myRequests.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted);">Vous n'avez encore soumis aucune demande d'acte.</td></tr>`;
        return;
    }

    tbody.innerHTML = myRequests
        .map((r) => {
            const typeActe = appState.typeActes.find((t) => t.id === r.type_acte_id) || { libelle: 'Acte' };
            return `
            <tr>
                <td><strong><code>${r.code_suivi}</code></strong></td>
                <td>${typeActe.libelle}</td>
                <td>${r.annee_academique}</td>
                <td>${r.created_at}</td>
                <td>${getStatusBadgeHTML(r.statut_code)}</td>
                <td>
                    <button class="btn btn-outline btn-sm" onclick="viewRequestDetails(${r.id})">
                        <i class="fa-solid fa-eye"></i> Détails
                    </button>
                </td>
            </tr>
        `;
        })
        .join('');
}

function openNewRequestModal() {
    document.getElementById('modal-new-request').classList.remove('hidden');
}

function closeNewRequestModal() {
    document.getElementById('modal-new-request').classList.add('hidden');
}

let uploadedFilesTemp = [];

function handleFileSelect(event) {
    const files = Array.from(event.target.files);
    uploadedFilesTemp = files.map((f) => ({ name: f.name, size: f.size, type: 'JUSTIFICATIF' }));

    const previewList = document.getElementById('file-list-preview');
    previewList.innerHTML = uploadedFilesTemp
        .map(
            (f) => `
        <div class="file-preview-item">
            <span><i class="fa-solid fa-file-pdf"></i> ${f.name} (${Math.round(f.size / 1024)} Ko)</span>
            <i class="fa-solid fa-circle-check" style="color:var(--status-validated);"></i>
        </div>
    `
        )
        .join('');
}

function updateRequestFormDetails() {
    // Option to show fees dynamically if needed
}

function handleNewRequestSubmit(e) {
    e.preventDefault();

    if (!appState.currentUser || appState.currentUser.role !== 'STUDENT') {
        showToast('Veuillez vous connecter en tant qu\'étudiant.', 'error');
        return;
    }

    const typeActeId = parseInt(document.getElementById('req-type-acte').value);
    const annee = document.getElementById('req-annee-academique').value;
    const motif = document.getElementById('req-motif').value;

    const newCode = `PARAKOU-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 16);

    const newReq = {
        id: appState.requests.length + 1,
        code_suivi: newCode,
        etudiant_id: appState.currentUser.id,
        type_acte_id: typeActeId,
        statut_code: 'PENDING',
        annee_academique: annee,
        motif: motif,
        commentaires: 'Demande reçue et enregistrée avec succès.',
        created_at: nowStr,
        updated_at: nowStr,
        files: uploadedFilesTemp.length > 0 ? uploadedFilesTemp : [{ name: 'quittance_paiement_recu.pdf', type: 'JUSTIFICATIF', url: '#' }]
    };

    appState.requests.unshift(newReq);
    saveState();

    closeNewRequestModal();
    renderStudentDashboard();
    showToast(`Demande soumise ! Votre code de suivi unique est : ${newCode}`, 'success');
}

// --- STAFF & ADMIN DASHBOARD ---
function switchStaffRole(role) {
    appState.staffRole = role;
    if (appState.currentUser) {
        appState.currentUser.staffRole = role;
    }
    document.getElementById('staff-display-role').innerText = role;
    saveState();
    renderStaffDashboard();
}

function renderStaffDashboard() {
    if (!appState.currentUser || appState.currentUser.role !== 'STAFF') {
        switchView('public-portal');
        return;
    }

    document.getElementById('staff-display-name').innerText = appState.currentUser.name;
    document.getElementById('staff-display-role').innerText = appState.staffRole || 'AGENT';

    // KPIs
    document.getElementById('staff-kpi-total').innerText = appState.requests.length;
    document.getElementById('staff-kpi-pending').innerText = appState.requests.filter((r) => r.statut_code === 'PENDING' || r.statut_code === 'PROCESSING').length;
    document.getElementById('staff-kpi-validated').innerText = appState.requests.filter((r) => r.statut_code === 'VALIDATED' || r.statut_code === 'READY').length;
    document.getElementById('staff-kpi-rejected').innerText = appState.requests.filter((r) => r.statut_code === 'REJECTED').length;

    renderStaffTable();
}

function renderStaffTable() {
    const searchVal = document.getElementById('staff-search-input').value.toLowerCase();
    const filterStatus = document.getElementById('staff-status-filter').value;

    const tbody = document.getElementById('staff-requests-tbody');
    if (!tbody) return;

    let filtered = appState.requests.filter((r) => {
        const student = appState.students.find((s) => s.id === r.etudiant_id) || {};
        const matchesSearch =
            r.code_suivi.toLowerCase().includes(searchVal) ||
            (student.nom && student.nom.toLowerCase().includes(searchVal)) ||
            (student.matricule && student.matricule.toLowerCase().includes(searchVal));

        const matchesStatus = filterStatus === 'ALL' || r.statut_code === filterStatus;

        return matchesSearch && matchesStatus;
    });

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-muted);">Aucun dossier ne correspond aux critères.</td></tr>`;
        return;
    }

    tbody.innerHTML = filtered
        .map((r) => {
            const student = appState.students.find((s) => s.id === r.etudiant_id) || { nom: 'Inconnu', filiere: '-' };
            const typeActe = appState.typeActes.find((t) => t.id === r.type_acte_id) || { libelle: 'Acte' };

            return `
            <tr>
                <td><strong><code>${r.code_suivi}</code></strong></td>
                <td>${student.prenoms} ${student.nom} <br><small style="color:var(--text-muted);">${student.matricule}</small></td>
                <td>${student.filiere}</td>
                <td>${typeActe.libelle}</td>
                <td>${r.created_at}</td>
                <td>${getStatusBadgeHTML(r.statut_code)}</td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="openStaffProcessingModal(${r.id})">
                        <i class="fa-solid fa-folder-open"></i> Traiter
                    </button>
                </td>
            </tr>
        `;
        })
        .join('');
}

// --- REQUEST DETAILS & STAFF PROCESSING MODAL ---
function viewRequestDetails(reqId) {
    openStaffProcessingModal(reqId, true); // view-only mode for student
}

function openStaffProcessingModal(reqId, viewOnly = false) {
    const req = appState.requests.find((r) => r.id === reqId);
    if (!req) return;

    const student = appState.students.find((s) => s.id === req.etudiant_id) || { nom: 'Inconnu', filiere: '-' };
    const typeActe = appState.typeActes.find((t) => t.id === req.type_acte_id) || { libelle: 'Acte' };

    const modalContent = document.getElementById('modal-request-details-content');

    const isStaff = appState.currentUser && appState.currentUser.role === 'STAFF' && !viewOnly;

    modalContent.innerHTML = `
        <div class="modal-header">
            <h2><i class="fa-solid fa-file-contract"></i> Dossier ${req.code_suivi}</h2>
            <p>Étudiant: <strong>${student.prenoms} ${student.nom}</strong> (${student.matricule}) - Filière: ${student.filiere}</p>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.5rem; margin-bottom:1.5rem;">
            <div style="background:rgba(15,23,42,0.4); padding:1rem; border-radius:8px; border:1px solid var(--glass-border);">
                <h4 style="font-size:0.95rem; margin-bottom:0.5rem; color:var(--primary);"><i class="fa-solid fa-circle-info"></i> Informations de la Demande</h4>
                <p><strong>Acte demandé :</strong> ${typeActe.libelle}</p>
                <p><strong>Année académique :</strong> ${req.annee_academique}</p>
                <p><strong>Statut actuel :</strong> ${getStatusBadgeHTML(req.statut_code)}</p>
                <p><strong>Motif indiqué :</strong> ${req.motif || 'Aucun'}</p>
                <p><strong>Date de dépôt :</strong> ${req.created_at}</p>
            </div>

            <div style="background:rgba(15,23,42,0.4); padding:1rem; border-radius:8px; border:1px solid var(--glass-border);">
                <h4 style="font-size:0.95rem; margin-bottom:0.5rem; color:var(--primary);"><i class="fa-solid fa-paperclip"></i> Pièces Justificatives Téléversées</h4>
                <ul style="list-style:none; padding:0;">
                    ${req.files
                        .map(
                            (f) => `
                        <li style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem; background:rgba(255,255,255,0.05); padding:0.4rem 0.6rem; border-radius:4px; font-size:0.85rem;">
                            <span><i class="fa-solid fa-file-pdf"></i> ${f.name}</span>
                            <span class="badge ${f.type === 'ACTE_SIGNE' ? 'badge-success' : 'badge-info'}">${f.type}</span>
                        </li>
                    `
                        )
                        .join('')}
                </ul>
            </div>
        </div>

        ${
            isStaff
                ? `
            <div style="background:rgba(15,23,42,0.6); padding:1.25rem; border-radius:8px; border:1px solid var(--glass-border); margin-bottom:1.5rem;">
                <h4 style="font-size:1rem; margin-bottom:0.75rem;"><i class="fa-solid fa-pen-to-square"></i> Action de Traitement (Scolarité / Décanat)</h4>

                <div class="form-group">
                    <label>Changer le Statut :</label>
                    <select id="proc-status-select" class="form-control">
                        <option value="PROCESSING" ${req.statut_code === 'PROCESSING' ? 'selected' : ''}>En cours de vérification (PROCESSING)</option>
                        <option value="VALIDATED" ${req.statut_code === 'VALIDATED' ? 'selected' : ''}>Validé / Signé par Décanat (VALIDATED)</option>
                        <option value="READY" ${req.statut_code === 'READY' ? 'selected' : ''}>Prêt pour téléchargement / retrait (READY)</option>
                        <option value="REJECTED" ${req.statut_code === 'REJECTED' ? 'selected' : ''}>Rejeté avec motif (REJECTED)</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Commentaires internes & Instructions pour l'étudiant :</label>
                    <textarea id="proc-comments" class="form-control" rows="2">${req.commentaires || ''}</textarea>
                </div>

                <button class="btn btn-primary" onclick="updateRequestStatus(${req.id})">
                    <i class="fa-solid fa-floppy-disk"></i> Enregistrer les Modifications
                </button>
            </div>
        `
                : `
            <div style="background:rgba(15,23,42,0.4); padding:1rem; border-radius:8px; border:1px solid var(--glass-border); margin-bottom:1.5rem;">
                <h4 style="font-size:0.95rem; margin-bottom:0.5rem;"><i class="fa-solid fa-comments"></i> Observations de la Scolarité</h4>
                <p style="color:var(--text-muted);">${req.commentaires || 'Aucune observation enregistrée.'}</p>
            </div>
        `
        }

        ${
            req.statut_code === 'READY' || req.statut_code === 'VALIDATED'
                ? `
            <div style="text-align:center; padding-top:1rem; border-top:1px solid var(--glass-border);">
                <button class="btn btn-whatsapp" onclick="openDocumentPreview(${req.id})">
                    <i class="fa-solid fa-file-pdf"></i> Visualiser & Télécharger l'Acte Certifié (PDF + QR)
                </button>
            </div>
        `
                : ''
        }
    `;

    document.getElementById('modal-request-details').classList.remove('hidden');
}

function closeRequestDetailsModal() {
    document.getElementById('modal-request-details').classList.add('hidden');
}

function updateRequestStatus(reqId) {
    const req = appState.requests.find((r) => r.id === reqId);
    if (!req) return;

    const newStatus = document.getElementById('proc-status-select').value;
    const comments = document.getElementById('proc-comments').value;

    req.statut_code = newStatus;
    req.commentaires = comments;
    req.updated_at = new Date().toISOString().replace('T', ' ').substring(0, 16);

    // Auto attach signed document when validated
    if ((newStatus === 'VALIDATED' || newStatus === 'READY') && !req.files.some((f) => f.type === 'ACTE_SIGNE')) {
        req.files.push({
            name: `Acte_Officiel_${req.code_suivi}.pdf`,
            type: 'ACTE_SIGNE',
            url: '#'
        });
    }

    saveState();
    closeRequestDetailsModal();
    renderStaffDashboard();
    showToast(`Statut du dossier ${req.code_suivi} mis à jour avec succès.`, 'success');
}

// --- DOCUMENT PREVIEW MODAL WITH QR CODE ---
function openDocumentPreview(reqId) {
    const req = appState.requests.find((r) => r.id === reqId);
    if (!req) return;

    const student = appState.students.find((s) => s.id === req.etudiant_id) || { nom: 'Étudiant', prenoms: '', matricule: '21004892' };
    const typeActe = appState.typeActes.find((t) => t.id === req.type_acte_id) || { libelle: 'Acte Académique' };

    const modalContent = document.getElementById('modal-request-details-content');

    modalContent.innerHTML = `
        <div class="modal-header">
            <h2><i class="fa-solid fa-shield-halved"></i> Document Numérique Sécurisé</h2>
            <p>Verification d'authenticité et signature électronique</p>
        </div>

        <div class="document-preview-card">
            <div class="doc-header">
                <div class="doc-logo">
                    <i class="fa-solid fa-graduation-cap"></i> UNIVERSITÉ DE PARAKOU
                </div>
                <div style="font-size:0.8rem; text-align:right; color:#64748b;">
                    République du Bénin<br>
                    Direction des Affaires Académiques
                </div>
            </div>

            <div class="doc-body">
                <div class="doc-title">${typeActe.libelle.toUpperCase()}</div>

                <p style="text-align:justify; font-size:0.95rem; line-height:1.8;">
                    Le Doyen de la Faculté atteste par la présente que l'étudiant(e) <strong>${student.prenoms} ${student.nom}</strong>,
                    immatriculé(e) sous le numéro de matricule <strong>${student.matricule}</strong>, inscrit(e) au titre de l'année académique
                    <strong>${req.annee_academique}</strong>, est régulier dans sa scolarité et que les pièces présentées sont conformes aux registres officiels.
                </p>
            </div>

            <div class="qr-signature-box">
                <div class="qr-code-placeholder">
                    <div>
                        <i class="fa-solid fa-qrcode" style="font-size:2.5rem; color:#1e293b;"></i><br>
                        <code>${req.code_suivi}</code>
                    </div>
                </div>

                <div style="text-align:right;">
                    <span style="font-size:0.8rem; color:#64748b;">Fait à Parakou, le ${req.updated_at.substring(0, 10)}</span><br>
                    <strong style="color:#1e293b;">Pour le Doyen, Le Chef Service Scolarité</strong><br>
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=${encodeURIComponent('https://e-scolarite.bj/verify/' + req.code_suivi)}" alt="QR Code" style="margin-top:5px; border:1px solid #cbd5e1; padding:2px;">
                </div>
            </div>
        </div>

        <div class="modal-footer" style="margin-top:1.5rem;">
            <button class="btn btn-outline" onclick="closeRequestDetailsModal()">Fermer</button>
            <button class="btn btn-primary" onclick="window.print()">
                <i class="fa-solid fa-print"></i> Imprimer / Télécharger le PDF
            </button>
        </div>
    `;

    document.getElementById('modal-request-details').classList.remove('hidden');
}

// --- UTILITY HELPERS ---
function getStatusBadgeHTML(code) {
    const map = {
        PENDING: { label: 'En attente', class: 'status-PENDING', icon: 'fa-hourglass-start' },
        PROCESSING: { label: 'En traitement', class: 'status-PROCESSING', icon: 'fa-gears' },
        VALIDATED: { label: 'Validé & Signé', class: 'status-VALIDATED', icon: 'fa-signature' },
        READY: { label: 'Prêt / Disponible', class: 'status-READY', icon: 'fa-circle-check' },
        REJECTED: { label: 'Rejeté', class: 'status-REJECTED', icon: 'fa-circle-xmark' }
    };

    const status = map[code] || { label: code, class: 'status-PENDING', icon: 'fa-circle-info' };
    return `<span class="status-badge ${status.class}"><i class="fa-solid ${status.icon}"></i> ${status.label}</span>`;
}

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

function toggleFaq(element) {
    const item = element.parentElement;
    item.classList.toggle('active');
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initDynamicBackground();
    updateNavState();

    // Default trigger public stats count
    const totalElem = document.getElementById('stat-total-demandes');
    if (totalElem) {
        totalElem.innerText = `${1420 + appState.requests.length}+`;
    }
});
