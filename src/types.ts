import type { LucideIcon } from 'lucide-react'

export type NavItem = {
  label: string
  path: string
  icon: LucideIcon
  badge?: string
}

export type NavSection = {
  label: string
  items: NavItem[]
}

export type Status = 'Published' | 'Draft' | 'In review' | 'Upcoming' | 'Confirmed' | 'Pending' | 'Follow-up' | 'New' | 'Archived'

export type PackageRecord = {
  name: string
  region: string
  duration: string
  price: string
  status: Status
  difficulty: string
  color: string
}

export type EnquiryRecord = {
  initials: string
  name: string
  request: string
  date: string
  status: Status
  tone: string
}

export type ActivityRecord = {
  title: string
  detail: string
  time: string
  icon: LucideIcon
  tone: string
}

export type TableRow = {
  name: string
  secondary: string
  status: Status
  meta: string
  owner?: string
}
