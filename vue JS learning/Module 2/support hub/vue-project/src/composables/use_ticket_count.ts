import type{Ticket} from '../types/ticket'
import { ref, computed } from 'vue'

// type Ticket = {
//   ticket_id: number
//   title: string
//   status: 'open' | 'closed' | 'pending'
// }

export function use_ticket_count() {
  const tickets = ref<Ticket[]>([
    { ticket_id: 1, title: 'Login issue', status: 'open' },
    { ticket_id: 2, title: 'Payment issue', status: 'closed' },
    { ticket_id: 3, title: 'Profile issue', status: 'pending' },
    { ticket_id: 4, title: 'Password issue', status: 'open' }
  ])

  const open_ticket_count = computed(() => {
    return tickets.value.filter(
      (ticket) => ticket.status === 'open'
    ).length
  })

  const closed_ticket_count = computed(() => {
    return tickets.value.filter(
      (ticket) => ticket.status === 'closed'
    ).length
  })

  const ticket_count = computed(() => tickets.value.length)

  function close_ticket(ticket_id: number) {
    const ticket = tickets.value.find(
      (ticket) => ticket.ticket_id === ticket_id
    )

    if (ticket) {
      ticket.status = 'closed'
    }
  }

  function add_ticket() {
    const new_ticket_id =
      Math.max(0, ...tickets.value.map((ticket) => ticket.ticket_id)) + 1

    tickets.value.push({
      ticket_id: new_ticket_id,
      title: `New Ticket ${new_ticket_id}`,
      status: 'open'
    })
  }

  return {
    tickets,
    ticket_count,
    open_ticket_count,
    closed_ticket_count,
    close_ticket,
    add_ticket
  }
}
