import {ads} from './AdList'
import VisibleAd from './VisibleAd'
import './VisibleAdBar.css'

export const VisibleAdBar = (props) =>{
    return(
        <div className="VisibleAdBarWrapper">
            <p className = "ad-bar-desc">
                {"Enjoy our "}
                <br></br>
                <em>                Approved Dignified Sponsors (ADS) :</em>

            </p>
            <VisibleAd ad = {ads[0]}></VisibleAd>
            <VisibleAd ad = {ads[1]}></VisibleAd>
            <VisibleAd ad = {ads[2]}></VisibleAd>
            <VisibleAd ad = {ads[3]}></VisibleAd>





        </div>

    )
}