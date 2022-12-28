import React, { Component } from 'react';
import axios from 'axios';

const CUSTOMER_LIST_API = "http://localhost:8087/api/v2/allcustomers";
const ADD_CUSTOMER_API = "http://localhost:8087/api/v2/addCustomers";
const UPDATE_CUSTOMER_API="http://localhost:8087/api/v2/updateCustomer/{id}";
const DELETE_CUSTOMER_API="http://localhost:8087/api/v2/customers/{customerId}";

class CustomerService {

    getCustomerList(){
        return axios.get(CUSTOMER_LIST_API);
    }

    addCustomer(customer){
        return axios.post(ADD_CUSTOMER_API, customer);
    }

    updateCustomer(customer){
        return axios.put(UPDATE_CUSTOMER_API, customer);
    }

    deleteCustomer(customerId){
        return axios.delete(DELETE_CUSTOMER_API, customerId);
    }
}

export default new CustomerService()