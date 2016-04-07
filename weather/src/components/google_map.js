import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

export default (props) => {
	//console.log(props.lat, props.lon);
	return (
		<GoogleMapLoader containerElement={ <div style={{height: '100%'}} /> }
	    googleMapElement={
	      <GoogleMap
	        //ref={(map) => console.log(map)}
	        defaultZoom={8}
	        defaultCenter={{lat: props.lat, lng: props.lon}} >
	      </GoogleMap>
	    }
	   />
	);
}