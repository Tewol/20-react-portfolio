import React, { Component } from 'react';
import Pdf from '../assets/resume.pdf'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Example extends Component {
    state = {
        file: Pdf,
        numPages: 2,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { file, pageNumber } = this.state;
        return (
            <div id="ResumeContainer">
                <Document className={"PDFDocument"} file={file} onLoadSuccess={this.onDocumentLoadSuccess}>
                  <Page className={"PDFPage PDFPageOne"} pageNumber={pageNumber} renderTextLayer={false} renderInteractiveForms={false} />
                  <Page className={"PDFPage"} pageNumber={pageNumber + 1} renderTextLayer={false} renderInteractiveForms={false} />
                </Document>
            </div>
        );
    }
}

export default Example;