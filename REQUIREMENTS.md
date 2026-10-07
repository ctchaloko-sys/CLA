# REQUIREMENTS.md - TURFELITE-PMU / TURF PERFORMANCE PRO

## Phase 1: Architecture, Security & Config
- [x] 1. Set up project structure (HTML5, Tailwind/CSS3, ES6 Modules JS).
- [x] 2. Create Supabase SQL schema migrations (`profiles`, `access_codes`, `subscriptions`, `meetings`, `races`, `free_picks`, `vip_picks`, `results`, `testimonials`, `faq`, `settings`, `access_logs`, `messages`, `vip_requests`).
- [x] 3. Configure RLS policies and server-side RPC functions (`validate_access_code`, `hash_code_sha256`).
- [x] 4. Configure default settings (+22646553556, emmabrn888@gmail.com).

## Phase 2: Design System & Branding
- [x] 5. Implement luxury Dark (#070c14) and Pure Light (#ffffff) themes with top-left switcher.
- [x] 6. Integrate Ken Burns slideshow Hero using `harness-racing.jpg` and `galop-racing.jpg`.
- [x] 7. Build floating WhatsApp button with prefilled messages (+22646553556).
- [x] 8. Create fixed mobile bottom navigation bar (Accueil, Pronostics, Accès, VIP, Compte).

## Phase 3: Authentication & Navigation Gating
- [x] 9. Build email/password authentication module and session persistence.
- [x] 10. Implement strict navigation gating restricting non-authenticated users to home page.
- [x] 11. Add post-login VIP subscription popup.

## Phase 4: Public Sections & Wording Compliance
- [x] 12. Enforce strict terminology rules (remove "100% fiable", "100% de score", "garanti").
- [x] 13. Create "Pourquoi nous ?" 4-card feature grid.
- [x] 14. Add interactive FAQ accordion and Cookie consent banner.
- [x] 15. Create testimonial carousel with country badges (Bénin, Côte d'Ivoire, Togo, Cameroun, Sénégal, France, Gabon, Burkina Faso) and demo indicators.

## Phase 5: VIP Predictions & Code Validation
- [x] 16. Configure Quinté, Quarté, PMU, Trio discipline buttons (0 numbers for guests, 3-4 free favorites for members).
- [x] 17. Build VIP predictions view displaying inline WhatsApp subscription form and 1 sample analysis (*Prix Ganay - Qatar*).
- [x] 18. Build secure VIP code validation modal ("Valider et Déverrouiller") unlocking full expert predictions.

## Phase 6: Admin Dashboard Back-Office (/admin)
- [x] 19. Build secure admin route `/admin` (server-side role check).
- [x] 20. Implement VIP access code generator (single-use/multi-use, plan duration, one-time clear code view).
- [x] 21. Add administrative controls for publishing daily race numbers, free favorites, VIP predictions, and official race arrivals.
- [x] 22. Provide user management and site settings controls.

## Phase 7: Verification & Documentation
- [x] 23. Run Playwright verification tests across mobile (320px-430px) and desktop viewports.
- [x] 24. Document admin promotion SQL query and environment setup in `README.md`.
