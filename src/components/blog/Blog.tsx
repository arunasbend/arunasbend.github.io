import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import Title from "../primitives/title/Title";

interface BlogData {
  link: string;
  title: string;
  time: string;
  description: string;
}

export default function Blog({ data }: { data: BlogData[] }) {
  return (
    <section className="mh-blog">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Title title="Featured Posts" />
          </div>
          {data.map((x) => {
            return (
              <div className="col-sm-12 col-md-4">
                <div className="mh-blog-item dark-bg">
                  <img
                    src="assets/images/b-3.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="blog-inner">
                    <h2>
                      <Link to={x.link}>{x.title}</Link>
                    </h2>
                    <div className="mh-blog-post-info">
                      <ul>
                        <li>
                          <strong>Post On</strong>
                          <Link to={x.link}>{x.time}</Link>
                        </li>
                      </ul>
                    </div>
                    <p>{x.description}</p>

                    <Link to={x.link}>Read More</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
