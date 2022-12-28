import React, { useState,useEffect } from 'react';
import axios from 'axios';



function GetByPlantId () {
    const [input, setInput] = useState();
    const [plants, setPlants] =  useState([]);

    const changeInputHandler = (e) => {
        setInput(e.target.value);
        console.log(input);
    };

    const clickHandler = () => {
        axios
        .get(`http://localhost:8086/plant/plants${input}`)
        .then((data) =>{
            setPlants(data.data);
        })
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        axios
        .get(`http://localhost:8086/plant/plants/3500`)
        .then((data) =>{
            setPlants(data.data);
        })
        .catch((error) => console.log(error));
      },[]);
    console.log(plants);

    return (
        <div className='App'>
            <div>
                <h3>Get Plant by Id</h3>
                <input type="text" onChange={changeInputHandler} />
                <button onClick={clickHandler}>Search Plant</button>
                { plants && (
                    <div>
                               <p>plantId:{plants.plantId}</p>
                               <p>commonName:{plants.commonName}</p>                              
                               <p>typeOfPlant:{plants.typeOfPlant}</p>
                               <p>plantDescription:{plants.plantDescription}</p>
                               <p>plantsStock:{plants.plantsStock}</p>
                               <p>cost:{plants.cost}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GetByPlantId