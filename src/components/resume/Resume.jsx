import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Interests from "../interests/Interests";
import Character from "./Character";

export default function Resume({
  experience,
  skills,
  testimonials,
  interests,
  character,
}) {
  return (
    <>
      <Experience data={experience} />
      <Skills data={skills} />
      <Testimonials data={testimonials} />
      <Interests data={interests} />
      <Character data={character} />
    </>
  );
}
