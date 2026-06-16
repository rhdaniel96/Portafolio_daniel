export interface ArchiveImage {
  id: string;
  title: string;
  src: string;
  date: string;
  description: string;
  techDetails: string; // e.g. "Fuji Pro 400H / 35mm" or "Kodak Portra 160 / 35mm"
  altitude?: string;
  location: string;
  aspectRatio: string; // e.g. "aspect-[1.5]" or "aspect-[3/4]"
  fullCaption: string;
}

export interface Photobook {
  id: string;
  title: string;
  pubInfo: string; // e.g. "Self-published, 2021"
  coverSrc: string;
  description: string;
  insideSpreads: string[]; // images or texts of spreads
  pagesCount: number;
  dimensions: string;
}

export interface Thesis {
  title: string;
  subtitle: string;
  abstract: string;
  documentBody: {
    sectionTitle: string;
    paragraphs: string[];
  }[];
}

export interface ThesisPage {
  pageNumber: number;
  section: string;
  header: string;
  paragraphs: string[];
}

