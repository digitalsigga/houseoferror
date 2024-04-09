import { NavLink } from 'react-router-dom'; 


function Nav() {
    return (
        <nav>
        <ul>
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "activeLink" : undefined}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/editorial" className={({ isActive }) => isActive ? "activeLink" : undefined}>
                    Editorial
                </NavLink>
            </li>
            <li>
                <NavLink to="/lookbook" className={({ isActive }) => isActive ? "activeLink" : undefined}>
                    Lookbook / AR
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