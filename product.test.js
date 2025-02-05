const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});

describe('addProduct', () => {

    it('Should throw an error if price is not a number', () => {
        expect(() => addProduct('Bolso', '96 Euros')).toThrow('Price must be a number');
    });

    it('Should add a product correctly', () => {
        addProduct('Laptop', 1200);
        expect(products.length).toBe(1);
        expect(products[0]).toEqual({ id: 1, productName: 'Laptop', productPrice: 1200 });
  });
})