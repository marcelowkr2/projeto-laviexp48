const express = require('express');
const pacientesController = require('../controllers/pacientes');
const psicoController = require("../controllers/psicologos");
const atendimentosController = require('../controllers/atendimentos');
const validadePsicologos = require ("../validators/psicologos/cadastrar");
const validatePacientes = require ("../validators/pacientes/cadastrar");
const atendimentoValidation = require ("../validators/atendimentos/cadastrar");
const authLoginValidation = require ("../validators/auth/login");
const authController = require ("../controllers/authController")

const router = express.Router();


//PACIENTES
router.get('/pacientes', pacientesController.listar);
router.get('/pacientes/:id', pacientesController.listarID);
router.post('/pacientes', validatePacientes, pacientesController.cadastrar);
router.put('/pacientes/:id', validatePacientes, pacientesController.atualizar);
router.delete('/pacientes/:id',validatePacientes, pacientesController.deletar);

//PSICOLOGOS
router.get("/psicologo", psicoController.listar);
router.get("/psicologos/:id", psicoController.listarID);
router.post("/psicologos",validadePsicologos, psicoController.cadastrar);
router.put("/psicologos/:id",validadePsicologos , psicoController.atualizar);
router.delete("/psicologos/:id", psicoController.deletar)

//ATENDIMENTOS
router.get('/atendimentos', atendimentosController.listar);
router.get('/atendimentos/:id', atendimentosController.listarID);
router.post('/atendimentos',atendimentoValidation, atendimentosController.cadastrar);

router.post('/login',authLoginValidation, authController.login);



module.exports = router;
