// script.js

// Key used to save tasks in localStorage
const TASK_STORAGE_KEY = "task_data";

// Read all tasks from localStorage
function getDashboardTasks() {
    try {
        const tasks = JSON.parse(
            localStorage.getItem(TASK_STORAGE_KEY) || "[]"
        );
        return Array.isArray(tasks) ? tasks : [];
    } catch (error) {
        console.error("Could not read task data:", error);
        return [];
    }
}

// Key used to save habits in localStorage
const HABIT_STORAGE_KEY = "habit_data";

// Day names used to check which days a habit should be done
const WEEK_DAYS_FULL = [
    "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday", "Sunday"
];

const WEEK_DAYS_SHORT = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Read all habits from localStorage
function getDashboardHabits() {
    try {
        const habits = JSON.parse(
            localStorage.getItem(HABIT_STORAGE_KEY) || "[]"
        );
        return Array.isArray(habits) ? habits : [];
    } catch (error) {
        console.error("Could not read habit data:", error);
        return [];
    }
}

// Put text inside an element (if it exists)
function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
}

// Turn a Date into a "YYYY-MM-DD" string in local time
function getLocalDateString(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

// Same as above, kept for readability where a "key" is expected
function toDateKey(date) {
    return getLocalDateString(date);
}

// Today's date at midnight (so comparisons ignore the time)
function startOfToday() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
}

// Make sure a task status is one of our known values
function normalizeStatus(value) {
    const status = String(value || "Todo").trim().toLowerCase();

    if (["completed", "complete", "done"].includes(status)) return "completed";
    if (["in progress", "in-progress", "active"].includes(status)) return "in-progress";
    if (["on hold", "on-hold", "hold"].includes(status)) return "on-hold";
    return "todo";
}

// Make sure a habit frequency is "daily", "weekly" or "custom"
function normalizeFrequency(value) {
    const freq = String(value || "daily").toLowerCase();
    return ["daily", "weekly", "custom"].includes(freq) ? freq : "daily";
}

// Check if the habit was supposed to be done on a given date
function isExpectedDay(habit, date) {
    const freq = normalizeFrequency(habit.habit_frequency);
    if (freq === "daily") return true;

    const dayName = WEEK_DAYS_FULL[(date.getDay() + 6) % 7];

    if (freq === "weekly") {
        return habit.weekly_day === dayName;
    }

    return Array.isArray(habit.custom_days) &&
        habit.custom_days.includes(dayName);
}

// Count how many expected days in a row have been completed
function calculateStreak(habit) {
    const completions = Array.isArray(habit.completions)
        ? [...habit.completions].sort()
        : [];
    if (completions.length === 0) return 0;

    let streak = 0;
    const cursor = startOfToday();
    const todayKey = toDateKey(cursor);

    // Safety limit: only check the last 10 years
    for (let i = 0; i < 3650; i++) {
        const key = toDateKey(cursor);

        if (completions.includes(key)) {
            streak++;
            cursor.setDate(cursor.getDate() - 1);
            continue;
        }

        // Today not done yet — skip without breaking the streak
        if (key === todayKey && isExpectedDay(habit, cursor)) {
            cursor.setDate(cursor.getDate() - 1);
            continue;
        }

        // Expected but missed — stop counting
        if (isExpectedDay(habit, cursor)) break;

        // Not expected on this day — just skip it
        cursor.setDate(cursor.getDate() - 1);
    }

    return streak;
}

// Has this habit already been marked done today?
function isCompletedToday(habit) {
    const key = toDateKey(new Date());
    return Array.isArray(habit.completions) && habit.completions.includes(key);
}

// Update the two task summary cards on the dashboard
function updateTaskSummary(tasks) {
    const now = Date.now();
    const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;
    const today = getLocalDateString();

    // Tasks completed in the last 7 days
    const completedLastSevenDays = tasks.filter(task => {
        if (normalizeStatus(task.task_status) !== "completed") return false;
        if (!task.completed_at) return false;

        const t = Date.parse(task.completed_at);
        return Number.isFinite(t) && t >= sevenDaysAgo && t <= now;
    }).length;

    // Tasks that are past their due date and not completed
    const overdueTasks = tasks.filter(task => {
        if (!task.task_due_date) return false;
        return task.task_due_date < today &&
            normalizeStatus(task.task_status) !== "completed";
    }).length;

    setText("completed-tasks-count", completedLastSevenDays);
    setText("overdue-tasks-count", overdueTasks);
}

// Update the two habit summary cards on the dashboard
function updateHabitSummary(habits) {
    // A habit counts as "active" if it was completed at least once in the last 7 days
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const weekKeys = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(oneWeekAgo);
        d.setDate(d.getDate() + i);
        weekKeys.push(toDateKey(d));
    }

    const activeHabits = habits.filter(h => {
        const completions = Array.isArray(h.completions) ? h.completions : [];
        return completions.some(key => weekKeys.includes(key));
    }).length;

    // Longest streak out of all habits
    const streaks = habits.map(calculateStreak);
    const longestStreak = streaks.length ? Math.max(...streaks) : 0;

    setText("active-habits-count", activeHabits);
    setText("longest-streak-count", longestStreak);
}

// Update the task status counts and redraw the donut chart
function updateStatusOverview(tasks) {
    const counts = {
        todo: 0,
        "on-hold": 0,
        "in-progress": 0,
        completed: 0
    };

    tasks.forEach(task => {
        counts[normalizeStatus(task.task_status)]++;
    });

    setText("legend-todo", `Todo - ${counts.todo}`);
    setText("legend-on-hold", `On hold - ${counts["on-hold"]}`);
    setText("legend-in-progress", `In progress - ${counts["in-progress"]}`);
    setText("legend-completed", `Completed - ${counts.completed}`);

    drawStatusChart(counts);
}

// Draw the donut chart showing how many tasks are in each status
function drawStatusChart(counts) {
    const canvas = document.getElementById("status-chart");
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const rect = canvas.getBoundingClientRect();
    const width = rect.width || 220;
    const height = rect.height || 220;
    const dpr = window.devicePixelRatio || 1;

    // Scale the canvas so it looks sharp on high-DPI screens
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, width, height);

    const values = [
        { value: counts.todo, color: "#9CA3AF" },
        { value: counts["on-hold"], color: "#F59E0B" },
        { value: counts["in-progress"], color: "#3B82F6" },
        { value: counts.completed, color: "#22C55E" }
    ];

    const total = values.reduce((sum, item) => sum + item.value, 0);

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.38;
    const lineWidth = Math.min(width, height) * 0.16;

    if (total === 0) {
        // Nothing to show — draw an empty grey ring
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, Math.PI * 2);
        context.strokeStyle = "#E5E7EB";
        context.lineWidth = lineWidth;
        context.stroke();
    } else {
        // Draw one arc slice per status
        let startAngle = -Math.PI / 2;

        values.forEach(item => {
            if (item.value === 0) return;

            const sliceAngle = (item.value / total) * Math.PI * 2;

            context.beginPath();
            context.arc(
                centerX, centerY, radius,
                startAngle, startAngle + sliceAngle
            );
            context.strokeStyle = item.color;
            context.lineWidth = lineWidth;
            context.lineCap = "butt";
            context.stroke();

            startAngle += sliceAngle;
        });
    }

    const isDark = document.body.classList.contains("dark-theme");

    // Big number in the middle
    context.fillStyle = isDark ? "#ffffff" : "#333333";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "600 24px sans-serif";
    context.fillText(String(total), centerX, centerY - 4);

    // Small caption under the number
    context.fillStyle = isDark ? "#a1a1aa" : "#777777";
    context.font = "12px sans-serif";
    context.fillText("Total tasks", centerX, centerY + 18);
}

// Draw the line chart showing habit completions over the last 7 days
function updateHabitTrend(habits) {
    const canvas = document.getElementById("habit-trend-chart");
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Build the list of the last 7 days (oldest → today)
    const today = startOfToday();
    const days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        days.push(d);
    }

    const labels = days.map(d => WEEK_DAYS_SHORT[(d.getDay() + 6) % 7]);
    const counts = days.map(d => {
        const key = toDateKey(d);
        return habits.filter(h =>
            Array.isArray(h.completions) && h.completions.includes(key)
        ).length;
    });

    const rect = canvas.getBoundingClientRect();
    const cssWidth = rect.width || 500;
    const cssHeight = rect.height || 300;
    const dpr = window.devicePixelRatio || 1;

    // Scale for high-DPI screens
    canvas.width = Math.round(cssWidth * dpr);
    canvas.height = Math.round(cssHeight * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, cssWidth, cssHeight);

    const isDark = document.body.classList.contains("dark-theme");
    const textColor = isDark ? "#a1a1aa" : "#717182";
    const gridColor = isDark ? "#3f3f46" : "#e5e7eb";
    const lineColor = "#3b82f6";
    const pointFill = "#ffffff";
    const pointStroke = "#3b82f6";

    const padding = { top: 30, right: 30, bottom: 40, left: 50 };
    const chartW = cssWidth - padding.left - padding.right;
    const chartH = cssHeight - padding.top - padding.bottom;

    const maxCount = Math.max(1, ...counts);
    const yMax = Math.max(4, maxCount);
    const ySteps = 4;

    // Y-axis dashed grid lines and labels
    context.strokeStyle = gridColor;
    context.lineWidth = 1;
    context.setLineDash([3, 3]);
    context.font = "12px 'Open Sans', sans-serif";
    context.textAlign = "right";
    context.textBaseline = "middle";
    context.fillStyle = textColor;

    for (let i = 0; i <= ySteps; i++) {
        const val = (yMax / ySteps) * (ySteps - i);
        const y = padding.top + (chartH / ySteps) * i;

        context.beginPath();
        context.moveTo(padding.left, y);
        context.lineTo(padding.left + chartW, y);
        context.stroke();

        context.fillText(String(Math.round(val)), padding.left - 10, y);
    }

    context.setLineDash([]);

    // X-axis day labels along the bottom
    context.textAlign = "center";
    context.textBaseline = "top";
    context.fillStyle = textColor;

    const slotW = chartW / (days.length - 1 || 1);
    labels.forEach((label, i) => {
        const x = padding.left + slotW * i;
        context.fillText(label, x, padding.top + chartH + 12);
    });

    // Turn counts into (x, y) points
    const points = counts.map((count, i) => {
        const x = padding.left + slotW * i;
        const y = padding.top + chartH - (count / yMax) * chartH;
        return { x, y, count };
    });

    // Draw the blue line connecting the points
    context.strokeStyle = lineColor;
    context.lineWidth = 2;
    context.lineJoin = "round";
    context.lineCap = "round";
    context.beginPath();
    points.forEach((p, i) => {
        if (i === 0) context.moveTo(p.x, p.y);
        else context.lineTo(p.x, p.y);
    });
    context.stroke();

    // Draw a circle at each point
    points.forEach(p => {
        context.beginPath();
        context.arc(p.x, p.y, 5, 0, Math.PI * 2);
        context.fillStyle = pointFill;
        context.fill();
        context.strokeStyle = pointStroke;
        context.lineWidth = 2;
        context.stroke();
    });

    // Rotated Y-axis title on the left
    context.save();
    context.translate(14, padding.top + chartH / 2);
    context.rotate(-Math.PI / 2);
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = textColor;
    context.font = "12px 'Open Sans', sans-serif";
    context.fillText("Total habits", 0, 0);
    context.restore();
}

// Read all data and refresh every part of the dashboard
function updateDashboard() {
    const tasks = getDashboardTasks();
    const habits = getDashboardHabits();

    updateTaskSummary(tasks);
    updateHabitSummary(habits);
    updateStatusOverview(tasks);
    updateHabitTrend(habits);
}

// Run once the page is ready, and keep the dashboard in sync
document.addEventListener("DOMContentLoaded", () => {
    updateDashboard();

    // Refresh when the tab regains focus
    window.addEventListener("focus", updateDashboard);

    // Refresh when tasks or habits change in another tab
    window.addEventListener("storage", event => {
        if (
            event.key === TASK_STORAGE_KEY ||
            event.key === HABIT_STORAGE_KEY ||
            event.key === null
        ) {
            updateDashboard();
        }
    });

    // Refresh after a window resize (charts need redrawing)
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateDashboard, 120);
    });

    // Refresh when the theme is toggled (dark mode changes chart colors)
    const observer = new MutationObserver(() => {
        updateDashboard();
    });
    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["class"]
    });
});