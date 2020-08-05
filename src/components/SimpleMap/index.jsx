import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 53.92608972,
      lng: 27.61475265
    },
    zoom: 17
  };
  render() {
    const googleMapsKey = `AIzaSyBNCtWRo3LiD09QfUkwbHEYGvgdrec3Mtc`;

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={53.92608972}
            lng={27.61475265}
            text="TAQTILE"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;