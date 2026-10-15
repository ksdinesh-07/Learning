import {ref,watchEffect} from 'vue'
import type { Ticket } from '@/types/ticket'
// const selected_status=ref('open')

export function use_ticket_ticket(tickets:{value:Ticket[]}){
    const selected_status=ref<'all' | Ticket['status']>('all')
    const filtered_tickets=ref<Ticket[]>([])

    watchEffect(()=>{
        if(selected_status.value==='all'){
            filtered_tickets.value=tickets.value        
        }else{
            filtered_tickets.value=tickets.value.filter((ticket)=>ticket.status===selected_status.value)
        }
    })

    return {selected_status,filtered_tickets}
}