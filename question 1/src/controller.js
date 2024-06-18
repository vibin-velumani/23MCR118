import mongoose from "mongoose";
import ProductModel from "./models/products.js";

const getNProducts = async (req , res ) => {
    try {
        const { companyname: companyName, categoryname: categoryName } = req.params;
        const { top, minPrice, maxPrice } = req.query;

        const topN = parseInt(top, 10) || 10; 
        const minPriceValue = parseFloat(minPrice) || 0; 
        const maxPriceValue = parseFloat(maxPrice) || Number.MAX_SAFE_INTEGER; 

        const products = await ProductModel.find({
            company: companyName,
            category: categoryName,
            price: { $gte: minPriceValue, $lte: maxPriceValue }
        })
        .sort({ rating: -1 }) 
        .limit(topN); 

        res.status(200).send(products);
    } catch (error) {
        console.error("Error fetching top N  products:", error);
        res.status(500).send({
            message: "Internal Server Error",
        });
    }
} 

export default {
    getNProducts
}