import { task_schema } from '../schemas/task_schema.js';

export function validate_task(req, res, next) {
    const validation_result = task_schema.safeParse(req.body);
    if (!validation_result.success) {
        const error_messages = validation_result.error.issues.map(issue => ({
            field: issue.path[0],
            message: issue.message
        }));
        return res.status(400).json({
            success: false,
            errors: error_messages
        });
    }

    next();
}