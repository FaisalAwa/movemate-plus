import { Home, Package, Wrench, Trees, Paintbrush, Grid, Piano, Sparkles, type LucideIcon } from 'lucide-react';

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: 'moving',
    icon: Home,
    title: 'Moving Services',
    shortDescription: 'Comprehensive moving solutions for homes and offices. We handle your belongings with the utmost care and professionalism.',
    fullDescription: 'Our professional moving services are designed to make your relocation as smooth and stress-free as possible. Whether you are moving locally across London or further afield, our experienced team handles every aspect of your move with care. We use specialist equipment and vehicles to ensure your belongings arrive safely at their new destination.',
    features: ['Residential moves', 'Office relocations', 'Safe transportation', 'Loading & unloading'],
    benefits: [
      'Fully insured removals team',
      'Experienced and vetted staff',
      'Modern fleet of vehicles in all sizes',
      'Competitive, transparent pricing',
      'Flexible scheduling including weekends',
      'Free no-obligation quotes',
    ],
    metaTitle: 'Professional Moving Services London | Reliant Integrated Services Ltd',
    metaDescription: 'Expert residential and office moving services in London. Safe, reliable and fully insured removals by Reliant Integrated Services Ltd. Get a free quote today.',
  },
  {
    slug: 'packing',
    icon: Package,
    title: 'Packing Services',
    shortDescription: 'Professional packing services using high-quality materials to ensure your items are protected during transit.',
    fullDescription: 'Our expert packing team uses only the highest-quality packing materials to protect your belongings during transit. From fragile glassware to large furniture, we have the skills and materials to safely pack everything. We can provide a full packing service or simply supply materials if you prefer to pack yourself.',
    features: ['Full packing service', 'Fragile item packing', 'Quality materials', 'Unpacking services'],
    benefits: [
      'Double-walled cardboard boxes',
      'Specialist wrapping for fragile items',
      'Labelled and organised boxes',
      'Eco-friendly materials available',
      'Professional unpacking service',
      'Peace of mind with every box',
    ],
    metaTitle: 'Professional Packing Services London | Reliant Integrated Services Ltd',
    metaDescription: 'Expert packing services in London using premium materials. Protect your belongings during transit with Reliant Integrated Services Ltd. Book today.',
  },
  {
    slug: 'furniture-assembly',
    icon: Wrench,
    title: 'Furniture Assembly',
    shortDescription: 'Expert dismantling and reassembly of all types of furniture. We ensure everything is perfectly set up in your new space.',
    fullDescription: 'Our skilled furniture assembly team can handle any flat-pack or self-assembly furniture quickly and efficiently. From IKEA flat-packs to complex office furniture systems, we have the tools and expertise to get everything assembled correctly. We also offer a disassembly service before your move and full reassembly at your new property.',
    features: ['IKEA assembly', 'Office furniture', 'Disassembly service', 'Reassembly'],
    benefits: [
      'All tools and equipment provided',
      'Fast and efficient assembly',
      'All brands and furniture types covered',
      'No leftover screws or parts',
      'Furniture placement included',
      'Competitive hourly rates',
    ],
    metaTitle: 'Furniture Assembly Service London | Reliant Integrated Services Ltd',
    metaDescription: 'Professional furniture assembly and disassembly in London. IKEA, office furniture and all brands covered by Reliant Integrated Services Ltd. Get a quote.',
  },
  {
    slug: 'piano-special-items',
    icon: Piano,
    title: 'Piano & Special Items',
    shortDescription: 'Specialized moving services for pianos, antiques, and other valuable or delicate items requiring extra care.',
    fullDescription: 'Moving a piano or valuable antique requires specialist knowledge and equipment. Our team is fully trained in the safe handling and transportation of pianos, fine art, antiques, and other delicate or high-value items. We use specialist lifting equipment, padded blankets, and secure transportation to ensure your precious items arrive safely.',
    features: ['Piano moving', 'Antique handling', 'Delicate items', 'Secure transport'],
    benefits: [
      'Specialist lifting and moving equipment',
      'Fully insured for high-value items',
      'Trained in handling fragile antiques',
      'Climate-controlled transport available',
      'White glove delivery service',
      'All piano types and sizes covered',
    ],
    metaTitle: 'Piano & Special Items Moving London | Reliant Integrated Services Ltd',
    metaDescription: 'Specialist piano and antique moving services in London. Safe, insured transport for your most precious items by Reliant Integrated Services Ltd.',
  },
  {
    slug: 'painting-decorating',
    icon: Paintbrush,
    title: 'Painting & Decorating',
    shortDescription: 'High-quality painting and decorating services to refresh your home or office. Professional finish guaranteed.',
    fullDescription: 'Transform your home or office with our professional painting and decorating services. Our skilled decorators deliver a flawless finish every time, using premium paints and materials. Whether you need a single room refreshed or a complete property makeover, we work efficiently with minimal disruption to your daily life.',
    features: ['Interior painting', 'Exterior painting', 'Wallpapering', 'Plastering'],
    benefits: [
      'Premium paint brands used',
      'Fully prep and protect your space',
      'Clean and tidy at all times',
      'Professional finish guaranteed',
      'Wide colour consultation available',
      'Competitive project pricing',
    ],
    metaTitle: 'Painting & Decorating Services London | Reliant Integrated Services Ltd',
    metaDescription: 'Professional painting and decorating services in London. Interior, exterior, wallpapering and plastering by Reliant Integrated Services Ltd. Free quote.',
  },
  {
    slug: 'flooring',
    icon: Grid,
    title: 'Flooring Services',
    shortDescription: 'Professional flooring installation and maintenance services for residential and commercial properties.',
    fullDescription: 'Upgrade your floors with our professional flooring installation and maintenance services. We work with all types of flooring including laminate, hardwood, vinyl, and tiles. Our experienced fitters ensure a perfect installation every time, with thorough preparation and attention to detail that makes the difference between a good floor and a great one.',
    features: ['Laminate flooring', 'Hardwood installation', 'Tiling', 'Floor repairs'],
    benefits: [
      'All flooring types covered',
      'Subfloor preparation included',
      'Precision cutting and fitting',
      'Minimal dust and disruption',
      'Underfloor heating compatible',
      'Warranty on workmanship',
    ],
    metaTitle: 'Flooring Services London | Reliant Integrated Services Ltd',
    metaDescription: 'Expert flooring installation in London. Laminate, hardwood, tiling and repairs for residential and commercial properties by Reliant Integrated Services Ltd.',
  },
  {
    slug: 'landscaping',
    icon: Trees,
    title: 'Landscaping',
    shortDescription: 'Transform your outdoor space with our expert landscaping services. From garden maintenance to complete redesigns.',
    fullDescription: 'Create the outdoor space you have always dreamed of with our comprehensive landscaping services. From regular garden maintenance to full garden redesigns, our team of skilled landscapers can transform any outdoor space. We handle everything from initial design consultation through to planting, paving, and ongoing maintenance.',
    features: ['Garden maintenance', 'Lawn care', 'Patio installation', 'Garden design'],
    benefits: [
      'Bespoke garden design service',
      'Experienced and qualified landscapers',
      'Quality plants and materials',
      'Paving, decking and fencing',
      'Seasonal maintenance plans',
      'Waste clearance included',
    ],
    metaTitle: 'Landscaping Services London | Reliant Integrated Services Ltd',
    metaDescription: 'Professional landscaping and garden services in London. Garden design, maintenance, lawn care and patio installation by Reliant Integrated Services Ltd.',
  },
  {
    slug: 'cleaning',
    icon: Sparkles,
    title: 'Cleaning',
    shortDescription: 'Professional cleaning services for residential and commercial spaces. Leave your property spotless.',
    fullDescription: 'Our professional cleaning team delivers a thorough, spotless clean for residential and commercial properties across London. Using eco-friendly, professional-grade products and equipment, we tackle everything from routine maintenance cleans to intensive deep cleans. Our end of tenancy cleaning service is especially popular with landlords and tenants alike.',
    features: ['Deep cleaning', 'End of tenancy', 'Office cleaning', 'Regular maintenance'],
    benefits: [
      'Eco-friendly cleaning products',
      'Professional-grade equipment',
      'Fully vetted and trained staff',
      'Flexible scheduling',
      'End of tenancy guarantee',
      'Same-day service available',
    ],
    metaTitle: 'Professional Cleaning Services London | Reliant Integrated Services Ltd',
    metaDescription: 'Expert cleaning services in London. Deep cleaning, end of tenancy, office and regular maintenance cleaning by Reliant Integrated Services Ltd. Book now.',
  },
];
