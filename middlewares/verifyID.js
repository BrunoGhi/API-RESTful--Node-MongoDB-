const {samsungMobileStore}=require("../models/samsungMobileStore")

const verifyID= async (req,res,next) => {
    try {
        const item = await samsungMobileStore.findById(req.params.id)
        if (item !== null) {
        next()
        } else {
        res.status(500).json({msg: "el id es invalido"})
        } 
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports={verifyID}