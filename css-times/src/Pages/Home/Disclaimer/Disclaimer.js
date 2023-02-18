import CookieConsent from "react-cookie-consent";
import {useState} from "react";
import './Disclaimer.css';


export const Disclaimer = (props) => {
    const [visible, setVisibility] = useState(true);
    return (
        <CookieConsent visible={visible? "show" : "hidden"} onAccept={() => setVisibility(false)}
        enableDeclineButton={true} buttonText="I understand" declineButtonText="I understand"
        onDecline={() => setVisibility(false)}>
            Everything on here is true, except for the parts that aren't.
            <em className="LawsuitAvoidance">Please don't sue us.</em>
        </CookieConsent>
    );
}