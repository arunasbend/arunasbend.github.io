import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

interface NavigationProps {
  url: string;
  title: string;
}

export function Navigation({ links }: { links: NavigationProps[] }) {
  return (
    <div className="row nav-row">
      <header id="site_header" className="header mobile-menu-hide">
        <div className="header-content">
          <div className="site-nav">
            <ul id="nav" className="site-main-menu">
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
