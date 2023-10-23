import React, { useState } from 'react';
import "./burger_menu.scss"

const BurgerMenu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="">
            <div className="burger-menu">
                <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className={`bar ${isMenuOpen ? 'cross' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'cross' : ''}`}></div>
                </div>
            </div>
            <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <li className="header__link">Главная</li>
                <li className="header__link">Что даст обучение</li>
                <li className="header__link">
                    <button className="button__light">Личный кабинет</button></li>
            </ul>

        </div>
    );
};

export default BurgerMenu;
