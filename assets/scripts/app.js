class Product  {
constructor(title,image,desc, price){
this.title = title;
this.imageUrl = image;
this.description = desc;
this.price = price;
}
}

class ShoppingCart {
    items = [];
    addProduct(product){
        this.items.push(product);
        this.totalOutput.innerHTML = `<h2>Total: \$${1}</h2>`
    }
    render(){
        const cartEl = document.createElement("section");
        cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
        cartEl.className = "cart";
        this.totalOutput = cartEl.querySelector("h2");
        return cartEl;
    }
}

class ProductItem {
    constructor(product){
        this.product = product
    }
            addTOcart(){
                App.addProductToCart(this.product);
            }
            

    render(){
        const prodEl = document.createElement("li");
        prodEl.className = "product-item";
        prodEl.innerHTML = `
        <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>$${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Add to Cart</button>
        </div>
        </div>`;
        const addCartButton = prodEl.querySelector("button");
        addCartButton.addEventListener("click", this.addTOcart.bind(this))
        return prodEl
    }
}


class ProductsList {
    products = [
        new Product("The last of us II", 
        "https://img.youtube.com/vi/ZyDOeshZFfg/maxresdefault.jpg",
        "Action-Adventure",
        69.99,
        ),
        new Product("Metro Exodus", 
        "https://cdn.vox-cdn.com/thumbor/aRM2buml6QShnavgszXDLn9IcJo=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19702068/_assets_Uploads_MetroExodus_SUMMER_WallPaper_1920x1200.jpg",
        "Action-Adventure",
        49.99,
        ),
];
constructor(){}
render(){
    const prodList = document.createElement("ul");
    prodList.className = "product-list"
    for (const prod of this.products){
     const productItem = new ProductItem(prod)
     const prodEl = productItem.render();
        prodList.append(prodEl)
    }
    return prodList;
}
}

class Shop {
    render(){
    const renderHook = document.getElementById("app");
    this.cart = new ShoppingCart();
    const cartEl =  this.cart.render();
    const productsList = new ProductsList
    const prodListEl = productsList.render()

    renderHook.append(cartEl)
    renderHook.append(prodListEl)

}
}

class App {
    static cart;
    static init(){
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }
    static addProductToCart(product){
        this.cart.addProduct(product)
    }
}
App.init();