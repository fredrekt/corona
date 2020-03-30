import React from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput, MDBCard, MDBCardBody } from "mdbreact";

const ContactForm = () => {
  return (
    <MDBContainer>
      <MDBCard>
        <MDBCardBody>
      <h2 style={{'font-size':'40px'}} className="display-5 text-center mt-5">
        Prayer Warriors
      </h2>
      <hr width="15%"/>
      <p className="text-center w-responsive mx-auto pb-5 grey-text">
        Pray with us, help each other. Don't hesistate to ask for God's help. You can 
        ask us to pray with you. We never know how God will answer our prayers, but we c
        an expect that He will get us involved in His plan for the answer. 
      </p>
      <MDBRow>
        <MDBCol md="9" className="md-0 mb-5">
          <form name="contact" method="POST" >
          <input type="hidden" name="form-name" value="contact" />
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput required type="text" id="contact-name" name="name" label="Your name" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput
                    type="text"
                    name="email"
                    id="contact-email"
                    label="Your email - optional"
                  />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput required name="subject" type="text" id="contact-subject" label="Subject" />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    name="message"
                    required
                    type="textarea"
                    id="contact-message"
                    label="Your message and prayer requests  "
                  />
                </div>
              </MDBCol>
            </MDBRow>    
          <div className="text-center text-md-left">
            <MDBBtn type="submit" color="primary" size="md">
              Send
            </MDBBtn>
          </div>
          </form>
        </MDBCol>
        <MDBCol md="3" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="red-text" />
              <p className="mt-2 p-2 black-text">
                <a className="black-text" target="_blank" href="https://www.google.com/maps/place/Talisay,+Cebu/data=!4m2!3m1!1s0x33a99dadf0cb3aed:0x8464eb7a98416a00?sa=X&ved=2ahUKEwj7gamUj8LoAhUSK6YKHY3RCOgQ8gEwAHoECAsQAQ">
                Talisay City, Philippines
                </a>
              </p>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="black-text mt-4" />
              <p className="mt-2 p-2 black-text">
                <a className="black-text" href="tel:+63 959 301 122">+ 63 959 301 122</a>
              </p>
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <p className="mt-2 p-2 black-text">
                <a className="black-text" href="mailto:fredrickjohng6@gmail.com?Subject=I%20have%20a%20concern" target="_top">Contact Developer</a>
              </p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
      </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default ContactForm;