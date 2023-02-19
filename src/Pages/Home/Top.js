import './Top.css';
import logo from './cssTimesLogoBlack.png'


export const Top = (props) => {
    return (
        <header>
        <a href="/"><img className="Css-times-logo" src={logo} alt="" /></a>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://jeremycolfer27.github.io/css-website/">Sport</a></li>
            {/* <li><h1>CSS TIMES</h1></li> */}
            <li><a href="/#/games/crossword">Crossword</a></li>
            <li><a href="#/Games/SprayPaint">Art</a></li>
            <li><a href="#/Quiz">Quiz</a></li>
        </ul>
        </header>

    );
}



export default Top