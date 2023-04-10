import React, { useState } from "react";
import PropTypes from "prop-types";

interface Props {
  onCreate: (page: Page) => void;
}

const PageEditor: React.FC<Props> = ({ onCreate }) => {
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [font, setFont] = useState("Arial");
  const [fontSize, setFontSize] = useState(14);
  const [thumbnail, setThumbnail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = `page-${Date.now()}`;

    const page = {
      id,
      text,
      code,
      font,
      fontSize,
      thumbnail,
    };

    onCreate(page);

    setText("");
    setCode("");
    setFont("");
    setFontSize(16);
    setThumbnail("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Text</label>
      <input
        type="text"
        id="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <label htmlFor="code">Code</label>
      <textarea
        id="code"
        value={code}
        onChange={(event) => setCode(event.target.value)}
      />

      <label htmlFor="font">Font</label>
      <select
        id="font"
        value={font}
        onChange={(event) => setFont(event.target.value)}
      >
        <option value="Arial">Arial</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
      </select>

      <label htmlFor="fontSize">Font Size</label>
      <input
        type="number"
        id="fontSize"
        value={fontSize}
        onChange={(event) => setFontSize(Number(event.target.value))}
      />

      <label htmlFor="thumbnail">Thumbnail</label>
      <input
        type="text"
        id="thumbnail"
        value={thumbnail}
        onChange={(event) => setThumbnail(event.target.value)}
      />
      {thumbnail && <Thumbnail url={thumbnail} />}

      <button type="submit">Add Page</button>
    </form>
  );
};

PageEditor.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default PageEditor;
