import React, { Component } from 'react'
import OrderService from '../services/OrderService'
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class OrdersList extends Component {
    constructor(props){
        super(props)
        this.state={
            orders:[]
        }

        this.addOrder=this.addOrder.bind(this);
        // this.updateOrder=this.updateOrder.bind(this);
        // this.deleteOrder=this.deleteOrder.bind(this);
   }

    

    componentDidMount(){
        OrderService.getOrdersList().then((res)=>{
            this.setState({orders: res.data});
        });
    }

    addOrder(){
        this.props.history.push('/addOrder');
       // axios.post("http://localhost:9091/addOrder",order.orderId, order.orderdate,order.orderStatus)
    }
    
    // updateOrder(){
    //     this.props.history.push('/updateOrder');
    // }

    // deleteOrder(order){
    //     let data=this.state.orders;
    //     data=data.filter(i=> i.orderId !== order.orderId);
    //     this.setState({orders: data});
    // }
    
    render() {
        return (
            <div>
                <h2 className='text-center'>Orders List</h2>
                
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>OrderId</th>
                                <th>Order Date</th>
                                {/* <th>CartId_Fk</th> */}
                                <th>TransactionMode</th>
                                <th>totalCost</th>
                                <th>quantity</th>
                                {/* <th>Actions</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.orders.map(
                                    order =>
                                    <tr key = {order.orderId}>
                                        <td>{order.orderId}</td>
                                        <td>{order.orderDate}</td>
                                        {/* <td>{order.cartId_Fk}</td> */}
                                        <td>{order.transactionMode}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.totalCost}</td>
                                        <td>
                                            <Link to='/updateOrder'>
                                            {/* <button onClick={()=>this.updateOrder} className="btn btn-info">Update</button> */}
                                            </Link>
                                            <Link to='/orders'>
                                            {/* <button style={{marginLeft:"10px"}} onClick={()=>this.deleteOrder(order)} className="btn btn-danger">Delete</button> */}
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className='row'>
                    <Link to='/addOrder'>
                    <button className='btn btn-primary' onClick={this.addOrder}> Add Order</button>
                    </Link>
                    
                </div>
                </div>

            </div>
        )
    }
}