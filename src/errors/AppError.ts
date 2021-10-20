export class AppError{
    message:string;
    path:string | null;
    statusCode:number;
    constructor(message:string,statusCode = 400,path = null){
        this.message    = message
        this.statusCode = statusCode
        this.path = path
    }
}