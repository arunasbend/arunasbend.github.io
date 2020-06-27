import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

export default function Page({ getData }: { getData: Function }) {
  const { id } = useParams();
  const data = getData(id);

  return data.contentFn ? (
    <data.contentFn />
  ) : (
    <ReactMarkdown source={data.content} escapeHtml={false} />
  );
}
