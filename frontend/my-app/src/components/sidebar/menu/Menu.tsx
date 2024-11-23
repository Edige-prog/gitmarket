import React from 'react';
import MenuItem from './MenuItem';
import {MENU} from "./menu.data"
import classes from '../Sidebar.module.scss';

const Menu = ({isCollapsed}: {isCollapsed: boolean}) => {
  return (
    <nav className={classes.menu}>
        {MENU.map(item=><MenuItem item={item} isCollapsed={isCollapsed}/>)}
    </nav>
  )
}

export default Menu;