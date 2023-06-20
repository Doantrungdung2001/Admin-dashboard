import Map from '../Map';

import PaginatedItems from '../../Components/Pagination';
import HomePageNavBar from '../../Components/HomePageNavBar';
import HomePageHeader from '../../Components/HomePageHeader';

import { useEffect, useState } from 'react';
import { StoreService } from '../../services/StoreServices';
import { useSearchParams } from 'react-router-dom';
import CardCafe from '../../Components/CardCafe';
import { set } from 'immutable';

function UserHomePage() {
    let [userPosition, setUserPosition] = useState({
        lat: 0,
        lng: 0,
    });
    let [stores, setStores] = useState([]);
    const [searchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(0);
    let [filterStores, setFilterStores] = useState([]);
    const [filterStatus, setFilterStatus] = useState({
        isOpen: false,
        isFree: false,
    });

    const handleFilterChange = (type) => {
        setFilterStatus((prevStatus) => ({
            ...prevStatus,
            [type]: !prevStatus[type],
        }));
    };

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
            setFilterStores(value);
        });
    }, [userPosition.lat, userPosition.lng, searchParams]);

    useEffect(() => {
        console.log(currentPage);
    }, [currentPage]);

    useEffect(() => {
        console.log(filterStatus);
        let getFilteredStores = stores.filter((store) => {
            if (filterStatus.isOpen && filterStatus.isFree) {
                return store.isOpen && store.status;
            } else if (filterStatus.isOpen) {
                return store.isOpen;
            } else if (filterStatus.isFree) {
                return store.status;
            } else {
                return true;
            }
        });
        setFilterStores(getFilteredStores);
    }, [filterStatus]);

    useEffect(() => {
        console.log(filterStores);
        console.log(filterStores.length);
    }, [filterStores]);
    
    return (
        <>
            <HomePageHeader />
            <HomePageNavBar onFilterChange={handleFilterChange} />
            <div className="container mx-3 ">
                <div className="mt-lg-4 mb-lg-4">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row mb-lg-4">
                                {filterStores.map((store, index) => {
                                    if (index < currentPage + 4 && index >= currentPage) {
                                        return <CardCafe key={index} store={store} />;
                                    }
                                })}
                            </div>

                            {filterStores.length !== 0 ? (
                                <div className="page-pagination">
                                    <PaginatedItems
                                        itemsPerPage={4}
                                        shopCount={filterStores.length}
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
