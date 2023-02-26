import React from 'react';
import classes from './foodTypeTitle.module.css'
import breakfast_image from '../../assets/breakfast.png'

const FoodTypeTitle = () => {
    return ( 
        <div>
            <img src={breakfast_image}></img>
        </div>
     );
}
 
export default FoodTypeTitle;