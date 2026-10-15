
<template>
  <section>
    <h2>SupportHub Dashboard</h2>

    <p v-if="is_loading">Loading tickets...</p>
    <div v-else>
    <p>Total Tickets: {{ ticket_count }}</p>
    <p>Open Tickets: {{ open_ticket_count }}</p>
    <p>Closed Tickets: {{ closed_ticket_count }}</p>
    </div>

    <ticket_summary />

    <!-- <LifecycleDemo /> -->

    <h3>Ticket Summary</h3>

    <p>Total Tickets: {{ ticket_count }}</p>
    <p>Open Tickets: {{ open_ticket_count }}</p>
    <p>Closed Tickets: {{ closed_ticket_count }}</p>

    <button @click="add_ticket">
      Add Ticket
    </button>

    <ul>
      <li v-for="ticket in tickets" :key="ticket.ticket_id">
        {{ ticket.title }} — {{ ticket.status }}

        <button
          v-if="ticket.status !== 'closed'"
          @click="close_summary_ticket(ticket.ticket_id)"
        >
          Close Ticket
        </button>
      </li>
    </ul>

    <hr />

    <h3>Ticket Status Watcher</h3>

    <p>Current status: {{ ticket_status }}</p>
    <p>{{ status_message }}</p>

    <button
      v-if="ticket_status === 'open'"
      @click="close_watched_ticket"
    >
      Close Watched Ticket
    </button>

    <button
      v-else
      @click="reopen_ticket"
    >
      Reopen Watched Ticket
    </button>

    <hr />

    <ticket_card>
      <template #status="{ status }">
        <p>
          Current status:
          <strong>{{ status }}</strong>
        </p>
      </template>
    </ticket_card>
  </section>

    <section>
        <h3>API Fetch Demo</h3>

        <p v-if="is_loading">Loading data...</p>

        <p v-else-if="error_message">
            {{ error_message }}
        </p>

        <ul v-else>
            <li v-for="ticket in demo_tickets" :key="ticket.id">
            {{ ticket.title }} —
            {{ ticket.completed ? 'Completed' : 'Pending' }}
            </li>
        </ul>
    </section>

    <section>
        <h3>Ticket Snapshot</h3>

        <button @click="refresh_ticket_snapshot">
            Refresh Ticket Snapshot
        </button>

        <ul>
            <li
            v-for="ticket in ticket_snapshot"
            :key="ticket.ticket_id"
            >
            {{ ticket.title }} — {{ ticket.status }}
            </li>
        </ul>
    </section>

</template>

<script setup lang="ts">
import ticket_card from '../components/ticket_card.vue'
import ticket_summary from '../components/ticket_summary.vue'
// import LifecycleDemo from '../components/LifecycleDemo.vue'
import { onMounted,ref,shallowRef } from 'vue'

import { use_ticket_count } from '../composables/use_ticket_count'
import { use_ticket_watcher } from '../composables/use_ticket_watcher'

const {
  tickets,
  ticket_count,
  open_ticket_count,
  closed_ticket_count,
  close_ticket: close_summary_ticket,
  add_ticket
} = use_ticket_count()

const {
  ticket_status,
  status_message,
  close_ticket: close_watched_ticket,
  reopen_ticket
} = use_ticket_watcher()

// onMounted(()=>{
//     console.log('Support Hub dashboard loaded');
//     console.log('Total tickets: ',ticket_count.value)
// })

// const is_loading=ref(true)

// async function load_tickets(){
//     try{
//         console.log('Loading supporthub tickets...')
//         await new Promise<void>((resolve)=>{
//             setTimeout(resolve,1000)
//         })
//         console.log('Tickets are ready')
//     }
//     catch(err){
//         console.log('Failed to load tickets:',err)
//     }finally{
//         is_loading.value=false
//     }
// }

type DemoTicket = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const demo_tickets = ref<DemoTicket[]>([])
const is_loading = ref(false)
const error_message = ref('')

async function load_tickets() {
  is_loading.value = true
  error_message.value = ''

  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=5'
    )

    if (!response.ok) {
      throw new Error('Unable to load tickets')
    }

    demo_tickets.value = await response.json()
  } catch (error) {
    error_message.value =
      error instanceof Error
        ? error.message
        : 'Something went wrong'
  } finally {
    is_loading.value = false
  }
}

onMounted(() => {
  load_tickets()
})

import type { Ticket } from '../types/ticket'

const ticket_snapshot = shallowRef<Ticket[]>([
  { ticket_id: 101, title: 'Login issue', status: 'open' },
  { ticket_id: 102, title: 'Payment issue', status: 'pending' }
])

function refresh_ticket_snapshot() {
  ticket_snapshot.value = [
    ...ticket_snapshot.value,
    {
      ticket_id: ticket_snapshot.value.length + 101,
      title: 'New API Ticket',
      status: 'open'
    }
  ]
}
</script>
