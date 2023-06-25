import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';

const Map = () => {
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [center, setCenter] = useState({
    lat: 10.3157,
    lng: 123.8854
  });
  const [recentSearches, setRecentSearches] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/home');
  };

  const containerStyle = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    display: 'flex'
  };

  const mapStyle = {
    flex: 1,
    height: '100%',
    width: 'calc(100% - 240px)'
  };

  const searchContainerStyle = {
    position: 'absolute',
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1
  };

  const menuBarStyle = {
    width: '240px',
    height: '100%',
    backgroundColor: '#f2f2f2',
    boxShadow: '2px 0px 6px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '16px'
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

        // Add the searched place to the recent searches
        const searchedPlace = {
          name: place.name,
          address: place.formatted_address,
          lat: lat(),
          lng: lng()
        };
        setRecentSearches(prevSearches => [searchedPlace, ...prevSearches]);
        setSelectedPlace(searchedPlace);
      }
    }
  };

  useEffect(() => {
    // Load recent searches from local storage on component mount
    const savedRecentSearches = JSON.parse(localStorage.getItem('recentSearches'));
    if (savedRecentSearches) {
      setRecentSearches(savedRecentSearches);
    }
  }, []);

  useEffect(() => {
    // Save recent searches to local storage whenever it changes
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  return (
    <div style={containerStyle}>
      <div style={menuBarStyle}>
        <h3>Recent places</h3>
        {recentSearches.map((search, index) => (
          <div key={index}>
            <p>{search.name}</p>
            <p>{search.address}</p>
          </div>
        ))}
        <MDBBtn color="primary" onClick={handleHome}>
          Home
        </MDBBtn>
      </div>
      <div style={mapStyle}>
        <div style={searchContainerStyle}>
          <LoadScript
            googleMapsApiKey="AIzaSyCp4Nj7ff2ulUeutLOP0aYTNKQqD5DeGAs"
            libraries={['places']}
          >
            <Autocomplete
              onLoad={(auto) => setAutocomplete(auto)}
              onPlaceChanged={onPlaceChanged}
            >
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
                  textOverflow: 'ellipses'
                }}
              />
            </Autocomplete>
          </LoadScript>
        </div>
        <LoadScript
          googleMapsApiKey="AIzaSyCp4Nj7ff2ulUeutLOP0aYTNKQqD5DeGAs"
          libraries={['places']}
        >
          <GoogleMap
            mapContainerStyle={{ height: '100%', width: '100%' }}
            center={center}
            zoom={10}
            onLoad={onLoad}
          >
            {selectedPlace && (
              <Marker
                position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
              />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Map;
