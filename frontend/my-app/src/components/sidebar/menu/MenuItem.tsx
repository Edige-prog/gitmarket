import React from 'react';
import { IMenuItem } from './menu.data';
import { Link } from 'react-router-dom';

const MenuItem = ({ item, isCollapsed }: { item: IMenuItem, isCollapsed: boolean }) => {
  return (
    <Link to={item.link}>
      <item.icon />
      {!isCollapsed && <span>{item.name}</span>}
    </Link>
  );
};

export default MenuItem;
