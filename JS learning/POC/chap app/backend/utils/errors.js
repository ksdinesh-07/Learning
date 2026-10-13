export class app_error extends Error{
    constructor(message,status_code=500){
        super(message);
        this.name="app_error";
        this.status_code=status_code;
    }
}