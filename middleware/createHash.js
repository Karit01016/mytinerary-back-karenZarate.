import bcryptjs from "bcryptjs";

export default async (req, res, next) => {
  let password = req.body.password;
  let hashPasword = await bcryptjs.hashSync(
    password, 5);
    console.log(req.body.password)

  req.body.password = hashPasword;
  console.log("password hasheado ",req.body.hashPasword)
  next();
}


