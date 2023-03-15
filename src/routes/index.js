const express = require('express');
const routes = express.Router();
const pacientesController = require("../src/controllers/pacientes");
const psicologoController = require("../src/controllers/psicologos")
const atendimentosController = require("../src/controllers/atendimentos");
const dashboardController = require("../src/controllers/dashboard");
const authValidator = require("../src/validators/auth/login");
const pacientesValidators = require("../src/validators/pacientes");
const psicologosValidators = require("../src/validators/psicologos");
const atendimentosValidators = require("../src/validators/atendimentos");


routes.get("/pacientes", pacientesController.listar);
routes.get("/pacientes/:id", pacientesValidators.listarID, pacientesController.listarID);
routes.post("/pacientes", pacientesValidators.cadastrar ,pacientesController.cadastrar);
routes.put("/pacientes/:id", pacientesValidators.atualizar, pacientesController.atualizar);
routes.delete("/pacientes/:id", pacientesValidators.deletar, pacientesController.deletar);


routes.get("/psicologos", psicologoController.listar);
routes.get("/psicologos/:id", psicologosValidators.listarID, psicologoController.listarID);
routes.post("/psicologos", psicologosValidators.cadastrar,psicologoController.cadastrar);
routes.put("/psicologos/:id",psicologosValidators.atualizar, psicologoController.atualizar);
routes.delete("/psicologos/:id", psicologosValidators.deletar, psicologoController.deletar);


routes.post("/login", authValidator, psicologoController.login);


routes.get("/atendimentos", atendimentosController.listar);
routes.get("/atendimentos/:id", atendimentosValidators.listarID, atendimentosController.listarID);
routes.post("/atendimentos",atendimentosValidators.cadastrar,  atendimentosController.cadastrar);


routes.get("/dashboard/numero-atendimentos", dashboardController.numAtendimentos);
routes.get("/dashboard/numero-pacientes", dashboardController.numPacientes);
routes.get("/dashboard/numero-psicologos", dashboardController.numPsicologos);
routes.get("/dashboard/media-atendimentos", dashboardController.mediaAtendimentos);

module.exports = routes;
