import React,{ Component } from 'react';
import medicineStore from './MedicineStore.jsx';
import axios from "axios";
import config from '../config/config' ;
import './MedicineStore.css';

class MedicineStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty:[],
      modal: false,
      medicines: [],
      cart:[],
      amount: 0
    }

    this.qty = React.createRef();
    this.toggle = this.toggle.bind(this);
   
  }  
      
  addToCart(id,e){
    e.preventDefault();
    let item = {
      id : id,
      qty : parseInt( this.state.qty[id],10)
    }
    let cart = this.state.cart;
    let index = cart.map(i=>i.id).indexOf(item.id);
    if(index>-1){
      cart[index].qty += item.qty;
    }
    else 
      cart.push(item);
    this.setState({cart : cart})
    this.calculateTotal();
    console.log(this.state.cart);
  }

  onHandleQty(id,e){
    let qtys= this.state.qty;
    qtys[id] = e.target.value;
    this.setState({qty:qtys});
  }
  calculateTotal(){
    let amount=0;
    this.state.cart.map(i=>amount+=(i.qty*parseFloat(this.state.medicines.filter(m=>m.id===i.id)[0].price,10)));
    this.setState({
      amount:amount
    });
  }
  toggle() {
    
    this.setState({
      modal: !this.state.modal
    });
  }

  loadMedicineList() {
   axios.get(config.api+'medicines').then(data => {
     this.setState({medicines:data.data});
    });

  }

  onDelete(id){
    if(id){
        let cart = this.state.cart;
        let index = cart.findIndex(x => x.id === id);
        cart.splice(index, 1);
        this.setState({ cart: cart });
        this.calculateTotal();
    }
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
