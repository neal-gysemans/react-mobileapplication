import axios from 'axios';
import configData from "../config/api.json";

const baseUrl = configData.database;

class dbAPI {
    static getWorkers() {
        return axios.get(baseUrl + "Worker");
    }

    static getWorkerDetails(id) {
        console.log('url:', baseUrl+"worker/"+id)
        return axios.get(baseUrl + "Worker/" + id);
    }

    static getFarms() {
        return axios.get(baseUrl + "Farm");
    }
    static getFarmDetails(id) {
        return axios.get(baseUrl + "Farm/" + id);
    }

    static getFieldOwners() {
        return axios.get(baseUrl + "FieldOwner");
    }
    
    static getFieldOwnerDetails(id) {
        return axios.get(baseUrl + "FieldOwner/" + id);
    }

    static getFarmFromFieldOwner(id) {
        return axios.get(baseUrl + "Farm/FieldOwner/" + id);
    }
}

export default dbAPI;
