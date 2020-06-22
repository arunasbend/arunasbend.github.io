import React from "react";
import "./Skills.css";

function roundTo5(x) {
  return Math.ceil(x / 5) * 5;
}

export default function Skills({ data }) {
  return (
    <div class="row" id="skills">
      {data.map((col) => {
        const [header, ...subHeader] = col.header.split(" ");

        return (
          <div class="col-sm-6 col-md-6 col-lg-6">
            <div class="block">
                <h3>
                  {header}&nbsp;<span>{subHeader.join(" ")}</span>
                </h3>

              <div class="skills-info">
                {col.items.map((skill) => {
                  return (
                    <>
                      <h4>{skill.title}</h4>
                      <div class="skill-container">
                        <div
                          class={`skill-percentage skill-${roundTo5(
                            skill.proficiency
                          )}`}
                        ></div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
