# Vue.js 

## 1 Architecture and Component Design

## Introduction to Vue.js

Vue.js is a JavaScript framework used to build interactive user interfaces and web applications. It provides a structured way to connect application data with HTML and update the user interface when the data changes.

In a traditional JavaScript application, we may need to find HTML elements and update their content manually. Vue.js simplifies this process through its reactive system.

For example, consider an employee management application. When an employee's name changes, Vue can automatically update the employee name displayed on the screen without manually modifying the DOM.

### Why do we use Vue.js?

Vue.js provides several features that help developers build and maintain applications.

- **Reactivity:** Updates the UI when reactive data changes.
- **Components:** Divides an application into small, reusable parts.
- **Directives:** Provides special attributes such as `v-if`, `v-for`, and `v-model`.
- **Event handling:** Handles user interactions such as clicks and form submissions.
- **Component communication:** Allows components to share data and respond to events.
- **Maintainability:** Organizes code into manageable sections.

### Understanding the basic Vue application

A typical Vue application created with Vite contains files such as:

```text
src/
├── components/
│   ├── EmployeeCard.vue
│   └── EmployeeList.vue
├── App.vue
└── main.js
```

- `main.js` creates and mounts the Vue application.
- `App.vue` is the root component.
- `components/` contains reusable components.
- Other components can be imported into `App.vue` or into their respective parent components.

A simple `main.js` file looks like this:

```javascript
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
```

The `createApp()` function creates the Vue application, and `mount("#app")` connects it to the HTML element with the ID `app`.

## Understanding Vue.js Components

A component is a reusable part of a user interface that has a specific responsibility.

For example, an employee management application may contain an employee form, an employee list, individual employee cards, and a navigation bar. Each of these can be implemented as a separate component.

### Why are components important?

Suppose an application displays employee information on several pages. Writing the same HTML repeatedly makes the application difficult to maintain.

Instead, we can create an `EmployeeCard.vue` component and reuse it for different employees.

The main advantages are:

- **Reusability:** The same component can display different data.
- **Separation of responsibilities:** Each component handles a particular task.
- **Maintainability:** Changes can be made in one component without rewriting the entire application.
- **Readability:** Smaller files are easier to understand.
- **Scalability:** New features can be added without making a single file excessively large.

### Example

Create `EmployeeCard.vue`.

```vue
<template>
    <div class="employee-card">
        <h2>Employee Details</h2>
        <p>Name: Dinesh</p>
        <p>Role: Developer</p>
    </div>
</template>
```

This component displays employee information. However, the data is currently hardcoded. We can make it reusable by passing the employee's name and role through props.

## Single File Components (SFCs)

A Single File Component, commonly called an SFC, is a Vue component stored in a `.vue` file.

An SFC usually combines three main sections:

- `<script setup>` — contains JavaScript logic and component data.
- `<template>` — defines the user interface.
- `<style scoped>` — contains CSS styles for the component.

Keeping these sections together makes it easier to understand how the component's data, structure, and appearance are related.

### Basic structure of an SFC

```vue
<script setup>
import { ref } from "vue";

const employee_name = ref("Dinesh");

function change_name() {
    employee_name.value = "Arun";
}
</script>

<template>
    <div class="employee-card">
        <h2>Employee Details</h2>
        <p>{{ employee_name }}</p>
        <button @click="change_name">Change Name</button>
    </div>
</template>

<style scoped>
.employee-card {
    padding: 16px;
    border: 1px solid #cccccc;
    border-radius: 8px;
}

button {
    padding: 8px 12px;
    cursor: pointer;
}
</style>
```

### Understanding the `<script setup>` section

The `<script setup>` section contains the component's JavaScript logic. We can declare variables, create functions, import other components, and manage reactive state.

In this example:

```javascript
import { ref } from "vue";

const employee_name = ref("Dinesh");
```

The `ref()` function creates a reactive reference. When its value changes, Vue updates the parts of the template that depend on it.

To change the value in JavaScript, we use:

```javascript
employee_name.value = "Arun";
```

Inside the template, Vue automatically unwraps refs, so we can write:

```html
<p>{{ employee_name }}</p>
```

We do not need to write `employee_name.value` in the template.

The `<script setup>` syntax is part of Vue's Composition API. It makes component code more concise and exposes top-level variables and functions to the template automatically.

### Understanding the `<template>` section

The `<template>` section describes what the user sees on the screen.

Vue supports normal HTML elements, data interpolation, directives, and component elements inside the template.

For example:

```vue
<template>
    <div>
        <h2>{{ employee_name }}</h2>
        <button @click="change_name">Update Name</button>
    </div>
</template>
```

Here:

- `{{ employee_name }}` displays the current employee name.
- `@click` listens for a click event.
- `change_name` runs when the button is clicked.

The template connects the component's JavaScript logic to its visible interface.

### Understanding the `<style scoped>` section

The `<style scoped>` section contains CSS for the component.

```vue
<style scoped>
.employee-card {
    padding: 20px;
    border-radius: 8px;
    background-color: #f5f5f5;
}
</style>
```

The `scoped` attribute helps limit the styles to elements belonging to that component. Vue achieves this by adding generated scope attributes to the relevant elements and CSS selectors.

Scoped styles are useful when different components have similarly named CSS classes.

They are not a complete style-isolation mechanism, so global styles, inherited properties, and some child-component styling can still affect the result.

### Advantages of Single File Components

- Keeps related code in one file.
- Makes components easier to understand and maintain.
- Supports component-specific styling.
- Allows components to be imported and reused.
- Works with build tools such as Vite.
- Makes large applications easier to organize.

## Component Architecture

Component architecture describes how an application is divided into components and how those components work together.

Instead of building an entire application inside one large component, we divide it into smaller components based on their responsibilities.

### Example of component architecture

Consider an employee management application:

```text
App.vue
├── Navbar.vue
└── EmployeePage.vue
    ├── EmployeeForm.vue
    └── EmployeeList.vue
        └── EmployeeCard.vue
```

In this structure:

- `App.vue` acts as the root component.
- `Navbar.vue` displays navigation links.
- `EmployeePage.vue` organizes the employee page.
- `EmployeeForm.vue` collects employee information.
- `EmployeeList.vue` displays employee records.
- `EmployeeCard.vue` displays an individual employee.

The parent components organize their children and can coordinate how data flows through the application.

For example, the employee list can receive an array of employees through props. Each employee card can receive one employee's details. When a user requests deletion, the card can emit an event, and the parent can update the array.

### Parent and child components

A parent component is a component that uses another component in its template. The component being used is called the child.

For example:

```vue
<script setup>
import EmployeeCard from "./components/EmployeeCard.vue";
</script>

<template>
    <div>
        <h1>Employee Management</h1>
        <EmployeeCard />
    </div>
</template>
```

Here, `App.vue` is the parent, and `EmployeeCard.vue` is the child.

The parent controls where the child appears. The child can manage its own presentation and logic while receiving data or emitting events when necessary.

## Component Communication

Component communication is the process of sharing information or notifying other components about actions.

For example, an employee card may need an employee's name from its parent. When the user clicks Delete, the card may need to notify its parent.

Vue provides different communication methods for different situations:

- Props for passing data from parent to child.
- Emits for notifying a parent about child events.
- Slots for allowing the parent to supply template content.
- Provide and inject for sharing values with deeply nested descendants.

Choosing the correct method helps prevent unnecessary coupling between components.

## Props — Parent-to-Child Communication

Props allow a parent component to pass data to a child component.

The parent owns or supplies the data, while the child receives it and uses it to display information or perform its task.

### Why do we need props?

Consider an employee list containing many employees. Instead of creating a separate component with hardcoded details for every employee, we can create one reusable employee card and pass different values to it.

Props make this possible.

### Defining props in the child component

Create `EmployeeCard.vue`.

```vue
<script setup>
defineProps({
    employee_name: {
        type: String,
        required: true
    },
    employee_role: {
        type: String,
        default: "Developer"
    }
});
</script>

<template>
    <div class="employee-card">
        <h2>{{ employee_name }}</h2>
        <p>{{ employee_role }}</p>
    </div>
</template>
```

The `defineProps()` macro declares which properties the component accepts.

In this example:

- `employee_name` must be provided.
- `employee_name` is expected to be a string.
- `employee_role` is also a string.
- If the parent does not provide `employee_role`, Vue uses `"Developer"` as the default.

These declarations provide useful documentation and development-time validation.

### Passing props from the parent

Create `App.vue`.

```vue
<script setup>
import EmployeeCard from "./components/EmployeeCard.vue";
</script>

<template>
    <EmployeeCard
        employee_name="Dinesh"
        employee_role="Frontend Developer"
    />

    <EmployeeCard
        employee_name="Arun"
        employee_role="Backend Developer"
    />
</template>
```

Both instances use the same component, but each receives different values.

This demonstrates how props support component reusability.

### Passing dynamic values

Sometimes a parent needs to pass a value stored in a JavaScript variable.

```vue
<script setup>
const employee_name = "Dinesh";
const employee_salary = 25000;
</script>

<template>
    <EmployeeCard
        :employee_name="employee_name"
        :employee_salary="employee_salary"
    />
</template>
```

The colon is shorthand for `v-bind:`. It tells Vue to evaluate the attribute as a JavaScript expression.

For example:

- `employee_name="Dinesh"` passes a static string.
- `:employee_name="employee_name"` passes the value of the JavaScript variable.
- `:employee_salary="employee_salary"` passes a number rather than a string.

The child must declare any props it intends to use.

### Are props reactive?

Yes. When a parent passes a reactive value as a prop, the child receives updates when that value changes.

For example, if the parent updates an employee's name, the child can display the updated name automatically.

However, the child should not directly modify the prop. Props follow a one-way data flow from parent to child.

If the child needs to request a change, it should emit an event so the parent can update its own data.

### When should we use props?

Use props when a component needs data supplied by its parent.

Common examples include:

- Passing employee details to an employee card.
- Passing a product price to a product component.
- Passing a title to a page header.
- Passing an array of records to a table.
- Passing a loading state to a reusable button.

## Emits — Child-to-Parent Communication

Emits allow a child component to notify its parent when something happens.

Props pass data downward, while emitted events provide a way for the child to communicate actions upward.

### Why do we need emits?

Consider a child component that displays an employee and includes a Delete button.

The child knows which employee was selected, but the parent owns the employee array. The child should notify the parent rather than directly managing the parent's list.

The parent can then decide how to update the data.

### Defining and emitting an event

Create `EmployeeCard.vue`.

```vue
<script setup>
const props = defineProps({
    employee_id: Number,
    employee_name: String
});

const emit = defineEmits(["delete_employee"]);

function handle_delete() {
    emit("delete_employee", props.employee_id);
}
</script>

<template>
    <div>
        <h2>{{ employee_name }}</h2>
        <button @click="handle_delete">Delete</button>
    </div>
</template>
```

The `defineEmits()` macro declares the event that the component can emit.

When the button is clicked, `handle_delete()` emits `delete_employee` and passes the employee ID as event data.

### Listening to the event in the parent

```vue
<script setup>
import { ref } from "vue";
import EmployeeCard from "./components/EmployeeCard.vue";

const employees = ref([
    { id: 1, name: "Dinesh" },
    { id: 2, name: "Arun" },
    { id: 3, name: "Kumar" }
]);

function delete_employee(employee_id) {
    employees.value = employees.value.filter(
        (employee) => employee.id !== employee_id
    );
}
</script>

<template>
    <EmployeeCard
        v-for="employee in employees"
        :key="employee.id"
        :employee_id="employee.id"
        :employee_name="employee.name"
        @delete_employee="delete_employee"
    />
</template>
```

### How does the communication work?

- The parent passes the employee ID and name to the child.
- The user clicks the Delete button.
- The child emits the `delete_employee` event.
- The event carries the employee ID.
- The parent listens for that event and calls its deletion function.
- The parent removes the matching employee from the array.
- Vue updates the displayed list.

The `:key` attribute gives each rendered component a stable identity, helping Vue track list items when the list changes.

### Common uses of emits

Emits can notify the parent about:

- A delete button click.
- A form submission.
- A selected item.
- A modal closing.
- A filter selection.
- A change in a child component's internal state.

### Props vs emits

| Props | Emits |
|---|---|
| Pass data from parent to child. | Notify parent about a child event. |
| Declared using `defineProps()`. | Declared using `defineEmits()`. |
| Used to provide values. | Used to report actions or changes. |
| Example: employee name. | Example: delete employee. |

Together, props and emits establish a clear communication pattern between parent and child components.

## Slots System

Slots allow a parent component to provide template content that a child component will render.

Props are suitable for passing data, but they are not always convenient for passing an entire section of HTML. Slots solve this problem by allowing the parent to control the content while the child controls the layout.

Vue supports default slots, named slots, and scoped slots.

### Default slots

A default slot is the simplest type of slot. It allows a parent to provide content for the default slot location inside a child component.

Create `BaseCard.vue`.

```vue
<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    padding: 20px;
    border: 1px solid #cccccc;
    border-radius: 8px;
}
</style>
```

The `<slot>` element marks where the parent-provided content should appear.

Use the component in `App.vue`.

```vue
<template>
    <BaseCard>
        <h2>Employee Details</h2>
        <p>Name: Dinesh</p>
        <p>Role: Developer</p>
    </BaseCard>

    <BaseCard>
        <h2>Department Details</h2>
        <p>Department: Engineering</p>
    </BaseCard>
</template>
```

Both instances use the same card component, but they display different content.

The child defines the common layout, and the parent supplies the content.

### Fallback content

A slot can contain fallback content that is displayed when the parent does not provide any content.

```vue
<template>
    <div class="card">
        <slot>No information available.</slot>
    </div>
</template>
```

If the parent provides content, Vue renders the supplied content. Otherwise, the fallback message is displayed.

Fallback content is useful when a component needs a reasonable default appearance.

### Named slots

Named slots allow a child component to define multiple content locations.

For example, a reusable layout may have a header, body, and footer. Different pages can provide their own content for each section.

Create `BaseLayout.vue`.

```vue
<template>
    <div class="card">
        <header>
            <slot name="header"></slot>
        </header>

        <main>
            <slot></slot>
        </main>

        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
```

Use the component in `App.vue`.

```vue
<template>
    <BaseLayout>
        <template #header>
            <h2>Employee Details</h2>
        </template>

        <p>Name: Dinesh</p>
        <p>Role: Developer</p>

        <template #footer>
            <button>View Profile</button>
        </template>
    </BaseLayout>
</template>
```

Here:

- `#header` supplies content to the slot named `header`.
- The paragraphs go into the default slot.
- `#footer` supplies content to the slot named `footer`.

The `#` symbol is shorthand for `v-slot:`.

Named slots are useful when a component has multiple sections that need independent customization.

### Scoped slots

Scoped slots allow a child component to provide data to template content supplied by its parent.

This is useful when the child owns or manages the data but the parent needs control over how that data is displayed.

Create `EmployeeList.vue`.

```vue
<script setup>
import { ref } from "vue";

const employees = ref([
    { id: 1, name: "Dinesh", role: "Developer" },
    { id: 2, name: "Arun", role: "Designer" }
]);
</script>

<template>
    <div>
        <slot
            v-for="employee in employees"
            :key="employee.id"
            :employee="employee"
        ></slot>
    </div>
</template>
```

The child loops through its employee records and exposes each record as a slot prop named `employee`.

Use the component in `App.vue`.

```vue
<template>
    <EmployeeList v-slot="{ employee }">
        <div>
            <h3>{{ employee.name }}</h3>
            <p>{{ employee.role }}</p>
        </div>
    </EmployeeList>
</template>
```

The parent receives the slot prop through `v-slot="{ employee }"` and decides how to render each record.

For example, one parent might display employees as cards, while another might display them as compact rows.

### When should we use slots?

Use slots when the parent needs to customize the content inside a reusable component.

Examples include:

- Reusable cards with different contents.
- Modal windows with different messages and actions.
- Layouts with custom headers and footers.
- Tables with customizable cells.
- Lists where the parent controls the presentation of each item.

Slots help separate the structure of a component from the content displayed inside it.

## Provide and Inject

Provide and inject allow an ancestor component to share a value with deeply nested descendant components without manually passing it through every intermediate component.

### Understanding prop drilling

Consider this component hierarchy:

```text
App.vue
└── EmployeePage.vue
    └── EmployeeSection.vue
        └── EmployeeDetails.vue
```

Suppose `App.vue` contains the current employee name, but only `EmployeeDetails.vue` needs to display it.

Without provide and inject, the employee name might need to be passed from `App.vue` to `EmployeePage.vue`, then to `EmployeeSection.vue`, and finally to `EmployeeDetails.vue`.

Passing data through components that do not need it is called prop drilling.

Provide and inject help avoid this unnecessary forwarding.

### The provide() function

The `provide()` function makes a value available to descendant components.

```vue
<script setup>
import { provide } from "vue";

const employee_name = "Dinesh";

provide("employee_name", employee_name);
</script>

<template>
    <EmployeePage />
</template>
```

The component provides the employee name using the key `"employee_name"`.

The value can then be accessed by descendant components that inject the same key.

### The inject() function

The `inject()` function retrieves a value provided by an ancestor.

Create `EmployeeDetails.vue`.

```vue
<script setup>
import { inject } from "vue";

const employee_name = inject("employee_name");
</script>

<template>
    <div>
        <h2>Employee Details</h2>
        <p>Name: {{ employee_name }}</p>
    </div>
</template>
```

The component retrieves the value using the same injection key.

Intermediate components do not need to receive or forward the employee name as a prop.

### Sharing reactive values

Provide and inject can also share reactive data.

```vue
<script setup>
import { provide, ref } from "vue";

const employee_name = ref("Dinesh");

provide("employee_name", employee_name);

function change_name() {
    employee_name.value = "Arun";
}
</script>

<template>
    <button @click="change_name">Change Name</button>
    <EmployeePage />
</template>
```

Because a ref is provided, descendants that inject it receive the same reactive reference. When the provider changes the value, components using the injected ref in their templates update automatically.

A plain string or number provided directly is not automatically reactive merely because it is provided.

### Controlling updates to shared state

When multiple components can modify shared data, it may become difficult to understand where changes originate.

One solution is to provide read-only state along with a function that controls updates.

```vue
<script setup>
import { provide, readonly, ref } from "vue";

const employee_name = ref("Dinesh");

function change_name(new_name) {
    employee_name.value = new_name;
}

provide("employee_name", readonly(employee_name));
provide("change_employee_name", change_name);
</script>
```

A descendant can inject both:

```vue
<script setup>
import { inject } from "vue";

const employee_name = inject("employee_name");
const change_employee_name = inject("change_employee_name");
</script>

<template>
    <p>{{ employee_name }}</p>

    <button @click="change_employee_name('Arun')">
        Change Name
    </button>
</template>
```

The descendant can read the employee name and request a change through the provided function.

This makes the flow of state updates easier to control and understand.

# Advanced Reactivity (Composition API)

## Introduction to Reactivity in Vue

Reactivity is one of the core features of Vue.js. It allows the application to respond automatically when its data changes.

In a traditional JavaScript application, changing a variable does not automatically update the HTML displayed on the page. Developers may need to manually modify the DOM.

Vue simplifies this process by tracking reactive data and updating the relevant parts of the UI when that data changes.

For example, in a customer support application, suppose an administrator closes a ticket. The ticket status, the open-ticket count, and the displayed status badge may all need to change. Vue's reactivity system helps keep these parts of the interface synchronized with the underlying state.

### How Reactivity Works

Vue's reactivity system generally involves three important operations:

- **Track:** Vue records which reactive properties a component or computed value reads.
- **Trigger:** When a tracked property changes, Vue notifies the effects that depend on it.
- **Update:** Vue schedules the necessary reactive effects and component updates.

Consider this example:

```ts
import { ref } from 'vue'

const ticket_status = ref('open')

function close_ticket() {
  ticket_status.value = 'closed'
}
```

When the status changes, Vue can update a template that displays `ticket_status`.

```vue
<template>
  <p>Ticket Status: {{ ticket_status }}</p>
  <button @click="close_ticket">Close Ticket</button>
</template>
```

When the user clicks the button, the status changes and the displayed text updates automatically.

## Ref vs. Reactive

Vue provides two main APIs for creating deeply reactive state: `ref()` and `reactive()`.

Although both make data reactive, they differ in how values are stored, accessed, and replaced.

### Understanding ref()

The `ref()` function creates a reactive reference around a value. Internally, a ref exposes the value through its `.value` property in JavaScript and TypeScript.

It supports primitive values such as numbers, strings, and booleans, as well as objects and arrays.

**Syntax:**

```ts
import { ref } from 'vue'

const variable_name = ref(initial_value)
```

**Example with primitive values:**

```ts
import { ref } from 'vue'

const ticket_count = ref<number>(0)
const search_query = ref<string>('')
const is_loading = ref<boolean>(false)

ticket_count.value = 5
search_query.value = 'payment'
is_loading.value = true
```

The generic types, such as `number` and `string`, tell TypeScript what kind of value each ref should contain.

In the component's JavaScript or TypeScript code, `.value` is required to read or change a ref's value. Vue templates normally unwrap top-level refs automatically.

### Deep reactivity with ref()

When an object or array is passed to `ref()`, Vue converts it into deeply reactive state.

```ts
import { ref } from 'vue'

interface Ticket {
  ticket_id: number
  title: string
  status: 'open' | 'closed' | 'pending'
}

const ticket = ref<Ticket>({
  ticket_id: 101,
  title: 'Login issue',
  status: 'open'
})

ticket.value.status = 'closed'
ticket.value.title = 'Updated login issue'
```

Vue tracks these nested changes, so dependent UI can update automatically.

**When to use ref():**

- When storing primitive values.
- When an object or array may be replaced entirely.
- When nested properties need reactive updates.
- When creating state inside a component or composable.
- When managing loading states, API responses, form values, and selected items.

### Understanding reactive()

The `reactive()` function creates a reactive proxy for an object. A proxy allows Vue to intercept property reads and writes so it can track dependencies and trigger updates.

**Syntax:**

```ts
import { reactive } from 'vue'

const variable_name = reactive({
  property_name: initial_value
})
```

**Example:**

```ts
import { reactive } from 'vue'

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

ticket_form.title = 'Payment issue'
ticket_form.description = 'Payment confirmation is missing'
ticket_form.status = 'pending'
```

There is no `.value` because the properties are accessed directly through the reactive proxy.

### Nested reactivity with reactive()

Nested objects are reactive by default when accessed through a reactive proxy.

```ts
import { reactive } from 'vue'

const ticket = reactive({
  title: 'Payment issue',
  customer: {
    name: 'Arun',
    email: 'arun@example.com'
  }
})

ticket.customer.name = 'Arun Kumar'
```

Vue can track the nested property change and update any UI that depends on it.

### Important limitations of reactive()

`reactive()` has several constraints that developers should understand.

**It is designed for objects.** It does not make a primitive value such as a number directly reactive.

**Reassigning the local variable loses the original proxy reference.**

```ts
let ticket = reactive({
  title: 'Login issue'
})

ticket = reactive({
  title: 'Payment issue'
})
```

In this example, the local variable now points to a different proxy. Components or functions that still reference the original proxy do not automatically switch to the new one.

For state that must be replaced frequently, `ref()` is often more convenient:

```ts
const ticket = ref({
  title: 'Login issue'
})

ticket.value = {
  title: 'Payment issue'
}
```

**Destructuring can disconnect a primitive property from its reactive source.**

```ts
const ticket = reactive({
  title: 'Login issue',
  status: 'open'
})

const { status } = ticket
```

Here, `status` is a plain string value, not a reactive reference to `ticket.status`. Changing `ticket.status` does not update the standalone variable.

Use `toRef()` or `toRefs()` when you need to preserve property reactivity while extracting properties from a reactive object.

```ts
import { reactive, toRefs } from 'vue'

const ticket = reactive({
  title: 'Login issue',
  status: 'open'
})

const { title, status } = toRefs(ticket)
```

Now `title` and `status` are refs linked to the original reactive properties.

### Ref vs. Reactive: Choosing the Right API

| Requirement | Recommended approach |
|---|---|
| Store a number or string | `ref()` |
| Store a boolean loading flag | `ref()` |
| Manage a multi-field form | `reactive()` or `ref()` |
| Replace an entire API response | `ref()` |
| Track changes inside nested objects | `ref()` or `reactive()` |
| Extract reactive properties from an object | `toRef()` or `toRefs()` |
| Store a large immutable snapshot | Consider `shallowRef()` |

Both APIs can be used effectively in real applications. The decision depends on how the state is accessed, updated, and replaced.

## Computed Properties

### What is computed()?

The `computed()` function creates a reactive value derived from other reactive values.

Instead of manually updating a value whenever its dependencies change, Vue calculates it from the current state.

Computed properties are especially useful for values that can be calculated from existing application data.

### Example: Counting SupportHub tickets

```ts
import { ref, computed } from 'vue'

interface Ticket {
  ticket_id: number
  title: string
  status: 'open' | 'closed' | 'pending'
}

const tickets = ref<Ticket[]>([
  { ticket_id: 1, title: 'Login issue', status: 'open' },
  { ticket_id: 2, title: 'Payment issue', status: 'closed' },
  { ticket_id: 3, title: 'Profile issue', status: 'open' },
  { ticket_id: 4, title: 'Password issue', status: 'pending' }
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
```

The counts are derived from the ticket array. If a ticket changes from `open` to `closed`, both computed values update when their dependent data changes.

### Computed caching

One major benefit of `computed()` is caching.

Vue remembers the computed result until one of its tracked reactive dependencies changes. Accessing the same computed value repeatedly does not require rerunning the calculation every time.

```ts
const total_ticket_count = computed(() => {
  console.log('Calculating ticket count')

  return tickets.value.length
})
```

The message is logged when Vue evaluates the computed getter. Repeatedly reading `total_ticket_count.value` does not rerun it unless a tracked dependency has changed.

By comparison, a normal function runs whenever it is called.

```ts
function get_ticket_count() {
  return tickets.value.length
}
```

Computed properties are ideal for derived state, especially when calculations are expensive or used in multiple places.

### Computed properties for filtering

```ts
const selected_status = ref<'all' | 'open' | 'closed' | 'pending'>('all')

const filtered_tickets = computed(() => {
  if (selected_status.value === 'all') {
    return tickets.value
  }

  return tickets.value.filter(
    (ticket) => ticket.status === selected_status.value
  )
})
```

The template can render `filtered_tickets` and update automatically when either the tickets or selected status changes.

### Writable computed properties

Computed properties are read-only by default. In special cases, a computed property can have both a getter and a setter.

```ts
const first_name = ref('Dinesh')
const last_name = ref('Kumar')

const full_name = computed({
  get() {
    return `${first_name.value} ${last_name.value}`
  },
  set(new_name: string) {
    const name_parts = new_name.split(' ')

    first_name.value = name_parts[0] ?? ''
    last_name.value = name_parts.slice(1).join(' ')
  }
})

full_name.value = 'Arun Kumar'
```

The setter updates the underlying reactive values. Writable computed properties are useful when a derived value needs to support controlled two-way editing.

### Computed best practices

- Keep computed getters focused on deriving values.
- Avoid modifying other state inside a computed getter.
- Use computed values for filtering, totals, sorting, and formatted data.
- Do not use a computed property for an API request or other side effect.
- Remember that computed results are cached based on reactive dependencies, not arbitrary external changes.

## Watchers

Watchers allow Vue to run side effects in response to reactive changes. They are different from computed properties because their primary purpose is performing an action, rather than returning a derived value.

### Understanding watch()

The `watch()` function observes a specified reactive source and executes a callback when that source changes.

```ts
import { ref, watch } from 'vue'

const ticket_status = ref<'open' | 'closed'>('open')

watch(ticket_status, (new_status, old_status) => {
  console.log('Old status:', old_status)
  console.log('New status:', new_status)
})
```

When the status changes, the callback receives the new and previous values.

By default, `watch()` is lazy: it does not run its callback immediately when created. It runs when its watched source changes.

### Watching a getter

A getter can be used to watch a specific property of a reactive object.

```ts
import { reactive, watch } from 'vue'

const ticket = reactive({
  title: 'Login issue',
  status: 'open'
})

watch(
  () => ticket.status,
  (new_status, old_status) => {
    console.log('Status changed:', old_status, 'to', new_status)
  }
)
```

The watcher responds to changes in `ticket.status`, not unrelated changes such as updating `ticket.title`.

### Watching multiple sources

`watch()` can observe multiple sources.

```ts
const selected_status = ref('open')
const selected_priority = ref('high')

watch(
  [selected_status, selected_priority],
  ([new_status, new_priority], [old_status, old_priority]) => {
    console.log(new_status, new_priority)
    console.log(old_status, old_priority)
  }
)
```

This is useful when an action depends on multiple filters.

### Immediate watchers

An immediate watcher executes its callback during setup and then responds to subsequent changes.

```ts
watch(
  ticket_status,
  (new_status, old_status) => {
    console.log('Current status:', new_status)
  },
  { immediate: true }
)
```

The initial `old_status` is `undefined` because there was no previous watched value for that initial callback.

### Deep watchers

A watcher can observe nested changes in an object by using the `deep` option.

```ts
const ticket = ref({
  title: 'Login issue',
  customer: {
    name: 'Arun'
  }
})

watch(
  ticket,
  (new_ticket) => {
    console.log('Ticket data changed:', new_ticket)
  },
  { deep: true }
)
```

Without deep watching, replacing the ref's value is different from mutating a nested property. A deep watcher can detect nested mutations, but it may be more expensive for large objects.

For a reactive object passed directly as the source, `watch()` is deep by default. For a getter that returns an object, nested changes generally require an explicit deep option.

When a deep watcher reacts to a nested mutation, `new_value` and `old_value` may reference the same object because the object itself was not replaced.

### Understanding watchEffect()

`watchEffect()` automatically detects reactive dependencies accessed while its effect executes.

```ts
import { ref, watchEffect } from 'vue'

const ticket_id = ref(101)
const ticket_status = ref('open')

watchEffect(() => {
  console.log(
    `Ticket ${ticket_id.value} is ${ticket_status.value}`
  )
})
```

The effect runs immediately. Vue tracks both reactive values and reruns the effect when either dependency changes.

Unlike `watch()`, you do not specify the sources separately.

### watch vs. watchEffect

Use `watch()` when you need precise control over the trigger source, previous values, or when the callback should not run immediately by default.

Use `watchEffect()` when an effect naturally depends on the reactive values it reads and you want Vue to detect those dependencies automatically.

Neither is universally faster or better. Choose based on the behavior you need.

### Watcher cleanup and asynchronous work

Watchers often perform API requests. If the user changes a search query repeatedly, an earlier request might finish after a newer request and overwrite its result.

Cleanup can cancel obsolete work.

```ts
import { ref, watch } from 'vue'

const search_query = ref('')

watch(search_query, async (query, old_query, on_cleanup) => {
  const controller = new AbortController()

  on_cleanup(() => {
    controller.abort()
  })

  if (!query.trim()) {
    return
  }

  try {
    const response = await fetch(
      `/api/tickets?search=${encodeURIComponent(query)}`,
      { signal: controller.signal }
    )

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`)
    }

    const result = await response.json()
    console.log(result)
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return
    }

    console.error(error)
  }
})
```

This example assumes that the application has a backend endpoint at `/api/tickets`. It is an integration pattern, not a guarantee that such an endpoint already exists.

The cleanup function aborts the previous request when the watcher is invalidated. In Vue 3.5 and later, `onWatcherCleanup()` is another option, but it must be called synchronously during watcher execution.

## Custom Composables

### What is a composable?

A composable is a reusable function that encapsulates stateful logic using Vue's Composition API.

In larger applications, components can become difficult to maintain when data, event handlers, API calls, filtering logic, and loading states are all placed in a single component.

Composables help extract that logic into focused functions.

### Naming conventions

Composable names should begin with `use`, followed by a description of their responsibility.

Examples:

- `use_tickets()` — ticket-related state and actions.
- `use_fetch()` — reusable data-fetching logic.
- `use_auth()` — authentication-related behavior.
- `use_pagination()` — pagination state and operations.
- `use_ticket_filters()` — filtering and sorting logic.

In TypeScript projects, composable files commonly use the `.ts` extension and are stored in `src/composables/`.

### Benefits of composables

**Code reuse:** Multiple components can use the same logic without copying and pasting it.

**Separation of concerns:** Components handle presentation, while composables manage stateful behavior.

**Maintainability:** Changes to shared logic can be made in one place.

**Type safety:** TypeScript can describe inputs, outputs, state, and function parameters.

**Testability:** Logic can be tested separately from the component template.

### Sharing state between components

A key distinction is whether a composable creates fresh state per call or returns shared state.

```ts
import { ref } from 'vue'

export function use_ticket_count() {
  const ticket_count = ref(0)

  function increment_ticket_count() {
    ticket_count.value++
  }

  return {
    ticket_count,
    increment_ticket_count
  }
}
```

Each call to `use_ticket_count()` creates a separate `ref`. Two components calling it independently will not automatically share the same count.

To deliberately share the same state, the ref can be created at module scope:

```ts
import { ref } from 'vue'

const ticket_count = ref(0)

export function use_shared_ticket_count() {
  function increment_ticket_count() {
    ticket_count.value++
  }

  return {
    ticket_count,
    increment_ticket_count
  }
}
```

Now consumers importing this composable share the same module-level ref within that application module instance.

For complex shared state, consider a dedicated state-management solution such as Pinia. In server-rendered applications, shared module-level state requires additional care to avoid leaking data between requests.

### Composables with API calls

A reusable fetching composable may expose:

- `data` — the fetched data.
- `is_loading` — whether a request is in progress.
- `error` — any request failure.
- `execute()` — a function that starts or repeats the request.

The exact design depends on whether fetching happens automatically, on demand, or when reactive parameters change. Production implementations should also consider cancellation, stale responses, and component lifecycle cleanup.

## Shallow Reactivity

### Why shallow reactivity exists

Vue's normal `ref()` and `reactive()` APIs provide deep reactivity for objects and arrays. Nested properties can be tracked, allowing fine-grained UI updates.

However, deep tracking is not always necessary. Some applications receive large datasets from an API and treat them as immutable snapshots. In that situation, the application may replace the entire dataset instead of changing individual nested properties.

`shallowRef()` and `shallowReactive()` allow reactivity to be limited to the root level.

They are optimization tools for particular state-management patterns, not automatic performance improvements for every component.

### Understanding shallowRef()

A shallow ref tracks the `.value` property itself. It does not automatically make the nested properties of an object or array reactive.

```ts
import { shallowRef } from 'vue'

interface Ticket {
  ticket_id: number
  title: string
  status: 'open' | 'closed'
}

const ticket_snapshot = shallowRef<Ticket[]>([
  { ticket_id: 101, title: 'Login issue', status: 'open' },
  { ticket_id: 102, title: 'Payment issue', status: 'open' }
])
```

A nested mutation changes the JavaScript object but does not, by itself, trigger the shallow ref's reactive update.

```ts
ticket_snapshot.value[0].status = 'closed'
```

To trigger an update through the shallow ref, replace its root value:

```ts
ticket_snapshot.value = ticket_snapshot.value.map((ticket) =>
  ticket.ticket_id === 101
    ? { ...ticket, status: 'closed' }
    : ticket
)
```

This creates a new array and a new object for the changed ticket. Assigning the new array to `.value` triggers reactive effects that depend on the shallow ref.

This immutable-update approach makes it clear when the dataset changes.

### Using triggerRef()

Vue also provides `triggerRef()` for cases where a nested mutation has already occurred and you deliberately want to trigger effects that depend on the shallow ref.

```ts
import { shallowRef, triggerRef } from 'vue'

const ticket_snapshot = shallowRef({
  title: 'Login issue',
  status: 'open'
})

ticket_snapshot.value.status = 'closed'

triggerRef(ticket_snapshot)
```

This explicitly triggers dependent reactive effects. It does not convert the nested object into deeply reactive state, so subsequent nested mutations will not automatically trigger updates.

Use this approach only when its behavior is intentional and understood. Replacing the root value is often easier to reason about.

### Appropriate use cases for shallowRef()

- Large immutable API response snapshots.
- Data structures managed by external libraries.
- State that is replaced as a complete value.
- Cases where nested mutations are intentionally not tracked.

Avoid using it when a UI needs to respond automatically to individual nested ticket changes.

### Understanding shallowReactive()

`shallowReactive()` creates a reactive proxy for an object, but only the object's top-level properties are reactive.

```ts
import { shallowReactive } from 'vue'

const ticket_view = shallowReactive({
  selected_status: 'open',
  pagination: {
    page: 1,
    limit: 10
  }
})
```

Changing a top-level property triggers reactive updates:

```ts
ticket_view.selected_status = 'closed'
```

Changing a nested property does not automatically trigger an update through the shallow proxy:

```ts
ticket_view.pagination.page = 2
```

Replacing the top-level `pagination` property does trigger an update:

```ts
ticket_view.pagination = {
  page: 2,
  limit: 10
}
```

The difference is the location of the changed property. Vue tracks the root-level properties but does not recursively convert nested objects into reactive proxies.

### Shallow reactivity and performance

Shallow reactivity can reduce the work Vue performs when dealing with large, mostly immutable structures. It also creates a simpler boundary between Vue-managed state and externally managed data.

However, it is important to understand that:

- Shallow APIs do not make nested objects immutable.
- Nested JavaScript values can still be changed.
- Those nested mutations do not automatically trigger updates through the shallow boundary.
- Shallow reactivity can cause confusing UI behavior if used without a consistent update strategy.

Use it when the application's data-update pattern genuinely benefits from shallow tracking, not simply because the word "shallow" sounds faster.

