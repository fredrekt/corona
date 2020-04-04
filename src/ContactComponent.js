import React from 'react'
import {MDBContainer} from "mdbreact";
import ContactForm from './components/contact/ContactForm';
import BreadcrumbsPage from './components/BreadcrumbsPage'

const ContactComponent = () =>{
    return(
        <div class="contact-vector" id="contactUS">
            <BreadcrumbsPage bheader="Helping Others" bcurrent="Contact"/>
            <MDBContainer style={{'margin-top':'5%','margin-bottom':'5%'}}>
                <ContactForm/>
            </MDBContainer>
        </div>
    );
}
export default ContactComponent