import React from "react";

const TestimonialItem = ({ image, name, position, content, rating }) => {
  return (
    <div className="testi-item" data-aos="zoom-in">
      <div className="testi-author">
        <div className="testi-author-name">
          <h3>{name}</h3>
          <span>{position}</span>
        </div>
        <div className="testi-author-img">
          <img src={image} alt="testi author img" />
        </div>
      </div>
      <p>{content}</p>
      <div className="ratings">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
    </div>
  );
};

export default TestimonialItem;
