import fs from "node:fs";
import { pipeline } from "node:stream/promises";
import { createCsvFilter } from "./csvFilter.js";

export async function processFile(inputFile, outputFile, filterValue) {

    //it will get updated in transform stream in CSVFilter
    const statistics = {
        totalRecords: 0,
        matchedRecords: 0,
    };

    let peakMemoryMB = 0;//to measure RSS(max one)

    //to read chunk by chunk
    const readStream = fs.createReadStream(inputFile, {
        encoding: "utf8",
        highWaterMark: 4 * 1024,
    });

    const writeStream = fs.createWriteStream(outputFile, {
        highWaterMark: 4 * 1024,
    });
    
    const filterStream = createCsvFilter(filterValue, statistics); // custom transform stream

    const memoryMonitor = setInterval(() => {
        const memoryUsage = process.memoryUsage(); // to get memory statistics
        const currentMemoryMB = memoryUsage.rss / 1024 / 1024;
        peakMemoryMB = Math.max(peakMemoryMB, currentMemoryMB);
    }, 100);

    try {
        await pipeline(readStream, filterStream, writeStream);

    } finally {
        clearInterval(memoryMonitor);
        const finalMemoryMB = process.memoryUsage().rss / 1024 / 1024;
        peakMemoryMB = Math.max(peakMemoryMB, finalMemoryMB);
    }

    return {
        ...statistics,
        peakMemoryMB: peakMemoryMB.toFixed(2),
    };
}