import { renderProductsOnContainer } from "./utils/renderProductsOnContainer.js"
import { nameSearch } from "./utils/nameSearch.js"
import Cart from "./models/cartList.js"


// import FetchJsonAPI from "./fetchJsonAPI.js"

// const fetchJsonAPI = new FetchJsonAPI("https://kenzie-food-api.herokuapp.com", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsImlhdCI6MTY0MzExNzI2NCwiZXhwIjoxNjQzOTgxMjY0LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.WIb6u7PiXTu6Dz6iNslALXLyUaP9D0PUQK74iYGXx6Q")
const cart = new Cart()

function setupTagButtons(){
    const liAll = document.getElementById("todos")
    const liPanificadora = document.getElementById("panificadora")
    const liFrutas = document.getElementById("frutas")
    const liBebidas = document.getElementById("bebidas")
    
    liAll.addEventListener('click', function(){
        return renderProductsOnContainer(mockData, cart)
        
    })
    
    liPanificadora.addEventListener('click', element => {	
        const li = liPanificadora.id
        const elementsToRender = nameSearch(li, mockData)
    
        renderProductsOnContainer(elementsToRender, cart)
    })
    
    liFrutas.addEventListener('click', element => {	
        const li = liFrutas.id	
        const elementsToRender = nameSearch(li, mockData)
    
        renderProductsOnContainer(elementsToRender, cart)
    })
    
    
    liBebidas.addEventListener('click', element => {	
        const li = liBebidas.id
        const elementsToRender = nameSearch(li, mockData,true)
    
        renderProductsOnContainer(elementsToRender, cart)
    })
}

function setupForm(){
	const input = document.querySelector("#searchInput")

	input.addEventListener("input", e => {
		const string = e.target.value
		const elementsToRender = nameSearch(string, mockData)

		renderProductsOnContainer(elementsToRender, cart)
	})
}

function init(){
	renderProductsOnContainer(mockData, cart)
    setupTagButtons()
	setupForm()
	cart.addProductFromLocalStorage()
}



// const mockData = await fetchJsonAPI.getAllProducts()


const mockData = [
	{
		"id": 1,
		"nome": "Mousse de morango com a fruta",
		"preco": 27.5,
		"categoria": "Frutas",
		"descricao": "Sobremesa fácil, rápida e muito saborosa: a mousse de morango leva apenas 5 ingredientes; confira como fazer a receita",
		"imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/mousse.png",
		"createdAt": "2022-01-24T16:25:25.401Z",
		"updatedAt": "2022-01-24T16:25:25.401Z"
	},
	{
		"id": 2,
		"nome": "Panqueca de banana com aveia",
		"preco": 20,
		"categoria": "Panificadora",
		"descricao": "Esta receita serve muito bem 2 pessoas, deixa a gente bem satisfeito, se não tiver outra opção de café. Se tiver mais comida, como pães e frutas.",
		"imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/panqueca.png",
		"createdAt": "2022-01-24T16:26:44.903Z",
		"updatedAt": "2022-01-24T16:26:44.903Z"
	},
	{
		"id": 3,
		"nome": "Pastel de verduras vegano",
		"preco": 20,
		"categoria": "Panificadora",
		"descricao": "Todos nós fervemos vegetais, salteamos ou consumimos crus. Mas que tal comer vegetais como se fossem um bolo?",
		"imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/pastel.png",
		"createdAt": "2022-01-24T16:27:32.190Z",
		"updatedAt": "2022-01-24T16:27:32.190Z"
	},
]

init()