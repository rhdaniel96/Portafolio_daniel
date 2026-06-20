import { ArchiveImage, Photobook } from "./types";

export const ARCHIVE_IMAGES: ArchiveImage[] = [
  {
    id: "001",
    title: "Atardecer en Puerto Saavedra",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFIDuD9LbE7DSQnrldSbdzJlA_11RxwIUsIrGcE0TmXLN2PPzvzazjJehYQLwZgwQzL966OAGWhcZ8oZfP7Xh1ck-R2K1WJgIq1h7qJXJXp0xC8iZBK1tQy1QwSFBxrQlRp-PM9utmnaqSp0SV5VUaxmKWpGGTiBZeW-lPn7vptw_OVYLSS4WmhWmIVxpLFxTlwPeL95i9YFd9o557lBngTrdxx373kAu6HwO029wJ12S6WduEAAc1whDkumn_v_B6g3HRbD-aap8",
    date: "2023",
    description: "Atardecer dramático sobre las aguas mansas de la cuenca del Budi. Un registro de nubes bajas y contrastes intensos que marcan la geografía de Hualpín.",
    techDetails: "Canon T7 / 50mm",
    location: "Costanera de Puerto Saavedra",
    aspectRatio: "aspect-[2/1]",
    fullCaption: "Un momento de quietud profunda donde las texturas del cielo se reflejan en la superficie del agua mansa, revelando la inmensidad del territorio lafkenche."
  },
  {
    id: "002",
    title: "Arando los Cerros",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA85ueElWXGQwi0f5ndoE3XADaBEQeLBk1Eb5Vsp9-ELePy0qpu8s9RbTGcnLKyrpa-jbJ0OeEosh0oHoPsE76JijXirUzFNo52mLQhGj0uiQcL1Un4dKn1HHNI1hpl0v-v2kJrx28lTd3n5BLsloZM7eVhXpv87uX65R-8OznHOd8NeiWpzeOd1HakFEBfz8bPvSCYS8B_H4aoXYr8PfziyoAqa48mS4I8YABqnsC8IsxVej1Dsn8TExF9xMVrALXoVarZhbLgIkY",
    date: "2022",
    description: "Labranza de la tierra mediante tracción animal en las lomas empinadas vecinas al humedal del Budi.",
    techDetails: "Canon T7 / 50mm",
    location: "El Alma, Budi",
    aspectRatio: "aspect-[1.5]",
    fullCaption: "El arado tradicional como una práctica viva de interrelación con el suelo. Una coreografía de lentitud y respeto cultivado durante generaciones."
  },
  {
    id: "003",
    title: "Orilla del Lago",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwxVikR5WccWp0CFsPvgCNPqbLOUwk6VTqBrUu9yXaUfhQV6G8wztXNfgfUxk0Bo8hGFvVnUQqvlC7PXdMgB6rAaCC_YSb1vsBF8LOggqeVom5sTL-WV4RGLZ0EexKzZL6t_NuYiBBwkG-a4b9hDOFWx7L9YWvuAUi2lrDeVChX2cgE1CK5mhGItNfrneuiLkSjusRNjmE9geLhmpnjCvPx5Gwk3-aQ_K0G-gnXyO7j-KWR8LHwN1SLG9ScpJL-tZhGBC0G9U7sCY",
    date: "2023",
    description: "Juncos perennes meciéndose en las riberas arenosas bajo los cielos cargados de nubes invernales.",
    techDetails: "Canon T7 / 50mm",
    location: "Lago Budi, Comuna de Saavedra",
    aspectRatio: "aspect-[1.5]",
    fullCaption: "Los límites húmedos del lof. El junco es material primordial de cestería y a la vez protector del hábitat natural de aves nativas."
  },
  {
    id: "004",
    title: "Lago Budi",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZrbtyXScZY-N42tAmMB0sH6mBC28OyGCejYJa59x8xQ36iw5BycuNLWcsTgL-4Km1KPNUpVsQaE1ObNwojUMD-p52OHE35fugRKifi4RJJsQ_52zhvI-aHTN_7yfeeeYPQAvEuExrquU9-5s0dFwVUdY5UgDk9vQ60Wa-vD_KEu9t58ZJchJFFQDvGMptDpPdPtV-sgaCR8_xdbGwUXmpb-v0Quf21M43ENS1n00afShzKNBUPl-z7ZVPXmsXejaaazPU5MTD77U",
    date: "2024",
    description: "Pequeñas islas y formaciones boscosas nativas que rodean los brazos laberínticos del Lago Budi.",
    techDetails: "Canon T7 / 50mm",
    location: "Puerto Saavedra, Región de la Araucanía",
    aspectRatio: "aspect-[2/1]",
    fullCaption: "La mirada suspendida sobre el relieve geográfico. Los árboles nativos vigilan el reflujo del agua, tejiendo la red del Itrofill Mogen."
  }
];

export const PHOTOBOOKS_DATA: Photobook[] = [
  {
    id: "casa-cabra",
    title: "Casa Cabra",
    pubInfo: "Laboratorio Etnográfico V, 2023",
    coverSrc: "https://www.dropbox.com/scl/fi/2m5dg2d68xbtg9lnfw8x2/Captura-de-pantalla-2026-06-15-a-la-s-1.21.06-a.m..png?rlkey=tfqsdssk1fdt60k0er2ah90v2&st=wwqzb7hx&raw=1",
    description: "Este Foto-Libro documenta la vida, saberes tradicionales y el camino espiritual de la Familia Perez Pineda en Putaendo (Valle de Aconcagua). Desarrollado por estudiantes en el marco del curso Laboratorio Etnográfico V por la carrera de Antropología de la Universidad Alberto Hurtado.",
    insideSpreads: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=600"
    ],
    pagesCount: 27,
    dimensions: "21 x 21 cm"
  }
];
