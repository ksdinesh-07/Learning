
const SettingsManager = (function () {
    let instance = null;

    function createSettings() {
        return {
            theme: "light",
            language: "English"
        };
    }

    return {
        getInstance() {
            if (instance === null) {
                instance = createSettings();
            }

            return instance;
        }
    };
})();

// Both variables reference the same object.
const settingsA = SettingsManager.getInstance();
const settingsB = SettingsManager.getInstance();

const themeSelect = document.getElementById("theme");
const languageSelect = document.getElementById("language");
const showButton = document.getElementById("showSettings");
const output = document.getElementById("output");

themeSelect.addEventListener("change", function () {
    settingsA.theme = themeSelect.value;
    applySettings();
});

languageSelect.addEventListener("change", function () {
    settingsA.language = languageSelect.value;
    applySettings();
});

showButton.addEventListener("click", function () {
    output.textContent =
        "Settings A:\n" + JSON.stringify(settingsA, null, 2) +
        "\n\nSettings B:\n" + JSON.stringify(settingsB, null, 2) +
        "\n\nSame instance: " + (settingsA === settingsB);
});

function applySettings() {
    document.body.classList.toggle(
        "dark-mode",
        settingsA.theme === "dark"
    );

    output.textContent ="Settings updated!\n" +JSON.stringify(settingsA, null, 2);
}

applySettings();
