"use client";

import React, { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import dynamic from "next/dynamic";

// Dynamically import react-to-print (client-side only)
const ReactToPrint = dynamic(
  () => import("react-to-print").then((mod) => mod.default),
  { ssr: false }
);

export default function ClientPrintButton({ contentRef }) {
  if (!contentRef) {
    console.warn("⚠️ ClientPrintButton: contentRef is not provided!");
  }

  return (
    <ReactToPrint
      trigger={() => (
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-red-600 text-white shadow-md hover:scale-105 transition-transform">
          <FaDownload />
          Download PDF
        </button>
      )}
      content={() => contentRef.current}
      documentTitle="Smart_Resume"
      pageStyle="@page { size: A4; margin: 20mm }"
    />
  );
}
