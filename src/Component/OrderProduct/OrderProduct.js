import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { userContext } from '../../App';

const OrderProduct = () => {
    const [loggedInUser] = useContext(userContext)
    console.log(loggedInUser.email);
    const [orders , setOrders] = useState([])
    useEffect(()=>{
      const url = 'https://tranquil-bastion-92076.herokuapp.com/order?email='+loggedInUser.email
      fetch(url)
      .then(res => res.json())
      .then(data => setOrders(data))
    },[loggedInUser.email])
    return (
        <div className="text-center mt-3">
            {
                orders.map(order => <p>{order.name}</p>)
            }
        </div>
    );
};

export default OrderProduct;