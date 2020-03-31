import React from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";
import vectorimage from './img/vector_containment.jpg'
const PreventionPage = () => {
  return (
    <section className="my-5">
        <MDBContainer className="mt-5 mb-5">
        <h2 className="display-4 text-center display-4">
          What can you do?
        </h2>
        <hr width="20%"/>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        Slow the outbreak and help each other in overcoming this pandemic
        </p>

        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src={vectorimage}
              alt="Vector with quarantine"
            />
            <div className="mt-5">
            <h5 className="font-weight-bold mb-3">When to go to the hospital: </h5>
                <ul className="grey-text">
                  <li>Difficulty breathing</li>
                  <li>Persistent pain or pressure in the chest</li>
                  <li>Confusion or inability to arouse</li>
                  <li>Bluish lips or face</li>
                  <li>Any other symptom that is severe or concerning</li>
                </ul>
            </div>
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Prevent Infection</h5>
                <p className="grey-text">
                Slow the outbreak by keeping yourself and others from getting sick.
                Always wash your hands, use hand sanitizer or alcohol, break the face-touching
                habit, clean your phone, keeyp your distance in public places and dont travel.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Prepare</h5>
                <p className="grey-text">
                You can stock up on food and supplies without contributing to shortages and please don't hoard.
                And every family should have a plan for coping with an emergency. Plan for nutrition, eat vegetables, 
                protein, fruits, whole grain and fats. 
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Stay Home</h5>
                <p className="grey-text">
                Based on the pattern of the virus in other countries, many of us are going to be working from home
                and sheltering in place for weeks or possibly months at a time. Here are some strategies to keep life
                as normal as possible. Don't leave the house unless you really have to, if you do wear a mask and bring 
                alcohol and maintain social distance.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Recover From Illness</h5>
                <p className="grey-text">
                Many of us may get sick. But most people — about 80 percent — will get mild to moderate symptoms.
                Even so, many people are frightened about the uncertainty of a new disease and how to seek medical care. 
                Here’s what to do if you get sick. Don't rush to the emergency room, if you have common sickness just treat
                with medicine and supervise. 
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
      </section>
  );
}

export default PreventionPage;