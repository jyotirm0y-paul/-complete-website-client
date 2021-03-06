import React, { useEffect, useState } from 'react';
import alexender from '../../../images/man-1.jpg';
import john from '../../../images/man-2.jpg';
import silvia from '../../../images/man-3.jpg';
import Review from '../Review/Review';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    // console.log(service.length);
  
    useEffect(() => {
      fetch('https://enigmatic-mountain-35188.herokuapp.com/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
    }, [])
    return (
        <section className="reviews pt-5">
            <div className="container">
                <div className="row">
                    <div className="service-section text-center mb-5">
                        <h1 className="pt-5">Reviews</h1>
                    </div>
                    {
    reviews.map(review =><Review key={review._id} review={review}></Review>)
  }
                </div>
            </div>
        </section>
    );
};

export default Reviews;