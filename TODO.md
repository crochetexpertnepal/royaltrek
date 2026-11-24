# Trekking Agency Dashboard — TODO

## Foundation and dashboard shell

- [ ] Deliver a premium travel-inspired dashboard rather than a basic admin template, using deep forest green `#123D32`, mountain teal `#237C72`, warm orange `#F59E45`, light neutral `#F7F8F6`, white cards, dark charcoal text, subtle borders, rounded cards, and restrained shadows.
- [ ] Provide a fixed, collapsible left sidebar with agency logo/name, icon navigation, expandable categories, active highlighting, notification indicators, and a user profile area; provide top navigation with global search, breadcrumbs, quick-create, notifications, help, profile dropdown, and theme switch affordance.
- [ ] Make the shell responsive: full sidebar and multi-column content on desktop; collapsible navigation and adaptive cards/forms on tablet; slide-out navigation, stacked content, touch-friendly controls, and responsive charts on mobile.
- [ ] Create a route manifest covering every implemented page and keep it synchronized with source routes.

## Overview and analytics

- [ ] Build the overview page with visitor, package, active package, destination, blog, enquiry, booking, pending enquiry, published page, and media-file statistics.
- [ ] Include website traffic, monthly enquiries, booking performance, popular packages, viewed destinations, recent enquiries, recent activity, content publication, and quick-action panels.
- [ ] Build an analytics page with filters for today, last 7 days, last 30 days, last 90 days, and custom ranges; include traffic, visitors, page views, traffic sources, countries, landing pages, blogs, packages, destinations, conversion, enquiries, bookings, devices, and new-vs-returning views.
- [ ] Clearly distinguish live API data from sample or unavailable data; never present fabricated analytics as real statistics.

## Content and CMS modules

- [ ] Implement route-driven management pages for blogs, article queue, review drafts, website pages, comments, FAQs, services, portfolio, sliders/banners, team, clients, testimonials, pricing plans, and media library.
- [ ] Blog editing must support rich text, featured image/gallery selection, SEO title/meta/focus keyword/slug/canonical, article and FAQ schema, Open Graph, author, related articles, scheduling, drafts, and publish workflow.
- [ ] Website pages must support section-based editing; FAQs must support categories, package/destination assignment, ordering, and schema; media must support upload, search, preview, alt/title/caption/description, dimensions, file size, WebP, optimization, and usage tracking.

## Trekking and travel management

- [ ] Implement package listing and add/edit flow with basic information, trip information, pricing, included/excluded services, equipment, packing/travel/safety notes, SEO, and draft/published/featured/archived statuses.
- [ ] Connect destinations to multiple packages and packages to multiple itinerary days; support package categories, types, tags, reviews, featured/popular/upcoming states.
- [ ] Implement a drag-and-drop itinerary builder with dynamically addable, removable, reorderable, editable days including locations, distance, duration, altitude, accommodation, meals, transport, activities, images, and route information.
- [ ] Implement destinations, tours, trekking categories, difficulty levels, travel gallery, equipment, and reusable packing-list templates with the fields and relationships in the source brief.

## Booking and customer management

- [ ] Implement enquiries with customer details, package, date, travellers, budget, message, source, assignment, follow-up date, and statuses from new through closed/converted.
- [ ] Implement bookings with reference number, customer, package, travel dates, group size, pricing, payment status, booking status, notes, and confirmation.
- [ ] Implement customer profiles, booking/enquiry history, notes, countries, reviews, payment records, deposits, outstanding balances, refunds, and transaction history; leave payment-gateway integration optional until credentials and permissions are configured.

## System, security, and integrations

- [ ] Add URL redirect management with 301/302, source/destination, status, bulk import, and history.
- [ ] Add admin management, profile settings, roles and permissions with Super Admin, Administrator, Content Manager, SEO Manager, Editor, Travel Manager, Booking Manager, and Media Manager roles; enforce view/create/edit/delete/publish/approve/manage-settings at API level, not only in menus.
- [ ] Add SEO overview, metadata, sitemap, robots, canonical URLs, schema, redirects, broken links, index status, crawling errors, audit, and optional Google Search Console integration.
- [ ] Add website settings for agency identity, logo/favicon, contact details, address, email/phone/WhatsApp, social links, currency, timezone, language, header/footer, SMTP, analytics, Search Console, Maps, cookies, and privacy.
- [ ] Implement secure admin login, JWT/session handling, bcrypt or Argon2 password hashing, validation, rate limiting, CORS, Helmet, upload validation, Prisma/parameterized queries, XSS/CSRF protections, audit logs, environment variables, expiration, and password reset.

## Data and production readiness

- [ ] Add the relational data model for AdminUser, Role, Permission, BlogPost, BlogCategory, BlogTag, ArticleQueue, Page, Comment, FAQ, Service, Portfolio, Slider, TeamMember, Client, Testimonial, PricingPlan, Media, TrekkingPackage, PackageCategory, PackageTag, Itinerary, ItineraryDay, Destination, DestinationCategory, Tour, TourCategory, DifficultyLevel, Gallery, Equipment, Enquiry, Customer, Booking, Payment, Redirect, SEO, IndexStatus, WebsiteSetting, ActivityLog, and Notification.
- [ ] Use primary/foreign keys, one-to-many and many-to-many relationships, unique constraints, indexes, created/updated timestamps, and soft deletion where appropriate.
- [ ] Replace demo data with persistent CRUD endpoints and validated forms; ensure all management modules support Create, Read, Update, and Delete according to permissions.
- [ ] Connect media selection across blogs, packages, tours, destinations, and pages; connect analytics only when real provider credentials and permissions are configured.
