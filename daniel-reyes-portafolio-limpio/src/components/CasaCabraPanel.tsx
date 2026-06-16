import { CloudRain, Sun, Calendar, Wind, Thermometer, MapPin } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  season: string;
}

export default function CasaCabraPanel() {
  const timeline: TimelineEvent[] = [
    {
      year: "2017",
      title: "Fundación y Arribo en Saavedra",
      description: "Asentamiento definitivo en las dunas de Puerto Saavedra. Adquisición legítima de pasturas orgánicas y llegada de Copito, la cabra autóctona anglo-nubiana que custodia los juncos y delimita los predios frente al viento marino.",
      season: "Primavera"
    },
    {
      year: "2019",
      title: "Sistemas de Labranza con Tracción",
      description: "Incorporación voluntaria del sistema de arado tradicional mediante yunta de bueyes. Se preparan los suelos inclinados de arcilla húmeda para la siembra sustentable de papas nativas, porotos y arvejas sin intervención mecánica industrial.",
      season: "Otoño"
    },
    {
      year: "2021",
      title: "Resistencia del Invierno Lafkenche",
      description: "Grandes temporales azotan el Budi. Los juncos costeros actúan como barrera sónica natural. Se consolida el registro analógico del humedal en película Ilford HP5, preservando la quietud de los botes pesqueros artesanales en puerto.",
      season: "Invierno"
    },
    {
      year: "2024",
      title: "Taller Editorial Autogestionado",
      description: "La antigua quesería de Casa Cabra se reacondiciona como taller de encuadernación rústica para los cuadernos analógicos. Aquí se pliega a mano 'Norte Quebrado' y se cosen los primeros pliegos del fanzine 'Sin Título Vol. I'.",
      season: "Verano"
    }
  ];

  return (
    <article className="animate-fadeIn">
      {/* Banner Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 border border-archival-border bg-archival-bg rounded-sm shadow-sm overflow-hidden mb-8">
        
        {/* Left Side: Editorial Image Container */}
        <div className="md:col-span-6 relative bg-archival-dark/10 h-[320px] md:h-auto min-h-[300px] flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-archival-border">
          <img 
            src="https://images.unsplash.com/photo-1533038590840-1cde6b66b72d?auto=format&fit=crop&q=80&w=1000" 
            alt="Casa Cabra - Cabra insignia" 
            className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-archival-dark/80 text-archival-bg font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 border border-archival-border/30 z-10">
            Registro Oficial: Caso de Estudio
          </div>
        </div>

        {/* Right Side: Editorial Heading & Context */}
        <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1 text-archival-text-muted mt-1 uppercase font-mono text-[11px] tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-archival-olive" />
              <span>Estación Experimental Saavedra</span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl italic text-archival-dark mt-2 mb-4 tracking-tight">
              Casa Cabra
            </h1>
            
            <span className="font-sans text-xs font-bold text-archival-olive uppercase tracking-widest block mb-4">
              Desde 2017
            </span>
            
            <p className="font-serif text-sm text-archival-text-muted leading-relaxed mb-4">
              Ubicada en los límites húmedos de la Costa de la Araucanía, <strong>Casa Cabra</strong> es una bitácora viva de coexistencia campesina y autogestión territorial. Más que un predio rural, constituye el núcleo de la producción intelectual y el revelado analógico de Daniel Reyes Hualacan.
            </p>
          </div>

          {/* Micro climate status */}
          <div className="border-t border-archival-border border-dashed pt-4 flex flex-wrap items-center gap-4 text-archival-text-muted font-mono text-[10px]">
            <span className="flex items-center gap-1">
              <CloudRain className="w-3.5 h-3.5 text-archival-olive" />
              Lluvia Costera (Pluviosidad Alta)
            </span>
            <span className="flex items-center gap-1">
              <Wind className="w-3.5 h-3.5 text-archival-olive" />
              Sg: Sur-Poniente 24 Nudos
            </span>
          </div>

        </div>

      </div>

      {/* Narrative timeline */}
      <div className="border border-archival-border bg-archival-bg p-6 rounded-sm shadow-sm">
        <h3 className="font-mono text-xs uppercase tracking-widest font-bold text-archival-olive mb-6">
          Cronología Habitacional / Homestead Diary
        </h3>

        <div className="relative border-l border-archival-border pl-6 flex flex-col gap-8 ml-2">
          {timeline.map((event, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 bg-archival-bg border-2 border-archival-olive rounded-full group-hover:scale-125 transition-transform" />

              <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                <span className="font-mono text-xs font-bold text-archival-olive bg-archival-olive/10 px-2 py-0.5 rounded-sm">
                  {event.year}
                </span>
                <span className="font-serif text-sm italic font-bold text-archival-dark">
                  {event.title}
                </span>
                <span className="font-mono text-[9px] text-archival-text-muted/65 uppercase tracking-wider ml-auto">
                  {event.season}
                </span>
              </div>

              <p className="font-serif text-sm text-archival-text-muted leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
