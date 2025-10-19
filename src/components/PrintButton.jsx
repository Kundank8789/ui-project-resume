"use client";

import { jsPDF } from "jspdf";

export default function PrintButton({ contentRef }) {
  const handleDownload = () => {
    if (!contentRef.current) return;

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    pdf.html(contentRef.current, {
      callback: function (doc) {
        doc.save("resume.pdf");
      },
      x: 10,
      y: 10,
      windowWidth: 1200,
    });
  };

  return (
    <button
      onClick={handleDownload}
      className="px-3 py-2 bg-green-600 text-white rounded-md text-sm"
    >
      Download PDF
    </button>
  );
}
