import { ServiceItem } from '../types';
import securityGuardImage from '../assets/images/security-guard-office-outdoor.jpg';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'security-services',
    number: 5,
    title: 'Security Services',
    tagline: 'Vigilant, PSARA-Compliant Manned Guarding & Surveillance',
    category: 'Security',
    iconName: 'ShieldCheck',
    image: securityGuardImage,
    shortDescription: 'Trained, uniformed security guards, armed officers, perimeter security, and electronic surveillance for industrial, corporate, and government installations.',
    fullDescription: 'CITYTEC Security Services delivers comprehensive manned guarding and physical security frameworks. Our security personnel undergo strict police verification, background validation, and rigorous drills in crisis management, access control, emergency response protocol, and VIP escorting. We maintain a 24/7 central operational control desk to support quick-response deployments across Pune and Maharashtra.',
    keyDeliverables: [
      'Static & Patrol Guarding (Armed / Unarmed)',
      'Gatehouse & Visitor Management Systems',
      'Perimeter Protection & CCTV Video Monitoring',
      'Emergency Response & Evacuation Protocols',
      'Daily Digital Occurrence Logging & Threat Audits'
    ],
    sectorsSuited: ['Corporate IT Parks', 'Government Administrative Hubs', 'Industrial Estates & Warehouses', 'Financial Institutions & Banks'],
    complianceStandards: ['PSARA Registered & Aligned', 'Police Verification on File', 'Emergency Response & First-Aid Trained', 'ISO 9001:2015 Operating Framework'],
    personnelProfiles: ['Security Officers', 'Head Guards', 'Armed Escorts', 'Female Security Guards', 'Control Room Operators']
  },
  {
    id: 'manpower-outsourcing-hiring',
    number: 1,
    title: 'Manpower Outsourcing (Hiring) Services',
    tagline: 'End-to-End Talent Acquisition & Statutory Payroll Staffing',
    category: 'Manpower',
    iconName: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Strategic talent recruitment, contract staffing, and workforce deployment reducing client overhead while ensuring 100% legal compliance.',
    fullDescription: 'Our hiring services simplify complex enterprise scaling. We manage candidate sourcing, technical and behavioral screening, document verification, biometric onboarding, and complete statutory payroll administration. Businesses eliminate hiring latency and legal liabilities while acquiring mission-ready talent.',
    keyDeliverables: [
      'Rapid Bulk Hiring & Talent Pooling',
      'Comprehensive Background & Document Verification',
      'Full Statutory Compliance (EPF, ESIC, Gratuity, PT)',
      'Digital Attendance & Shift Scheduling Management',
      'Replacement Guarantees within Contracted SLA'
    ],
    sectorsSuited: ['IT & Tech Enterprises', 'Government Undertakings & PSUs', 'Manufacturing & Assembly Plants', 'Logistics & Supply Chain Hubs'],
    complianceStandards: ['Contract Labour (R&A) Act Compliant', 'EPF & ESIC Real-Time Filings', 'Wage Code Adherence', 'Zero Non-Compliance Audit Record'],
    personnelProfiles: ['Recruitment Specialists', 'Contract Staff', 'Shift Supervisors', 'Administrative Executives']
  },
  {
    id: 'housekeeping-services',
    number: 2,
    title: 'Housekeeping Services',
    tagline: 'Institutional & Mechanized Facility Hygiene Solutions',
    category: 'Facility',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Industrial-grade deep cleaning, mechanized scrubbing, high-traffic sanitization, and corporate hygiene management with eco-safe chemicals.',
    fullDescription: 'CITYTEC Housekeeping Services sets the benchmark for immaculate facility hygiene. Using industrial machinery—including single-disc scrubbers, high-pressure washers, and HEPA-filtered extraction units—our trained crews maintain sparkling workspaces, sanitary restrooms, executive suites, and large-format commercial complexes.',
    keyDeliverables: [
      'Daily Routine Cleaning & High-Traffic Janitorial Support',
      'Mechanized Floor Scrubbing, Buffing & Marble Polishing',
      'Façade & High-Level Window Glass Cleaning',
      'Washroom Hygiene Automation & Sanitizer Dispenser Upkeep',
      'Eco-Friendly Green Cleaning Chemicals (Taski / Diversey Standard)'
    ],
    sectorsSuited: ['Corporate Headquarters', 'Commercial Malls & Retail Hubs', 'Hospitals & Diagnostic Centers', 'Educational Campuses'],
    complianceStandards: ['Green Chemical Safety Protocols (MSDS Compliant)', 'Colour-Coded Microfiber Practices', 'PPE Mandatory Gear', 'Scheduled Quality Scorecards'],
    personnelProfiles: ['Housekeeping Executives', 'Floor Supervisors', 'Mechanized Machine Operators', 'Janitorial Staff']
  },
  {
    id: 'sanitization-hospitals',
    number: 6,
    title: 'Sanitization Services at Hospitals',
    tagline: 'Sterile Infection-Control Protocols for Healthcare Facilities',
    category: 'Specialized',
    iconName: 'Cross',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Medical-grade terminal disinfection, ICU and OT sterilization, biomedical waste handling, and healthcare infection prevention.',
    fullDescription: 'Healthcare sanitation demands zero error. CITYTEC’s hospital sanitization team is trained in airborne pathogen containment, terminal cleaning of operating theaters, intensive care units, and patient wards. We deploy hospital-grade sporicidal disinfectants and strictly comply with biomedical waste management guidelines.',
    keyDeliverables: [
      'OT, ICU & Isolation Ward Disinfection Protocols',
      'Bio-Medical Waste Segregation at Source (BMW Rules)',
      'Touchpoint Sterilization & Fogging Services',
      'Anti-Microbial Floor & Wall Sanative Treatments',
      'Infection Control Committee (ICC) Coordinated Logs'
    ],
    sectorsSuited: ['Multi-Specialty Hospitals', 'Diagnostic Imaging Laboratories', 'Pharma Cleanrooms', 'Trauma & Dialysis Centers'],
    complianceStandards: ['Bio-Medical Waste Management Rules 2016', 'Hospital Infection Control Protocols Aligned', 'Hospital-Grade Disinfectant Approvals', 'Hepatitis B Vaccinated Crews'],
    personnelProfiles: ['Healthcare Sanitation Specialists', 'Biomedical Waste Handlers', 'Clinical Orderlies', 'Hygiene Technicians']
  },
  {
    id: 'garden-maintenance-development',
    number: 3,
    title: 'Maintenance & Development of Garden',
    tagline: 'Sustainable Corporate Horticulture & Landscape Architecture',
    category: 'Facility',
    iconName: 'Trees',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Professional landscape engineering, automated irrigation maintenance, turf manicuring, and indoor vertical greening for corporate campuses.',
    fullDescription: 'Green spaces dramatically improve corporate aesthetics, environmental compliance, and workplace wellness. Our experienced horticulturists and gardeners provide end-to-end landscape development, seasonal lawn manicuring, tree pruning, soil nourishment, pest control, and interior potted plant maintenance.',
    keyDeliverables: [
      'Landscape Design, Plantation & Grass Turf Installation',
      'Automated Drip & Sprinkler System Maintenance',
      'Organic Pest Management, Mulching & Fertilization',
      'Tree Pruning, Shrub Shaping & Hedge Sculpting',
      'Indoor Air-Purifying Plant Rotation & Care'
    ],
    sectorsSuited: ['Corporate IT Campuses', 'Gated Residential Townships', 'Government Parks & Guest Houses', 'Luxury Hospitality Properties'],
    complianceStandards: ['Eco-Horticulture Guidelines', 'Water-Conservation Drip Compliance', 'Organic Soil Enrichers Only', 'Safe Agronomical Pruning Certs'],
    personnelProfiles: ['Head Horticulturist', 'Landscape Supervisors', 'Trained Gardeners (Malis)', 'Irrigation Technicians']
  },
  {
    id: 'conservancy-office-helpers',
    number: 4,
    title: 'Conservancy Staff and Office Helpers',
    tagline: 'Seamless Internal Operations, Pantry & Administrative Assistance',
    category: 'Facility',
    iconName: 'Coffee',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Dependable office boys, pantry assistants, messenger staff, and documentation helpers maintaining fluid workplace productivity.',
    fullDescription: 'Keep your workplace operating seamlessly. CITYTEC supplies polite, background-screened, and articulate office helpers, pantry staff, and conservancy personnel. From executive board meeting beverage services to internal courier dispatch and reprographic tasks, our team ensures reliable daily workplace coordination.',
    keyDeliverables: [
      'Corporate Pantry Management & Executive Hospitality',
      'Internal Mail, File Courier & Dispatch Coordination',
      'Meeting Room Preparation & Audio-Visual Setup Support',
      'Office Errand Fulfillment & Stationery Distribution',
      'Courteous, Groomed, and Disciplinary Trained Helpers'
    ],
    sectorsSuited: ['Corporate Law Firms & MNCs', 'Government Ministries & Collectorates', 'Banking Head Offices', 'Architectural & Tech Studios'],
    complianceStandards: ['Comprehensive Identity & Address Verification', 'Hospitality & Hygiene Protocol Trained', 'Corporate Code of Conduct Adherence', 'EPF / ESI Mandatory Enrolled'],
    personnelProfiles: ['Office Peons & Assistants', 'Pantry Stewards', 'Mailroom Dispatchers', 'Floor Runners']
  },
  {
    id: 'skilled-semi-unskilled-manpower',
    number: 7,
    title: 'Skilled, Semi-Skilled & Unskilled Manpower',
    tagline: 'Engineered Workforce Supply for Manufacturing, Utilities & Logistics',
    category: 'Manpower',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Certified electricians, HVAC operators, plumbers, machine operators, warehouse pickers, and general physical manpower deployed on demand.',
    fullDescription: 'Industrial production and infrastructure management hinge on reliable labor pipelines. CITYTEC supplies graded manpower across skilled (electricians, mechanical fitters, HVAC techs), semi-skilled (assembly workers, material handlers), and unskilled tiers (loading/unloading, packaging, yard cleaning).',
    keyDeliverables: [
      'Industrial Electricians & MEP Maintenance Technicians',
      'Factory Line Machine Operators & Material Handlers',
      'Warehouse Staging, Forklift Helpers & Packaging Staff',
      'On-Demand Surge Staffing for Turnarounds & Shutdowns',
      'Safety Induction & Factory Act Compliance'
    ],
    sectorsSuited: ['Automotive & Engineering Plants', 'E-Commerce Logistics Hubs', 'Infrastructure & Construction Sites', 'Government Public Works Departments'],
    complianceStandards: ['Factory Act & Safety Protocol Compliance', 'Mandatory PPE Provision (Hard Hats, Safety Boots)', 'ESI / EPF Statutory Protection', 'Trade Skill Assessments Prior to Deployment'],
    personnelProfiles: ['MEP Technicians', 'Machine Operators', 'Warehouse Handlers', 'General Labor Force']
  },
  {
    id: 'human-outsourcing-services',
    number: 8,
    title: 'Human Outsourcing Services',
    tagline: 'Custom Flexible Workforce Models & Enterprise Managed Labor',
    category: 'Manpower',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Comprehensive workforce management, outcome-based service contracts, liability containment, and scalable operational support.',
    fullDescription: 'Our Human Outsourcing Services empower organizations to transfer non-core business activities to seasoned specialists. We take complete ownership of manpower planning, roster optimization, statutory compliances, performance monitoring, and labor dispute insulation, giving your executive team complete operational peace of mind.',
    keyDeliverables: [
      'Turnkey Manpower Contract Management',
      'Staffing Scalability (Rapid Ramp-Up / Ramp-Down)',
      'Single Point of Contact (Dedicated Account Director)',
      'Statutory & Legal Indemnity Framework',
      'Detailed Monthly SLA & Productivity Reports'
    ],
    sectorsSuited: ['Government PSUs & Tendering Entities', 'Multinational Corporations', 'Large Retail Chains', 'Educational & Healthcare Consortia'],
    complianceStandards: ['Central & State Labour Regulations', 'Strict ISO Quality Management Auditing', 'Comprehensive Insurance Coverage', 'Transparent Digital Billing'],
    personnelProfiles: ['Operations Managers', 'Field Supervisors', 'Contract Administrators', 'Compliance Officers']
  }
];
