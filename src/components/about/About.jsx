import React from "react";
import Particles from "./Particles";
import "./About.css";

export default function About() {
  return (
    <>
      <div class="container-fluid h-100">
        <div class="main-container">
          <section class="wrapper">
            <div class="row row-eq-height h-100">
              <div class="col-md-3 purple-bg">
                <div class="iq-objects">
                  <Particles />
                  <span class="iq-objects-01">
                    <img class="img-fluid" src="images/01.png" alt="drive" />
                  </span>
                </div>
              </div>
              <div class="col-md-9 main-content align-self-center">
                <div id="boxscroll" class="iq-home">
                  <div class="home-deta iq-mt-90">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="boder-img">
                          <img src="images/me.jpg" class="img-fluid" alt="#" />
                        </div>
                      </div>
                      <div class="col-md-8 content-deta">
                        <h2 class="iq-tw-8 ">
                          Hello,
                          <br />I Am Arūnas Bendoraitis
                        </h2>
                        <h1>
                          <span class="iq-font-purple">Backend</span> Developer
                        </h1>
                        <p class="lead iq-tw-4">
                          David There are many variations of passages of Lorem
                          Ipsum, you need to be sure there.
                        </p>
                        <a class="button iq-mt-30" href="about-us.html">
                          Download my CV
                        </a>
                        <ul>
                          <li>
                            <i class="fa fa-envelope"></i>
                            <a href="mailto:">
                              arunas.bendoraitis@protonmail.com
                            </a>
                          </li>
                          <li>
                            <i class="fa fa-phone"></i>
                            <a href="callto:">+37064523515</a>
                          </li>
                          <li>
                            <i class="fa fa-map-marker"></i>
                            <address>Vilnius, Lithuania</address>
                          </li>
                        </ul>

                        <ul class="follow-us">
                          <li>
                            <a href="#">
                              <i class="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-github"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i class="fa fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
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
