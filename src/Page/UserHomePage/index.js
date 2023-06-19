import Map from '../Map';

import PaginatedItems from '../../Components/Pagination';
import HomePageNavBar from '../../Components/HomePageNavBar';
import HomePageHeader from '../../Components/HomePageHeader';

import { useEffect, useState } from 'react';
import { StoreService } from '../../services/StoreServices';
import { useSearchParams } from 'react-router-dom';
import CardCafe from '../../Components/CardCafe';
//Giá trị fix cứng xài tạm cho Page Pagination

function UserHomePage() {
    const [currentItems, setCurrentItems] = useState(0);
    const [store, setStore] = useState([]);
    const currentPageStore = store.slice(currentItems, currentItems + 4);
    const handleItem = (childData) => {
        setCurrentItems(childData);
    };
    useEffect(() => {
        // console.log('cal api');
        fetch('http://127.0.0.1:8000/api/stores')
            .then((response) => response.json())
            .then((data) => setStore(data));
    }, []);

    let [userPosition, setUserPosition] = useState({
        lat: 0,
        lng: 0,
    });
    let [stores, setStores] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        async function getStore() {
            let data = await StoreService.getAll(
                {
                    coordinates: {
                        latitude: userPosition.lat,
                        longitude: userPosition.lng,
                    },
                },
                5000,
                searchParams.get('search'),
            );
            return data;
        }

        getStore().then((value) => {
            setStores(value);
        });
    }, [userPosition.lat, userPosition.lng, searchParams]);
    return (
        <>
            <HomePageHeader />
            <HomePageNavBar />
            <div className="container mx-3 ">
                <div className="mt-lg-4 mb-lg-4">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row mb-lg-4">
                                {currentPageStore.map((store, index) => {
                                    return <CardCafe key={index} store={store} />;
                                })}
                            </div>

                            {store.length != 0 ? (
                                <div className="page-pagination">
                                    <PaginatedItems itemsPerPage={4} shopCount={store.length} callback={handleItem} />
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div className="col-lg-3">
                            <Map userPosition={userPosition} setUserPosition={setUserPosition} stores={stores} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserHomePage;
