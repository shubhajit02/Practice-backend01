

const asyncHandler = (fn) => (req, res, next) => {
    try {
        return fn(req, res, next)
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
};

export {asyncHandler}