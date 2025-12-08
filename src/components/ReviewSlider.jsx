import React from "react";

const reviews = [
  {
    name: "Deepak Tiwari",
    rating: 5,
    text: "Amazing service! Highly recommend.",
  },
  { name: "Mayank Pandey", rating: 4, text: "Very professional and timely." },
  { name: "Sagar Singh", rating: 5, text: "Exceptional quality and support." },
  {
    name: "Shantanu Mehta",
    rating: 4,
    text: "Loved their work, will use again.",
  },
];

export default function ReviewSliderContinuous() {
  // Duplicate the reviews array for infinite loop
  const loopedReviews = [...reviews, ...reviews];

  return (
    <section className="review-slider-continuous">
      <h2 className="slider-title">What Our Customers Say</h2>
      <div className="slider-track">
        {loopedReviews.map((review, index) => (
          <div key={index} className="review-box">
            <p className="review-text">"{review.text}"</p>
            <div className="review-rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < review.rating ? "star filled" : "star"}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <p className="review-name">- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
