
import express from "express";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const http_server = createServer(app);

const current_file = fileURLToPath(import.meta.url);
const current_directory = path.dirname(current_file);
const public_directory = path.join(current_directory, "public");

app.use(express.static(public_directory));

http_server.listen(5001, () => {
    console.log("Server running at http://localhost:5001");
});
