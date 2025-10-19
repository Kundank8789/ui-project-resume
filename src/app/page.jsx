"use client";

import { useRef } from "react";
import { ResumeProvider } from "@/context/ResumeContext";
import ResumeForm from "@/components/Editor/ResumeForm";
import ResumePreview from "@/components/Preview/ResumePreview";
import PrintButton from "@/components/PrintButton";

export default function HomePage() {
  const previewRef = useRef();

  return (
    <ResumeProvider>
      <main className="p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Resume Builder — Prototype</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <section className="bg-white p-6 rounded-md shadow border">
            <h2 className="text-lg font-semibold mb-4">Editor</h2>
            <ResumeForm />
          </section>

          <section>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">Preview</h2>
              <PrintButton contentRef={previewRef} />
            </div>
            <ResumePreview ref={previewRef} />
          </section>
        </div>
      </main>
    </ResumeProvider>
  );
}
