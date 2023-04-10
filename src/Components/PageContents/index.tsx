import React from "react";
import PropTypes from "prop-types";
import Thumbnail from "../Thumbnail/index";

interface Props {
  id: string;
  text: string;
  code?: string;
  font: string;
  fontSize: number;
  thumbnail?: string;
}

const PageContent: React.FC<Props> = ({
  id,
  text,
  code,
  font,
  fontSize,
  thumbnail,
}) => {
  return (
    <div id={id}>
      {thumbnail && <Thumbnail url={thumbnail} />}
      <div style={{ fontFamily: font, fontSize: `${fontSize}px` }}>
        {text}
        {code && <pre>{code}</pre>}
      </div>
    </div>
  );
};

PageContent.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  code: PropTypes.string,
  font: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  thumbnail: PropTypes.string,
};

export default PageContent;
