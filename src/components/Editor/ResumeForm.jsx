"use client";

import { useContext, useState, useEffect } from "react";
import { ResumeContext } from "@/context/ResumeContext";
import { AiOutlinePlus, AiOutlineDelete, AiOutlineEdit, AiOutlineUser, AiOutlineTool, AiOutlineProject } from "react-icons/ai";

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
  const [activeSection, setActiveSection] = useState("personal");

  useEffect(() => {
    setResume(resumeData);
  }, [resumeData]);

  // Skills
  const handleSkillAdd = () => {
    if (!skillInput.trim()) return;
    const newSkill = { id: Date.now(), name: skillInput.trim() };
    const updated = { ...resume, skills: [...resume.skills, newSkill] };
    setResume(updated);
    setResumeData(updated);
    setSkillInput("");
  };

  const handleSkillChange = (id, value) => {
    const updatedSkills = resume.skills.map((s) =>
      s.id === id ? { ...s, name: value } : s
    );
    const updated = { ...resume, skills: updatedSkills };
    setResume(updated);
    setResumeData(updated);
  };

  const handleSkillDelete = (id) => {
    const updated = {
      ...resume,
      skills: resume.skills.filter((s) => s.id !== id),
    };
    setResume(updated);
    setResumeData(updated);
  };

  // Projects
  const handleProjectAdd = () => {
    const newProject = { id: Date.now(), name: "", description: "" };
    const updated = { ...resume, projects: [...resume.projects, newProject] };
    setResume(updated);
    setResumeData(updated);
  };

  const handleProjectChange = (id, field, value) => {
    const updatedProjects = resume.projects.map((p) =>
      p.id === id ? { ...p, [field]: value } : p
    );
    const updated = { ...resume, projects: updatedProjects };
    setResume(updated);
    setResumeData(updated);
  };

  const handleProjectDelete = (id) => {
    const updated = {
      ...resume,
      projects: resume.projects.filter((p) => p.id !== id),
    };
    setResume(updated);
    setResumeData(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Resume Builder
          </h1>
          <p className="text-gray-600 text-lg">Create your professional resume in minutes</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Sections</h2>
              <nav className="space-y-2">
                {[
                  { id: "personal", label: "Personal Info", icon: AiOutlineUser },
                  { id: "skills", label: "Skills", icon: AiOutlineTool },
                  { id: "projects", label: "Projects", icon: AiOutlineProject },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-blue-50 text-blue-600 border border-blue-200"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <item.icon className="text-lg" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4 space-y-6">
            {/* Personal Info */}
            {(activeSection === "personal" || activeSection === "all") && (
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <AiOutlineUser className="text-2xl" />
                    Personal Information
                  </h2>
                  <p className="text-blue-100 mt-1">Tell us about yourself</p>
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={resume.name}
                        placeholder="John Doe"
                        onChange={(e) => {
                          const updated = { ...resume, name: e.target.value };
                          setResume(updated);
                          setResumeData(updated);
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        value={resume.title}
                        placeholder="Senior Software Engineer"
                        onChange={(e) => {
                          const updated = { ...resume, title: e.target.value };
                          setResume(updated);
                          setResumeData(updated);
                        }}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skills */}
            {(activeSection === "skills" || activeSection === "all") && (
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <AiOutlineTool className="text-2xl" />
                    Skills & Expertise
                  </h2>
                  <p className="text-green-100 mt-1">Add your technical and professional skills</p>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {resume.skills.map((s) => (
                      <div
                        key={s.id}
                        className="group relative bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        <input
                          type="text"
                          value={s.name}
                          onChange={(e) => handleSkillChange(s.id, e.target.value)}
                          className="bg-transparent border-none outline-none text-sm font-medium text-gray-700 min-w-[100px]"
                        />
                        <button
                          onClick={() => handleSkillDelete(s.id)}
                          className="text-red-500 hover:text-red-700 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                        >
                          <AiOutlineDelete className="text-sm" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      placeholder="Enter a skill (e.g., React, Python, Project Management)"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-200"
                      onKeyPress={(e) => e.key === 'Enter' && handleSkillAdd()}
                    />
                    <button
                      onClick={handleSkillAdd}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                    >
                      <AiOutlinePlus className="text-lg" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Projects */}
            {(activeSection === "projects" || activeSection === "all") && (
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <AiOutlineProject className="text-2xl" />
                    Projects & Experience
                  </h2>
                  <p className="text-purple-100 mt-1">Showcase your work and achievements</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    {resume.projects.map((p) => (
                      <div
                        key={p.id}
                        className="group bg-gray-50 rounded-xl p-4 hover:bg-white border border-gray-200 hover:border-purple-200 transition-all duration-200"
                      >
                        <div className="flex gap-4">
                          <div className="flex-1 space-y-3">
                            <input
                              type="text"
                              value={p.name}
                              onChange={(e) => handleProjectChange(p.id, "name", e.target.value)}
                              placeholder="Project Name"
                              className="w-full px-3 py-2 bg-transparent border-b border-gray-300 focus:border-purple-500 outline-none text-lg font-semibold text-gray-800 placeholder-gray-400 transition-colors duration-200"
                            />
                            <textarea
                              value={p.description}
                              onChange={(e) => handleProjectChange(p.id, "description", e.target.value)}
                              placeholder="Project description, technologies used, and your contributions..."
                              rows="3"
                              className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none resize-none transition-all duration-200 placeholder-gray-400"
                            />
                          </div>
                          <button
                            onClick={() => handleProjectDelete(p.id)}
                            className="text-red-500 hover:text-red-700 transition-colors duration-200 opacity-0 group-hover:opacity-100 h-fit"
                          >
                            <AiOutlineDelete className="text-xl" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleProjectAdd}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border-2 border-dashed border-purple-300 hover:border-purple-400"
                  >
                    <AiOutlinePlus className="text-xl" />
                    Add New Project
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Navigation Footer */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-3 border border-gray-200">
          <div className="flex gap-2">
            {["personal", "skills", "projects"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === section
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}