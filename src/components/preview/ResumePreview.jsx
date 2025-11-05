"use client";

import { useContext } from "react";
import { ResumeContext } from "@/context/ResumeContext";
import { motion } from "framer-motion";

export default function ResumePreview() {
  const { resumeData } = useContext(ResumeContext);
  const { name, title, skills = [], projects = [] } = resumeData;

  return (
    <div className="bg-white shadow-lg rounded-2xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
        <h1 className="text-3xl font-bold">{name || "Your Name"}</h1>
        <p className="text-lg mt-1 opacity-90">
          {title || "Full Stack Developer"}
        </p>
      </div>

      {/* Content */}
      <div className="p-8 space-y-6">
        {/* Skills */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {skills.length > 0 ? (
              skills.map((s) => (
                <motion.span
                  key={s.id}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-sm font-medium rounded-full shadow"
                >
                  {s.name}
                </motion.span>
              ))
            ) : (
              <p className="text-sm text-gray-400 italic mt-2">
                No skills added yet.
              </p>
            )}
          </div>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
            Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-3">
            {projects.length > 0 ? (
              projects.map((p) => (
                <motion.div
                  key={p.id}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-4 border rounded-xl bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition"
                >
                  <h3 className="text-md font-bold text-blue-700 mb-1">
                    {p.name || "Untitled Project"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {p.description || "No description provided."}
                  </p>
                </motion.div>
              ))
            ) : (
              <p className="text-sm text-gray-400 italic mt-2">
                No projects added yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
