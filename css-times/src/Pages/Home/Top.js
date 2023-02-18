import './Top.css';
import logo from './cssTimesLogoBlack.png'


export const Top = (props) => {
    return (
        <header>
        <img className="Css-times-logo" src={logo} alt="" />
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Sport</a></li>
            {/* <li><h1>CSS TIMES</h1></li> */}


            <li><a href="/">Lifestyle</a></li>
            <li><a href="/">Games</a></li>
        </ul>
        </header>

    );
}



export default Top