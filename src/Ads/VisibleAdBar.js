import {ads} from './AdList'
import VisibleAd from './VisibleAd'

export const VisibleAdBar = (props) =>{
    return(
        <div className="VisibleAdBarWrapper">
            <p ad-bar-desc>
                {"Approved Dignified Sponsors (ADS) :"}
            </p>
            <VisibleAd ad = {ads[0]}></VisibleAd>
            <VisibleAd ad = {ads[1]}></VisibleAd>



        </div>

    )
}