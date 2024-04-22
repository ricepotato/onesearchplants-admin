"use client";

import { useState } from "react";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: {
    container: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
    ],
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
];

export default function QuillEditor() {
  const [content, setContent] = useState<string>("");
  return (
    <Quill
      modules={modules}
      formats={formats}
      theme="snow"
      value={content}
      onChange={(text) => {
        console.log(content);
        setContent(text);
      }}
      style={{
        height: "460px",
        width: "100%",
      }}
    />
  );
}
