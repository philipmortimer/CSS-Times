import './VisibleAd.css'
import { useState } from 'react';


export const VisibleAd = (props) => {
    const [_, setImageLoaded] = useState(false);
    const myAd = props.ad;
    if (myAd.linkHref.length === 0) return(
        <div className="visibleAdWrapper">
            <img className="ad-image"
                 onLoad={() => {setImageLoaded(true);}}
                 src={myAd.mainPhoto.filePath}
                 alt={myAd.mainPhoto.caption} />
        </div>
    )

    else return(
        <div className="visibleAdWrapper">
            <img className="ad-image"
                 onLoad={() => {setImageLoaded(true);}}
                 src={myAd.mainPhoto.filePath}
                 alt={myAd.mainPhoto.caption} />
                <button><a href={myAd.linkHref}>{myAd.linkText}</a></button>
        </div>
    )
}   

export default VisibleAd;