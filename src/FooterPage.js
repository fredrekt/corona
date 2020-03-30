import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="elegant-color" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Corona Virus Country Tracker</h5>
            <p>
            Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.
            The disease causes respiratory illness (like the flu) with symptoms such as a cough,
            fever, and in more severe cases, difficulty breathing. 
            Coronavirus disease spreads primarily through contact with an infected person when 
            they cough or sneeze. It also spreads when a person touches a surface or object that 
            has the virus on it, then touches their eyes, nose, or mouth.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Site Development</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Material Design Bootstrap</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Hosting</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">ReactJS</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">API</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright <a href="https://www.facebook.com/fredgaringo"> Fred Garingo </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;