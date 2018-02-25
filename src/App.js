import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div>
        <FilterableProductTable products={PRODUCTS} />
        <div>
         <p style={{height: '50px'}}>Prints out this usage information.</p>
        <img 
          className="fadein" alt="google"
          src="https://www.google.co.jp/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
        </div>
      </div>
    );
  }
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 
export default App;
