import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import {Button, Form, Input} from 'semantic-ui-react';
import {Button, Form, Input} from 'semantic-ui-react';
import PlanterService from '../services/PlanterService';

export default class AddPlanter extends Component {
    constructor(props){
        super(props)
        this.state={
            planterId:'', 
             planterHeight:'',
            planterColor:'',
           planterShape:'',
           planterStock:'',
           planterCost:''

        }

        this.changeplanterIdHandler=this.changeplanterIdHandler.bind(this);
        this.changeplanterHeightHandler=this.changeplanterHeightHandler.bind(this);
        this.changeplanterColorHandler=this.changeplanterColorHandler.bind(this);
        this.changeplanterShapeHandler=this.changeplanterShapeHandler.bind(this);
        this.changeplanterStockHandler=this.changeplanterStockHandler.bind(this);
         this.changeplanterCostHandler=this.changeplanterCostHandler.bind(this);
    }

    changeplanterIdHandler=(e) => {
        this.setState({planterId: e.target.value});
    }

    changeplanterHeightHandler=(e) => {
        this.setState({planterHeight: e.target.value});
    }
    

    changeplanterColorHandler=(e) => {
        this.setState({planterColor: e.target.value});
    }

    changeplanterShapeHandler=(e) => {
        this.setState({planterShape: e.target.value});
    }
    changeplanterStockHandler=(e) => {
        this.setState({planterStock: e.target.value});
    }

    changeplanterCostHandler=(e) => {
        this.setState({planterCost: e.target.value});
    }

      

    savePlanter=(e) => {
        e.preventDefault();
        let planter = {planterId: this.state.planterId,planterHeight: this.state.planterHeight,  planterColor: this.state.planterColor, planterShape: this.state.planterShape,planterStock:this.state.planterStock,cost:this.state.cost};
        console.log('planter =>' + JSON.stringify(planter));

        PlanterService.addPlanter(planter).then(res =>{
            this.props.history.push('/planters');
        })
    }

    cancel(){
        this.props.history.push('/planters');
    }

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Add Plant</h3>
                    <div className='card-body'>
                    <form className="formClass">
                          
                            <div className='form-group'>
                                <label>planterHeight :</label>
                                <input 
                                   type='number'
                                    placeholder='planterHeight' 
                                    name='planterHeight'
                                    className='form-control' 
                                    value={this.state.planterHeight}
                                    onChange={this.changeplanterHeightHandler}/>
                            </div>
                          
                           
                            <div className='form-group'>
                                <label>planterColor :</label>
                                <input 
                                    placeholder='planterColor' 
                                    name='planterColor'
                                    className='form-control' 
                                    value={this.state.planterColor}
                                    onChange={this.changeplanterColorHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>planterShape:</label>
                                <input
                                    type='text' 
                                    placeholder=' planterShape' 
                                    name=' planterShape'
                                    className='form-control' 
                                    value={this.state.planterShape}
                                    onChange={this.changeplanterShapeHandler}/>
                            </div>

                            <div className='form-group'>
                                <label>planterStock:</label>
                                <input
                                    type='number' 
                                    placeholder='planterStock' 
                                    name='planterStock'
                                    className='form-control' 
                                    value={this.state.planterStock}
                                    onChange={this.changeplanterStockHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>planterCost :</label>
                                <input
                                    type='number' 
                                    placeholder='planterCost' 
                                    name='planterCost'
                                    className='form-control' 
                                    value={this.state.planterCost}
                                    onChange={this.changeplanterCostHandler}/>
                            </div>
                            <Link to='/Planter'>
                            <button className='btn btn-success' onClick={this.savePlanter.bind(this)}>Save</button>
                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


