import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {
    return (
        <Router>
      <div className="container">
            <div className="row">
          <div className="col-md-2">
        <ul>
          <li>
            <Link to="/manageProduct">ManageProduct</Link>
          </li>
          <li>
            <Link to="/addProduct">addProduct</Link>
          </li>
        </ul>
        </div>
           <div className="col-md-10 text-center mb-4">
           <Switch>
          <Route exact path="/manageProduct">
            <ManageProduct/>
          </Route>
          <Route path="/admin">
            <AddProduct></AddProduct>
          </Route>
          <Route exact path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
        </Switch>
           </div>
           </div>
      </div>
    </Router>
    );
};

export default Admin;