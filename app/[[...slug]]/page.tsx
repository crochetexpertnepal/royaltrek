'use client'

import dynamic from 'next/dynamic'

const ClientApp = dynamic(() => import('./client-app'), {
  ssr: false,
  loading: () => <main style={{ minHeight: '100vh', background: '#151515' }} />,
})

export default function CatchAllPage() {
  return <ClientApp />
}
