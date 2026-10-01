import { AppError } from '../utils/app_error.js';

export function not_found(req, res, next) {
    next(new AppError(`Route not found: ${req.method} ${req.originalUrl}`,404));
}