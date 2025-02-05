const { products, productId, resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});


describe('addProduct', () => {

    it('Should add a product correctly and increase the id', () => {
        addProduct('Laptop', 1200);
        expect(products.length).toBe(1);
        expect(products[0]).toEqual({ id: 1, productName: 'Laptop', productPrice: 1200 });
    });

    it('Should throw an error if price is not a number', () => {
        expect(() => addProduct('Bolso', '96')).toThrow("Price must be a Number");
    });

    it('Should throw an error if the product already exists', () => { 
        addProduct('Camisa', 60)
        expect(() => products.some(obj => obj.productName === 'Camisa')).toBeTruthy()
        expect(() => addProduct('Camisa', 60)).toThrow("The product already exists");
    });
})

describe('removeProduct', () => {

    it('Should throw an error if the product does not exists', () => { 
        expect(() => removeProduct(5)).toThrow("This product does not exist");
    });

    it('Should erase an existing item in the array', () => {
        addProduct('Parlante', 80); // 1
        addProduct('Monitor', 90);  // 2
        addProduct('Mouse', 35);    // 3
        addProduct('Teclado', 40);  // 4
        addProduct('Torre', 750);   // 5
        
        removeProduct(2);
        
        expect(products).toEqual([
            { id: 1, productName: 'Parlante', productPrice: 80 },
            { id: 3, productName: 'Mouse', productPrice: 35 },
            { id: 4, productName: 'Teclado', productPrice: 40 },
            { id: 5, productName: 'Torre', productPrice: 750 }
        ]);
    })
})

describe('getProduct', () => {

    it('Should return the specific product', () => {
        addProduct('Parlante', 80); // 1
        addProduct('Monitor', 90);  // 2
        addProduct('Mouse', 35);    // 3
        addProduct('Teclado', 40);  // 4
        addProduct('Torre', 750);   // 5

        expect(getProduct(3)).toEqual(
            { id: 3, productName: 'Mouse', productPrice: 35 },
        );
    })
})

describe('updateProduct', () => {

    it('Should change the name of the product according to the parameters given', () => {
        addProduct('Laptop', 1200);
        updateProduct(1, 'Laptop', 1500)
        expect(products[0]).toEqual({ id: 1, productName: 'Laptop', productPrice: 1500 });
    });

    it('Should throw an error if the item does not exists', () => {
        expect(() => updateProduct(2, 'Mouse', 35)).toThrow("This product does not exist");
    });

    it('Should throw an error if the item parameters are not filled', () => {
        addProduct('Laptop', 1200);
        expect(() => updateProduct(1, 35)).toThrow("Name and Price must be defined");
    });
})