# 🏆 TurfElite - Plateforme Web Premium de Pronostics Hippiques (PMU)

**TurfElite** est une application web Single Page Application (SPA) haut de gamme, fluide et réactive dédiée aux pronostics, analyses et résultats de courses hippiques (PMU).

---

## 🚀 GUIDE DE DÉPLOIEMENT SUR GITHUB PAGES

Pour déployer gratuitement et facilement **TurfElite** sur GitHub Pages, suivez ces étapes :

### Étape 1 : Initialiser le dépôt Git localement (si ce n'est pas déjà fait)
Ouvrez votre terminal dans le dossier du projet et exécutez :
```bash
git init
git add .
git commit -m "feat: version initiale de TurfElite"
```

### Étape 2 : Créer un dépôt sur GitHub
1. Rendez-vous sur [GitHub.com](https://github.com) et connectez-vous.
2. Cliquez sur le bouton **"New"** (Nouveau dépôt).
3. Nommez votre dépôt (ex: `turfelite-pmu`).
4. Laissez le dépôt en **Public** pour bénéficier de GitHub Pages gratuitement.
5. Ne cochez **pas** "Initialize this repository with a README" si vous l'avez déjà en local.
6. Cliquez sur **"Create repository"**.

### Étape 3 : Relier et pusher votre code sur GitHub
Exécutez les commandes indiquées par GitHub dans votre terminal :
```bash
git branch -M main
git remote add origin https://github.com/VOTRE_NOM_DUTILISATEUR/turfelite-pmu.git
git push -u origin main
```

### Étape 4 : Activer GitHub Pages
1. Sur votre dépôt GitHub, allez dans l'onglet **Settings** (Paramètres).
2. Dans le menu de gauche, cliquez sur **Pages** (dans la section *Code and automation*).
3. Dans **Build and deployment** :
   - **Source** : Sélectionnez `Deploy from a branch` (ou `GitHub Actions` grâce au workflow inclus `.github/workflows/deploy.yml`).
   - **Branch** : Choisissez `main` et le dossier `/ (root)`.
4. Cliquez sur **Save**.

En quelques secondes/minutes, votre site sera accessible en ligne à l'adresse :
`https://VOTRE_NOM_DUTILISATEUR.github.io/turfelite-pmu/`

---

## ✨ Fonctionnalités Principales de la Plateforme

- **Design System Luxe & Équestre** : Palette Vert Émeraude (Racing Green), Or/Laiton mat, Sombre Slate et cartes Glassmorphism.
- **Micro-interactions & Canvas** : Arrière-plan dynamique animé en HTML5 Canvas avec particules dorées/émeraudes.
- **Compte à Rebours Live** : Décompte en temps réel pour les courses à venir.
- **Coupons & Tickets VIP** : Recommandations (Favori, Tuyau, Outsider, Tokard), combinaisons (Tiercé, Quarté, Quinté+) et synthèses d'experts.
- **Résultats Officiels PMU** : Affichage strict des arrivées validées sans génération artificielle de données.
- **Espace Membre (Dashboard)** : Gestion des pronostics favoris (bookmarks), centre de notifications et profils.
- **Back-Office Admin Complete** : Restreint aux administrateurs pour gérer les courses, saisir les arrivées officielles, suspendre des membres et modifier les bannières/numéros WhatsApp.
- **Assistance WhatsApp Flottante** : Bouton WhatsApp interactif redirigeant avec message pré-rempli.
- **Jeu Responsable & Cadre Légal** : Aucun système de pari réel, aucun dépôt d'argent. Bannières et avertissements légaux sur chaque coupon (*"Jouer comporte des risques..."*).

---

## 🛠️ Stack Technique

- **Frontend** : HTML5 Semantic, CSS3 Custom Properties & Glassmorphism, JavaScript ES6+ Vanilla.
- **Icônes & Typographies** : FontAwesome 6, Google Fonts (*Plus Jakarta Sans*).
- **Persistance des données** : State Management via `localStorage` (`turfelite_app_state_v1`).
