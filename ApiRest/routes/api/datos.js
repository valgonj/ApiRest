const express = require('express');
var router = express.Router();

var thingsCollection = [];

var thingsStructure = {
    "id": "J",
    "nombre": "",
    "apellido": "",
    "correo": "",
    "telefono": 0000-0000
};

router.get('/', (req, res, next)=>{
    res.status(200).json(thingsCollection);
});

module.exports = router;