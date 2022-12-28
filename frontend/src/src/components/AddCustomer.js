import React, { Component } from 'react'
import { Link } from "react-router-dom";
import CustomerService from '../services/CustomerService';

export default class AddCustomer extends Component {
    constructor(props){
        super(props)
        this.state={
            customerId:'',
            username:'',
            mobileNumber:'',
            email:'',
            address:''

        }

        this.changeCustomerIdHandler=this.changeCustomerIdHandler.bind(this);
        this.changeusernameHandler=this.changeusernameHandler.bind(this);
        this.changeMobileNumberHandler=this.changeMobileNumberHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
    }

    changeCustomerIdHandler=(e) => {
        this.setState({customerId: e.target.value});
    }

    changeusernameHandler=(e) => {
        this.setState({username: e.target.value});
    }
    

    changeMobileNumberHandler=(e) => {
        this.setState({mobileNumber: e.target.value});
    }

    changeEmailHandler=(e) => {
        this.setState({email: e.target.value});
    }

    changeAddressHandler=(e) => {
        this.setState({address: e.target.value});
    }

    saveCustomer=(e) => {
        e.preventDefault();
        let customer = {customerId: this.state.customerId, username: this.state.username,  mobileNumber: this.state.mobileNumber, email: this.state.email,address:this.state.address};
        console.log('customer =>' + JSON.stringify(customer));

        CustomerService.addCustomer(customer).then(res =>{
            this.props.history.push('/customers');
        })
    }

    cancel(){
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Add Customer</h3>
                    <div className='card-body'>
                    <form className="formClass">
                            <div className='form-group'>
                                <label>Customer Id :</label>
                                <input 
                                    placeholder='Customer Id' 
                                    name='customerId'
                                    className='form-control' 
                                    value={this.state.customerId}
                                    onChange={this.changeCustomerIdHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>username :</label>
                                <input 
                                   type='text'
                                    placeholder='username' 
                                    name='username'
                                    className='form-control' 
                                    value={this.state.username}
                                    onChange={this.changeusernameHandler}/>
                            </div>
                          
                           
                            <div className='form-group'>
                                <label>mobileNumber :</label>
                                <input 
                                    placeholder='mobileNumber' 
                                    name='mobileNumber'
                                    className='form-control' 
                                    value={this.state.mobileNumber}
                                    onChange={this.changeMobileNumberHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>Email :</label>
                                <input
                                    type='text' 
                                    placeholder='Email' 
                                    name='email'
                                    className='form-control' 
                                    value={this.state.email}
                                    onChange={this.changeEmailHandler}/>
                            </div>

                            <div className='form-group'>
                                <label>Address :</label>
                                <input
                                    type='text' 
                                    placeholder='Address' 
                                    name='address'
                                    className='form-control' 
                                    value={this.state.address}
                                    onChange={this.changeAddressHandler}/>
                            </div>
                            <Link to='/Customer'>
                            <button className='btn btn-success' onClick={this.saveCustomer.bind(this)}>Save</button>
                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}