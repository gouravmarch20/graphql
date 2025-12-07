"use client";

import {
  Background,
  EducationSection,
  ExperienceSection,
  Footer,
  HeroSection,
  Navigation,
  OverviewSection,
  ProjectsSection,
  TechStackSection,
} from "@/components/portfolio";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white relative">
      {/* Background */}
      <Background />

      {/* Navigation */}
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 pt-24">
        {/* Hero Section */}
        <HeroSection />

        {/* Overview Section */}
        <OverviewSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Tech Stack Section */}
        <TechStackSection />


        {/* Projects Section */}
        <ProjectsSection />

        {/*Education Section */}
        <EducationSection/>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
} 