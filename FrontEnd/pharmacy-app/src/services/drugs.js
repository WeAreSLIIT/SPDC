import axios from 'axios';
import config from "../config/config";

class drugsService {

    constructor () {

    }

     getAllDrugs(){

        return new Promise((resolve , reject)=>{

            axios.get(config.api).then((data)=>{
                
                 resolve(data);
            
            }).catch((error)=>{

                reject (error)
            });
        });
    }

    getDrugByID(id){

        return new Promise((resolve , reject)=>{

            axios.get(config.api +`/${id}`).then((data)=>{
                
                resolve(data);

            }).catch((error)=>{

                reject (error)
            });
        });
    }

    deleteDrugByID(id){

        return new Promise((resolve , reject)=>{

            axios.delete(config.api +`/${id}`).then((data)=>{
                
                resolve(data);

            }).catch((error)=>{

                reject (error)
            });
        });
    }

    insertNewDrug(drug){

        return new Promise((resolve , reject)=>{

            axios.post(config.api,drug).then((data)=>{
                
                resolve(data);

            }).catch((error)=>{

                reject (error)
            });
        });
    }

    updateDrugByID(id,drug){

        return new Promise((resolve , reject)=>{

            axios.delete(config.api +`/${id}`,drug).then((data)=>{
                
                resolve(data);

            }).catch((error)=>{

                reject (error)
            });
        });
    }

}

export default drugsService;