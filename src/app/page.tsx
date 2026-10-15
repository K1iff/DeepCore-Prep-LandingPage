"use client";

import Image from "next/image";
import { User, Activity, Database, ArrowRight, Server, Search, BookOpen, Shield, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-[#0F172A]">
      {/* 1. Navigation Bar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left side */}
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/images/deepcore_logo.png"
                alt="DeepCore Prep Logo"
                width={200}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </div>
            {/* Right side */}
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#features" className="text-sm font-bold text-gray-600 hover:text-[#2563EB]">Features</a>
              <a href="#tech" className="text-sm font-bold text-gray-600 hover:text-[#2563EB]">Tech</a>
              <a href="#team" className="text-sm font-bold text-gray-600 hover:text-[#2563EB]">Team</a>
              <a href="#contact" className="text-sm font-bold text-gray-600 hover:text-[#2563EB]">Contact</a>
              <button className="bg-[#B91C1C] hover:bg-red-800 text-white font-bold py-2 px-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                Partner With Us
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <section className="relative bg-white pt-20 pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A] mb-6">
                Next-Generation AI <span className="text-[#2563EB]">Licensure Prep</span>
              </h1>
              <p className="mt-4 text-xl font-light text-gray-600 mb-10 max-w-2xl mx-auto">
                Empowering psychometric students with RAG-driven questionnaire generation,
                adaptive learning paths, and comprehensive analytics.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                <button className="bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 text-lg">
                  Try Beta <ArrowRight size={20} />
                </button>
                <button className="bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold py-3 px-8 rounded-xl shadow-sm hover:shadow-md transition-all text-lg">
                  Request Demo
                </button>
              </div>

              <div className="mt-12 relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 max-w-3xl mx-auto bg-gray-50 p-2">
                <Image
                  src="/images/deepcore_login.png"
                  alt="DeepCore Prep Login Portal"
                  width={1200}
                  height={800}
                  className="rounded-xl w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Features Grid */}
        <section id="features" className="py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0F172A]">Purpose-Built Portals</h2>
              <p className="mt-4 text-lg font-light text-gray-600 max-w-2xl mx-auto">
                Dedicated interfaces designed specifically for the needs of students, educators, and administrators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Learner Dashboard */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100 flex flex-col">
                <div className="p-6 pb-0 flex-grow">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#2563EB] mb-6">
                    <Activity size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">Learner Dashboard</h3>
                  <p className="font-light text-gray-600 mb-6">
                    Track weekly activity, manage test schedules, and monitor performance progress through intuitive visualizations.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-50">
                  <Image
                    src="/images/learner_dashboard.png"
                    alt="Learner Dashboard Interface"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-sm w-full h-auto"
                  />
                </div>
              </div>

              {/* Card 2: Faculty Dashboard */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100 flex flex-col">
                <div className="p-6 pb-0 flex-grow">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#2563EB] mb-6">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">Faculty Dashboard</h3>
                  <p className="font-light text-gray-600 mb-6">
                    Streamlined exam management with comprehensive tools for reviewing and validating AI-generated questions.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-50">
                  <Image
                    src="/images/faculty_dashboard.png"
                    alt="Faculty Dashboard Interface"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-sm w-full h-auto"
                  />
                </div>
              </div>

              {/* Card 3: Admin Overview */}
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100 flex flex-col">
                <div className="p-6 pb-0 flex-grow">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#2563EB] mb-6">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">Admin Overview</h3>
                  <p className="font-light text-gray-600 mb-6">
                    Monitor global system health, track API request volumes, and manage token consumption across the platform.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-50">
                  <Image
                    src="/images/admin_dashboard.png"
                    alt="Admin Dashboard Interface"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-sm w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. How It Works (Tech Section) */}
        <section id="tech" className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0F172A]">Powered by RAG Architecture</h2>
              <p className="mt-4 text-lg font-light text-gray-600 max-w-2xl mx-auto">
                Our platform utilizes Retrieval Augmented Generation to ensure high-quality,
                contextually accurate exam questions based on verified psychometric literature.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 z-0"></div>

              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center shadow-sm mb-6 text-[#2563EB]">
                  <Database size={40} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">1. Vector Ingestion</h3>
                <p className="font-light text-gray-600">
                  Verified study materials and textbooks are processed, chunked, and stored as vector embeddings in our secure database.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center shadow-sm mb-6 text-[#60A5FA]">
                  <Search size={40} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">2. Context Retrieval</h3>
                <p className="font-light text-gray-600">
                  When an exam is requested, the system searches the vector database for the most relevant academic context.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white border-4 border-[#2563EB] rounded-full flex items-center justify-center shadow-sm mb-6 text-[#2563EB] bg-blue-50">
                  <Server size={40} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">3. Exam Generation</h3>
                <p className="font-light text-gray-600">
                  The LLM uses the retrieved context via Supabase to generate highly accurate, academically rigorous questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Team and Contact Information */}
        <section id="team" className="py-24 bg-[#0F172A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Research Team</h2>
              <p className="mt-4 text-lg font-light text-gray-300 max-w-2xl mx-auto">
                The minds behind DeepCore Prep&apos;s innovative approach to licensure exam preparation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Member 1 */}
              <div className="bg-slate-800 rounded-xl p-8 text-center flex flex-col items-center shadow-sm">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-700 mb-6 bg-slate-700 flex items-center justify-center relative">
                  <Image
                    src="/images/abel_profile.png"
                    alt="Carl Justine M. Abel"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                    }}
                  />
                  {/* Fallback Icon */}
                  <User size={48} className="text-slate-500 absolute -z-10" />
                </div>
                <h3 className="text-xl font-bold mb-1">Carl Justine M. Abel</h3>
                <p className="text-[#60A5FA] font-light text-sm mb-4">Lead Researcher</p>
                <a href="mailto:2023cjmabel@live.mcl.edu.ph" className="text-sm text-gray-300 hover:text-white flex items-center gap-2 mt-auto">
                  <Mail size={16} /> 2023cjmabel@live.mcl.edu.ph
                </a>
              </div>

              {/* Member 2 */}
              <div className="bg-slate-800 rounded-xl p-8 text-center flex flex-col items-center shadow-sm">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-700 mb-6 bg-slate-700 flex items-center justify-center relative">
                  <Image
                    src="/images/dabandan_profile.jpg"
                    alt="Mark Angelo E. Dabandan"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                    }}
                  />
                  <User size={48} className="text-slate-500 absolute -z-10" />
                </div>
                <h3 className="text-xl font-bold mb-1">Mark Angelo E. Dabandan</h3>
                <p className="text-[#60A5FA] font-light text-sm mb-4">System Architect</p>
                <a href="mailto:2023maedabandan@live.mcl.edu.ph" className="text-sm text-gray-300 hover:text-white flex items-center gap-2 mt-auto">
                  <Mail size={16} /> 2023maedabandan@live.mcl.edu.ph
                </a>
              </div>

              {/* Member 3 */}
              <div className="bg-slate-800 rounded-xl p-8 text-center flex flex-col items-center shadow-sm">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-700 mb-6 bg-slate-700 flex items-center justify-center relative">
                  <Image
                    src="/images/realon_profile.jpg"
                    alt="Ryzel Clifford C. Realon"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                    }}
                  />
                  <User size={48} className="text-slate-500 absolute -z-10" />
                </div>
                <h3 className="text-xl font-bold mb-1">Ryzel Clifford C. Realon</h3>
                <p className="text-[#60A5FA] font-light text-sm mb-4">AI Integration Specialist</p>
                <a href="mailto:2023rccrealon@live.mcl.edu.ph" className="text-sm text-gray-300 hover:text-white flex items-center gap-2 mt-auto">
                  <Mail size={16} /> 2023rccrealon@live.mcl.edu.ph
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto border-t border-slate-700 pt-12">
              <div className="text-center">
                <h4 className="text-lg font-bold mb-2">Research Adviser</h4>
                <p className="text-xl mb-2">Micheal James F. Gnilo</p>
                <a href="mailto:mjfgnilo@mcl.edu.ph" className="text-[#60A5FA] hover:text-blue-300 text-sm flex items-center justify-center gap-2">
                  <Mail size={16} /> mjfgnilo@mcl.edu.ph
                </a>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold mb-2">Program Chair</h4>
                <p className="text-xl mb-2">Jonalyn G. Ebron</p>
                <a href="mailto:jgebron@mcl.edu.ph" className="text-[#60A5FA] hover:text-blue-300 text-sm flex items-center justify-center gap-2">
                  <Mail size={16} /> jgebron@mcl.edu.ph
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Academic Roots */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-10">Proudly Developed At</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
              <Image
                src="/images/ccis_logo_horizontal.png"
                alt="College of Computer and Information Science"
                width={300}
                height={100}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
              />
              <div className="hidden md:block w-px h-16 bg-gray-300"></div>
              <Image
                src="/images/mmcl_seal_horizontal.png"
                alt="Mapúa Malayan Colleges Laguna"
                width={300}
                height={100}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
              />
            </div>
            <p className="mt-10 font-light text-gray-500 max-w-2xl mx-auto">
              A project by students from the College of Computer and Information Science at Mapúa Malayan Colleges Laguna.
            </p>
          </div>
        </section>
      </main>

      {/* 7. Footer */}
      <footer id="contact" className="bg-[#0F172A] pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
        {/* Subtle watermark */}
        <div className="absolute -bottom-24 -right-24 opacity-5 pointer-events-none">
          <Image
            src="/images/ccis_logo.png"
            alt="CCIS Shield Background"
            width={400}
            height={400}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/images/deepcore_logo.png"
                alt="DeepCore Prep"
                width={150}
                height={40}
                className="h-8 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-400 font-light mb-6 max-w-sm">
                Next-generation psychometric licensure exam platform utilizing RAG for superior preparation.
              </p>
              <div className="flex gap-4">
                <a href="mailto:2023cjmabel@live.mcl.edu.ph" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-[#2563EB] hover:text-white transition-all">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-[#60A5FA] font-light">Features</a></li>
                <li><a href="#tech" className="text-gray-400 hover:text-[#60A5FA] font-light">Technology</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-[#60A5FA] font-light">Research Team</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 font-light text-gray-400">
                <li><a href="mailto:mjfgnilo@mcl.edu.ph" className="hover:text-white">mjfgnilo@mcl.edu.ph</a></li>
                <li><a href="mailto:jgebron@mcl.edu.ph" className="hover:text-white">jgebron@mcl.edu.ph</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light">
            <p>&copy; 2025 DeepCore Prep. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Mapúa Malayan Colleges Laguna</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
