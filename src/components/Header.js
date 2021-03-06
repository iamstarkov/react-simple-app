import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-block">
                    <div className="header__description">
                        <p className="header__description-text">
                            Build apps with us!
                        </p>
                    </div>
                    <nav className="header-nav">
                        <ul className="header__menu header-menu">
                            <li className="header-menu__item">
                                <Link className='header-menu__link link-app' to='/'>Home page</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}