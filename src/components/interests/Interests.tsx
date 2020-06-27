import React from "react";
import "./Interests.css";
import Title from "../primitives/title/Title";

export default function Interests({
  data,
}: {
  data: { icon: string; title: string }[];
}) {
  if (!data || !data.length) {
    return <></>
  }
  
  return (
    <div className="row">
      <div className="col-md-12">
        <Title title="My Interests" />
        <ul className="interests">
          {data.map((x) => {
            return (
              <li>
                <i className={`fa fa-${x.icon}`}></i>
                <h6>{x.title}</h6>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
