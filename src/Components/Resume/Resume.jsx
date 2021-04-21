// import default React components
import React from "react";
// import React-pdf components for resume display
import { Document } from "react-pdf/dist/esm/entry.webpack";
import { Page } from "react-pdf";
// import Resume pdf to display
import resume from "../../Assets/Resume.pdf";

function Resume() {

  return (
    <Document file={resume}>
      <Page pageNumber={1} />
    </Document>
  );
}

export default Resume;
