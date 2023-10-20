import "./SectionStudy.scss"
import './Adaptive__Study.scss'
import smile_32 from "../../assets/img/smile_32.png"
import smile_41 from "../../assets/img/smile_41.png"
import smile_3 from "../../assets/img/smile_3.png"
import smile_4 from "../../assets/img/smile_4.png"
import study_elipse from '../../assets/img/study_ellipse.svg'
import study_elipse_2 from '../../assets/img/Ellipse_study_27.svg'
import study_elipse_3 from '../../assets/img/Ellipse_25.png'
const SectionStudy = () => {
    return (
        <div className="sectionStudy__wrapper">
            <div className="container">
                <div className="sectionStudy">
                    <div className="study__ball_pink"></div>
                    <div className="study__ball_blue"></div>
                    <img className='study_elipse' src={study_elipse} alt="study_elipse"></img>
                    <img className='study_elipse_2' src={study_elipse_2} alt="study_elipse_2"></img>
                    <img className='study_elipse_3' src={study_elipse_3} alt="study_elipse_3"></img>
                    <h2 className="study__subtitle">Что даст тебе обучение?</h2>
                    <div className="study__card__wrapper">
                        <div className="">
                            <div className="study__card_slise2">
                                <img className='card__smile' src={smile_32} alt="smile"></img>
                                <div className="card__text">Откроешь свой первый криптокошелек и научишься с ним работать</div>
                            </div>
                            <div className="study__card"></div>
                        </div>
                        <div className="">
                            <div className="study__card_slise2">
                                <img className='card__smile' src={smile_41} alt="smile"></img>
                                <div className="card__text">Поймёшь, как выбирать правильные дропы</div>
                            </div>
                            <div className="study__card"></div>
                        </div>
                        <div className="">
                            <div className="study__card_slise2">
                                <img className='card__smile' src={smile_3} alt="smile"></img>
                                <div className="card__text">Построишь план по быстрому приумножению заработанных средств</div>
                            </div>
                            <div className="study__card"></div>
                        </div>
                        <div className="">
                            <div className="study__card_slise2">
                                <img className='card__smile' src={smile_4} alt="smile"></img>
                                <div className="card__text">Узнаешь кто такие холдеры и флипперы</div>
                            </div>
                            <div className="study__card"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionStudy;