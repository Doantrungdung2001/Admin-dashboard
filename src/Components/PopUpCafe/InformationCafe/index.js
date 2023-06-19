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
                    <span>Đang mở cửa - 閉店時間:22:00 </span>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div className="d-flex justify-content-between">
                    <div>
                        <FontAwesomeIcon
                            icon={faUser}
                            className="text-primary"
                            style={{ paddingRight: '8px', width: '12px' }}
                        />
                        <span>69 Guests</span>
                    </div>
                    <div
                        style={{
                            border: 2 + 'px solid green',
                            borderRadius: 5 + '%',
                            paddingTop: 1 + 'px',
                            paddingBottom: 1 + 'px',
                            paddingLeft: 1 + 'px',
                            paddingRight: 1 + 'px',
                        }}
                    >
                        <h6 style={{ margin: 0 + 'px' }}>free</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InformationCafe;
