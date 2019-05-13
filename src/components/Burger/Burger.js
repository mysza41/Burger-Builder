import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from "./BurgerIngredient/BurgerIngredient";


const burger = (props) => {
    let transformedIngredeints = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredients key={ingKey + i} type={ingKey}/>;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if(transformedIngredeints.length === 0){
        transformedIngredeints = <p>Please strat adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
             <BurgerIngredients type="bread-top"/>
             {transformedIngredeints}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
};

export default burger;