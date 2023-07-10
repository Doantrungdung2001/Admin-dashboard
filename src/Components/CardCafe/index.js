import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './CardCafe.scss';
import PopUpCafe from '../PopUpCafe';

function CardCafe({ store, isJapanese }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = () => {
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div className="col-lg-6 mb-lg-3">
            <div className="card">
                <div className="card-body">
                    <img
                        src={store.view_picture}
                        className="card-img-top"
                        alt="Coffee"
                        style={{ width: 360 + 'px', height: 202.5 + 'px' }}
                    />
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title name-cafe" onClick={handleOpenModal}>
                            {store.name}
                        </h5>
                        <PopUpCafe
                            onClose={handleCloseModal}
                            store={store}
                            stateShow={modalIsOpen}
                            isJapanese={isJapanese}
                        />

                        <span>
                            <FontAwesomeIcon icon={faStar} style={{ color: '#E3E640' }} />{' '}
                            {Number.isInteger(Number(store.avg_rating))
                                ? Number(store.avg_rating)
                                : Number(store.avg_rating).toFixed(2)}
                        </span>
                    </div>
                    <p className="card-text">{store.address}</p>
                    <div className="d-flex justify-content-between">
                        <h6 className="card-title">{`${store.a_working_day.guests} Guests`}</h6>
                        <div
                            className={store.isFree ? 'card-status card-status__free' : 'card-status card-status__busy'}
                        >
                            <h6 className="card-title" style={{ margin: 0 + 'px' }}>
                                {store.isFree ? 'Free' : 'Busy'}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCafe;
