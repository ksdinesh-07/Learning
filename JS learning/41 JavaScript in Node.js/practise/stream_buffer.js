import fs, { ReadStream } from "node:fs";


const read_stream=fs.createReadStream('./stream_buffer.txt',{encoding: 'utf-8'});
const write_stream=fs.createWriteStream('./docs/copyhugefile.txt');

// ReadStream.pipe(write_stream);

read_stream.on('data',(chunk)=>{
    console.log('\nNew Chunk\n')
    console.log(chunk);
    write_stream.write('\n New Buffer\n');
    write_stream.write(chunk);

})

read_stream.on("end",()=>{
    console.log("Reading Completed");
    write_stream.end();
})

read_stream.on("error", (error) => {
    console.log("Read error:", error.message);
});

write_stream.on("error", (error) => {
    console.log("Write error:", error.message);
});

