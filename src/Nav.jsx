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
            <li>
                    <a href="https://www.instagram.com/house.oferror/" target="_blank" rel="noopener noreferrer" className="instagramLink">
                        Instagram
                    </a>
             </li>
        </ul>
    </nav>
    );
}

export default Nav;