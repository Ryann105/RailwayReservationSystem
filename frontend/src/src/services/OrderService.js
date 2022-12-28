import React, { Component } from 'react'
import axios from 'axios';

const ORDERS_LIST_API = "http://localhost:8084/api/v3/allorders";
const ADD_ORDER_API = "http://localhost:8084/api/v3/addOrders";
const UPDATE_ORDER_API="http://localhost:8084/api/v3/updateOrder";
const DELETE_ORDER_API="http://localhost:8084/api/v3/orders/{id}";

class OrderService {

    getOrdersList(){
        return axios.get(ORDERS_LIST_API);
    }

    addOrder(order){
        return axios.post(ADD_ORDER_API, order);
    }

    updateOrder(order,id){
        return axios.put(UPDATE_ORDER_API, id);
    }

    deleteOrder(order){
        return axios.delete(DELETE_ORDER_API, order);
    }
}

export default new OrderService()