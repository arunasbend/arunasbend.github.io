import React from "react";
import "./Experience.css";

function Card({ title, subtitle, years, content }) {
  return (
    <div class="timeline-item">
      <h4 class="item-title">{title}</h4>
      <span class="item-period">{years}</span>
      <span class="item-small" href="#">
        {subtitle}
      </span>
      <p class="item-description">{content}</p>
    </div>
  );
}

export default function Experience({ data }) {
  return (
    <div class="row" id="experience">
      {data.map((section) => {
        return (
          <div class="col-sm-12 col-md-6">
            <h3>{section.header}</h3>
            <div class="timeline">
              {section.items.map((card) => {
                return (
                  <Card
                    title={card.title}
                    subtitle={card.subtitle}
                    years={card.years}
                    content={card.content}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
