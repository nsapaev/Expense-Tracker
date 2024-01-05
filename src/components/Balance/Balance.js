import React from 'react';
import "./Balance.css"


const Balance = ({state}) => (
  <div className={"balance"}>
      <h5 className={"balance__title"}>Your balance</h5>
      <h1 className={"balance__value"}>${state.expense + state.income}</h1>
  </div>
);


export default Balance;
