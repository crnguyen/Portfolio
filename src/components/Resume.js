import React, { useState } from 'react';
import myresume from "../assets/Cristina-Nguyen-Resume2020.pdf"
import { Document, Page, pdfjs} from 'react-pdf';
//allows pdf to show up on screen 
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume () {
    const [pageNumber ] = useState(1);
    const [setNumPages] = useState(null);
    function onDocumentLoadSuccess({ numPages }) {
      }
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    return (
        <div id="Resume" className="sections">
            <h1 className="titleDecoration">Resume</h1>
            <a href={myresume} download> Download a copy </a>
        </div>
    )
}