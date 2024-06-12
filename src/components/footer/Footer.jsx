import React from 'react'
import './Footer.scss'
import fot1 from '../../assets/fot1.png'
import fot2 from '../../assets/fot2.png'
import fot3 from '../../assets/fot3.png'
import { FaInstagram  , FaFacebookF , FaVk} from "react-icons/fa";

const Footer = () => {
  return (
        <>
          <footer>
             <div className="container">
                <div className="footer__content">
                    <div className="fot1">
                        <div className="df">
                            <span>
                                <img src={fot1} alt="" />
                                <p>Готовим вручную  и с любовью</p>
                            </span>
                            <span>
                                <img src={fot2} alt="" />
                                <p>Доставим в день заказа</p>
                            </span>
                            <span>
                                <img src={fot3} alt="" />
                                <p>100%  миндальная мука и натуральные ингредиенты
                                </p>
                            </span>
                        </div>
                        <p> 2021 Макароншоп ООО  <br /> "Квантум", Санкт-Петербург,  улица Маршала Тухачевского, <br /> дом 22</p>
                    </div>
                  <div className="fot2">
                     <h2>Информация</h2>
                     <p>О компании</p>
                     <p>Гарантии вкуса и свежести</p>
                     <p>Доставка и оплата</p>
                     <p>Контакты</p>
                  </div>
                  <div className="fot2">
                     <h2>Каталог</h2>
                     <p>Каталог десертов</p>
                     <p>Готовые наборы</p>
                     <p>Собрать свой набор</p>
                     <p>Наборы с печатью</p>
                     <p>Свадебные предложения</p>
                     <p>Акции</p>
                  </div>
                  <div className="fot2">
                     <h2>ДЛЯ БИЗНЕСА</h2>
                     <p>Корпоративные подарки</p>
                     <p>Для юридических лиц</p>
                     <p>Оповикам</p>
                  </div>
                  <div className="fot3">
                     <h2>+7 (812) 309 82 88</h2>
                     <p>с 9:00 до 21:00</p>
                     <div className="icons">
                          <FaInstagram />
                          <FaFacebookF/>
                          <FaVk />
                     </div>
                  </div>
                </div>
             </div>
          </footer>
        </>
  )
}

export default Footer