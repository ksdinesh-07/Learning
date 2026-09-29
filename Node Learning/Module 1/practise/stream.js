//importing the filesystem module
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";

const file_stream=createReadStream("./Module 1/practise/attendance.txt");

file_stream.on("data",(chunk)=>{
    console.log("New Chunk received");
    const chunk_text = chunk.toString();
    const lines = chunk_text.split("\n");
    for (let line of lines) {
        console.log(line);
    }
})

file_stream.on("end",()=>{
    console.log("File reading completed");
})

file_stream.on("error",(err)=>{
    console.log("error",err.message);
})

let present_count = 0;
let late_count = 0;
let absent_count = 0;

//readline 
const line_reader = createInterface({
    input: file_stream
});

line_reader.on("line", (line) => {
    if (line.includes("Present")) {
        present_count++;
    }
    if (line.includes("Late")) {
        late_count++;
    }
    if (line.includes("Absent")) {
        absent_count++;
    }
});

file_stream.on("error", (err) => {
    console.log("error", err.message);
});