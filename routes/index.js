var express = require('express');
var router = express.Router();

const {create,read,edit,remove,readAll, getUser} = require("../controllers/indexController")
const {verifyID} = require("../middlewares/verifyID")
const {check} = require("express-validator")

const validator = [
    check("family").not().isEmpty().withMessage("El campo family es requerido").isLength({min:3,max:12}).withMessage("Debe contener entre 3 y 12 letras"),
    check("model").not().isEmpty().withMessage("El campo model es requerido").isLength({min:2,max:12}).withMessage("Debe contener entre 3 y 12 letras"),
    check("quantity").not().isEmpty().withMessage("El campo quantity es requerido")
]

// ruta get de api externa
router.get("/getuser/:id", getUser);

//rutas del CRUD de mi db
router.get('/readAll', readAll);

router.get('/read/:id', verifyID, read );

router.post("/create", validator, create);

router.post("/update/:id", verifyID, validator, edit);

router.delete("/delete/:id", verifyID, remove);

module.exports = router;
