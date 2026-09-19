export interface ServiceItem {
  id: string;
  number: number;
  title: string;
  tagline: string;
  category: 'Security' | 'Facility' | 'Manpower' | 'Specialized';
  iconName: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  keyDeliverables: string[];
  sectorsSuited: string[];
  complianceStandards: string[];
  personnelProfiles: string[];
}

export interface SectorItem {
  title: string;
  category: 'Government' | 'Private';
  description: string;
  examples: string[];
  icon: string;
  highlight: string;
}

export interface PillarItem {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  accentColor: string;
}

export interface ClientItem {
  id: string;
  name: string;
  shortName: string;
  category: 'Defense' | 'Armed Forces' | 'R&D / DGQA' | 'Ordnance';
  location: string;
  badgeCode: string;
  badgeType: 'army' | 'navy' | 'airforce' | 'drdo' | 'ordnance' | 'dgqa' | 'command';
  scope: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export type Language = 'en' | 'hi';

export interface QuoteRequest {
  serviceId: string;
  sector: string;
  headcount: number;
  shiftModel: '8 Hours' | '12 Hours' | '24/7 Rotational' | 'Custom Project';
  location: string;
  contactName: string;
  organizationName: string;
  phone: string;
  email: string;
  notes: string;
}
