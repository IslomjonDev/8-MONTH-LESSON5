import React from 'react'
import './Header.scss'
import { CiLocationOn } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaTelegramPlane , FaOdnoklassniki } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <>
    <header>
        <div className="header__top">
            <div className="container">
                <div className="top__content">
                    <div className="top__list">
                        <a target='blank' href="//">Гарантия свежести</a>
                        <a target='blank' href="/">Доставка и оплата</a>
                        <a target='blank' href="/">Оптовые поставки</a>
                        <a target='blank' href="/">Контакты</a>
                    </div>
                    <div className='list__right'>
                        <span>
                            <CiLocationOn/>
                            <select name="" id="">
                                <option value="">Санкт-Петербург</option>
                                <option value="">Uzbekistan</option>
                                <option value="">USA</option>
                                <option value="">Санкт-Петербург</option>
                            </select>
                        </span>
                        <span>
                            <IoIosPhonePortrait />
                            <p>8 812 309-82-88</p>
                        </span>
                        <span>
                           <MdOutlineShoppingBag />
                            <p>В корзине (4 товара)</p>
                        </span>
                        <span>
                            <FaTelegramPlane />
                            <SlSocialVkontakte />
                            <FaOdnoklassniki />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="header__bottom">
            <div className="container">
                <div className="bottom__content">
                    <div className="bot__list">
                        <p>СЛАДКИЕ ДНИ</p>
                        <select name="" id="">
                            <option value="">подарочные наборы</option>
                            <option value="">подарочные наборы</option>
                            <option value="">подарочные наборы</option>
                        </select>
                        <p>Собрать набор</p>
                        <img src={logo} alt="" />
                        <p>Создать дизайн</p>
                        <select name="" id="">
                            <option value="">КОМПАНИЯМ</option>
                            <option value="">КОМПАНИЯМ</option>
                        </select>
                        <select name="" id="">
                            <option value="">ВЕСЬ КАТАЛОГ</option>
                            <option value="">ВЕСЬ КАТАЛОГ</option>
                            <option value="">ВЕСЬ КАТАЛОГ</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header