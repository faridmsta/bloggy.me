import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';


function Header({ islog }) {
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
                                <NavLink to='/' >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/blogs' >All blogs</NavLink>
                            </li>
                            <li>
                                <NavLink>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink>About Us</NavLink>
                            </li>
                            {
                                islog ?
                                    <li className='profilePic'>
                                        <NavLink to='/profile'>
                                            <div className="round">
                                                <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_400,h_400/https://useqwitter.com/wp-content/uploads/2022/08/blank-twitter-icon.jpg" alt="" />
                                            </div>
                                        </NavLink>
                                    </li>
                                    :
                                    <li className='sign-in'>
                                        <NavLink to='/reg' >
                                            <button>
                                                Sign in
                                            </button>
                                        </NavLink>
                                    </li>
                            }

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
                                        <NavLink to='/blogs' >All blogs</NavLink>
                                    </li>
                                    <li>
                                        <NavLink>Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink>About Us</NavLink>
                                    </li>
                                    {
                                        islog ?
                                            <li className='profilePic'>
                                                <NavLink>
                                                    <div className="round">
                                                        <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_400,h_400/https://useqwitter.com/wp-content/uploads/2022/08/blank-twitter-icon.jpg" alt="" />
                                                    </div>
                                                </NavLink>
                                            </li>
                                            :
                                            <li className='sign-in'>
                                                <NavLink to='/profile' >
                                                    <button>
                                                        Sign in
                                                    </button>
                                                </NavLink>
                                            </li>
                                    }
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
