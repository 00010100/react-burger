import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformIngredients = Object.keys(props.ingredients).map((key) =>
    [...Array(props.ingredients[key])].map((_, i) => <BurgerIngredient key={key + i} type={key} />)
  ).reduce((arr, el) => arr.concat(el), []);

  console.log(transformIngredients)

  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
