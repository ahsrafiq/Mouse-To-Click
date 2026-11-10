export interface ServiceDivision {
  slug: string;
  divisionNumber: string;
  title: string;
  shortTitle: string;
  tagline: string;
  headline: string;
  supportingText: string;
  description: string;
  deliverables: {
    title: string;
    description: string;
  }[];
  keyBenefits: string[];
  serviceCategory: string;
  iconName: 'HeartPulse' | 'Shield' | 'TrendingUp' | 'Headphones' | 'Monitor' | 'Database';
  accentColor: string;
}

export const serviceDivisions: ServiceDivision[] = [
  {
    slug: 'healthcare-solutions',
    divisionNumber: 'Division 01',
    title: 'Healthcare Solutions',
    shortTitle: 'Healthcare',
    tagline: 'Smarter Support for Healthcare Operations',
    headline: 'Reliable Administrative and Process Support for Healthcare Providers',
    supportingText:
      'Reliable administrative and process support to help healthcare providers focus on patient care.',
    description:
      'MouseToClick provides end-to-end healthcare business process support tailored to medical practices, specialty clinics, and healthcare networks. Our trained healthcare specialists handle critical administrative workflows, data management, and patient communication with strict confidentiality and attention to compliance.',
    deliverables: [
      {
        title: 'Medical Billing Support',
        description:
          'Structured billing assistance, charge entry, claim validation, and billing lifecycle management.',
      },
      {
        title: 'Medical Claims Processing',
        description:
          'Scrutiny of claim documentation, clearinghouse submission, and proactive denial follow-up.',
      },
      {
        title: 'Medical Appointment Scheduling',
        description:
          'Coordinated patient scheduling, reminder management, and calendar optimization across time zones.',
      },
      {
        title: 'Insurance Verification',
        description:
          'Pre-visit verification of patient insurance benefits, eligibility checks, and pre-authorization support.',
      },
      {
        title: 'Healthcare Administrative Support',
        description:
          'General practice back-office operations, correspondence, record management, and coordination.',
      },
      {
        title: 'Patient Data Management',
        description:
          'Accurate electronic health record entry, data hygiene, indexing, and confidential document archival.',
      },
    ],
    keyBenefits: [
      'Allows clinical practitioners to concentrate fully on patient care',
      'Reduces overhead costs associated with in-house practice administration',
      'Improves data accuracy across clinical records and scheduling systems',
      'Confidential and secure handling of sensitive patient information',
    ],
    serviceCategory: 'Healthcare Support',
    iconName: 'HeartPulse',
    accentColor: 'text-rose-500',
  },
  {
    slug: 'security-solutions',
    divisionNumber: 'Division 02',
    title: 'Security Solutions',
    shortTitle: 'Security',
    tagline: 'Professional Remote Security Support',
    headline: 'Remote CCTV Monitoring and Surveillance Operations',
    supportingText:
      'Remote CCTV monitoring and surveillance support designed to strengthen security operations.',
    description:
      'MouseToClick strengthens enterprise security by linking directly into your existing compatible video surveillance infrastructure. Our trained monitoring professionals conduct visual audits, detect unauthorized activities, maintain timestamped activity logs, and coordinate prompt escalation.',
    deliverables: [
      {
        title: 'Remote CCTV Monitoring',
        description:
          'Scheduled and after-hours live surveillance monitoring across existing commercial camera systems.',
      },
      {
        title: 'Live Video Surveillance',
        description:
          'Real-time proactive observation of high-risk perimeters, entry points, and storage facilities.',
      },
      {
        title: 'Security Monitoring Support',
        description:
          'Dedicated surveillance operators supporting security managers and on-site patrol teams.',
      },
      {
        title: 'Incident Detection and Reporting',
        description:
          'Immediate identification of perimeter anomalies, suspicious activity, and structured incident logging.',
      },
      {
        title: 'Remote Surveillance Operations',
        description:
          'Centralized multi-facility video observation with standardized protocols and clear escalation chains.',
      },
    ],
    keyBenefits: [
      'Works seamlessly with your existing compatible CCTV cameras',
      'Significant operational savings compared to dedicated in-house guarding',
      'Standardized incident documentation and fast contact escalation',
      'Customized monitoring schedules tailored to your business risk profile',
    ],
    serviceCategory: 'Surveillance & Monitoring',
    iconName: 'Shield',
    accentColor: 'text-blue-electric',
  },
  {
    slug: 'finance-accounting',
    divisionNumber: 'Division 03',
    title: 'Finance & Accounting',
    shortTitle: 'Finance & Accounting',
    tagline: 'Reliable Support for Your Financial Operations',
    headline: 'Organised Finance and Accounting Assistance for Modern Businesses',
    supportingText:
      'Organised finance and accounting assistance to help businesses manage everyday processes efficiently.',
    description:
      'Streamline financial operations with reliable bookkeeping, transaction recording, and reporting support. MouseToClick assists corporate finance teams and small businesses in keeping ledgers accurate, invoices processed on schedule, and books structured for periodic reviews.',
    deliverables: [
      {
        title: 'Bookkeeping Support',
        description:
          'Day-to-day general ledger maintenance, transaction categorization, and bank account reconciliations.',
      },
      {
        title: 'Accounts Payable / Receivable Assistance',
        description:
          'Vendor bill tracking, payment scheduling support, customer invoice generation, and aged receivables monitoring.',
      },
      {
        title: 'Financial Data Entry',
        description:
          'Accurate entry of receipts, expense reports, billing information, and accounting system updates.',
      },
      {
        title: 'Invoice Processing',
        description:
          'Three-way matching of purchase orders, invoices, and delivery notes with dispute flagging.',
      },
      {
        title: 'Financial Record Management',
        description:
          'Secure digital archiving of financial records, audit trail organization, and compliant documentation.',
      },
    ],
    keyBenefits: [
      'Ensures books and ledgers remain reconciled and up to date',
      'Improves cash-flow visibility with timely accounts payable and receivable tracking',
      'Reduces manual administrative load on core finance teams',
      'Strict adherence to confidentiality and information security controls',
    ],
    serviceCategory: 'Financial Operations',
    iconName: 'TrendingUp',
    accentColor: 'text-emerald-500',
  },
  {
    slug: 'customer-support',
    divisionNumber: 'Division 04',
    title: 'Customer Support & Call Center',
    shortTitle: 'Customer Support',
    tagline: 'Better Customer Experiences, Every Day',
    headline: 'Flexible Customer Support Services That Keep You Connected',
    supportingText:
      'Flexible customer support services that help businesses stay responsive and connected with their customers.',
    description:
      'Delight your customers across multiple channels with responsive, empathetic, and professional support representatives. Whether addressing incoming questions, managing live chat inquiries, or providing helpful outbound follow-ups, MouseToClick keeps your brand approachable and dependable.',
    deliverables: [
      {
        title: 'Inbound and Outbound Support',
        description:
          'Professional handling of customer inquiries, order updates, customer follow-ups, and service verification.',
      },
      {
        title: 'Email and Chat Support',
        description:
          'Rapid response email ticket resolution and interactive live website chat assistance.',
      },
      {
        title: 'Call Center Operations',
        description:
          'Structured voice contact center teams aligned with your operational scripts, SLAs, and call workflows.',
      },
      {
        title: 'Customer Service Management',
        description:
          'Customer feedback collation, escalation routing, satisfaction tracking, and issue resolution logs.',
      },
      {
        title: 'Virtual Assistance',
        description:
          'Executive and administrative client concierge, communication scheduling, and customer correspondence.',
      },
    ],
    keyBenefits: [
      'Maintains consistent response times across email, live chat, and voice',
      'Adapts easily to seasonal spikes and fluctuating enquiry volumes',
      'Enhances customer satisfaction through well-trained support talent',
      'Detailed reporting on customer query patterns and resolution metrics',
    ],
    serviceCategory: 'Customer Experience',
    iconName: 'Headphones',
    accentColor: 'text-violet-500',
  },
  {
    slug: 'it-technical-support',
    divisionNumber: 'Division 05',
    title: 'IT & Technical Support',
    shortTitle: 'IT Support',
    tagline: 'Technology and Digital Support That Moves You Forward',
    headline: 'Practical IT and Technical Operations Support for Growing Teams',
    supportingText:
      'Practical IT, technical, and digital operations support for growing businesses.',
    description:
      'Ensure uninterrupted digital workflows with practical remote IT troubleshooting, help desk assistance, and technical monitoring. MouseToClick supports your internal staff and technology infrastructure with dependable technical specialists.',
    deliverables: [
      {
        title: 'Remote IT Support',
        description:
          'Remote desktop troubleshooting, software installation support, and user workstation assistance.',
      },
      {
        title: 'Technical Troubleshooting',
        description:
          'Step-by-step issue diagnosis, hardware/software fault isolation, and resolution guidance.',
      },
      {
        title: 'Help Desk Support',
        description:
          'Centralized ticketing support, tier-1 user resolution, credential resets, and query dispatch.',
      },
      {
        title: 'Network Support',
        description:
          'Basic connectivity checks, VPN access assistance, and remote routing diagnostic support.',
      },
      {
        title: 'System Monitoring',
        description:
          'Uptime checks, alert observation, and notification escalation to engineering teams.',
      },
      {
        title: 'IT Administration',
        description:
          'User onboarding/offboarding, access directory updates, asset logging, and policy documentation.',
      },
    ],
    keyBenefits: [
      'Resolves routine technical issues quickly to minimize employee downtime',
      'Cost-effective help desk coverage without staffing a heavy in-house IT team',
      'Clear documentation of recurring system issues and root causes',
      'Reliable escalations for mission-critical infrastructure incidents',
    ],
    serviceCategory: 'Information Technology',
    iconName: 'Monitor',
    accentColor: 'text-orange-500',
  },
  {
    slug: 'digital-business-solutions',
    divisionNumber: 'Division 06',
    title: 'Digital Business Solutions',
    shortTitle: 'Digital Operations',
    tagline: 'Digital Operations and Data Support for Modern Growth',
    headline: 'Practical Digital Operations, Data Processing, and Business Support',
    supportingText:
      'Practical IT, technical, and digital operations support for growing businesses.',
    description:
      'Accelerate business efficiency with accurate data management, document workflows, and digital operations support. MouseToClick takes time-consuming operational tasks off your team’s plate so you can focus on core strategic goals.',
    deliverables: [
      {
        title: 'Data Management',
        description:
          'Data cleansing, duplicate removal, database updates, and structured record categorization.',
      },
      {
        title: 'Data Entry and Processing',
        description:
          'High-accuracy manual and automated data entry from forms, spreadsheets, and scanned documents.',
      },
      {
        title: 'Digital Operations',
        description:
          'Online catalog maintenance, CMS updates, inventory adjustments, and digital platform upkeep.',
      },
      {
        title: 'Document Management',
        description:
          'Digital indexing, PDF formatting, file system reorganization, and archive governance.',
      },
      {
        title: 'Business Process Support',
        description:
          'Repetitive workflow execution, operational checklist monitoring, and report compilation.',
      },
      {
        title: 'Administrative Assistance',
        description:
          'Research assistance, meeting coordination, spreadsheet preparation, and operational reporting.',
      },
    ],
    keyBenefits: [
      'Frees key employees from repetitive administrative and data workloads',
      'High accuracy and standardized quality checks across all datasets',
      'Scalable support models that grow seamlessly alongside your operations',
      'Secure handling of proprietary business documents and digital assets',
    ],
    serviceCategory: 'Digital Operations',
    iconName: 'Database',
    accentColor: 'text-cyan-500',
  },
];

