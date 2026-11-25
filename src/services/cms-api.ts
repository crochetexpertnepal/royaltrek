export type EnquiryPayload = {
  name: string
  email: string
  timeframe?: string
  travellers?: string
  message: string
}

export async function submitEnquiry(payload: EnquiryPayload) {
  const response = await fetch('/api/enquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await response.json()
  if (!response.ok) throw new Error(data.error ?? 'Unable to send enquiry')
  return data
}

export async function getCatalog() {
  const response = await fetch('/api/catalog', { cache: 'no-store' })
  if (!response.ok) throw new Error('Unable to load catalogue')
  return response.json()
}
