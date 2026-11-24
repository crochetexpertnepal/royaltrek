import { ArrowRightLeft, BarChart3, BookOpen, CalendarDays, ClipboardList, Compass, FileText, Globe2, Image, LayoutDashboard, Map, MessageCircle, Mountain, PanelTop, Settings2, Users, WalletCards } from 'lucide-react'
import type { NavSection } from '../types'

export const navSections: NavSection[] = [
  { label: 'Workspace', items: [
    { label: 'Overview', path: '/', icon: LayoutDashboard },
    { label: 'Analytics', path: '/analytics', icon: BarChart3 },
  ] },
  { label: 'Content management', items: [
    { label: 'Blog', path: '/content/blog', icon: BookOpen, badge: '3' },
    { label: 'Website pages', path: '/content/pages', icon: FileText },
    { label: 'Media library', path: '/content/media', icon: Image },
    { label: 'FAQs & services', path: '/content/faqs', icon: MessageCircle },
    { label: 'Sliders & banners', path: '/content/banners', icon: PanelTop },
  ] },
  { label: 'Trekking management', items: [
    { label: 'Packages', path: '/trekking/packages', icon: Mountain },
    { label: 'Itineraries', path: '/trekking/itineraries', icon: CalendarDays },
    { label: 'Destinations', path: '/trekking/destinations', icon: Compass },
    { label: 'Tours', path: '/trekking/tours', icon: Map },
    { label: 'Travel gallery', path: '/trekking/gallery', icon: Image },
  ] },
  { label: 'Customers', items: [
    { label: 'Enquiries', path: '/customers/enquiries', icon: MessageCircle, badge: '8' },
    { label: 'Bookings', path: '/customers/bookings', icon: ClipboardList },
    { label: 'Customers', path: '/customers/people', icon: Users },
    { label: 'Payments', path: '/customers/payments', icon: WalletCards },
  ] },
  { label: 'System', items: [
    { label: 'SEO overview', path: '/system/seo', icon: Globe2 },
    { label: 'Redirects', path: '/system/redirects', icon: ArrowRightLeft, badge: '4' },
    { label: 'Website settings', path: '/system/settings', icon: Settings2 },
  ] },
]

export const routeLabels: Record<string, { eyebrow: string; title: string; detail: string }> = {
  '/': { eyebrow: 'Workspace', title: 'Good morning, Anika', detail: 'Here’s the shape of the trailhead today.' },
  '/analytics': { eyebrow: 'Workspace / Analytics', title: 'Analytics', detail: 'A clear view of reach, intent, and conversion.' },
  '/content/blog': { eyebrow: 'Content management / Blog', title: 'Blog management', detail: 'Keep your travel stories useful, current, and discoverable.' },
  '/content/pages': { eyebrow: 'Content management / Website pages', title: 'Website pages', detail: 'Shape the pages that make the agency feel like home.' },
  '/content/media': { eyebrow: 'Content management / Media library', title: 'Media library', detail: 'A tidy source of truth for every image and brand asset.' },
  '/content/faqs': { eyebrow: 'Content management / FAQs & services', title: 'FAQs & services', detail: 'Answer the practical questions before they become friction.' },
  '/content/banners': { eyebrow: 'Content management / Banners', title: 'Sliders & banners', detail: 'Set the visual rhythm for campaigns and seasonal moments.' },
  '/trekking/packages': { eyebrow: 'Trekking management / Packages', title: 'Trekking packages', detail: 'The product catalogue your guests will remember.' },
  '/trekking/itineraries': { eyebrow: 'Trekking management / Itineraries', title: 'Itinerary builder', detail: 'Turn a route into a day-by-day story with room to breathe.' },
  '/trekking/destinations': { eyebrow: 'Trekking management / Destinations', title: 'Destinations', detail: 'Organise the places that give each trip its character.' },
  '/trekking/tours': { eyebrow: 'Trekking management / Tours', title: 'Tours', detail: 'Bring cultural, wildlife, city, and mountain days into one view.' },
  '/trekking/gallery': { eyebrow: 'Trekking management / Travel gallery', title: 'Travel gallery', detail: 'Curate the visual archive behind every departure.' },
  '/customers/enquiries': { eyebrow: 'Customers / Enquiries', title: 'Enquiries', detail: 'Keep every question moving toward a thoughtful answer.' },
  '/customers/bookings': { eyebrow: 'Customers / Bookings', title: 'Bookings', detail: 'See the commitments that make the next season real.' },
  '/customers/people': { eyebrow: 'Customers / People', title: 'Customers', detail: 'Build context around the people who trust your team.' },
  '/customers/payments': { eyebrow: 'Customers / Payments', title: 'Payments', detail: 'A calm view of deposits, balances, and transaction history.' },
  '/system/seo': { eyebrow: 'System / SEO', title: 'SEO overview', detail: 'Make the right pages easier to find, understand, and trust.' },
  '/system/redirects': { eyebrow: 'System / SEO / Redirects', title: 'Redirect management', detail: 'Keep old paths useful while your content evolves.' },
  '/system/settings': { eyebrow: 'System / Settings', title: 'Website settings', detail: 'Keep the agency identity and operating defaults in one place.' },
}
