import Map from '../Map';
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
                                                src="https://lh3.googleusercontent.com/p/AF1QipOdXvToyzQlOjS9uz6ZRLk6RNKwki3VpuHfH7Vq=s680-w680-h510"
                                                className="card-img-top mb-lg-2"
                                                alt="Shop image"
                                                style={{ width: 360 + 'px', height: 250 + 'px' }}
                                            />
                                            <div class="d-flex justify-content-between">
                                                <h5 className="card-title">Highland Coffee</h5>
                                                <span>
                                                    <FontAwesomeIcon icon="fas fa-star" /> 4.5
                                                </span>
                                            </div>
                                            <p className="card-text">Tran Dai Nghia, Hai Ba Trung, Ha Noi </p>
                                            <div class="d-flex justify-content-between">
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
                                                src="https://lh3.googleusercontent.com/p/AF1QipOdXvToyzQlOjS9uz6ZRLk6RNKwki3VpuHfH7Vq=s680-w680-h510"
                                                className="card-img-top mb-lg-2"
                                                alt="Shop image"
                                                style={{ width: 360 + 'px', height: 250 + 'px' }}
                                            />
                                            <div class="d-flex justify-content-between">
                                                <h5 className="card-title">Highland Coffee</h5>
                                                <span>
                                                    <FontAwesomeIcon icon="fas fa-star" /> 4.5
                                                </span>
                                            </div>
                                            <p className="card-text">Tran Dai Nghia, Hai Ba Trung, Ha Noi </p>
                                            <div class="d-flex justify-content-between">
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
                                                src="https://lh3.googleusercontent.com/p/AF1QipOdXvToyzQlOjS9uz6ZRLk6RNKwki3VpuHfH7Vq=s680-w680-h510"
                                                className="card-img-top mb-lg-2"
                                                alt="Shop image"
                                                style={{ width: 360 + 'px', height: 250 + 'px' }}
                                            />
                                            <div class="d-flex justify-content-between">
                                                <h5 className="card-title">Highland Coffee</h5>
                                                <span>
                                                    <FontAwesomeIcon icon="fas fa-star" /> 4.5
                                                </span>
                                            </div>
                                            <p className="card-text">Tran Dai Nghia, Hai Ba Trung, Ha Noi </p>
                                            <div class="d-flex justify-content-between">
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
                                                src="https://lh3.googleusercontent.com/p/AF1QipOdXvToyzQlOjS9uz6ZRLk6RNKwki3VpuHfH7Vq=s680-w680-h510"
                                                className="card-img-top mb-lg-2"
                                                alt="Shop image"
                                                style={{ width: 360 + 'px', height: 250 + 'px' }}
                                            />
                                            <div class="d-flex justify-content-between">
                                                <h5 className="card-title">Highland Coffee</h5>
                                                <span>
                                                    <FontAwesomeIcon icon="fas fa-star" /> 4.5
                                                </span>
                                            </div>
                                            <p className="card-text">Tran Dai Nghia, Hai Ba Trung, Ha Noi </p>
                                            <div class="d-flex justify-content-between">
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
