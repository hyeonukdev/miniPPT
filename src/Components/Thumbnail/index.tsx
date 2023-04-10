import React from "react";

interface Props {
  url: string;
}

const Thumbnail: React.FC<Props> = ({ url }) => {
  return <img src={url} alt="Thumbnail" />;
};

export default Thumbnail;
