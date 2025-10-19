"use client";

import { forwardRef, useContext } from "react";
import { ResumeContext } from "@/context/ResumeContext";

const ResumePreview = forwardRef((props, ref) => {
  const { resumeData } = useContext(ResumeContext);

  const resume = {
    name: resumeData?.name || "John Doe",
    title: resumeData?.title || "Frontend Developer",
    skills:
      resumeData?.skills?.length > 0
        ? resumeData.skills
        : [{ id: 1, name: "HTML" }, { id: 2, name: "CSS" }],
    projects: resumeData?.projects || [],
  };

  return (
    <div
      ref={ref}
      className="p-6 bg-white text-gray-900 rounded-md shadow border min-h-[400px] w-full"
    >
      <h1 className="text-2xl font-bold mb-2">{resume.name}</h1>
      <p className="text-gray-700 mb-2">{resume.title}</p>
      <hr className="my-3" />

      {/* Skills */}
      <div className="mb-3">
        <h3 className="font-semibold">Skills</h3>
        <div className="flex flex-wrap gap-2 mt-1">
          {resume.skills.map((s) => (
            <span
              key={s.id}
              className="text-xs px-2 py-1 border rounded-md bg-gray-100"
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mb-3">
        <h3 className="font-semibold">Projects</h3>
        <div className="space-y-2 mt-1">
          {resume.projects.map((p) => (
            <div key={p.id} className="border p-2 rounded-md bg-gray-50">
              <p className="font-semibold">{p.name || "Untitled Project"}</p>
              <p className="text-sm text-gray-700">
                {p.description || "No description"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ResumePreview;
