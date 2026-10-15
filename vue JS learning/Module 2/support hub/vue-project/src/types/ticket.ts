export interface Ticket{
    ticket_id:number
    title:string
    status:'open' | 'closed' | 'pending'
}