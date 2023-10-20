import "./main.scss"
import "./modal.scss"
import "./Adaptive__main.scss"
import React, { useState } from 'react';
import elipse_modal from '../../assets/img/Ellipse-modal.png'
import MAN from '../../assets/img/MAN.png'



const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container">
            <div className="main__wrap">
                <div className="main__text">
                <div className=""><h1 className="main__title">Не упусти возможность войти в <span className="bold__text">прибыльную нишу</span></h1></div>
                <img className='bgc__img__adaptive' src={MAN} alt="MAN"></img>
                <h3 className="main__subtitle">Получи все нужные навыки для заработка на NFT всего за 28 дней!</h3>
                <button className="button__green" onClick={openModal}>Начать зарабатывать на NFT</button>
                </div>
                <div className="bgc-img"></div>
            </div>

            {isModalOpen && (
            <div className="modal">
                <div className="modal__content">
                    <img className='elipse-modal' src={elipse_modal} alt="elipse-modal"></img>
                    <span onClick={closeModal} className="modal__close">
                    &times;
                    </span>
                    <h2 className="modal__title">Начни прямо сейчас!</h2>
                    <p className="modal__subtitle">Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
                    <div class="modal__form">
                        <input className="modal__email" type="email" placeholder="Ваш email"></input>
                        <button className="button__green modal__button" type="modal__submit">Отправить</button>
                    </div>
                </div>
            </div>
            )}
    </div>
    )
}

export default Main;