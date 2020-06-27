import React from "react";
import "./Experience.css";
import Title from "../primitives/title/Title";

function Card({ title, subtitle, years, content }: ExperienceCard) {
  return (
    <div className="timeline-item">
      <h4 className="item-title">{title}</h4>
      <span className="item-period">{years}</span>
      <span className="item-small">{subtitle}</span>
      <p className="item-description">{content}</p>
    </div>
  );
}

interface ExperienceCard {
  title: string;
  subtitle: string;
  years: string;
  content: string;
}

interface ExperienceProps {
  header: string;
  items: ExperienceCard[];
}

export default function Experience({ data }: { data: ExperienceProps[] }) {
  return (
    <div className="row" id="experience">
      {data.map((section) => {
        return (
          <div className="col-sm-12 col-md-6">
            <Title title={section.header} />

            <div className="timeline">
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
