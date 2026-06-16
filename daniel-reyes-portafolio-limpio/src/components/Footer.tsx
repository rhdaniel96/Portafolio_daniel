interface FooterProps {
  onBackToTop?: () => void;
  onNavigate?: (section: string) => void;
}

export default function Footer({ onBackToTop, onNavigate }: FooterProps) {
  return (
    <footer className="w-full py-8 border-t border-archival-border bg-archival-bg mt-16 text-xs text-archival-text-muted">
      <div className="max-w-[1140px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand Column */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-serif text-base text-archival-olive tracking-widest font-bold uppercase">
            REYES HUALACAN
          </span>
          <p className="font-sans text-[11px] text-archival-text-muted mt-1">
            © 2026 Archival Studio. All rights documented.
          </p>
        </div>

        {/* Links Column */}
        <div className="flex gap-8 font-mono tracking-wider uppercase text-[11px]">
          <a
            href="https://www.linkedin.com/in/reyes-hualacan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-archival-olive transition-colors cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-archival-olive after:transition-all pb-0.5"
          >
            Linkedin
          </a>
          <button 
            type="button"
            onClick={onBackToTop} 
            className="hover:text-archival-olive transition-colors cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-archival-olive after:transition-all pb-0.5"
          >
            Back to Top
          </button>
        </div>

        {/* Color Emulsion Pigment Samples */}
        <div className="flex items-center gap-1.5 bg-archival-border/10 p-2 border border-archival-border/40 rounded-sm">
          <span className="font-mono text-[9px] uppercase tracking-widest mr-2 text-archival-text-muted/75 select-none">
            EMULSION:
          </span>
          <div className="w-3.5 h-3.5 bg-[#5f5b00] rounded-[1px] border border-archival-border" title="Olive Emulsion (Pátina de Campo)" />
          <div className="w-3.5 h-3.5 bg-[#855400] rounded-[1px] border border-archival-border" title="Ochre Emulsion (Humedal del Budi)" />
          <div className="w-3.5 h-3.5 bg-[#7a7866] rounded-[1px] border border-archival-border" title="Charcoal Emulsion (Grano Analógico)" />
        </div>

      </div>
    </footer>
  );
}
