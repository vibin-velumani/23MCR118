import express from 'express'
import ProductController from './controller.js'

const router = express.Router()
router.get('/test/companies/:companyname/categories/:categoryname/products', ProductController.getNProducts);
router.get('/test/getAllProducts' , ProductController.getAllProducts);

export default router