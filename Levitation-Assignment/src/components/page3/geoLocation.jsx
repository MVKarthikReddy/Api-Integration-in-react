import { useState,useEffect } from "react";
export function GeoLocation() {
  const [currLocationJs, setCurrLocationJs] = useState({});
  useEffect(() => {
    getLocationJs();
  }, []);


  const getLocationJs = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      setCurrLocationJs({ latitude, longitude });
      
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

