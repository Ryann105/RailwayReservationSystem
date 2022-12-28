import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { Link } from "react-router-dom";
const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      
      <header className="jumbotron">
        <h3>{content}</h3>
        {/* <nav > */}

        
        <nav class="navbar navbar-expand-lg navbar-light bg-black py-3 shadow-sm">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
              <Link to="/plant">
                <a class="nav-link active" aria-current="page" href="#">Plant</a>
                {/* <NavLink activeClassName="active" to="/ListPlantComponent">Plant</NavLink> */}
                </Link>
              </li>
              </ul>
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
    
        <li class="nav-item">
              <Link to="/customer">
                <a class="nav-link active" aria-current="page" href="#">Customer</a>
                </Link>
              </li>
              </ul> 

              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
    
    <li class="nav-item">
          <Link to="/planter">
            <a class="nav-link active" aria-current="page" href="#">Planter</a>
            </Link>
          </li>
          </ul> 
             
        </nav>
      </header>
    </div>
  );
};

export default BoardAdmin;
