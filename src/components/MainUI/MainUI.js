import React from "react";
import FoodTileContainer from "../foodTypeTitle/FoodTileContainer";
import UpperNavBar from "../NavBar/UpperNavBar";
import OrderListOuter from "../OrderList/OrderListOuter";
import classes from "./MainUI.module.css"

const MainUI = () => {
    return ( 
        <div>
            <div className={classes.left}>
            <UpperNavBar />
            <div className={classes.FoodContent}>
                <OrderListOuter />
                <div className={classes.FoodCorner}>
                    <FoodTileContainer />
                </div>
                
            </div>
        </div>
        <div className={classes.right}></div>
        </div>
        
     );
}
 
export default MainUI;
<div>

</div>