import './Header.css';
import GooglePlay from './../Img/Google Play.svg';
import AppStore from './../Img/App store.png';
import Logo from './../Img/logo.svg';



const Header = function () 
{
    return (
        <header className="header">
        <nav className="nav">
            <div className="menu">
                <ul>
                    <li><a href="#"><img src = {Logo} alt="LOGO"/></a></li>
                    <li><a href="">Приложение</a></li>
                    <li><a href="">Возможности</a></li>
                    <li><a href="">Стоимость</a></li>
                    <li><a href="">Блог</a></li>
                    <li><a href="">Контакты</a></li>
                </ul>
            </div>
            <div className="logo-market">
                <ul>
                    <li><a href="#"><img src={GooglePlay} alt="GooglePlay"/></a></li>
                    <li><a href="#"><img src={AppStore} alt="AppStore"/></a></li>
                </ul>
            </div>
        </nav>
    </header>
    )
}
export {Header};