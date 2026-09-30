import express from 'express';
import { task_data } from '../data/task_data.js';
import { comment_data } from '../data/comment_data.js';

const task_router = express.Router();

// get all data
task_router.get('/', (req, res) => {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 2;

    const start_index = (page - 1) * limit;
    const end_index = start_index + limit;

    const paginated_tasks = task_data.slice(start_index,end_index);

    res.status(200).json({
        success: true,
        page:page,
        limit:limit,
        tasks:paginated_tasks,
    });
});

//get with comments
task_router.get('/:task_id/comments', (req, res) => {
    
    const task_id = Number(req.params.task_id);
    const task = task_data.find((task) => task.id === task_id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: 'Task not found'
        });
    }

    const task_comments = comment_data.filter((comment) => comment.task_id === task_id);

    res.status(200).json({
        success: true,
        task_id: task_id,
        comments: task_comments
    });
});

//add new data
task_router.post('/', (req, res) => {

    const new_task={
        id:task_data.length+1,
        title:req.body.title,
        description:req.body.description,
        completed:false,
        priority:req.body.priority
    };

    task_data.push(new_task);

    res.status(201).json({
        success: true,
        message: 'Task created successfully',
        task:new_task
    });
});

// add new comment
task_router.post('/:task_id/comments', (req, res) => {

    const task_id = Number(req.params.task_id);
    const task = task_data.find((task) => task.id === task_id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: 'Task not found'
        });
    }

    const new_comment = {
        id: comment_data.length + 1,
        task_id: task_id,
        user_name: req.body.user_name,
        comment: req.body.comment
    };

    comment_data.push(new_comment);

    res.status(201).json({
        success: true,
        message: 'Comment added successfully',
        comment: new_comment
    });
});

// replace the data
task_router.put('/:task_id', (req, res) => {

    const task_id=Number(req.params.task_id);
    const task_index=task_data.findIndex((task)=>task.id===task_id);

    if(task_index===-1){
        return res.status(404).json({success:false,message:'Task not found'});
    }

    const updated_task={
        id:task_id,
        title:req.body.title,
        description:req.body.description,
        completed:req.body.completed,
        priority:req.body.priority
    }

    task_data[task_index]=updated_task;

    res.status(200).json({
        success: true,
        message: `Replacing task ${req.params.task_id}`
    });
});

//modify the data
task_router.patch('/:task_id', (req, res) => {
    
    const task_id=Number(req.params.task_id);
    const task_index=task_data.findIndex((task)=>task.id===task_id);

    if(task_index===-1){
        return res.status(404).json({success:false,message:'Task not found'});
    }

    const current_task=task_data[task_index];
    const updated_task={...current_task,...req.body}
    task_data[task_index]=updated_task;

    res.status(200).json({
        success: true,
        message: `Task updated successfully`,
        task:updated_task
    });
});

//delete the record
task_router.delete('/:task_id', (req, res) => {

    const task_id = Number(req.params.task_id);
    const task_index = task_data.findIndex((task) => task.id === task_id);
    if (task_index === -1) {
        return res.status(404).json({
            success: false,
            message: 'Task not found'
        });
    }
    const deleted_task = task_data.splice(task_index, 1);
    res.status(200).json({
        success: true,
        message: 'Task deleted successfully',
        task: deleted_task[0]
    });
});

export default task_router;