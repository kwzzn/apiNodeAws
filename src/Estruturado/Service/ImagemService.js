const ImagemRepository = require('../Repository/ImagemRepository');
const Imagem = require('../Entity/Imagem');

class ImagemService {
    async criarNovaImagem(referencia, titulo) {
        const novaImagem = new Imagem(referencia, titulo);
        return await ImagemRepository.criarImagem(novaImagem);
    }

    async listarImagem() {
        return await ImagemRepository.listarImagem();
    }

    async buscarImagem(id) {
        return await ImagemRepository.buscarImagem(id);
    }

    async atualizarImagem(id, referencia, titulo) {
        const dadosAtualizados = { referencia, titulo };
        return await ImagemRepository.atualizarImagem(id, dadosAtualizados);
    }

}


    /*
buscarImagemPeloID(request, response) {
        const id = request.params
        database.select("*").table("imagem").where({id:id.id}).then(data => {
            response.json(data);
        }).catch(error => {
            response.send(400);
        })
    }

    atualizarImagem(request, response){
        const id = request.params;
        const {referencia, titulo} = request.body;
        
        database.where({id:id.id}).update({referencia:referencia, titulo:titulo}).table("imagem").then(data=>{
            response.json({message:"Imagem atualizado com sucesso"})
        }).catch(error=>{
            response.json(error);
        })
    }
    
    removerImagem(request, response) {
        const id = request.params;

        database.where({id:id.id}).del().table("imagem").then(data=>{
            response.json({message:"Imagem deletada com sucesso"})
        }).catch(error=>{
            response.json(error);
        })
    }
    */

module.exports = new ImagemService();
