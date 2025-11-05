"use client";

import React from "react";
import { FaDownload } from "react-icons/fa";

export default function PrintButton({ contentRef }) {
  if (!contentRef) {
    console.warn("⚠️ PrintButton: contentRef is not provided!");
  }

  const handlePrint = () => {
    if (!contentRef?.current) return;
    const printContent = contentRef.current.innerHTML;
    const newWindow = window.open("", "_blank");

    newWindow.document.write(`
      <html>
        <head>
          <title>Smart_Resume</title>
          <style>
            @page { size: A4; margin: 20mm; }
            body { font-family: sans-serif; padding: 20px; }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);

    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
    newWindow.close();
  };

  return (
    <button
      onClick={handlePrint}
      className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-red-600 text-white shadow-md hover:scale-105 transition-transform"
    >
      <FaDownload />
      Download PDF
    </button>
  );
}
