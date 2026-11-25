import type { Metadata, Viewport } from 'next'
import '../src/styles.css'

export const metadata: Metadata = {
  title: 'Royal Trek Nepal — Meaningful journeys through the Himalaya',
  description: 'Thoughtful trekking, cultural tours, and local journeys across Nepal.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#151515',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
