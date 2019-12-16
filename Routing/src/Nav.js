import React,{components} from 'react';
import {Link} from 'react-router-dom';
function Nav(){
    const nav_style={
        color:'white',
    }
        return(
            
            <nav>
            Logo
            <router>
                <ul className="Nav-links">
                    <Link style={nav_style} to="/shop">
                        <li>shop</li>
                    </Link>
                    <Link style={nav_style} to="/about">
                        <li>about</li>
                    </Link>
                    <Link  to="/contact" style={nav_style}>
                        <li>contact</li>
                    </Link>
                </ul>
            </router>
            </nav>
            
        )
    }

export default Nav;