import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Stars({ ratting }) {
    const stars = [];
    for (let i = 0; i < ratting; i++) {
        stars.push(<FontAwesomeIcon icon={faStar} className="text-warning" />);
    }

    return <>{stars.map((star) => star)}</>;
}

export default Stars;
