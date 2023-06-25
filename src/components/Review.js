import React, { useState } from 'react';

function Review() {
    const [reviews, setReviews] = useState([]);
    const [reviewContent, setReviewContent] = useState('');
    const [authorName, setAuthorName] = useState('');

    const handleAddReview = (event) => {
        event.preventDefault();
        const newReview = {
            content: reviewContent,
            author: authorName
        };
        setReviews([...reviews, newReview]);
        setReviewContent('');
        setAuthorName('');
        alert('Review Added!');
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title fs-3 mb-3">Client Reviews</h5>

                    <div className="card mb-3 mx-4">
                        <div className="card-body  mt-2 mb-2">
                            <p>I recently had the pleasure of exploring T Shoppee, and I must say that it has left an indelible impression on me.This e-commerce website has truly raised the bar for online shopping experiences,offering an outstanding array of products and a user-friendly platform that makes every interaction a breeze.</p>
                            <div>~Tarun Goyal</div>
                        </div>
                    </div>
                    {reviews.map((review, index) => (
                        <div className="card mb-3 mx-4">
                            <div className="card-body  mt-2 mb-2">
                                <div key={index}>
                                    <p>{review.content}</p>
                                    <h6 className="text-muted">{review.author}</h6>
                                </div>
                            </div>
                        </div>
                    ))}

                    <form onSubmit={handleAddReview}>
                        <div className="form-group">
                            <label htmlFor="reviewContentInput">Review:</label>
                            <textarea
                                id="reviewContentInput"
                                className="form-control"
                                value={reviewContent}
                                onChange={(e) => setReviewContent(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="authorNameInput">Name:</label>
                            <input
                                type="text"
                                id="authorNameInput"
                                className="form-control"
                                value={authorName}
                                onChange={(e) => setAuthorName(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-dark mt-3">Add Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Review;
