export type Category = 'outbound' | 'inbound' | 'digital';

export interface ServiceClient {
  name: string;
  industry: string;
  url: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  category: Category;
  categoryLabel: string;
  categoryIndex: number; // position within category (1-based)
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  icon: string; // emoji
  ctaLabel: string;
  ctaHref: string;
  clients?: ServiceClient[];
}

export interface ServiceCategory {
  id: Category;
  label: string;
  headline: string;
  subheadline: string;
  bgVar: string; // CSS custom property name
  accentColor: string;
  services: Service[];
}

const outbound: Service[] = [
  {
    id: 'partner-matching',
    slug: 'partner-matching',
    category: 'outbound',
    categoryLabel: 'Outbound',
    categoryIndex: 1,
    title: 'Partner Matching',
    tagline: 'The right partner in the right market.',
    description:
      'We connect Kosovar businesses with verified distributors, agents, and strategic partners abroad. Our network spans Europe, the Gulf, and North America — so you start conversations with qualified counterparts, not cold outreach.',
    bullets: [
      'Curated shortlist of pre-vetted partners',
      'Cultural & commercial compatibility screening',
      'Facilitated introductions & first-meeting support',
      'Ongoing relationship management guidance',
    ],
    icon: '🤝',
    ctaLabel: 'Find Your Partner',
    ctaHref: '/services/partner-matching',
  },
  {
    id: 'legal-compliance',
    slug: 'legal-compliance',
    category: 'outbound',
    categoryLabel: 'Outbound',
    categoryIndex: 2,
    title: 'Legal & Compliance',
    tagline: 'Expand confidently — fully covered.',
    description:
      'Navigating foreign legal systems is complex. We coordinate with local counsel in target markets to ensure your contracts, licenses, and structures comply with local regulation from day one — so you move fast without legal blind spots.',
    bullets: [
      'Target-market legal landscape briefings',
      'Contract review & cross-border structuring',
      'License & permit acquisition coordination',
      'Ongoing compliance monitoring',
    ],
    icon: '⚖️',
    ctaLabel: 'Get Legal Clarity',
    ctaHref: '/services/legal-compliance',
  },
  {
    id: 'logistics-optimization',
    slug: 'logistics-optimization',
    category: 'outbound',
    categoryLabel: 'Outbound',
    categoryIndex: 3,
    title: 'Logistics Optimization',
    tagline: 'Goods across borders, seamlessly.',
    description:
      'From freight routing to customs documentation, we streamline the physical movement of your products into new markets. We work with trusted logistics partners to cut transit times, reduce costs, and eliminate customs headaches.',
    bullets: [
      'Freight routing & carrier selection',
      'Customs documentation & HS code advisory',
      'Last-mile delivery network setup',
      'Cost benchmarking & carrier negotiation',
    ],
    icon: '🚢',
    ctaLabel: 'Optimize Your Supply Chain',
    ctaHref: '/services/logistics-optimization',
  },
  {
    id: 'franchise-development',
    slug: 'franchise-development',
    category: 'outbound',
    categoryLabel: 'Outbound',
    categoryIndex: 4,
    title: 'Franchise Development',
    tagline: 'Scale your brand across borders.',
    description:
      'If you have a proven business model, franchising is the fastest route to international scale. We structure your franchise offering, build your operations manual, and identify the right franchisees in target markets.',
    bullets: [
      'Franchise feasibility & market analysis',
      'Franchise disclosure document preparation',
      'Franchisee recruitment & screening',
      'Training & launch support',
    ],
    icon: '🏪',
    ctaLabel: 'Grow via Franchise',
    ctaHref: '/services/franchise-development',
  },
];

const inbound: Service[] = [
  {
    id: 'investment-partnership',
    slug: 'investment-partnership',
    category: 'inbound',
    categoryLabel: 'Inbound',
    categoryIndex: 1,
    title: 'Investment Partnership',
    tagline: 'Capital into the Balkans — strategic, secure, rewarding.',
    description:
      'Kosovo and the broader Balkan region offer some of Europe\'s most compelling investment fundamentals: young workforce, EU accession momentum, low operating costs, and growing consumer demand. We match foreign capital with the right local opportunity.',
    bullets: [
      'Investment opportunity pipeline & deal flow',
      'Due diligence coordination & local intelligence',
      'Co-investment structuring with local partners',
      'Post-investment operational support',
    ],
    icon: '💼',
    ctaLabel: 'Explore Investment',
    ctaHref: '/services/investment-partnership',
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    category: 'inbound',
    categoryLabel: 'Inbound',
    categoryIndex: 2,
    title: 'Real Estate',
    tagline: 'Premium property in a high-growth market.',
    description:
      'Kosovo\'s real estate market is growing fast. We guide foreign investors through property acquisition — from identifying the right assets to navigating title registration and ownership structures for non-residents.',
    bullets: [
      'Residential & commercial property sourcing',
      'Title verification & ownership due diligence',
      'Legal representation & notary coordination',
      'Property management referral network',
    ],
    icon: '🏢',
    ctaLabel: 'Find Your Property',
    ctaHref: '/services/real-estate',
  },
  {
    id: 'product-placement',
    slug: 'product-placement',
    category: 'inbound',
    categoryLabel: 'Inbound',
    categoryIndex: 3,
    title: 'Product Placement',
    tagline: 'Get your products on Balkan shelves.',
    description:
      'We introduce foreign products to Kosovo and Balkan distribution networks — retail chains, wholesalers, hospitality, and e-commerce. Our team handles positioning, pricing strategy, and distributor relationships so your product launches right.',
    bullets: [
      'Retailer & distributor identification',
      'Category & pricing strategy advisory',
      'Regulatory & labelling compliance',
      'Launch campaign coordination',
    ],
    icon: '🛍️',
    ctaLabel: 'Place Your Product',
    ctaHref: '/services/product-placement',
  },
  {
    id: 'virtual-office',
    slug: 'virtual-office',
    category: 'inbound',
    categoryLabel: 'Inbound',
    categoryIndex: 4,
    title: 'Virtual Office',
    tagline: 'A Kosovo address without the overhead.',
    description:
      'Establish a professional presence in Kosovo before you commit to a full setup. Our virtual office service gives you a business address, mail handling, phone answering, and meeting room access — everything you need to operate locally.',
    bullets: [
      'Registered business address in Pristina',
      'Mail handling & courier forwarding',
      'Local phone number & call answering',
      'On-demand meeting room access',
    ],
    icon: '🏛️',
    ctaLabel: 'Set Up Your Office',
    ctaHref: '/services/virtual-office',
  },
  {
    id: 'registration-legal',
    slug: 'registration-legal',
    category: 'inbound',
    categoryLabel: 'Inbound',
    categoryIndex: 5,
    title: 'Registration & Legal',
    tagline: 'Your Kosovo entity, set up correctly from the start.',
    description:
      'We handle the full legal setup of your Kosovo business — company registration, tax enrollment, work permit coordination, and ongoing compliance. You focus on the business; we handle the bureaucracy.',
    bullets: [
      'Company formation (LLC, JSC, branch office)',
      'Tax registration & fiscal number',
      'Work & residence permit coordination',
      'Annual compliance & reporting',
    ],
    icon: '📋',
    ctaLabel: 'Register Your Business',
    ctaHref: '/services/registration-legal',
  },
  {
    id: 'industry-experts',
    slug: 'industry-experts',
    category: 'inbound',
    categoryLabel: 'Inbound',
    categoryIndex: 6,
    title: 'Industry Experts',
    tagline: 'Local knowledge, on demand.',
    description:
      'Access our curated network of sector specialists — finance, agriculture, tech, hospitality, construction, and more. Whether you need a market assessment, a regulatory guide, or a sector-specific introduction, our experts are available on-demand.',
    bullets: [
      'Sector-specific advisory engagements',
      'Market entry & feasibility studies',
      'Regulatory & policy briefings',
      'Expert introductions & facilitated sessions',
    ],
    icon: '🧠',
    ctaLabel: 'Access Our Experts',
    ctaHref: '/services/industry-experts',
  },
];

const digital: Service[] = [
  {
    id: 'marketing',
    slug: 'marketing',
    category: 'digital',
    categoryLabel: 'Digital',
    categoryIndex: 1,
    title: 'Digital Marketing',
    tagline: 'Reach the right audience, in the right market.',
    description:
      'We build and execute digital marketing strategies tailored to international expansion — whether you\'re entering a new market or growing your share in it. From SEO and paid media to content and social, we cover the full funnel.',
    bullets: [
      'Market-specific SEO & content strategy',
      'Paid social & search campaign management',
      'Brand localisation & translation',
      'Analytics, reporting & CRO',
    ],
    icon: '📣',
    ctaLabel: 'Grow Your Reach',
    ctaHref: '/services/marketing',
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    category: 'digital',
    categoryLabel: 'Digital',
    categoryIndex: 2,
    title: 'E-Commerce',
    tagline: 'Sell across borders, digitally.',
    description:
      'We set up and scale cross-border e-commerce operations — from platform selection and store localisation to payment gateway integration and fulfilment coordination. Everything you need to sell internationally, online.',
    bullets: [
      'Platform setup (Shopify, WooCommerce, custom)',
      'Multi-currency & local payment integration',
      'Cross-border logistics & returns',
      'Marketplace onboarding (Amazon, regional)',
    ],
    icon: '🛒',
    ctaLabel: 'Launch Your Store',
    ctaHref: '/services/ecommerce',
  },
  {
    id: 'web-development',
    slug: 'web-development',
    category: 'digital',
    categoryLabel: 'Digital',
    categoryIndex: 3,
    title: 'Web Development',
    tagline: 'A digital presence that opens doors.',
    description:
      'Your website is your global storefront. We design and build fast, professional, multilingual websites that represent your brand credibly in international markets — from landing pages and corporate sites to full web applications.',
    bullets: [
      'Corporate & portfolio website design',
      'Multilingual & multi-region site architecture',
      'Performance optimisation & SEO foundation',
      'CMS integration & ongoing maintenance',
    ],
    icon: '💻',
    ctaLabel: 'Build Your Site',
    ctaHref: '/services/web-development',
    clients: [
      {
        name: 'PRONEX Real Estate',
        industry: 'Real Estate Platform',
        url: 'http://pronex-ks.com/',
        description: 'Kosovo\'s property marketplace — connecting buyers and sellers across houses, apartments, commercial spaces, and land nationwide.',
      },
      {
        name: 'LIALhc Doors & Windows',
        industry: 'Window & Door Manufacturing',
        url: 'http://lialhc.com/',
        description: 'Quality doors and windows manufacturer serving the Kosovo and regional construction market.',
      },
      {
        name: 'GAZI Shpk',
        industry: 'Window Manufacturing',
        url: 'http://gazi-rks.com/',
        description: 'Window manufacturing company producing high-quality joinery products for the Kosovar construction sector.',
      },
    ],
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'digital',
    label: 'Digital',
    headline: 'Grow Your Digital Presence',
    subheadline: 'Marketing, e-commerce, and web services that support your expansion.',
    bgVar: '--digital-bg',
    accentColor: '#84C9A0',
    services: digital,
  },
  {
    id: 'outbound',
    label: 'Outbound',
    headline: 'Take Your Business Global',
    subheadline: 'For Kosovar & Balkan companies ready to expand internationally.',
    bgVar: '--outbound-bg',
    accentColor: '#C9A84C',
    services: outbound,
  },
  {
    id: 'inbound',
    label: 'Inbound',
    headline: 'Enter the Balkan Market',
    subheadline: 'For foreign investors & companies looking to establish in Kosovo.',
    bgVar: '--inbound-bg',
    accentColor: '#7EB8D4',
    services: inbound,
  },
];

export const allServices: Service[] = [
  ...digital,
  ...outbound,
  ...inbound,
];
