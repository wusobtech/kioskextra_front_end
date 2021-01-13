class ParsedRequest{
    success;
    message;
    data;
    statusCode;

    constructor(success , message,  data , statusCode)
    {
        this.success = success;
        this.message = message;
        this.data = data;
        this.statusCode = statusCode;
    }

}

export default ParsedRequest;