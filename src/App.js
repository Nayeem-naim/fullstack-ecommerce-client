
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import ProductList from './Component/ProductList/ProductList';
import LogIn from './Component/LogIn/LogIn';
import Admin from './Component/Admin/Admin';
import { Nav} from 'react-bootstrap';
import { useState } from 'react';
import { createContext } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import OrderProduct from './Component/OrderProduct/OrderProduct'

export const userContext = createContext();

function App() {
 const [logInUser, setLogInUser] = useState({})
  return (
    <userContext.Provider value={[logInUser, setLogInUser]}>
    <Router>
      <p>{logInUser.name}</p>
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link  as={Link} to="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/orderProduct">OrderProduct</Nav.Link>
          </Nav.Item>
        </Nav>
        <hr />
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/orderProduct">
            <OrderProduct/>
          </Route>
          <PrivateRoute path="/product/:productId">
            <ProductList />
          </PrivateRoute>
        </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
