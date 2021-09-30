import React, { Component } from "react";
import resumePdf from "../assets/resume.pdf";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  state = {
    file: resumePdf,
    numPages: 2,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { file } = this.state;
    return (
      <div id="Container">
        <Document
          className={"Document"}
          file={file}
          onLoadSuccess={this.onDocumentLoadSuccess}>

          {[1, 2].map((page) => (
            <Page pageNumber={page} renderTextLayer={false} />
          ))}
        </Document>
      </div>
    );
  }
}

export default Resume;
