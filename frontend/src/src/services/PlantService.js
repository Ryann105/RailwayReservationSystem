import axios from "axios";

const PLANT_LIST_API = "http://localhost:8086/plant/allplants";
const PLANT_POST_API = "http://localhost:8086/plant/addplants";
const PLANT_GET_ID_API = "http://localhost:8086/plant/plants/{plantId}";
// const UPDATE_PLANT_API="http://localhost:8086/plant/updatePlant/{id}";
// const DELETE_PLANT_API="http://localhost:8086/plant/deleteplants/{id}";

class PlantService{
    getPlantList(){
        return axios.get(PLANT_LIST_API);
    }

    addPlant(plant){
        return axios.post(PLANT_POST_API, plant);
    }
    getPlantId=plantId=>{
        return axios.get(PLANT_GET_ID_API);
    }
    // updatePlant(plant){
    //     return axios.put(UPDATE_PLANT_API,plant);
    // }

    // deletePlant(plantId){
    //     return axios.delete(DELETE_PLANT_API, plantId);
    // }
}

export default new PlantService();