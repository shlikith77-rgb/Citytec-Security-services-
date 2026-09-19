import { PillarItem, SectorItem } from '../types';

export const COMPANY_INFO = {
  legalName: 'CITYTEC SECURITY SERVICES LLP',
  shortName: 'CITYTEC',
  subtitle: 'Security Services & Integrated Facility Management LLP',
  businessType: 'Private Security, Housekeeping, Facility Management & Manpower Outsourcing',
  establishedNote: 'Incorporated in 2026 with Experienced Operational Staff Serving Defense, Government & Private Enterprise Clients Across Maharashtra',
  incorporationYear: 2026,
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
  operatingHours: '24 Hours / 7 Days Operational Command & Emergency Patrol Dispatch',
  directors: [
    {
      name: 'Ajay Kumar Ahir',
      role: 'Director',
      designation: 'Designated Partner & Director',
      nameHi: 'अजय कुमार अहिर',
      roleHi: 'निदेशक',
      designationHi: 'नामित भागीदार एवं निदेशक',
      responsibilities: 'Operational Command, Defense Liaison & Security Protocols',
      responsibilitiesHi: 'परिचालन कमान, रक्षा क्लाइंट समन्वय एवं सुरक्षा प्रोटोकॉल'
    },
    {
      name: 'Jai kumar yadav',
      role: 'Second Director',
      designation: 'Designated Partner & Second Director',
      nameHi: 'जय कुमार यादव',
      roleHi: 'द्वितीय निदेशक',
      designationHi: 'नामित भागीदार एवं द्वितीय निदेशक',
      responsibilities: 'Integrated Facility Logistics, Manpower Supply & Statutory Compliance',
      responsibilitiesHi: 'एकीकृत फैसिलिटी प्रबंधन, कार्यबल आपूर्ति एवं वैधानिक अनुपालन'
    }
  ],
  officeSchedule: [
    { day: 'Monday', hours: '10:00 AM – 6:00 PM' },
    { day: 'Tuesday', hours: '10:00 AM – 6:00 PM' },
    { day: 'Wednesday', hours: '10:00 AM – 6:00 PM' },
    { day: 'Thursday', hours: '10:00 AM – 6:00 PM' },
    { day: 'Friday', hours: '10:00 AM – 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM – 5:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ],
  officeHours: 'Mon – Fri: 10:00 AM – 6:00 PM | Sat: 10:00 AM – 5:00 PM | Sun: Closed (24/7 Emergency Dispatch Active)'
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
    description: 'Disciplined patrol standards, rigorous gate control protocols, and rapid emergency intervention capabilities.',
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
    subtitle: 'Field-Tested Staff',
    description: 'Experienced operational staff and seasoned supervisory personnel adept in defense, government, industrial and healthcare facilities.',
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
    examples: ['Multi-Specialty Hospitals', 'Diagnostic & Pathological Labs', 'Pharmaceutical Manufacturing', 'Daycare Surgery Centers'],
    icon: 'Cross',
    highlight: 'Biomedical Waste & Infection Control Protocol'
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
  { label: 'Disaster Preparedness', detail: 'Emergency Response, Basic Life Support (BLS), and First-Aid Trained Personnel' }
];

export const COMPANY_STATS = [
  { value: '100%', label: 'Statutory Compliance', subtext: 'Zero Audit Deficiencies' },
  { value: '24/7', label: 'Command Desk', subtext: 'Real-Time Rapid Dispatch' },
  { value: '8+', label: 'Core Disciplines', subtext: 'Integrated Facility Matrix' },
  { value: '2026', label: 'Incorporated LLP', subtext: 'Experienced Operational Staff' }
];
