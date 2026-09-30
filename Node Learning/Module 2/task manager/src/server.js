import express from 'express';
import dotenv from 'dotenv'
import task_router from './routes/task_routes.js';

dotenv.config();

const app=express();
const port=process.env.PORT;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Task manager is running')
})

app.use('/api/v1/tasks',task_router);



app.listen(port,()=>{
    console.log(`Task Manager server is running on the port ${port}`);
});


