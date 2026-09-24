const express = require("express");
const crypto = require("crypto");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Simple session simulation
const session_data = {
    user_name: "Dinesh",
    csrf_token: crypto.randomBytes(32).toString("hex")
};

// Serve static files

app.use(express.static(path.join(__dirname, "public")));

// Home
app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );
});


// XSS PoC page
app.get("/xss", (req, res) => {

    res.sendFile(
        path.join(__dirname, "views", "xss.html")
    );
});


// CSRF PoC page
app.get("/csrf", (req, res) => {
    res.sendFile(
        path.join(__dirname, "views", "csrf.html")
    );
});

// CSP PoC page default
// app.get("/csp", (req, res) => {
//     res.sendFile(
//         path.join(__dirname, "views", "csp.html")
//     );

// });

//protected
app.get("/csp", (req, res) => {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; script-src 'self'"
    );
    res.sendFile(
        path.join(__dirname, "views", "csp.html")
    );
});


// Get CSRF token
app.get("/api/csrf-token", (req, res) => {
    res.json({
        csrf_token: session_data.csrf_token
    });
});


// Vulnerable transfer endpoint
app.post("/api/vulnerable-transfer", (req, res) => {
    const { amount, account_number } = req.body;
    console.log("Vulnerable transfer received");
    res.json({
        success: true,
        message: `Transfer of ₹${amount} to ${account_number} accepted`
    });
});


// Protected transfer endpoint
app.post("/api/secure-transfer", (req, res) => {
    const { amount, account_number, csrf_token } = req.body;
    if (!csrf_token) {
        return res.status(403).json({
            success: false,
            message: "CSRF token missing"
        });
    }

    if (csrf_token !== session_data.csrf_token) {
        return res.status(403).json({
            success: false,
            message: "Invalid CSRF token"
        });
    }
    console.log("Secure transfer accepted");
    res.json({
        success: true,
        message: `Transfer of ₹${amount} to ${account_number} accepted`
    });

});


app.listen(PORT, () => {
    console.log(
        `Security PoC running at http://localhost:${PORT}`
    );
});