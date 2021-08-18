import React, {Component} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Pdf from '../assets/resume.pdf'

class Resume extends Component {
  state = {
    numPages: 2,
    pageNumber: 1,
  }
  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <div id='contentDiv'>
          <Document
            file={Pdf}
            onLoadSuccess={this.onDocumentLoadSuccess}>
              
              {[1, 2].map(page => (
                <Page pageNumber={page} />
            ))}
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
        </div>
      </div>
    );
  }
}

export default Resume;