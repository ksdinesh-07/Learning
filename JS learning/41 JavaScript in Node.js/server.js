const http = require("http");
const {
    get_products,
    add_product
} = require("./modules/product_service");
const PORT = 5000;
const server = http.createServer(
    async function (request, response) {
        console.log(request.method,request.url);
        if (
            request.method === "GET" &&
            request.url === "/products"
        ) {
            try {
                const products=await get_products();
                response.writeHead(200,
                    {"Content-Type":"application/json"});
                response.end(JSON.stringify(products));
            } catch (error) {
                response.writeHead(500,{"Content-Type":"application/json"});
                response.end(
                    JSON.stringify({
                        message:"Failed to read products"}));
            }
            return;
        }

        if (request.method === "POST" && request.url === "/products") {
            let request_body = "";
            request.on("data",function (chunk) {
                    request_body +=chunk.toString();
                }
            );
            request.on("end",async function () {
                    try {
                        const product_data =JSON.parse(request_body);
                        const new_product =await add_product(
                                product_data.product_name,
                                product_data.price,
                                product_data.category
                            );
                        response.writeHead(201,{"Content-Type":"application/json"});
                        response.end(JSON.stringify(new_product));
                    } 
                    catch (error){
                        response.writeHead(400,{"Content-Type":"application/json"});
                        response.end(JSON.stringify({message:"Invalid product data"}));
                    }
                });
            return;
        }
        response.writeHead(404,{"Content-Type":"application/json"});
        response.end(JSON.stringify({message: "Route not found"}));
    }
);


server.listen(PORT,function () {
        console.log(`Server running on http://localhost:${PORT}`);});