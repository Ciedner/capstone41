import React, { useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const Map = () => {
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [center, setCenter] = useState({
    lat: 10.3157,
    lng: 123.8854
  });

  const containerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '600px'
  };

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const onPlaceChanged = () => {
    if (map && map.panTo && map.setZoom && autocomplete) {
      const place = autocomplete.getPlace();
      if (place && place.geometry && place.geometry.location) {
        const { lat, lng } = place.geometry.location;
        setCenter({ lat: lat(), lng: lng() });
        map.panTo({ lat: lat(), lng: lng() });
        map.setZoom(15);
      }
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <LoadScript googleMapsApiKey="AIzaSyCp4Nj7ff2ulUeutLOP0aYTNKQqD5DeGAs" libraries={['places']}>
        <Autocomplete onLoad={(auto) => setAutocomplete(auto)} onPlaceChanged={onPlaceChanged}>
          <input
            type="text"
            placeholder="Search for a place"
            style={{
              boxSizing: 'border-box',
              border: '1px solid transparent',
              width: '240px',
              height: '32px',
              marginTop: '10px',
              padding: '0 12px',
              borderRadius: '3px',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
              fontSize: '14px',
              outline: 'none',
              textOverflow: 'ellipses',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />
        </Autocomplete>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad} />
      </LoadScript>
    </div>
  );
};

export default Map;
