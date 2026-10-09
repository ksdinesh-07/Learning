// js/rule-engine.js

const RULE_STORAGE_KEY = "rule_data";

function getRules() {
    try {
        const data = JSON.parse(localStorage.getItem(RULE_STORAGE_KEY) || "[]");
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

function checkCondition(operator, itemValue, conditionValue) {
    switch (operator) {
        case "equals":
            return String(itemValue) === String(conditionValue);
        case "not-equals":
            return String(itemValue) !== String(conditionValue);
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
    let itemValue = item[condition.field];

    if (condition.field === "streak" && typeof streakFn === "function") {
        itemValue = streakFn(item);
    }

    if (condition.field === "due-date") {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const due = item.task_due_date ? new Date(item.task_due_date) : null;
        if (!due) return false;

        const diffDays = Math.round((due - today) / (1000 * 60 * 60 * 24));

        switch (condition.value) {
            case "overdue":   return diffDays < 0;
            case "today":     return diffDays === 0;
            case "tomorrow":  return diffDays === 1;
            case "this-week": return diffDays >= 0 && diffDays <= 7;
            default:          return false;
        }
    }

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
            case "show-badge": effects.badge = rule.rule_action_value; break;
            case "notify":     effects.notify = true; break;
            case "complete":   effects.complete = true; break;
        }
    });

    return effects;
}