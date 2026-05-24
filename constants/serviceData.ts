export interface ServiceHighlight {
  text: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  image: string;
  fullDescription?: string;
  highlights?: string[];
  subServices?: string[];
  icon?: string;
}

export const services: ServiceData[] = [
  {
    slug: "provision",
    title: "Provisions for Vessels & Crew",
    description: "Premium food and provisions supply for international crews",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Access to an extensive selection of premium-quality garden produce and tropical fruits sourced from reliable suppliers. Comprehensive range of chilled meat preparations including poultry selections, lamb variations, porcine products, and seafood specialties.",
    highlights: [
      "Premium-quality garden produce and tropical fruits",
      "Chilled meat preparations and seafood specialties",
      "Diverse refreshment beverages and convenience foods",
      "Sub-zero temperature storage for vegetables",
      "Bulk staple grains, legumes, and pulses",
      "Premium dairy products and alternatives",
      "Non-perishable bulk provisions"
    ],
    subServices: [
      "Fresh Produce Supply",
      "Chilled Meat Selection",
      "Beverage & Snacks",
      "Bulk Provisions",
      "Specialty Food Items"
    ]
  },
  {
    slug: "bond",
    title: "Bonded Warehouse & Alcoholic Beverages",
    description: "Duty-free and regulated inventory management for vessel crews",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Premium fermented malt beverages from renowned breweries with carbonated refreshment options and mineral-enriched hydration solutions. Single-malt Scottish distillery products for discerning palates alongside eastern European grain-based distilled spirits.",
    highlights: [
      "Premium fermented malt beverages",
      "Single-malt Scottish distillery products",
      "Eastern European grain-based distilled spirits",
      "Fermented grape-based beverages",
      "Caribbean and tropical sugar-cane derived alcohol",
      "Tobacco and nicotine merchandise",
      "Premium mineral and spring water supplies"
    ],
    subServices: [
      "Premium Beverages",
      "Spirits & Distillates",
      "Duty-Free Items",
      "Tobacco Products",
      "Water & Hydration"
    ]
  },
  {
    slug: "deck-engine",
    title: "Deck Operations & Engine Compartment Supplies",
    description: "Technical stores and protective equipment for vessel operations",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Individual protection apparatus including helmets, harnesses, and respiratory devices. Flexible tubing systems, coupling mechanisms, flow control devices, and connection components for all deck and engine operations.",
    highlights: [
      "Individual protection apparatus",
      "Flexible tubing and coupling systems",
      "Structural piping elements and connectors",
      "Emergency containment and recovery systems",
      "Specialized closure and adhesive solutions",
      "Pressurized deck sanitation equipment",
      "ISPS implementation materials"
    ],
    subServices: [
      "Safety Equipment",
      "Piping Systems",
      "Deck Maintenance",
      "Engine Protection",
      "Emergency Equipment"
    ]
  },
  {
    slug: "galley",
    title: "Galley & Accommodation Area Equipment",
    description: "Kitchen and living quarters installations for crew comfort",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Advanced thermal cooking apparatus including conventional and convection technologies. Deep-frying stations, roasting chambers, and ultra-low temperature preservation units for culinary operations.",
    highlights: [
      "Advanced thermal cooking apparatus",
      "Deep-frying stations and roasting chambers",
      "Ultra-low temperature preservation units",
      "Automated hot beverage machines",
      "Multi-function combination cooking units",
      "Biological waste management systems",
      "Professional-grade cleaning agents"
    ],
    subServices: [
      "Cooking Equipment",
      "Food Storage",
      "Beverage Systems",
      "Dining Service Items",
      "Sanitation Supplies"
    ]
  },
  {
    slug: "hardware",
    title: "Mechanical & Hardware Inventory",
    description: "Tools and equipment for maintenance operations",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615ad?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Compressed air and electrically-powered mechanical implements for technical tasks. Manual mechanical instruments for assembly and disassembly operations with precision cutting apparatus.",
    highlights: [
      "Compressed air and electric implements",
      "Manual mechanical instruments",
      "Precision cutting apparatus",
      "Graduated measuring instruments",
      "Fastening components and hardware",
      "Metal fusion joining apparatus",
      "Non-friction generating implements"
    ],
    subServices: [
      "Power Tools",
      "Hand Tools",
      "Measuring Instruments",
      "Fastening Hardware",
      "Cutting Equipment"
    ]
  },
  {
    slug: "safety",
    title: "Maritime Safety & Rescue Apparatus",
    description: "Emergency response and life-saving systems for crew protection",
    image: "https://images.unsplash.com/photo-1612141517452-9694086653f5?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Inflatable rescue vessels and personal flotation garments for crew protection. Rapid response containment solutions for hydrocarbon spill scenarios with specialized thermal protective gear.",
    highlights: [
      "Inflatable rescue vessels",
      "Personal flotation garments",
      "Spill containment solutions",
      "Thermal protective gear",
      "Visual distress communication systems",
      "Personnel transfer mechanisms",
      "Atmospheric hazard detection instruments"
    ],
    subServices: [
      "Life-Saving Equipment",
      "Fire Suppression",
      "Rescue Apparatus",
      "Distress Systems",
      "Safety Signage"
    ]
  },
  {
    slug: "ropes",
    title: "Rope, Cable & Mooring Systems",
    description: "Lifting and securing solutions for maritime operations",
    image: "https://images.unsplash.com/photo-1590496793907-4e6378e9f89a?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Natural plant-derived and synthetic cordage in varying diameters. Heavy-duty restraint cordage and tail rope configurations with galvanized metallic strand assemblies.",
    highlights: [
      "Natural plant-derived and synthetic cordage",
      "Heavy-duty restraint cordage",
      "Galvanized wire rope products",
      "Connecting components and turnbuckles",
      "Suspension systems and chain assemblies",
      "Fabric and webbing suspension slings",
      "Safety netting solutions"
    ],
    subServices: [
      "Natural Cordage",
      "Synthetic Ropes",
      "Wire Assemblies",
      "Mooring Equipment",
      "Lifting Tackles"
    ]
  },
  {
    slug: "electrical",
    title: "Electrical Systems & Components",
    description: "Power distribution and illumination solutions",
    image: "https://images.unsplash.com/photo-1558444479-c8a51052bd2d?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Illumination elements in various wattages and voltage specifications. Directional lighting apparatus including searchlight and spotlight systems with power transmission lines.",
    highlights: [
      "Illumination elements in various wattages",
      "Directional lighting apparatus",
      "Power transmission lines",
      "Switching mechanisms and distribution apparatus",
      "Connection devices and sensors",
      "Lead-acid batteries and charging apparatus",
      "Temperature regulation appliances"
    ],
    subServices: [
      "Lighting Systems",
      "Power Distribution",
      "Batteries & Charging",
      "Electrical Accessories",
      "Control Systems"
    ]
  },
  {
    slug: "chemicals",
    title: "Marine Chemistry & Treatment Solutions",
    description: "Water and fluid treatment products for vessel maintenance",
    image: "https://images.unsplash.com/photo-1532187863486-abf9d397195a?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Conditioning formulations for pressurized vessel interior surfaces. Petroleum derivative maintenance solutions and degradation inhibitors with analytical examination kits.",
    highlights: [
      "Conditioning formulations for vessels",
      "Petroleum maintenance solutions",
      "Tank interior cleansing formulations",
      "Analytical examination kits",
      "Heat exchange media conditioning",
      "Hydrocarbon dispersion agents",
      "Environmental cooling system cleansing"
    ],
    subServices: [
      "Water Treatment",
      "Tank Cleaning",
      "Maintenance Solutions",
      "Environmental Products",
      "Analytical Kits"
    ]
  },
  {
    slug: "paints",
    title: "Protective Coatings & Paint Systems",
    description: "Surface protection and aesthetic finishing for maritime vessels",
    image: "https://images.unsplash.com/photo-1562259949-e8e76833c040?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Two-component resin-based protective coatings and enhanced formulations. Plastic-based coatings alongside volatile organic compound reduction products with thermal barrier technology.",
    highlights: [
      "Two-component resin-based coatings",
      "Plastic-based protective coatings",
      "Oil-based resin systems",
      "Thermal barrier coatings",
      "Non-slip surface treatments",
      "Submerged surface protection",
      "Algae-prevention coating technologies"
    ],
    subServices: [
      "Protective Coatings",
      "Anti-Fouling Paint",
      "Specialty Finishes",
      "Application Equipment",
      "Coating Accessories"
    ]
  },
  {
    slug: "spares",
    title: "Propulsion System Components",
    description: "Engine parts and mechanical assemblies for vessel propulsion",
    image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193b?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Supplementary combustion engines and power generation units. Main rotating shaft assemblies and associated bearing structures with foundation frameworks.",
    highlights: [
      "Supplementary combustion engines",
      "Main rotating shaft assemblies",
      "Foundation structures and frameworks",
      "Upper combustion chamber components",
      "Reciprocating shaft elements",
      "Cylindrical internal components",
      "Fuel delivery pump assemblies"
    ],
    subServices: [
      "Main Engine Parts",
      "Generator Components",
      "Shaft Assemblies",
      "Fuel Systems",
      "Valve Components"
    ]
  },
  {
    slug: "charts",
    title: "Nautical Documentation & Regulatory Publications",
    description: "Maritime charts and reference materials for safe navigation",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "British Admiralty marine navigation documentation and Indian territorial maritime reference charts. Japanese hydrographic navigation publications with optimal voyage planning materials.",
    highlights: [
      "British Admiralty charts",
      "Indian territorial charts",
      "Japanese hydrographic publications",
      "Voyage planning materials",
      "Illumination beacon directories",
      "Communication signal registries",
      "International maritime standards"
    ],
    subServices: [
      "Navigation Charts",
      "Admiralty Publications",
      "Maritime Standards",
      "Logbooks & Records",
      "Training Publications"
    ]
  },
  {
    slug: "inspection",
    title: "Inspection, Testing & Certification Services",
    description: "Maintenance and compliance verification for maritime regulations",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Annual verification procedures for regulatory compliance. Cargo handling apparatus examination and operational testing with rescue vessel inspections.",
    highlights: [
      "Annual verification procedures",
      "Cargo handling apparatus testing",
      "Rescue vessel inspections",
      "Fire safety systems maintenance",
      "Compass accuracy assessment",
      "Fire suppression system examination",
      "Personnel protective equipment certification"
    ],
    subServices: [
      "Annual Inspections",
      "Safety Equipment Testing",
      "Fire System Checks",
      "Compliance Verification",
      "Certification Services"
    ]
  },
  {
    slug: "medical",
    title: "Medical Resources & Healthcare Supplies",
    description: "Comprehensive maritime medical services and equipment",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Comprehensive medical equipment packages for onboard healthcare. WHO-compliant medical supply kits specifically designed for marine environments with pharmaceutical products.",
    highlights: [
      "Comprehensive medical equipment packages",
      "WHO-compliant medical supply kits",
      "Compressed therapeutic gases",
      "Pharmaceutical products",
      "Emergency intervention devices",
      "First aid kits",
      "Surgical instruments"
    ],
    subServices: [
      "Medical Equipment",
      "First Aid Kits",
      "Pharmaceutical Supplies",
      "Emergency Devices",
      "WHO Compliance"
    ]
  },
  {
    slug: "bunkers",
    title: "Fuel & Energy Products",
    description: "Reliable bunker fuel supply at Indian ports",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Low-sulfur marine distillate fuel meeting 0.50% specifications. High-density marine fuel formulation at 3.5% concentration with ultra-low sulfur marine diesel.",
    highlights: [
      "Low-sulfur marine distillate (0.50%)",
      "High-density marine fuel (3.5%)",
      "Ultra-low sulfur marine diesel (0.10%)",
      "Environmental compliance",
      "All major Indian ports",
      "Fast delivery coordination",
      "Quality assurance"
    ],
    subServices: [
      "Marine Diesel Fuel",
      "Heavy Fuel Oil",
      "Low-Sulfur Fuel",
      "Fuel Delivery",
      "Bunker Coordination"
    ]
  },
  {
    slug: "lubricants",
    title: "Industrial Lubricants & Lubricating Products",
    description: "Engine and equipment lubrication solutions for maritime vessels",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Thick-consistency engine lubrication designed for SAE 50 TBN 25-100 applications. System-wide lubrication oil formulation with pressurized system lubrication options.",
    highlights: [
      "SAE 50 TBN 25-100 engine oil",
      "SAE 30 TBN 5-8 system oil",
      "High-viscosity ISO options",
      "Turbomachinery bearing lubrication",
      "Mechanical power transmission oil",
      "Multi-viscosity formulations",
      "Synthetic lubrication technology"
    ],
    subServices: [
      "Engine Oil",
      "System Oil",
      "Hydraulic Oil",
      "Gear Oil",
      "Synthetic Oil"
    ]
  },
  {
    slug: "other",
    title: "Additional Operational Services",
    description: "Supplementary maritime support services for vessel operations",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "Potable water delivery via dedicated transportation vessels and floating barges. Organic waste collection and environmentally responsible disposal procedures.",
    highlights: [
      "Potable water delivery",
      "Floating barge transport",
      "Organic waste collection",
      "Environmental waste disposal",
      "Specialized logistics solutions",
      "Custom vessel support",
      "Emergency services"
    ],
    subServices: [
      "Water Delivery",
      "Waste Disposal",
      "Logistics Support",
      "Emergency Response",
      "Custom Services"
    ]
  }
];

export const getServiceBySlug = (slug: string) => {
  return services.find((s) => s.slug === slug);
};
