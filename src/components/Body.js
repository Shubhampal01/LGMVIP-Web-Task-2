import React, { useState } from "react";
import UserCard from "./UserCard";
import Spinner from "./Spinner";
import axios from "axios";
import Header from './Header';


function Body() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserData = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiUrl = "https://reqres.in/api/users?page=1";
      const response = await axios.get(apiUrl);
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
    setLoading(false);
  };

  return (
    <>
    <div className="sticky-top">
    <Header />
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
    
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li style={{color:"white" ,fontSize:"20px"}}> Home </li>
        
            </ul>
            <form className="d-flex" role="search">
              <button
                className="btn btn-success"
                onClick={fetchUserData}
                type="submit"
              >
                Get Users Data
              </button>
            </form>

        </div>
      </nav>
      </div>
      {loading && <Spinner />}
      <div className="container">
        <div className="row">
          {users.map((user) => (
            <div className="col-md-3" key={user.id}>
              <UserCard
                email={user.email}
                firstName={user.first_name}
                lastName={user.last_name}
                avatar={user.avatar}
              />
            </div>
          ))}
        </div>
      </div>
    
    </>
  );
}

export default Body;
