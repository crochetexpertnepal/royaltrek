'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { MemoryRouter, useLocation, useNavigate } from 'react-router-dom'
import App from '../../src/App'

function LocationBridge() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const nextUrl = `${location.pathname}${location.search}${location.hash}`
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`
    if (nextUrl !== currentUrl) window.history.pushState({}, '', nextUrl)
  }, [location])

  useEffect(() => {
    const handlePopState = () => navigate(`${window.location.pathname}${window.location.search}${window.location.hash}`)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [navigate])

  return null
}

export default function ClientApp() {
  const pathname = usePathname() || '/'
  const searchParams = useSearchParams()
  const search = searchParams.toString()
  const initialPath = `${pathname}${search ? `?${search}` : ''}`

  return <MemoryRouter initialEntries={[initialPath]}><LocationBridge /><App /></MemoryRouter>
}
