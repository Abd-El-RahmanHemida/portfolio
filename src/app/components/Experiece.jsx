"use client";
import React from "react";

const experiences = [
  {
    country: "UAE",
    role: "Freelance Web Developer",
    period: "2022 - Present",
    projects: [
      "E-commerce platforms with admin dashboards",
      "Transaction Tracker applications",
      "Custom business websites",
    ],
  },
  {
    country: "Egypt",
    role: "Freelance Web Developer",
    period: "2021 - Present",
    projects: [
      "E-commerce solutions",
      "Business dashboards",
      "Portfolio and company sites",
    ],
  },
];

const Experiece = () => {
  return (
    <section className="text-white py-8 px-4 xl:gap-16 sm:py-16 xl:px-16" id="experience">
      <div className="md:grid md:grid-cols-2 gap-8 items-center">
        <div className="mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-base lg:text-lg mb-6 text-[#ADB7BE]">
            As a freelance web developer, I have worked with clients in both UAE and Egypt, building a variety of projects tailored to their business needs. My experience includes developing e-commerce platforms with robust dashboards, transaction tracking systems, and custom web applications.
          </p>
        </div>
        <div>
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-6 bg-[#181818] rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{exp.role} <span className="text-primary-500">@ {exp.country}</span></h3>
              <span className="block text-sm text-[#9CA2A9] mb-2">{exp.period}</span>
              <ul className="list-disc pl-5 text-[#ADB7BE]">
                {exp.projects.map((proj, i) => (
                  <li key={i}>{proj}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiece;