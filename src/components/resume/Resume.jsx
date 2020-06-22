import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import Testimonials from "./Testimonials";

export default function Resume({ experience, skills, testimonials }) {
  return (
    <>
      <Experience data={experience} />
      <Skills data={skills} />
      <Testimonials data={testimonials} />
    </>
  );
}
