import React, { useEffect, useState } from "react";
import "../Styles/Reviews.css";
import { Box } from "@mui/material";
import supabase from "../Config/supabaseClient";

function Reviews() {
  const [fetchError, setFetchError] = useState(null);
  const [testimonials, setTestimonials] = useState(null);
  const [rMessage, setMessage] = useState(null);
  const [rName, setName] = useState(null);
  const [rSchool, setSchool] = useState(null);

  const [reviewsLength, setReviewsLength] = useState(0);
  const [review, setReview] = useState(0);

  useEffect(() => {
    const fetchTestimonialsData = async() => {
      const { data, error } = await supabase
        .from('testimonials')
        .select()
      if(error) {
        setFetchError('Could not fetch the testimonials data.');
        setTestimonials(null);
        console.log(error);
      } if(data) {
        setTestimonials(data);
        setFetchError(null);
        setReviewsLength(data.length - 1);
        handleReviewsUpdation(data);
      }
    }
    fetchTestimonialsData();
  }, []);

  const handleReviewsUpdation = (testimonialsData) => {
    const reviewMessage = testimonialsData[review];
    setName(reviewMessage.name);
    setSchool(reviewMessage.school);
    setMessage(reviewMessage.message);
  };

  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
    handleReviewsUpdation(testimonials);
  };

  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
    handleReviewsUpdation(testimonials);
  };

  return (
    <div className="review-section" id="reviews">
      <Box maxWidth="76%">
      {fetchError && (<p>{fetchError}</p>)}
      {testimonials && (
        <div className="rw-text-content">
          <p className="rw-text-desc">Past Student <span className="rw-text-num">Testimonials</span></p>
          <p className="rw-text-format">
            <span className="rw-text-quote1">''</span>
            <span className="rw-review">{rMessage}</span>
            <span className="rw-text-quote2">''</span>
          </p>
          <div className="rw-authors">
            <div className="rw-names">
              <p className="rw-reviewer-name">{rName}</p>
              <p className="rw-reviewer-place">{rSchool}</p>
            </div>
            <div className="rw-btns">
              <button
                className="rw-next-btn"
                type="button"
                onClick={backBtnClick}
              >
                ←
              </button>
              <button
                className="rw-next-btn"
                type="button"
                onClick={frontBtnClick}
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
      </Box>
    </div>
  );
}

export default Reviews;
