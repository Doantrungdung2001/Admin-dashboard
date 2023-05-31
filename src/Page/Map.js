import React, { useState } from "react";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Button } from "antd";

const containerStyle = {
    width: "400px",
    height: "400px",
};

function Map() {
    // let [center, setCenter] = useState({
    //     lat: 20,
    //     lng: 105,
    // });
    // const { isLoaded } = useJsApiLoader({
    //     id: "google-map-script",
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    // });

    // const [map, setMap] = React.useState(null);

    // const onLoad = React.useCallback(
    //     function callback(map) {
    //         // This is just an example of getting and using the map instance!!! don't just blindly copy!
    //         const bounds = new window.google.maps.LatLngBounds(center);
    //         map.fitBounds(bounds);

    //         setMap(map);
    //         console.log(center);
    //     },
    //     [center]
    // );

    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null);
    // }, []);

    // const handleMove = () => {
    //     navigator.geolocation.getCurrentPosition((posiiton) => {
    //         setCenter({
    //             lat: posiiton.coords.latitude,
    //             lng: posiiton.coords.longitude,
    //         });
    //     }, null);
    //     onLoad(map);
    // };
    // return isLoaded ? (
    //     <div>
    //         <Button type="primary" onClick={handleMove}>
    //             あなたの場所に移動する
    //         </Button>
    //         <GoogleMap
    //             mapContainerStyle={containerStyle}
    //             center={center}
    //             zoom={10}
    //             onLoad={onLoad}
    //             onUnmount={onUnmount}
    //         >
    //             {/* Child components, such as markers, info windows, etc. */}
    //             <>
    //                 <Marker position={center} />
    //             </>
    //         </GoogleMap>
    //     </div>
    // ) : (
    //     <></>
    // );
    return <div>Map is out of quota</div>;
}

export default React.memo(Map);
