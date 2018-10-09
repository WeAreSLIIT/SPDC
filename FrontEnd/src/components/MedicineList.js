import React, { Component } from 'react';
import medicineList from './MedicineList.jsx';
import axios from "axios";
import config from '../config/config' ;

class MedicineList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicines: []
    }
   
  }

  loadMedicineList() {
   axios.get(config.api+'medicines').then(data => {
      this.setState({
        medicines: data.data
      });
    });
    console.log(this.state.medicines);
  }

  onDelete(id){
    if(id){
      axios.delete(config.api+'medicines/'+id).then(data => {
        let medicines = this.state.medicines;
        let index = medicines.findIndex(x => x.id == id);
        medicines.splice(index, 1);
        this.setState({ medicines: medicines });
        alert(data);
      });
      
    }
  }
  onUpdate(id){
    
    this.props.history.push(''+id);
  }
  onView(id){

  }
  componentWillUnmount() {
    this.loadMedicineList();
  }

  componentDidMount() {
    this.loadMedicineList();
  }

  render = medicineList;
}


export default MedicineList;
