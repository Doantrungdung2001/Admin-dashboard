import React, { useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import user from '../../Images/user.png';
import { CafeMarker } from './CafeMarker';

const containerStyle = {
    width: '580px',
    height: '580px',
};

const mapStyles = [
    {
        featureType: 'administrative.land_parcel',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'landscape.man_made',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'transit',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
];

function Map({ stores, userPosition, setUserPosition }) {
    // const [currentPosition, setCurrentPosition] = useState({
    //     lat: 0,
    //     lng: 0,
    // });

    // let [stores, setStores] = useState([]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyDWTx7bREpM5B6JKdbzOvMW-RRlhkukmVE',
        // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        language: 'ja',
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(
        function callback(map) {
            // This is just an example of getting and using the map instance!!! don't just blindly copy!
            const bounds = new window.google.maps.LatLngBounds(userPosition);
            map.fitBounds(bounds);

            setMap(map);
        },
        [userPosition],
    );

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((posiiton) => {
            setUserPosition({
                lat: posiiton.coords.latitude,
                lng: posiiton.coords.longitude,
            });
        }, null);
    }, [setUserPosition]);

    // useEffect(() => {
    //     async function getStore() {
    //         let data = await StoreService.getAll({
    //             coordinates: {
    //                 latitude: currentPosition.lat,
    //                 longitude: currentPosition.lng,
    //             },
    //         });
    //         return data;
    //     }

    //     getStore().then((value) => {
    //         console.log(value);
    //         setStores(value);
    //     });
    // }, [currentPosition.lat, currentPosition.lng]);

    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={userPosition}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                onClick={(e) => {
                    console.log(e.latLng.lat(), e.latLng.lng());
                }}
                options={{ styles: mapStyles }}
            >
                <Marker
                    position={{
                        lat: userPosition.lat,
                        lng: userPosition.lng,
                    }}
                    icon={{
                        url: user,
                        scaledSize: new window.google.maps.Size(20, 20),
                    }}
                />
                {stores.map((data) => (
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
