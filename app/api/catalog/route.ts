import { NextResponse } from 'next/server'
import { contentRows, packages } from '../../../src/data/demo'

const destinations = [
  { name: 'Everest Region', detail: 'High passes, Sherpa villages, and the world’s most iconic base camp.', altitude: '5,364m' },
  { name: 'Annapurna', detail: 'Diverse landscapes from subtropical valleys to dramatic mountain passes.', altitude: '5,416m' },
  { name: 'Langtang Valley', detail: 'Quiet trails, alpine meadows, and a close-to-Kathmandu escape.', altitude: '4,984m' },
  { name: 'Upper Mustang', detail: 'A high desert of ancient villages, red cliffs, and hidden monasteries.', altitude: '3,840m' },
]

export async function GET() {
  return NextResponse.json({
    packages,
    destinations,
    tours: contentRows.tours,
    journal: contentRows.blog,
    source: 'demo-data',
    apiConnected: false,
  }, { headers: { 'Cache-Control': 'no-store' } })
}
