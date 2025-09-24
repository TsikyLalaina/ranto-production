# Ranto Site Map

Status: Draft
Last updated: 2025-09-23
Owner: Web/App

Localization strategy
- UI text localized via LanguageContext (en/fr/mg)
- No locale prefixes in URLs for now (URLs stay stable)

High-level structure
- Public marketing and informational
- Auth flows
- Role-based dashboards
- Core entities: Business Profiles, Opportunities, Matching, Messaging, Success Stories
- Admin
- System

Public (no auth)
- / — Landing (Enhanced Landing)
- /pricing — Pricing page
- /solutions — Solutions overview
  - /solutions/exporters
  - /solutions/buyers
  - /solutions/banks
  - /solutions/agencies
  - /solutions/transport
  - /solutions/farmers
- /success-stories — Public list
- /success-stories/:id — Public detail
- /api-docs — API documentation (marketing/static)
- /help — Help Center (static placeholder)
- /legal/privacy — Privacy Policy
- /legal/terms — Terms of Service
- /legal/security — Security & Compliance

Auth
- /login — Sign in
- /register — Sign up
- /logout — Sign out (client action + redirect)
- /profile — My profile (displayName, phone, preferred_language)

Dashboards (role-gated)
- /dashboard — Redirects to role-specific dashboard
  - /dashboard/exporter — Supplier discovery, ESG docs, quality scoring
  - /dashboard/buyer — ESG portal, traceability, compliance reports
  - /dashboard/bank — Risk analytics, credit scoring signals
  - /dashboard/agency — Impact dashboards & monitoring
  - /dashboard/transport — Cargo matching & routes
  - /dashboard/entrepreneur — General SME workspace (default role)

Core entities

Business Profiles (public list; owner can edit)
- /businesses — List + filters: search, region, businessType, pagination
- /businesses/new — Create profile (auth)
- /businesses/:id — Detail (public)
- /businesses/:id/edit — Edit (owner/admin)
- /businesses/user/me — My business profile (owner)

Opportunities (public list; create/edit requires auth)
- /opportunities — List + filters: search, type/business_type, country, range, status
- /opportunities/new — Create (auth)
- /opportunities/:id — Detail (public)
- /opportunities/:id/edit — Edit (owner/admin)
- /opportunities/user/me — My opportunities (owner)

Matching (auth)
- /matches — My matches (sent/received) with status filters
- /matches/find — Suggestions/recommendations (businesses or opportunities)
- /matches/stats — Counts and averages
- /matches/:id — Match detail (history, status changes)

Messaging (auth)
- /conversations — Conversation list
- /conversations/:conversationId — Thread view
- /messages/new?to=:userId — Compose (optional shortcut)

Success Stories
- /success-stories — Public list (same as Public section)
- /success-stories/:id — Public detail (same as Public section)
- /success-stories/new — Create (auth)
- /success-stories/:id/edit — Edit (owner/admin)

Uploads & Media (embedded flows)
- Handled inside entity create/edit pages (business/opportunity)
- Optional: /uploads — My uploads (list/manage) [later]

Admin (admin only)
- /admin — Overview
- /admin/users — Manage users (roles, verification)
- /admin/users/:id — User detail
- /admin/business-profiles — Moderate/verify profiles
- /admin/opportunities — Manage opportunities
- /admin/success-stories — Review/publish stories
- /admin/matches — Oversight & audit
- /admin/messages — Abuse/moderation tools (later)
- /admin/settings — Platform settings (locales, rate limits)
- /admin/audit-logs — System activity (later)

System & Utilities
- /status — App status page (client-visible)
- /404 — Not Found
- /500 — Error

Navigation & IA notes
- Top nav (public): Brand, Solutions (dropdown), Pricing, Login, Language selector
- Dashboard nav (left sidebar): Role-aware menu grouping core entities and actions
- Breadcrumbs on inner pages: Home / Section / Item
- CTAs link to relevant dashboard pages when authenticated; otherwise to login/register

Access control (summary)
- Public: landing, solutions, pricing, success stories, legal, help, opportunities/business list & details
- Auth: profile, create/edit entities, messaging, matches
- Admin: /admin/*

SEO & social
- Canonical URLs without locale prefixes
- OpenGraph/Twitter metadata on public detail pages (businesses, opportunities, success stories)

Localization
- Keep URLs stable; translate page titles, labels, filter names, statuses via LanguageContext

Roadmap alignment
- Phase 1 (now): Public directories (businesses, opportunities) with mock data, i18n, filters
- Phase 2: Auth + My pages (profile, my business, my opportunities), messaging skeleton
- Phase 3: Matching UI (find, list, stats), admin basics
- Phase 4: Role dashboards, success stories create/publish, richer analytics
