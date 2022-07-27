import React from "react";
import TestimonialImage1 from "../../assets/images/testimonials/1.jpg";
import TestimonialImage2 from "../../assets/images/testimonials/2.jpg";
import TestimonialImage3 from "../../assets/images/testimonials/3.jpg";
import TestimonialItem from "./components/TestimonialItem";
import "./style.css";

const Testimonial = () => {
  const testimonialMembers = [
    {
      image: TestimonialImage1,
      name: "Soudha sana",
      position: "Food Specialist",
      content:
        "Walked in for dinner in a Wednesday night and sat at the bar. The bartender, Erin, couldn’t have been nicer. She was quick, efficient and friendly.",
      rating: 4,
    },
    {
      image: TestimonialImage2,
      name: "Arpitha Rajeev",
      position: "Entreprenour",
      content:
        "Coffee was fresh, the corned beef hash is amazing and homemade, even the toast was good! Oh, and the potato pancakes! Everything we ordered was fresh and delicious.",
      rating: 5,
    },
    {
      image: TestimonialImage3,
      name: "Maheen Malhothor",
      position: "Food Vlogger",
      content:
        "The food was excellent and so was the service.  I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens (gluten-free) which was also very good.",
      rating: 4,
    },
  ];
  return (
    <section className="testomonials-section sec-padding" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-title="testimonials" data-aos="fade-up">
              some feedbacks
            </h2>
          </div>
        </div>
        <div className="row">
          {testimonialMembers &&
            testimonialMembers.map((testimonialMember, index) => {
              return (
                <TestimonialItem key={index}
                  image={testimonialMember.image}
                  name={testimonialMember.name}
                  position={testimonialMember.position}
                  content={testimonialMember.content}
                  rating= {testimonialMember.rating}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
