import React from "react";
import Title from "../primitives/title/Title";
import "./Testimonials.css";

interface TestimonialData {
  icon: string;
  person: string;
  position: string;
  workplace: string;
  content: string;
}

export default function Testimonials({ data }: { data: TestimonialData[] }) {
  return (
    <div className="row" id="testimonials">
      <div className="col-sm-12 col-md-12">
        <Title title="Testimonials" />

        <div className="testimonials owl-carousel block">
          {data.map((x) => {
            return (
              <div className="testimonial-item">
                <div className="testimonial-credits">
                  <div className="testimonial-picture">
                    <img src={x.icon} alt="" />
                  </div>
                  <div className="testimonial-author-info">
                    <p className="testimonial-author">{x.person}</p>
                    <p className="testimonial-firm">
                      {x.position}, {x.workplace}
                    </p>
                  </div>
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-text">
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
