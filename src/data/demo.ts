import { BellRing, FileText, Image, MapPinned, MessageCircle, PackageCheck, UserPlus } from 'lucide-react'
import type { ActivityRecord, EnquiryRecord, PackageRecord, TableRow } from '../types'

export const trafficData = [
  { day: '01', visitors: 2180, pages: 5100 },
  { day: '05', visitors: 2840, pages: 5900 },
  { day: '10', visitors: 2470, pages: 5450 },
  { day: '15', visitors: 3460, pages: 7100 },
  { day: '20', visitors: 3820, pages: 7850 },
  { day: '25', visitors: 4140, pages: 8420 },
  { day: '30', visitors: 4680, pages: 9200 },
]

export const enquiryData = [
  { month: 'Jan', enquiries: 32, bookings: 15 },
  { month: 'Feb', enquiries: 41, bookings: 20 },
  { month: 'Mar', enquiries: 37, bookings: 18 },
  { month: 'Apr', enquiries: 52, bookings: 28 },
  { month: 'May', enquiries: 61, bookings: 35 },
  { month: 'Jun', enquiries: 74, bookings: 42 },
]

export const packages: PackageRecord[] = [
  { name: 'Everest Base Camp', region: 'Khumbu, Nepal', duration: '16 days', price: '$2,480', status: 'Published', difficulty: 'Challenging', color: '#E5F1E6' },
  { name: 'Annapurna Circuit', region: 'Annapurna, Nepal', duration: '14 days', price: '$1,960', status: 'Published', difficulty: 'Moderate', color: '#FBEAD8' },
  { name: 'Langtang Valley', region: 'Langtang, Nepal', duration: '11 days', price: '$1,320', status: 'In review', difficulty: 'Moderate', color: '#DDECEF' },
  { name: 'Upper Mustang', region: 'Mustang, Nepal', duration: '17 days', price: '$2,860', status: 'Draft', difficulty: 'Challenging', color: '#F1E8D4' },
]

export const enquiries: EnquiryRecord[] = [
  { initials: 'JM', name: 'Jenna Miller', request: 'Everest Base Camp · 2 travellers', date: 'Today, 09:42', status: 'New', tone: '#EAF4EE' },
  { initials: 'RA', name: 'Ravi Ahuja', request: 'Private Annapurna Circuit · 4 travellers', date: 'Today, 08:16', status: 'Follow-up', tone: '#FFF1DF' },
  { initials: 'SD', name: 'Sofia Duarte', request: 'Langtang Valley · 1 traveller', date: 'Yesterday, 17:28', status: 'Pending', tone: '#E7F0F2' },
  { initials: 'MK', name: 'Michael Kim', request: 'Manaslu Circuit · 3 travellers', date: 'Yesterday, 15:04', status: 'Confirmed', tone: '#F1E9DE' },
]

export const activities: ActivityRecord[] = [
  { title: 'New enquiry received', detail: 'Jenna Miller · Everest Base Camp', time: '12 min ago', icon: MessageCircle, tone: 'orange' },
  { title: 'Package moved to review', detail: 'Langtang Valley · by Anika Sharma', time: '1 hr ago', icon: PackageCheck, tone: 'teal' },
  { title: 'Homepage banner published', detail: 'Autumn in the high Himalaya', time: '2 hrs ago', icon: Image, tone: 'violet' },
  { title: 'New team member added', detail: 'Pema Sherpa · Mountain guide', time: '4 hrs ago', icon: UserPlus, tone: 'blue' },
]

export const contentRows: Record<string, TableRow[]> = {
  blog: [
    { name: 'Links people cannot tell are links', secondary: 'Accessibility · /link-visibility', status: 'Published', meta: 'Updated today', owner: 'Anika Sharma' },
    { name: 'A practical guide to trekking in Nepal', secondary: 'Travel guide · /trekking-nepal', status: 'Published', meta: '2,480 views', owner: 'Anika Sharma' },
    { name: 'When is the best time for Everest Base Camp?', secondary: 'Planning · /best-time-everest', status: 'In review', meta: 'Draft updated today', owner: 'Maya K.' },
    { name: 'The quiet side of the Annapurna Circuit', secondary: 'Stories · /quiet-annapurna', status: 'Draft', meta: 'Last edited 2 days ago', owner: 'Pema Sherpa' },
    { name: 'Packing for a high-altitude trek', secondary: 'Gear · /packing-high-altitude', status: 'Published', meta: '1,920 views', owner: 'Anika Sharma' },
  ],
  pages: [
    { name: 'Home page', secondary: 'Homepage · /', status: 'Published', meta: 'Updated 2 hours ago', owner: 'Anika Sharma' },
    { name: 'About Trailhead', secondary: 'Company · /about', status: 'Published', meta: 'Updated Aug 12', owner: 'Maya K.' },
    { name: 'Responsible travel', secondary: 'Landing page · /responsible-travel', status: 'Draft', meta: 'Section builder', owner: 'Maya K.' },
  ],
  destinations: [
    { name: 'Everest Region', secondary: 'Nepal · Khumbu', status: 'Published', meta: '8 packages', owner: 'Anika Sharma' },
    { name: 'Annapurna Region', secondary: 'Nepal · Gandaki', status: 'Published', meta: '12 packages', owner: 'Pema Sherpa' },
    { name: 'Upper Mustang', secondary: 'Nepal · Mustang', status: 'In review', meta: '3 packages', owner: 'Maya K.' },
    { name: 'Langtang Valley', secondary: 'Nepal · Bagmati', status: 'Published', meta: '5 packages', owner: 'Anika Sharma' },
  ],
  tours: [
    { name: 'Kathmandu Valley Heritage', secondary: 'Cultural tour · 4 days', status: 'Published', meta: '$620 / person', owner: 'Travel desk' },
    { name: 'Mountain Flight & Namche', secondary: 'Helicopter tour · 1 day', status: 'Upcoming', meta: '$980 / person', owner: 'Travel desk' },
    { name: 'Chitwan Wildlife Escape', secondary: 'Wildlife tour · 3 days', status: 'Published', meta: '$480 / person', owner: 'Travel desk' },
  ],
  enquiries: enquiries.map((row) => ({ name: row.name, secondary: row.request, status: row.status, meta: row.date, owner: 'Unassigned' })),
  bookings: [
    { name: 'BK-2026-0418', secondary: 'Jenna Miller · Everest Base Camp', status: 'Pending', meta: '2 travellers · Oct 14', owner: 'Anika Sharma' },
    { name: 'BK-2026-0417', secondary: 'Michael Kim · Manaslu Circuit', status: 'Confirmed', meta: '3 travellers · Sep 22', owner: 'Pema Sherpa' },
    { name: 'BK-2026-0416', secondary: 'Asha Patel · Annapurna Circuit', status: 'Confirmed', meta: '2 travellers · Nov 02', owner: 'Anika Sharma' },
    { name: 'BK-2026-0415', secondary: 'Lucas Meyer · Langtang Valley', status: 'Archived', meta: '1 traveller · Aug 18', owner: 'Travel desk' },
  ],
  customers: [
    { name: 'Jenna Miller', secondary: 'United States · 1 enquiry', status: 'New', meta: 'Last active today', owner: '—' },
    { name: 'Michael Kim', secondary: 'South Korea · 2 bookings', status: 'Confirmed', meta: 'Lifetime $5,220', owner: '—' },
    { name: 'Asha Patel', secondary: 'United Kingdom · 1 booking', status: 'Confirmed', meta: 'Lifetime $1,960', owner: '—' },
  ],
  media: [
    { name: 'everest-sunrise.webp', secondary: 'Hero image · 2400 × 1600', status: 'Published', meta: '2.4 MB', owner: 'Media team' },
    { name: 'annapurna-trail.webp', secondary: 'Package gallery · 1800 × 1200', status: 'Published', meta: '1.8 MB', owner: 'Media team' },
    { name: 'trailhead-wordmark.svg', secondary: 'Brand asset · 640 × 120', status: 'Published', meta: '42 KB', owner: 'Media team' },
  ],
}

export const redirects = [
  { id: 'RED-104', source: '/trekking/everest-base-camp', destination: '/trekking/packages/everest-base-camp', type: '301', status: 'Active', hits: '1,842', updated: 'Today, 09:12' },
  { id: 'RED-103', source: '/blog/best-season-nepal', destination: '/content/best-time-trek-nepal', type: '301', status: 'Active', hits: '928', updated: 'Yesterday' },
  { id: 'RED-102', source: '/offers/autumn-2025', destination: '/seasonal/autumn-himalaya', type: '302', status: 'Paused', hits: '416', updated: 'Aug 18' },
  { id: 'RED-101', source: '/old-contact', destination: '/contact', type: '307', status: 'Active', hits: '204', updated: 'Aug 15' },
  { id: 'RED-100', source: '/expedition/annapurna-legacy', destination: '', type: '410', status: 'Active', hits: '73', updated: 'Aug 12' },
]

export const searchItems = [
  ...packages.map((item) => ({ label: item.name, detail: `Package · ${item.region}`, path: '/trekking/packages' })),
  ...contentRows.blog.map((item) => ({ label: item.name, detail: 'Blog article', path: '/content/blog' })),
  ...contentRows.destinations.map((item) => ({ label: item.name, detail: 'Destination', path: '/trekking/destinations' })),
  ...contentRows.bookings.map((item) => ({ label: item.name, detail: 'Booking', path: '/customers/bookings' })),
  ...redirects.map((item) => ({ label: item.source, detail: `Redirect ${item.type} · ${item.destination || 'Gone'}`, path: '/system/redirects' })),
]

export const kpis = [
  { label: 'Website visitors', value: '24,680', change: '+18.2%', detail: 'vs. previous month', icon: MapPinned, tone: 'green' },
  { label: 'Active packages', value: '48', change: '+6', detail: 'this quarter', icon: PackageCheck, tone: 'teal' },
  { label: 'New enquiries', value: '126', change: '+24.5%', detail: 'last 30 days', icon: MessageCircle, tone: 'orange' },
  { label: 'Confirmed bookings', value: '32', change: '+12.8%', detail: 'last 30 days', icon: BellRing, tone: 'violet' },
]

export const upcomingDepartures = [
  { date: '14', month: 'OCT', name: 'Everest Base Camp', group: 'Jenna Miller + 1', days: 'in 24 days', color: 'orange' },
  { date: '22', month: 'SEP', name: 'Manaslu Circuit', group: 'Michael Kim + 2', days: 'in 2 days', color: 'teal' },
  { date: '02', month: 'NOV', name: 'Annapurna Circuit', group: 'Asha Patel + 1', days: 'in 43 days', color: 'violet' },
]
