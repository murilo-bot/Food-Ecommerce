import { brlCurrencyFormat } from "./brlCurrencyFormat.js"

function createTagElement(tagName){
    const tags = [
        {
            name:"panificadora",
            imgPath: "./assets/images/bread-icon.svg",
        },
        {
            name:"frutas",
            imgPath: "./assets/images/fruits-icon.svg",
        },
        {
            name:"bebidas",
            imgPath: "./assets/images/wine-icon.svg",
        },

    ]

    const regex = new RegExp(tagName, "ig")

    const tagData = tags.find( tag => !!tag.name.match(regex)) || {
        name:"todos",
        imgPath: null,
    }

    const element = document.createElement("div")
    const span = document.createElement("span")

    span.innerHTML = tagData.name

    element.classList.add("tag")
    element.classList.add("tag-food-card")
    span.classList.add("first-upper-case")

    if(tagData.imgPath){
        const img = document.createElement("img")
        img.src = tagData.imgPath
        img.alt = tagData.name
        
        element.appendChild(img)
    }

    element.appendChild(span)

    return element
}

export function renderProductsOnContainer(productList, cartListInstance) {
    //falta pegar os botoes de filtro por nome de pesquisa(nameSearch) e filtro por categoria(categoryFilter)
    const ul = document.querySelector("#foodCardContainer")
    const addToCartLogoPath = "/assets/images/add-cart-icon.svg"

    ul.innerHTML = ''; 
    
    productList.forEach( ({imagem, nome, categoria, preco, descricao, id}) => {
        const li = document.createElement('li');
        
        const imgContainer = document.createElement("div")
        const img = document.createElement('img');


        const categorySpan = createTagElement(categoria)
        
        const h3 = document.createElement('h3');
        const description = document.createElement("p")
        
        const priceSpan = document.createElement('span');

        const buyInfoContainer = document.createElement("div")

        const addToCartIcon = document.createElement('img')
        const buyButton = document.createElement('span')


        buyButton.addEventListener("click", () => {
            cartListInstance.addProduct({
                imagem,
                nome,
                categoria,
                id,
                preco
            })
        })

        

        // Adicionando dados do produto aos elementos        
        img.alt = nome;
        img.src = imagem;
        addToCartIcon.src = addToCartLogoPath
        description.innerHTML = descricao

        h3.innerText = nome;

        priceSpan.innerText = brlCurrencyFormat(preco);
        

        //add classes for CSS
        li.classList.add("food-card")
        imgContainer.classList.add("food-img-container")
        buyInfoContainer.classList.add("buy-info-container")
        priceSpan.classList.add("food-price-span")
        buyButton.classList.add("shop-button")

        
        
        // Adicionando o elementos para o li
        imgContainer.appendChild(img)
        buyButton.appendChild(addToCartIcon)
        buyInfoContainer.appendChild(priceSpan);
        buyInfoContainer.appendChild(buyButton);

        li.appendChild(imgContainer);
        li.appendChild(categorySpan)
        li.appendChild(h3);
        li.appendChild(description)
        li.appendChild(buyInfoContainer)

        ul.appendChild(li)
    });
}