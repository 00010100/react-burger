import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

export default class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('ordersummary will update')
  }
  
  render() {
    let ingredientSummary = Object.keys(this.props.ingredients).map((key) => (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{key}: </span>
        {this.props.ingredients[key]}
      </li>
    ));
  
    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to checkout?</p>
        <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
};
