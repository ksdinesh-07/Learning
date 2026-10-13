const web_socket=require("ws");
const wss=new web_socket.Server({port:8080});

wss.on("connection",ws=>{
    console.log(`New client connected, Total no of clients: ${wss.clients.size}`);
    
    //send a message to the newly connected client
    ws.send('Welcome to the Websocket server!');

    //send a message to the client when receiving a message from them

    ws.on('message',(message)=>{
        console.log(`received from client: ${message}`);
        ws.send(`server response: you sent ---> ${message}`)
    })  

    setInterval(() => {
        ws.send(`Totally there are ` + wss.clients.size + `clients connected to the server`)
    }, 5000);

    ws.on('close',()=> console.log(` client disconnected, Total no of clients: ${wss.clients.size}`))
})

console.log('websocket is running on the ws://localhost:8080');