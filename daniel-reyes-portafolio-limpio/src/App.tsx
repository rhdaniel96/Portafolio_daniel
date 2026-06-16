import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, BookOpen, LayoutTemplate, ArrowRight, Scroll } from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";
import ThesisModal from "./components/ThesisModal";
import PhotobookModal from "./components/PhotobookModal";
import CasaCabraPanel from "./components/CasaCabraPanel";

import { ARCHIVE_IMAGES, PHOTOBOOKS_DATA } from "./data";
import { ArchiveImage, Photobook } from "./types";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("index");
  
  // Interactive Modals and Lightbox States
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [selectedBook, setSelectedBook] = useState<Photobook | null>(null);
  const [isThesisOpen, setIsThesisOpen] = useState<boolean>(false);

  // Smooth scroll helper for internal index section navigation
  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll back to header top on subpage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  const handleNextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % ARCHIVE_IMAGES.length);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + ARCHIVE_IMAGES.length) % ARCHIVE_IMAGES.length);
  };

  const activeImageObj = selectedImageIndex !== null ? ARCHIVE_IMAGES[selectedImageIndex] : null;

  return (
    <div className="min-h-screen bg-archival-bg text-archival-dark flex flex-col relative selection:bg-archival-border selection:text-archival-olive font-sans">
      {/* Real analog natural paper texture overlay */}
      <div className="noise-overlay" />

      {/* Shared component Navigation Header */}
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Container spacing aligned with fixed header height (56px) */}
      <main className="flex-grow pt-[80px] max-w-[1140px] w-full mx-auto px-6">
        
        <AnimatePresence mode="wait">
          {/* Section 00: Index Main Home Page */}
          {activeSection === "index" && (
            <motion.div
              key="index-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-16"
            >
              {/* Hero Banner Section */}
              <section className="min-h-[50vh] flex flex-col justify-center items-center text-center py-12">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-archival-olive mb-3 block">
                  Etnografía y Paisaje
                </span>
                <h1 className="font-serif text-4xl md:text-6xl font-medium text-archival-dark tracking-tight leading-none mb-4 selection:bg-archival-olive/20">
                  Daniel Reyes Hualacan
                </h1>
                <p className="font-mono text-xs uppercase tracking-widest text-archival-text-muted mt-2 block border-t border-b border-archival-border/40 py-2 px-6">
                  Tesis • Fotografía Analógica • Ediciones
                </p>
                
                <a
                  href="https://www.linkedin.com/in/reyes-hualacan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-widest text-archival-olive hover:text-archival-olive-light mt-4 inline-flex items-center gap-1 border border-archival-olive/30 px-3 py-1 rounded-[2px] bg-archival-olive/5 hover:bg-archival-olive/10 transition-all active:scale-95 transition-all duration-300"
                >
                  Linkedin
                </a>
                
                <div className="w-12 h-[1px] bg-archival-border-dark mt-6" />
              </section>

              {/* 01. Thesis Panel */}
              <section id="thesis-section" className="scroll-mt-24">
                <div className="flex items-center justify-between mb-6 border-b border-archival-border pb-2.5">
                  <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-archival-olive font-bold flex items-center gap-1">
                    <span>01.</span> Tesis / Investigación
                  </h2>
                </div>

                <div className="bg-[#f2eee1]/60 border border-archival-border p-6 md:p-8 flex flex-col gap-6 relative rounded-sm">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-archival-text-muted bg-archival-bg px-2 py-0.5 border border-archival-border/45 w-fit rounded-sm">
                    Estudio Etnográfico de Campo
                  </span>
                  
                  <h3 className="font-serif text-xl md:text-2xl italic font-medium leading-relaxed text-archival-dark max-w-4xl">
                    "Una mirada al paisaje desde el Itrofill Mogen: Estudio etnográfico sobre las prácticas de interrelación entre el paisaje y el devenir ontológico del lof lafkenche El Alma, Budi, comuna de Puerto Saavedra"
                  </h3>
                  
                  <p className="font-serif text-sm text-archival-text-muted leading-relaxed max-w-3xl">
                    Esta investigación explora el Lago Budi —único lago de agua salada de Latinoamérica y hogar histórico de comunidades mapuche-lafkenche— como un paisaje clave para comprender el devenir ontológico de quienes lo habitan. A partir del azmapu, se examina la relación reciproca entre comunidades y entorno, una forma de vínculo con el medio ambiente que, bajo el principio del itrofill mogen, reconoce que todas las vidas importan, incluidas las de origen espiritual. El estudio invita a apreciar otras formas de relacionarse con la biodiversidad, más allá de la lógica occidental.
                  </p>

                  <div className="flex items-center gap-4 mt-2">
                    <button
                      type="button"
                      onClick={() => setIsThesisOpen(true)}
                      className="w-fit bg-archival-olive hover:bg-archival-olive-light text-archival-bg font-mono text-xs uppercase tracking-widest py-3 px-8 rounded-sm transition-all active:scale-[0.98] cursor-pointer shadow-sm hover:shadow-md flex items-center gap-2 font-bold"
                    >
                      <BookOpen className="w-4 h-4" />
                      Leer Tesis
                    </button>
                  </div>
                </div>
              </section>

              {/* 02. Selected Photography Archive */}
              <section id="archive-section" className="scroll-mt-24">
                <div className="flex items-center justify-between mb-8 border-b border-archival-border pb-2.5">
                  <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-archival-olive font-bold flex items-center gap-1">
                    <span>02.</span> Archivo Fotográfico Seleccionado
                  </h2>
                </div>

                {/* Classic asymmetrical photo layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ARCHIVE_IMAGES.map((img, index) => {
                    // Span columns selectively to replicate the aesthetic spacing layout
                    const isFullSpan = index === 0;
                    return (
                      <div 
                        key={img.id}
                        className={`group border border-archival-border bg-[#f2eee1] p-3 rounded-sm cursor-pointer shadow-sm hover:shadow-md transition-all duration-350 flex flex-col justify-between ${
                          isFullSpan ? "md:col-span-2" : ""
                        }`}
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        {/* Grayscale physical frame */}
                        <div className="relative overflow-hidden aspect-[1.78] sm:aspect-[2.35] md:aspect-auto w-full max-h-[360px] border border-archival-border-dark/30 rounded-[1px]">
                          <img 
                            src={img.src} 
                            alt={img.title}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 brightness-[1.02]"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Visual Metadata bar */}
                        <div className="mt-3 flex justify-between items-start gap-4">
                          <div>
                            <span className="font-mono text-[10px] text-archival-olive font-medium uppercase tracking-wider">
                              00{img.id}_ARCHIVO • {img.location}
                            </span>
                            <h4 className="font-serif text-lg font-medium italic text-archival-dark mt-0.5 group-hover:text-archival-olive transition-colors">
                              {img.title}
                            </h4>
                          </div>
                          <span className="font-mono text-[10px] text-archival-text-muted text-right whitespace-nowrap bg-archival-bg px-2 py-0.5 rounded-sm border border-archival-border/30">
                            {img.techDetails}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>


              </section>

              {/* 03. Photobooks Catalog */}
              <section id="photobooks-section" className="scroll-mt-24 pb-6">
                <div className="flex items-center justify-between mb-8 border-b border-archival-border pb-2.5">
                  <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-archival-olive font-bold flex items-center gap-1">
                    <span>03.</span> Photobooks y Autoediciones
                  </h2>
                  <span className="font-mono text-[10px] text-archival-text-muted">Haz clic en portada para hojear</span>
                </div>

                <div className="flex justify-center">
                  {PHOTOBOOKS_DATA.map((book) => (
                    <button
                      key={book.id}
                      type="button"
                      onClick={() => setSelectedBook(book)}
                      className="bg-[#f2eee1]/60 border border-archival-border p-5 md:p-6 rounded-sm flex flex-col md:flex-row gap-6 max-w-3xl w-full group cursor-pointer hover:border-archival-dark hover:shadow-md transition-all duration-350 text-left"
                      id="cabra-monograph-card"
                    >
                      <div className="bg-archival-bg border border-archival-border p-4 overflow-hidden rounded-[1.5px] flex items-center justify-center md:w-[220px] aspect-square shrink-0 group-hover:bg-[#ebdbb2]/10 transition-colors">
                        <img 
                          src={book.coverSrc} 
                          alt={book.title}
                          className="max-h-[160px] w-auto object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 border border-archival-border shadow-sm"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="flex flex-col justify-center gap-1.5 flex-1 select-none">
                        <span className="font-mono text-[9px] text-archival-olive uppercase tracking-[0.2em] font-bold">
                          {book.pubInfo}
                        </span>
                        <h4 className="font-serif text-2xl italic font-medium text-archival-dark group-hover:text-archival-olive transition-colors leading-snug animate-none">
                          {book.title}
                        </h4>
                        <p className="font-serif text-xs text-archival-text-muted mt-1 leading-relaxed">
                          {book.description}
                        </p>
                        <div className="mt-4 flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-wider text-archival-olive font-extrabold group-hover:translate-x-1 duration-300 transition-transform">
                          <span>Hojear Fotolibro Completo (27 páginas)</span>
                          <span>→</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            </motion.div>
          )}



          {/* Section 03: Casa Cabra Detail view */}
          {activeSection === "cabra" && (
            <motion.div
              key="cabra-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <div className="flex justify-between items-center border-b border-archival-border pb-4 mb-6">
                <div>
                  <h1 className="font-serif text-3xl md:text-4xl italic text-archival-dark tracking-tight leading-none">
                    Casa Cabra Desde 2017
                  </h1>
                  <span className="font-mono text-[10px] text-archival-text-muted uppercase tracking-widest mt-1.5 block">
                    Fotografía • Habitabilidad • Bitácora Costera
                  </span>
                </div>
                
                <button 
                  onClick={() => setActiveSection("index")}
                  className="font-mono text-xs text-archival-text-muted hover:text-archival-dark border border-archival-border hover:border-archival-dark px-3.5 py-2 rounded-sm transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <LayoutTemplate className="w-3.5 h-3.5" />
                  Volver al Index
                </button>
              </div>

              <CasaCabraPanel />
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Global layouts Footer including pigment swatches */}
      <Footer 
        onBackToTop={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onNavigate={setActiveSection}
      />

      {/* Immersive Lightbox Modal for gallery viewing */}
      <AnimatePresence>
        {selectedImageIndex !== null && activeImageObj && (
          <Lightbox 
            image={activeImageObj}
            onClose={() => setSelectedImageIndex(null)}
            onNext={handleNextImage}
            onPrev={handlePrevImage}
          />
        )}
      </AnimatePresence>

      {/* Integrated PDF Reader Modal for the Thesis paper */}
      <ThesisModal 
        isOpen={isThesisOpen}
        onClose={() => setIsThesisOpen(false)}
      />

      {/* Integrated Spread-Flipping catalog inspection modal */}
      <PhotobookModal 
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
      />

    </div>
  );
}
