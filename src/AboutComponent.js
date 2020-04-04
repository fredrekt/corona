import React from 'react'
import {MDBContainer} from "mdbreact";
import DeveloperPage from './components/about/DeveloperPage'
import BreadcrumbsPage from './BreadcrumbsPage'

const AboutComponent = () =>{
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