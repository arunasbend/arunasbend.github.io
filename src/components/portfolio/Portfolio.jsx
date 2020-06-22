import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

export default function Portfolio({ data }) {
  return (
    <section class="mh-blog image-bg featured-img-two" id="mh-blog">
      <div class="img-color-overlay">
        <div class="container">
          <div class="row section-separator">
            <div class="col-sm-12 section-title">
              <h3>Example work</h3>
            </div>
            {data.map((x) => {
              return (
                <div class="col-sm-12 col-md-4">
                  <div class="mh-blog-item dark-bg">
                    <img src="assets/images/b-3.png" alt="" class="img-fluid" />
                    <div class="blog-inner">
                      <h2>
                        <Link to={x.link}>{x.title}</Link>
                      </h2>
                      <div class="mh-blog-post-info">
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
      </div>
    </section>
  );
}
