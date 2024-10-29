import img1 from './../Img/youtube.png';
import img2 from './../Img/twiter.png';
import img3 from './../Img/Path.png';
import img4 from './../Img/instagram.svg';
import './Footer.css';

const Footer = () => {
    return ( 
        <footer>
        <div className="footer-container">
            <div className="copyright">
                © 2024 ТаскТрекер. Все права защищены
            </div>
            <div className="sets-logo">
                <ul>
                    <li><a href="#"><img src={img1} alt="Here is Logo"/></a></li>
                    <li><a href="#"><img src={img2} alt="Here is Logo"/></a></li>
                    <li><a href="#"><img src={img3} alt="Here is Logo"/></a></li>
                    <li><a href="#"><img src={img4} alt="Here is Logo"/></a></li>
                </ul>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;