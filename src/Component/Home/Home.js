import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from "react-loader-spinner";

const Home = () => {
    const [products , setProducts] = useState([])
useEffect(()=>{
   const url = 'https://tranquil-bastion-92076.herokuapp.com/product'
   fetch(url)
   .then(res => res.json())
   .then( data => setProducts(data))
},[])
    return (
        <div className="row m-5 ">
            {
                products.length === 0 && <Loader
                className="text-center"
                type="Puff"
                color="#00BFFF"
                height={50}
                width={50}/>
            }
           {
               products.map(pd => <Product showBtn={true} product={pd}></Product>)
           }
        </div>
    );
};

export default Home;