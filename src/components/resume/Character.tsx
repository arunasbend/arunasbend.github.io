import React from "react";
import Title from "../primitives/title/Title";
import "./Testimonials.css";
import Reference from "../primitives/Reference";

export default function Character({ data }: { data: { img: string } }) {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-12">
        <div className="col-sm-12 col-md-12">
          <Title title="Character" />
        </div>
        
        <div
          className="col-sm-6 col-md-6 col-lg-6"
          style={{ display: "inline-block", verticalAlign: "top" }}
        >
          <div>
            <b>Extraverted</b> individuals prefer group activities and get
            energized by social interaction. They tend to be more enthusiastic
            and more easily excited than introverts.
          </div>
          <div>
            <b>Intuitive</b> individuals are very imaginative, open-minded and
            curious. They prefer novelty over stability and focus on hidden
            meanings and future possibilities.
          </div>
          <div>
            <b>Feeling</b> individuals are sensitive and emotionally expressive.
            They are more empathic and less competitive than Thinking types, and
            focus on social harmony and cooperation.
          </div>
          <div>
            <b>Prospecting</b> individuals are very good at improvising and
            spotting opportunities. They tend to be flexible, relaxed
            nonconformists who prefer keeping their options open.
          </div>
          <div>
            <b>Assertive</b> individuals are self-assured, even-tempered and
            resistant to stress. They refuse to worry too much and do not push
            themselves too hard when it comes to achieving goals.
          </div>
          <br/>
          <div>
            <Reference
              to="https://www.16personalities.com/enfp-personality"
              text="Read more about personality type"
            />
          </div>
          <div>
            <Reference
              to="https://www.16personalities.com/articles/strategies-people-mastery"
              text="Read more about personality life strategy"
            />
          </div>
          <div>
            <Reference
              to="https://www.16personalities.com/articles/roles-diplomats"
              text="Read more about diplomatic personality types"
            />
          </div>
        </div>
        <div
          className="col-sm-6 col-md-6 col-lg-6"
          style={{ display: "inline-block" }}
        >
          <img
            src={data.img}
            alt="Personality summary"
            style={{ verticalAlign: "baseline", maxWidth: '300px' }}
          />
        </div>
      </div>
    </div>
  );
}
