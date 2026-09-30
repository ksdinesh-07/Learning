import fs from 'node:fs';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import csv from 'csv-parser';

export async function process_csv(input_file, output_file) {
    const read_stream = fs.createReadStream(input_file);
    const write_stream = fs.createWriteStream(output_file);
    let matched_records = 0;
    let peak_memory_mb = 0;
    
    const memory_monitor =setInterval(() => {
        const memory_usage=process.memoryUsage();
        const current_memory_mb=memory_usage.rss / (1024 * 1024);
        if (current_memory_mb > peak_memory_mb) {
            peak_memory_mb = current_memory_mb;
        }
    }, 100);

    const filter_stream = new Transform({
        objectMode: true,
        transform(row, encoding, callback) {
            if (row.status === 'completed') {
                const output_data =`${row.task_id},${row.user_name},${row.email},${row.department},${row.status},${row.priority},${row.hours_spent},${row.description}\n`;
                this.push(output_data);
                matched_records++;
            }
            callback();
        }
    });
    try{
        await pipeline(read_stream,csv(),filter_stream,write_stream);
    } 
    finally{
        clearInterval(memory_monitor);
    }
    return {matched_records,peak_memory_mb};
}

//node src/main.js data/massive_tasks_10000.csv output/filtered_tasks.txt