import fs from 'node:fs';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import csv from 'csv-parser';

export async function process_csv(input_file, output_file) {
    const read_stream = fs.createReadStream(input_file,{
        highWaterMark:16 * 1024
    });
    const write_stream = fs.createWriteStream(output_file,{
        highWaterMark: 16 * 1024
    });
    
    // const read_stream = fs.createReadStream(input_file);
    // const write_stream = fs.createWriteStream(output_file);

    let matched_records = 0;
    let peak_memory_mb = 0;
    let chunk_count=0;
    let total_bytes=0;

    read_stream.on('data',(chunk)=>{
        chunk_count++;
        total_bytes+=chunk.length;
        console.log(`Chunk ${chunk_count}: ${chunk.length} bytes`);
    })

    read_stream.on('end',()=>{
        console.log(`Total Chunks: ${chunk_count}`);
        console.log(`Total bytes: ${total_bytes}`)
    })
    
    const memory_monitor =setInterval(() => {
        const memory_usage=process.memoryUsage();
        const current_memory_mb=memory_usage.rss / (1024 * 1024);
        if (current_memory_mb > peak_memory_mb) {
            peak_memory_mb = current_memory_mb;
        }
    }, 100);

    function escape_csv_value(value) {
        return `"${String(value).replace(/"/g, '""')}"`;
    }

    const filter_stream = new Transform({
        objectMode: true,

        transform(row, _, callback) {
            if (row.payment_status === 'PARTIALLY_REFUNDED') {
                const output_data = [
                    row.order_id,
                    row.customer_id,
                    row.customer_name,
                    row.customer_segment,
                    row.email,
                    row.phone,
                    row.billing_address,
                    row.shipping_address,
                    row.city,
                    row.state,
                    row.region,
                    row.order_date,
                    row.channel,
                    row.currency,
                    row.product_name,
                    row.quantity,
                    row.subtotal,
                    row.discount,
                    row.tax,
                    row.shipping_fee,
                    row.total,
                    row.payment_status,
                    row.fulfillment_status,
                    row.priority,
                    row.coupon_code,
                    row.warehouse,
                    row.metadata
                ].map(escape_csv_value).join(',') + '\n';
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