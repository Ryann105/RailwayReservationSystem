/* eslint-disable no-undef */
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import OrderService from '../services/OrderService';

export default class UpdateOrder extends Component {
    constructor(props){
        super(props)
        this.state={
            orderId:'',
            orderdate:'',
            transactionMode:'',
            quantity:'',
            totalCost:''
        }

        this.changeOrderIdHandler=this.changeOrderIdHandler.bind(this);
        this.changeOrderdateHandler=this.changeOrderdateHandler.bind(this);
        this.changeTransactionModeHandler=this.changeTransactionModeHandler.bind(this);
        this.changeQuantityHandler=this.changeQuantityHandler.bind(this);
        this.changeTotalCostHandler=this.changeTotalCostHandler.bind(this);
       
    }

    componentDidMount(){
        OrderService.updateOrder(this.order).then((res)=>{
            let order = res.data;
            this.setState({orderId: order.orderId,
                        orderdate: order.orderdate,
                        transactionMode: order.transactionMode,
                    quantity:order.quantity,
                    totalCost:order.totalCost
                }
                        );
        });
    }

    changeOrderIdHandler=(e) => {
        this.setState({orderId: e.target.value});
    }

    changeOrderdateHandler=(e) => {
        this.setState({orderdate: e.target.value});
    }

    changeTransactionModeHandler=(e) => {
        this.setState({transactionMode: e.target.value});
    }

    changeQuantityHandler=(e) => {
        this.setState({quantity: e.target.value});
    }

    changeTotalCostHandler=(e) => {
        this.setState({totalCost: e.target.value});
    }


    updateOrder=(e) => {
        e.preventDefault();
        let order = {orderId: this.state.orderId, orderdate: this.state.orderdate, transactionMode: this.state.transactionMode,quantity:this.state.quantity,totalCost:this.state.totalCost};
        console.log('order =>' + JSON.stringify(order));

        OrderService.updateOrder(order).then(res =>{
            this.props.history.push('/addOrder');
        })

        // OrderService.updateOrder(order).then(res=>{
        //     this.props.history.push('/orders');
        // })

    }

    cancel(){
        this.props.history.push('/');
    }

    

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Update Order</h3>
                    <div className='card-body'>
                        <form className="formClass">
                            <div className='form-group'>
                                <label>Order Id :</label>
                                <input 
                                    placeholder='Order Id' 
                                    name='orderId'
                                    className='form-control' 
                                    value={this.state.orderId}
                                    onChange={this.changeOrderIdHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>Order Date :</label>
                                <input 
                                    type='date'
                                    placeholder='Order Date' 
                                    name='orderdate'
                                    className='form-control' 
                                    value={this.state.orderdate}
                                    onChange={this.changeOrderdateHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>transactionMode :</label>
                                <input
                                    type='text' 
                                    placeholder='transactionMode' 
                                    name='transactionMode'
                                    className='form-control' 
                                    value={this.state.transactionMode}
                                    onChange={this.changeTransactionModeHandler}/>
                            </div>

                            <div className='form-group'>
                                <label> quantity:</label>
                                <input
                                    type='number' 
                                    placeholder='quantity' 
                                    name='quantity'
                                    className='form-control' 
                                    value={this.state.quantity}
                                    onChange={this.changeQuantityHandler}/>
                            </div>

                            <div className='form-group'>
                                <label> totalCost:</label>
                                <input
                                    type='number' 
                                    placeholder='totalCost' 
                                    name='totalCost'
                                    className='form-control' 
                                    value={this.state.totalCost}
                                    onChange={this.changeTotalCostHandler}/>
                            </div>
                            <Link to='/orders'>
                            <button className='btn btn-success' onClick={this.updateOrder}>Save</button>
                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}