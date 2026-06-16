import { motion } from "motion/react";
import { LayoutTemplate } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
  const navItems = [
    { id: "index", label: "Index", icon: LayoutTemplate },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-[56px] bg-archival-bg/90 backdrop-blur-md z-40 border-b border-archival-border flex items-center justify-between px-4 md:px-8 max-w-[1200px] mx-auto">
      <div 
        onClick={() => onSectionChange("index")}
        className="font-serif text-lg tracking-widest text-archival-olive font-bold uppercase cursor-pointer hover:opacity-80 transition-opacity"
      >
        ARCHIVO
      </div>
      
      <nav className="flex items-center gap-2 md:gap-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`relative py-1.5 px-2 md:px-3 rounded-sm font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all outline-none ${
                isActive
                  ? "text-archival-olive font-medium"
                  : "text-archival-text-muted hover:text-archival-dark"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-archival-olive"
                  transition={{ type: "smooth", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
        
        <a
          href="https://www.linkedin.com/in/reyes-hualacan/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative py-1.5 px-2 md:px-3 rounded-sm font-mono text-xs uppercase tracking-wider text-archival-text-muted hover:text-archival-olive transition-all flex items-center gap-1 bg-transparent"
        >
          Linkedin
        </a>
      </nav>
    </header>
  );
}
