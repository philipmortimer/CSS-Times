import CookieConsent from "react-cookie-consent";
import {useState} from "react";
import './Disclaimer.css';


export const Disclaimer = (props) => {
    const [visitibility, setVisibility] = useState("byCookieValue");
    return (
        <CookieConsent visible={visitibility} onAccept={() => setVisibility("hidden")}
        enableDeclineButton={"hidden"} buttonText="I understand" declineButtonText="I understand"
        onDecline={() => setVisibility("hidden")}>
            Everything on here is true, except for the parts that aren't.
            <em className="LawsuitAvoidance">Please don't sue us.</em>
        </CookieConsent>
    );
}