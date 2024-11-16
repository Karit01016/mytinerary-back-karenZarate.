const error_405 = (error,req, res, next)=>{
    if (error.statusCode) {
        return res.status(error.statusCode).json({
            success: false,
            statusCode: error.statusCode,
            msg: error.type
        })
    }else{
        if (error.errors) {
            let errorArray = Object.keys(error.errors).join(", ")
            return res.status(405).json({
                success: false,
                statusCode: "Bad Request",
                msg: `Error ${errorArray} is required `
            })
        }
        next(error)
    }

}
export default error_405
