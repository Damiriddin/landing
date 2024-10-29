import './Main.css';
import img from './../Img/picture.png';
const Main = () => {
    return (  
        <main>
        <div className="container">
            <div className="main-text">
                <h1>Приложение <br/> органайзер</h1>
                <p>Контролируй все свои дела и задачи. Не упускай ничего <br/> важного. Заметки, даты и напоминания. Все в одном месте.</p>
                <a href="#">Начать пользоваться</a>
            </div>
            <img className="main-photo" src={img} alt="The main picture"/>
        </div>
    </main>
    );
}
 
export default Main;