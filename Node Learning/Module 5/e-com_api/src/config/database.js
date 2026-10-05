import mongoose from 'mongoose';

//if connected
mongoose.connection.on("connected",()=>{
    console.log('MongoDB connection established');
});

//if any error occur
mongoose.connection.on('error',(error)=>{
    console.log("MongoDB connection error:",error.message);
});

//if disconnected
mongoose.connection.on('disconnected',()=>{
    console.log('MongoDB disconnected');
})

// conneting to the mongodb
export async function connect_db(){
 try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');
 }
 catch(err){
    console.log("MongoDB conection is failed :",err.message);
    process.exit(1);
 }   
}