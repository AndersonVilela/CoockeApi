import { Router } from "express";
import { createCategories } from "./app/useCases/categories/createCategory";
import { deleteCategories } from "./app/useCases/categories/DeleteCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createProducts } from "./app/useCases/products/createProducts";
import { listProducts } from "./app/useCases/products/listProducts";
import multer from 'multer';
import path from 'node:path';
import { listProductsbyCategories } from "./app/useCases/categories/listProductsbyCategory";
import { listOrders } from "./app/useCases/orders/listOrders";
import { createOrders } from "./app/useCases/orders/createOrder";
import { changeOrderStatus } from "./app/useCases/orders/changeOrderStatus";
import { cancelOrder } from "./app/useCases/orders/cancelOrder";
import { deleteProduct } from "./app/useCases/products/deleteProduct";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(request, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(request, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  }),
});

//list categories
router.get('/categories', listCategories);

//create category
router.post('/categories', createCategories);

// detele categories
router.delete('/categories/:categorieID', deleteCategories);

//list products
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image'), createProducts);

//Delete product
router.delete('/products/:productId', deleteProduct);

//get products by category
router.get('/categories/:categoryId/products', listProductsbyCategories);

// list orders
router.get('/orders', listOrders);

//create orders
router.post('/orders', createOrders);

//change order status
router.patch('/orders/:orderID', changeOrderStatus);

//delete/cancel order
router.delete('/orders/:orderID', cancelOrder);
