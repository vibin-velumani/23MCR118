import mongoose from './index.js'

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  availability: {
    type: String,
    required: true,
    enum: ['yes', 'out-of-stock'], 
  },
  company : {
    type : String,
    required : true 
  },
  category : {
    type : String ,
    required : true
  }
}, {
  timestamps: true 
});


const ProductModel = mongoose.model('products', productSchema);

export default ProductModel;