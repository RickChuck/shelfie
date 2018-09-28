import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import Header from './Component/Header/Header';
import Product from './Component/Product/Product';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    }
  }

handleImgInput(e) {
  this.setState({
    imageInput: e.target.value
  })
}
handleProductNum(e) {
  this.setState ({
    productNum: e.target.value
  })
}
handlePrice(e) {
  this.setState({
    price: e.target.value
  })
}
resetForm = (e) => {
  this.setState({e: this.delete})
}


  render() {
    return (
    <div className='App'>
      
       <div className='Header'>
       <h1>Shelfie</h1>
       </div> 
      <Form/>
      <Dashboard />
      <Header />
      <Product />
    </div>
    );
  }
}

export default App;

       
