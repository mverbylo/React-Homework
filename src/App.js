import React from 'react';
import './App.css';
import GoodsFunc from './components/GoodsFunc';
import GoodsClass from './components/GoodsClass';

const tv = {
  name: 'Super TV',
  description: 'Super TV description',
  price: 1000,
  amount: 100,
};
const phone = {
  name: 'Super phone',
  description: 'Super phone description',
  price: 500,
  amount: 0,
};

function App() {
  return (
    <>
      <GoodsFunc
        name={tv.name}
        description={tv.description}
        price={tv.price}
        amount={tv.amount}
      />
      <GoodsFunc
        name={phone.name}
        description={phone.description}
        price={phone.price}
        amount={phone.amount}
      />
      <GoodsFunc />
      <GoodsClass
        name={tv.name}
        description={tv.description}
        price={tv.price}
        amount={tv.amount}
      />
      <GoodsClass
        name={phone.name}
        description={phone.description}
        price={phone.price}
        amount={phone.amount}
      />
      <GoodsClass />
    </>
  );
}

export default App;
