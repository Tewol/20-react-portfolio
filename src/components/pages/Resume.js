import {React, useState, etNumPages} from 'react';
import Pdf from '../assets/resume.pdf'
import { Document, Page } from 'react-pdf';

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  
  function onDocumentLoadSuccess({ numPages }) {
    etNumPages(numPages);
  }

  return (
    <div>
      <Document file={Pdf}
        onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
   
    </div>
  );
}

export default Resume;