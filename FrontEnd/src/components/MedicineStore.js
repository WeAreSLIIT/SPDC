import { Component } from 'react';
import medicineStore from './MedicineStore.jsx';
import axios from "axios";
import config from '../config/config' ;
import './MedicineStore.css';

class MedicineStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicines: []
    }
   
  }

  loadMedicineList() {
   axios.get(config.api+'medicines').then(data => {
     this.setState({medicines:data.data});
    });

  }

  onDelete(id){
    if(id){
      axios.delete(config.api+'medicines/'+id).then(data => {
        let medicines = this.state.medicines;
        let index = medicines.findIndex(x => x.id === id);
        medicines.splice(index, 1);
        this.setState({ medicines: medicines });
        alert(`${data.data.id} - ${data.data.name} Deleted!`);
      });
      
    }
  }
  onUpdate(id){
    
    this.props.history.push(''+id);
  }
  onView(){

  }
  componentWillUnmount() {
    //this.loadMedicineList();
  }

  componentDidMount() {
    this.loadMedicineList();
  }

  render = medicineStore;
}


export default MedicineStore; 
