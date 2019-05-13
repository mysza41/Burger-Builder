import React from 'react';
import Auxiliary from "../../../../hoc/Auxiliary";
import Button from "../../../UI/Button/Button";

const orderSummary = (props) => {
    const ingredientSummary =Object.keys(props.ingredients)
        .map(igKey => {
            return  <li key={igKey}>
                        <span style={{textTransform: 'cspitalize'}}>{igKey}: {props.ingredients[igKey]}</span>
                    </li>
        });
    return(
        <Auxiliary>
            <h3>Your order</h3>
            <p>Burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button
                btnType="Danger"
                clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button
                btnType="Success"
                clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxiliary>
    )


};

export default orderSummary;