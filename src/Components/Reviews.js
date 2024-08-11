import React, { useEffect, useState, useCallback } from "react";
import "../Styles/Reviews.css";
import { Box } from "@mui/material";
import supabase from "../Config/supabaseClient";

function Reviews() {
  const [fetchError, setFetchError] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [rMessage, setMessage] = useState("");
  const [rName, setName] = useState("");
  const [rSchool, setSchool] = useState("");

  const [reviewsLength, setReviewsLength] = useState(0);
  const [review, setReview] = useState(0);

  const handleReviewsUpdation = useCallback((testimonials) => {
    if (!testimonials.length || review < 0 || review >= testimonials.length) return;
    const reviewMessage = testimonials[review];
    if (!reviewMessage) return;
    setName(reviewMessage.name);
    setSchool(reviewMessage.school);
    setMessage(reviewMessage.message);
  }, [review]);

  const backBtnClick = () => {
    setReview((prev) => (prev <= 0 ? reviewsLength : prev - 1));
  };

  const frontBtnClick = () => {
    setReview((prev) => (prev >= reviewsLength ? 0 : prev + 1));
  };

  useEffect(() => {
    const fetchTestimonialsData = async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select();
      if (error) {
        setFetchError('Could not fetch the testimonials data.');
        setTestimonials([]);
        console.log(error);
      } else if (data) {
        setTestimonials(data);
        setFetchError(null);
        setReviewsLength(data.length - 1);
        handleReviewsUpdation(data);
      }
    };
    fetchTestimonialsData();
  }, [handleReviewsUpdation]);

  useEffect(() => {
    handleReviewsUpdation(testimonials);
  }, [review, testimonials, handleReviewsUpdation]);

  return (
    <div className="review-section" id="reviews">
      <Box maxWidth="76%">
        {fetchError && (<p>{fetchError}</p>)}
        {testimonials.length > 0 && (
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
