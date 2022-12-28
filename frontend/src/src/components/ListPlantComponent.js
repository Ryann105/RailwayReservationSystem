import React, { Component } from 'react';
import PlantService from '../services/PlantService';
import {Link } from "react-router-dom";


export default class ListPlantComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            plants:[]
        }

        this.addPlant=this.addPlant.bind(this);
        // this.updatePlant=this.updatePlant.bind(this);
        // this.deletePlant=this.deletePlant.bind(this);
    }

    

    componentDidMount(){
        PlantService.getPlantList().then((res)=>{
            this.setState({plants: res.data});
        });
    }

    addPlant(){
        this.props.history.push('/addPlant');
    }
    
    // updatePlant(){
    //     this.props.history.push('/updatePlant');
    // }


    // deletePlant(plantId){
    //     PlantService.deletePlant(plantId).then( res => {
    //         this.setState({plants: this.state.plants.filter(plant => plant.plantId !== plantId)});
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
                <h2 className='text-center'>Plant List</h2>
                
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr style={{width:'1cm' }}>
                                <th>PlantId</th>
                                <th>commonName</th>
                                <th>typeOfPlant</th>
                                <th>plantDescription</th>
                                <th>plantsStock</th>
                                <th>cost</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.plants.map(
                                    plant =>
                                    <tr key = {plant.plantId}>
                                        <td>{plant.plantId}</td>
                                        <td>{plant.commonName}</td>
                                        <td>{plant.typeOfPlant}</td>
                                        <td>{plant.plantDescription}</td>
                                        <td>{plant.plantsStock}</td>
                                        <td>{plant.cost}</td>
                                        <td>
                                             <Link to='/Plant'>
                                            {/* <button onClick={()=>this.updatePlant} className="btn btn-info">Update</button> */}
                                            </Link>
                                            <Link to='/Plant'> 
                                            {/* <Button onClick={this.deletePlant(this.plantId)}> <i class="bi-trash"></i></Button> */}
                                            {/* <button style={{marginLeft: "10px"}} onClick={() =>this.deletePlant(plant.plantId)} ><i class="bi-trash"></i>Delete </button> */}
                                            {/* <button style={{marginLeft:"10px"}} onClick={()=>this.deleteCustomer()} className="btn btn-danger">Delete</button> */}
                                             </Link>  
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className='row'>
                    <Link to='/addPlant'>
                    <button className='btn btn-primary' onClick={this.addPlant}> Add Plant</button>
                    </Link>
                    
                </div>
                </div>

            </div>
        )
    }
}
