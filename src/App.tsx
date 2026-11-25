import { Navigate, Route, Routes } from 'react-router-dom'
import AppShell from './layouts/AppShell'
import { AnalyticsPage, BlogEditorPage, BlogPage, DashboardPage, ItineraryPage, RedirectPage, ResourcePage, SettingsPage } from './pages/DashboardPages'
import { AboutPage, ContactPage, HomePage, JournalArticlePage, ListingPage, PackagePage } from './pages/PublicSite'

function CmsFrame({ children }: { children: React.ReactNode }) { return <AppShell>{children}</AppShell> }

export default function App() {
  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/treks" element={<ListingPage kind="treks" />} />
    <Route path="/treks/:slug" element={<PackagePage />} />
    <Route path="/destinations" element={<ListingPage kind="destinations" />} />
    <Route path="/tours" element={<ListingPage kind="tours" />} />
    <Route path="/journal" element={<ListingPage kind="journal" />} />
    <Route path="/journal/:slug" element={<JournalArticlePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />

    <Route path="/admin" element={<CmsFrame><DashboardPage /></CmsFrame>} />
    <Route path="/analytics" element={<CmsFrame><AnalyticsPage /></CmsFrame>} />
    <Route path="/trekking/itineraries" element={<CmsFrame><ItineraryPage /></CmsFrame>} />
    <Route path="/system/settings" element={<CmsFrame><SettingsPage /></CmsFrame>} />
    <Route path="/system/redirects" element={<CmsFrame><RedirectPage /></CmsFrame>} />
    <Route path="/content/blog" element={<CmsFrame><BlogPage /></CmsFrame>} />
    <Route path="/content/blog/:slug/edit" element={<CmsFrame><BlogEditorPage /></CmsFrame>} />
    <Route path="/content/pages" element={<CmsFrame><ResourcePage dataKey="pages" title="Website pages" action="New page" /></CmsFrame>} />
    <Route path="/content/media" element={<CmsFrame><ResourcePage dataKey="media" title="Media library" action="Upload media" /></CmsFrame>} />
    <Route path="/content/faqs" element={<CmsFrame><ResourcePage dataKey="blog" title="FAQs & services" action="New FAQ" /></CmsFrame>} />
    <Route path="/content/banners" element={<CmsFrame><ResourcePage dataKey="media" title="Sliders & banners" action="New banner" /></CmsFrame>} />
    <Route path="/trekking/packages" element={<CmsFrame><ResourcePage dataKey="blog" title="Trekking packages" action="New package" packageView /></CmsFrame>} />
    <Route path="/trekking/destinations" element={<CmsFrame><ResourcePage dataKey="destinations" title="Destinations" action="New destination" /></CmsFrame>} />
    <Route path="/trekking/tours" element={<CmsFrame><ResourcePage dataKey="tours" title="Tours" action="New tour" /></CmsFrame>} />
    <Route path="/trekking/gallery" element={<CmsFrame><ResourcePage dataKey="media" title="Travel gallery" action="Add gallery item" /></CmsFrame>} />
    <Route path="/customers/enquiries" element={<CmsFrame><ResourcePage dataKey="enquiries" title="Enquiries" action="New enquiry" /></CmsFrame>} />
    <Route path="/customers/bookings" element={<CmsFrame><ResourcePage dataKey="bookings" title="Bookings" action="New booking" /></CmsFrame>} />
    <Route path="/customers/people" element={<CmsFrame><ResourcePage dataKey="customers" title="Customers" action="Add customer" /></CmsFrame>} />
    <Route path="/customers/payments" element={<CmsFrame><ResourcePage dataKey="bookings" title="Payments" action="Record payment" /></CmsFrame>} />
    <Route path="/system/seo" element={<CmsFrame><ResourcePage dataKey="pages" title="SEO overview" action="Run audit" seoView /></CmsFrame>} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
}
