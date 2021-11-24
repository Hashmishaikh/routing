import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navs">
            <NavLink activeClassName="comps" className="comp1 comp" exact to="/">Componets1</NavLink>
            <NavLink activeClassName="comps" className="comp2 comp" to="/components2">Components2</NavLink>
            <NavLink activeClassName="comps" className="comp3 comp" to="/components3">Components3</NavLink>
            <NavLink activeClassName="comps" className="comp4 comp" to="/components4">Components4</NavLink>
            <NavLink activeClassName="comps" className="comp5 comp" to="/components5" >Components5</NavLink>
            
        </div>
    )
}

export default Navbar
