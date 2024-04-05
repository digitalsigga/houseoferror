import { Link } from 'react-router-dom'; 

function Nav() {
    return (
        <nav>
        <ul>
            {/* Change <a> tags to <Link> components */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/editorial">Editorial</Link></li>
            <li><Link to="/lookbook">Lookbook / AR</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            {/* <li><Link to="/roblox">Roblox</Link></li> Commented out as before */}
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
    );
}

export default Nav;