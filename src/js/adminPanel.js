import FetchJsonAPI from "./fetchJsonAPI.js"

const fetchJsonAPI = new FetchJsonAPI("https://kenzie-food-api.herokuapp.com", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImlhdCI6MTY0MzExNzI2NCwiZXhwIjoxNjQzOTgxMjY0LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.WIb6u7PiXTu6Dz6iNslALXLyUaP9D0PUQK74iYGXx6Q")
//console.log(fetchJsonAPI)

// const testeAPI = () => {
   
//  return fetchJsonAPI.getAllProducts();
 
// }

// const teste = await testeAPI();


// console.log(teste)



function addFormListeners(){
    const postFormElement       = document.querySelector("#postForm")
    const deleteFormElement     = document.querySelector("#deleteInput")
    const patchFormElement      = document.querySelector("#patchForm")
    const patchIdElement        = document.querySelector("#patchThis")

    const getElement            = document.querySelector("#showProducts")

    const getButton             = getElement.querySelector("#showButton")

    const postSendButton        = postFormElement.querySelector("#postButton")
    const deleteSendButton      = document.querySelector("#deleteButton")
    const patchSendButton       = document.querySelector("#patchButton")



    getButton.addEventListener("click", async e => {// Funciona
        e.preventDefault()
        const productsCreateded = await showAll();
        console.log(productsCreateded) 
    })




    postSendButton.addEventListener("click", async e => {//Corrigir o Bad request
        e.preventDefault()//Cancela o evento se for cancelável, sem parar a propagação do mesmo.

        const body = createBodyRequest(postFormElement)

        console.log(body)
        const metodoPost = await fetchJsonAPI.authPostProduct(body);
   
        console.log(metodoPost)
        return metodoPost;

    })



    patchSendButton.addEventListener("click", async e => {//testar
        e.preventDefault()
    
        const productPatch = await fetchJsonAPI.authGetProductById(patchIdElement.value);
        const body = createBodyRequest(patchFormElement)
        const pathing = await fetchJsonAPI.authPatchProductById(productPatch, body)

        return pathing;
    
    })





    deleteSendButton.addEventListener("click", async e =>{//Funciona
        e.preventDefault()
        const idProduct = deleteFormElement.value;
        const metodoDelete = await fetchJsonAPI.deleteProductById(idProduct);
      return await metodoDelete;



    })




}


function createBodyRequest(element){
    const inputArr = element.querySelectorAll("input")

    const bodyObject = new Object()

    inputArr.forEach(input => {
        const name = input.name
        const value = input.value

        bodyObject[name] = value
    })

    return bodyObject
}


const showAll = () => {       
    return fetchJsonAPI.authGetProduct()
}




function init(){
    addFormListeners()
}

init()