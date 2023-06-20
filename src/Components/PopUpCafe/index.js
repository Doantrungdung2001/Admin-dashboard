import classNames from 'classnames/bind';
import styles from './PopUpCafe.scss';

import { faChevronDown, faClock, faClose, faLocation, faPerson, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import InformationCafe from './InformationCafe';
import ReviewCafe from './ReviewCafe';
import IntroduceCafe from './IntroduceCafe';

// const cx = classNames.bind(styles);

function PopUpCafe({ onClose, stateShow, store }) {
    const [nav, setNav] = useState(0);
    const handleInfomationCafe = () => {
        setNav(0);
    };
    const handleReviewCafe = () => {
        setNav(1);
    };
    const handleIntroduceCafe = () => {
        setNav(2);
    };

    let contentPopUp;
    // eslint-disable-next-line default-case
    switch (nav) {
        case 0:
            contentPopUp = <InformationCafe store={store} />;
            break;
        case 1:
            contentPopUp = <ReviewCafe id={store.id} />;
            break;
        case 2:
            contentPopUp = <IntroduceCafe store={store} />;
            break; //
    }

    const styles = {
        ':hover': {
            cursor: 'pointer',
            opacity: 0.6,
        },
    };

    return (
        <Modal show={stateShow} onHide={onClose}>
            <div className="modal-content">
                <div
                    className="modal-header "
                    style={{
                        flexDirection: 'column',
                        paddingBottom: '0px',
                    }}
                >
                    <img src={store.picture} alt="cafe" style={{ height: 200 + 'px', width: 100 + '%' }} />
                    <h5 className="modal-title" style={{ padding: '8px 0px' }}>
                        {store.name}
                    </h5>
                    <div className="">
                        <span style={{ paddingRight: '4px', opacity: '0.75' }}>4.5</span>
                        <FontAwesomeIcon icon={faStar} style={{ color: 'yellow' }} />
                        <p style={{ marginBottom: '8px', opacity: '0.75' }}>Gioi thieu</p>
                    </div>

                    <ul className="nav nav-underline justify-content-around" style={{ width: '100%' }}>
                        <li className="nav-item">
                            <span className="fw-bold" onClick={handleInfomationCafe} style={styles}>
                                情報
                            </span>
                        </li>
                        <li class="nav-item">
                            <span className="fw-bold" onClick={handleReviewCafe} style={styles}>
                                レビュー
                            </span>
                        </li>
                        <li class="nav-item">
                            <span className="fw-bold" onClick={handleIntroduceCafe}>
                                紹介
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="modal-body">{contentPopUp}</div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onClose}>
                        Close
                    </button>
                    {/* <button type="button" className="btn btn-primary">
                        Save changes
                    </button> */}
                </div>
            </div>
        </Modal>
    );
}

export default PopUpCafe;
