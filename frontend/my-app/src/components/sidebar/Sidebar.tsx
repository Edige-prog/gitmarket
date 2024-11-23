import React, { useRef, useState } from 'react';
import Menu from "./menu/Menu";
import classes from './Sidebar.module.scss';
import {PanelLeftClose, PanelLeftOpen} from "lucide-react";
import {m} from 'framer-motion';
import cn from "clsx";
import profile_photo from './zhibek.jpeg';
import { EllipsisVertical } from 'lucide-react';

const Sidebar = () => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const [isCanHover, setIsCanHover] = useState(true);

    const hoverTimeoutRef = useRef<number | null >(null);

    const toggleSidebar = () => {
        if (isCollapsed){
            setIsCanHover(false);
            
            if (hoverTimeoutRef.current){
                clearTimeout(hoverTimeoutRef.current);
            }


            hoverTimeoutRef.current = setTimeout(()=>{
                setIsCanHover(true);
            }, 5000);
        }

        setIsCollapsed(prev=>!prev);
    };

    console.log(isCanHover);

    return (
        <m.aside className={cn(classes.sidebar, {
            [classes.collapsed]: isCollapsed,
            [classes.canHover]: isCanHover
        })}
            animate={{width: isCollapsed ? 50: 224}}
            transition={{type: "spring", stiffness: 300, 
            damping: 22}}
        >
            <button className={classes.toggle} onClick={()=>toggleSidebar()}>
                {isCollapsed && <PanelLeftOpen/>}
                {!isCollapsed && <PanelLeftClose/>}
            </button>
            {!isCollapsed && <div className={classes.profile_navigation}>
                <div className={classes.info}>
                    <div className={classes.photo_wrapper}>
                        <img src={profile_photo} alt="" className={classes.profile_photo}/>
                    </div>
                    <p>Zhibek</p>
                </div>
                <EllipsisVertical width={18} />
            </div>}
            <Menu isCollapsed={isCollapsed}/>
        </m.aside>
    )
}

export default Sidebar