import './VisibleAd.css'


export const VisibleAd = (props) => {
    const myAd = props.ad;
    const btn = myAd.linkHref.length === 0? null : <button><a href={myAd.linkHref}>{myAd.linkText}</a></button>;
    return(
    <div className="visibleAdWrapper">
        <img className="ad-image"
                src={myAd.mainPhoto.filePath}
                alt={myAd.mainPhoto.caption} />
        {btn}
    </div>
    )
}   

export default VisibleAd;