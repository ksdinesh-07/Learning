const xss_input = document.getElementById("xss_input");
const xss_result = document.getElementById("xss_result");

const xss_attack_button = document.getElementById("xss_attack_button");
const xss_protected_button = document.getElementById("xss_protected_button");

xss_attack_button.addEventListener("click", () => {
    const user_input = xss_input.value;
    xss_result.innerHTML = user_input;
});

xss_protected_button.addEventListener("click", () => {
    const user_input = xss_input.value;
    xss_result.textContent = user_input;
});

//<img src="invalid-image" onerror="alert('XSS Attack')">

//sanitization
const sanitize_input = document.getElementById("sanitize_input");
const sanitize_result = document.getElementById("sanitize_result");
const sanitize_attack_button = document.getElementById("sanitize_attack_button");
const sanitize_protected_button = document.getElementById("sanitize_protected_button");
sanitize_attack_button.addEventListener("click", () => {
    const user_input = sanitize_input.value;
    sanitize_result.innerHTML = user_input;

});

sanitize_protected_button.addEventListener("click", () => {
    const user_input = sanitize_input.value;
sanitize_protected_button.addEventListener("click", () => {
    const user_input = sanitize_input.value;
    sanitize_protected_button.addEventListener("click", () => {
    const user_input = sanitize_input.value;
    const temporary_container = document.createElement("div");
    temporary_container.innerHTML = user_input;

    temporary_container.querySelectorAll("script").forEach(element => element.remove());
    temporary_container.querySelectorAll("*").forEach(element => {
            [...element.attributes].forEach(attribute => {
                if (attribute.name.toLowerCase().startsWith("on")) {
                    element.removeAttribute(attribute.name);
                }
            });
        });
    const sanitized_input = temporary_container.innerHTML;
    sanitize_result.innerHTML = `<strong>SANITIZED INPUT</strong>

        <hr>

        <p>
            Dangerous content removed:
            <strong>${user_input !== sanitized_input}</strong>
        </p>

        <p>Safe HTML after sanitization:</p>

        <div>
            ${sanitized_input}
        </div>
    `;

});

});});

/* <h2>Hello Dinesh</h2>
<img src="invalid-image" onerror="alert('XSS Attack')">
<p>This is safe content</p> */


const csrf_user = document.getElementById("csrf_user");
const csrf_balance = document.getElementById("csrf_balance");
const csrf_result = document.getElementById("csrf_result");
const csrf_attack_button = document.getElementById("csrf_attack_button");
const csrf_protected_button = document.getElementById("csrf_protected_button");
const csrf_token = "SECURE_TOKEN_12345";
csrf_attack_button.addEventListener("click", () => {
    let balance = Number(csrf_balance.textContent);
    const transfer_amount = 5000;
    balance -= transfer_amount;
    csrf_balance.textContent = balance;
    csrf_result.innerHTML = `
        <strong>CSRF ATTACK SUCCESSFUL ❌</strong>

        <p>
            The attacker successfully triggered a money transfer.
        </p>

        <p>
            Amount transferred:
            ₹${transfer_amount}
        </p>

        <p>
            CSRF token was not checked.
        </p>
    `;

});

csrf_protected_button.addEventListener("click", () => {

    const submitted_token = prompt(
        "Enter CSRF token:"
    );

    if (submitted_token !== csrf_token) {

        csrf_result.innerHTML = `
            <strong>REQUEST BLOCKED ✅</strong>

            <p>
                Invalid CSRF token.
            </p>
        `;

        return;
    }

    csrf_result.innerHTML = `
        <strong>REQUEST ACCEPTED ✅</strong>

        <p>
            Valid CSRF token.
        </p>

        <p>
            The request passed CSRF protection.
        </p>
    `;

});

//csp simulation
const csp_result = document.getElementById("csp_result");
const csp_without_button = document.getElementById("csp_without_button");
const csp_with_button = document.getElementById("csp_with_button");
csp_without_button.addEventListener("click", () => {
    const script = document.createElement("script");
    script.textContent = `alert("Unauthorized script executed!");`;
    document.body.appendChild(script);
    csp_result.innerHTML = `
        <strong>WITHOUT CSP ❌</strong>

        <p>
            The browser allowed the dynamically created script to execute.
        </p>
    `;

});

csp_with_button.addEventListener("click", () => {
    const meta = document.createElement("meta");
    meta.httpEquiv = "Content-Security-Policy";
    meta.content = "script-src 'self'";
    document.head.appendChild(meta);
    csp_result.innerHTML = `<strong>CSP ENABLED ✅</strong>

        <p>
            CSP policy has been added.
        </p>

        <p>
            Check the browser Console for CSP violations.
        </p>
    `;

});