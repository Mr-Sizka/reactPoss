import React from "react";
import BillContainer from "../Bill/billContainer";
import CustomerDetails from "../Bill/CutomerDetails/CustomerDetails";
import ItemRawContainer from "../Bill/ItemRawContainer/ItemRawContainer";
import Payment from "../Bill/Payment/Payment";
import FoodItemContainer from "../FoodItems/FoodItemContainer";
import FoodTileContainer from "../foodTypeTitle/FoodTileContainer";
import UpperNavBar from "../NavBar/UpperNavBar";
import NavList from "../navList/NevList";
import OrderListOuter from "../OrderList/OrderListOuter";
import classes from "./MainUI.module.css"

const MainUI = () => {
    return ( 
        <div className={classes.mainOuter}>
            <div className={classes.left}>
            <UpperNavBar />
            <div className={classes.FoodContent}>
                <div className={classes.listContainer}>
                    <div className={classes.list}>
                        <NavList />
                    </div>
                     <OrderListOuter />
                </div> 
                 
                <div className={classes.FoodCorner}>
                    <FoodTileContainer />
                    <FoodItemContainer />
                </div>
                
            </div>
        </div>
        <div className={classes.right}>
            <BillContainer />
        </div>
        {/* <div className={classes.box}></div> */}
            
    </div>
        
     );
}
 
export default MainUI;
<div>

</div>