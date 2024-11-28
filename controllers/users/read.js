import User from "../../models/User.js";

const allUsers = async (req, res, next) => {
    try {
        let { name, role } = req.query;
        console.log(name);
        console.log(role);
        let query = {}
        if (name) {
            query.name = { $regex: "^" + name, $options: "i" };
    }
       let all = await User.find(query);

        return res.status(200).json({ response: all 

        })    
    
    } catch (error) {
        next(error);
}
}

let oneUser =async(req,res,next) => {

    try {
        
        let roleQuery = req.query.role;
        let allRoles = await User.find ({ role:roleQuery })
    return res.status(200).json({ response: allRoles })
    } catch (error) {
        next(error);
        
    }
}

let userById = async (req, res, next) => {
    try {
        let roleQuery = req.params.id;
        let usersById = await User.findById(roleQuery);
        return res.status(200).json({ 
            response: usersById

         });
    } catch (error) {
        next(error);
    }
}


export { allUsers, oneUser, userById }