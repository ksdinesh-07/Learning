export interface Ticket {
  ticket_id: number
  title: string
  description?: string
  status: 'open' | 'closed' | 'pending'
}
