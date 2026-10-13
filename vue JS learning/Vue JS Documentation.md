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

