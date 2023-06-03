import React from "react";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Button } from "antd";
import store from "../../store.json";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import cafe from "../../Images/cafe.png";
import user from "../../Images/user.png";

const containerStyle = {
    width: "580px",
    height: "580px",
};

let center = {
    lat: 20,
    lng: 105,
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyDWTx7bREpM5B6JKdbzOvMW-RRlhkukmVE",
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map);
        console.log(center);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    const handleMove = () => {
        navigator.geolocation.getCurrentPosition((posiiton) => {
            center = {
                lat: posiiton.coords.latitude,
                lng: posiiton.coords.longitude,
            };
        }, null);
        onLoad(map);
    };
    return isLoaded ? (
        <div>
            <Button type="primary" onClick={handleMove}>
                あなたの場所に移動する
            </Button>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={5}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                <Marker
                    position={{
                        lat: center.lat,
                        lng: center.lng,
                    }}
                    icon={{
                        url: user,
                        scaledSize: new window.google.maps.Size(60, 60),
                    }}
                />
                {store.map((data) => (
                    <Marker
                        key={data.id}
                        position={{
                            lat: data.coordinates.latitude,
                            lng: data.coordinates.longitude,
                        }}
                        icon={{
                            url: cafe,
                            scaledSize: new window.google.maps.Size(60, 60),
                        }}
                    />
                ))}
            </GoogleMap>
        </div>
    ) : (
        <></>
    );
    // return <div>Map is out of quota</div>;
}

export default React.memo(Map);
