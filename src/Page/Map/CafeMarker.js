import { InfoWindow, Marker } from '@react-google-maps/api';
import busy from '../../Images/busy.png';
import free from '../../Images/free.png';
import freeClicked from '../../Images/freeClicked.png';
import cafe from '../../Images/cafe.png';
import { useState } from 'react';
import './style.scss';
export const CafeMarker = ({ data }) => {
    let [showInfoWindow, setShowInfoWindow] = useState(false);
    let [clicked, setClicked] = useState(false);
    return (
        <Marker
            position={{
                lat: parseFloat(data.coordinates.latitude),
                lng: parseFloat(data.coordinates.longitude),
            }}
            icon={{
                url: data.isFree ? (clicked ? freeClicked : free) : busy,
                scaledSize: new window.google.maps.Size(40, 30),
            }}
            onClick={() => {
                setShowInfoWindow(!showInfoWindow);
                setClicked(!clicked);
            }}
        >
            {showInfoWindow && (
                <InfoWindow>
                    <div className="marker-tooltip">
                        <img src={data.front_picture ? data.front_picture : cafe} alt="cafe" />
                        <div>
                            <h5>{data.name}</h5>
                            <p>{data.address}</p>
                            <p>{data.a_working_day.guests + ' Guest'}</p>
                        </div>
                    </div>
                </InfoWindow>
            )}
        </Marker>
    );
};
