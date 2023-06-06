import { InfoWindow, Marker } from '@react-google-maps/api';
import busy from '../../Images/busy.png';
import free from '../../Images/free.png';
import cafe from '../../Images/cafe.png';
import { useState } from 'react';
export const CafeMarker = ({ data }) => {
    let [showInfoWindow, setShowInfoWindow] = useState(false);
    return (
        <Marker
            position={{
                lat: data.coordinates.latitude,
                lng: data.coordinates.longitude,
            }}
            icon={{
                url: free,
                scaledSize: new window.google.maps.Size(60, 60),
            }}
            onClick={() => setShowInfoWindow(!showInfoWindow)}
        >
            {showInfoWindow && (
                <InfoWindow>
                    <div>
                        <img src={data.picture ? data.picture : cafe} alt="cafe" />
                        <p>{data.name}</p>
                    </div>
                </InfoWindow>
            )}
        </Marker>
    );
};
