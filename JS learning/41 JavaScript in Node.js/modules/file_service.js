const fs = require("fs/promises");
async function read_file(file_path) {
    const file_data = await fs.readFile(
        file_path,
        "utf-8"
    );
    return JSON.parse(file_data);
}

async function write_file(file_path, data) {
    await fs.writeFile(
        file_path,
        JSON.stringify(data, null, 4)
    );
}
module.exports = {
    read_file,
    write_file
};