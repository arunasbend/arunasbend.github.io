import React from "react";
import "./Title.css";

export default function Title({ title }: { title: string }) {
  const [header, ...subHeader] = title.split(" ");

  return (
    <h3 className="title">
      {header}&nbsp;<span>{subHeader.join(" ")}</span>
    </h3>
  );
}
