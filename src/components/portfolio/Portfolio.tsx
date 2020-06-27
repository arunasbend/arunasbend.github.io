import React from "react";
import "./Portfolio.css";
import Reference from "../primitives/Reference";
import Title from "../primitives/title/Title";

export interface PortfolioItem {
  link: string;
  title: string;
  time: string;
  description: string;
}

export default function Portfolio({ data }: { data: PortfolioItem[] }) {
  return (
    <section className="mh-blog">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Title title="Side projects" />
          </div>
          <div className="col-sm-12">
            <div className="alert alert-warning">
              WARNING: These are just a few simple examples. I have tackled way
              bigger challenges that I can't share.
            </div>
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
                      <Reference to={x.link} text={x.title} />
                    </h2>
                    <div className="mh-blog-post-info">
                      <ul>
                        <li>
                          <Reference to={x.link} text={x.time} />
                        </li>
                      </ul>
                    </div>
                    <p>{x.description}</p>

                    <Reference to={x.link} text={"Read more"} />
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
