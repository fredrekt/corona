import React, {Component} from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCollapse } from "mdbreact";

class JumbotronPage extends Component{
    state = {
        collapseID: "",
        hide:'',
      }
      
      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
        this.setState({hide:'none'})
      }
      render(){
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
            <h2 style={{'text-transform':'uppercase'}} className="h1 display-3">Stay Safe Everyone!</h2>
            <p className="lead">
              Its better to contain the virus and stay home to avoid infection. Let the Government do its job to contain 
              the virus and pray for the frontliners of the virus.
            </p>
            <hr className="my-2" />
            <p style={{display:this.state.hide}} className="grey-text">
              Its better to be safe than sorry, below contains information about how to stop the virus from spreading.
            </p>
                <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                    <p className="mt-2 mb-2">
                    Governments around the world are encouraging people to stay at home to protect health services and save lives.

                    Among the new measures brought in the UK, people can only leave their homes to buy food, medicine and to exercise.

                    They're allowed to travel, but only to and from work if they cannot do their jobs from home.

                    Staying at home to keep people safe can be a difficult concept to grasp, especially when you are feeling fit and healthy yourself.

                    You have an essential role to play in slowing the spread of the new coronavirus. The good news is that small changes in personal 
                    
                    behavior can buy time — slowing the outbreak, preventing hospitals from becoming overwhelmed and reducing cases until scientists
                    
                    develop treatments and, eventually, a vaccine. Here’s some practical advice from doctors and public health experts to protect 
                    
                    yourself and your community.
                    </p>
                </MDBCollapse>
            <p className="lead">
              <MDBBtn 
              onClick={this.toggleCollapse("basicCollapse")}
              color="primary">Learn More</MDBBtn>
            </p>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
    }
}


export default JumbotronPage;