import React, {useState} from 'react'
import logo from '../../assets/header/logo.svg'
import burger from '../../assets/header/Vector.svg'
import burgerIcon from '../../assets/burger/icon5.svg'
import burgerIcon1 from '../../assets/burger/icon1.svg'
import burgerIcon2 from '../../assets/burger/icon2.svg'
import burgerIcon3 from '../../assets/burger/icon3.svg'
import burgerIcon4 from '../../assets/burger/icon4.svg'

const Header = () => {

  const[show, ShowState] = useState(false);

  return (
    <section className='wrap'>
      {show && <div className='header__burger'>
        <div className='container'>
            <span className='header__x' onClick={() => ShowState(!show)}>X</span>
            <ul className='header__ul'>
              <li className='header__ul-item'>Главная</li>
              <li className='header__ul-item'>О компании</li>
              <li className='header__ul-item'>Портфолио</li>
              <li className='header__ul-item'>Что мы предлагаем</li>
              <li className='header__ul-item'>Специальное предложение </li>
            </ul>
            <button className='header__btn' type='button'>Оставить заявку</button>
            <ul className='burger__items'>
              <li><img className='burger__items-icons' src={burgerIcon}/></li>
              <li><img className='burger__items-icons' src={burgerIcon4}/></li>
              <li><img className='burger__items-icons' src={burgerIcon3}/></li>
              <li><img className='burger__items-icons' src={burgerIcon2}/></li>
              <li><img className='burger__items-icons' src={burgerIcon1}/></li>
            </ul>
        </div>
        </div>}
      <header className='header'>
          <div className='container'>
            <ul className='nav__item'>
              <li><img src={logo}/></li>
              <li><img src={burger} onClick={() => ShowState(!show)}/></li>
            </ul>
          </div>
      </header>
      <main className='aplication'>
        <div className='container'>
          <div className='aplication__div'>
            <h2 className='aplication__title'>web applications</h2>
            <p className='aplication__p'>Повседневная практика.</p>
            <button className='aplication__btn' type='button'>Спец предложение</button>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Header