import React from 'react';

function GoodsFunc(props) {
  const { name, description, price, amount } = props;
  return (
    <article>
      <h1>{name || 'Name of Product'}</h1>
      <ul>
        <li>Description: {description || 'Absent'}</li>
        <li>Price: {price || 'Absent'}</li>
        <li>Product is {amount > 0 ? 'in' : 'out of'} stock</li>
      </ul>
    </article>
  );
}

export default GoodsFunc;
