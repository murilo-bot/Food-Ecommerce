export default class Cart {
  constructor() {
    this.quantity = 0;
    this._amount = 0;
  }

  set amount(newAmount) {
    this._amount = Number(newAmount.toFixed(2));
  }

  get amount() {
    return this._amount;
  }

  addProduct(data) {
    const divCart = document.getElementById("noContentCart");
    const cartUl = document.getElementById("cartContainer");
    const liProduct = document.createElement("li");

    const imgProduct = document.createElement("img");
    const nomeProduct = document.createElement("h3");
    const priceProduct = document.createElement("p");
    const categoriaProduct = document.createElement("span");
    const btnTrashProduct = document.createElement("img");

    imgProduct.src = data.imagem;
    imgProduct.alt = data.nome;

    nomeProduct.innerText = data.nome;
    categoriaProduct.innerText = data.categoria;

    priceProduct.innerText = `R$${data.preco}`;

    btnTrashProduct.src = "assets/images/trash-icon.svg";
    btnTrashProduct.alt = "Lixeira";
    const idInCart = this.geraStringAleatoria();
    btnTrashProduct.addEventListener(
      "click",
      this.deleteProduct.bind(this, liProduct, data.preco, idInCart)
    );

    divCart.innerHTML = "";

    liProduct.appendChild(imgProduct);
    liProduct.appendChild(nomeProduct);
    liProduct.appendChild(categoriaProduct);
    liProduct.appendChild(priceProduct);
    liProduct.appendChild(btnTrashProduct);

    cartUl.appendChild(liProduct);
    divCart.appendChild(cartUl);

    this.updatePrice(data.preco, true);
    this.sumeQuantity(true);
    data.idInCart = idInCart;
    this.setCartListLocalStorage(data);

    //Classes css

    imgProduct.classList.add("imgCart");
    nomeProduct.classList.add("tittleCart");
    priceProduct.classList.add("priceCart");
    categoriaProduct.classList.add("categoriaCart");
    btnTrashProduct.classList.add("btnTrashCart");
  }

  addProductFromLocalStorage() {
    const newCart = this.getCartListLocalStorage();

    const divCart = document.getElementById("noContentCart");
    const cartUl = document.getElementById("cartContainer");
    divCart.innerHTML = "";
    cartUl.innerHTML = "";
    if (newCart !== null) {
      newCart.forEach((data) => {
        const liProduct = document.createElement("li");
        const imgProduct = document.createElement("img");
        const nomeProduct = document.createElement("h3");
        const priceProduct = document.createElement("p");
        const categoriaProduct = document.createElement("span");
        const btnTrashProduct = document.createElement("img");

        imgProduct.src = data.imagem;
        imgProduct.alt = data.nome;

        nomeProduct.innerText = data.nome;
        categoriaProduct.innerText = data.categoria;

        priceProduct.innerText = `R$${data.preco}`;

        btnTrashProduct.src = "assets/images/trash-icon.svg";
        btnTrashProduct.alt = "Lixeira";
        const idInCart = this.geraStringAleatoria();
        btnTrashProduct.addEventListener(
          "click",
          this.deleteProduct.bind(this, liProduct, data.preco, idInCart)
        );

        liProduct.appendChild(imgProduct);
        liProduct.appendChild(nomeProduct);
        liProduct.appendChild(categoriaProduct);
        liProduct.appendChild(priceProduct);
        liProduct.appendChild(btnTrashProduct);

        cartUl.appendChild(liProduct);
        divCart.appendChild(cartUl);

        this.updatePrice(data.preco, true);
        this.sumeQuantity(true);

        //Classes css

        imgProduct.classList.add("imgCart");
        nomeProduct.classList.add("tittleCart");
        priceProduct.classList.add("priceCart");
        categoriaProduct.classList.add("categoriaCart");
        btnTrashProduct.classList.add("btnTrashCart");
      });
    }
  }

  geraStringAleatoria(tamanho = 30) {
    let stringAleatoria = "";
    let caracteres =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"#$%&/()*+-_!';
    for (let i = 0; i < tamanho; i++) {
      stringAleatoria += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      );
    }
    return stringAleatoria;
  }

  deleteProduct(elemento, dataPrice, idInCart) {
    //elemento.remove();
    this.updatePrice(dataPrice, false);
    this.sumeQuantity(false);
    const getListaLocalStorage = this.getCartListLocalStorage();
    const filtro = getListaLocalStorage.filter(
      (elemento) => elemento.idInCart !== idInCart
    );
    localStorage.clear();
    localStorage.setItem("product", JSON.stringify(filtro));
    this.addProductFromLocalStorage();
  }

  updatePrice(price, sume) {
    const amountPrice = document.getElementById("amountPrice");

    if (sume) {
      this.amount += price;
    } else {
      this.amount -= price;
    }

    amountPrice.innerHTML = `Preço total: R$${this.amount}`;
  }

  sumeQuantity(sume) {
    const quantityElement = document.getElementById("quantity");

    if (sume) {
      this.quantity++;
    } else {
      this.quantity--;
    }

    quantityElement.innerHTML = `Quantidade: ${this.quantity}`;
  }

  getCartListLocalStorage() {
    return JSON.parse(localStorage.getItem("product"));
  }

  setCartListLocalStorage(product) {
    const arr = JSON.parse(localStorage.getItem("product"));
    if (arr === null) {
      localStorage.setItem("product", JSON.stringify([product]));
    } else {
      localStorage.setItem("product", JSON.stringify([...arr, product]));
    }
  }

  #checkCartStatus() {}

  #initCart() {
    const localStorageData = this.getCartListLocalStorage();
  }
}
