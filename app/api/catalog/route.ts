import { NextResponse } from 'next/server'
import { publicDestinations, publicJournal, publicPackages, publicTours } from '../../../frontend/data/public-catalog'

export async function GET() {
  return NextResponse.json({
    packages: publicPackages,
    destinations: publicDestinations,
    tours: publicTours,
    journal: publicJournal,
    source: 'public-catalog-boundary',
    apiConnected: true,
  }, { headers: { 'Cache-Control': 'no-store' } })
}
