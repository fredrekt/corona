import React from 'react'
import {MDBContainer} from "mdbreact";
import DeveloperPage from './DeveloperPage'
import BreadcrumbsPage from './BreadcrumbsPage'

const AboutComponent = () =>{
    return(
        <div>
            <BreadcrumbsPage bheader="About Corona Tracker" bcurrent="About"/>
            <MDBContainer>
                <DeveloperPage/>
            </MDBContainer>
        </div>
    );
}
export default AboutComponent