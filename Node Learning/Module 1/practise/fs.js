// cjs import
// const fs=require('fs');
//ES Module
import fs from "node:fs";

// console.log(fs);

//syncrynous function
//check the folder is already present?
if (!fs.existsSync('./docs')){
    //mkdir needs time to execute
    //async function
    fs.mkdir('./docs',(err)=>{
        if(err){
            console.log(err);
        }
        else
            console.log('Folder created')
    })
}

//write the content in the file
// if alreafy file present overwrite it not flder presnet just create it
//async function
fs.writeFile('./docs/file.txt',"Hello node",(err)=>{
    if (err){
        console.log(err);
    }else{
        console.log('File Written');
    }
})

//check the file present
if(fs.existsSync('./docs/file.txt')){
    fs.readFile('./docs/file.txt',(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            //reads the bufeer data
            console.log(data.toString());
        }
    })
}


//delete the file
if(fs.existsSync('./docs/file.txt')){
    fs.unlink('./docs/file.txt',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('file deleted');
        }
    });
}

//delete dir
if(fs.existsSync('./docs')){
    fs.rmdir('./docs',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('Folder Deleted');
        }
    })
}