class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        error = [],
        stack,
        success = false,
        data = null,
    ) {
        super(message)
        this.statusCode = statusCode
        this.success = success,
            this.data = data,
            this.error = error
        this.stack = stack
    }
}

export { ApiError }