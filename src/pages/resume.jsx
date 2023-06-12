import React, { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {

  const viewer = useRef(null)

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib',
          initialDoc: '/assets/img/kyle_wade_resume.pdf',
        },
        viewer.current,
      ).then((instance) => {
        const { docViewer } = instance;
      })
    })
  }, [])

  return (
    <div ref={viewer} style={{height: "100vh"}}></div>
  )
}
