import axios from "axios";

const PLANTER_LIST_API = "http://localhost:8085/planter/allplanters";
const PLANTER_POST_API = "http://localhost:8085/planter/addplanters";
const PLANTER_GET_ID_API = "http://localhost:8085/planter/planters/{id}";
const UPDATE_PLANTER_API="http://localhost:8085/planter/updateplanter/{id}";
const DELETE_PLANTER_API="http://localhost:8085/planter/planters/{id}";

class PlanterService{
    getPlanterList(){
        return axios.get(PLANTER_LIST_API);
    }

    addPlanter(planter){
        return axios.post(PLANTER_POST_API, planter);
    }
    getPlanterId=planterId=>{
        return axios.get(PLANTER_GET_ID_API);
    }
    updatePlanter(planter){
        return axios.put(UPDATE_PLANTER_API,planter);
    }

    deleteCustomer(planterId){
        return axios.delete(DELETE_PLANTER_API, planterId);
    }
}

export default new PlanterService();