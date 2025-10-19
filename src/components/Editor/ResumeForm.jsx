"use client";

import { useContext, useState, useEffect } from "react";
import { ResumeContext } from "@/context/ResumeContext";

export default function ResumeForm() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const [resume, setResume] = useState({
    name: "",
    title: "",
    skills: [],
    projects: [],
    ...resumeData,
  });

  const [skillInput, setSkillInput] = useState("");

  useEffect(() => {
    setResume(resumeData);
  }, [resumeData]);

  // ---- Skills Handlers ----
  const handleSkillAdd = () => {
    if (!skillInput.trim()) return;
    const newSkill = { id: Date.now(), name: skillInput.trim() };
    const updatedSkills = [...(resume.skills || []), newSkill];
    const updatedResume = { ...resume, skills: updatedSkills };
    setResume(updatedResume);
    setResumeData(updatedResume);
    setSkillInput("");
  };

  const handleSkillChange = (id, value) => {
    const updatedSkills = resume.skills.map((skill) =>
      skill.id === id ? { ...skill, name: value } : skill
    );
    const updatedResume = { ...resume, skills: updatedSkills };
    setResume(updatedResume);
    setResumeData(updatedResume);
  };

  const handleSkillDelete = (id) => {
    const updatedSkills = resume.skills.filter((skill) => skill.id !== id);
    const updatedResume = { ...resume, skills: updatedSkills };
    setResume(updatedResume);
    setResumeData(updatedResume);
  };

  // ---- Projects Handlers ----
  const handleProjectAdd = () => {
    const newProject = { id: Date.now(), name: "", description: "" };
    const updatedResume = {
      ...resume,
      projects: [...(resume.projects || []), newProject],
    };
    setResume(updatedResume);
    setResumeData(updatedResume);
  };

  const handleProjectChange = (id, field, value) => {
    const updatedProjects = resume.projects.map((proj) =>
      proj.id === id ? { ...proj, [field]: value } : proj
    );
    const updatedResume = { ...resume, projects: updatedProjects };
    setResume(updatedResume);
    setResumeData(updatedResume);
  };

  const handleProjectDelete = (id) => {
    const updatedProjects = resume.projects.filter((proj) => proj.id !== id);
    const updatedResume = { ...resume, projects: updatedProjects };
    setResume(updatedResume);
    setResumeData(updatedResume);
  };

  return (
    <div className="space-y-6 p-4 bg-white rounded-md shadow-md">
      {/* Name */}
      <div>
        <label className="block font-semibold">Name</label>
        <input
          type="text"
          value={resume.name || ""}
          onChange={(e) => {
            const updated = { ...resume, name: e.target.value };
            setResume(updated);
            setResumeData(updated);
          }}
          className="w-full border rounded-md p-2 mt-1"
        />
      </div>

      {/* Title */}
      <div>
        <label className="block font-semibold">Title</label>
        <input
          type="text"
          value={resume.title || ""}
          onChange={(e) => {
            const updated = { ...resume, title: e.target.value };
            setResume(updated);
            setResumeData(updated);
          }}
          className="w-full border rounded-md p-2 mt-1"
        />
      </div>

      {/* Skills */}
      <div>
        <label className="block font-semibold">Skills</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {(resume.skills || []).map((s) => (
            <div key={s.id} className="flex items-center gap-1">
              <input
                type="text"
                value={s.name}
                onChange={(e) => handleSkillChange(s.id, e.target.value)}
                className="text-xs px-2 py-1 border rounded-md bg-gray-100"
              />
              <button
                onClick={() => handleSkillDelete(s.id)}
                className="px-1 text-red-500 font-bold"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="mt-2 flex gap-2">
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="Type a skill"
            className="flex-1 border rounded-md p-2"
          />
          <button
            onClick={handleSkillAdd}
            className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm"
          >
            Add Skill
          </button>
        </div>
      </div>

      {/* Projects */}
      <div>
        <label className="block font-semibold">Projects</label>
        <div className="mt-2 space-y-2">
          {(resume.projects || []).map((p) => (
            <div
              key={p.id}
              className="flex flex-col md:flex-row md:items-center gap-2"
            >
              <input
                type="text"
                value={p.name}
                onChange={(e) => handleProjectChange(p.id, "name", e.target.value)}
                placeholder="Project Name"
                className="flex-1 border rounded-md p-2"
              />
              <input
                type="text"
                value={p.description}
                onChange={(e) =>
                  handleProjectChange(p.id, "description", e.target.value)
                }
                placeholder="Project Description"
                className="flex-1 border rounded-md p-2"
              />
              <button
                onClick={() => handleProjectDelete(p.id)}
                className="px-2 py-1 text-red-500 font-bold"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleProjectAdd}
          className="mt-2 px-3 py-1 bg-green-600 text-white rounded-md text-sm"
        >
          Add Project
        </button>
      </div>
    </div>
  );
}
