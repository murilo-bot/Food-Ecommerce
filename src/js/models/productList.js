export default class ProductList {
    constructor(id,nome, preco, categoria, descricao, imagem){
        this._id = id,
        this._nome = nome,
        this._preco = preco,
        this._categoria = categoria,
        this._descricao = descricao,
        this._imagem = imagem
    }

    get id(){
        return this._id 
    }

    set id(newId){
        this._id  = newId
    }

    get nome(){
        return this._nome 
    }

    set nome(newNome){
        this_nome  = newNome
    }

    get preco(){
        return this._preco 
    }

    set preco(newPreco){
        this._preco  = newPreco
    }

    get categoria(){
        return this._categoria 
    }

    set categoria(newCategoria){
        this._categoria  = newCategoria
    }

    get descricao(){
        return this._descricao
    }

    set descricao(newDescricao){
        this._descricao  = newDescricao
    }

    get imagem(){
        return this._imagem
    }

    set imagem(newImagem){
        this._imagem  = newImagem
    }
}

