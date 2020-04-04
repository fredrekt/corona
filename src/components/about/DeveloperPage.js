import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBContainer } from "mdbreact";
import pp from '../../img/pp.jpg'

const DeveloperPage = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h1 className="display-5 mt-5 mb-4">
            Application Information
          </h1>
          <hr width="20%"/>
          <p className="grey-text w-responsive mx-auto mb-5 mt-4">
           Below are what you need to know information about this application and its developer
          </p>
          <MDBRow>
            <MDBCol lg="3" md="4" className="mb-lg-0 mb-5">
              <img
                src={pp}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Application Developer"
                title="Application Developer" 
              />
              <h5 className="font-weight-bold mt-4 mb-3">Fredrick Garingo</h5>
              <p className="text-uppercase blue-text">Fullstack Developer</p>
              <p className="grey-text">
                Praying isn't about asking God what to do, it is talking to God 
                about your everything, not only your problems but it is a way of 
                communicating with God.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="https://www.facebook.com/fredgaringo" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="https://www.linkedin.com/in/fredrick-garingo-430790185/" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin-in" className="blue-text" />
                </a>
                <a href="https://github.com/fredrekt" className="p-2 fa-lg">
                  <MDBIcon fab icon="github-alt" className="black-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol md="8">
              <MDBContainer style={{"margin-left":"20%"}}>
                <div hoverable className="content">
                  <h3 className="display-5">
                    Purpose of this application
                  </h3>
                  <p className="grey-text">
                  The outbreak of coronavirus disease (COVID-19) has been declared a Public Health Emergency of 
                  International Concern (PHEIC) and the virus has now spread to many countries and territories. 
                  The purpose of this application is to provide clean and actionable data regarding the number of 
                  people or population that had been confirmed and transmitted by the virus that caused COVID-19. 
                  Awareness of the present virus in the community is very important to prevent the spread of the viruses.
                </p>
                <hr/>
                <div hoverable>
                  <h3 className="display-5">
                    Why now?
                  </h3>
                  <p className="grey-text">
                  The proliferation of misleading information about the COVID-19 pandemic has been labelled a dangerous 
                  in terms of inaccuracies. These data may contain useless, incorrect or even harmful information which 
                  can hamper the public response and could add social disorder. Our goal is to provide the precise data 
                  to deliver information and present accuracy with its true value.
                  </p>
                </div>
                <hr/>
                
                <div hoverable>
                  <h3 className="display-5">
                    Features
                  </h3>
                  <p className="grey-text">
                  This application feature uses Geolocation and real time data api. The data provided are from an api and 
                  the location is used to factor in the data that is being shown. Also has a feature to request prayers.
                  </p>
                </div>

                </div>
              </MDBContainer>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default DeveloperPage;