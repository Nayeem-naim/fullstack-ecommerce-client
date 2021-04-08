import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {

   const { register, handleSubmit} = useForm();
   const [image, setImage] = useState(null)
  const onSubmit = data => {
    const productData = {
      name: data.name,
      price: data.price,
      imageURL : image
    }
    const url =`https://tranquil-bastion-92076.herokuapp.com/addProduct`;
    fetch(url,{
      method: 'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify(productData)
    })
    .then(res => console.log('database respond ' , res))
  };

  const handleImg = event =>{
 console.log(event.target.files[0]);
 const imgData = new FormData();
     imgData.set('key', 'eeba1d45caf2859d4e95e34292d86ab0')
     imgData.append('image', event.target.files[0] )
     axios.post('https://api.imgbb.com/1/upload', 
     imgData)
      .then(function (response) {
        setImage(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-3" name="name" defaultValue="product Name " ref={register} /><br/>
       <input className="mb-3" name="price" defaultValue="product price" ref={register} /><br/>
      <input className="mb-3" style={{marginLeft:"110px"}} name="image" type="file" onChange={handleImg}/> <br/>
      <input type="submit" />
    </form>
        </div>
    );
};
export default AddProduct;