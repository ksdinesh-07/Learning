//custom middleware
export function request_logger(req,res,next){
    console.log("Custom middleware");
    console.log(`${req.method} ${req.originalUrl}`);
    next();
}

export function check_task_request(req,res,next){
    console.log('Custom task middleware');

    res.locals.task_info={
        request_method:req.method,
        request_url:req.originalUrl,
        received_at:new Date().toISOString()
    };
    next();
}
