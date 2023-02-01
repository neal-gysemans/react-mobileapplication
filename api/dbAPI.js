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

    static addWorker(worker) {
        return axios.post(baseUrl + "Worker");
    }

    static getLanguages() {
        return axios.get(baseUrl + "Language");
    }

    static getPermissions() {
        return axios.get(baseUrl + "Permission");
    }
    
    static async addFarm(farm) {
        try {
            const response = await axios.post(baseUrl + 'Farm', {
                "name": farm.name,
                "address": farm.address,
                "started": farm.started,
                "fieldOwnerID": farm.fieldOwnerID
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    static deleteFarm(id) {
        return axios.delete(baseUrl + "Farm/" + id);
    }

    static async addField(field) {
        console.log("field:", field);
        try {
            const response = await axios.post(baseUrl + 'Field', field);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    
    static async editField(id, fieldName) {
        console.log("field:", fieldName);
        try {
            const response = await axios.put(baseUrl + 'Field' + id, {"name": fieldName});
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    
}

export default dbAPI;
