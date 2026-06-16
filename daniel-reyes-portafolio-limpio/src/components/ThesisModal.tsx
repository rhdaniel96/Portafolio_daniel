import React, { useState } from "react";
import { X, BookOpen, ChevronLeft, ChevronRight, GraduationCap, Award, Bookmark, ArrowRight, CornerDownRight, Download } from "lucide-react";
import { THESIS_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface ThesisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThesisModal({ isOpen, onClose }: ThesisModalProps) {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

  if (!isOpen) return null;

  const currentChapter = THESIS_DATA.documentBody[currentChapterIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-archival-dark/80 backdrop-blur-md animate-fadeIn">
      {/* Outer Card mimicking leatherpress manuscript draft */}
      <div 
        className="relative w-full max-w-5xl h-[88vh] bg-archival-bg border-[3px] border-archival-dark shadow-2xl flex flex-col md:grid md:grid-cols-12 overflow-hidden rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Paper texture and noise filter */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] z-30" />

        {/* Left Sidebar - Table of Contents (Desktop) */}
        <div className="md:col-span-4 bg-[#f2eee1] border-b md:border-b-0 md:border-r border-archival-dark/30 p-5 flex flex-col justify-between overflow-y-auto hidden md:flex z-10 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-6 border-b border-archival-border-dark/30 pb-3">
              <GraduationCap className="w-5 h-5 text-archival-olive" />
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-archival-text-muted block">
                  Tesis Profesional
                </span>
                <span className="font-serif font-bold text-xs uppercase tracking-wider text-archival-olive block">
                  U. Alberto Hurtado
                </span>
              </div>
            </div>

            <h3 className="font-mono text-[10px] uppercase tracking-widest font-bold text-archival-olive/90 mb-3">
              Índice de Materias
            </h3>
            
            <nav className="flex flex-col gap-1">
              {THESIS_DATA.documentBody.map((chap, idx) => {
                const isActive = currentChapterIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentChapterIndex(idx)}
                    className={`text-left text-xs font-serif py-2 px-3 rounded-[1px] transition-all flex items-start gap-2 ${
                      isActive 
                        ? "bg-archival-dark text-archival-bg font-bold shadow-sm"
                        : "text-archival-text-muted hover:bg-archival-border/30 hover:text-archival-dark"
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-75 pt-[1px]">{idx + 1}.</span>
                    <span className="leading-snug">{chap.sectionTitle}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="space-y-4">
            <a
              href="https://www.dropbox.com/scl/fi/6h6n734ydnjeq42p6ou3t/TESIS-PREGRADO-Reyes-Daniel.pdf?rlkey=wrdvk72ic6nwfd0vb250350m1&st=6fckcvbe&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#ebdbb2] bg-archival-dark hover:bg-archival-olive hover:text-archival-bg transition-all py-2.5 px-4 rounded-[1px] flex items-center justify-center gap-2 font-bold cursor-pointer shadow-md border border-archival-dark/10"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar Tesis PDF</span>
            </a>

            <div className="pt-4 border-t border-archival-border-dark/10 text-[10px] font-mono text-archival-text-muted/80">
              <p>Santiago, Chile / 2025</p>
              <p className="mt-1">Dpto. Antropología</p>
            </div>
          </div>
        </div>

        {/* Right Main Panel - Content Viewer */}
        <div className="md:col-span-8 flex flex-col justify-between h-full overflow-hidden bg-archival-bg relative">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-archival-border px-6 py-3.5 z-10 bg-archival-bg/95">
            <div className="flex items-center gap-2 text-archival-olive">
              <BookOpen className="w-4 h-4 shrink-0" />
              <span className="font-mono text-[10px] uppercase tracking-wider truncate max-w-[250px] sm:max-w-md">
                {currentChapter.sectionTitle}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Table of contents status for mobile */}
              <select
                value={currentChapterIndex}
                onChange={(e) => setCurrentChapterIndex(Number(e.target.value))}
                className="md:hidden font-serif text-xs bg-archival-bg border border-archival-border px-2 py-1 outline-none rounded-sm"
              >
                {THESIS_DATA.documentBody.map((chap, idx) => (
                  <option key={idx} value={idx}>
                    {idx + 1}. {chap.sectionTitle}
                  </option>
                ))}
              </select>

              <a
                href="https://www.dropbox.com/scl/fi/6h6n734ydnjeq42p6ou3t/TESIS-PREGRADO-Reyes-Daniel.pdf?rlkey=wrdvk72ic6nwfd0vb250350m1&st=6fckcvbe&dl=0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 px-2.5 text-archival-text-muted hover:text-archival-dark transition-all rounded-full border border-archival-border bg-archival-bg shadow-sm cursor-pointer flex items-center gap-1 font-mono text-[9px] sm:text-[10px] uppercase font-bold tracking-wider hover:bg-[#f2eee1] shrink-0"
                title="Descargar tesis completa en PDF"
              >
                <Download className="w-3.5 h-3.5 text-archival-olive" />
                <span className="hidden sm:inline">Descargar PDF</span>
              </a>

              <button 
                onClick={onClose}
                className="p-1 text-archival-text-muted hover:text-archival-dark hover:rotate-90 transition-all rounded-full border border-archival-border bg-archival-bg shadow-sm cursor-pointer"
                aria-label="Cerrar de corrido"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chapters Page Content */}
          <div className="flex-grow overflow-y-auto px-6 py-8 md:px-12 md:py-10 custom-scrollbar z-10 selection:bg-archival-olive/10">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentChapterIndex}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl mx-auto"
              >
                {/* 1. Academic Title Cover Page Layout */}
                {currentChapterIndex === 0 ? (
                  <div className="text-center font-serif flex flex-col items-center py-4">

                    <span className="font-serif text-xs font-semibold tracking-wider text-archival-dark/80 uppercase block mb-1 mb-6 border-b border-archival-border pb-4 w-40 text-center">
                      {currentChapter.paragraphs[0]}
                    </span>

                    {/* Thesis title */}
                    <h1 className="font-serif text-2xl md:text-3xl font-medium text-archival-dark tracking-tight leading-tight mb-5 italic max-w-xl mx-auto px-1 selection:bg-archival-olive/20">
                      “{THESIS_DATA.title}”
                    </h1>

                    <div className="w-16 h-[1.5px] bg-archival-olive/40 my-3" />

                    <h2 className="font-serif text-sm italic text-archival-text-muted mt-2 tracking-wide max-w-md">
                      {currentChapter.paragraphs[3]}
                    </h2>

                    <p className="font-mono text-[10px] uppercase text-archival-olive tracking-wider mt-6 font-bold">
                      {currentChapter.paragraphs[4]}
                    </p>

                    <div className="bg-[#f2eee1]/60 p-4 border border-archival-border mt-8 rounded-[1px] w-full text-left font-serif max-w-lg mb-8">
                      <span className="font-mono text-[9px] text-archival-olive font-bold uppercase tracking-widest block mb-2 border-b border-[#cbc7b2]/60 pb-1 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5" /> COMISIÓN EXAMINADORA
                      </span>
                      <p className="text-xs text-archival-dark/95 leading-relaxed">
                        • {currentChapter.paragraphs[5]}
                      </p>
                      <p className="text-xs text-archival-text-muted italic mt-0.5">
                        • {currentChapter.paragraphs[6]}
                      </p>
                    </div>

                    {/* Funding footer */}
                    <p className="font-serif text-[11px] leading-relaxed text-justify text-archival-text-muted/95 border-t border-archival-border pt-5 mt-4 max-w-lg italic">
                      {currentChapter.paragraphs[7]}
                    </p>
                  </div>
                ) : currentChapter.sectionTitle === "Agradecimientos" ? (
                  /* 2. Dedicatory & Agradecimientos layout */
                  <div className="py-2">
                    <h2 className="font-serif text-3xl font-semibold italic text-archival-dark mb-6 mt-1 border-b border-archival-border pb-2 text-center md:text-left">
                      {currentChapter.sectionTitle}
                    </h2>
                    <div className="flex flex-col gap-6 italic">
                      {currentChapter.paragraphs.map((p, idx) => {
                        const isMapu = p.includes("Pu peñi");
                        return (
                          <blockquote 
                            key={idx} 
                            className={`font-serif text-base text-archival-text-muted leading-relaxed pl-5 relative border-l-2 ${
                              isMapu 
                                ? "border-archival-olive text-archival-olive font-medium bg-archival-olive/5 py-4 pr-4 rounded-r-sm"
                                : "border-archival-border"
                            }`}
                          >
                            <p>“ {p} ”</p>
                            {isMapu && (
                              <span className="font-mono text-[9px] text-archival-olive font-bold tracking-widest block uppercase mt-2.5">
                                [ Dedicado al lof Manuel Llancaleo ]
                              </span>
                            )}
                          </blockquote>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  /* 3. General Chapter Content Layout */
                  <div className="py-2">
                    <div className="flex items-center gap-2 mb-3">
                      <Bookmark className="w-4 h-4 text-archival-olive" />
                      <span className="font-mono text-[9px] uppercase tracking-widest text-archival-olive/80 font-bold">
                        Dossier Académico • Secc. 0{currentChapterIndex}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-archival-dark mb-6 border-b border-archival-border pb-3">
                      {currentChapter.sectionTitle}
                    </h2>

                    <div className="flex flex-col gap-5 text-justify">
                      {currentChapter.paragraphs.map((p, idx) => {
                        const isListItem = p.startsWith("1.") || p.startsWith("2.") || p.startsWith("3.") || p.startsWith("4.") || p.startsWith("El Kullito") || p.startsWith("El Lafken Purrun") || p.startsWith("El Posicionamiento");
                        
                        return (
                          <p 
                            key={idx} 
                            className={`font-serif text-[15px] md:text-base leading-relaxed text-archival-text-muted ${
                              isListItem 
                                ? "p-4 bg-[#f2eee1]/40 border border-archival-border rounded-sm text-archival-dark shadow-sm italic"
                                : "first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-archival-olive first-letter:font-serif first-letter:leading-none"
                            }`}
                          >
                            {p}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Editorial Pagination Console */}
          <div className="border-t border-archival-border px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 z-20 bg-archival-bg/95">
            {/* Table of contents status */}
            <span className="font-mono text-[11px] text-archival-text-muted">
              Página digital <strong className="text-archival-dark">{currentChapterIndex + 1}</strong> de {THESIS_DATA.documentBody.length}
            </span>

            {/* Page selectors */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentChapterIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentChapterIndex === 0}
                className={`px-3 py-2 border border-archival-border rounded-sm font-mono text-[11px] uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer ${
                  currentChapterIndex === 0 
                    ? "opacity-35 cursor-not-allowed text-archival-text-muted" 
                    : "hover:bg-archival-dark hover:text-archival-bg text-archival-dark hover:border-archival-dark font-bold shadow-sm"
                }`}
              >
                <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
                <span>Atrás</span>
              </button>

              <button
                onClick={() => setCurrentChapterIndex((prev) => Math.min(THESIS_DATA.documentBody.length - 1, prev + 1))}
                disabled={currentChapterIndex === THESIS_DATA.documentBody.length - 1}
                className={`px-3 py-2 border border-archival-border rounded-sm font-mono text-[11px] uppercase tracking-wider flex items-center gap-1 transition-all cursor-pointer ${
                  currentChapterIndex === THESIS_DATA.documentBody.length - 1 
                    ? "opacity-35 cursor-not-allowed text-archival-text-muted" 
                    : "hover:bg-archival-dark hover:text-archival-bg text-archival-dark hover:border-archival-dark font-bold shadow-sm"
                }`}
              >
                <span>Siguiente</span>
                <ChevronRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
