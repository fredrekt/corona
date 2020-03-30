import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, 
  MDBNavItem, MDBNavLink, MDBMask, MDBView, MDBBtn,
  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselCaption
} from 'mdbreact';

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
            <MDBNavbar color=" elegant-color"  fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>Corona Statistical Tracker</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/about">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/contact">Contact</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
    {/* Carousel Starts */}
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
              alt="First slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <div className="c-header text-left">
              <h3 className="headline-1 text-uppercase">
                World Health <br/>Organization
              </h3>
              <p className="headline-2 ml-1">
                Current news update of covid 19
              </p>
              <MDBBtn target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" color="white" outline>
                Go to the news page
              </MDBBtn>
            </div>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption className="margin-bottom">
            <h3 className="headline-1 text-uppercase">CNN news of covid 19</h3>
            <p>CNN is an American news-based pay television channel owned by AT&T's WarnerMedia. </p>
            <MDBBtn target="_blank" href="https://edition.cnn.com/world/live-news/coronavirus-outbreak-03-30-20-intl-hnk/index.html" outline color="white">
              Go to cnn page
            </MDBBtn>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              alt="Third slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption className="margin-bottom">
            <h3 className="headline-1 text-uppercase">Every prayer counts</h3>
            <p>We need to keep on praying for the whole country and for the whole world. God bless to you all and 
              be safe. Below is where you can request prayers or pray with us. Everyone needs our prayers, the doctors, 
              the frontliners, the nurses and everyone that is helping to treat this pandemic.
            </p>
            <MDBBtn outline color="white">
              Pray with us
            </MDBBtn>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    {/* Carousel Ends */}
        </header>
      </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;