import {
    faCheck,
    faChevronDown,
    faClock,
    faLocationDot,
    faPeopleSimple,
    faUser,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './InformationCafe.scss';

function InformationCafe({ store }) {
    const styles = { paddingRight: '8px', width: '12px' };

    return (
        <>
            <div className="modal-body">
                {store.air_condition === 0 ? (
                    <>
                        <FontAwesomeIcon icon={faXmark} className="text-danger" style={styles} />
                        <span>No Air Condition</span>
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon icon={faCheck} className="text-success" style={styles} />
                        <span>Air Condition</span>
                    </>
                )}
            </div>
            <div
                className="modal-body"
                // eslint-disable-next-line no-useless-concat
                style={{ borderTop: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' }}
            >
                {store.parking_lot === 0 ? (
                    <>
                        <FontAwesomeIcon icon={faXmark} className="text-danger" style={styles} />
                        <span>No Parking lot</span>
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon icon={faCheck} className="text-success" style={styles} />
                        <span>Parking lot</span>
                    </>
                )}
            </div>
            <div style={{ marginTop: '16px' }}>
                <div>
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-primary"
                        style={{ paddingRight: '8px', width: '12px' }}
                    />
                    <span>{store.address}</span>
                </div>
                <div>
                    <FontAwesomeIcon
                        icon={faClock}
                        className="text-primary "
                        style={{ paddingRight: '8px', width: '12px' }}
                    />
                    <span>
                        {store.isOpen ? '開いています' : '開いていません'} - {store.business_hour}{' '}
                    </span>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        <FontAwesomeIcon
                            icon={faUser}
                            className="text-primary"
                            style={{ paddingRight: '8px', width: '12px' }}
                        />
                        <span>{`${store.a_working_day.guests} Guests`}</span>
                    </div>
                    <div className={store.status ? 'cafe-status cafe-status__free' : 'cafe-status cafe-status__busy'}>
                        <h6 style={{ margin: 0 + 'px' }}>{store.status ? 'Free' : 'Busy'}</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InformationCafe;
