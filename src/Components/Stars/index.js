import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Stars({ ratting }) {
    const stars = [];
    for (let i = 0; i < ratting; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} style={{ color: '#ffd700' }} />);
    }

    return <>{stars.map((star) => star)}</>;
}

export default Stars;
