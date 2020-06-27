import React from "react";
import "./Skills.css";
import Title from "../primitives/title/Title";

function roundTo5(x: number) {
  return Math.ceil(x / 5) * 5;
}

interface Skill {
  title: string;
  proficiency: number;
}

interface SkillsData {
  header: string;
  items: Skill[];
}

export default function Skills({ data }: { data: SkillsData[] }) {
  return (
    <div className="row" id="skills">
      {data.map((col) => {
        return (
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="block">
              <Title title={col.header} />

              <div className="skills-info">
                {col.items.map((skill) => {
                  return (
                    <>
                      <h4>{skill.title}</h4>
                      <div className="skill-container">
                        <div
                          className={`skill-percentage skill-${roundTo5(
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
