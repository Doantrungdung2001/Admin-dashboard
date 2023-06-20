import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styles from './CardCafe.scss';
import PopUpCafe from '../PopUpCafe';
import { Button, Modal } from 'react-bootstrap';

function CardCafe({ store }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = () => {
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div className="col-lg-6">
            <div className="card">
                <div className="card-body">
                    <img
                        src={store.picture}
                        className="card-img-top mb-lg-2"
                        alt="Coffe"
                        style={{ width: 360 + 'px', height: 250 + 'px' }}
                    />
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title name-cafe" onClick={handleOpenModal}>
                            {store.name}
                        </h5>
                        <PopUpCafe onClose={handleCloseModal} store={store} stateShow={modalIsOpen} />

                        <span>
                            <FontAwesomeIcon icon={faStar} style={{ color: '#E3E640' }} /> 4.5
                        </span>
                    </div>
                    <p className="card-text">{store.address}</p>
                    <div className="d-flex justify-content-between">
                        <h6 className="card-title">{`${store.a_working_day.guests} Guests`}</h6>
                        <div
                            className={store.status ? 'card-status card-status__free' : 'card-status card-status__busy'}
                        >
                            <h6 className="card-title" style={{ margin: 0 + 'px' }}>
                                {store.status ? 'Free' : 'Busy'}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCafe;
