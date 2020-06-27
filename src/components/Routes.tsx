import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./about/About";
import Resume from "./resume/Resume";
import Blog from "./blog/Blog";
import Portfolio from "./portfolio/Portfolio";
import Page from "./posts/Page";
import { store } from "../data/data";

const Wrapper = ({ children }: any) => {
  return (
    <div className="page-content">
      <div className="container-fluid h-100">
        <div className="wrapper">{children}</div>
      </div>
    </div>
  );
};

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <About data={store.about} />
      </Route>
      <Route exact path="/resume">
        <Wrapper>
          <Resume
            experience={store.experience}
            skills={store.skills}
            testimonials={store.testimonials}
            interests={store.interests}
            character={store.character}
          />
        </Wrapper>
      </Route>
      <Route exact path="/portfolio">
        <Wrapper>
          <Portfolio data={store.portfolio} />
        </Wrapper>
      </Route>
      <Route exact path="/posts/:id">
        <Wrapper>
          <Page getData={(id: string) => store.posts.find(x => x.id === id)} />
        </Wrapper>
      </Route>
      <Route exact path="/blog">
        <Wrapper>
          <Blog data={store.blogs} />
        </Wrapper>
      </Route>
    </Switch>
  );
}
