import Map from '../Map';
import store from '../../store.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PaginatedItems from '../../Components/Pagination';
import HomePageNavBar from '../../Components/HomePageNavBar';
import HomePageHeader from '../../Components/HomePageHeader';
//Giá trị fix cứng xài tạm cho Page Pagination
const shopCount = 50;

function UserHomePage() {
    return (
        <>
            <HomePageHeader />
            <HomePageNavBar />
            <div className="container mx-3">
                <div className="mt-lg-4 mb-lg-4">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row mb-lg-4">
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <img
                                                src={store[0].picture}
                                                className="card-img-top mb-lg-2"
                                                alt="Coffe"
                                                style={{ width: 360 + 'px', height: 250 + 'px' }}
                                            />
                                            <div className="d-flex justify-content-between">
                                                <h5 className="card-title">{store[0].name}</h5>
                                                <span>
                                                    <FontAwesomeIcon icon="fas fa-star" /> 4.5
                                                </span>
                                            </div>
                                            <p className="card-text">{store[0].address}</p>
                                            <div className="d-flex justify-content-between">
                                                <h6 className="card-title">69 Guests</h6>
                                                <div
                                                    style={{
                                                        border: 2 + 'px solid green',
                                                        borderRadius: 5 + '%',
                                                        padding: 1 + 'px',
                                                    }}
                                                >
                                                    <h6 className="card-title">Open</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <img
                                                src={store[1].picture}
                                                className="card-img-top mb-lg-2"
                                                alt="Coffe"
                                                style={{ width: 360 + 'px', height: 250 + 'px' }}
                                            />
                                            <div className="d-flex justify-content-between">
                                                <h5 className="card-title">{store[1].name}</h5>
                                                <span>
                                                    <FontAwesomeIcon icon="fas fa-star" /> 4.5
                                                </span>
                                            </div>
                                            <p className="card-text">{store[1].address}</p>
                                            <div className="d-flex justify-content-between">
                                                <h6 className="card-title">69 Guests</h6>
                                                <div
                                                    style={{
                                                        border: 2 + 'px solid green',
                                                        borderRadius: 5 + '%',
                                                        padding: 1 + 'px',
                                                    }}
                                                >
                                                    <h6 className="card-title">Open</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-lg-4">
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <img
                                                src={store[2].picture}
                                                className="card-img-top mb-lg-2"
                                                alt="Coffe"
                                                style={{ width: 360 + 'px', height: 250 + 'px' }}
                                            />
                                            <div className="d-flex justify-content-between">
                                                <h5 className="card-title">{store[2].name}</h5>
                                                <span>
                                                    <FontAwesomeIcon icon="fas fa-star" /> 4.5
                                                </span>
                                            </div>
                                            <p className="card-text">{store[2].address}</p>
                                            <div className="d-flex justify-content-between">
                                                <h6 className="card-title">69 Guests</h6>
                                                <div
                                                    style={{
                                                        border: 2 + 'px solid red',
                                                        borderRadius: 5 + '%',
                                                        padding: 1 + 'px',
                                                    }}
                                                >
                                                    <h6 className="card-title">Busy</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <img
                                                src={store[3].picture}
                                                className="card-img-top mb-lg-2"
                                                alt="Coffe"
                                                style={{ width: 360 + 'px', height: 250 + 'px' }}
                                            />
                                            <div className="d-flex justify-content-between">
                                                <h5 className="card-title">{store[3].name}</h5>
                                                <span>
                                                    <FontAwesomeIcon icon="fas fa-star" /> 4.5
                                                </span>
                                            </div>
                                            <p className="card-text">{store[3].address}</p>
                                            <div className="d-flex justify-content-between">
                                                <h6 className="card-title">69 Guests</h6>
                                                <div
                                                    style={{
                                                        border: 2 + 'px solid red',
                                                        borderRadius: 5 + '%',
                                                        padding: 1 + 'px',
                                                    }}
                                                >
                                                    <h6 className="card-title">Busy</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="page-pagination">
                                <PaginatedItems itemsPerPage={4} shopCount={shopCount} />
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserHomePage;
