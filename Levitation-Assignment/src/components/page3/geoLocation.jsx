import { useState,useEffect } from "react";
import propTypes from 'prop-types'
export function GeoLocation(props) {
  const [currLocationJs, setCurrLocationJs] = useState({});
  useEffect(() => {
    getLocationJs();
  }, []);


  const getLocationJs = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      setCurrLocationJs({ latitude, longitude });
      props.setData({...props.data,location:{latitude,longitude}})
      
    });
  };

  return (
    <div className="location">
      <h1>Current Location</h1>
      <div className="coordinates">
          <p>Latitude: {currLocationJs.latitude}</p>
          <p>Longitude: {currLocationJs.longitude}</p>
      </div>
    </div>
  );
}

GeoLocation.propTypes = {
  data : propTypes.object,
  setData : propTypes.func
}

