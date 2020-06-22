import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export function Navigation({ links }) {
  return (
    <div class="row nav-row">
      <header id="site_header" class="header mobile-menu-hide">
        <div class="header-content">
          <div class="site-nav">
            <ul id="nav" class="site-main-menu">
              {links.map((x) => (
                <li>
                  <Link to={`/${x.url}`}>{x.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
