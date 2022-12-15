"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const createCategory_1 = require("./app/useCases/categories/createCategory");
const DeleteCategory_1 = require("./app/useCases/categories/DeleteCategory");
const listCategories_1 = require("./app/useCases/categories/listCategories");
const createProducts_1 = require("./app/useCases/products/createProducts");
const listProducts_1 = require("./app/useCases/products/listProducts");
const multer_1 = __importDefault(require("multer"));
const node_path_1 = __importDefault(require("node:path"));
const listProductsbyCategory_1 = require("./app/useCases/categories/listProductsbyCategory");
const listOrders_1 = require("./app/useCases/orders/listOrders");
const createOrder_1 = require("./app/useCases/orders/createOrder");
const changeOrderStatus_1 = require("./app/useCases/orders/changeOrderStatus");
const cancelOrder_1 = require("./app/useCases/orders/cancelOrder");
const deleteProduct_1 = require("./app/useCases/products/deleteProduct");
exports.router = (0, express_1.Router)();
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination(request, file, callback) {
            callback(null, node_path_1.default.resolve(__dirname, '..', 'uploads'));
        },
        filename(request, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    }),
});
//list categories
exports.router.get('/categories', listCategories_1.listCategories);
//create category
exports.router.post('/categories', createCategory_1.createCategories);
// detele categories
exports.router.delete('/categories/:categorieID', DeleteCategory_1.deleteCategories);
//list products
exports.router.get('/products', listProducts_1.listProducts);
// Create product
exports.router.post('/products', upload.single('image'), createProducts_1.createProducts);
//Delete product
exports.router.delete('/products/:productId', deleteProduct_1.deleteProduct);
//get products by category
exports.router.get('/categories/:categoryId/products', listProductsbyCategory_1.listProductsbyCategories);
// list orders
exports.router.get('/orders', listOrders_1.listOrders);
//create orders
exports.router.post('/orders', createOrder_1.createOrders);
//change order status
exports.router.patch('/orders/:orderId', changeOrderStatus_1.changeOrderStatus);
//delete/cancel order
exports.router.delete('/orders/:orderID', cancelOrder_1.cancelOrder);
