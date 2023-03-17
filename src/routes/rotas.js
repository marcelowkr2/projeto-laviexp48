const express = require('express');
const pacientesController = require('../controllers/pacientes');
const validate = require ('../middlewares/auth');
const router = express.Router();


//PACIENTES
router.get('/pacientes', pacientesController.listar);
router.get('/pacientes/:id', pacientesController.listarID);
router.post('/pacientes/cadastrar', validate, pacientesController.cadastrar);
router.put('/pacientes/:id', validate, pacientesController.atualizar);
router.delete('/pacientes/:id',validate, pacientesController.deletar);


module.exports = router;
