import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, BookOpen, Layers, Maximize2, MapPin, Eye, Minimize2 } from "lucide-react";
import { CASA_CABRA_PHOTOBOOK, PhotobookPage } from "../photobook_data";
import { motion, AnimatePresence } from "motion/react";

interface PhotobookModalProps {
  book: any | null; // Keep compatible with parent props
  onClose: () => void;
}

export default function PhotobookModal({ book, onClose }: PhotobookModalProps) {
  const [viewMode, setViewMode] = useState<"spread" | "single">("spread");
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0); // 0 to 13
  const [currentPageIndex, setCurrentPageIndex] = useState(1); // 1 to 27 for mobile/single view
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Sync state between spread and single view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setViewMode("single");
      } else {
        setViewMode("spread");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!book) return null;

  // Jump helpers
  const jumpToPage = (pageNum: number) => {
    if (viewMode === "single") {
      setCurrentPageIndex(pageNum);
    } else {
      if (pageNum === 1) {
        setCurrentSpreadIndex(0);
      } else {
        setCurrentSpreadIndex(Math.floor(pageNum / 2));
      }
    }
  };

  // Spread handlers
  const maxSpreads = 13; // 0 to 13
  const handlePrevSpread = () => {
    setCurrentSpreadIndex((prev) => Math.max(0, prev - 1));
  };
  const handleNextSpread = () => {
    setCurrentSpreadIndex((prev) => Math.min(maxSpreads, prev + 1));
  };

  // Single page handlers
  const maxPages = 27;
  const handlePrevPage = () => {
    setCurrentPageIndex((prev) => Math.max(1, prev - 1));
  };
  const handleNextPage = () => {
    setCurrentPageIndex((prev) => Math.min(maxPages, prev + 1));
  };

  // Get pages for current spread
  const getSpreadPages = (): { left: PhotobookPage | null; right: PhotobookPage | null } => {
    if (currentSpreadIndex === 0) {
      return { 
        left: null, // Left is cover back or empty
        right: CASA_CABRA_PHOTOBOOK[0] // Cover
      };
    }
    const leftPageNum = currentSpreadIndex * 2;
    const rightPageNum = currentSpreadIndex * 2 + 1;
    return {
      left: CASA_CABRA_PHOTOBOOK[leftPageNum - 1] || null,
      right: CASA_CABRA_PHOTOBOOK[rightPageNum - 1] || null
    };
  };

  const { left: leftPage, right: rightPage } = getSpreadPages();
  const currentSinglePage = CASA_CABRA_PHOTOBOOK[currentPageIndex - 1];

  // Helper to render page styling based on its type
  const renderPageContent = (page: PhotobookPage) => {
    switch (page.layout) {
      case "cover":
        return (
          <div className="h-full flex flex-col md:flex-row bg-[#FAF8F5] p-6 md:p-8 relative selection:bg-archival-border selection:text-archival-olive select-none">
            {/* Soft decorative paper border */}
            <div className="absolute inset-4 border border-archival-border-dark/15 pointer-events-none rounded-[1px] md:inset-5" />
            
            {/* Left-hand image */}
            <div className="flex-1 min-h-[180px] md:min-h-0 relative rounded-[1px] overflow-hidden border border-archival-border shadow-sm flex items-center justify-center bg-archival-bg">
              <img 
                src={page.images[0]} 
                alt="Casa Cabra Cover" 
                className="w-full h-full object-cover grayscale brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-archival-dark/80 text-[#ebdbb2] font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 border border-[#ebdbb2]/10">
                L.E.V. / REGISTRO ANALÓGICO
              </div>
            </div>

            {/* Right-hand text block */}
            <div className="flex-1 flex flex-col justify-center items-center text-center mt-6 md:mt-0 md:pl-8 z-10">
              <span className="font-mono text-[9px] text-archival-olive font-extrabold uppercase tracking-[0.25em] mb-2 block">
                FOTO-LIBRO DE CAMPO
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-archival-dark italic mb-1.5 leading-tight">
                {page.title}
              </h1>
              <div className="w-8 h-[1px] bg-archival-olive/40 my-3" />
              <p className="font-sans text-[11px] font-bold text-archival-text-muted uppercase tracking-[0.16em]">
                {page.subtitle}
              </p>
              <div className="absolute bottom-6 text-[8px] font-mono text-archival-text-muted/60">
                PÁGINA 1 DE 27 • UNIVERSIDAD ALBERTO HURTADO
              </div>
            </div>
          </div>
        );

      case "blank":
        return (
          <div className="h-full flex flex-col items-center justify-center bg-[#FAF8F5] p-8 relative selection:bg-archival-border selection:text-archival-olive">
            <div className="absolute inset-4 border border-dashed border-archival-border-dark/10 pointer-events-none rounded-[1px]" />
            <span className="font-serif italic text-xs text-archival-text-muted/40 font-medium tracking-wide">
              {page.paragraphs?.[0] || "[ Página General ]"}
            </span>
            <div className="absolute bottom-4 left-4 font-mono text-[9px] text-archival-text-muted/40">
              pág. {page.pageNumber}
            </div>
          </div>
        );

      case "index":
        return (
          <div className="h-full flex flex-col bg-[#FAF8F5] p-6 md:p-8 relative selection:bg-archival-border selection:text-archival-olive">
            <div className="absolute inset-4 border border-archival-border-dark/15 pointer-events-none rounded-[1px] md:inset-5" />
            
            <span className="font-mono text-[80px] font-light leading-none text-archival-dark/5 absolute top-4 right-6 select-none font-serif">
              03
            </span>

            <div className="z-10 mt-4">
              <h3 className="font-serif text-xl italic font-semibold text-archival-dark tracking-tight mb-2">
                {page.title}
              </h3>
              <div className="w-10 h-[1.5px] bg-archival-olive" />
            </div>

            <div className="flex-1 flex flex-col justify-center gap-4 my-6 font-serif max-w-sm z-10">
              {page.paragraphs?.map((line, idx) => {
                const parts = line.split("   ");
                const titleStr = parts[0];
                const pageNumStr = parts[parts.length - 1];
                
                // Determine target page based on title
                const cleanTitle = titleStr.replace(/\.+/g, "").trim();
                let targetPage = 3;
                if (cleanTitle.includes("Nosotros")) targetPage = 4;
                if (cleanTitle.includes("La Familia")) targetPage = 8;
                if (cleanTitle.includes("Casa Cabra")) targetPage = 10;
                if (cleanTitle.includes("Más allá")) targetPage = 19;

                return (
                  <button
                    key={idx}
                    onClick={() => jumpToPage(targetPage)}
                    className="flex justify-between items-baseline text-left text-xs text-archival-text-muted hover:text-archival-olive cursor-pointer border-b border-dashed border-archival-border/40 pb-1 group transition-colors"
                  >
                    <span className="font-medium group-hover:underline">{titleStr.replace(/\.+/g, "").trim()}</span>
                    <span className="font-mono text-[10px] text-archival-olive">{pageNumStr.trim()}</span>
                  </button>
                );
              })}
            </div>

            {page.images.length > 0 && (
              <div className="mt-auto relative rounded-[1px] overflow-hidden border border-archival-border shadow-sm h-28 flex items-center justify-center bg-archival-bg group">
                <img 
                  src={page.images[0]} 
                  alt="Index backdrop" 
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={() => setZoomedImage(page.images[0])}
                  className="absolute bottom-2 right-2 bg-archival-dark/85 p-1 rounded-sm text-[#ebdbb2] hover:bg-archival-olive hover:text-archival-bg transition-colors"
                  title="Ver imagen completa"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div className="absolute bottom-4 left-4 font-mono text-[9px] text-archival-text-muted/50">
              pág. {page.pageNumber}
            </div>
          </div>
        );

      case "editorial":
        return (
          <div className="h-full flex flex-col justify-between bg-[#FAF8F5] p-6 md:p-8 relative selection:bg-archival-border selection:text-archival-olive">
            <div className="absolute inset-4 border border-archival-border-dark/15 pointer-events-none rounded-[1px] md:inset-5" />
            
            <div className="flex flex-col gap-3 z-10 flex-1">
              <div>
                <span className="font-mono text-[9px] text-archival-olive font-extrabold uppercase tracking-widest block">
                  CAPÍTULO • REGISTRO DE CAMPO
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-archival-dark italic mt-0.5">
                  {page.title}
                </h3>
              </div>

              {page.quote && (
                <blockquote className="border-l-2 border-archival-olive/30 pl-3 py-1 my-1.5 font-serif text-xs italic text-archival-dark/85 leading-relaxed bg-[#f2eee1]/45 p-2 rounded-[1px]">
                  {page.quote}
                </blockquote>
              )}

              <div className="font-serif text-[11.5px] text-archival-text-muted leading-relaxed space-y-2.5 max-h-[160px] overflow-y-auto pr-1">
                {page.paragraphs?.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {page.images.length > 0 && (
              <div className="mt-4 relative rounded-[1px] overflow-hidden border border-archival-border shadow-sm h-36 flex items-center justify-center bg-archival-bg group">
                <img 
                  src={page.images[0]} 
                  alt={page.title || "Editorial photography"} 
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={() => setZoomedImage(page.images[0])}
                  className="absolute bottom-2 right-2 bg-archival-dark/85 p-1 rounded-sm text-[#ebdbb2] hover:bg-archival-olive hover:text-archival-bg transition-colors"
                  title="Ampliar registro"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div className="absolute bottom-4 left-4 font-mono text-[9px] text-archival-text-muted/50">
              pág. {page.pageNumber}
            </div>
          </div>
        );

      case "full-image":
        return (
          <div className="h-full flex flex-col bg-[#FAF8F5] p-5 relative selection:bg-archival-border selection:text-archival-olive group select-none">
            <div className="absolute inset-4 border border-archival-border-dark/15 pointer-events-none rounded-[1px]" />
            
            <div className="flex-1 relative rounded-[1.5px] overflow-hidden border border-archival-border shadow-md bg-archival-bg flex items-center justify-center">
              <img 
                src={page.images[0]} 
                alt={page.caption || "Full page archival"} 
                className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-[1.02] transition-transform duration-750"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setZoomedImage(page.images[0])}
                className="absolute bottom-3 right-3 bg-archival-dark/85 p-1.5 rounded-sm text-[#ebdbb2] hover:bg-archival-olive hover:text-archival-bg transition-colors shadow-md z-10"
                title="Ampliar fotografía completa"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {page.caption && (
              <div className="mt-3.5 z-10 flex gap-1.5 items-start">
                <MapPin className="w-3.5 h-3.5 text-archival-olive mt-0.5 shrink-0" />
                <span className="font-serif italic text-[11px] text-archival-text-muted leading-relaxed font-medium">
                  {page.caption}
                </span>
              </div>
            )}

            <div className="absolute bottom-4 left-4 font-mono text-[9px] text-archival-text-muted/50">
              pág. {page.pageNumber}
            </div>
          </div>
        );

      case "collage":
        const isCollage3 = page.imageLayout === "collage-3";
        return (
          <div className="h-full flex flex-col justify-between bg-[#FAF8F5] p-5 relative selection:bg-archival-border selection:text-archival-olive group">
            <div className="absolute inset-4 border border-archival-border-dark/15 pointer-events-none rounded-[1px]" />

            <div className="flex-1 flex flex-col gap-3 relative z-10">
              {isCollage3 ? (
                // Three image layout collage
                <div className="flex-1 grid grid-cols-2 gap-3 min-h-0">
                  <div className="col-span-1 relative rounded-[1px] overflow-hidden border border-archival-border shadow-sm flex items-center justify-center bg-archival-bg">
                    <img 
                      src={page.images[0]} 
                      alt="Collage 1" 
                      className="w-full h-full object-cover grayscale brightness-95" 
                      referrerPolicy="no-referrer"
                    />
                    <button onClick={() => setZoomedImage(page.images[0])} className="absolute bottom-1.5 right-1.5 bg-archival-dark/75 p-0.5 rounded-sm text-white hover:bg-archival-olive"><Maximize2 className="w-2.5 h-2.5" /></button>
                  </div>
                  <div className="col-span-1 grid grid-rows-2 gap-3 min-h-0">
                    <div className="relative rounded-[1px] overflow-hidden border border-archival-border shadow-sm flex items-center justify-center bg-archival-bg">
                      <img 
                        src={page.images[1]} 
                        alt="Collage 2" 
                        className="w-full h-full object-cover grayscale brightness-90" 
                        referrerPolicy="no-referrer"
                      />
                      <button onClick={() => setZoomedImage(page.images[1])} className="absolute bottom-1.5 right-1.5 bg-archival-dark/75 p-0.5 rounded-sm text-white hover:bg-archival-olive"><Maximize2 className="w-2.5 h-2.5" /></button>
                    </div>
                    <div className="relative rounded-[1px] overflow-hidden border border-archival-border shadow-sm flex items-center justify-center bg-archival-bg">
                      <img 
                        src={page.images[2]} 
                        alt="Collage 3" 
                        className="w-full h-full object-cover grayscale brightness-95" 
                        referrerPolicy="no-referrer"
                      />
                      <button onClick={() => setZoomedImage(page.images[2])} className="absolute bottom-1.5 right-1.5 bg-archival-dark/75 p-0.5 rounded-sm text-white hover:bg-archival-olive"><Maximize2 className="w-2.5 h-2.5" /></button>
                    </div>
                  </div>
                </div>
              ) : (
                // Two image layout collage
                <div className="flex-1 grid grid-rows-2 gap-3 min-h-0">
                  <div className="relative rounded-[1px] overflow-hidden border border-archival-border shadow-sm flex items-center justify-center bg-archival-bg">
                    <img 
                      src={page.images[0]} 
                      alt="Collage 1" 
                      className="w-full h-full object-cover grayscale brightness-95" 
                      referrerPolicy="no-referrer"
                    />
                    <button onClick={() => setZoomedImage(page.images[0])} className="absolute bottom-1.5 right-1.5 bg-archival-dark/75 p-0.5 rounded-sm text-white hover:bg-archival-olive"><Maximize2 className="w-2.5 h-2.5" /></button>
                  </div>
                  <div className="relative rounded-[1px] overflow-hidden border border-archival-border shadow-sm flex items-center justify-center bg-archival-bg">
                    <img 
                      src={page.images[1]} 
                      alt="Collage 2" 
                      className="w-full h-full object-cover grayscale brightness-95" 
                      referrerPolicy="no-referrer"
                    />
                    <button onClick={() => setZoomedImage(page.images[1])} className="absolute bottom-1.5 right-1.5 bg-archival-dark/75 p-0.5 rounded-sm text-white hover:bg-archival-olive"><Maximize2 className="w-2.5 h-2.5" /></button>
                  </div>
                </div>
              )}
              
              {page.caption && (
                <div className="mt-1 pb-1 z-10 flex gap-1.5 items-start">
                  <MapPin className="w-3.5 h-3.5 text-archival-olive mt-0.5 shrink-0" />
                  <span className="font-serif italic text-[11px] text-archival-text-muted leading-relaxed font-medium">
                    {page.caption}
                  </span>
                </div>
              )}
            </div>

            <div className="absolute bottom-4 left-4 font-mono text-[9px] text-archival-text-muted/50">
              pág. {page.pageNumber}
            </div>
          </div>
        );

      case "credits":
        return (
          <div className="h-full flex flex-col justify-between bg-[#FAF8F5] p-6 md:p-8 relative selection:bg-archival-border selection:text-archival-olive">
            <div className="absolute inset-4 border border-archival-border-dark/15 pointer-events-none rounded-[1px] md:inset-5" />
            
            <div className="z-10 mt-2 space-y-4 max-h-[340px] overflow-y-auto pr-1">
              {page.creditsBlocks?.map((block, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h4 className="font-mono text-[9px] text-archival-olive font-extrabold uppercase tracking-widest border-b border-archival-border/50 pb-0.5">
                    {block.title}
                  </h4>
                  <ul className="font-serif text-[11px] text-archival-text-muted leading-normal space-y-1 text-left">
                    {block.content.map((line, lIdx) => (
                      <li key={lIdx} className="font-medium whitespace-pre-line leading-relaxed">{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-4 font-mono text-[9px] text-archival-text-muted/50">
              pág. {page.pageNumber}
            </div>
          </div>
        );

      case "back-cover":
        return (
          <div className="h-full flex bg-[#FAF8F5] relative selection:bg-archival-border selection:text-archival-olive">
            {/* Blank parchment left */}
            <div className="flex-1 hidden md:block border-r border-[#cbc7b2]/40 relative">
              <div className="absolute inset-4 border border-dashed border-archival-border-dark/5 pointer-events-none rounded-[1px]" />
            </div>

            {/* Back cover illustration right */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between relative h-full">
              <div className="absolute inset-4 border border-archival-border-dark/15 pointer-events-none rounded-[1px]" />
              
              <div className="flex-1 relative rounded-[1px] overflow-hidden border border-archival-border shadow-sm flex items-center justify-center bg-archival-bg mt-2 mb-4 group">
                <img 
                  src={page.images[0]} 
                  alt="Back cover" 
                  className="w-full h-full object-cover grayscale brightness-95" 
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-center z-10">
                <span className="font-serif italic font-semibold text-xs text-archival-dark block leading-normal">
                  FIN DEL REGISTRO
                </span>
                <span className="font-mono text-[8.5px] uppercase tracking-widest text-[#a89984] mt-1 block font-bold">
                  @CASA_CABRA • PUTAENDO (2025)
                </span>
              </div>

              <div className="absolute bottom-4 right-4 font-mono text-[9px] text-archival-text-muted/50">
                pág. {page.pageNumber}
              </div>
            </div>
          </div>
        );

      default:
        return <div className="p-8 font-serif text-sm">Contenido de página en desarrollo.</div>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-archival-dark/85 backdrop-blur-md animate-fadeIn">
      
      {/* Outer book reader container */}
      <div 
        className="relative w-full max-w-6xl bg-[#ede9db] border-2 border-archival-dark p-4 sm:p-6 shadow-2xl flex flex-col justify-between max-h-[94vh] rounded-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Subtle page texture overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] z-30" />

        {/* Top Header Controls bar */}
        <div className="flex items-center justify-between border-b border-[#cbc7b2] pb-2.5 mb-4 z-20">
          <div className="flex items-center gap-2 text-archival-olive select-none">
            <BookOpen className="w-4.5 h-4.5 shrink-0 animate-pulse" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest font-extrabold">
                FOTO-LIBRO INTERACTIVO
              </span>
              <span className="font-serif italic text-[11px] text-archival-text-muted hidden sm:inline border-l border-[#cbc7b2] pl-2">
                "Casa Cabra" — Laboratorio Etnográfico V
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle helper */}
            <button
              onClick={() => {
                if (viewMode === "spread") {
                  setViewMode("single");
                  setCurrentPageIndex(currentSpreadIndex === 0 ? 1 : currentSpreadIndex * 2);
                } else {
                  setViewMode("spread");
                  setCurrentSpreadIndex(currentPageIndex === 1 ? 0 : Math.floor(currentPageIndex / 2));
                }
              }}
              className="p-1 px-2 hover:bg-[#cbd2b7]/25 hover:text-archival-dark text-archival-text-muted transition-all rounded-sm border border-archival-olive/20 font-mono text-[9px] uppercase tracking-wider font-bold cursor-pointer flex items-center gap-1 shrink-0"
              title="Cambiar formato de lectura"
            >
              <Layers className="w-3 h-3" />
              <span>{viewMode === "spread" ? "Página única" : "Doble página"}</span>
            </button>

            <button 
              onClick={onClose}
              className="p-1 text-archival-text-muted hover:text-archival-dark hover:rotate-90 transition-all rounded-full border border-transparent hover:border-[#cbc7b2]/50 hover:bg-[#f2eee1]"
              title="Cerrar fotolibro"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Middle Interactive Book Chassis */}
        <div className="flex-1 overflow-hidden flex items-center justify-center py-2 relative min-h-[360px] md:min-h-[460px] z-10 select-none">
          
          {viewMode === "spread" ? (
            /* ================= DOUBLE PAGE SPREAD SKELETON ================= */
            <div className="relative w-full max-w-5xl aspect-[1.5/1] bg-[#dbd4c0] p-1.5 shadow-2xl rounded-[3px] border border-archival-dark/15 flex">
              
              {/* Central fold spine shadows & realistic crease effect */}
              <div className="absolute top-0 bottom-0 left-1/2 -ml-[12px] w-[24px] bg-gradient-to-r from-transparent via-archival-dark/25 to-transparent z-40 pointer-events-none mix-blend-multiply" />
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-archival-dark/40 z-50 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSpreadIndex}
                  initial={{ opacity: 0, scale: 0.995 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.002 }}
                  transition={{ duration: 0.22 }}
                  className="w-full flex h-full"
                >
                  {/* Left Page content slot */}
                  <div className="flex-1 h-full overflow-hidden relative bg-[#FAF8F5] rounded-l-[2px] shadow-[inset_-15px_0_20px_rgba(0,0,0,0.03)] border-r border-[#cbc7b2]/35">
                    {leftPage ? (
                      renderPageContent(leftPage)
                    ) : (
                      // Empty inside front cover background
                      <div className="h-full bg-[#1b1c11] flex flex-col items-center justify-center p-8 text-center relative border-r border-archival-dark/10">
                        <div className="absolute inset-4 border border-archival-olive/10 rounded-[1px]" />
                        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#8c8a74]/40">
                          COLECCIÓN LABORAL ACADÉMICA
                        </span>
                        <div className="w-4 h-[1px] bg-archival-olive/20 my-2" />
                        <p className="font-serif italic text-[11px] text-[#A2A18D]/50">
                          "Documento Etnográfico Multimedial"
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Page content slot */}
                  <div className="flex-1 h-full overflow-hidden relative bg-[#FAF8F5] rounded-r-[2px] shadow-[inset_15px_0_20px_rgba(0,0,0,0.03)] border-l border-[#cbc7b2]/35">
                    {rightPage && renderPageContent(rightPage)}
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          ) : (
            /* ================= SINGLE PAGE MOBILE SKELETON ================= */
            <div className="relative w-full max-w-md aspect-[0.78/1] bg-[#FAF8F5] shadow-2xl rounded-[2px] border border-archival-dark/15 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentPageIndex}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.18 }}
                  className="w-full h-full"
                >
                  {renderPageContent(currentSinglePage)}
                </motion.div>
              </AnimatePresence>
            </div>
          )}

        </div>

        {/* Bottom Navigation & Index shortcuts Bar Controls */}
        <div className="flex flex-col items-center gap-3 pt-3 mt-2 border-t border-[#cbc7b2]">
          
          {/* Quick chapter links shortcut train */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 font-mono text-[9px] text-[#8c8a74] max-w-full overflow-x-auto py-1">
            <span className="text-archival-olive uppercase tracking-widest font-bold font-sans">Saltar a:</span>
            <button onClick={() => jumpToPage(1)} className="hover:text-archival-dark hover:underline font-bold transition-all cursor-pointer">Portada (1)</button>
            <span className="opacity-40">•</span>
            <button onClick={() => jumpToPage(4)} className="hover:text-archival-dark hover:underline font-bold transition-all cursor-pointer">Nosotros (4)</button>
            <span className="opacity-40">•</span>
            <button onClick={() => jumpToPage(8)} className="hover:text-archival-dark hover:underline font-bold transition-all cursor-pointer">La Familia (8)</button>
            <span className="opacity-40">•</span>
            <button onClick={() => jumpToPage(10)} className="hover:text-archival-dark hover:underline font-bold transition-all cursor-pointer">Casa Cabra (10)</button>
            <span className="opacity-40">•</span>
            <button onClick={() => jumpToPage(18)} className="hover:text-archival-dark hover:underline font-bold transition-all cursor-pointer">Saberes (18)</button>
            <span className="opacity-40">•</span>
            <button onClick={() => jumpToPage(19)} className="hover:text-archival-dark hover:underline font-bold transition-all cursor-pointer">Más Allá (19)</button>
            <span className="opacity-40">•</span>
            <button onClick={() => jumpToPage(26)} className="hover:text-archival-dark hover:underline font-bold transition-all cursor-pointer">Créditos (26)</button>
          </div>

          {/* Pagination trigger arrows bar */}
          <div className="flex items-center justify-between w-full max-w-sm mt-1">
            {viewMode === "spread" ? (
              <>
                <button 
                  onClick={handlePrevSpread}
                  disabled={currentSpreadIndex === 0}
                  className="p-1 px-3 border border-[#cbc7b2] rounded-sm font-mono text-[10px] uppercase font-bold text-archival-text-muted hover:text-archival-dark hover:bg-[#FAF8F5] transition-all cursor-pointer flex items-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed group"
                >
                  <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                  <span>Espalda</span>
                </button>

                <span className="font-mono text-[10.5px] uppercase tracking-widest font-extrabold text-archival-dark bg-[#faf8f5]/65 px-3 py-1 border border-[#cbc7b2]/40 rounded-sm">
                  {currentSpreadIndex === 0 ? "PORTADA" : `DESPLIEGUE ${currentSpreadIndex} / 13`}
                </span>

                <button 
                  onClick={handleNextSpread}
                  disabled={currentSpreadIndex === maxSpreads}
                  className="p-1 px-3 border border-[#cbc7b2] rounded-sm font-mono text-[10px] uppercase font-bold text-archival-text-muted hover:text-archival-dark hover:bg-[#FAF8F5] transition-all cursor-pointer flex items-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed group"
                >
                  <span>Hojear</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={handlePrevPage}
                  disabled={currentPageIndex === 1}
                  className="p-1 px-3 border border-[#cbc7b2] rounded-sm font-mono text-[10px] uppercase font-bold text-archival-text-muted hover:text-archival-dark hover:bg-[#FAF8F5] transition-all cursor-pointer flex items-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed group"
                >
                  <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                  <span>Atrás</span>
                </button>

                <span className="font-mono text-[10.5px] uppercase tracking-widest font-extrabold text-archival-dark bg-[#faf8f5]/65 px-3 py-1 border border-[#cbc7b2]/40 rounded-sm">
                  PÁG. {currentPageIndex} de {maxPages}
                </span>

                <button 
                  onClick={handleNextPage}
                  disabled={currentPageIndex === maxPages}
                  className="p-1 px-3 border border-[#cbc7b2] rounded-sm font-mono text-[10px] uppercase font-bold text-archival-text-muted hover:text-archival-dark hover:bg-[#FAF8F5] transition-all cursor-pointer flex items-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed group"
                >
                  <span>Siguiente</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </>
            )}
          </div>

        </div>

      </div>

      {/* Extreme zoom image lightbox portal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center p-4 bg-archival-dark/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setZoomedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 bg-[#f2eee1] hover:bg-archival-olive text-archival-dark p-2 rounded-full border border-archival-border cursor-pointer transition-colors"
            onClick={() => setZoomedImage(null)}
          >
            <Minimize2 className="w-5 h-5" />
          </button>
          
          <img 
            src={zoomedImage} 
            alt="Detalle aumentado" 
            className="max-w-full max-h-[85vh] object-contain border border-[#cbc7b2]/35 shadow-2xl rounded-[1.5px] grayscale brightness-95" 
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />
          
          <p className="text-white/60 font-serif italic text-xs mt-4 text-center max-w-md pointer-events-none">[ Toque en cualquier lugar exterior para volver a la lectura ]</p>
        </div>
      )}

    </div>
  );
}
