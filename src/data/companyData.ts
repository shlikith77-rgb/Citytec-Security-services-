import { PillarItem, SectorItem } from '../types';

export const COMPANY_INFO = {
  legalName: 'CITYTEC SECURITY SERVICES LLP',
  shortName: 'CITYTEC',
  subtitle: 'Security Services & Integrated Facility Management LLP',
  businessType: 'Private Security, Housekeeping, Facility Management & Manpower Outsourcing',
  establishedNote: 'Serving Institutional, Government & Private Enterprise Clients Across Maharashtra',
  phone: '78418 64750',
  phoneFormatted: '+91 78418 64750',
  email: 'contact@citytecservices.com',
  procurementEmail: 'rfp@citytecservices.com',
  address: {
    shopNo: 'SHOP NO. 130, SN 46',
    building: 'JAIGANESHVISHWA',
    landmark: 'NR. KIRTI HOTEL',
    city: 'PUNE',
    state: 'MAHARASHTRA',
    country: 'INDIA',
    pincode: '411015',
    fullFormatted: 'Shop No. 130, SN 46, Jaiganeshvishwa, Nr. Kirti Hotel, Pune, Maharashtra, India – 411015'
  },
  operatingHours: '24 Hours / 7 Days Operational Command & Patrol Dispatch',
  officeHours: 'Mon – Sat: 09:30 AM – 07:00 PM IST (Emergency Line 24/7)'
};

export const CORE_PILLARS: PillarItem[] = [
  {
    title: 'Trust',
    subtitle: 'Transparent & Verified',
    description: 'Every deployment is anchored by complete statutory documentation, biometric tracking, and police-verified antecedents.',
    icon: 'ShieldCheck',
    accentColor: 'blue'
  },
  {
    title: 'Security',
    subtitle: 'Vigilant & Uncompromising',
    description: 'Military-inspired patrol discipline, rigorous gate control protocols, and rapid emergency intervention capabilities.',
    icon: 'Lock',
    accentColor: 'royal'
  },
  {
    title: 'Professionalism',
    subtitle: 'Impeccable Standards',
    description: 'Turnout inspections, strict grooming, courtesy training, and structured supervisory audits across every active shift.',
    icon: 'Award',
    accentColor: 'gold'
  },
  {
    title: 'Reliability',
    subtitle: 'Zero-Absence Continuity',
    description: 'Guaranteed standby relievers and automated roster management ensure zero guard post lapses or service interruptions.',
    icon: 'Clock',
    accentColor: 'cyan'
  },
  {
    title: 'Experience',
    subtitle: 'Field-Tested Protocols',
    description: 'Decades of collective leadership expertise handling complex government tenders, industrial plants, and healthcare campuses.',
    icon: 'TrendingUp',
    accentColor: 'sky'
  },
  {
    title: 'Quality',
    subtitle: 'Measurable Performance',
    description: 'ISO-aligned quality scoring, monthly joint SLA audits, and continuous on-site upskilling workshops.',
    icon: 'CheckCircle2',
    accentColor: 'blue'
  }
];

export const SECTORS_SERVED: SectorItem[] = [
  {
    title: 'Government & Public Sector Enterprises',
    category: 'Government',
    description: 'Fully equipped for GeM procurement, state administrative secretariats, municipal corporations, public transit hubs, and PSU campuses.',
    examples: ['Municipal Corporations & Collectorates', 'Public Sector Undertakings (PSUs)', 'Government Hospitals & Medical Colleges', 'Judicial & Administrative Complexes'],
    icon: 'Landmark',
    highlight: '100% GeM & Tender Compliant'
  },
  {
    title: 'Corporate IT & Tech Parks',
    category: 'Private',
    description: 'High-visibility security screening, access control credentials, executive pantry staffing, and deep sanitized workspace maintenance.',
    examples: ['Software MNC Campuses', 'Data Centers & Tech Parks', 'BFSI Head Offices & Trading Floors', 'Global Capability Centers (GCCs)'],
    icon: 'Building2',
    highlight: 'Modern Access & Protocol Trained'
  },
  {
    title: 'Healthcare & Hospital Networks',
    category: 'Private',
    description: 'Specialized bio-medical sanitization, ICU/OT disinfection protocols, ambulance parking management, and sensitive patient-ward orderlies.',
    examples: ['Super-Specialty Hospitals', 'Diagnostic & Pathological Labs', 'Pharmaceutical Manufacturing', 'Daycare Surgery Centers'],
    icon: 'Cross',
    highlight: 'NABH & Biomedical Waste Standard'
  },
  {
    title: 'Manufacturing & Industrial Warehouses',
    category: 'Private',
    description: 'Perimeter armed security, truck weighing & gate entry logistics, factory floor MEP technical staffing, and general assembly labor.',
    examples: ['Automotive & Engineering Hubs', 'E-Commerce Fulfillment Centers', 'Chemical & Heavy Engineering', 'Industrial Logistics Yards'],
    icon: 'Factory',
    highlight: 'Factory Act & Safety Induction'
  }
];

export const STATUTORY_CREDENTIALS = [
  { label: 'PSARA Alignment', detail: 'Private Security Agencies Regulation Act Compliant in Maharashtra' },
  { label: 'Statutory Payroll', detail: '100% EPF, ESIC, Professional Tax & Minimum Wages Act Compliance' },
  { label: 'Police Verification', detail: 'Mandatory CID / Local Police antecedent clearance for every staff' },
  { label: 'GeM Registered', detail: 'Government e-Marketplace verified vendor for institutional bids' },
  { label: 'Quality Framework', detail: 'Standard Operating Procedures aligned with ISO 9001:2015 Quality Management' },
  { label: 'Disaster Preparedness', detail: 'Fire Safety, Basic Life Support (BLS), and First-Aid Certified Supervisors' }
];

export const COMPANY_STATS = [
  { value: '100%', label: 'Statutory Compliance', subtext: 'Zero Audit Deficiencies' },
  { value: '24/7', label: 'Command Desk', subtext: 'Real-Time Rapid Dispatch' },
  { value: '8+', label: 'Core Disciplines', subtext: 'Integrated Facility Matrix' },
  { value: 'Pune, MH', label: 'Headquarters Hub', subtext: 'Jaiganeshvishwa Central Office' }
];
