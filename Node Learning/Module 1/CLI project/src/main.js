import path from 'node:path';
import { process_csv } from './process.js';

const input_file=process.argv[2];
const output_file=process.argv[3];

if (!input_file || !output_file) {
    console.log('Usage: node src/main.js <input_csv> <output_txt>');
    process.exit(1);
}

const absolute_input_file=path.resolve(input_file);
const absolute_output_file=path.resolve(output_file);
try {
    const result=await process_csv(absolute_input_file,absolute_output_file);
    console.log('CSV processing completed');
    console.log(`Matched records: ${result.matched_records}` );
    console.log(`Peak memory usage: ${result.peak_memory_mb.toFixed(2)} MB`);
    console.log('Memory limit: 50 MB');

    if (result.peak_memory_mb <= 50) {
        console.log('Status: Within memory limit');
    } 
    else {
        console.log('Status: Memory limit exceeded');
    }
    console.log(`Output file: ${absolute_output_file}`);
} 
catch (error) {
    console.error('CSV processing failed:',error.message);
    process.exit(1);
}