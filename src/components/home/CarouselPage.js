import React from 'react'
import { MDBMask, MDBView, MDBBtn,
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselCaption } 
    from 'mdbreact';
import {Link} from 'react-router-dom'
    
const CarouselPage = () =>{
    return(
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
          <MDBCarouselCaption className="who-content">
            <div className="c-header text-left">
              <h3 className="headline-1 text-uppercase">
                World Health <br/> Organization
              </h3>
              <div className="header-content">
                <p className="header-content ml-2">
                  A news article about the news update of the corona virus.
                </p>
              </div>
              <div className="who-button">
                <MDBBtn target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" color="white" outline>
                  Go to the news page
                </MDBBtn>
              </div>
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
            <div className="header-content">
              <p>CNN is an American news-based pay television channel owned by AT&T's WarnerMedia. </p>
            </div>
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
            <div className="header-content">
              <p>We need to keep on praying for the whole country and for the whole world. God bless to you all and 
                be safe. Below is where you can request prayers or pray with us. Everyone needs our prayers, the doctors, 
                the frontliners, the nurses and everyone that is helping to treat this pandemic.
              </p>
            </div>
            <Link target="_blank" to="/contact">
              <MDBBtn outline color="white">
              Pray with us
              </MDBBtn>
            </Link>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    );
}
export default CarouselPage