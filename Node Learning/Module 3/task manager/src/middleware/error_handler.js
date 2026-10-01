export function error_handler(err, req, res, next) {
    const status_code = err.status_code || 500;

    res.status(status_code).json({
        success: false,
        message: err.message || 'Internal server error'
    });
}