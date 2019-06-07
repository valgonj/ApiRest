const express = require('express');
const router = express.Router();

const datosApi = require('./datos');

/*router.get('/', (req, res, next)=>{
    res.status(200).json({"Tengo": "Hambre"})
});*/

router.use('/datos', datosApi);

module.exports = router;