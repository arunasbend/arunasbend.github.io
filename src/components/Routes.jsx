import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./about/About";
import Resume from "./resume/Resume";
import Blog from "./blog/Blog";
import Post1 from "./blog/posts/Post1";
import sabrinaStPeter from "./sabrinaStPeter.jpg";
import dovydasLiniovas from "./dovydasLiniovas.jpg";

const Wrapper = ({ children }) => {
  return (
    <div className="page-content">
      <div class="container-fluid h-100">
        <div class="wrapper">{children}</div>
      </div>
    </div>
  );
};

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <About />
      </Route>
      <Route exact path="/resume">
        <Wrapper>
          <Resume
            experience={[
              {
                header: "Education",
                items: [
                  {
                    title: "Software systems",
                    subtitle: "Kaunas University of Technology",
                    years: "2016 - 2020",
                    content:
                      "Studies contained various different CS topics: Intro to many languages (Assembly, C, Go, C#, TypeScript, Ruby, Python, Scala, F#, Prolog, Haskell, SQL), computer science concepts (dynamic programming, concurrent programming, big O notation, data structures, graph theory, design patterns), web development, mobile development, databases, machine learning, math and statistics",
                  },
                  {
                    title: "Sourcery academy",
                    subtitle: "Devbridge group",
                    years: "2017 Feb - Jun",
                    content:
                      "Introduction to web development technologies, agile methodology and teamwork. 3 month course included 5 sprints, 10 lectures about React, Web API using C# and Entity framework to integrate with SQL database.",
                  },
                ],
              },
              {
                header: "Work experience",
                items: [
                  {
                    title: "Software developer",
                    subtitle: "Agmis",
                    years: "Aug 2019 - Current",
                    content: "",
                  },
                  {
                    title: "Software developer",
                    subtitle: "Devbridge group",
                    years: "Oct 2018 - Aug 2019",
                    content:
                      "Fullstack development, teaching more junior developers (and seniors in form of many internal presentations), support and on-call rotation",
                  },
                  {
                    title: "Junior software developer",
                    subtitle: "Devbridge group",
                    years: "Jun 2017 - Oct 2018",
                    content:
                      "Fullstack web development in a user facing application with multiple micro-services",
                  },
                ],
              },
            ]}
            skills={[
              {
                header: "Top skills",
                items: [
                  { title: "JavaScript / TypeScript", proficiency: 100 },
                  { title: "Unit testing", proficiency: 100 },
                  { title: "MongoDB", proficiency: 80 },
                  { title: "SQL", proficiency: 85 },
                  { title: "Communication", proficiency: 90 },
                ],
              },
              {
                header: "Proficient",
                items: [
                  { title: "C#", proficiency: 90 },
                  { title: "React", proficiency: 85 },
                  { title: "AWS", proficiency: 85 },
                ],
              },
              {
                header: "Can get the job done with",
                items: [
                  { title: "Python", proficiency: 70 },
                  { title: "Go", proficiency: 40 },
                  { title: "Scala", proficiency: 50 },
                  { title: "Angular", proficiency: 60 },
                  { title: "Knockout", proficiency: 75 },
                ],
              },
            ]}
            testimonials={[
              {
                link: "https://www.linkedin.com/in/sabrinastpeter/",
                person: "Sabrina St. Peter",
                workplace: "Devbridge group",
                position: "Customer Success Manager",
                icon: sabrinaStPeter,
                content:
                  "Arunas and I worked together on ServiceBridge (part of DevBridge Group). As one of the engineers who helped with support tickets, he had the responsibility to help me explain issues to our user base. Arunas explained issues in non-technical terms and was extremely patient with follow up questions. He was also very thorough, which was important as we were not co-located and our time zones had a seven-hour difference. I consider myself lucky to have worked alongside Arunas and know he would be a great addition to any team.",
              },
              {
                link: "https://www.linkedin.com/in/dovydas-liniovas/",
                person: "Dovydas Liniovas",
                workplace: "Devbridge group",
                position: "Frontend engineer",
                icon: dovydasLiniovas,
                content:
                  "I've worked with Arūnas for almost a year, he's good at what he does and helps others along the way in easily understandable terms. I've learned a lot from him and I know he'll be a great addition to any team.",
              },
            ]}
          />
        </Wrapper>
      </Route>
      <Route exact path="/blog">
        <Wrapper>
          <Blog
            data={[
              {
                title:
                  "Building a faster rocket: Achieving quicker app load times",
                time: "05/09/2019",
                description:
                  "Techniques for optimizing and monitoring frontend performance",
                link: "blog/1",
              },
            ]}
          />
        </Wrapper>
      </Route>
      <Route exact path="/blog/1">
        <Wrapper>
          <Post1 />
        </Wrapper>
      </Route>
    </Switch>
  );
}
