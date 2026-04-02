exports.createUser = (req, res) => {
    try{
        const data = req.body;
        console.log(data)
        res.status(200).send({ status :true, msg: "data created successfully", data : data});
    } catch (error) {
        res.status(500).send({ status :false, msg: " data create failed", error : error.msg});
    }
}