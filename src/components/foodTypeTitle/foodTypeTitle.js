import React from 'react';
import classes from './foodTypeTitle.module.css'
import breakfast_image from '../../assets/breakfast.png'

const FoodTypeTitle = () => {
    return ( 
        <div className={classes.outer}>
            <img className={classes.breakfast_img} src={breakfast_image}></img>
            <div className={classes.titleHolder}>
                <span className={classes.mainTitle}>Breackfast</span>
                <span className={classes.subTitle}>13 Items</span></div>
            
        </div>
     );
}
 
export default FoodTypeTitle;