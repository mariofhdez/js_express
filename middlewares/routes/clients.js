"use strict"

var express = require('express');
var router = express.Router();

//middleware a nivel de router

router.use(function(req, res, next){
    console.log('middleware de router clients');
    next();
})

/* Ejemplo con doble respuesta, esto lanza una error en la consola donde indica que no puede enviar dos veces los headers
router.use(function(req, res, next){
    console.log('middleware de router clients');
    res.send('Respuesta');  //Aquí se está dando respuesta a la petición
    next();  //Aquí se está trasladando la responsabilidad de dar respuesta al segundo proceso (doble respuesta)
})
*/

router.get('/', function(req, res, next){
    res.send('Respuesta a clients')
});

router.get('/:id', function(req,res,next){
    res.send('recibido parámetro '+ req.params.id);
});

router.post('/', function(req, res, next){
    console.log('req.body', req.body);
    res.json({recibido: req.body.num});
});

router.get('/:id', function(req,res,next){
    res.send('recibido parámetro '+ req.params.id);
    console.log('req.query', req.query);
});

module.exports = router;