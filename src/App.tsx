import { Navigate, Route, Routes } from 'react-router-dom'
import AppShell from './layouts/AppShell'
import { AnalyticsPage, BlogEditorPage, BlogPage, DashboardPage, ItineraryPage, RedirectPage, ResourcePage, SettingsPage } from './pages/DashboardPages'

export default function App() {
  return <AppShell><Routes>
    <Route path="/" element={<DashboardPage />} />
    <Route path="/analytics" element={<AnalyticsPage />} />
    <Route path="/trekking/itineraries" element={<ItineraryPage />} />
    <Route path="/system/settings" element={<SettingsPage />} />
    <Route path="/system/redirects" element={<RedirectPage />} />
    <Route path="/content/blog" element={<BlogPage />} />
    <Route path="/content/blog/:slug/edit" element={<BlogEditorPage />} />
    <Route path="/content/pages" element={<ResourcePage dataKey="pages" title="Website pages" action="New page" />} />
    <Route path="/content/media" element={<ResourcePage dataKey="media" title="Media library" action="Upload media" />} />
    <Route path="/content/faqs" element={<ResourcePage dataKey="blog" title="FAQs & services" action="New FAQ" />} />
    <Route path="/content/banners" element={<ResourcePage dataKey="media" title="Sliders & banners" action="New banner" />} />
    <Route path="/trekking/packages" element={<ResourcePage dataKey="blog" title="Trekking packages" action="New package" packageView />} />
    <Route path="/trekking/destinations" element={<ResourcePage dataKey="destinations" title="Destinations" action="New destination" />} />
    <Route path="/trekking/tours" element={<ResourcePage dataKey="tours" title="Tours" action="New tour" />} />
    <Route path="/trekking/gallery" element={<ResourcePage dataKey="media" title="Travel gallery" action="Add gallery item" />} />
    <Route path="/customers/enquiries" element={<ResourcePage dataKey="enquiries" title="Enquiries" action="New enquiry" />} />
    <Route path="/customers/bookings" element={<ResourcePage dataKey="bookings" title="Bookings" action="New booking" />} />
    <Route path="/customers/people" element={<ResourcePage dataKey="customers" title="Customers" action="Add customer" />} />
    <Route path="/customers/payments" element={<ResourcePage dataKey="bookings" title="Payments" action="Record payment" />} />
    <Route path="/system/seo" element={<ResourcePage dataKey="pages" title="SEO overview" action="Run audit" seoView />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes></AppShell>
}
