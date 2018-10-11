import React, { Component } from 'react';
import medicineStore from './MedicineStore.jsx';
import axios from "axios";
import config from '../config/config';
import './MedicineStore.css';

class MedicineStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('username') || 'demo',
      status: 'Pending',
      qty: [],
      modal: false,
      medicines: [],
      cart: [],
      amount: 0
    }

    this.qty = React.createRef();
    this.toggle = this.toggle.bind(this);
  }


  addToCart(id, e) {
    e.preventDefault();
    let item = {
      id: id,
      qty: parseInt(this.state.qty[id], 10)
    }
    let cart = this.state.cart;
    let index = cart.map(i => i.id).indexOf(item.id);
    if (index > -1) {
      cart[index].qty += item.qty;
    }
    else
      cart.push(item);
    this.setState({ cart: cart })
    this.calculateTotal();
    console.log(this.state.cart);
  }

  onToken = (token) => {
    if (token) {
      axios.post(config.api + 'orders/paid/' + this.state.username, token).then(data => {
        this.setState({
          cart: [],
          amount: 0
        });
        this.toggle();
      });
    }
  }

  saveOrder() {
    if (this.state.cart.length > 0) {
      let order = {
        username: this.state.username,
        amount: this.state.amount,
        status: this.state.status,
        medicines: this.state.cart
      }
      axios.post(config.api + 'orders', order).then(data => {
        console.log(data.data);
        alert('Inserting order success');
      }).catch(error => {
        alert('Insert Order ' + error);
      }
      );

      console.log(order)
    }
  }

  onHandleQty(id, e) {
    let qtys = this.state.qty;
    qtys[id] = e.target.value;
    this.setState({ qty: qtys });
  }
  calculateTotal() {
    let amount = 0;
    this.state.cart.map(i => amount += (i.qty * parseFloat(this.state.medicines.filter(m => m.id === i.id)[0].price, 10)));
    this.setState({
      amount: amount
    });
  }
  toggle() {

    this.setState({
      modal: !this.state.modal
    });
  }

  loadMedicineList() {
    return new Promise((resolve)=>{
      axios.get(config.api + 'medicines').then(data => {
        this.setState({ medicines: data.data });
        resolve();
      });
    }); 
  }

  loadCart() {
    if (this.state.username) {
      axios.get(config.api + 'orders/username/' + this.state.username).then(data => {
        if (data) {
          console.log(data);
          this.setState({
            status: data.data.status || 'Pending',
            amount: data.data.amount || 0,
            cart: data.data.medicines || []
          });
        }
      });
    }
  }

  onDelete(id) {
    if (id) {
      let cart = this.state.cart;
      let index = cart.findIndex(x => x.id === id);
      cart.splice(index, 1);
      this.setState({ cart: cart });
      this.calculateTotal();
    }
  }

  onView() {

  }
  componentWillUnmount() {
    this.loadMedicineList().then(()=>{
      this.loadCart();
    });
    
  }

  componentDidMount() {
    this.loadMedicineList().then(()=>{
      this.loadCart();
    });
  }

  render = medicineStore;
}


export default MedicineStore; 
