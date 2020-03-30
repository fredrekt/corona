import React from 'react'
import {MDBContainer} from "mdbreact";
import ContactForm from './components/contact/ContactForm';

const ContactComponent = () =>{
    return(
        <div style={{'margin-top':'10%','margin-bottom':'10%'}}>
            <MDBContainer>
                <ContactForm/>
            </MDBContainer>
        </div>
    );
}
export default ContactComponent