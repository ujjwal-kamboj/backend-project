const userModel = require("../Model/usermodel");    
const {validname, validemail, validpassword} = require("../validation/authvalidation");
const bcrypt = require("bcrypt");


exports.createUser = async (req, res) => {
    try{
        const data = req.body;
        const {name, email, password} = data;

    if (!name) {
        return res.status(400).send({ status: false, msg: "name is required" });
    }
    if (!validname(name)) {
        return res.status(400).send({ status: false, msg: "name is not valid" });
    }


    if (!email) {
        return res.status(400).send({ status: false, msg: "email is required" });
    }
    if (!validemail(email)) {
        return res.status(400).send({ status: false, msg: "email is not valid" });
    }


    if (!password) {
        return res.status(400).send({ status: false, msg: "password is required" });
    }
    if (!validpassword(password)) {
        return res.status(400).send({ status: false, msg: "password is not valid" });
    }
    const DB = await userModel.create(data);

    return res.status(201).send({ status: true,
         msg: "user created successfully",
          data: DB
        });
    }catch (err) {
            return res.status(500).send({
                 status: false,
                  msg: "user creation failed", 
                  error: err.message });
        }   
    }
    //     console.log(data)
    //     res.status(200).send({ status :true, msg: "data created successfully", data : data});
    // } catch (error) {
    //     res.status(500).send({ status :false, msg: " data create failed", error : error.msg});
    // }


