

const   not_found_handlers = ( req,res,next) =>{
      
    return res.status(404).json({
       success: false,
       message:`Route not found: ${req.method} with the path ${req.url} was not found.`

   })
}
export default not_found_handlers