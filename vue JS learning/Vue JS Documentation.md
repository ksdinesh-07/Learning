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

# Built-in Components & Templates in Vue.js

## Introduction

Vue.js provides several built-in components that help us manage how components are displayed, how their state is preserved, where their content is rendered in the DOM, and how asynchronous components handle loading.

Unlike normal components that we create ourselves, built-in components are provided by Vue. We can use them directly in our templates for specific purposes.

The four important built-in components are:

- **Dynamic Components (`<component>`)** — Switch between components dynamically.
- **KeepAlive (`<KeepAlive>`)** — Preserve component instances when switching between components.
- **Teleport (`<Teleport>`)** — Render template content in a different location in the DOM.
- **Suspense (`<Suspense>`)** — Coordinate asynchronous component dependencies and display fallback content while they resolve.

These components solve different problems, but they can also work together in the same application.

---

# Dynamic Components

## What is a Dynamic Component?

A dynamic component allows us to display different components in the same location based on a value that changes at runtime.

Normally, we write a component directly in a template:

```vue
<template>
  <EmployeeList />
</template>
```

Here, Vue always renders the `EmployeeList` component at that location.

However, in a real application, we might want to display an employee list, an employee form, or an employee profile in the same area.

Instead of writing separate locations for every component, we can use Vue's built-in `<component>` element with the `:is` attribute.

```vue
<component :is="active_component" />
```

The `active_component` value determines which component Vue renders.

## How Does It Work?

The `:is` attribute accepts a component definition or, in common cases, a registered component name.

When the value changes, Vue updates the rendered component to match the new value.

For example:

- If `active_component` refers to `EmployeeList`, Vue renders the employee list.
- If it changes to `EmployeeForm`, Vue renders the employee form.
- If it changes to `EmployeeProfile`, Vue renders the employee profile.

The components occupy the same location in the template, but only the currently selected component is rendered there.

## Example: Switching Between Employee Views

**App.vue**

```vue
<script setup lang="ts">
import { ref } from 'vue'
import EmployeeList from './components/EmployeeList.vue'
import EmployeeForm from './components/EmployeeForm.vue'
import EmployeeProfile from './components/EmployeeProfile.vue'

const active_component = ref(EmployeeList)

const components = {
  list: EmployeeList,
  form: EmployeeForm,
  profile: EmployeeProfile
}
</script>

<template>
  <div>
    <button @click="active_component = components.list">
      Employee List
    </button>

    <button @click="active_component = components.form">
      Add Employee
    </button>

    <button @click="active_component = components.profile">
      Employee Profile
    </button>

    <component :is="active_component" />
  </div>
</template>
```

This example assumes that the three imported component files exist.

### Explanation

- `ref(EmployeeList)` stores the currently selected component reactively.
- The `components` object provides convenient references to the available components.
- Each button changes `active_component`.
- `<component :is="active_component" />` renders the selected component.
- When the selection changes, Vue replaces the current component with the newly selected one.

Because the components are different, switching between them normally destroys the previous instance and creates a new instance of the selected component. Its local state is not automatically preserved.

## Real-Time Use Cases

**Dashboard:** Switch between analytics, reports, settings, and notifications without navigating to separate routes.

**Employee management:** Switch between the employee table, create form, and profile panel.

**Tabbed interface:** Display a different component when the user selects a tab.

**Payment interface:** Switch between card payment, UPI payment, and net banking forms.

## Important Point

Dynamic components determine *which component is displayed*. They do not automatically preserve the state of the component being replaced.

Use `<KeepAlive>` when you also need to preserve component state.

---

# KeepAlive

## What is KeepAlive?

`<KeepAlive>` is a built-in Vue component that caches inactive component instances instead of destroying them when switching between components.

To understand why this is useful, imagine a user filling out a long registration form. They switch to another tab to check some information and then return to the form.

Without caching, the form component may be recreated, causing its local input values and other component state to reset.

`<KeepAlive>` helps prevent this by retaining the inactive component instance in memory.

## How Does It Work?

Consider two components:

- `EmployeeForm` contains employee details entered by the user.
- `EmployeeList` displays all employees.

When the user switches from the form to the list:

**Without KeepAlive**

1. Vue removes the form component.
2. The form component's instance is destroyed.
3. When the user returns, Vue creates a new instance.
4. Local form state is initialized again.

**With KeepAlive**

1. Vue moves the form component into an inactive cached state.
2. Vue displays the employee list.
3. When the user returns, Vue reactivates the cached form instance.
4. Its existing local state is retained.

## Syntax

```vue
<KeepAlive>
  <component :is="active_component" />
</KeepAlive>
```

Here, the dynamic component is wrapped in `KeepAlive`. Vue can cache the component instances as the active component changes.

## Example: Preserving Form Input

**EmployeeForm.vue**

```vue
<script setup lang="ts">
import { ref } from 'vue'

const employee_name = ref('')
const employee_email = ref('')
</script>

<template>
  <form>
    <label>
      Employee Name
      <input v-model="employee_name">
    </label>

    <label>
      Employee Email
      <input v-model="employee_email">
    </label>

    <p>Name: {{ employee_name }}</p>
    <p>Email: {{ employee_email }}</p>
  </form>
</template>
```

**App.vue**

```vue
<script setup lang="ts">
import { ref } from 'vue'
import EmployeeForm from './components/EmployeeForm.vue'
import EmployeeList from './components/EmployeeList.vue'

const active_component = ref(EmployeeForm)
</script>

<template>
  <button @click="active_component = EmployeeForm">
    Employee Form
  </button>

  <button @click="active_component = EmployeeList">
    Employee List
  </button>

  <KeepAlive>
    <component :is="active_component" />
  </KeepAlive>
</template>
```

When the user enters a name and email, switches to the employee list, and then returns to the form, the entered values remain because the same form instance is reactivated.

This example assumes that `EmployeeList.vue` exists.

## KeepAlive Lifecycle Hooks

Cached components have a special lifecycle in addition to their normal mounting and unmounting behavior.

- `onActivated()` runs when a cached component is activated, including its initial activation.
- `onDeactivated()` runs when a component inside `KeepAlive` becomes inactive.

These hooks are useful when a cached component needs to restart a timer, refresh information, or pause background work.

```vue
<script setup lang="ts">
import { onActivated, onDeactivated } from 'vue'

onActivated(() => {
  console.log('Component is active')
})

onDeactivated(() => {
  console.log('Component is inactive')
})
</script>
```

## Additional Features

### Include Specific Components

The `include` attribute allows us to specify which components should be cached by their component names.

```vue
<KeepAlive include="EmployeeForm,EmployeeProfile">
  <component :is="active_component" />
</KeepAlive>
```

### Exclude Components

The `exclude` attribute prevents specified component names from being cached.

```vue
<KeepAlive exclude="EmployeeList">
  <component :is="active_component" />
</KeepAlive>
```

### Limit the Cache

The `max` attribute limits the number of cached component instances.

```vue
<KeepAlive :max="5">
  <component :is="active_component" />
</KeepAlive>
```

When the limit is exceeded, Vue uses a least-recently-used (LRU) strategy to evict cached entries.

## Real-Time Use Cases

- Preserving search filters when switching between dashboard views.
- Keeping partially completed forms intact.
- Retaining the state of a multi-step registration process.
- Preserving the current page of a table when temporarily switching views.
- Avoiding repeated initialization of expensive components.

## Important Limitations

`KeepAlive` preserves component instances and their in-memory state. It does not automatically save data permanently.

If the browser reloads, the application closes, or the cached instance is evicted, the state may be lost. Use appropriate storage or a backend when persistence across reloads is required.

Also, caching a component does not guarantee that its data is always up to date. Use activation hooks or other data-refresh logic when necessary.

---

# Teleport

## What is Teleport?

`<Teleport>` is a built-in Vue component that allows a component's template content to be rendered in a different location in the DOM tree.

Normally, a component's rendered HTML appears inside the DOM element belonging to its parent.

However, certain UI elements are better rendered elsewhere in the document. Modals, tooltips, and notification containers are common examples.

`<Teleport>` lets us keep the component's template and logic in their natural place in our Vue code while rendering the specified content at a different DOM destination.

## Why is Teleport Needed?

Imagine that a modal is placed inside a container with the following CSS:

```css
.dashboard {
  overflow: hidden;
  transform: translateZ(0);
}
```

Depending on the surrounding layout and styles, the modal might be clipped or affected by stacking-context behavior.

Even a very large `z-index` cannot escape every stacking-context or clipping restriction.

Instead of moving the modal's Vue code into another component or manually manipulating the DOM, we can use `<Teleport>` to render it under a suitable destination, commonly an element directly under `<body>`.

## Syntax

```vue
<Teleport to="body">
  <div class="modal">
    <h2>Confirmation</h2>
    <p>Are you sure you want to continue?</p>
  </div>
</Teleport>
```

The `to="body"` attribute tells Vue to render the enclosed content inside the document's `<body>` element.

The destination must exist when Vue needs to resolve it.

## Example: Confirmation Modal

```vue
<script setup lang="ts">
import { ref } from 'vue'

const show_modal = ref(false)
</script>

<template>
  <div class="dashboard">
    <h2>Employee Dashboard</h2>

    <button @click="show_modal = true">
      Delete Employee
    </button>

    <Teleport to="body">
      <div v-if="show_modal" class="modal-overlay">
        <div class="modal">
          <h3>Confirm Deletion</h3>

          <p>Do you want to delete this employee?</p>

          <button @click="show_modal = false">
            Cancel
          </button>

          <button @click="show_modal = false">
            Confirm
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>
```

### Explanation

- `show_modal` controls whether the modal is visible.
- Clicking the Delete Employee button sets `show_modal` to `true`.
- `v-if` conditionally creates the modal content.
- `<Teleport to="body">` renders the modal overlay under the document body instead of inside the dashboard's DOM container.
- Both modal buttons close the modal in this simplified example.

The example demonstrates the rendering behavior; the Confirm button would need additional application logic to actually delete an employee.

### DOM Structure

Without Teleport, the rendered structure would be similar to:

```html
<body>
  <div id="app">
    <div class="dashboard">
      <div class="modal-overlay">...</div>
    </div>
  </div>
</body>
```

With Teleport, the modal content is rendered at the destination:

```html
<body>
  <div id="app">
    <div class="dashboard">
      <!-- Dashboard content -->
    </div>
  </div>

  <div class="modal-overlay">
    ...
  </div>
</body>
```

The precise placement depends on the destination and other content, but the important difference is that the modal is no longer nested inside the dashboard element.

## Important Teleport Features

### Dynamic Destination

The `to` attribute can point to a CSS selector or a DOM element.

```vue
<Teleport to="#notification-container">
  <p>Employee saved successfully!</p>
</Teleport>
```

The destination element must exist when the teleport is mounted.

### Disable Teleport

The `disabled` attribute allows the content to remain at its normal location in the component tree.

```vue
<Teleport to="body" :disabled="is_mobile">
  <div class="modal">Modal content</div>
</Teleport>
```

When `is_mobile` is `true`, Teleport is disabled and the content remains in its original DOM location.

### Multiple Teleports

Multiple Teleport instances can target the same destination. Vue renders their content at that destination according to their mounting and ordering behavior.

## Real-Time Use Cases

- **Modals:** Login dialogs, confirmation windows, and forms.
- **Notifications:** Toast messages displayed above the application content.
- **Tooltips:** Floating help information.
- **Global overlays:** Loading screens and command palettes.
- **Context menus:** Menus that need to appear outside a clipped container.

## Important Point

Teleport changes the physical DOM location of the rendered content, but it does not change the component's logical position in Vue's component tree.

The content can still access its component's reactive state, props, and provided dependencies. Vue event handling also continues to follow the component relationship rather than being determined solely by the DOM location.

Teleport does not automatically manage modal accessibility. Focus management, keyboard handling, and appropriate ARIA attributes may still be necessary.

---

# Suspense

## What is Suspense?

`<Suspense>` is a built-in Vue component that coordinates asynchronous dependencies in a component tree and provides fallback content while those dependencies are unresolved.

Consider a dashboard that needs to load employee information from a server before displaying the complete employee profile.

Without a loading strategy, users may see an empty area or incomplete content while the data is being prepared.

A suspense boundary allows us to specify two possible states:

- **Default content:** The actual component or component tree.
- **Fallback content:** A temporary loading interface shown while the relevant asynchronous dependencies are pending.

## Why is Suspense Useful?

Suppose an employee profile depends on an asynchronous component that loads data before it can render its main content.

Instead of implementing a separate loading-state mechanism for every part of that component tree, a suspense boundary can display fallback content while supported asynchronous dependencies are unresolved.

This is particularly useful for coordinating loading interfaces across nested components.

## Syntax

```vue
<Suspense>
  <template #default>
    <EmployeeProfile />
  </template>

  <template #fallback>
    <p>Loading employee profile...</p>
  </template>
</Suspense>
```

### Explanation

- `#default` identifies the main content to render when the asynchronous dependencies resolve.
- `#fallback` identifies the temporary content to display while those dependencies are pending.
- Vue manages the transition between the fallback and resolved content.

For Suspense to provide meaningful loading behavior, the content must contain a supported asynchronous dependency, such as an async component or an `async setup()` component.

A regular synchronous component does not automatically trigger a loading fallback just because it fetches data later in an ordinary lifecycle hook.

## Example: Asynchronous Component

**EmployeeProfile.vue**

```vue
<script setup lang="ts">
const response = await fetch(
  'https://jsonplaceholder.typicode.com/users/1'
)

if (!response.ok) {
  throw new Error('Failed to load employee')
}

const employee = await response.json()
</script>

<template>
  <div>
    <h2>{{ employee.name }}</h2>
    <p>{{ employee.email }}</p>
    <p>{{ employee.phone }}</p>
  </div>
</template>
```

This example uses top-level `await` inside `<script setup>`. Vue compiles this into an asynchronous setup process, which can be coordinated by a Suspense boundary.

**App.vue**

```vue
<script setup lang="ts">
import EmployeeProfile from './components/EmployeeProfile.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <EmployeeProfile />
    </template>

    <template #fallback>
      <p>Loading employee profile...</p>
    </template>
  </Suspense>
</template>
```

### Execution Flow

1. Vue encounters the Suspense boundary.
2. Vue begins rendering `EmployeeProfile`.
3. The component's asynchronous setup waits for the HTTP response.
4. While the dependency is pending, Vue displays the fallback content.
5. Once the asynchronous setup resolves, Vue displays the employee profile.

The endpoint is an illustrative public API. A real application should use its own data service and handle network failures appropriately.

## Error Handling

Suspense is not a complete error-handling system. If an asynchronous dependency fails, the fallback slot should not be treated as an automatic error message.

For example, the component may throw an error when a request fails. You should use Vue's error-handling mechanisms, such as `onErrorCaptured()` or an appropriate application-level error handler, to handle that failure.

You should also design a way to show an error message or retry the request when needed.

## Important Limitation

Vue's Suspense is documented as an experimental feature. Its exact behavior and support should be checked against the Vue version used by your project.

Suspense coordinates supported asynchronous component dependencies. It does not automatically detect every promise, ordinary API request, or asynchronous operation anywhere in the application.

For example, a component that fetches data inside `onMounted()` and updates a `ref` later generally needs its own loading state:

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const employee = ref(null)
const is_loading = ref(true)

onMounted(async () => {
  try {
    const response = await fetch('/api/employees/1')

    if (!response.ok) {
      throw new Error('Failed to load employee')
    }

    employee.value = await response.json()
  } finally {
    is_loading.value = false
  }
})
</script>

<template>
  <p v-if="is_loading">Loading employee...</p>
  <pre v-else>{{ employee }}</pre>
</template>
```

This loading indicator is managed by the component itself, not automatically by Suspense.

## Real-Time Use Cases

- Loading a profile page that depends on an asynchronous component.
- Coordinating loading states for nested asynchronous views.
- Displaying a temporary skeleton or spinner while supported dependencies resolve.
- Managing the initial display of asynchronously loaded dashboard sections.

---
# Ecosystem & Routing

## Vue Router

### What is Vue Router?

Vue Router is the official routing library for Vue.js applications. It allows developers to navigate between different pages or views without reloading the entire webpage.

In a Single Page Application (SPA), Vue Router matches the current URL to a Vue component and displays that component inside the application. The browser URL changes while the application continues running.

For example, in an employee management application:

- `/` displays the dashboard.
- `/employees` displays the employee list.
- `/employees/101` displays the details of employee 101.
- `/settings` displays the application settings.

### Why Vue Router is Used

Vue Router helps organize an application into multiple views and provides a structured way to manage navigation.

Its main features include:

- Mapping URLs to Vue components.
- Navigating between views without full-page reloads.
- Supporting nested routes and dynamic route parameters.
- Providing programmatic navigation.
- Supporting lazy loading of route components.
- Integrating navigation guards for route access control.
- Managing browser history and navigation.

### Configuring Vue Router

Install Vue Router in a Vue project using:

```powershell
npm install vue-router
```

Create a router configuration file at `src/router/index.ts`.

```ts
import { createRouter, createWebHistory } from 'vue-router'

import dashboard_view from '../views/dashboard_view.vue'
import employee_list from '../views/employee_list.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: dashboard_view
    },
    {
      path: '/employees',
      component: employee_list
    }
  ]
})

export default router
```

Register the router in `src/main.ts`.

```ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')
```

Use `RouterLink` and `RouterView` in `App.vue`.

```vue
<template>
  <nav>
    <RouterLink to="/">Dashboard</RouterLink>
    <RouterLink to="/employees">Employees</RouterLink>
  </nav>

  <RouterView />
</template>
```

`RouterLink` creates navigation links, while `RouterView` displays the component associated with the current route.

### Nested Routes

Nested routes represent hierarchical pages inside an application. They allow child views to appear within a parent layout.

For example, an employee management section might contain an overview, employee list, and reports.

```ts
{
  path: '/employees',
  component: () => import('../views/employee_layout.vue'),

  children: [
    {
      path: '',
      component: () => import('../views/employee_overview.vue')
    },
    {
      path: 'list',
      component: () => import('../views/employee_list.vue')
    },
    {
      path: 'reports',
      component: () => import('../views/employee_reports.vue')
    }
  ]
}
```

The parent component must contain a nested `<RouterView />` to display its child components.

```vue
<template>
  <h2>Employee Management</h2>

  <RouterLink to="/employees">Overview</RouterLink>
  <RouterLink to="/employees/list">Employee List</RouterLink>
  <RouterLink to="/employees/reports">Reports</RouterLink>

  <RouterView />
</template>
```

The parent layout remains visible while the nested view changes.

**Use cases:** Admin dashboards, banking portals, employee management systems, and learning management systems.

### Dynamic Route Matching

Dynamic routes allow a single route to match multiple URLs containing variable parameters.

For example, `/employees/101` and `/employees/102` can display different employee details using the same component.

```ts
{
  path: '/employees/:employee_id',
  component: () => import('../views/employee_details.vue')
}
```

Access the parameter inside the component using `useRoute()`.

```vue
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const employee_id = route.params.employee_id
</script>

<template>
  <h2>Employee ID: {{ employee_id }}</h2>
</template>
```

The route parameter is available through `route.params`. Parameters are usually strings, so validate or convert them when a numeric value is required.

**Use cases:** Employee profiles, product details, student records, blog articles, and order tracking pages.

### Programmatic Navigation

Programmatic navigation allows developers to change routes through JavaScript instead of requiring users to click a link.

The `useRouter()` composable provides access to the router instance.

```vue
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

async function create_employee() {
  // Save employee data to the server.

  await router.push('/employees')
}
</script>

<template>
  <button @click="create_employee">
    Create Employee
  </button>
</template>
```

Common navigation methods include:

- `router.push()` navigates to a new route.
- `router.replace()` replaces the current history entry.
- `router.back()` navigates to the previous history entry.
- `router.forward()` navigates forward in browser history.

**Use cases:** Redirecting users after login, navigating after form submission, and opening newly created records.

### Lazy Loading Routes

Lazy loading allows Vue Router to load a route component only when the route is visited. This reduces the amount of JavaScript that must be downloaded when the application first loads.

```ts
{
  path: '/reports',
  component: () => import('../views/reports_view.vue')
}
```

The dynamic import allows build tools such as Vite to create a separate JavaScript chunk for the component.

**Use cases:** Large dashboards, applications with many pages, and reports that are not frequently accessed.

---

## Navigation Guards

### What are Navigation Guards?

Navigation guards are functions that control whether navigation to a particular route should proceed, be cancelled, or be redirected.

They are commonly used to check authentication, user roles, and other navigation requirements before a page is displayed.

For example, an employee management application may allow every user to view the dashboard but restrict the administration page to authorized administrators.

Navigation guards do not replace backend authorization. The server must independently verify permissions before returning protected data or performing sensitive actions.

### Types of Navigation Guards

Vue Router provides three main categories of navigation guards.

**Global guards** run for navigation throughout the application.

**Per-route guards** apply to specific route definitions.

**In-component guards** are defined inside components and can control navigation when entering or leaving those components.

### Global Navigation Guards

Global guards are registered on the router instance and can check navigation across the application.

The `beforeEach()` guard runs before each navigation.

```ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('../views/login_view.vue')
    },
    {
      path: '/dashboard',
      component: () => import('../views/dashboard_view.vue'),
      meta: { requires_auth: true }
    }
  ]
})

router.beforeEach((to) => {
  const is_authenticated = Boolean(localStorage.getItem('access_token'))

  if (to.meta.requires_auth && !is_authenticated) {
    return '/login'
  }
})

export default router
```

The guard checks whether the destination route requires authentication. If the user is not authenticated, navigation is redirected to the login page.

This is a basic frontend example. A production application should validate authentication with a trusted server-side session or token strategy rather than treating the mere presence of a local storage value as proof of identity.

Other global guards include:

- `beforeResolve()` runs after in-component guards and async route components have resolved, before navigation is confirmed.
- `afterEach()` runs after navigation is completed or fails. It is useful for analytics and page-title updates, not for blocking navigation.

### Per-Route Navigation Guards

Per-route guards apply to an individual route instead of the entire application.

The `beforeEnter` guard runs when entering the route.

```ts
{
  path: '/admin',
  component: () => import('../views/admin_view.vue'),

  beforeEnter: () => {
    const user_role = localStorage.getItem('user_role')

    if (user_role !== 'admin') {
      return '/dashboard'
    }
  }
}
```

This example checks whether the stored role is `admin`. Users without that role are redirected.

For real applications, role information must be validated against trusted authentication state, and the backend must enforce the same permissions.

**Use cases:** Administrator pages, payment screens, restricted reports, and role-specific dashboards.

### In-Component Navigation Guards

In-component guards are useful when navigation behavior depends on the component itself.

Vue Router provides `onBeforeRouteLeave()` and `onBeforeRouteUpdate()` for Composition API components.

For example, a form may warn users before they leave a page with unsaved changes.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

const has_unsaved_changes = ref(false)

onBeforeRouteLeave(() => {
  if (has_unsaved_changes.value) {
    return window.confirm(
      'You have unsaved changes. Leave this page?'
    )
  }
})
</script>

<template>
  <textarea
    v-model="has_unsaved_changes"
    placeholder="Enter your changes"
  />
</template>
```

In a real form, the unsaved-change flag should be updated when the form data changes. The example illustrates the guard concept.

`onBeforeRouteUpdate()` is useful when a reused component receives a different route parameter and needs to react to that change.

### Route Metadata

Route metadata allows developers to attach additional information to route definitions.

```ts
{
  path: '/reports',
  component: () => import('../views/reports_view.vue'),
  meta: {
    requires_auth: true,
    required_role: 'manager'
  }
}
```

A global navigation guard can inspect `to.meta` to determine whether authentication or role checks are needed.

This approach centralizes route requirements and avoids duplicating the same logic across many route definitions.

---

## Pinia State Management

### What is Pinia?

Pinia is the recommended state management library for Vue applications. It provides a centralized way to manage application data that must be shared across multiple components.

Without a centralized store, components may need to pass data through many layers using props and events. Pinia allows components to access shared state directly through a store.

For example, an employee management application may need to share:

- The currently authenticated user.
- Employee records.
- Selected department filters.
- Notification counts.
- Application preferences.

Pinia organizes this shared state into stores.

### Why Pinia is Used

Pinia provides:

- Centralized and reusable state.
- Reactive state shared between components.
- Actions for business operations and asynchronous tasks.
- Getters for derived or computed values.
- Modular stores for different application features.
- TypeScript support and improved developer tooling.
- Integration with Vue Devtools.

Pinia is particularly useful when state must be accessed or updated by multiple unrelated components.

### Installing Pinia

Install Pinia using:

```powershell
npm install pinia
```

Register it in `src/main.ts`.

```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
```

### Creating a Store

A store is a centralized module that defines and manages a particular area of application state.

Create `src/stores/employee_store.ts`.

```ts
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

interface Employee {
  id: number
  name: string
  department: string
}

export const use_employee_store = defineStore(
  'employee',
  () => {
    const employees = ref<Employee[]>([
      {
        id: 1,
        name: 'Dinesh',
        department: 'Development'
      },
      {
        id: 2,
        name: 'Arun',
        department: 'Cloud'
      }
    ])

    const employee_count = computed(
      () => employees.value.length
    )

    function add_employee(employee: Employee) {
      employees.value.push(employee)
    }

    return {
      employees,
      employee_count,
      add_employee
    }
  }
)
```

This example uses Pinia's setup-store syntax.

The store contains three main concepts:

- **State:** `employees` stores the employee records.
- **Getter:** `employee_count` calculates the number of employees.
- **Action:** `add_employee()` adds an employee to the store.

### State

State represents the data managed by a store. It can contain arrays, objects, strings, numbers, and other reactive values.

In a setup store, state is commonly declared using `ref()` or `reactive()`.

```ts
const selected_department = ref('Development')
const employees = ref<Employee[]>([])
```

Components can read and update this shared state through the store.

### Getters

Getters provide derived values based on the store's state. They are similar to computed properties in Vue components.

```ts
const employee_count = computed(
  () => employees.value.length
)
```

Whenever the employee list changes, the computed count updates automatically.

Other examples include calculating total sales, filtering counts, and determining whether a shopping cart is empty.

### Actions

Actions contain operations that modify state or perform business tasks. They can be synchronous or asynchronous.

```ts
async function fetch_employees() {
  const response = await fetch('/api/employees')

  if (!response.ok) {
    throw new Error('Failed to fetch employees')
  }

  employees.value = await response.json()
}
```

The example retrieves employee records from an API. A production application should also validate response data and handle loading and error states.

Actions are useful for keeping shared operations in one place rather than duplicating them in multiple components.

### Using a Store in a Component

Once the store has been created, components can access it using its store function.

```vue
<script setup lang="ts">
import { use_employee_store } from '../stores/employee_store'

const employee_store = use_employee_store()

function add_new_employee() {
  employee_store.add_employee({
    id: 3,
    name: 'Kumar',
    department: 'Testing'
  })
}
</script>

<template>
  <h2>Employees: {{ employee_store.employee_count }}</h2>

  <ul>
    <li
      v-for="employee in employee_store.employees"
      :key="employee.id"
    >
      {{ employee.name }} - {{ employee.department }}
    </li>
  </ul>

  <button @click="add_new_employee">
    Add Employee
  </button>
</template>
```

Any component using the same store instance can access the shared employee state.

### Organizing Multiple Stores

Large applications should organize stores according to application features.

For example:

- `auth_store.ts` manages authentication-related UI state.
- `employee_store.ts` manages employee records.
- `notification_store.ts` manages notifications.
- `settings_store.ts` manages application preferences.

This separation improves maintainability and makes each store easier to understand and test.

### Pinia and TypeScript

Pinia integrates with TypeScript and can infer types from store definitions. Interfaces can be used when explicit data models are required.

```ts
interface Employee {
  id: number
  name: string
  department: string
}
```

TypeScript helps identify invalid assignments, incorrect property names, and incompatible function arguments during development.

### Pinia Best Practices

- Keep stores focused on a specific feature or domain.
- Use getters for derived state.
- Use actions for reusable operations and asynchronous tasks.
- Avoid duplicating the same source of truth across components and stores.
- Do not store passwords or sensitive secrets in client-side state.
- Remember that client-side state is not automatically persistent; use a suitable persistence strategy when required.
- Keep server-side authorization independent of frontend store state.

---

## Server-Side Rendering (SSR)

### What is Server-Side Rendering?

Server-Side Rendering is a technique in which the server generates the initial HTML for a page before sending it to the browser.

In a typical client-rendered Vue application, the browser downloads JavaScript and uses Vue to render the page. In SSR, the server renders the Vue component tree into HTML first. The browser can display that HTML before Vue hydrates it and attaches client-side interactivity.

SSR can improve the time at which meaningful content becomes visible and make public page content easier for search engines and link-preview systems to discover.

### Client-Side Rendering vs Server-Side Rendering

**Client-Side Rendering (CSR)**

- The browser downloads the application JavaScript.
- Vue initializes and renders the interface in the browser.
- The page becomes interactive as the application loads.
- It is often simpler to deploy and operate.

**Server-Side Rendering (SSR)**

- The server executes the Vue rendering process.
- The server sends HTML for the requested page.
- The browser can display the rendered content.
- Vue hydrates the HTML to attach event handlers and client-side behavior.

SSR introduces additional complexity, including server execution, hydration, caching, and differences between server and browser environments.

### What is Hydration?

Hydration is the process in which Vue takes server-rendered HTML in the browser and attaches the necessary reactive behavior and event handlers.

For example, a server may return a button containing the text `Click Me`. Hydration makes the button interactive using the corresponding Vue component logic.

If the server-rendered HTML differs from what Vue expects on the client, hydration mismatches can occur. Developers should ensure that server and client rendering produce compatible output.

### What is Nuxt.js?

Nuxt is a framework built on Vue that provides higher-level application features, including file-based routing, server rendering, data fetching conventions, and deployment options.

It reduces the amount of infrastructure developers must build manually when creating SSR or hybrid-rendered applications.

Common Nuxt capabilities include:

- File-based routing.
- Server-Side Rendering.
- Static Site Generation.
- Client-Side Rendering.
- Hybrid rendering strategies.
- Server endpoints and server-side code.
- Data fetching and SEO metadata utilities.

### Creating a Nuxt Application

A Nuxt application can be created using:

```powershell
npm create nuxt@latest my-nuxt-app
```

Move into the project and install dependencies if prompted by the setup process.

```powershell
cd my-nuxt-app
npm run dev
```

Nuxt uses a file-based routing system. For example, creating `pages/about.vue` automatically defines an `/about` route.

```vue
<template>
  <main>
    <h1>About Us</h1>
    <p>Learn more about our organization.</p>
  </main>
</template>
```

Nuxt provides routing conventions without requiring developers to manually define every route in a Vue Router configuration file.

### SSR in Nuxt

Nuxt supports server rendering by default for a typical new application unless configured otherwise.

A page can fetch data using Nuxt's `useFetch()` composable.

```vue
<script setup lang="ts">
interface Employee {
  id: number
  name: string
}

const { data: employees, status, error } =
  await useFetch<Employee[]>('/api/employees')
</script>

<template>
  <main>
    <h1>Employees</h1>

    <p v-if="status === 'pending'">Loading employees...</p>
    <p v-else-if="error">Unable to load employees.</p>

    <ul v-else>
      <li
        v-for="employee in employees"
        :key="employee.id"
      >
        {{ employee.name }}
      </li>
    </ul>
  </main>
</template>
```

Nuxt can fetch data during server rendering and transfer the result to the client so that the initial page does not need to repeat the same request unnecessarily.

The exact behavior depends on the data-fetching method, rendering configuration, and request lifecycle.

### Static Site Generation

Static Site Generation (SSG) generates HTML pages ahead of time during a build or prerendering process.

Unlike request-time SSR, pre-generated pages can be served as static files through a CDN or web server.

SSG is useful when content does not need to be generated separately for every incoming request.

**Use cases:** Documentation websites, blogs, landing pages, and marketing websites.

### Hybrid Rendering

Hybrid rendering allows different routes to use different rendering strategies within the same application.

For example:

- A marketing homepage can be prerendered.
- A frequently updated public catalogue can use server rendering or suitable caching.
- A private dashboard can use client-side rendering where appropriate.

Nuxt provides route rules that can configure rendering and caching behavior for different routes.

The correct strategy depends on content freshness, user-specific data, SEO requirements, server costs, and application performance goals.

### When to Use SSR

SSR can be beneficial when:

- Public content needs to be discoverable by search engines.
- Initial HTML delivery is important.
- Pages need rich link previews.
- Content should be rendered on the server for each request.

CSR may be suitable for internal tools, authenticated dashboards, and applications where search visibility is not a major requirement.

SSG is often a good choice for content that changes infrequently.

SSR does not automatically guarantee better SEO or performance. The outcome depends on implementation quality, caching, content, and the rendering strategy.
