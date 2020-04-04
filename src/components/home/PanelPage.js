import React from 'react';
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBTooltip,
     MDBContainer, MDBCardTitle, MDBIcon, MDBBadge } from "mdbreact";
     
const PanelPage = (props) => {
return (
<MDBContainer className="mt-5 mb-5">
  <div className="text-center">  
    <h1 className="display-4">Corona Virus Statistics of {props.country}</h1>
    <hr width="50%"/>
    <p className="grey-text">
      Below are real-time data of the corona virus of this country &nbsp; 
      <MDBTooltip
          domElement
          tag="span"
          placement="bottom"
        >
          <span className="blue-text">
            <MDBBadge color="danger">Live</MDBBadge> 
          </span>
          <span>last updated at: {props.updatedat}</span>
        </MDBTooltip>
    </p>
  </div>
  <MDBRow>
    <MDBCol md="6" className="mb-4">
      <MDBCard color="danger-color-dark" text="white" className="text-center mt-3 hoverable">
          <MDBCardTitle></MDBCardTitle>
        <MDBCardBody>
          <MDBRow>
                <MDBCol md="2">
                    <MDBIcon icon="biohazard" size="3x"/>
                </MDBCol> 
                <MDBCol className="mt-4 mr-0" md="10">
                  Total people infected of the corona virus
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol className="mt-1" md="2">
                    {props.total_infected}               
                </MDBCol> 
                <MDBCol md="10">
                  
                </MDBCol>
            </MDBRow>
        </MDBCardBody>
      </MDBCard>

      <MDBCard color="danger-color" text="white" className="text-center mt-3 hoverable">
      <MDBCardTitle></MDBCardTitle>
        <MDBCardBody>
          <MDBRow>
                <MDBCol md="2">
                    <MDBIcon icon="book-dead" size="3x"/>
                </MDBCol> 
                <MDBCol className="mt-4 mr-0" md="10">
                  People that unfortunately lost from this deadly virus
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol className="mt-1" md="2">
                    {props.total_dead}            
                </MDBCol> 
                <MDBCol md="10">
                  
                </MDBCol>
            </MDBRow>
        </MDBCardBody>
      </MDBCard>

      <MDBCard color="elegant-color-dark" text="white" className="text-center mt-3 hoverable">
      <MDBCardTitle></MDBCardTitle>
        <MDBCardBody>
          <MDBRow>
                <MDBCol md="2">
                    <MDBIcon icon="pray" size="3x"/>
                </MDBCol> 
                <MDBCol className="mt-4 mr-0" md="10">
                 Lives lost today from the deadly corona virus
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol className="mt-1" md="2">
                    {props.total_recent_dead}        
                </MDBCol> 
                <MDBCol md="10">
                  
                </MDBCol>
            </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBCol>

    <MDBCol md="6">
      <MDBCard color="warning-color" text="white" className="text-center mt-3 hoverable">
      <MDBCardTitle>
 
      </MDBCardTitle>
        <MDBCardBody>
            <MDBRow>
                <MDBCol md="2">
                    <MDBIcon icon="calendar-plus" size="3x"/>
                </MDBCol> 
                <MDBCol className="mt-4 mr-0" md="10">
                  New cases today of the corona virus in this country
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol className="mt-1" md="2">
                    {props.new_case}             
                </MDBCol> 
                <MDBCol md="10">
                  
                </MDBCol>
            </MDBRow>
        </MDBCardBody>
      </MDBCard>


      <MDBCard color="info-color" text="white" className="text-center mt-3 hoverable">
      <MDBCardTitle>
 
      </MDBCardTitle>
        <MDBCardBody>
            <MDBRow>
                <MDBCol md="2">
                    <MDBIcon icon="diagnoses" size="3x"/>
                </MDBCol> 
                <MDBCol className="mt-4 mr-0" md="10">
                  Active cases of the novel corona virus in this country
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol className="mt-1" md="2">
                    {props.active_case}       
                </MDBCol> 
                <MDBCol md="10">
                  
                </MDBCol>
            </MDBRow>
        </MDBCardBody>
      </MDBCard>


      <MDBCard color="success-color" text="white" className="text-center mt-3 hoverable">
      <MDBCardTitle></MDBCardTitle>
        <MDBCardBody>
          <MDBRow>
                <MDBCol md="2">
                    <MDBIcon icon="heartbeat" size="3x"/>
                </MDBCol> 
                <MDBCol className="mt-4 mr-0" md="10">
                  People that successfully recovered from this deadly virus
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol className="mt-1" md="2">
                    {props.case_recovered}            
                </MDBCol> 
                <MDBCol md="10">
                  
                </MDBCol>
            </MDBRow>
        </MDBCardBody>
      </MDBCard>

   

    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default PanelPage;