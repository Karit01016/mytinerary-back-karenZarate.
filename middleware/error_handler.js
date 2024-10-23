const   error_handlers = (error, req,res,next) =>{
    console.log(error);
    
    return res.status(500).json({
        success:false,
        response: error,
        message: "Error"

   })
}
export default error_handlers