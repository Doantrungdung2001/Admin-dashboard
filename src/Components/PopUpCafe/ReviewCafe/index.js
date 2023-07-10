import { faCheck, faUserCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactStars from 'react-rating-stars-component';
import { useEffect, useState } from 'react';
import Stars from '../../Stars';
import classNames from 'classnames';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

function ReviewCafe({ id }) {
    console.log('id quann', id);
    const [reviews, setReviews] = useState([]);
    const [stars, setStarts] = useState();
    const [comment, setComment] = useState('');
    const [image, setImage] = useState(null);
    const [response, setResponse] = useState('');
    const [countSuccess, setCountSucess] = useState(0);
    const [stateShow, setStateShow] = useState(false);

    useEffect(() => {
        console.log('call API comment');
        fetch(`${process.env.REACT_APP_BACKEND_API_URL}/reviews?store_id=${id}`)
            .then((response) => response.json())
            .then((data) => setReviews(data));
    }, [countSuccess]);
    // console.log('dem comment', countSuccess);

    const classesBtn = classNames({
        btn: true,
        'btn-primary': true,
        disabled: stars && comment ? false : true,
    });

    const ratingChanged = (newRating) => {
        setStarts(newRating);
    };
    function handleImageUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', () => setImage(reader.result));
        reader.readAsDataURL(file);
    }

    const data = {
        stars: stars,
        comment: comment,
        store_id: id,
        picture: '',
        history_id: 1,
    };

    const handleData = () => {
        if (stars && comment) {
            axios
                .post(`${process.env.REACT_APP_BACKEND_API_URL}/reviews`, data)
                .then((response) => {
                    console.log(response.data.message);
                    setStateShow(true);
                    setResponse(response.data.message);
                    if (response.data.message === 'success') {
                        setCountSucess((prevState) => prevState + 1);
                    }
                })
                .catch((error) => console.error(error));
            setStarts(0);
            setComment('');
        }
    };

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
                            value={stars}
                            classNames="text-center"
                            style={{ width: '100%' }}
                        />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">
                            コメント
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
                            {image && <img src={image} alt="Uploaded" style={{ width: '40px', height: '40px' }} />}
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
                                    <span>{review.user.name}</span>
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
            <Modal show={stateShow} style={{ marginTop: '17%' }}>
                {response === 'success' ? (
                    <div className="modal-content">
                        <div className="modal-header justify-content-center">
                            <div>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="text-success"
                                    style={{ paddingRight: '8px', width: '12px' }}
                                />
                                <span>コメント成功</span>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button
                                type="button"
                                className="btn btn-success"
                                data-bs-dismiss="modal"
                                onClick={() => setStateShow(false)}
                            >
                                閉じる
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="modal-content">
                        <div className="modal-header justify-content-center" style={{ alignItems: 'center' }}>
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="text-danger"
                                style={{ paddingRight: '8px', width: '12px' }}
                            />
                            <span>コメント失敗</span>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => setStateShow(false)}
                            >
                                閉じる
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
}

export default ReviewCafe;
