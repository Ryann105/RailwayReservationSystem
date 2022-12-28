import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import {Button, Form, Input} from 'semantic-ui-react';
import {Button, Form, Input} from 'semantic-ui-react';
import PlantService from '../services/PlantService';

export default class AddPlantComponent extends Component {
    constructor(props){
        super(props)
        this.state={
           plantId:'',
          commonName : '',
          typeOfPlant:'',
          plantDescription:'',
          plantsStock:'',
           cost:''
    

        }

        this.changePlantIdHandler=this.changePlantIdHandler.bind(this);
        this.changecommonNameHandler=this.changecommonNameHandler.bind(this);
        this.changetypeOfPlantHandler=this.changetypeOfPlantHandler.bind(this);
        this.changePlantDescriptionHandler=this.changePlantDescriptionHandler.bind(this);
        this.changePlantsStockHandler=this.changePlantsStockHandler.bind(this);
         this.changecostHandler=this.changecostHandler.bind(this);
    }

    changePlantIdHandler=(e) => {
        this.setState({plantId: e.target.value});
    }

    changecommonNameHandler=(e) => {
        this.setState({commonName: e.target.value});
    }
    

    changetypeOfPlantHandler=(e) => {
        this.setState({typeOfPlant: e.target.value});
    }

    changePlantDescriptionHandler=(e) => {
        this.setState({plantDescription: e.target.value});
    }

    changePlantsStockHandler=(e) => {
        this.setState({plantsStock: e.target.value});
    }

      changecostHandler=(e) => {
        this.setState({cost: e.target.value});
    }

    savePlant=(e) => {
        e.preventDefault();
        let plant = {plantId: this.state.plantId,commonName: this.state.commonName,  typeOfPlant: this.state.typeOfPlant, plantDescription: this.state.plantDescription,plantsStock:this.state.plantsStock,cost:this.state.cost};
        console.log('plant =>' + JSON.stringify(plant));

        PlantService.addPlant(plant).then(res =>{
            this.props.history.push('/plants');
        })
    }

    cancel(){
        this.props.history.push('/plants');
    }

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Add Plant</h3>
                    <div className='card-body'>
                    <form className="formClass">
                        
                            <div className='form-group'>
                                <label>commonName :</label>
                                <input 
                                   type='text'
                                    placeholder='commonName' 
                                    name='commonName'
                                    className='form-control' 
                                    value={this.state.commonName}
                                    onChange={this.changecommonNameHandler}/>
                            </div>
                          
                           
                            <div className='form-group'>
                                <label>typeOfPlant :</label>
                                <input 
                                    placeholder='typeOfPlant' 
                                    name='typeOfPlant'
                                    className='form-control' 
                                    value={this.state.mobileNumber}
                                    onChange={this.changetypeOfPlantHandler}/>
                            </div>
                            <div className='form-group'>
                                <label> plantDescription:</label>
                                <input
                                    type='text' 
                                    placeholder=' plantDescription' 
                                    name=' plantDescription'
                                    className='form-control' 
                                    value={this.state. plantDescription}
                                    onChange={this.changePlantDescriptionHandler}/>
                            </div>

                            <div className='form-group'>
                                <label>plantsStock :</label>
                                <input
                                    type='number' 
                                    placeholder='plantsStock' 
                                    name='plantsStock'
                                    className='form-control' 
                                    value={this.state.plantsStock}
                                    onChange={this.changePlantsStockHandler}/>
                            </div>
                            <div className='form-group'>
                                <label>Cost :</label>
                                <input
                                    type='number' 
                                    placeholder='Cost' 
                                    name='Cost'
                                    className='form-control' 
                                    value={this.state.cost}
                                    onChange={this.changecostHandler}/>
                            </div>
                            <Link to='/Plant'>
                            <button className='btn btn-success' onClick={this.savePlant.bind(this)}>Save</button>
                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


