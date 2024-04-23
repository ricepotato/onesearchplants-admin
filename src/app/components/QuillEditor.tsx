"use client";

import { useMemo, useState } from "react";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";

// const modules = {
//   toolbar: {
//     container: [
//       [{ header: "1" }, { header: "2" }, { font: [] }],
//       ["link", "image"],
//       [{ align: [] }],
//       [{ color: [] }],
//       ["bold", "italic", "underline", "strike", "blockquote"],
//       ["clean"],
//     ],
//   },
// };

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "color",
  "background",
];
export default function QuillEditor() {
  const [content, setContent] = useState<string>("");
  const modules = useMemo(() => {
    return {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
        ["clean"],
      ],
    };
  }, []);
  return (
    <div className="h-[720px]">
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
          height: "660px",
          width: "100%",
        }}
      />
    </div>
  );
}
