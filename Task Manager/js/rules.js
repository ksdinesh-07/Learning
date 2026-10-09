const STORAGE_KEY = "rule_data";

// Icon file paths used across the rule cards
const icon_paths = {
    edit: "./assets/edit_icon-light.svg",
    delete: "./assets/delete_icon-light.svg",
    tasks: "./assets/tasks_icon.svg",
    habits: "./assets/active-habbit_icom.svg"
};

// What fields, operators and actions each section (tasks / habits) supports
const SECTIONS = {
    tasks: {
        fields: [
            { value: "priority", label: "Priority", type: "select",
              values: [
                { value: "high", label: "High" },
                { value: "medium", label: "Medium" },
                { value: "low", label: "Low" }
              ]},
            { value: "status", label: "Status", type: "select",
              values: [
                { value: "todo", label: "Todo" },
                { value: "in-progress", label: "In Progress" },
                { value: "completed", label: "Completed" }
              ]},
            { value: "due-date", label: "Due date", type: "select",
              values: [
                { value: "today", label: "Today" },
                { value: "tomorrow", label: "Tomorrow" },
                { value: "this-week", label: "This week" },
                { value: "overdue", label: "Overdue" }
              ]}
        ],
        operators: [
            { value: "equals", label: "Equals to" },
            { value: "not-equals", label: "Not Equals" },
            { value: "greater", label: "Greater than" },
            { value: "less", label: "Less than" },
            { value: "greater-eq", label: "Greater than or equals" },
            { value: "less-eq", label: "Less than or equals" }
        ],
        actions: [
            { value: "show-badge", label: "Show badge",
              values: [
                { value: "urgent", label: "Urgent" },
                { value: "warning", label: "Warning" },
                { value: "info", label: "Info" }
              ]},
            { value: "highlight", label: "Highlight",
              values: [
                { value: "red", label: "Red" },
                { value: "orange", label: "Orange" },
                { value: "yellow", label: "Yellow" },
                { value: "blue", label: "Blue" },
                { value: "green", label: "Green" }
              ]},
            { value: "notify", label: "Send notification",
              values: [
                { value: "immediate", label: "Immediately" },
                { value: "hourly", label: "Hourly" },
                { value: "daily", label: "Daily" }
              ]},
            { value: "complete", label: "Mark as complete",
              values: [
                { value: "yes", label: "Yes" }
              ]}
        ]
    },
    habits: {
        fields: [
            { value: "frequency", label: "Frequency", type: "select",
              values: [
                { value: "daily", label: "Daily" },
                { value: "weekly", label: "Weekly" },
                { value: "custom", label: "Custom" }
              ]},
            { value: "streak", label: "Streak", type: "number",
              placeholder: "Days" }
        ],
        operators: [
            { value: "equals", label: "Equals to" },
            { value: "not-equals", label: "Not Equals" },
            { value: "greater", label: "Greater than" },
            { value: "less", label: "Less than" },
            { value: "greater-eq", label: "Greater than or equals" },
            { value: "less-eq", label: "Less than or equals" }
        ],
        actions: [
            { value: "show-badge", label: "Show badge",
              values: [
                { value: "urgent", label: "Urgent" },
                { value: "warning", label: "Warning" },
                { value: "info", label: "Info" }
              ]},
            { value: "highlight", label: "Highlight",
              values: [
                { value: "red", label: "Red" },
                { value: "orange", label: "Orange" },
                { value: "yellow", label: "Yellow" },
                { value: "blue", label: "Blue" },
                { value: "green", label: "Green" }
              ]},
            { value: "notify", label: "Send notification",
              values: [
                { value: "immediate", label: "Immediately" },
                { value: "hourly", label: "Hourly" },
                { value: "daily", label: "Daily" }
              ]}
        ]
    }
};

// Keeps track of the auto-hide timer for the toast
let toastTimeout = null;

// Show a small message in the corner of the screen
function showToast(message) {
    document.querySelector(".toast-notification")?.remove();
    clearTimeout(toastTimeout);

    const toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");

    const icon = document.createElement("div");
    icon.className = "toast-icon";
    icon.textContent = "✓";

    const text = document.createElement("div");
    text.className = "toast-message";
    text.textContent = message;

    const close = document.createElement("button");
    close.type = "button";
    close.className = "toast-close";
    close.textContent = "×";
    close.setAttribute("aria-label", "Close notification");

    close.addEventListener("click", () => {
        clearTimeout(toastTimeout);
        toast.remove();
    });

    toast.append(icon, text, close);
    document.body.appendChild(toast);

    // Auto-hide after 4 seconds
    toastTimeout = setTimeout(() => toast.remove(), 4000);
}

// Wire up all the rule page features (list, modal, filters, delete popup)
export function setup_rules() {
    const rule_list = document.getElementById("rule-list");
    const empty_state = document.getElementById("empty-rule-state");
    const modal = document.getElementById("add_rule_page");
    const form = document.getElementById("add_rule_form");
    const title_input = document.getElementById("rule-title");
    const description_input = document.getElementById("rule-description");
    const section_input = document.getElementById("rule-section");
    const join_input = document.getElementById("rule-join");
    const join_wrap = document.getElementById("rule-join-wrap");
    const condition_list = document.getElementById("condition-list");
    const add_condition_btn = document.getElementById("add-condition-btn");
    const action_input = document.getElementById("rule-action");
    const action_value_input = document.getElementById("rule-action-value");
    const modal_title = document.getElementById("rule-modal-title");
    const submit_btn = document.getElementById("rule-submit-btn");
    const rule_search = document.getElementById("rule-search");

    const status_filter = document.getElementById("status-filter");
    const section_filter = document.getElementById("section-filter");
    const sort_filter = document.getElementById("sort-filter");

    // If the main elements are missing, stop here
    if (!rule_list || !modal || !form) {
        console.error("Check the rule HTML element IDs.");
        return;
    }

    let editing_rule_id = null;
    let conditions = [];

    // Current filter/sort choices from the toolbar
    const filter_state = {
        status: status_filter?.value || "all",
        section: section_filter?.value || "all",
        sort: sort_filter?.value || "ascending"
    };

    // Create a unique id for a rule or condition
    function create_id() {
        return globalThis.crypto?.randomUUID?.() ||
            `${Date.now()}-${Math.random()}`;
    }

    // Read all rules from localStorage
    function get_rules() {
        try {
            const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
            return Array.isArray(data) ? data : [];
        } catch { return []; }
    }

    // Write rules back to localStorage
    function save_rules(rules) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(rules));
    }

    // Make sure a section value is "tasks" or "habits"
    function section_value(v) {
        const s = String(v || "tasks").toLowerCase();
        return ["tasks", "habits"].includes(s) ? s : "tasks";
    }

    // Make sure a status value is "enabled" or "disabled"
    function status_value(v) {
        const s = String(v || "enabled").toLowerCase();
        return ["enabled", "disabled"].includes(s) ? s : "enabled";
    }

    // Create an <img> element for an icon
    function make_icon(path, alt = "") {
        const img = document.createElement("img");
        img.src = path;
        img.alt = alt;
        img.draggable = false;
        return img;
    }

    // Create a small square icon button (edit, delete, etc.)
    function make_button(cls, path, label) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `icon-button ${cls}`;
        btn.setAttribute("aria-label", label);
        btn.title = label;
        btn.append(make_icon(path));
        return btn;
    }

    // Create a small badge (icon + text)
    function make_badge(cls, label, icon_path) {
        const b = document.createElement("span");
        b.className = cls;
        if (icon_path) b.append(make_icon(icon_path));
        b.append(document.createTextNode(label));
        return b;
    }

    // Fill the action dropdown based on the selected section
    function rebuild_action_options() {
        const section = section_value(section_input.value);
        const catalog = SECTIONS[section];

        action_input.innerHTML =
            `<option value="" disabled selected hidden></option>`;
        action_value_input.innerHTML =
            `<option value="" disabled selected hidden></option>`;

        catalog.actions.forEach(a => {
            const opt = document.createElement("option");
            opt.value = a.value;
            opt.textContent = a.label;
            action_input.append(opt);
        });
    }

    // Fill the second action dropdown with the values for the chosen action
    function rebuild_action_values() {
        const section = section_value(section_input.value);
        const catalog = SECTIONS[section];
        const action = catalog.actions.find(a => a.value === action_input.value);

        action_value_input.innerHTML =
            `<option value="" disabled selected hidden></option>`;

        if (!action) return;

        action.values.forEach(v => {
            const opt = document.createElement("option");
            opt.value = v.value;
            opt.textContent = v.label;
            action_value_input.append(opt);
        });
    }

    // Build one row of the condition builder (field + operator + value + remove)
    function make_condition_row(condition) {
        const row = document.createElement("div");
        row.className = "rule-condition-row";
        row.dataset.id = condition.id;

        const section = section_value(section_input.value);
        const catalog = SECTIONS[section];

        // Field dropdown
        const field_select = document.createElement("select");
        field_select.className = "rule-select";
        field_select.innerHTML = `<option value="" disabled hidden>Field</option>`;
        catalog.fields.forEach(f => {
            const opt = document.createElement("option");
            opt.value = f.value;
            opt.textContent = f.label;
            field_select.append(opt);
        });
        field_select.value = condition.field || "";

        // Operator dropdown
        const op_select = document.createElement("select");
        op_select.className = "rule-select";
        op_select.innerHTML = `<option value="" disabled hidden>Equals to</option>`;
        catalog.operators.forEach(o => {
            const opt = document.createElement("option");
            opt.value = o.value;
            opt.textContent = o.label;
            op_select.append(opt);
        });
        op_select.value = condition.operator || "";

        // Value input — its type depends on the chosen field
        let value_el;

        function build_value_input() {
            const field = catalog.fields.find(f => f.value === field_select.value);
            const wrap = document.createElement("div");
            wrap.className = "rule-value-wrap";

            if (!field) {
                value_el = document.createElement("select");
                value_el.className = "rule-select";
                value_el.innerHTML = `<option value="" disabled selected hidden>Value</option>`;
                wrap.append(value_el);
                return wrap;
            }

            if (field.type === "number") {
                value_el = document.createElement("input");
                value_el.type = "number";
                value_el.min = "0";
                value_el.placeholder = field.placeholder || "Value";
                value_el.className = "rule-input";
                value_el.value = condition.value || "";
            } else {
                value_el = document.createElement("select");
                value_el.className = "rule-select";
                value_el.innerHTML = `<option value="" disabled selected hidden>Value</option>`;
                field.values.forEach(v => {
                    const opt = document.createElement("option");
                    opt.value = v.value;
                    opt.textContent = v.label;
                    value_el.append(opt);
                });
                value_el.value = condition.value || "";
            }

            value_el.addEventListener("change", () => {
                condition.value = value_el.value;
            });
            value_el.addEventListener("input", () => {
                condition.value = value_el.value;
            });

            wrap.append(value_el);
            return wrap;
        }

        let value_wrap = build_value_input();

        // When the field changes, rebuild the value input
        field_select.addEventListener("change", () => {
            condition.field = field_select.value;
            condition.value = "";
            const fresh = build_value_input();
            value_wrap.replaceWith(fresh);
            value_wrap = fresh;
        });

        op_select.addEventListener("change", () => {
            condition.operator = op_select.value;
        });

        // Remove this condition row
        const remove_btn = document.createElement("button");
        remove_btn.type = "button";
        remove_btn.className = "rule-remove-btn";
        remove_btn.setAttribute("aria-label", "Remove condition");
        remove_btn.textContent = "🗑";
        remove_btn.addEventListener("click", () => {
            conditions = conditions.filter(c => c.id !== condition.id);
            render_conditions();
        });

        row.append(field_select, op_select, value_wrap, remove_btn);
        return row;
    }

    // Redraw all condition rows in the modal
    function render_conditions() {
        condition_list.replaceChildren();

        conditions.forEach(c => {
            condition_list.append(make_condition_row(c));
        });

        // Only show the AND/OR selector when there are 2 or more conditions
        if (join_wrap) {
            join_wrap.style.display = conditions.length > 1 ? "" : "none";
        }
    }

    // Add a new empty condition row
    function add_condition() {
        conditions.push({
            id: create_id(),
            field: "",
            operator: "",
            value: ""
        });
        render_conditions();
    }

    // When the section changes, reset conditions and rebuild action options
    section_input?.addEventListener("change", () => {
        conditions = [];
        render_conditions();
        rebuild_action_options();
        rebuild_action_values();
    });

    action_input?.addEventListener("change", () => {
        rebuild_action_values();
    });

    add_condition_btn?.addEventListener("click", add_condition);

    // Toolbar filter / sort changes
    status_filter?.addEventListener("change", () => {
        filter_state.status = status_filter.value;
        render_rules();
    });
    section_filter?.addEventListener("change", () => {
        filter_state.section = section_filter.value;
        render_rules();
    });
    sort_filter?.addEventListener("change", () => {
        filter_state.sort = sort_filter.value;
        render_rules();
    });

    // Build the visual card for one rule
    function make_rule_card(rule) {
        const card = document.createElement("article");
        card.className = "task-card rule-card";
        card.dataset.ruleId = String(rule.rule_id);

        const header = document.createElement("div");
        header.className = "task-card-header";

        const heading_group = document.createElement("div");
        heading_group.className = "task-heading-group";

        const title = document.createElement("h3");
        title.className = "task-title";
        title.textContent = rule.rule_title || "Untitled rule";

        // Section badge next to the title
        const section = section_value(rule.rule_section);
        const section_badge = document.createElement("span");
        section_badge.className = "rule-section-badge";
        section_badge.textContent =
            section.charAt(0).toUpperCase() + section.slice(1);

        heading_group.append(title, section_badge);

        const actions = document.createElement("div");
        actions.className = "task-card-actions";

        // Delete button
        const delete_button = make_button(
            "delete-task-button", icon_paths.delete, "Delete"
        );
        delete_button.addEventListener("click", () => {
            openDeleteConfirmation(
                rule.rule_title || "Untitled rule",
                "rule",
                () => {
                    const rules = get_rules().filter(
                        e => String(e.rule_id) !== String(rule.rule_id)
                    );
                    save_rules(rules);
                    render_rules();
                    showToast("Done! Your item has been removed.");
                }
            );
        });

        // Edit button
        const edit_button = make_button(
            "edit-task-button", icon_paths.edit, "Edit"
        );
        edit_button.addEventListener("click", () => open_edit_modal(rule));

        // On/off toggle switch
        const toggle = document.createElement("button");
        toggle.type = "button";
        const enabled = status_value(rule.rule_status) === "enabled";
        toggle.className = `rule-toggle ${enabled ? "is-on" : ""}`;
        toggle.setAttribute("role", "switch");
        toggle.setAttribute("aria-checked", enabled);
        toggle.setAttribute("aria-label",
            enabled ? "Disable rule" : "Enable rule");
        const knob = document.createElement("span");
        knob.className = "rule-toggle-knob";
        toggle.append(knob);
        toggle.addEventListener("click", () => {
            const rules = get_rules();
            const t = rules.find(r =>
                String(r.rule_id) === String(rule.rule_id)
            );
            if (!t) return;
            t.rule_status = enabled ? "disabled" : "enabled";
            save_rules(rules);
            render_rules();
            showToast(enabled ? "Rule disabled." : "Rule enabled.");
        });

        actions.append(delete_button, edit_button, toggle);
        header.append(heading_group, actions);

        // Description line
        const description = document.createElement("p");
        description.className = "task-description";
        description.textContent = rule.rule_description || "";

        card.append(header, description);
        return card;
    }

    // Draw the whole rule list, applying search, filters and sort
    function render_rules() {
        const all_rules = get_rules();

        const search_text = (rule_search?.value || "").trim().toLowerCase();
        const selected_status = filter_state.status || "all";
        const selected_section = filter_state.section || "all";
        const sort_by = filter_state.sort || "ascending";

        let filtered = all_rules.filter(rule => {
            const title = String(rule.rule_title || "").toLowerCase();
            const description = String(rule.rule_description || "").toLowerCase();
            const matches_search =
                title.includes(search_text) ||
                description.includes(search_text);

            const status = status_value(rule.rule_status);
            const section = section_value(rule.rule_section);

            const matches_status =
                selected_status === "all" || status === selected_status;
            const matches_section =
                selected_section === "all" || section === selected_section;

            return matches_search && matches_status && matches_section;
        });

        filtered.sort((a, b) => {
            switch (sort_by) {
                case "ascending":
                    return (a.rule_title || "").localeCompare(b.rule_title || "");
                case "descending":
                    return (b.rule_title || "").localeCompare(a.rule_title || "");
                case "created-at":
                    return String(b.created_at || "").localeCompare(
                        String(a.created_at || "")
                    );
                default:
                    return 0;
            }
        });

        rule_list.replaceChildren();

        // Show or hide the empty state, with a message that fits the case
        if (empty_state) {
            empty_state.hidden = filtered.length > 0;
            const msg = empty_state.querySelector(".empty-task-message");

            if (all_rules.length === 0) {
                msg.textContent =
                    "No rules yet. Create automation rules to manage your tasks and habits";
            } else if (search_text && filtered.length === 0) {
                msg.textContent = "No rules found. Try a different search.";
            } else {
                msg.textContent = "No rules match your selected filters.";
            }
        }

        filtered.forEach(r => rule_list.append(make_rule_card(r)));
    }

    // Add or remove the red error look on a form field
    function set_error(field, has_error) {
        const group = field.closest(".form_group");
        if (group) group.classList.toggle("has-error", has_error);
    }

    // Clear all error styles in the modal form
    function clear_all_errors() {
        form.querySelectorAll(".form_group.has-error")
            .forEach(g => g.classList.remove("has-error"));
    }

    // Check the form has the required fields filled in
    function validate_form() {
        let valid = true;

        const title_ok = title_input.value.trim().length > 0;
        set_error(title_input, !title_ok);
        if (!title_ok) valid = false;

        const section_ok = section_input.value.trim().length > 0;
        set_error(section_input, !section_ok);
        if (!section_ok) valid = false;

        const action_ok = action_input.value.trim().length > 0;
        set_error(action_input, !action_ok);
        if (!action_ok) valid = false;

        return valid;
    }

    // Open the modal in "add new rule" mode
    function open_add_modal() {
        editing_rule_id = null;
        form.reset();
        clear_all_errors();
        conditions = [];

        if (modal_title) modal_title.textContent = "Add rule";
        if (submit_btn) submit_btn.textContent = "Submit";

        rebuild_action_options();
        rebuild_action_values();
        render_conditions();

        modal.style.display = "flex";
        modal.setAttribute("aria-hidden", "false");
        title_input?.focus();
    }

    // Open the modal pre-filled with an existing rule for editing
    function open_edit_modal(rule) {
        editing_rule_id = rule.rule_id;
        clear_all_errors();

        title_input.value = rule.rule_title || "";
        description_input.value = rule.rule_description || "";
        section_input.value = section_value(rule.rule_section);

        rebuild_action_options();
        action_input.value = rule.rule_action || "";
        rebuild_action_values();
        action_value_input.value = rule.rule_action_value || "";

        conditions = Array.isArray(rule.rule_conditions)
            ? rule.rule_conditions.map(c => ({ ...c, id: c.id || create_id() }))
            : [];

        if (modal_title) modal_title.textContent = "Edit rule";
        if (submit_btn) submit_btn.textContent = "Save";

        render_conditions();

        modal.style.display = "flex";
        modal.setAttribute("aria-hidden", "false");
        title_input.focus();
    }

    // Close the rule modal and reset its state
    function close_modal() {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
        form.reset();
        clear_all_errors();
        conditions = [];
        editing_rule_id = null;
    }

    // Save the form when the user submits
    form.addEventListener("submit", event => {
        event.preventDefault();

        if (!validate_form()) return;

        const rule = {
            rule_title: title_input.value.trim(),
            rule_description: description_input.value.trim(),
            rule_section: section_value(section_input.value),
            rule_status: "enabled",
            rule_join: join_input?.value || "AND",
            rule_conditions: conditions.map(c => ({
                id: c.id,
                field: c.field,
                operator: c.operator,
                value: c.value
            })),
            rule_action: action_input.value,
            rule_action_value: action_value_input.value
        };

        const rules = get_rules();
        const is_editing = editing_rule_id !== null;

        if (is_editing) {
            const idx = rules.findIndex(
                r => String(r.rule_id) === String(editing_rule_id)
            );
            if (idx !== -1) {
                rules[idx] = { ...rules[idx], ...rule };
            }
        } else {
            rules.push({
                rule_id: create_id(),
                ...rule,
                created_at: new Date().toISOString()
            });
        }

        save_rules(rules);
        close_modal();
        render_rules();

        showToast(is_editing
            ? "All set! Your changes have been saved successfully!"
            : `Nice work! Your new rule "${rule.rule_title}" is now in the list!`);
    });

    // Buttons and keys that open or close the rule modal
    document.getElementById("open-rule-modal")
        ?.addEventListener("click", open_add_modal);
    document.getElementById("close-rule-modal")
        ?.addEventListener("click", close_modal);
    document.getElementById("cancel-rule-modal")
        ?.addEventListener("click", close_modal);

    // Clicking the dark backdrop closes the modal
    modal.addEventListener("click", e => {
        if (e.target === modal) close_modal();
    });

    // Pressing Escape closes the modal
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && modal.style.display !== "none") {
            close_modal();
        }
    });

    rule_search?.addEventListener("input", render_rules);

    // Delete confirmation popup
    const deleteModal = document.getElementById("delete-confirm-modal");
    const deleteMessage = document.getElementById("delete-confirm-message");
    const deleteConfirmBtn = document.getElementById("delete-confirm-btn");
    const deleteCancelBtn = document.getElementById("delete-cancel-btn");
    const deleteCloseBtn = document.getElementById("delete-modal-close");

    let pendingDeleteAction = null;

    // Show the "Are you sure?" popup and remember what to run if confirmed
    function openDeleteConfirmation(itemName, itemType, deleteAction) {
        if (!deleteModal || !deleteMessage) return;

        deleteMessage.replaceChildren();
        deleteMessage.append(
            document.createTextNode("Are you sure you want to delete ")
        );
        const nameEl = document.createElement("strong");
        nameEl.textContent = itemName;
        deleteMessage.append(nameEl, document.createTextNode(` (${itemType})?`));

        pendingDeleteAction = deleteAction;
        deleteModal.style.display = "flex";
    }

    function closeDeleteConfirmation() {
        if (deleteModal) deleteModal.style.display = "none";
        pendingDeleteAction = null;
    }

    deleteCloseBtn?.addEventListener("click", closeDeleteConfirmation);
    deleteCancelBtn?.addEventListener("click", closeDeleteConfirmation);

    deleteModal?.addEventListener("click", e => {
        if (e.target === deleteModal) closeDeleteConfirmation();
    });

    deleteConfirmBtn?.addEventListener("click", () => {
        if (typeof pendingDeleteAction !== "function") return;
        const action = pendingDeleteAction;
        closeDeleteConfirmation();
        action();
    });

    render_rules();
}