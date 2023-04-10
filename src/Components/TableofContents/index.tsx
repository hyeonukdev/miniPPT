import React from "react";
import PropTypes from "prop-types";

const TableOfContents = ({ pages }: { pages: any }) => {
  return (
    <ul>
      {pages.map((page: any, index: number) => (
        <li key={index}>
          <a href={`#page-${index}`}>Page {index + 1}</a>
        </li>
      ))}
    </ul>
  );
};

TableOfContents.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default TableOfContents;
