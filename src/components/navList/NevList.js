import React from 'react';
import classes from './NavList.module.css'

const NavList = () => {
    return ( 
        <div className={classes.list}>
            <ul>
                <li><a><div>Dashboard</div></a></li>
                <li> <a><div>Orders</div></a></li>
                <li><a><div>Tables</div></a></li>
            </ul>
        </div>
     );
}
 
export default NavList;