export interface PhotobookPage {
  pageNumber: number;
  layout: "cover" | "blank" | "index" | "editorial" | "full-image" | "collage" | "credits" | "back-cover";
  title?: string;
  subtitle?: string;
  quote?: string;
  paragraphs?: string[];
  images: string[];
  imageLayout?: "left" | "right" | "collage-3" | "collage-2" | "portrait" | "landscape";
  caption?: string;
  creditsBlocks?: {
    title: string;
    content: string[];
  }[];
}

export const CASA_CABRA_PHOTOBOOK: PhotobookPage[] = [
  // Page 1: Portada (Cover)
  {
    pageNumber: 1,
    layout: "cover",
    title: "Casa Cabra",
    subtitle: "Desde 2017",
    images: ["https://images.unsplash.com/photo-1533038590840-1cde6b66b72d?auto=format&fit=crop&q=80&w=800"], // White goat insignia
    caption: "Vista de Portada Principal"
  },
  // Page 2: Blank Page
  {
    pageNumber: 2,
    layout: "blank",
    paragraphs: ["[ PÁGINA DE GUARDA - EN BLANCO ]"],
    images: []
  },
  // Page 3: Índice
  {
    pageNumber: 3,
    layout: "index",
    title: "ÍNDICE",
    paragraphs: [
      "Sobre Nosotros .............................................................. 3",
      "La Familia ..................................................................... 7",
      "Casa Cabra .................................................................. 9",
      "Más allá de Casa Cabra ............................................... 18"
    ],
    images: ["https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800"], // Golden sunset over structure
    caption: "Atardecer reflejado en el valle"
  },
  // Page 4: Sobre Nosotros (Cactus)
  {
    pageNumber: 4,
    layout: "editorial",
    title: "Sobre Nosotros",
    quote: '"es muy significativo en mi vida... es la medicina que a mí me mostró la visión de asentarme en la montaña y vivir de la tierra y sus bondades" (Maca)',
    paragraphs: [
      "Frente a los maestros, Cactus de San Pedro (Echinopsis pachanoi), son los abuelos que poseen mucha sabiduría;",
      "Son los espíritus que nos dan visión, y guía. Nos conectan con el amor y la comprensión de los procesos de la vida, enseñan y ayudan a desarrollar la paciencia y la valentía."
    ],
    images: ["https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800"], // Towering san pedro-like cactus
    imageLayout: "right"
  },
  // Page 5: Paisaje de piedras
  {
    pageNumber: 5,
    layout: "full-image",
    images: ["https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1000"], // Stonewall & green grove
    caption: "Cerco de piedra ancestral, laderas de Putaendo"
  },
  // Page 6: Collage de campo (ruka, letrero, higuera)
  {
    pageNumber: 6,
    layout: "collage",
    imageLayout: "collage-3",
    images: [
      "https://images.unsplash.com/photo-1629814421115-4ba01584c042?auto=format&fit=crop&q=80&w=800", // Adobe house corner
      "https://images.unsplash.com/photo-1533038590840-1cde6b66b72d?auto=format&fit=crop&q=80&w=800", // "Casa Cabra" woodwork or rustic sign proxy
      "https://images.unsplash.com/photo-1502481851512-e9e2529beff9?auto=format&fit=crop&q=80&w=800"  // Fig leaves catching details of sun
    ],
    caption: "Detalles del campo: muro de tapial, rótulo tallado 'CASA CABRA' e higueras de la quebrada"
  },
  // Page 7: Pradera floral y un árbol
  {
    pageNumber: 7,
    layout: "full-image",
    images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1000"], // Flower meadow with central tree
    caption: "Pradera de manzanillas silvestres y árbol solitario bajo la sierra andina"
  },
  // Page 8: La Familia
  {
    pageNumber: 8,
    layout: "editorial",
    title: "La Familia",
    quote: '"Trabajamos desde nuestra casa y generemos dinero desde nuestra casa, y pudimos armar nuestra propia comunidad con nuestros hijos y entregar todo nuestro tiempo para criar a nuestros hijos."',
    paragraphs: [
      "Todo esto parte porque teníamos un propósito en la vida, que era trabajar para nuestros sueños...",
      "Nos sentimos bendecidos de poder trabajar desde nuestro hogar y poder tener a nuestros hijos aquí, criarlos en la casa, que se críen con animales."
    ],
    images: ["https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=800"], // Kids painting at the wooden table
    imageLayout: "right"
  },
  // Page 9: Retrato grupal de la familia
  {
    pageNumber: 9,
    layout: "full-image",
    images: ["https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000"], // Family portrait outside at sunset
    caption: "Retrato familiar frente a la estructura ceremonial durante la hora dorada"
  },
  // Page 10: Casa Cabra (Cabras en el corral)
  {
    pageNumber: 10,
    layout: "editorial",
    title: "Casa Cabra",
    quote: "Llevamos 8 años viviendo en este territorio de Putaendo del valle de Aconcagua, llevamos 7 años trabajando con cabras, de los cuales nunca nos imaginamos que íbamos trabajar con ellas y a criar.",
    paragraphs: [
      "De ahí viene el nombre de casa cabra, de todo lo que vivimos y nos acompañaron las cabras con nuestros hijos, que hayan nacido en este hogar los niños, el que nos estén acompañando todos los días en el corral, del que las cabras son seres muy nobles muy lindos."
    ],
    images: ["https://images.unsplash.com/photo-1484557985045-eaa2520b9b28?auto=format&fit=crop&q=80&w=800"], // Goats inside pen looking curious
    imageLayout: "right"
  },
  // Page 11: Cabra con cuernos majestuosos
  {
    pageNumber: 11,
    layout: "full-image",
    images: ["https://images.unsplash.com/photo-1484557985045-eaa2520b9b28?auto=format&fit=crop&q=80&w=1000"], // Substitute for magnificent rustic goat
    caption: "Macho cabrío líder de la manada, guardián del aprisco"
  },
  // Page 12: Collage de cabras
  {
    pageNumber: 12,
    layout: "collage",
    imageLayout: "collage-3",
    images: [
      "https://images.unsplash.com/photo-1484557985045-eaa2520b9b28?auto=format&fit=crop&q=80&w=600", // Goat resting portrait
      "https://images.unsplash.com/photo-1533038590840-1cde6b66b72d?auto=format&fit=crop&q=80&w=600", // Peer goat portrait
      "https://images.unsplash.com/photo-1484557985045-eaa2520b9b28?auto=format&fit=crop&q=80&w=600"  // Goats group resting
    ],
    caption: "Compañeras del día a día: retratos y vida comunitaria en los corrales"
  },
  // Page 13: Desde el principio
  {
    pageNumber: 13,
    layout: "editorial",
    title: "Desde el principio",
    paragraphs: [
      "La cabra es un animal de acá, un animal tradicional de Putaendo. La familia, desde nuestros ancestros tenían esta relación con las cabras, de cuidado. Cuando llegamos acá empezamos a conectar con esas raíces, con este espacio.",
      "La cabra es un ser súper inteligente, ellas saben su trabajo, por la voz ellas te conocen, Las conocemos, todas tienen nombre, las conocemos por su caminar, estamos conectados, estamos super conectados con las cabras.",
      "Con las cabritas aprendimos a entender a los animales como una compañía"
    ],
    images: ["https://images.unsplash.com/photo-1484557985045-eaa2520b9b28?auto=format&fit=crop&q=80&w=800"], // High-contrast shadows of goats looking out
    imageLayout: "right"
  },
  // Page 14: Ordeño y labores
  {
    pageNumber: 14,
    layout: "collage",
    imageLayout: "collage-3",
    images: [
      "https://images.unsplash.com/photo-1629814421115-4ba01584c042?auto=format&fit=crop&q=80&w=600", // Milking process
      "https://images.unsplash.com/photo-1533038590840-1cde6b66b72d?auto=format&fit=crop&q=80&w=600", // Close milking detail
      "https://images.unsplash.com/photo-1484557985045-eaa2520b9b28?auto=format&fit=crop&q=80&w=600"  // Stroking a kid goat
    ],
    caption: "Las jornadas de ordeño manual y mecanizado temprano por la mañana, y caricias del rebaño"
  },
  // Page 15: Queso artesanal
  {
    pageNumber: 15,
    layout: "editorial",
    title: '"Y así parte la aventura de las cabras."',
    quote: '"Después de 10 cabritas eran 20 y al otro año no eran 20, eran 30 y así empezamos."',
    paragraphs: [
      "Después al tiempo la Maca me dice “llevamos 6 meses acá, ósea un año, no estamos ganando ni uno y ya aprendimos a hacer queso, por qué no nos compramos unas cabras” y nos compramos nuestras primeras diez cabras.",
      "Empezamos a hacer queso muy asustados, entonces hacíamos 10 quesos y nos comíamos 9 para cachar como habían quedado y los encontrábamos todos malos y nos daba vergüenza vender los quesos. Hasta que un día llegó una persona y nos pregunta si hacíamos queso, le dijimos que sí pero que no nos quedaban, al final terminamos dándole queso y nos dijo que los quesos estaban muy buenos, que los quería comprar todos.",
      "Y bueno así, nos empezó a dar más confianza y comenzamos a vender los quesos, después empezamos a hacer los quesos pieza a pieza."
    ],
    images: ["https://images.unsplash.com/photo-1552763481-b59bab2c6ea9?auto=format&fit=crop&q=80&w=800"], // Artisan cheese packaging setup
    imageLayout: "right"
  },
  // Page 16: Los Cerditos
  {
    pageNumber: 16,
    layout: "collage",
    imageLayout: "collage-2",
    images: [
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800", // Pig sow milking
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=800"  // Piglets on straw
    ],
    caption: "Vida porcina en el corral: la maternidad y descanso de los pequeños lechones en la paja"
  },
  // Page 17: Paisaje contraluz de cabras
  {
    pageNumber: 17,
    layout: "full-image",
    images: ["https://images.unsplash.com/photo-1533038590840-1cde6b66b72d?auto=format&fit=crop&q=80&w=1000"], // High contrast goats
    caption: "Siluetas doradas en el redil durante el crepúsculo de la montaña"
  },
  // Page 18: Compartir Saberes
  {
    pageNumber: 18,
    layout: "editorial",
    title: "Compartir Saberes",
    paragraphs: [
      "Cuando viene la gente nos damos el tiempo de poder compartir lo que hemos aprendido, compartir una clase porque también nosotros aprendemos mucho de ellos, eso nos tiene contentos.",
      "Llevamos 7 años trabajando, hemos podido compartir esos conocimientos que tenemos respecto a las cabras y eso ha sido enriquecedor."
    ],
    images: ["https://images.unsplash.com/photo-1484557985045-eaa2520b9b28?auto=format&fit=crop&q=80&w=800"], // Mother goat and kid
    imageLayout: "right"
  },
  // Page 19: Más allá de Casa Cabra
  {
    pageNumber: 19,
    layout: "editorial",
    title: "Más Allá de Casa Cabra",
    paragraphs: [
      "Nuestra vida no es sólo Casa Cabra, es un mundo, y hemos ido caminando ese recorrido del camino espiritual, que nos lleva a Casa Cabra, que nos está guiando, y nos lleva a distintos conocimientos que se dan en la vida."
    ],
    images: ["https://images.unsplash.com/photo-1519782904642-4b26084a4f89?auto=format&fit=crop&q=80&w=800"], // Wood skeleton structure of the sweat lodge
    imageLayout: "right"
  },
  // Page 20: Temazcal e instrumentos
  {
    pageNumber: 20,
    layout: "full-image",
    images: ["https://images.unsplash.com/photo-1519782904642-4b26084a4f89?auto=format&fit=crop&q=80&w=1000"], // Complete black-blanket lodge with native drum/tambor
    caption: "La ruka de sudoración (Temazcal) finalizada y los tambores ceremoniales listos en el exterior"
  },
  // Page 21: Los tambores de sudoración
  {
    pageNumber: 21,
    layout: "collage",
    imageLayout: "collage-3",
    images: [
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=600", // Drum ceremony
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600", // Close drum focus
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600"  // Group sharing under shadow
    ],
    caption: "Las voces del viento y el latido de la tierra: tambores ceremoniales alrededor del domo"
  },
  // Page 22: Preparativos sagrados
  {
    pageNumber: 22,
    layout: "collage",
    imageLayout: "collage-2",
    images: [
      "https://images.unsplash.com/photo-1502481851512-e9e2529beff9?auto=format&fit=crop&q=80&w=600", // Woman arranging leaves
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=600"  // Instruments detail
    ],
    caption: "Preparación de la medicina nativa e instrumentos ancestrales sobre la manta ceremonial"
  },
  // Page 23: Rogativa y cantos
  {
    pageNumber: 23,
    layout: "collage",
    imageLayout: "collage-2",
    images: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600", // Singing around embers
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600"  // Preparing the entrance
    ],
    caption: "Intenciones sinceras: cantos colectivos y zahumerios bendiciendo las piedras sagradas"
  },
  // Page 24: Ritual Temazcal y Familia
  {
    pageNumber: 24,
    layout: "collage",
    imageLayout: "collage-3",
    images: [
      "https://images.unsplash.com/photo-1502481851512-e9e2529beff9?auto=format&fit=crop&q=80&w=600", // Gathering plants and flowers
      "https://images.unsplash.com/photo-1519782904642-4b26084a4f89?auto=format&fit=crop&q=80&w=600", // Entrance view
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600"  // Mother and baby setting flowers
    ],
    caption: "Las mujeres sostienen la ceremonia: ordenando los alimentos y resguardando a la infancia"
  },
  // Page 25: Compartir de comunidad
  {
    pageNumber: 25,
    layout: "collage",
    imageLayout: "collage-3",
    images: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600", // Lunch table outdoors
      "https://images.unsplash.com/photo-1519782904642-4b26084a4f89?auto=format&fit=crop&q=80&w=600", // Sacred drums landscape
      "https://images.unsplash.com/photo-1502481851512-e9e2529beff9?auto=format&fit=crop&q=80&w=600"  // Wildflowers on check tablecloth
    ],
    caption: "Almorzar juntos compartiendo la abundancia del agua, y mesa silvestre dispuesta para el reencuentro"
  },
  // Page 26: Autoría, Créditos y Agradecimientos
  {
    pageNumber: 26,
    layout: "credits",
    creditsBlocks: [
      {
        title: "AUTORÍA COLABORATIVA",
        content: [
          "Familia Perez Pineda",
          "Macarena Pineda, Gabriel Perez + Gabriel Concha",
          "Daniel Reyes Catalina Egaña equipo + 2023",
          "Dirección: @Casa_cabra • @temazcal.putaendo"
        ]
      },
      {
        title: "CONTEXTO",
        content: [
          "Este Foto-Libro fue desarrollado por estudiantes en el marco del curso Laboratorio Etnográfico V impartido por la carrera de Antropología de la Universidad Alberto Hurtado."
        ]
      },
      {
        title: "AGRADECIMIENTOS",
        content: [
          "Agradecemos a la Familia Perez Pineda por abrirnos las puertas de su hogar, por su hospitalidad y por sus enseñanzas en este camino de aprendizaje."
        ]
      }
    ],
    images: []
  },
  // Page 27: Back cover
  {
    pageNumber: 27,
    layout: "back-cover",
    images: ["https://images.unsplash.com/photo-1533038590840-1cde6b66b72d?auto=format&fit=crop&q=80&w=800"], // Sleeping goat or lying down Dual horns goat
    caption: "Contraportada del Catálogo"
  }
];
