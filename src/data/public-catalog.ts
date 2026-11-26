import { contentRows, packages as cmsPackages } from './demo'

export const publicPackages = cmsPackages.filter((item) => item.status === 'Published')

export const publicDestinations = [
  { name: 'Everest Region', detail: 'High passes, Sherpa villages, and the world’s most iconic base camp.', altitude: '5,364m', tone: 'sunrise' },
  { name: 'Annapurna', detail: 'Diverse landscapes from subtropical valleys to dramatic mountain passes.', altitude: '5,416m', tone: 'ridge' },
  { name: 'Langtang Valley', detail: 'Quiet trails, alpine meadows, and a close-to-Kathmandu escape.', altitude: '4,984m', tone: 'forest' },
  { name: 'Upper Mustang', detail: 'A high desert of ancient villages, red cliffs, and hidden monasteries.', altitude: '3,840m', tone: 'desert' },
]

export const publicTours = [
  { name: 'Kathmandu Valley Heritage', type: 'Cultural tour', duration: '4 days', price: '$620', detail: 'Temples, courtyards, food, and living heritage with a local storyteller.', tone: 'city' },
  { name: 'Mountain Flight & Namche', type: 'Helicopter tour', duration: '1 day', price: '$980', detail: 'A spectacular morning above the Khumbu with time for lunch in Namche.', tone: 'sky' },
  { name: 'Chitwan Wildlife Escape', type: 'Wildlife tour', duration: '3 days', price: '$480', detail: 'Jungle walks, canoe rides, and a slower side of Nepal’s landscape.', tone: 'jungle' },
]

export const publicJournal = contentRows.blog.filter((item) => item.status === 'Published').slice(0, 4)
