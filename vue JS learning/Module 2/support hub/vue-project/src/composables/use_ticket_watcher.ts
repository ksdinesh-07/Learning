
import { ref, watch } from 'vue'

export function use_ticket_watcher() {
  const ticket_status = ref<'open' | 'closed'>('open')
  const status_message = ref('Ticket is open')

  watch(ticket_status, (new_status, old_status) => {
    status_message.value =
      `Ticket status changed from ${old_status} to ${new_status}`
  })

  function close_ticket() {
    ticket_status.value = 'closed'
  }

  function reopen_ticket() {
    ticket_status.value = 'open'
  }

  return {
    ticket_status,
    status_message,
    close_ticket,
    reopen_ticket
  }
}
