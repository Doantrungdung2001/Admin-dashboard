import Map from '../Map';

import PaginatedItems from '../../Components/Pagination';
import HomePageNavBar from '../../Components/HomePageNavBar';
import HomePageHeader from '../../Components/HomePageHeader';

import { useEffect, useState } from 'react';
import { StoreService } from '../../services/StoreServices';
import { useSearchParams } from 'react-router-dom';
import CardCafe from '../../Components/CardCafe';

function UserHomePage() {
    let [userPosition, setUserPosition] = useState({
        lat: 0,
        lng: 0,
    });
    let [stores, setStores] = useState([]);
    const [searchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(0);

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

    useEffect(() => {
        console.log(currentPage);
    }, [currentPage]);

    return (
        <>
            <HomePageHeader />
            <HomePageNavBar />
            <div className="container mx-3 ">
                <div className="mt-lg-4 mb-lg-4">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row mb-lg-4">
                                {stores.map((store, index) => {
                                    if (index < currentPage + 4 && index >= currentPage) {
                                        return <CardCafe key={index} store={store} />;
                                    }
                                })}
                            </div>

                            {stores.length !== 0 ? (
                                <div className="page-pagination">
                                    <PaginatedItems
                                        itemsPerPage={4}
                                        shopCount={stores.length}
                                        callback={setCurrentPage}
                                    />
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
