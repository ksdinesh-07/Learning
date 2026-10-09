export function render_header(active_page) {
    return `
        <header class="header-container">
            <div class="header-content">
                <h1 class="title">Task &amp; Habit Tracker</h1>

                <p class="title-description">
                    Manage your tasks and build lasting habits with analytics and custom rules
                </p>
            </div>

            <button
                class="icon-button"
                id="theme-button"
                type="button"
                aria-label="Switch to dark theme"
            >
                <img
                    id="theme-icon"
                    src="./assets/dark_theme_icon.svg"
                    alt="Switch to dark theme"
                >
            </button>
        </header>

        <nav class="navigation">

            <a href="dashboard.html"
               class="nav-item ${active_page === "dashboard" ? "active" : ""}">
                <img
                    class="theme-aware-icon"
                    src="./assets/dashboard_icon-light.svg"
                    data-light="./assets/dashboard_icon-light.svg"
                    data-dark="./assets/dashboard_icon-dark.svg"
                    alt="Dashboard icon"
                >
                <span>Dashboard</span>
            </a>

            <a href="tasks.html"
               class="nav-item ${active_page === "tasks" ? "active" : ""}">
                <img
                    class="theme-aware-icon"
                    src="./assets/Task_icon-light.svg"
                    data-light="./assets/Task_icon-light.svg"
                    data-dark="./assets/task_icon-dark.svg"
                    alt="Tasks icon"
                >
                <span>Tasks</span>
            </a>

            <a href="habits.html"
               class="nav-item ${active_page === "habits" ? "active" : ""}">
                <img
                    class="theme-aware-icon"
                    src="./assets/Habits_icon-light.svg"
                    data-light="./assets/habbit_icon-light.svg"
                    data-dark="./assets/habit_icon-dark.svg"
                    alt="Habits icon"
                >
                <span>Habits</span>
            </a>

            <a href="rules.html"
               class="nav-item ${active_page === "rules" ? "active" : ""}">
                <img
                    class="theme-aware-icon"
                    src="./assets/Rules_icon-light.svg"
                    data-light="./assets/rule_icon-light.svg"
                    data-dark="./assets/rule_icon-dark.svg"
                    alt="Rules icon"
                >
                <span>Rules</span>
            </a>

        </nav>
    `;
}


function update_theme_icons(is_dark) {
    const theme_aware_icons =document.querySelectorAll(".theme-aware-icon");
    theme_aware_icons.forEach((icon) => {
        if (is_dark) {
            icon.src = icon.dataset.dark;
        } else {
            icon.src = icon.dataset.light;
        }

    });
}


export function setup_theme() {
    const theme_button = document.getElementById("theme-button");
    const theme_icon = document.getElementById("theme-icon");
    const saved_theme = localStorage.getItem("theme");
    const is_dark = saved_theme === "dark";
    if (is_dark) {
        document.body.classList.add("dark-theme");
        theme_icon.src = "./assets/light_theme_icon.svg";
        theme_icon.alt = "Switch to light theme";
        theme_button.setAttribute(
            "aria-label",
            "Switch to light theme"
        );
    }

    update_theme_icons(is_dark);


    theme_button.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        const dark_mode_enabled =document.body.classList.contains("dark-theme");

        if (dark_mode_enabled) {
            localStorage.setItem("theme", "dark");
            theme_icon.src = "./assets/light_theme_icon.svg";
            theme_icon.alt = "Switch to light theme";
            theme_button.setAttribute(
                "aria-label",
                "Switch to light theme"
            );

        } else {
            localStorage.setItem("theme", "light");
            theme_icon.src = "./assets/dark_theme_icon.svg";
            theme_icon.alt = "Switch to dark theme";
            theme_button.setAttribute(
                "aria-label",
                "Switch to dark theme"
            );
        }

        update_theme_icons(dark_mode_enabled);
    });
}