import React from 'react';
import { Ellipsis } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AreaTableAction = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: any) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShowDropdown(false);
        }
    };
    
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <button type='button' className='action-dropdown-btn' onClick={handleDropdown}>
                <Ellipsis/>
                {showDropdown && <div className="action-dropdown-menu" ref={dropdownRef}>
                    <ul className="dropdown-menu-list">
                    <li className="dropdown-menu-item">
                        <Link to="/view" className="dropdown-menu-link">
                        View
                        </Link>
                    </li>
                    <li className="dropdown-menu-item">
                        <Link to="/view" className="dropdown-menu-link">
                        Edit
                        </Link>
                    </li>
                    <li className="dropdown-menu-item">
                        <Link to="/view" className="dropdown-menu-link">
                        Delete
                        </Link>
                    </li>
                    </ul>
                </div>}
            </button>
        </>
    )
}

export default AreaTableAction