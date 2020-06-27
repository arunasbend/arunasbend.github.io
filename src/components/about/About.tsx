import React from "react";
import Particles from "./Particles";
import bgTile from "./background-tile.png";
import "./About.css";

export interface AboutData {
  title: string;
  download: string;
  image: string;
  subtitle: string;
  description: string;
  socialMedia: { icon: string; link: string; text?: string }[];
}

export default function About({ data }: { data: AboutData }) {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="main-container">
          <section className="wrapper">
            <div className="row row-eq-height h-100">
              <div className="col-md-3 purple-bg">
                <div className="iq-objects">
                  <Particles />
                  <span className="iq-objects-01">
                    <img
                      className="img-fluid"
                      src={bgTile}
                      alt="drive"
                    />
                  </span>
                </div>
              </div>
              <div className="col-md-9 main-content align-self-center">
                <div className="iq-home">
                  <div className="home-deta iq-mt-90">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="boder-img">
                          <img
                            src={data.image}
                            className="img-fluid"
                            alt="#"
                          />
                        </div>
                      </div>
                      <div className="col-md-8 content-deta">
                        <AboutTitle data={data} />
                        <AboutSubTitle data={data} />
                        <AboutDescription data={data} />

                        <a
                          className="button"
                          style={{ marginBottom: "20px", marginTop: "20px" }}
                          href={data.download}
                          download
                        >
                          Download my CV
                        </a>

                        <SocialMedia data={data} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function AboutTitle({ data }: { data: AboutData }) {
  return (
    <h2
      style={{ fontWeight: 800 }}
      dangerouslySetInnerHTML={{
        __html: data.title,
      }}
    ></h2>
  );
}

function AboutSubTitle({ data }: { data: AboutData }) {
  return (
    <h1
      dangerouslySetInnerHTML={{
        __html: data.subtitle,
      }}
    ></h1>
  );
}

function AboutDescription({ data }: { data: AboutData }) {
  return (
    <p
      dangerouslySetInnerHTML={{
        __html: data.description,
      }}
    ></p>
  );
}

function SocialMedia({ data }: { data: AboutData }) {
  return (
    <ul>
      {data.socialMedia.map((x) => {
        return (
          <li>
            <a href={x.link}>
              <i className={`fa fa-${x.icon}`}></i>
              {x.text || ""}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
