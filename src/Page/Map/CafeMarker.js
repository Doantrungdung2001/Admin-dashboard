import { InfoWindow, Marker } from '@react-google-maps/api';
import busy from '../../Images/busy.png';
import free from '../../Images/free.png';
import cafe from '../../Images/cafe.png';
import { useState } from 'react';
import './style.scss';
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
                    <div className="marker-tooltip">
                        <img src={data.picture ? data.picture : cafe} alt="cafe" />
                        <div>
                            <h5>{data.name}</h5>
                            <p>{data.address}</p>
                            <p>69 Guest</p>
                        </div>
                    </div>
                </InfoWindow>
            )}
        </Marker>
    );
};
