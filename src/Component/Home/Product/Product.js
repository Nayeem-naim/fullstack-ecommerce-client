
import React from 'react';
import { Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Product = ({ product,showBtn }) => {
    


    const { name,price, imageURL,_id} = product;
    return (
        <div className="text-center m-4 col-md-3 ">
            <Card className="bg-Secondary">
                <Card.Img style={{height:'300px'}} variant="top" src={imageURL}/>
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>Price: {price}/taka</Card.Text>
                   {showBtn && <Button  as={Link} to={"/product/"+_id}  variant="primary">Buy Now</Button>}
                </Card.Body>
            </Card>
        </div>
    );
};
// 

export default Product;