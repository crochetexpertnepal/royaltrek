import { useMemo, useState } from 'react'
import { Bell, ChevronDown, HelpCircle, Menu, Moon, Plus, Search, Settings, Sun, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { navSections, routeLabels } from '../routes/navigation'
import { searchItems } from '../data/demo'
import { SearchField } from '../components/ui'

function BrandMark() {
  return <div className="brand-mark" aria-label="Royal Trek"><span className="brand-peak peak-back" /><span className="brand-peak peak-front" /><span className="brand-sun" /></div>
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [quickOpen, setQuickOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({})
  const [darkMode, setDarkMode] = useState(false)
  const pageMeta = routeLabels[location.pathname] ?? (location.pathname.startsWith('/content/blog/') ? routeLabels['/content/blog/:slug/edit'] : routeLabels['/'])
  const results = useMemo(() => searchItems.filter((item) => `${item.label} ${item.detail}`.toLowerCase().includes(search.toLowerCase())).slice(0, 5), [search])

  const go = (path: string) => { navigate(path); setMobileOpen(false); setSearch('') }
  return <div className={`app-shell ${collapsed ? 'sidebar-collapsed' : ''} ${darkMode ? 'dark-mode' : ''}`}>
    <aside className={`sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-header"><button className="brand-lockup" onClick={() => go('/')}><BrandMark /><span className="brand-name">royal trek<span>.</span></span></button><button className="icon-button sidebar-close" onClick={() => setMobileOpen(false)}><X size={18} /></button></div>
      <div className="sidebar-scroll"><div className="workspace-switcher"><div className="workspace-avatar">RT</div><div className="workspace-copy"><strong>Royal Trek Nepal</strong><span>Agency workspace</span></div><ChevronDown size={15} /></div>
        <nav>{navSections.map((section) => { const sectionCollapsed = collapsedSections[section.label]; return <div className={`nav-section ${sectionCollapsed ? 'section-collapsed' : ''}`} key={section.label}><button className="nav-section-toggle" onClick={() => setCollapsedSections((current) => ({ ...current, [section.label]: !current[section.label] }))}><span className="nav-section-label">{section.label}</span><ChevronDown size={13} /></button>{!sectionCollapsed && section.items.map((item) => { const Icon = item.icon; const active = location.pathname === item.path; return <button className={`nav-item ${active ? 'active' : ''}`} key={item.path} onClick={() => go(item.path)}><Icon size={17} strokeWidth={active ? 2.3 : 1.9} /><span>{item.label}</span>{item.badge && <span className="nav-badge">{item.badge}</span>}</button> })}</div> })}</nav>
      </div>
      <div className="sidebar-footer"><button className="user-chip"><div className="user-avatar">AS</div><div className="user-copy"><strong>Anika Sharma</strong><span>Administrator</span></div><ChevronDown size={14} /></button></div>
    </aside>
    <main className="main-area">
      <header className="topbar"><div className="topbar-left"><button className="icon-button mobile-menu" onClick={() => setMobileOpen(true)}><Menu size={19} /></button><button className="icon-button collapse-button" onClick={() => setCollapsed((value) => !value)}><Menu size={19} /></button><div className="breadcrumb"><span>Royal Trek</span><span className="breadcrumb-separator">/</span><strong>{pageMeta.title}</strong></div></div><div className="topbar-actions"><div className="global-search-wrap"><SearchField value={search} onChange={setSearch} placeholder="Search anything..." />{search && <div className="search-results">{results.length ? results.map((result) => <button key={`${result.path}-${result.label}`} onClick={() => go(result.path)}><Search size={15} /><span><strong>{result.label}</strong><small>{result.detail}</small></span></button>) : <div className="search-empty">No matching records</div>}</div>}</div><button className="quick-create" onClick={() => setQuickOpen((value) => !value)}><Plus size={16} /> <span>Quick create</span></button><button className="icon-button" onClick={() => setNotificationsOpen((value) => !value)} aria-label="Notifications"><Bell size={18} /><i className="notification-dot" /></button><button className="icon-button help-button" aria-label="Help"><HelpCircle size={18} /></button><button className="icon-button" onClick={() => setDarkMode((value) => !value)} aria-label="Toggle theme">{darkMode ? <Sun size={18} /> : <Moon size={18} />}</button><button className="topbar-profile" onClick={() => setProfileOpen((value) => !value)} aria-label="Open profile menu"><span className="user-avatar">AS</span><span>Anika</span><ChevronDown size={13} /></button></div></header>
      <div className="content-wrap">{children}</div>
    </main>
    {mobileOpen && <button className="mobile-scrim" onClick={() => setMobileOpen(false)} aria-label="Close navigation" />}
    {quickOpen && <div className="popover quick-menu"><div className="popover-title">Create something new <button className="icon-button" onClick={() => setQuickOpen(false)}><X size={15} /></button></div>{[['New blog post','/content/blog'],['New trekking package','/trekking/packages'],['New destination','/trekking/destinations'],['New enquiry','/customers/enquiries'],['New redirect','/system/redirects']].map(([label, path]) => <button key={path} onClick={() => { go(path); setQuickOpen(false) }}><Plus size={15} /><span>{label}</span></button>)}</div>}
    {profileOpen && <div className="popover profile-menu"><div className="profile-menu-head"><span className="user-avatar">AS</span><div><strong>Anika Sharma</strong><small>Administrator</small></div></div><button onClick={() => go('/system/settings')}>Account settings</button><button onClick={() => setProfileOpen(false)}>Sign out</button></div>}{notificationsOpen && <div className="popover notification-menu"><div className="popover-title">Notifications <span className="unread-count">3 unread</span></div><div className="notification-item"><span className="notification-icon orange"><Bell size={15} /></span><div><strong>New enquiry from Jenna Miller</strong><small>12 minutes ago</small></div></div><div className="notification-item"><span className="notification-icon teal"><Settings size={15} /></span><div><strong>SEO audit finished</strong><small>1 hour ago</small></div></div><button className="notification-link" onClick={() => setNotificationsOpen(false)}>View notification centre</button></div>}
  </div>
}
