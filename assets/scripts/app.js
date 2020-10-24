class Product  {
constructor(title,image,desc, price){
this.title = title;
this.imageUrl = image;
this.description = desc;
this.price = price;
}
}


const productsList ={
    products :[
        new Product("The last of us II", 
        "https://img.youtube.com/vi/ZyDOeshZFfg/maxresdefault.jpg",
        "Action-Adventure",
        69.99,
        ),
        new Product("Metro Exodus", 
        "https://cdn.vox-cdn.com/thumbor/aRM2buml6QShnavgszXDLn9IcJo=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19702068/_assets_Uploads_MetroExodus_SUMMER_WallPaper_1920x1200.jpg",69.99,"Action-Adventure",
        "Action-Adventure",
        49.99,
        ),
],

render(){
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list"
    for (const prod of this.products){
        const prodEl = document.createElement("li");
        prodEl.className = "product-item";
        prodList.append(prodEl);
        prodEl.innerHTML = `
        <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
        <h2>${prod.title}</h2>
        <h3>$${prod.price}</h3>
        <p>${prod.description}</p>
        <button>Add to Cart</button>
        </div>
        </div>
        `
        prodList.append(prodEl)
    }
    renderHook.append(prodList)
}
}
productsList.render()