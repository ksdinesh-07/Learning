export class AppError extends Error {
    constructor(message, status_code) {
        super(message);
        this.status_code = status_code;
        this.is_operational = true;
    }
}