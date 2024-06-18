import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

import ProductsCard from "./ProductsCard";

const AllProducts = () => {
    const [products,setProducts] = useState([]);

    const fetchAllProducts = async () => {
        try {
          const response = await axios.get('http://localhost:3000/test/getAllProducts');
          setProducts(response);
        } catch (error) {
          console.error("Error in fetching products data: ", error);
        }
      };
    
      useEffect(() => {
        fetchAllProducts();
      }, []);
    
    return ( 
        <Col xs={{ span: 10, offset: 1 }}>
        <Row xs={2} md={5} className='g-5 mt-1 mb-5'>
          {products.map((prd) => (
            <ProductsCard
              product={prd}
            />
          ))}
        </Row>
      </Col>
    );
}
 
export default AllProducts;