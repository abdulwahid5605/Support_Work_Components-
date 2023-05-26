// import React from "react";
import { Collapse } from "react-collapse";

const CollapseComponent = () => {
  return (
    <Collapse isOpened={true}>
      <p>Paragraph of text</p>
      <p>Another paragraph is also OK</p>
      <p>Images and any other content are ok too</p>
      <img src="nyancat.gif" />
    </Collapse>
  );
};

export default CollapseComponent;
