import http from 'http';
import fs from "node:fs"

const Server=http.createServer((req,res)=>{
    console.log(req.url)
    // console.log(req.method)
    // console.log("req made!")

    res.setHeader('content-Type','text/html')
    // res.write('hello guys')
    // res.write("<h1>hello</h1>")

    let path='';

    if(req.url=='/'){
        path='./index.html'
    }

    else if(req.url == '/join'){
        path='./join.html'
    }

    else if(req.url=='/about'){
        path='./about.html'
    }

    else if(req.url=='/home'){
        res.statusCode=301;
        res.setHeader('Location','/about');
        res.end();
    }


    else{
        res.write("<h1>Page not found</h1>")
        res.statusCode=404;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.end();
        }
        else{
            // res.write(data);
            res.end(data);
        }
    })
})

Server.listen(3000,'localhost',()=>{
    console.log("Server is listening!");
})

