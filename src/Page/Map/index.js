import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import store from '../../store.json';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import user from '../../Images/user.png';
import { CafeMarker } from './CafeMarker';

const containerStyle = {
    width: '580px',
    height: '580px',
};

function Map() {
    const [currentPosition, setCurrentPosition] = useState({
        lat: 0,
        lng: 0,
    });

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        // googleMapsApiKey: 'AIzaSyDWTx7bREpM5B6JKdbzOvMW-RRlhkukmVE',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        language: 'ja',
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(
        function callback(map) {
            // This is just an example of getting and using the map instance!!! don't just blindly copy!
            const bounds = new window.google.maps.LatLngBounds(currentPosition);
            map.fitBounds(bounds);

            setMap(map);
        },
        [currentPosition],
    );

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    const handleMove = () => {
        navigator.geolocation.getCurrentPosition((posiiton) => {
            console.log(posiiton.coords);
            setCurrentPosition({
                lat: posiiton.coords.latitude,
                lng: posiiton.coords.longitude,
            });
        }, null);
        onLoad(map);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((posiiton) => {
            console.log(posiiton.coords);
            setCurrentPosition({
                lat: posiiton.coords.latitude,
                lng: posiiton.coords.longitude,
            });

            // setCurrentPosition({
            //     lat: 21.004348150849975,
            //     lng: 105.84652516308375,
            // });
        }, null);
    }, []);

    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentPosition}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                onClick={(e) => {
                    console.log(e.latLng.lat(), e.latLng.lng());
                }}
            >
                <Marker
                    position={{
                        lat: currentPosition.lat,
                        lng: currentPosition.lng,
                    }}
                    icon={{
                        url: user,
                        scaledSize: new window.google.maps.Size(60, 60),
                    }}
                />
                {store.map((data) => (
                    <CafeMarker key={data.id} data={data} />
                ))}
            </GoogleMap>
        </div>
    ) : (
        <></>
    );
    // return <div>Map is out of quota</div>;
}

export default React.memo(Map);
