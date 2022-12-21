const { Router } = require('express');

const router = Router();

const productController = require('../../controllers/productController.js');

router
    .get('/product', productController.getAllProducts)
    .get('/product/:productId', productController.getOneProduct)
    .post('/product/:productId', productController.createNewProduct)
    .patch('/product/:productId', productController.updateOneProduct)
    .delete('/product/:productId', productController.deleteOneProduct)

module.exports = router;