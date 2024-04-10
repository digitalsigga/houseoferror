import { NavLink } from 'react-router-dom'; 


function Nav() {
    return (
        <nav>
        <ul>
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "activeLink" : undefined}>
                    Highlights
                </NavLink>
            </li>
            <li>
                <NavLink to="/waningmoon" className={({ isActive }) => isActive ? "activeLink" : undefined}>
                    Waning Moon
                </NavLink>
            </li>
            <li>
                <NavLink to="/lookbook" className={({ isActive }) => isActive ? "activeLink" : undefined}>
                    Lookbook
                </NavLink>
            </li>
            <li>
                <NavLink to="/shop" className={({ isActive }) => isActive ? "activeLink" : undefined}>
                    Shop
                </NavLink>
            </li>
        </ul>
    </nav>
    );
}

export default Nav;