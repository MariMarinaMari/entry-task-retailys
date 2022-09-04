import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul>
            <li><NavLink to="/first" exact="true">First task</NavLink></li>
            <li><NavLink to="/second" exact="true">Second task</NavLink></li>
            <li><NavLink to="/third" exact="true">Third task</NavLink></li>
        </ul>
    );
}

export default Navigation;