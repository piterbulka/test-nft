import "./header.scss"
import "./Header__Adaptive.scss"
// import BurgerMenu from '../burger_menu/burger_menu';

const Header = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="header__logo">
                    <div className="header__logo_ball">
                    </div>
                    <div className="header__logo_text">nft</div>
                </div>
                <div className="header__menu">
                    <div className="header__link">Главная</div>
                    <div className="header__link">Что даст обучение</div>
                    <div className="header__link">
                        <button className="button__light">Личный кабинет</button>
                    </div>
                </div>
                {/* <BurgerMenu /> */}
            </div>
        </div>
    )
}

export default Header;