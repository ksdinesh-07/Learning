import { createReadStream } from "node:fs";
import { createWriteStream } from "node:fs";
import { createInterface } from "node:readline";

// const input_file = "Module 1/project/data/employess.csv";
// const output_file = "Module 1/project/output/processed_employee.txt";
// const file_stream = createReadStream(input_file);
// const output_stream = createWriteStream(output_file);
// const line_reader = createInterface({
//     input: file_stream
// });

// line_reader.on("line", (line) => {
//     if (line.includes(",IT,")) {
//         output_stream.write(line + "\n");
//     }
// });

// line_reader.on("close", () => {
//     output_stream.end();
//     console.log("CSV processing completed");
// });

// file_stream.on("error", (error) => {
//     console.log("File reading error:", error.message);
// });

const input_file = process.argv[2];
const department = process.argv[3];
const output_file = process.argv[4];
if (!input_file || !department || !output_file) {
    console.log("Usage:");
    console.log("node main.js <input_file> <department> <output_file>");
    process.exit(1);
}

const file_stream = createReadStream(input_file);
const output_stream = createWriteStream(output_file);
const line_reader = createInterface({
    input: file_stream
});

line_reader.on("line", (line) => {
    if (line.includes(`,${department},`)) {
        output_stream.write(line + "\n");
    }
});

line_reader.on("close", () => {
    output_stream.end();
    console.log("CSV processing completed");
});

file_stream.on("error", (error) => {
    console.log("File reading error:", error.message);
});

output_stream.on("error", (error) => {
    console.log("File writing error:", error.message);
});