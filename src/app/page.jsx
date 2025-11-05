"use client";

import { useRef } from "react";
import ResumeForm from "@/components/Editor/ResumeForm";
import ResumePreview from "@/components/Preview/ResumePreview";
import PrintButton from "@/components/PrintButton";

export default function HomePage() {
  const previewRef = useRef();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="flex justify-between items-center bg-white rounded-2xl p-6 shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">
            🚀 Smart Resume Builder
          </h1>
          <PrintButton contentRef={previewRef} />
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <ResumeForm />
          <div ref={previewRef}>
            <ResumePreview />
          </div>
        </div>
      </div>
    </div>
  );
}
