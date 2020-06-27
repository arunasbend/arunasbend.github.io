import React from "react";
import { Link } from "react-router-dom";

export interface ReferenceProps {
  to: string;
  text: string;
}

export default function Reference({ to, text }: ReferenceProps) {
  const internalLink = <Link to={to}>{text}</Link>;
  const externalLink = <a href={to}>{text}</a>;

  return to.startsWith("http") ? externalLink : internalLink;
}
