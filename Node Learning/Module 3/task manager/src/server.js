import express from 'express';
import dotenv from 'dotenv'
import task_router from './routes/task_routes.js';
import { request_logger } from './middleware/request_logger.js';
import { AppError } from './utils/app_error.js';
import { error_handler } from './middleware/error_handler.js';
import { not_found } from './middleware/not_found.js';

dotenv.config();

const app=express();

const port=process.env.PORT;

app.use(express.json());

//application-level middleware
app.use(request_logger);


app.get('/',(req,res)=>{
    res.send('Task manager is running')
})

app.use('/api/v1/tasks',task_router);
app.use(not_found)
app.use(error_handler);

const test_err=new AppError('Task not found',404)

console.log(test_err.message);
console.log(test_err.status_code);
console.log(test_err.is_operational)

app.listen(port,()=>{
    console.log(`Task Manager server is running on the port ${port}`);
});


