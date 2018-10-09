import { Component } from 'react';
import medicineNew from './MedicineNew.jsx';
import Axios from 'axios';
import config from '../config/config';

class MedicineNew extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            medicineId: 0,
            medicine : {
                id :0 ,
                name : '',
                description : '',
                price :0
            }
        }
        let id = this.props.match.params.id;

        if(id!=='New' || id !=='List'|| isNaN(id)){
            
            this.loadMedicine(id);
            this.state.medicineId = parseInt(id,10);

            }
        else{
            this.setState({medicineId : 0});
        }
    }
    loadMedicine(id){
        if(id !== undefined)
        Axios.get(config.api+'medicines/'+ id).then(data => {
            this.setState({
              medicine: data.data[0]
            });
          });
    }
    onFormSubmit(e) {
        e.preventDefault();
        
        if(this.id!==0)
            this.updateMedicine();
        else this.insertMedicine();
    }
    onChangeIDHandle(e) {

        let medicine = this.state.medicine;
        medicine.id = e.target.value;
        this.setState({
            medicine: medicine
        });

    }
    onChangeNameHandle(e) {

        let medicine = this.state.medicine;
        medicine.name = e.target.value;
        this.setState({
            medicine: medicine
        });

    }
    onChangeDescriptionHandle(e) {

        let medicine = this.state.medicine;
        medicine.description = e.target.value;
        this.setState({
            medicine: medicine
        });

    }
    onChangePriceHandle(e) {

        let medicine = this.state.medicine;
        medicine.price = e.target.value;
        this.setState({
            medicine: medicine
        });

    }

    insertMedicine() {
        Axios.post(config.api+'medicines', this.state.medicine).then(data => {
            console.log(data);
            alert('Inserting data success');
            this.props.history.push('List');
        }).catch(error=>{
            alert('Insert' + error);
        }
        );
    }
    updateMedicine() {
        console.log(config.api+'medicines/'+this.state.medicineId);
        Axios.put(config.api+'medicines/'+this.state.medicineId, this.state.medicine).then(data => {
            console.log(data);
            alert('Updating data success');
            this.props.history.push('List');
        }).catch(error=>{
            alert(error);
        }
        );
    }
    render = medicineNew;
}

export default MedicineNew;
