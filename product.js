/* La aplicación de administración de productos tendrá las siguientes funciones y variables:

✔️- resetProducts(): reinicia la lista de productos y el id.
✔️- addProduct(name, price): agrega un producto a la lista de productos.
✔️- removeProduct(id): elimina un producto de la lista de productos.
✔️- getProducts(): devuelve todos los productos.
✔️- getProduct(id): devuelve un producto por su id.
✔️- updateProduct(id, name, price): actualiza un producto por su id.
✔️- products: array de productos. Por defecto, estará vacío.
✔️- id: id del producto. Por defecto, será 0. Cada vez que se añada un producto, se incrementará en 1. */

const products = []
let productId = 0;

const resetProducts = () => {
    products.length = 0; 
    productId = 0;
};

const addProduct = (name, price) => {
    productId ++;

    if ( !name || !price ) {
        throw new Error("Name and Price of the product must be defined");
    }
    if ( isNaN(price) ) {
        throw new Error("Price must be a Number");
    }
    if ( products.some(obj => obj.name === name) ) {
        throw new Error("The product already exists");
    }
    let newProduct = {
        'id' : productId,
        'productName': name,
        'productPrice' : price,
    }
    products.push(newProduct)
    console.log("Product added successfully:", products);
}

const removeProduct = (id) => {
    
    if (products.some(product => product.id === id) === false ) { //* .some devuelve true or false
        throw new Error("This product does not exist");

    } else {
        
        const index = products.findIndex(product => product.id === id);
        // If the product exists (index !== -1), remove it using splice
        if (index !== -1) {
            products.splice(index, 1); // Removes 1 element at the found index
    }
}
}

const getProducts = () => {
    return products
}

const getProduct = (id) => {

    if (products.some(product => product.id === id) === false ) { //* .some devuelve true or false
        throw new Error("This product does not exist");
    } else {
      const singleProduct = products.find(product => product.id === id);
      return singleProduct
    }
}

const updateProduct = (id, newName, newPrice) => {

    let productUpdating = products.find(product => product.id === id);

    if (!productUpdating) {
        throw new Error("This product does not exist");
    }
    if (!newName || !newPrice) {
        throw new Error("Name and Price must be defined");
    }
    if (isNaN(newPrice)) {
        throw new Error("Price must be a number");
    }

    productUpdating.productName = newName;
    productUpdating.productPrice = newPrice;
    
}

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct,
}