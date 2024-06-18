import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const ProductsCard = (props) => {
    const { product } = props;

    return ( 
        <Col key={product._id}>
        <Card
          className="custom-card"
          style={{ width: "13rem", height: "15.5rem" }}
        >
          <Card.Body>
            <div
              className="d-flex flex-column align-items-center"
            >
              <div className="mt-3 d-flex flex-column align-items-center">
                <Card.Title>{product.productName}</Card.Title>
              </div>
              <Card.Text>{product.company}</Card.Text>
              <Card.Text>{product.category} </Card.Text>
              <Card.Text>{product.price}</Card.Text>
              <Card.Text>{product.rating}</Card.Text>
              <Card.Text>{product.discount}</Card.Text>
              <Card.Text>{product.availability}</Card.Text>
            </div>
            
          </Card.Body>
        </Card>
      </Col>
    );
}
 
export default ProductsCard;