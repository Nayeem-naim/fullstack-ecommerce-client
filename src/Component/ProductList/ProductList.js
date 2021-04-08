import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from '../Home/Product/Product';
import { useContext } from 'react';
import { userContext } from '../../App';

const ProductList = () => {
    const [loggedInUser] = useContext(userContext)
    console.log(loggedInUser);

    const { productId } = useParams();
    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5055/product'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data.find(pd => pd._id === productId))
            })
    }, [productId])

    const orderPlace =()=>{
        const orderData = {...loggedInUser,...products}
        const url =`http://localhost:5055/addOrder`;
        fetch(url,{
          method: 'POST',
          headers:{'content-type':'application/json'},
          body: JSON.stringify(orderData)
        })
        .then(data => console.log('database respond '))
    }
   

    return (
        <div className="container">
           <Product showBtn={false} product={products}></Product>
           <button onClick={orderPlace}>check Out</button>
        </div>
    );
};
// product={products}
export default ProductList;