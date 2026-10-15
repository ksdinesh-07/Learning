<template>
  <section class="dashboard">
    <header class="dashboard_header">
      <h2>SupportHub Dashboard</h2>
      <p>Manage and track customer support tickets.</p>
    </header>

    <ticket_summary />

    <section class="ticket_summary">
      <h3>Ticket Summary</h3>

      <div class="summary_items">
        <article class="summary_item">
          <h4>Total Tickets</h4>
          <p>{{ ticket_count }}</p>
        </article>

        <article class="summary_item">
          <h4>Open Tickets</h4>
          <p>{{ open_ticket_count }}</p>
        </article>

        <article class="summary_item">
          <h4>Closed Tickets</h4>
          <p>{{ closed_ticket_count }}</p>
        </article>
      </div>
    </section>

    <section class="ticket_list">
      <div class="section_header">
        <h3>Support Tickets</h3>
        <button type="button" @click="add_ticket">
          Add Sample Ticket
        </button>
      </div>

      <p v-if="tickets.length === 0">
        No tickets available.
      </p>

      <ul v-else>
        <li
          v-for="ticket in tickets"
          :key="ticket.ticket_id"
          class="ticket_item"
        >
          <div>
            <h4>{{ ticket.title }}</h4>

            <p v-if="ticket.description">
              {{ ticket.description }}
            </p>

            <span class="ticket_status">
              {{ ticket.status }}
            </span>
          </div>

          <button
            v-if="ticket.status !== 'closed'"
            type="button"
            @click="close_summary_ticket(ticket.ticket_id)"
          >
            Close Ticket
          </button>
        </li>
      </ul>
    </section>

    <section class="create_ticket">
      <h3>Create Ticket</h3>

      <form @submit.prevent="submit_ticket">
        <div>
          <label for="ticket_title">Title</label>
          <input
            id="ticket_title"
            v-model="ticket_form.title"
            placeholder="Enter ticket title"
            required
          />
        </div>

        <div>
          <label for="ticket_description">Description</label>
          <textarea
            id="ticket_description"
            v-model="ticket_form.description"
            placeholder="Describe the issue"
            required
          ></textarea>
        </div>

        <div>
          <label for="ticket_status">Status</label>
          <select id="ticket_status" v-model="ticket_form.status">
            <option value="open">Open</option>
            <option value="pending">Pending</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <button type="submit">Create Ticket</button>
      </form>
    </section>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import ticket_summary from '../components/ticket_summary.vue'
import { use_ticket_count } from '../composables/use_ticket_count'

const {
  tickets,
  ticket_count,
  open_ticket_count,
  closed_ticket_count,
  close_ticket: close_summary_ticket,
  add_ticket,
  add_ticket_with_details
} = use_ticket_count()

interface TicketForm {
  title: string
  description: string
  status: 'open' | 'closed' | 'pending'
}

const ticket_form = reactive<TicketForm>({
  title: '',
  description: '',
  status: 'open'
})

function submit_ticket() {
  const title = ticket_form.title.trim()
  const description = ticket_form.description.trim()

  if (!title || !description) {
    return
  }

  add_ticket_with_details({
    title,
    description,
    status: ticket_form.status
  })

  ticket_form.title = ''
  ticket_form.description = ''
  ticket_form.status = 'open'
}
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.dashboard_header p {
  color: #666;
}

.ticket_summary,
.ticket_list,
.create_ticket {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.summary_items {
  display: flex;
  gap: 16px;
}

.summary_item {
  flex: 1;
  padding: 12px;
  border-radius: 6px;
  background: #f4f6f8;
}

.summary_item p {
  font-size: 24px;
  font-weight: bold;
}

.section_header,
.ticket_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.ticket_list ul {
  padding: 0;
  list-style: none;
}

.ticket_item {
  padding: 16px 0;
  border-bottom: 1px solid #eee;
}

.ticket_item h4 {
  margin-bottom: 6px;
}

.ticket_status {
  display: inline-block;
  margin-top: 6px;
  padding: 4px 8px;
  border-radius: 4px;
  background: #edf0f3;
  text-transform: capitalize;
}

.create_ticket form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.create_ticket form div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.create_ticket input,
.create_ticket textarea,
.create_ticket select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font: inherit;
}

.create_ticket textarea {
  min-height: 100px;
}

button {
  width: fit-content;
  padding: 9px 14px;
  border: none;
  border-radius: 5px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}
</style>
