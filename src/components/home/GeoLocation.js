import React, {Component} from "react";
import Geolocation from "react-geolocation";

export default class GeoLocation extends Component{
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitute: '',
      data: []
    };
  }
  render(){
      return (
        <Geolocation
          onSuccess={console.log()}
          render={
            ({
            fetchingPosition,
            position: { coords: { latitude, longitude } = {} } = {},
            error,
            getCurrentPosition
          }) =>
            <div hidden>
              {/* <button onClick={getCurrentPosition}>Get Position</button> */}
              {error &&
                <div>
                  {error.message}
                </div>}
              <p>
                latitude: {latitude} 
                <br/>
                longitude: {longitude}
              </p>
            </div>}
        />
      );
    };
}
