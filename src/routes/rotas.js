const express = require('express');
const pacientesController = require('../controllers/pacientes');
const validatePacientes = require ('../middlewares/auth');

const psicologosController = require("../controllers/psicologos");
const atendimentosController = require('../controllers/atendimentos');
const authController = require ("../controllers/authController");

const psicologosValidation = require ("../validators/psicologos.js");
const atendimentoValidation = require ("../validators/atendimentos.js");
const authLoginValidation = require ("../validators/auth/login");
const auth = require ("../middlewares/auth");

const router = express.Router();


//PACIENTES
router.get('/pacientes', pacientesController.listar);
router.get('/pacientes/:id', pacientesController.listarID);
router.post('/pacientes', validatePacientes, pacientesController.cadastrar);
router.put('/pacientes/:id', validatePacientes, pacientesController.atualizar);
router.delete('/pacientes/:id',validatePacientes, pacientesController.deletar);



//PSICOLOGOS
router.get("/psicologos", psicologosController.listar);
router.get("/psicologos/:id", psicologosController.listarID);
router.post("/psicologos",psicologosValidation, psicologosController.cadastrar);
router.put("/psicologos/:id",psicologosValidation , psicologosController.atualizar);
router.delete("/psicologos/:id", psicologosController.deletar)

//ATENDIMENTOS
router.get('/atendimentos', atendimentosController.listAtendimento);
router.get('/atendimentos/:id', atendimentosController.listOne);
router.post('/atendimentos',atendimentoValidation, auth, atendimentosController.createAtendimento);

//DASHBOARD
router.get('/dashboard/numero-paciente', pacientesController.countPacientes);
router.get('/dashboard/numero-psicologo', psicologosController.countPsicologos);
router.get('/dashboard/numero-atendimentos', atendimentosController.countAtendimentos);
router.get('/dashboard/media-atendimentos', atendimentosController.averageAtendimentos);

router.post("/login", authLoginValidation, authController.login);

module.exports = router;
