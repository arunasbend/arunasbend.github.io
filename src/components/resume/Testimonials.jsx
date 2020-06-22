import React from "react";
import "./Testimonials.css";

export default function Testimonials({ data }) {
  return (
    <div class="row" id="testimonials">
      <div class="col-sm-12 col-md-12">
        <h3>Testimonials</h3>

        <div class="testimonials owl-carousel block">
          {data.map((x) => {
            return (
              <div class="testimonial-item">
                <div class="testimonial-credits">
                  <div class="testimonial-picture">
                    <img
                      src={x.icon}
                      alt=""
                    />
                  </div>
                  <div class="testimonial-author-info">
                    <p class="testimonial-author">{x.person}</p>
                    <p class="testimonial-firm">
                      {x.position}, {x.workplace}
                    </p>
                  </div>
                </div>
                <div class="testimonial-content">
                  <div class="testimonial-text">
                    <p>{x.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
