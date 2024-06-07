import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import './index.css'
import { useState } from 'react';

const NavBar = ()=>{
    const [ sideNav, setSideNav ] = useState(false)

    const handleSideNav = ()=>{
        setSideNav((prevState) => !prevState)
    }

    //<div className='side-nav open'></div>
    //<div className='side-nav closed'></div>

    return (
        <nav>
            <div className='nav-lines' style={{cursor: 'pointer'}} onClick={handleSideNav}>
                <div></div>
                <div></div>
            </div>

            <div className={`side-nav ${sideNav ? 'open' : 'closed'}`}>
                <div onClick={handleSideNav} style={{cursor: 'pointer'}}>x</div>
                <Link to='/'>Home</Link>
                <Link to='/'>Employee details</Link>
                <Link to='/'>Inventory management</Link>
                <Link to='/'>Accounts</Link>
            </div>
            <div className='nav-logo'>
                <img src={Logo} alt='Nav Logo'/>
            </div>
            <div className='nav-link'>
                <p>About</p>
            </div>
        </nav>
    )
}

export default NavBar;