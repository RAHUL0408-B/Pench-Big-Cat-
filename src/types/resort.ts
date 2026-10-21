export type ApprovalStatus = "approved" | "pending" | "rejected";

export interface CubRoom {
  name: string;
  meaning: string;
  theme: string;
  isBookable: boolean;
  notes?: string;
}

export interface RoomItem {
  id: string;
  slug: string;
  name: string;
  title: string;
  category: string;
  subtitle: string;
  storyInspiration: string;
  shortDescription: string;
  fullDescription: string[];
  dimensions: string;
  occupancy: string;
  bedConfiguration: string;
  heroImage: string;
  gallery: string[];
  features: string[];
  amenities: string[];
  architecturalHighlights: string[];
  cubsTheme?: {
    litterTitle: string;
    description: string;
    rooms: CubRoom[];
  };
  approvalStatus: ApprovalStatus;
  priceNote: string;
  idealFor?: string;
  glance?: { label: string; value: string }[];
}

export interface FacilityItem {
  id: string;
  name: string;
  meaning: string;
  category: string;
  tagline: string;
  description: string[];
  hours?: string;
  locationOnProperty: string;
  image: string;
  highlights: string[];
  approvalStatus: ApprovalStatus;
}

export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  generation: number;
  territory: string;
  character: string;
  story: string[];
  associatedVilla: string;
  image: string;
  historicalNotes: string;
  approvalStatus: ApprovalStatus;
}

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: "all" | "stays" | "wildlife" | "experiences" | "property";
  aspectRatio: "landscape" | "portrait" | "square";
  alt: string;
}

export interface OfferItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  description: string;
  inclusions: string[];
  exclusions: string[];
  validity: string;
  idealFor: string;
  image: string;
  approvalStatus: ApprovalStatus;
}

export interface AttractionItem {
  id: string;
  title: string;
  category: "safari-gate" | "nature" | "cultural" | "waterbody";
  distance: string;
  driveTime: string;
  description: string;
  highlights: string[];
  officialTip?: string;
  image: string;
}
