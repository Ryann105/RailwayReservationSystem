import React, { Component } from 'react';
import PlanterService from '../services/PlanterService';
import {Link } from "react-router-dom";


export default class ListPlanter extends Component {
    constructor(props){
        super(props)
        this.state={
            planters:[]
        }

        this.addPlanter=this.addPlanter.bind(this);
        // this.updatePlanter=this.updatePlanter.bind(this);
        // this.deletePlanter=this.deletePlanter.bind(this);
    }

    

    componentDidMount(){
        PlanterService.getPlanterList().then((res)=>{
            this.setState({planters: res.data});
        });
    }

    addPlanter(){
        this.props.history.push('/addPlanter');
    }
    
    // updatePlanter(){
    //     this.props.history.push('/updatePlanter');
    // }


    // deletePlanter(planterId){
    //     PlanterService.deletePlanter(planterId).then( res => {
    //         this.setState({planters: this.state.planters.filter(planter => planter.planterId !== planterId)});
    //     });
    // }
    // deleteCustomer(cust){
    //     let data=this.state.customers;
    //     data=data.filter(i=> i.customerId !== cust.customerId);
    //     this.setState({customers: data});

        // EmployeeService.deleteEmployee(id).then( res => {
        //     this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        // });

        // OrderService.deleteOrder(order).then(res =>{
        //     let data=this.state.orders;
        //     data=data.filter(i=> i.orderId !== order.orderId);
        //     this.setState({orders: data});
        // })
    //}
    
    render() {
        return (
            <div>
                <h2 className='text-center'>Planter List</h2>
                
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr style={{width:'1cm' }}>
                                <th>PlanterId</th>
                                <th>planterHeight</th>
                                <th>planterShape</th>
                                <th>planterColor</th>
                                <th>planterStock</th>
                                <th>planterCost</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.planters.map(
                                    planter =>
                                    <tr key = {planter.planterId}>
                                        <td>{planter.planterId}</td>
                                        <td>{planter.planterHeight}</td>
                                        <td>{planter.planterColor}</td>
                                        <td>{planter.planterShape}</td>
                                        <td>{planter.planterStock}</td>
                                        <td>{planter.planterCost}</td>
                                        <td>
                                            <Link to='/Planter'>
                                            {/* <button onClick={()=>this.updatePlanter} className="btn btn-info">Update</button> */}
                                            </Link>
                                            <Link to='/Planter'> 
                                            {/* <Button onClick={this.deletePlant(this.plantId)}> <i class="bi-trash"></i></Button> */}
                                            {/* <button style={{marginLeft: "10px"}} onClick={() =>this.deletePlanter(planter.planterId)} ><i class="bi-trash"></i>Delete </button> */}
                                            {/* <button style={{marginLeft:"10px"}} onClick={()=>this.deleteCustomer()} className="btn btn-danger">Delete</button> */}
                                             </Link> 
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className='row'>
                    <Link to='/addPlanter'>
                    <button className='btn btn-primary' onClick={this.addPlanter}> Add Planter</button>
                    </Link>
                    
                </div>
                </div>

            </div>
        )
    }
}
