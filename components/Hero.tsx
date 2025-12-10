
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  
  const handleDownloadResume = () => {
    const doc = new jsPDF();
    const margin = 20;
    let yPos = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - (margin * 2);

    // --- Header ---
    doc.setTextColor(40, 100, 255); // Blue color for Name
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Priyanshu Shaw", margin, yPos);
    
    yPos += 8;
    doc.setTextColor(60, 60, 60); // Dark grey
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.text("UI/UX Designer", margin, yPos);

    yPos += 8;
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text("7003775627  |  priyanshushaw8204@gmail.com  |  11/1 Cossipore Road Kol-2", margin, yPos);

    yPos += 5;
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 10;

    // --- Function to add Section Header ---
    const addSectionHeader = (title: string) => {
        if (yPos > 270) { doc.addPage(); yPos = 20; }
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(40, 100, 255);
        doc.text(title, margin, yPos);
        yPos += 6;
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
    };

    // --- Professional Summary ---
    addSectionHeader("Professional Summary");
    const summary = "Highly motivated and detail-oriented UI/UX designer with hands-on project experience in creating modern, user-focused digital products. Proficient in wireframing, mockups, and interactive prototyping using Figma and Framer. Eager to leverage creative and problem-solving skills to contribute to innovative design projects.";
    const splitSummary = doc.splitTextToSize(summary, contentWidth);
    doc.text(splitSummary, margin, yPos);
    yPos += (splitSummary.length * 5) + 6;

    // --- Experience ---
    addSectionHeader("Experience");
    
    // Job 1
    doc.setFont("helvetica", "bold");
    doc.text("UI/UX Designer Intern - URLWEBALA", margin, yPos);
    doc.setFont("helvetica", "normal");
    const dateText = "(Jul 2025 – Sep 2025)";
    const dateWidth = doc.getTextWidth(dateText);
    doc.text(dateText, pageWidth - margin - dateWidth, yPos);
    yPos += 5;

    const expDesc = "- Designed a real estate website from scratch (User Research to High-fidelity).\n- Collaborated with developers for seamless handoff.";
    const splitExp = doc.splitTextToSize(expDesc, contentWidth - 5);
    doc.text(splitExp, margin + 5, yPos);
    yPos += (splitExp.length * 5) + 6;

    // --- Projects ---
    addSectionHeader("Projects");
    const projects = [
      "Real Estate Website - A client project.",
      "SpendSync - Mobile app for expense tracking.",
      "Fiverr Landing Page Redesign - A practice project.",
      "MindMesh - An AI Webpage Design."
    ];
    projects.forEach(p => {
        if (yPos > 280) { doc.addPage(); yPos = 20; }
        doc.text(`• ${p}`, margin + 5, yPos);
        yPos += 5;
    });
    yPos += 6;

    // --- Education ---
    addSectionHeader("Education");
    doc.text("B.Com (Hons) - Calcutta University (Expected 2026)", margin + 5, yPos);
    yPos += 12;

    // --- Skills ---
    addSectionHeader("Skills");
    doc.text("Design Tools: Figma, Framer, Photoshop", margin + 5, yPos);
    yPos += 5;
    doc.text("Process: User Research, Wireframing, Prototyping", margin + 5, yPos);
    yPos += 5;
    doc.text("Other: AI Tools (ChatGPT, Gemini)", margin + 5, yPos);

    doc.save("Priyanshu_Shaw_Resume.pdf");
  };

  return (
    <section className="relative min-h-screen pt-32 pb-16 px-6 md:px-12 flex flex-col justify-center overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-300">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[size:40px_40px] bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* Left Panel - Typography & Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col justify-between bg-neutral-100 dark:bg-[#0f0f0f] rounded-[2rem] p-8 md:p-12 border border-neutral-200 dark:border-white/5 relative overflow-hidden group transition-colors duration-300"
        >
          {/* Subtle Gradient Blob */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 w-fit backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300 tracking-wide uppercase">Available for projects</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[0.9]">
                Crafting <br />
                <span className="text-neutral-400 dark:text-neutral-500">Digital Reality.</span>
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
                {HERO_DATA.headline}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            <a 
              href="#work"
              className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
            >
              {HERO_DATA.primaryCta}
              <ArrowRight size={18} />
            </a>
            <button 
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-white/5 text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10 rounded-full font-medium hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors"
            >
              {HERO_DATA.secondaryCta}
              <Download size={18} />
            </button>
          </div>
        </motion.div>

        {/* Right Panel - Profile Image */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative h-full min-h-[400px] lg:min-h-auto rounded-[2rem] overflow-hidden bg-neutral-100 dark:bg-[#0f0f0f] border border-neutral-200 dark:border-white/5 transition-colors duration-300"
        >
          {/* Static Grayscale Image */}
          <img 
            src="https://drive.google.com/uc?export=view&id=1d0WIuIpHoIVgSmEuwuaIp_WntX78YyR0" 
            alt="Priyanshu Shaw" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
          />
          
          {/* Subtle Overlay to blend with dark theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-[#0f0f0f] via-transparent to-transparent opacity-40" />

          {/* Floating Name Card */}
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/60 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg dark:shadow-none">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-neutral-900 dark:text-white font-medium">Priyanshu Shaw</p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">Kolkata based UI/UX Designer</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
