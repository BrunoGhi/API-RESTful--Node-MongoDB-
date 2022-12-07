const { samsungMobileStore } = require("../models/samsungMobileStore");
const {validationResult}=require("express-validator");
const axios = require("axios")

const getUser =  async (req,res) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, { timeout : 10000});
        res.status(200).json({data: response.data});
       
    }
     catch (error) {
        res.status(500).json({msg:"Ocurrio un error"})
    }
}

const readAll = async (req,res) => {
    const item = await samsungMobileStore.find();
    res.status(200).json({item})
}

const read = async (req,res) => {
    const item = await samsungMobileStore.findById(req.params.id);
    res.status(200).json({item})
}

const create = async (req,res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            const item = new samsungMobileStore(req.body)
            item.save()
            res.status(201).json({item}) 
        } else {
            res.status(501).json({err})
        }
        
    } catch (error) {
        res.status(501).json({error})
    }
}

const edit = async (req,res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            await samsungMobileStore.findByIdAndUpdate(req.params.id,req.body);
            res.status(201).json({msg:" Se actualizo correctamente"})
           
        } else {
            res.status(501).json({err})
        }
    } catch (error) {
        res.status(501).json({error})
    }
}

const remove = async (req,res) => {
    const item = await samsungMobileStore.findByIdAndDelete(req.params.id)
    res.status(204).json({msg: "el siguiente item fue eliminado: ", item})
}


module.exports = {create,read,edit,remove,readAll,getUser}