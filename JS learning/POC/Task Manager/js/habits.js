import { getRuleEffects, highlightColorFor } from "./rule-engine.js";

const STORAGE_KEY = "habit_data";

const icon_paths = {
    drag: "./assets/drag_icon-light.svg",
    edit: "./assets/edit_icon-light.svg",
    delete: "./assets/delete_icon-light.svg",
    flag: "./assets/flag_icon-light.svg",
    flame: "./assets/fire-streek-icon.svg",
    calendar: "./assets/due_date_icon.svg",
    settings: "./assets/settings_icon.svg"
};

const WEEK_DAYS_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const WEEK_DAYS_FULL = [
    "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday", "Sunday"
];

let toastTimeout = null;

function showToast(message) {
    // Fade out any existing toast before showing the new one
    const existing = document.querySelector(".toast-notification");
    if (existing) {
        existing.classList.add("hiding");
        existing.addEventListener("animationend", () => existing.remove(), { once: true });
    }
    clearTimeout(toastTimeout);

    const toast = document.createElement("div");
    toast.className = "toast-notification";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");

    // Icon — just the tick SVG, background comes from CSS
    const icon = document.createElement("div");
    icon.className = "toast-icon";

    const icon_img = document.createElement("img");
    icon_img.src = "./assets/taster-tick icon.svg";
    icon_img.alt = "";
    icon_img.draggable = false;
    icon.appendChild(icon_img);

    // Message
    const text = document.createElement("div");
    text.className = "toast-message";
    text.textContent = message;

    // Close button
    const close = document.createElement("button");
    close.type = "button";
    close.className = "toast-close";
    close.textContent = "×";
    close.setAttribute("aria-label", "Close notification");

    close.addEventListener("click", () => {
        clearTimeout(toastTimeout);
        toast.classList.add("hiding");
        toast.addEventListener("animationend", () => toast.remove(), { once: true });
    });

    toast.append(icon, text, close);
    document.body.appendChild(toast);

    // Auto-dismiss after 3000ms
    toastTimeout = setTimeout(() => {
        toast.classList.add("hiding");
        toast.addEventListener("animationend", () => toast.remove(), { once: true });
    }, 3000);
}

export function setup_habits() {
    const habit_list = document.getElementById("habit-list");
    const empty_state = document.getElementById("empty-habit-state");
    const modal = document.getElementById("add_habit_page");
    const form = document.getElementById("add_habit_form");
    const title_input = document.getElementById("habit-title");
    const description_input = document.getElementById("habit-description");
    const frequency_input = document.getElementById("habit-frequency");
    const modal_title = document.getElementById("habit-modal-title");
    const habit_search = document.getElementById("habit-search");

    const frequency_filter = document.getElementById("frequency-filter");
    const sort_filter = document.getElementById("sort-filter");

    const weekly_day_group = document.getElementById("weekly-day-group");
    const weekly_day_input = document.getElementById("habit-weekly-day");

    const custom_days_group = document.getElementById("custom-days-group");
    const multiselect_control = document.getElementById("multiselect-control");
    const multiselect_dropdown = document.getElementById("multiselect-dropdown");
    const multiselect_chips = document.getElementById("multiselect-chips");

    if (!habit_list || !modal || !form) {
        console.error("Check the habit HTML element IDs.");
        return;
    }

    let editing_habit_id = null;
    let selected_days = [];

    const filter_state = {
        frequency: frequency_filter?.value || "all",
        sort: sort_filter?.value || "streak"
    };

    frequency_filter?.addEventListener("change", () => {
        filter_state.frequency = frequency_filter.value;
        render_habits();
    });

    sort_filter?.addEventListener("change", () => {
        filter_state.sort = sort_filter.value;
        render_habits();
    });

    function open_multiselect() {
        multiselect_dropdown.hidden = false;
        document.addEventListener("click", handle_outside_click);
    }

    function close_multiselect() {
        multiselect_dropdown.hidden = true;
        document.removeEventListener("click", handle_outside_click);
    }

    function handle_outside_click(event) {
        const wrapper = document.getElementById("custom-days-multiselect");
        if (wrapper && !wrapper.contains(event.target)) {
            close_multiselect();
        }
    }

    multiselect_control?.addEventListener("click", (event) => {
        event.stopPropagation();
        if (multiselect_dropdown.hidden) open_multiselect();
        else close_multiselect();
    });

    multiselect_dropdown?.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener("change", () => {
            const day = cb.dataset.day;

            if (day === "all") {
                const checked = cb.checked;
                selected_days = checked ? [...WEEK_DAYS_FULL] : [];
                multiselect_dropdown
                    .querySelectorAll('input[type="checkbox"]')
                    .forEach(other => {
                        if (other.dataset.day !== "all") {
                            other.checked = checked;
                        }
                    });
            } else {
                if (cb.checked) {
                    if (!selected_days.includes(day)) selected_days.push(day);
                } else {
                    selected_days = selected_days.filter(d => d !== day);
                }

                const select_all = multiselect_dropdown
                    .querySelector('input[data-day="all"]');
                if (select_all) {
                    select_all.checked =
                        selected_days.length === WEEK_DAYS_FULL.length;
                }
            }

            render_chips();
            custom_days_group.classList.remove("has-error");
        });
    });

    function render_chips() {
        multiselect_chips.replaceChildren();

        selected_days.forEach(day => {
            const chip = document.createElement("span");
            chip.className = "multiselect-chip";
            chip.textContent = day;

            const remove = document.createElement("button");
            remove.type = "button";
            remove.className = "multiselect-chip-remove";
            remove.textContent = "×";
            remove.setAttribute("aria-label", `Remove ${day}`);

            remove.addEventListener("click", (event) => {
                event.stopPropagation();
                selected_days = selected_days.filter(d => d !== day);

                const cb = multiselect_dropdown
                    .querySelector(`input[data-day="${day}"]`);
                if (cb) cb.checked = false;

                const select_all = multiselect_dropdown
                    .querySelector('input[data-day="all"]');
                if (select_all) select_all.checked = false;

                render_chips();
            });

            chip.append(remove);
            multiselect_chips.append(chip);
        });
    }

    function reset_multiselect() {
        selected_days = [];
        multiselect_dropdown
            ?.querySelectorAll('input[type="checkbox"]')
            .forEach(cb => { cb.checked = false; });
        render_chips();
        close_multiselect();
    }

    frequency_input?.addEventListener("change", () => {
        const value = frequency_input.value;

        if (value === "weekly") {
            weekly_day_group.hidden = false;
            custom_days_group.hidden = true;
            weekly_day_input.value = "";
            reset_multiselect();
        } else if (value === "custom") {
            weekly_day_group.hidden = true;
            custom_days_group.hidden = false;
            reset_multiselect();
        } else {
            weekly_day_group.hidden = true;
            custom_days_group.hidden = true;
            reset_multiselect();
            if (weekly_day_input) weekly_day_input.value = "";
        }

        weekly_day_group.classList.remove("has-error");
        custom_days_group.classList.remove("has-error");

        // Update floating labels
        update_select_label(frequency_input);
        update_select_label(weekly_day_input);
    });

    function create_id() {
        return globalThis.crypto?.randomUUID?.() ||
            `${Date.now()}-${Math.random()}`;
    }

    function get_habits() {
        try {
            const data = JSON.parse(
                localStorage.getItem(STORAGE_KEY) || "[]"
            );
            return Array.isArray(data) ? data : [];
        } catch {
            return [];
        }
    }

    function save_habits(habits) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
    }

    function frequency_value(value) {
        const freq = String(value || "daily").toLowerCase();
        return ["daily", "weekly", "custom"].includes(freq)
            ? freq
            : "daily";
    }

    function make_icon(path, alt = "") {
        const image = document.createElement("img");
        image.src = path;
        image.alt = alt;
        image.draggable = false;
        return image;
    }

    function make_button(class_name, path, label) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `icon-button ${class_name}`;
        button.setAttribute("aria-label", label);
        button.title = label;
        button.append(make_icon(path));
        return button;
    }

    // Local-time "YYYY-MM-DD" key (avoids the UTC shift)
    function to_date_key(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");
        return `${y}-${m}-${d}`;
    }

    function start_of_today() {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    }

    function is_expected_day(habit, date) {
        const freq = frequency_value(habit.habit_frequency);

        if (freq === "daily") return true;

        if (freq === "weekly") {
            const dayName = WEEK_DAYS_FULL[(date.getDay() + 6) % 7];
            return habit.weekly_day === dayName;
        }

        const dayName = WEEK_DAYS_FULL[(date.getDay() + 6) % 7];
        return Array.isArray(habit.custom_days) &&
            habit.custom_days.includes(dayName);
    }

    function calculate_streak(habit) {
        const completions = Array.isArray(habit.completions)
            ? [...habit.completions].sort()
            : [];
        if (completions.length === 0) return 0;

        let streak = 0;
        const cursor = start_of_today();
        const today_key = to_date_key(cursor);

        for (let i = 0; i < 3650; i++) {
            const key = to_date_key(cursor);

            if (completions.includes(key)) {
                streak++;
                cursor.setDate(cursor.getDate() - 1);
                continue;
            }

            if (key === today_key && is_expected_day(habit, cursor)) {
                cursor.setDate(cursor.getDate() - 1);
                continue;
            }

            if (is_expected_day(habit, cursor)) {
                break;
            }

            cursor.setDate(cursor.getDate() - 1);
        }

        return streak;
    }

    function is_completed_today(habit) {
        const key = to_date_key(new Date());
        return Array.isArray(habit.completions) && habit.completions.includes(key);
    }

    function toggle_today_completion(habit) {
        const key = to_date_key(new Date());
        if (!Array.isArray(habit.completions)) habit.completions = [];

        const idx = habit.completions.indexOf(key);
        if (idx === -1) habit.completions.push(key);
        else habit.completions.splice(idx, 1);
    }

    // Toggle a specific past/today date (used by clicking any day cell)
    function toggle_completion_for_date(habit, date_key) {
        if (!Array.isArray(habit.completions)) habit.completions = [];

        const idx = habit.completions.indexOf(date_key);
        if (idx === -1) {
            habit.completions.push(date_key);
        } else {
            habit.completions.splice(idx, 1);
        }
    }

    function make_habit_card(habit) {
        const card = document.createElement("article");
        card.className = "task-card habit-card";
        card.dataset.habitId = String(habit.habit_id);

        const header = document.createElement("div");
        header.className = "task-card-header";

        const heading_group = document.createElement("div");
        heading_group.className = "task-heading-group";

        const title = document.createElement("h3");
        title.className = "task-title";
        title.textContent = habit.habit_title || "Untitled habit";

        heading_group.append(title);

        const actions = document.createElement("div");
        actions.className = "task-card-actions";

        const delete_button = make_button(
            "delete-task-button",
            icon_paths.delete,
            "Delete"
        );
        delete_button.addEventListener("click", () => {
            openDeleteConfirmation(
                habit.habit_title || "Untitled habit",
                "habit",
                () => {
                    const habits = get_habits().filter(
                        entry => String(entry.habit_id) !== String(habit.habit_id)
                    );
                    save_habits(habits);
                    render_habits();
                    showToast("Done! Your item has been removed.");
                }
            );
        });

        const edit_button = make_button(
            "edit-task-button",
            icon_paths.edit,
            "Edit"
        );
        edit_button.addEventListener("click", () => open_edit_modal(habit));

        const mark_btn = document.createElement("button");
        mark_btn.type = "button";
        const done_today = is_completed_today(habit);
        mark_btn.className = `habit-mark-btn ${done_today ? "is-complete" : ""}`;
        mark_btn.textContent = done_today ? "Completed" : "Mark complete";
        mark_btn.addEventListener("click", () => {
            update_habit(habit.habit_id, current => {
                toggle_today_completion(current);
            });
            showToast(done_today
                ? "Marked as not done for today."
                : "Great job! Habit completed for today.");
        });

        actions.append(delete_button, edit_button, mark_btn);
        header.append(heading_group, actions);

        const description = document.createElement("p");
        description.className = "task-description";
        description.textContent = habit.habit_description || "";

        const meta_row = document.createElement("div");
        meta_row.className = "task-badges habit-meta";

        const freq = frequency_value(habit.habit_frequency);
        const freq_badge = document.createElement("span");
        freq_badge.className = "habit-badge habit-badge-freq";

        const freq_icon_path =
            freq === "custom" ? icon_paths.settings : icon_paths.calendar;

        const freq_icon = document.createElement("img");
        freq_icon.className = "habit-badge-icon";
        freq_icon.src = freq_icon_path;
        freq_icon.alt = "";
        freq_icon.draggable = false;

        const freq_label = document.createElement("span");
        freq_label.textContent = freq.charAt(0).toUpperCase() + freq.slice(1);

        freq_badge.append(freq_icon, freq_label);

        const streak = calculate_streak(habit);
        const streak_badge = document.createElement("span");
        streak_badge.className = "habit-badge habit-badge-streak";

        const fire = document.createElement("img");
        fire.className = "habit-badge-icon";
        fire.src = icon_paths.flame;
        fire.alt = "";
        fire.draggable = false;

        const streak_label = document.createElement("span");
        streak_label.textContent = `${streak} day streak`;

        streak_badge.append(fire, streak_label);

        meta_row.append(freq_badge, streak_badge);

        // 7-day grid starting from the habit's creation date
        const grid_wrapper = document.createElement("div");
        grid_wrapper.className = "habit-week";

        const grid_title = document.createElement("p");
        grid_title.className = "habit-week-title";
        grid_title.textContent = "First 7 days";

        const grid = document.createElement("div");
        grid.className = "habit-week-grid";

        const created_raw = habit.created_at
            ? new Date(habit.created_at)
            : new Date();
        const created_day = new Date(created_raw);
        created_day.setHours(0, 0, 0, 0);

        const dates = [];
        for (let i = 0; i < 7; i++) {
            const d = new Date(created_day);
            d.setDate(d.getDate() + i);
            dates.push(d);
        }

        const today = start_of_today();
        const completions = Array.isArray(habit.completions)
            ? habit.completions
            : [];

        dates.forEach(date => {
            const cell = document.createElement("div");
            cell.className = "habit-day-cell";

            const key = to_date_key(date);
            const is_done = completions.includes(key);
            const is_today = key === to_date_key(today);
            const is_future = date > today;
            const was_expected = is_expected_day(habit, date);

            // ---------- Classify the cell ----------
            if (is_done) {
                // Completed → green
                cell.classList.add("is-done");
            } else if (is_future) {
                // Future → neutral grey
                cell.classList.add("is-future");
            } else if (is_today) {
                // Today, not done → neutral grey
                cell.classList.add("is-future");
            } else {
                // Any past day, not completed → RED
                cell.classList.add("is-missed");
            }
            // ---------- Click to toggle (only for past + today) ----------
            if (!is_future) {
                cell.classList.add("is-clickable");
                cell.setAttribute("role", "button");
                cell.setAttribute("tabindex", "0");
                cell.setAttribute(
                    "aria-label",
                    is_done
                        ? `Mark ${key} as not done`
                        : `Mark ${key} as done`
                );

                cell.addEventListener("click", () => {
                    update_habit(habit.habit_id, current => {
                        toggle_completion_for_date(current, key);
                    });
                    showToast(
                        is_done
                            ? `Marked ${key} as not done.`
                            : `Nice work! Marked ${key} as done.`
                    );
                });

                cell.addEventListener("keydown", event => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        cell.click();
                    }
                });
            }

            const day_num = document.createElement("span");
            day_num.className = "habit-day-num";
            day_num.textContent = date.getDate();

            const day_label = document.createElement("span");
            day_label.className = "habit-day-label";
            day_label.textContent = WEEK_DAYS_SHORT[(date.getDay() + 6) % 7];

            cell.append(day_num, day_label);
            grid.append(cell);
        });

        grid_wrapper.append(grid_title, grid);
        card.append(header, description, meta_row, grid_wrapper);

        // custom rules
        const effects = getRuleEffects(habit, "habits", calculate_streak);

        if (effects.highlight) {
            const color = highlightColorFor(effects.highlight);
            if (color) {
                card.style.borderColor = color;
                card.style.borderWidth = "2px";
                card.dataset.ruleHighlight = effects.highlight;
            }
        }

        if (effects.badge) {
            const rule_badge = document.createElement("span");
            rule_badge.className = `rule-badge rule-badge-${effects.badge}`;
            rule_badge.textContent = effects.badge.toUpperCase();
            heading_group.append(rule_badge);
        }

        return card;
    }

    function render_habits() {
        const all_habits = get_habits();

        const search_text = (habit_search?.value || "").trim().toLowerCase();
        const selected_freq = filter_state.frequency || "all";
        const sort_by = filter_state.sort || "streak";

        let filtered = all_habits.filter(habit => {
            const title = String(habit.habit_title || "").toLowerCase();
            const description = String(habit.habit_description || "").toLowerCase();
            const matches_search =
                title.includes(search_text) || description.includes(search_text);

            const freq = frequency_value(habit.habit_frequency);
            const matches_freq = selected_freq === "all" || freq === selected_freq;

            return matches_search && matches_freq;
        });

        filtered.sort((a, b) => {
            switch (sort_by) {
                case "streak":
                    return calculate_streak(b) - calculate_streak(a);

                case "created-at":
                    return String(b.created_at || "").localeCompare(
                        String(a.created_at || "")
                    );

                case "ascending":
                    return (a.habit_title || "").localeCompare(
                        b.habit_title || "",
                        undefined,
                        { sensitivity: "base" }
                    );

                case "descending":
                    return (b.habit_title || "").localeCompare(
                        a.habit_title || "",
                        undefined,
                        { sensitivity: "base" }
                    );

                default:
                    return 0;
            }
        });

        habit_list.replaceChildren();

        if (empty_state) {
            empty_state.hidden = filtered.length > 0;

            const message_el = empty_state.querySelector(".empty-task-message");

            if (all_habits.length === 0) {
                message_el.textContent =
                    "No habits yet. Create your first habit to start building streaks!";
            } else if (search_text && filtered.length === 0) {
                message_el.textContent =
                    "No habits found. Try a different search.";
            } else {
                message_el.textContent =
                    "No habits match your selected filters.";
            }
        }

        filtered.forEach(habit => {
            habit_list.append(make_habit_card(habit));
        });
    }

    function update_habit(habit_id, callback) {
        const habits = get_habits();
        const habit = habits.find(
            h => String(h.habit_id) === String(habit_id)
        );
        if (!habit) return;
        callback(habit);
        save_habits(habits);
        render_habits();
    }

    function set_error(field, has_error) {
        const group = field.closest(".form_group");
        if (!group) return;
        group.classList.toggle("has-error", has_error);
    }

    function clear_all_errors() {
        form.querySelectorAll(".form_group.has-error")
            .forEach(group => group.classList.remove("has-error"));
    }

    // Toggle .has-value on a select so its floating label moves up
    function update_select_label(select_el) {
        if (!select_el) return;
        select_el.classList.toggle("has-value", Boolean(select_el.value));
    }

    function validate_form() {
        let valid = true;

        const title_ok = title_input.value.trim().length > 0;
        set_error(title_input, !title_ok);
        if (!title_ok) valid = false;

        const freq_ok = frequency_input.value.trim().length > 0;
        set_error(frequency_input, !freq_ok);
        if (!freq_ok) valid = false;

        if (frequency_input.value === "weekly") {
            const day_ok = weekly_day_input.value.trim().length > 0;
            weekly_day_group.classList.toggle("has-error", !day_ok);
            if (!day_ok) valid = false;
        }

        if (frequency_input.value === "custom") {
            const days_ok = selected_days.length > 0;
            custom_days_group.classList.toggle("has-error", !days_ok);
            if (!days_ok) valid = false;
        }

        return valid;
    }

    [title_input, frequency_input, weekly_day_input].forEach(field => {
        field?.addEventListener("input", () => {
            const group = field.closest(".form_group");
            if (group?.classList.contains("has-error")) {
                if (field === title_input) {
                    set_error(field, field.value.trim().length === 0);
                } else if (field === frequency_input) {
                    set_error(field, field.value.trim().length === 0);
                } else if (field === weekly_day_input) {
                    set_error(field, field.value.trim().length === 0);
                }
            }
        });

        field?.addEventListener("change", () => {
            const group = field.closest(".form_group");
            if (group?.classList.contains("has-error")) {
                if (field === frequency_input) {
                    set_error(field, field.value.trim().length === 0);
                } else if (field === weekly_day_input) {
                    set_error(field, field.value.trim().length === 0);
                }
            }
            update_select_label(field);
        });
    });

    frequency_input?.addEventListener("change", () => {
        update_select_label(frequency_input);
    });

    weekly_day_input?.addEventListener("change", () => {
        update_select_label(weekly_day_input);
    });

    function open_add_modal() {
        editing_habit_id = null;
        form.reset();
        clear_all_errors();
        reset_multiselect();

        weekly_day_group.hidden = true;
        custom_days_group.hidden = true;
        weekly_day_input.value = "";

        if (modal_title) modal_title.textContent = "Add habit";
        if (frequency_input) frequency_input.value = "";

        update_select_label(frequency_input);
        update_select_label(weekly_day_input);

        modal.style.display = "flex";
        title_input?.focus();
    }

    function open_edit_modal(habit) {
        editing_habit_id = habit.habit_id;
        clear_all_errors();
        reset_multiselect();

        title_input.value = habit.habit_title || "";
        description_input.value = habit.habit_description || "";
        frequency_input.value = frequency_value(habit.habit_frequency);

        weekly_day_group.hidden = true;
        custom_days_group.hidden = true;
        weekly_day_input.value = "";

        if (frequency_input.value === "weekly") {
            weekly_day_group.hidden = false;
            weekly_day_input.value = habit.weekly_day || "";
        } else if (frequency_input.value === "custom") {
            custom_days_group.hidden = false;
            selected_days = Array.isArray(habit.custom_days)
                ? [...habit.custom_days]
                : [];

            multiselect_dropdown
                .querySelectorAll('input[type="checkbox"]')
                .forEach(cb => {
                    if (cb.dataset.day !== "all") {
                        cb.checked = selected_days.includes(cb.dataset.day);
                    }
                });

            const select_all = multiselect_dropdown
                .querySelector('input[data-day="all"]');
            if (select_all) {
                select_all.checked = selected_days.length === WEEK_DAYS_FULL.length;
            }

            render_chips();
        }

        if (modal_title) modal_title.textContent = "Edit habit";

        update_select_label(frequency_input);
        update_select_label(weekly_day_input);

        modal.style.display = "flex";
        title_input.focus();
    }

    function close_modal() {
        modal.style.display = "none";
        form.reset();
        clear_all_errors();
        reset_multiselect();

        weekly_day_group.hidden = true;
        custom_days_group.hidden = true;
        weekly_day_input.value = "";

        update_select_label(frequency_input);
        update_select_label(weekly_day_input);

        editing_habit_id = null;
    }

    form.addEventListener("submit", event => {
        event.preventDefault();

        if (!validate_form()) {
            const first_error = form.querySelector(
                ".form_group.has-error input, .form_group.has-error select"
            );
            first_error?.focus();
            return;
        }

        const freq = frequency_value(frequency_input.value);

        const habit = {
            habit_title: title_input.value.trim(),
            habit_description: description_input.value.trim(),
            habit_frequency: freq,
            weekly_day: freq === "weekly" ? weekly_day_input.value : "",
            custom_days: freq === "custom" ? [...selected_days] : []
        };

        const habits = get_habits();
        const is_editing = editing_habit_id !== null;

        if (is_editing) {
            const index = habits.findIndex(
                h => String(h.habit_id) === String(editing_habit_id)
            );
            if (index !== -1) {
                habits[index] = { ...habits[index], ...habit };
            }
        } else {
            habits.push({
                habit_id: create_id(),
                ...habit,
                completions: [],
                created_at: new Date().toISOString()
            });
        }

        save_habits(habits);
        close_modal();
        render_habits();

        showToast(is_editing
            ? "All set! Your changes have been saved successfully!"
            : `Nice work! Your new habit "${habit.habit_title}" is now in the list!`);
    });

    document.getElementById("open-habit-modal")
        ?.addEventListener("click", open_add_modal);

    document.getElementById("close-habit-modal")
        ?.addEventListener("click", close_modal);

    document.getElementById("cancel-habit-modal")
        ?.addEventListener("click", close_modal);

    // NOTE: clicking outside the modal does NOT close it.
    // The modal closes only via X, Cancel, or Escape key.

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal.style.display !== "none") {
            close_modal();
        }
    });

    habit_search?.addEventListener("input", render_habits);

    const deleteModal = document.getElementById("delete-confirm-modal");
    const deleteMessage = document.getElementById("delete-confirm-message");
    const deleteConfirmBtn = document.getElementById("delete-confirm-btn");
    const deleteCancelBtn = document.getElementById("delete-cancel-btn");
    const deleteCloseBtn = document.getElementById("delete-modal-close");

    let pendingDeleteAction = null;

    function openDeleteConfirmation(itemName, itemType, deleteAction) {
        if (!deleteModal || !deleteMessage) return;

        deleteMessage.replaceChildren();
        deleteMessage.append(
            document.createTextNode("Are you sure you want to delete ")
        );
        const nameElement = document.createElement("strong");
        nameElement.textContent = itemName;
        deleteMessage.append(
            nameElement,
            document.createTextNode(` (${itemType})?`)
        );

        pendingDeleteAction = deleteAction;
        deleteModal.style.display = "flex";
    }

    function closeDeleteConfirmation() {
        if (deleteModal) deleteModal.style.display = "none";
        pendingDeleteAction = null;
    }

    deleteCloseBtn?.addEventListener("click", closeDeleteConfirmation);
    deleteCancelBtn?.addEventListener("click", closeDeleteConfirmation);

    // NOTE: clicking outside the delete modal does NOT close it.

    deleteConfirmBtn?.addEventListener("click", () => {
        if (typeof pendingDeleteAction !== "function") return;
        const action = pendingDeleteAction;
        closeDeleteConfirmation();
        action();
    });

    render_habits();
}