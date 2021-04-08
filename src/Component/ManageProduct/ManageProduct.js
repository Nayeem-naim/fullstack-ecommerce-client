import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [product , setProduct] = useState([])
    useEffect(()=>{
       const url = 'https://tranquil-bastion-92076.herokuapp.com/product'
       fetch(url)
       .then(res => res.json())
       .then( data => setProduct(data))
    },[])
    const deleteProduct = (id)=>{
        fetch(`https://tranquil-bastion-92076.herokuapp.com/deleteProduct/${id}`, {
                method: 'DELETE'
            })
                .then(result => {
                    console.log("deleted successfully", result);
                })
      }
    return (
        <container>
        {
            product.map(pd => <p>{pd.name} <button className="deleteBtn" onClick={() => deleteProduct(pd._id)}>delete</button></p>)
        }
        </container>
    );
};

export default ManageProduct;