// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-map-react';
import { InfoWindow } from '@react-google-maps/api';
import { GoogleApiWrapper, Map,Marker } from 'google-maps-react';
import { Component } from 'react';
 
export class MapContainer extends Component {
  render() {
    return (

      <Map
      style={{ height: '100vh', width: '90%' }}
       google={this.props.google}
        zoom={14}
        initialCenter={{
            lat:48.864716,
            lng:2.349014
        }}


        >
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} 
                icon={{
                  scaledSize: new window.google.maps.Size(17, 17),

url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',

// anchor: new google.maps.Point(17, 46),

// scaledSize: new google.maps.Size(37, 37)

}}

position={{
            lat:43.296398,
            lng:5.370000
        }}
// position={{
//             lat:52.864716,
//             lng:2.349014
//         }}
                
                />
 

 <Marker onClick={this.onMarkerClick}
                name={'Current location'}
                title="zied"
                position={{
            lat:48.864716,
            lng:3.349014
        }}
        
                />
        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
  <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
  <Marker
    name={'Dolores park'}
    position={{lat: 37.759703, lng: -122.428093}} />
  <Marker />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    apiKey:("AIzaSyCbr9mu68Df5JEHLpjoX3UWqpQzQzK1wQo"),
    //language:this.props.language,
})(MapContainer)