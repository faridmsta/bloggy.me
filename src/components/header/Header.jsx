import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';


function Header() {
    const [ismenu, setIsmenu] = useState(false);

    const toggleMenu = (e) => {
        e.preventDefault();
        setIsmenu(!ismenu);
    };

    return (
        <header className={`${ismenu ? "headerismenu" : ""}`}>
            <div className="container">
                <div className="header">
                    <div className="logo">bloggy.me</div>
                    <div onClick={toggleMenu} className="hamMenu" aria-expanded={ismenu} role="button" tabIndex="0" onKeyPress={toggleMenu}>
                        <label className="containerham">
                            <input type="checkbox" checked={ismenu} readOnly />
                            <div className="checkmark">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </label>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink>Home</NavLink>
                            </li>
                            <li>
                                <NavLink>All blogs</NavLink>
                            </li>
                            <li>
                                <NavLink>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    <button>
                                        Sign in
                                    </button>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={`moreMenu ${ismenu ? "moreMenuOpen" : ""}`}>
                <div className="menuWrap">
                    <div className="container">
                        <div className="context">
                            <nav>
                                <ul>
                                    <li>
                                        <NavLink>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink>All blogs</NavLink>
                                    </li>
                                    <li>
                                        <NavLink>Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink>About Us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink>
                                            <button>
                                                Sign in
                                            </button>
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
