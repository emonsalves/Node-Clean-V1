
const productService = require('../services/productServices.js')

const getAllProducts = (request, response) => {
    const allProducts = productService.getAllProducts();
    response.send(`<h1>Get all products</h1>`)

};

const getOneProduct = (request, response) => {
    const product = productService.getOneProduct(request.params.productId);
    response.send(`<h1>Get a product ${request.params.productId}</h1>`)

};

const createNewProduct = (request, response) => {
    const createdProduct = productService.createNewProduct(request.params.productId)
    response.send(`<h1>Create a product ${request.params.productId}</h1>`)
};

const updateOneProduct = (request, response) => {
    const updatedProduct = productService.updateOneProduct(request.params.productId)
    response.send(`<h1>Update a product ${request.params.productId}</h1>`)
};

const deleteOneProduct = (request, response) => {
    productService.deleteOneProduct(request.params.productId)
    response.send(`<h1>Update a product ${request.params.productId}</h1>`)

};

module.exports = { getAllProducts, getOneProduct, createNewProduct, updateOneProduct, deleteOneProduct }