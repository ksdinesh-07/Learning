const RULE_STORAGE_KEY = "rule_data";

const FIELD_MAP = {
    priority:   "task_priority",
    status:     "task_status",
    "due-date": "task_due_date",
    frequency:  "habit_frequency",
    streak:     "habit_streak"
};

function getRules() {
    try {
        const data = JSON.parse(localStorage.getItem(RULE_STORAGE_KEY) || "[]");
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

function normalise(value) {
    return String(value ?? "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");
}

function checkCondition(operator, itemValue, conditionValue) {
    const a = normalise(itemValue);
    const b = normalise(conditionValue);

    switch (operator) {
        case "equals":
            return a === b;
        case "not-equals":
            return a !== b;
        case "greater":
            return Number(itemValue) > Number(conditionValue);
        case "less":
            return Number(itemValue) < Number(conditionValue);
        case "greater-eq":
            return Number(itemValue) >= Number(conditionValue);
        case "less-eq":
            return Number(itemValue) <= Number(conditionValue);
        default:
            return false;
    }
}

function evaluateCondition(condition, item, streakFn) {
    if (condition.field === "due-date") {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const due = item.task_due_date ? new Date(item.task_due_date) : null;

        let matches = false;
        if (due && !Number.isNaN(due.getTime())) {
            const diffDays = Math.round(
                (due - today) / (1000 * 60 * 60 * 24)
            );

            switch (condition.value) {
                case "overdue":   matches = diffDays < 0; break;
                case "today":     matches = diffDays === 0; break;
                case "tomorrow":  matches = diffDays === 1; break;
                case "this-week": matches = diffDays >= 0 && diffDays <= 7; break;
                default:          matches = false;
            }
        }

        return condition.operator === "not-equals" ? !matches : matches;
    }

    if (condition.field === "streak" && typeof streakFn === "function") {
        const streak = streakFn(item);
        return checkCondition(condition.operator, streak, condition.value);
    }

    const actualKey = FIELD_MAP[condition.field] || condition.field;
    const itemValue = item[actualKey];

    return checkCondition(condition.operator, itemValue, condition.value);
}

function evaluateRule(rule, item, streakFn) {
    if (!Array.isArray(rule.rule_conditions) || rule.rule_conditions.length === 0) {
        return false;
    }

    const results = rule.rule_conditions.map(c =>
        evaluateCondition(c, item, streakFn)
    );

    if (rule.rule_join === "OR") return results.some(Boolean);
    return results.every(Boolean);
}

export function getRuleEffects(item, section, streakFn) {
    const rules = getRules().filter(r =>
        r.rule_section === section && r.rule_status === "enabled"
    );

    const effects = {
        highlight: null,
        badge: null,
        notify: false,
        complete: false
    };

    rules.forEach(rule => {
        if (!evaluateRule(rule, item, streakFn)) return;

        switch (rule.rule_action) {
            case "highlight":  effects.highlight = rule.rule_action_value; break;
            case "show-badge": effects.badge     = rule.rule_action_value; break;
            case "notify":     effects.notify    = true; break;
            case "complete":   effects.complete  = true; break;
        }
    });

    return effects;
}

export function highlightColorFor(value) {
    const map = {
        red:    "#fee2e2",
        orange: "#ffedd5",
        yellow: "#fef9c3",
        blue:   "#dbeafe",
        green:  "#dcfce7"
    };
    return map[value] || null;
}