import Map from '../Map';
import { useNavigate } from 'react-router-dom';
import PaginatedItems from '../../Components/Pagination';
import HomePageNavBar from '../../Components/HomePageNavBar';
import HomePageHeader from '../../Components/HomePageHeader';

import { useContext, useEffect, useState } from 'react';
import { StoreService } from '../../services/StoreServices';
import { useSearchParams } from 'react-router-dom';
import CardCafe from '../../Components/CardCafe';
import { set } from 'immutable';
import AuthContext from '../../Components/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserHomePage() {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    let [userPosition, setUserPosition] = useState({
        lat: 0,
        lng: 0,
    });
    let [stores, setStores] = useState([]);
    let [filterStores, setFilterStores] = useState([]);
    const [searchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(0);
    // const [allStore, setAllStore] = useState([]);
    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/api/stores')
    //         .then((response) => response.json())
    //         .then((data) => setAllStore(data));
    // }, []);
    const [filterStatus, setFilterStatus] = useState({
        isOpen: false,
        isFree: false,
        isSort: false,
        isReviewed: false,
    });
    const handleFilterChange = (type) => {
        setFilterStatus((prevStatus) => ({
            ...prevStatus,
            [type]: !prevStatus[type],
        }));
    };

    useEffect(() => {
        (function authenticate() {
            if (!authContext.currentUser) {
                navigate('/signIn');
            }
        })();
    }, []);

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
                filterStatus.isSort,
            );
            return data;
        }

        getStore().then((value) => {
            setStores(value);
            setFilterStores(value);
        });
    }, [userPosition.lat, userPosition.lng, searchParams, filterStatus.isSort]);

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

        if (filterStatus.isReviewed) {
            getFilteredStores.sort((a, b) => {
                return b.avg_rating - a.avg_rating;
            });
        }

        setFilterStores(getFilteredStores);
    }, [filterStatus, stores]);

    useEffect(() => {
        console.log(filterStores);
        console.log(filterStores.length);
    }, [filterStores]);

    return (
        <>
            <HomePageHeader />
            <HomePageNavBar onFilterChange={handleFilterChange} />
            <ToastContainer />
            <div className="container-fluid mx-2">
                <div className="mt-lg-4 mb-lg-4">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row mb-lg-4">
                                {filterStores.map((store, index) => {
                                    if (index < currentPage + 4 && index >= currentPage) {
                                        if (store.status === 'accepted') {
                                            return <CardCafe key={index} store={store} />;
                                        }
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

                        <div className="col-lg-6">
                            <Map userPosition={userPosition} setUserPosition={setUserPosition} stores={stores} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserHomePage;
