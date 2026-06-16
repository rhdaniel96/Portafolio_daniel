import React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ArchiveImage } from "../types";

interface LightboxProps {
  image: ArchiveImage | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function Lightbox({ image, onClose, onNext, onPrev }: LightboxProps) {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
    >
      {/* Botón Cerrar */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-55 p-2 bg-white/10 text-white hover:text-archival-olive hover:bg-white/20 transition-all rounded-full border border-white/20 shadow-lg cursor-pointer"
        aria-label="Cerrar Imagen"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navegación Izquierda */}
      {onPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white transition-colors cursor-pointer z-20 hover:scale-105"
          title="Anterior Foto"
        >
          <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" />
        </button>
      )}

      {/* Navegación Derecha */}
      {onNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white transition-colors cursor-pointer z-20 hover:scale-105"
          title="Siguiente Foto"
        >
          <ChevronRight className="w-10 h-10 md:w-16 md:h-16" />
        </button>
      )}

      {/* Contenedor de la Imagen */}
      <div 
        className="relative flex flex-col items-center justify-center max-w-[90vw] max-h-[82vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={image.src} 
          alt={image.title} 
          className="max-w-full max-h-[82vh] w-auto h-auto object-contain rounded-[2px] shadow-2xl border border-white/10"
          referrerPolicy="no-referrer"
        />
        
        {/* Simple elegant dynamic subtitle at the bottom */}
        <div className="mt-4 text-center text-white select-text">
          <h3 className="font-serif text-lg md:text-xl italic tracking-tight">
            {image.title}
          </h3>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/60 mt-1">
            {image.location} • {image.date}
          </p>
        </div>
      </div>
    </div>
  );
}
