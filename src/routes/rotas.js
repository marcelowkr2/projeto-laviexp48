const express = require('express');
const router = express.Router();

//PACIENTES
router.get('/pacientes', (req, res) => {
    res.send('Listar Pacientes')
});
router.get('/pacientes/:id', (req, res) => {
    res.send('Listar Pacientes pelo ID')
});
router.post('/pacientes', (req, res) => {
    res.send('Incluir Pacientes')
});
router.put('/pacientes/:id', (req, res) => {
    res.send('Editar Pacientes ${req.params.id}');
});
router.delete('/pacientes/:id', (req, res) => {
    res.send('Deletar Pacientes ${req.params.id}');
});

//PSICOLOGOS
router.get('/psicologos', (req, res) => {
    res.send('Listar Psicologos')
});
router.get('/psicologos/:id', (req, res) => {
    res.send('Listar Psicologos pelo ID')
});
router.post('/psicologos', (req, res) => {
    res.send('Incluir Psicologos ${req.params.id}');
});
router.put('/psicologos/:id', (req, res) => {
    res.send('Editar Psicologos ${req.params.id}');
});
router.delete('/psicologos/:id', (req, res) => {
    res.send('Deletar Psicologos ${req.params.id}');
});

//LOGIN
router.post('/login', (req, res) => {
    res.send('Login')
});


//ATENDIMENTOS
router.get('/atendimentos', (req, res) => {
    res.send('Listar Atendimentos')
});
router.get('/atendimentos/:id', (req, res) => {
    res.send('Listar Atendimentos pelo ID')
});
router.post('/atendimentos', (req, res) => {
    res.send('Incluir Atendimentos')
});


//DASHBOARD
router.get('/dashboard/numero-atendimentos', (req, res) => {
    res.send('Dashboard')
});
router.get('/dashboard/numero-pacientes', (req, res) => {
    res.send('Dashboard')
});
router.get('/dashboard/numero-psicologos', (req, res) => {
    res.send('Dashboard')
});
router.get('/dashboard/media-atendimentos', (req, res) => {
    res.send('Dashboard')
});



module.exports = router;
