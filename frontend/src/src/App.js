import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import NavBar from './components/NavBar';
import EventBus from "./common/EventBus";
import ListPlantComponent from './components/ListPlantComponent';
import AddPlantComponent from './components/AddPlantComponent';
import GetByPlantId from './components/GetByPlantId';
 import CustomerList from "./components/CustomerList";
import AddCustomer from "./components/AddCustomer";
import UpdateCustomer from "./components/UpdateCustomer";
import AddOrder from './components/AddOrder';
import UpdateOrder from './components/UpdateOrder';
import OrdersList from './components/OrderList';
import ListPlanter from './components/ListPlanter';
import AddPlanter from  './components/AddPlanter';



const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Welcome
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User

              </Link>
             
              
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
    
        <Routes>
        <Route path="/user" element={<NavBar/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>}  /> 
       
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/user" element={<BoardUser/>} />
          <Route path="/mod" element={<BoardModerator/>} />
          <Route path="/admin" element={<BoardAdmin/>} />
          <Route path="/Plant"  element={<ListPlantComponent />}/> 
             <Route path="/plantbyid"  element={<GetByPlantId />}/> 
             <Route path="/addplant"  element={<AddPlantComponent />}/> 
             

             <Route path="/Planter"  element={<ListPlanter />}/> 
             <Route path="/addplanter"  element={<AddPlanter/>}/> 
       
             <Route path='/Customer' element={<CustomerList/>}></Route>
                <Route path='/addcustomer' element={<AddCustomer/>}></Route>
                <Route path='/updatecustomer' element={<UpdateCustomer/>}></Route>
               

                <Route path='/Order' element={<OrdersList/>}></Route>
                <Route path='/addOrder' element={<AddOrder/>}></Route>
                <Route path='/updateOrder' element={<UpdateOrder/>}></Route>


        </Routes>

     
      </div>
      
        
    </div>
  );
};

export default App;
