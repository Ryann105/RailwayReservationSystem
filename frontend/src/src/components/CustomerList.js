import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'
import { Link } from "react-router-dom";
import axios from 'axios';

export default class CustomerList extends Component {
    
    constructor(props){
        super(props)
        this.state={
            customers:[]
        }

        this.addCustomer=this.addCustomer.bind(this);
        // this.updateCustomer=this.updateCustomer.bind(this);
        // this.deleteCustomer=this.deleteCustomer.bind(this);
    }

    

    componentDidMount(){
        CustomerService.getCustomerList().then((res)=>{
            this.setState({customers: res.data});
        });
    }

    addCustomer(){
        this.props.history.push('/addcustomer');
    }
    
    // updateCustomer(){
    //     this.props.history.push('/updatecustomer/{id}');
    // }


    // deleteCustomer(customerId){
    //     CustomerService.deleteCustomer(customerId).then( res => {
    //         this.setState({customers: this.state.customers.filter(customer => customer.customerId !== customerId)});
    //     });
    // }
    // loadUsers= async()=>
    // {
    //     const result =await axios.get("http://localhost:8087/api/v2/allcustomers");
    //     //console.log(result);
    //     setUser(result.data.reverse());//finalHook
    //     //data.reverse will reverse the data in the table
    // }

    //  deleteCustomer = async id=>
    // {
    //     await axios.delete(`http://localhost:3003/users/${id}`);
    //     loadUsers();
    // }
    //  deleteCustomer = async customerId=>{
    //    await  axios.delete("http://localhost:8087/api/v2/customers/{customerId}");
    // }
    // deleteCustomer(customerId){
    //     let data=this.state.customers;
    //     data=data.filter(i=> i.customerId !== customerId);
    //     this.setState({customers: data});

        // EmployeeService.deleteEmployee(id).then( res => {
        //     this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        // });

        // OrderService.deleteOrder(order).then(res =>{
        //     let data=this.state.orders;
        //     data=data.filter(i=> i.orderId !== order.orderId);
        //     this.setState({orders: data});
        // })
   
   // }
    render() {
        return (
            <div>
                <h2 className='text-center'>Customers List</h2>
                
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr style={{width:'1cm' }}>
                                <th>Customer Id</th>
                                <th>username</th>
                                <th>mobileNumber</th>
                                <th>Email</th>
                                <th>Address</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customers.map(
                                    customer =>
                                    <tr key = {customer.customerId}>
                                        <td>{customer.customerId}</td>
                                        <td>{customer.username}</td>
                                        <td>{customer.mobileNumber}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.address}</td>
                                        <td>
                                            <Link to='/Customer'>
                                            {/* <button onClick={()=>this.updateCustomer} className="btn btn-info">Update</button> */}
                                            </Link>
                                            <Link to='/Customer'> 
                                            {/* <button style={{marginLeft: "10px"}} onClick={() =>this.deleteCustomer(customer.customerId)} className="btn btn-danger">Delete </button> */}
                                            {/* <button style={{marginLeft:"10px"}} onClick={()=>this.deleteCustomer()} className="btn btn-danger">Delete</button> */}
                                             </Link> 
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className='row'>
                    <Link to='/addCustomer'>
                    <button className='btn btn-primary' onClick={this.addCustomer}> Add Customer</button>
                    </Link>
                    
                </div>
                </div>

            </div>
        )
    }
}