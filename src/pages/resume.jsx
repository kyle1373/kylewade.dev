import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function resume() {

  const pdfURL = "public/assets/img/kyle_wade_resume.pdf"

  return (
    <div>
      <embed
        style={{
          width: "100%",
          height: "100%",
        }}
        type="application/pdf"
        src={pdfURL}
      />
    </div>
  );
}
