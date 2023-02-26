import React from "react";
import classes from './FoodTileContainer.module.css';
import FoodTypeTitle from "./foodTypeTitle";

const FoodTileContainer = () => {
    return ( 
        <div className={classes.container}>
            <FoodTypeTitle heading="Breakfast" image="breakfast"/>
            <FoodTypeTitle heading="Lunch"/>
            <FoodTypeTitle heading="Dinner"/>
            <FoodTypeTitle heading="Drinks"/>
            <FoodTypeTitle heading="Desserts"/>
            <FoodTypeTitle heading="Soup"/>
        </div>
        
     );
}
 
export default FoodTileContainer;