class FetchJsonAPI{
    constructor(uri, jwt){
        this._uri = uri
        this._jwt = jwt

        const headers = new Headers()//class do javascript
        headers.append("Content-Type", "application/json")
        headers.append("Authorization", `Bearer ${this._jwt}`)

        this._headers = headers
    }


    async getAllProducts(){//this._uri é string
        const response = await fetch(this._uri + "/product", {
            method:"GET",
            headers:this._headers
        })

        return await response.json()
    }
    
    async getProductById(id){
        const response = await fetch(`${this._uri}/product/${id}`, {
            method:"GET",
            headers:this._headers
        })
    
        return await response.json()
    }

    
    
    async authGetProduct(){
        const response = await fetch(`${this._uri}/my/product`, {
            method:"GET",
            headers:this._headers,
        })
    
        return await response.json()
    }

    async authGetProductById(id){
        const response = await fetch(`${this._uri}/my/product/${id}`, {
            method:"GET",
            headers:this._headers,
        })
    
        return await response.json()
    }

    async authPostProduct(obj){
        const expectedKeys = ["nome", "categoria", "descricao", "preco", "imagem"]
        const objKeys = Object.keys(obj)

        const isObjInvalid = expectedKeys.some( key => !objKeys.includes(key) )

        if(isObjInvalid) throw new Error("Invalid given object, it must have the following keys: " + JSON.stringify(expectedKeys))


        const response = await fetch(`${this._uri}/my/product`, {
            method:"POST",
            headers:this._headers,
            body: JSON.stringify(obj)
        })
    console.log(response)
        return await response.json()
    }
    
    async authPatchProductById(id, obj){
        const response = await fetch(`${this._uri}/my/product/${id}`, {
            method:"PATCH",
            headers:this._headers,
            body:JSON.stringify(obj)
        })
    
        return await response.json()
    }

    async deleteProductById(id){
        const response = await fetch(`${this._uri}/my/product/${id}`, {
            method:"DELETE",
            headers:this._headers
        })
    }
}


export default FetchJsonAPI