import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const DeleteCustomer=()=>
{
    const [customers,setCustomers] =useState([]);
    //initial hook with no data

    useEffect(()=>{
        console.log("Kaisa hai bro");
        //calling loadUsers here
        loadCustomers(); //this will print data in he console
    },[]);

    const loadCustomers= async()=>
    {
        const result =await axios.get("http://localhost:8087/api/v2/allcustomers");
        //console.log(result);
        setCustomer(result.data.reverse());//finalHook 
        //data.reverse will reverse the data in the table
    }
    //this async function will make the awiat function to take the result untill updated
    const deleteCustomer = async customerId=>
    {
        await axios.delete(`http://localhost:8087/api/v2/customers/{customerId}`);
        loadCustomers();
    }
    return (
        <div className="container">
            <div className="py-4">
            <h1>Home Page</h1>
            <table class="table caption-top border shadow">
                <caption>List of users</caption>
                    <thead style={{backgroundColor:"darkslategrey",color:"white"}}>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>{/***Loop to load data */}
        {
            customers.map((customer,index)=>
            (   //here use paranthesis
                <tr>
                    <th scope="row">{index+1}</th>
          
                    <td>{customer.mobileNumber}</td>
                    <td>{customer.username}</td>
                    <td>{customer.email}</td>
                    <td>{customer.address}</td>
                    <td>
                        {/* <Link className="btn btn-primary mr-2" to={`/view/${user.id}`}>View</Link>
                        {/**View has per id */}
                        {/* <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link> */} 
                        <Link className="btn btn-danger mr-2" onClick={()=>deleteCustomer(customer.customerId)}>Delete</Link>
                    </td>
                </tr>
            ))
        }
  </tbody>
</table>
            </div>
        </div>
    );
}
export default DeleteCustomer;