const connection = require('../Estruturado/database/connection')
const express = require('express')
const router = express.Router()
const AWSController = require('../Estruturado/Controller/AWSController')
const ImageControllerNova = require('../Estruturado/Controller/ImagemController')
const UserControllerNova = require('../Estruturado/Controller/UsuarioController')

const multer = require('multer');
const upload = multer();

router.post('/estruturado/novaImagem', ImageControllerNova.novaImagem)
router.get('/estruturado/imagens', ImageControllerNova.listarImagem)
router.get('/estruturado/imagem/:id', ImageControllerNova.buscarImagem)
router.put('/estruturado/editarImagem/:id', ImageControllerNova.atualizarImagem)
router.delete('/estruturado/apagarImagem/:id', ImageControllerNova.removerImagem);

router.post('/estruturado/novoUsuario', UserControllerNova.novaUsuario)
router.get('/estruturado/usuarios', UserControllerNova.listarUsuario)
router.get('/estruturado/usuario/:id', UserControllerNova.buscarUsuario)
router.put('/estruturado/editarUsuario/:id', UserControllerNova.atualizarUsuario)
router.delete('/estruturado/apagarUsuario/:id', UserControllerNova.removerUsuario);

router.get('/aws', AWSController.buscarImagem)
router.post('/upload', upload.single('file'), AWSController.uploadImagem);
router.get('/download', AWSController.downloadImagem);


module.exports = router