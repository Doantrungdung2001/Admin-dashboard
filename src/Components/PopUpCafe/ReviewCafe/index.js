import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactStars from 'react-rating-stars-component';
import { useEffect, useState } from 'react';
import Stars from '../../Stars';
import classNames from 'classnames';
import axios from 'axios';

function ReviewCafe({ id }) {
    console.log('id quann', id);
    const [reviews, setReviews] = useState([]);
    const [stars, setStarts] = useState();
    const [comment, setComment] = useState('');
    const [image, setImage] = useState(null);
    const [response, setResponse] = useState(0);

    const classesBtn = classNames({
        btn: true,
        'btn-primary': true,
        disabled: stars && comment ? false : true,
    });
    const data = {
        stars: stars,
        comment: comment,
        store_id: id,
        picture: '',
        history_id: 1,
    };
    const ratingChanged = (newRating) => {
        setStarts(newRating);
    };
    const handleData = () => {
        if (stars && comment) {
            axios
                .post('http://127.0.0.1:8000/api/reviews', data)
                .then((response) => {
                    console.log(response.data);
                    if (response.data === 'success') {
                        setResponse((prev) => prev++);
                    }
                })
                .catch((error) => console.error(error));
            setStarts(0);
            setComment('');
        }
        // console.log(classesBtn.disabled);
    };
    function handleImageUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', () => setImage(reader.result));
        reader.readAsDataURL(file);
    }

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/reviews?store_id=${id}`)
            .then((response) => response.json())
            .then((data) => setReviews(data));
    }, [response]);
    console.log('dem comment', response);
    return (
        <>
            <div className="">
                <div style={{ marginBottom: '16px' }}>
                    <div className="d-flex justify-content-sm-center">
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                            // value={stars}
                            classNames="text-center"
                            style={{ width: '100%' }}
                        />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">
                            Comment
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                        ></textarea>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <input type="file" onChange={handleImageUpload} name="myFile" />
                            {image && (
                                <img src={image} alt="Uploaded image" style={{ width: '40px', height: '40px' }} />
                            )}
                        </div>
                        <button className={classesBtn} onClick={handleData}>
                            レビュー
                        </button>
                    </div>
                </div>

                {reviews.map((review) => {
                    return (
                        <div className="border-top border-bottom">
                            <div className="d-flex" style={{ margin: '8px 0px' }}>
                                <FontAwesomeIcon icon={faUserCircle} style={{ marginRight: '8px', fontSize: '32px' }} />
                                <div className="d-flex flex-column" style={{ fontSize: '13px', marginTop: '-4px' }}>
                                    <span>{review.history.user.name}</span>
                                    <span>{review.history.visited_time}</span>
                                </div>
                            </div>
                            <div>
                                <Stars ratting={review.stars} />
                                <p style={{ marginBottom: '8px' }}>{review.comment}</p>
                                {/* <img src={review.picture} alt="" style={{ width: '40px', height: '40px' }} /> */}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ReviewCafe;
