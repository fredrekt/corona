import React from 'react'
import {MDBContainer} from "mdbreact";
import DeveloperPage from './components/about/DeveloperPage'
import BreadcrumbsPage from './components/BreadcrumbsPage'

const AboutComponent = () =>{
    document.title = "About Corona Country Tracker"
    return(
        <div className="about-vector">
            <BreadcrumbsPage bheader="About Corona Tracker" bcurrent="About"/>
            <MDBContainer>
                <DeveloperPage/>
            </MDBContainer>
        </div>
    );
}
export default AboutComponent