# TODO - Menezis Landing

## Assets à convertir
- [ ] `og-image.html` → `og-image.png` (1200x630) - Screenshot navigateur
- [ ] `logo.svg` → `logo.png` (512x512) - Pour structured data
- [ ] `logo.svg` → `apple-touch-icon.png` (180x180) - iOS

## SEO / Indexation
- [ ] Google Search Console - Ajouter propriété menezis.ai
- [ ] Soumettre sitemap: https://menezis.ai/sitemap.xml
- [ ] Bing Webmaster Tools (optionnel)

## Post-lancement
- [ ] Mettre à jour legal page quand SL Espagne créée
- [ ] Analytics (Plausible/Umami recommandé - GDPR friendly)

## Strategic - Landing Page v2

### Terminal Interactif (Tension)
- [ ] Ajouter un mode interactif simulé au composant `Terminal.tsx`
- [ ] Le terminal réagit si l'utilisateur clique ou tape dedans
- [ ] Rejeter les mauvaises commandes avec du caractère ("Unknown command. Try harder.")
- [ ] Objectif : créer de la tension, pas un jouet qui tape tout seul

### One-Line Installer (Zero Friction)
- [ ] Héberger un script bash sur `get.menezis.ai` ou `menezis.ai/init`
- [ ] Le script détecte l'OS, détecte les clients AI installés (Claude Code, Cursor, Windsurf)
- [ ] Injecte la config JSON MCP automatiquement
- [ ] Remplacer `npx menezis init` par `curl -sL menezis.ai/init | bash`
- [ ] Nécessite : endpoint hébergé + script d'install multi-OS

### Live Console (Preuve de Puissance)
- [ ] Transformer `McpToolGrid` statique en flux temps réel
- [ ] Connecter via WebSocket ou SSE à un cluster de démo
- [ ] Afficher des déploiements anonymisés en direct ("User 0x8a... deployed Postgres in 4s.")
- [ ] Créer du FOMO et de la preuve sociale dynamique
- [ ] Nécessite : backend SSE/WS + cluster de démo opérationnel
