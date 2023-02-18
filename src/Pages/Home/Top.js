import './Top.css';
import logo from './cssTimesLogoBlack.png'
import {useState} from 'react';


export const Top = (props) => {
    const [_, setImageLoaded] = useState(false);
    return (
        <header>
        <a href="/"><img className="Css-times-logo" onLoad={() => setImageLoaded(true)}
        src={logo} alt="" /></a>
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