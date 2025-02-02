"use client";
import React, { useState } from "react";

interface ResumeData {
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  skills: string;
}

const ResumeBuilder: React.FC = () => {
  const [formData, setFormData] = useState<ResumeData>({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-100 shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Dynamic Resume Builder</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 border rounded bg-white focus:ring-2 focus:ring-blue-500" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-2 border rounded bg-white focus:ring-2 focus:ring-blue-500" />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="p-2 border rounded bg-white focus:ring-2 focus:ring-blue-500" />
        <input type="text" name="education" placeholder="Education" value={formData.education} onChange={handleChange} className="p-2 border rounded bg-white focus:ring-2 focus:ring-blue-500" />
        <textarea name="experience" placeholder="Work Experience" value={formData.experience} onChange={handleChange} className="p-2 border rounded col-span-2 bg-white focus:ring-2 focus:ring-blue-500"></textarea>
        <input type="text" name="skills" placeholder="Skills (comma-separated)" value={formData.skills} onChange={handleChange} className="p-2 border rounded col-span-2 bg-white focus:ring-2 focus:ring-blue-500" />
      </div>
      
      <div className="p-6 border-t mt-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-blue-800">Generated Resume</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Education:</strong> {formData.education}</p>
        <p><strong>Experience:</strong> {formData.experience}</p>
        <p><strong>Skills:</strong> {formData.skills}</p>
      </div>
    </div>
  );
};

export default ResumeBuilder;
