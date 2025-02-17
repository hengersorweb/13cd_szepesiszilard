import React from "react";
import {Link, NavLink} from "react-router-dom"


const Navbar = (() => {
    return(
        <div>
           <nav className="pa3 pa4-ns">
            <Link className="" to='/' >fooldal</Link>
            <NavLink to ='/Ermesek'>az olimpia ermesei </NavLink>
            <NavLink to ='/Mermesek'>a magyar ermesek</NavLink>

           </nav>
        </div>
    )
}
)
export default Navbar