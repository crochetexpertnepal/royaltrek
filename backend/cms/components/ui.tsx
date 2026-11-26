import type { ReactNode } from 'react'
import { ArrowDownRight, ArrowUpRight, ChevronDown, MoreHorizontal, Search, SlidersHorizontal } from 'lucide-react'
import type { Status, TableRow } from '../types'

export function StatusBadge({ status }: { status: Status }) {
  const className = status.toLowerCase().replaceAll(' ', '-')
  return <span className={`status-badge ${className}`}><span className="status-dot" />{status}</span>
}

export function SectionHeading({ eyebrow, title, detail, action }: { eyebrow?: string; title: string; detail?: string; action?: ReactNode }) {
  return <div className="section-heading"><div>{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h2>{title}</h2>{detail && <p>{detail}</p>}</div>{action}</div>
}

export function MetricCard({ label, value, change, detail, icon: Icon, tone }: { label: string; value: string; change: string; detail: string; icon: React.ComponentType<{ size?: number; strokeWidth?: number }>; tone: string }) {
  const positive = change.startsWith('+')
  return <div className="metric-card"><div className={`metric-icon ${tone}`}><Icon size={18} strokeWidth={2.1} /></div><div className="metric-label">{label}</div><div className="metric-value">{value}</div><div className="metric-footer"><span className={positive ? 'trend positive' : 'trend negative'}>{positive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}{change}</span><span>{detail}</span></div></div>
}

export function ChartLegend({ items }: { items: { label: string; color: string }[] }) {
  return <div className="chart-legend">{items.map((item) => <span key={item.label}><i style={{ background: item.color }} />{item.label}</span>)}</div>
}

export function SearchField({ value, onChange, placeholder = 'Search' }: { value: string; onChange: (value: string) => void; placeholder?: string }) {
  return <label className="search-field"><Search size={16} /><input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} /><kbd>⌘ K</kbd></label>
}

export function FilterButton({ children = 'Filters', onClick }: { children?: ReactNode; onClick?: () => void }) {
  return <button className="ghost-button compact" onClick={onClick}><SlidersHorizontal size={15} />{children}<ChevronDown size={14} /></button>
}

export function DataTable({ rows, search, onSelect }: { rows: TableRow[]; search: string; onSelect?: (row: TableRow) => void }) {
  const filtered = rows.filter((row) => `${row.name} ${row.secondary} ${row.status} ${row.meta}`.toLowerCase().includes(search.toLowerCase()))
  return <div className="table-shell"><table><thead><tr><th>Name</th><th>Status</th><th>Details</th><th>Owner</th><th /></tr></thead><tbody>{filtered.map((row) => <tr key={row.name} onClick={() => onSelect?.(row)}><td><div className="table-name">{row.name}</div><div className="table-secondary">{row.secondary}</div></td><td><StatusBadge status={row.status} /></td><td className="table-muted">{row.meta}</td><td className="table-muted">{row.owner}</td><td><button className="icon-button" aria-label={`More options for ${row.name}`}><MoreHorizontal size={17} /></button></td></tr>)}{filtered.length === 0 && <tr><td colSpan={5}><div className="empty-state"><Search size={18} /><span>No records match “{search}”</span></div></td></tr>}</tbody></table></div>
}
