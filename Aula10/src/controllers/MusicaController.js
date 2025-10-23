import MusicaModel from "../models/MusicaModel";

export default class MusicaController{

    static listar(req, res){
        try {
            const musicas = MusicaModel.listar();
            if(musicas.length === 0){
                res.status(400).json({msg: "Erro ao listas as muúsicas"});
                return;
            }
            res.status(200).json(musicas);
        } catch (error) {
            res.status(500).json({msg: "Erro interno", erro: error.message});
        }
    }

    static buscarPorId(req, res){
        try {
            const id = req.params.id;
            const musica = MusicaModel.buscarPorId(id);
            if(!musica){
                res.status(404).json({msg: "Música não encontrada"});
                return;
            }
            res.status(200).json({msg: "Música encontrada", musica: musica});
        } catch (error) {
            res.status(500).json({msg: "Erro ao buscar música", erro: error.message});
        }
    }

}