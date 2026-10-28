
import { ArchiveImage, Photobook } from "./types";

export const ARCHIVE_IMAGES: ArchiveImage[] = [
  {
    id: "001",
    title: "Atardecer en Puerto Saavedra",
    src: "/images/archivo-fotografico/atardecer.JPG",
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
    src: "/images/archivo-fotografico/Arado.JPG",
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
    src: "/images/archivo-fotografico/orilla_lago.JPG",
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
    src: "/images/archivo-fotografico/lago_budi.JPG",
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
    coverSrc: "/images/fotolibros/Portada_casa_cabra.png",
    description: "Este Foto-Libro documenta la vida, saberes tradicionales y el camino espiritual de la Familia Perez Pineda en Putaendo (Valle de Aconcagua). Desarrollado por estudiantes en el marco del curso Laboratorio Etnográfico V por la carrera de Antropología de la Universidad Alberto Hurtado.",
    insideSpreads: [],
    pagesCount: 27,
    dimensions: "21 x 21 cm"
  }
];
