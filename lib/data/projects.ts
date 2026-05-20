// TypeScript interfaces for project data
export interface TimelinePhase {
  phase: string;
  duration: string;
  description: string;
  tasks: string[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectDetail {
  overview: {
    description: string;
    duration: string;
    budget: string;
    complexity: string;
  };
  timeline: TimelinePhase[];
  gallery: GalleryImage[];
  materials: {
    category: string;
    items: string[];
  }[];
  standards: string[];
  cta: {
    title: string;
    description: string;
  };
}

export interface Project {
  slug: string;
  name: string;
  projectType: string;
  scope: string;
  suitableFor: string;
  location: string;
  keyWork: string[];
  image: string;
  detailPage: ProjectDetail;
}

// Project data
export const projects: Project[] = [
  {
    slug: "residential-new-build",
    name: "Residential New Build",
    projectType: "Capability Type: New Build",
    scope: "Site preparation, foundations, framing, exterior envelope, interior finishing, and handover planning",
    suitableFor: "Homeowners planning a detached home or lifestyle property",
    location: "New Zealand",
    keyWork: ["Foundations", "Timber framing", "Envelope coordination", "Handover checks"],
    image: "/images/modern-detached-home.jpg",
    detailPage: {
      overview: {
        description: "A residential new build project involves constructing a complete detached home from the ground up. This includes all stages from initial site preparation through to final handover, ensuring compliance with New Zealand Building Code and delivering a quality home ready for occupation.",
        duration: "12-18 months typical",
        budget: "From $650,000",
        complexity: "Medium to High"
      },
      timeline: [
        {
          phase: "Site Preparation & Foundations",
          duration: "4-6 weeks",
          description: "Initial groundwork and foundation construction to establish a solid base for the home",
          tasks: [
            "Site survey and soil testing",
            "Excavation and site leveling",
            "Foundation formwork and concrete pour",
            "Drainage and service connections"
          ]
        },
        {
          phase: "Framing & Structural Work",
          duration: "6-8 weeks",
          description: "Timber framing to create the structural skeleton of the home",
          tasks: [
            "Floor framing and decking",
            "Wall framing and bracing",
            "Roof trusses and framing",
            "Structural inspections"
          ]
        },
        {
          phase: "Exterior Envelope",
          duration: "4-6 weeks",
          description: "Weatherproofing and exterior cladding to protect the structure",
          tasks: [
            "Roof installation and flashing",
            "Window and door installation",
            "Exterior cladding and weatherboards",
            "Weathertightness membrane"
          ]
        },
        {
          phase: "Interior Fit-out",
          duration: "8-10 weeks",
          description: "Internal finishing including plumbing, electrical, and interior linings",
          tasks: [
            "Plumbing and electrical rough-in",
            "Insulation installation",
            "Gib stopping and plastering",
            "Kitchen and bathroom installation"
          ]
        },
        {
          phase: "Final Finishing",
          duration: "4-6 weeks",
          description: "Painting, flooring, and final details to complete the home",
          tasks: [
            "Interior painting",
            "Flooring installation",
            "Joinery and hardware fitting",
            "Landscaping and driveways"
          ]
        },
        {
          phase: "Final Inspection & Handover",
          duration: "1-2 weeks",
          description: "Quality checks, code compliance, and handover to homeowner",
          tasks: [
            "Building consent authority inspection",
            "Code Compliance Certificate application",
            "Final walkthrough with client",
            "Handover documentation and warranties"
          ]
        }
      ],
      gallery: [
        {
          src: "/images/modern-detached-home.jpg",
          alt: "Completed residential new build exterior",
          caption: "Modern detached home with timber cladding and landscaping"
        },
        {
          src: "/images/modern-detached-home.jpg",
          alt: "Front elevation of new build",
          caption: "Street-facing elevation with double garage"
        },
        {
          src: "/images/residential-construction-site.jpg",
          alt: "Construction in progress",
          caption: "Timber framing stage showing structural elements"
        },
        {
          src: "/images/luxury-suburban-home.jpg",
          alt: "Completed home exterior",
          caption: "Quality residential construction with attention to detail"
        },
        {
          src: "/images/modern-detached-home.jpg",
          alt: "Home exterior detail",
          caption: "Weatherboard cladding and aluminium joinery"
        },
        {
          src: "/images/residential-construction-site.jpg",
          alt: "Foundation work",
          caption: "Concrete foundation and drainage installation"
        }
      ],
      materials: [
        {
          category: "Structural",
          items: ["Engineered timber framing", "Concrete foundations", "Steel reinforcement", "Structural bracing"]
        },
        {
          category: "Exterior",
          items: ["Weatherboard cladding", "Aluminium joinery", "Colorsteel roofing", "Building wrap membrane"]
        },
        {
          category: "Interior",
          items: ["Gib plasterboard", "Insulation batts", "Timber flooring", "Quality fixtures"]
        },
        {
          category: "Services",
          items: ["Copper plumbing", "Electrical wiring", "Heat pump systems", "LED lighting"]
        }
      ],
      standards: [
        "NZ Building Code compliance",
        "E2/AS1 weathertightness standard",
        "H1 energy efficiency requirements",
        "B2 structural durability",
        "Licensed Building Practitioner oversight"
      ],
      cta: {
        title: "Ready to Start Your New Build?",
        description: "Get a detailed quote and timeline for your residential construction project."
      }
    }
  },
  {
    slug: "home-renovation",
    name: "Home Renovation",
    projectType: "Capability Type: Renovation",
    scope: "Layout improvements, room upgrades, kitchen and bathroom works, finish detailing, and staged delivery",
    suitableFor: "Owners improving comfort, functionality, and long-term value",
    location: "New Zealand",
    keyWork: ["Site protection", "Preparation", "Interior upgrades", "Finish detailing"],
    image: "/images/luxury-suburban-home.jpg",
    detailPage: {
      overview: {
        description: "Home renovation projects transform existing spaces to improve functionality, comfort, and value. This includes kitchen and bathroom upgrades, layout changes, and finish improvements while maintaining the structural integrity of the existing home.",
        duration: "8-14 weeks typical",
        budget: "From $80,000",
        complexity: "Medium"
      },
      timeline: [
        {
          phase: "Planning & Preparation",
          duration: "1-2 weeks",
          description: "Site assessment, protection, and preparation for renovation work",
          tasks: [
            "Existing condition assessment",
            "Site protection and dust barriers",
            "Temporary services setup",
            "Material ordering and scheduling"
          ]
        },
        {
          phase: "Demolition & Strip-out",
          duration: "1-2 weeks",
          description: "Careful removal of existing fixtures and finishes",
          tasks: [
            "Kitchen and bathroom removal",
            "Wall and ceiling lining removal",
            "Old flooring removal",
            "Waste disposal and site cleanup"
          ]
        },
        {
          phase: "Structural & Services",
          duration: "2-3 weeks",
          description: "Any structural changes and updated plumbing and electrical",
          tasks: [
            "Wall relocations if required",
            "Plumbing upgrades and repositioning",
            "Electrical rewiring and new circuits",
            "Building consent inspections"
          ]
        },
        {
          phase: "Installation & Fit-out",
          duration: "3-4 weeks",
          description: "New fixtures, fittings, and interior finishes",
          tasks: [
            "New kitchen installation",
            "Bathroom fixtures and tiling",
            "Gib stopping and painting",
            "Flooring installation"
          ]
        },
        {
          phase: "Final Details & Handover",
          duration: "1-2 weeks",
          description: "Finishing touches and quality checks",
          tasks: [
            "Hardware and accessory fitting",
            "Final painting touch-ups",
            "Deep cleaning",
            "Client walkthrough and handover"
          ]
        }
      ],
      gallery: [
        {
          src: "/images/luxury-suburban-home.jpg",
          alt: "Renovated home exterior",
          caption: "Refreshed exterior with updated cladding and landscaping"
        },
        {
          src: "/images/modern-detached-home.jpg",
          alt: "Modern renovation result",
          caption: "Contemporary renovation improving functionality and aesthetics"
        },
        {
          src: "/images/luxury-suburban-home.jpg",
          alt: "Interior renovation detail",
          caption: "Quality interior finishes and modern fixtures"
        },
        {
          src: "/images/residential-construction-site.jpg",
          alt: "Renovation in progress",
          caption: "Careful renovation work maintaining existing structure"
        },
        {
          src: "/images/luxury-suburban-home.jpg",
          alt: "Updated living space",
          caption: "Improved layout and natural light"
        },
        {
          src: "/images/modern-detached-home.jpg",
          alt: "Exterior refresh",
          caption: "Updated exterior materials and color scheme"
        }
      ],
      materials: [
        {
          category: "Kitchen",
          items: ["Quality cabinetry", "Stone benchtops", "Modern appliances", "Soft-close hardware"]
        },
        {
          category: "Bathroom",
          items: ["Porcelain tiles", "Quality tapware", "Frameless shower screens", "Heated towel rails"]
        },
        {
          category: "Finishes",
          items: ["Low-VOC paints", "Engineered flooring", "LED lighting", "Modern switches and outlets"]
        }
      ],
      standards: [
        "Building consent for structural changes",
        "Plumbing and electrical compliance",
        "Weathertightness for any exterior work",
        "Licensed tradesperson certification"
      ],
      cta: {
        title: "Transform Your Home",
        description: "Discuss your renovation ideas and get a tailored quote for your project."
      }
    }
  },
  {
    slug: "extension-project",
    name: "Extension Project",
    projectType: "Capability Type: Extension",
    scope: "Added living areas, bedrooms, garages, structural openings, tie-ins, and exterior completion",
    suitableFor: "Families needing more usable space without moving",
    location: "New Zealand",
    keyWork: ["Buildability review", "Structural coordination", "Weatherproofing"],
    image: "/images/rural-single-family-home.jpg",
    detailPage: {
      overview: {
        description: "Home extension projects add valuable living space to existing homes. This includes new bedrooms, living areas, or garages, with careful integration to the existing structure ensuring weathertightness and structural integrity.",
        duration: "10-16 weeks typical",
        budget: "From $120,000",
        complexity: "Medium to High"
      },
      timeline: [
        {
          phase: "Design & Consent",
          duration: "2-4 weeks",
          description: "Detailed design and building consent application",
          tasks: [
            "Architectural design and plans",
            "Structural engineering assessment",
            "Building consent application",
            "Site access and protection planning"
          ]
        },
        {
          phase: "Site Preparation & Foundations",
          duration: "2-3 weeks",
          description: "Ground preparation and foundation construction for extension",
          tasks: [
            "Site excavation and leveling",
            "Foundation formwork and concrete",
            "Drainage connections",
            "DPC and moisture barriers"
          ]
        },
        {
          phase: "Framing & Structural Tie-in",
          duration: "3-4 weeks",
          description: "Timber framing and connection to existing structure",
          tasks: [
            "Floor and wall framing",
            "Structural opening in existing wall",
            "Roof framing and tie-in",
            "Bracing and structural inspections"
          ]
        },
        {
          phase: "Exterior & Weatherproofing",
          duration: "2-3 weeks",
          description: "Roofing, cladding, and weathertightness",
          tasks: [
            "Roof installation and flashing",
            "Window and door installation",
            "Exterior cladding to match existing",
            "Weathertightness membrane and sealing"
          ]
        },
        {
          phase: "Interior Fit-out",
          duration: "3-4 weeks",
          description: "Internal finishing and services",
          tasks: [
            "Plumbing and electrical installation",
            "Insulation and Gib lining",
            "Painting and flooring",
            "Joinery and hardware"
          ]
        },
        {
          phase: "Final Inspection & Completion",
          duration: "1-2 weeks",
          description: "Quality checks and code compliance",
          tasks: [
            "Building inspector final check",
            "Code Compliance Certificate",
            "Final cleaning and touch-ups",
            "Handover to homeowner"
          ]
        }
      ],
      gallery: [
        {
          src: "/images/rural-single-family-home.jpg",
          alt: "Home extension exterior",
          caption: "Seamless extension blending with existing home"
        },
        {
          src: "/images/modern-detached-home.jpg",
          alt: "Extension construction",
          caption: "New living space addition under construction"
        },
        {
          src: "/images/residential-construction-site.jpg",
          alt: "Framing work in progress",
          caption: "Timber framing for extension showing structural tie-in"
        },
        {
          src: "/images/rural-single-family-home.jpg",
          alt: "Completed extension",
          caption: "Additional bedroom and living area completed"
        },
        {
          src: "/images/luxury-suburban-home.jpg",
          alt: "Extension detail",
          caption: "Quality materials matching existing home"
        },
        {
          src: "/images/residential-construction-site.jpg",
          alt: "Foundation work",
          caption: "Concrete foundation for extension"
        }
      ],
      materials: [
        {
          category: "Structural",
          items: ["Timber framing to match existing", "Concrete foundations", "Steel lintels and beams", "Structural bracing"]
        },
        {
          category: "Exterior",
          items: ["Cladding to match existing home", "Aluminium joinery", "Roofing materials", "Weatherproofing membranes"]
        },
        {
          category: "Interior",
          items: ["Gib plasterboard", "Insulation", "Flooring to match existing", "Paint and finishes"]
        }
      ],
      standards: [
        "Building consent for additions",
        "Structural engineering certification",
        "E2/AS1 weathertightness compliance",
        "Integration with existing building code compliance"
      ],
      cta: {
        title: "Expand Your Living Space",
        description: "Discuss your extension plans and get expert advice on adding space to your home."
      }
    }
  },
  {
    slug: "commercial-fitout",
    name: "Commercial Interior Fit-out",
    projectType: "Capability Type: Fit-out",
    scope: "Interior preparation, linings, fixtures, finishing works, trade coordination, and practical close-out",
    suitableFor: "Small commercial spaces needing tidy construction delivery",
    location: "New Zealand",
    keyWork: ["Trade sequencing", "Fit-out coordination", "Materials staging", "Quality review"],
    image: "/images/residential-construction-site.jpg",
    detailPage: {
      overview: {
        description: "Commercial interior fit-out projects transform empty commercial spaces into functional business environments. This includes partition walls, services installation, finishes, and fixtures to create ready-to-operate commercial spaces.",
        duration: "6-10 weeks typical",
        budget: "From $60,000",
        complexity: "Medium"
      },
      timeline: [
        {
          phase: "Planning & Coordination",
          duration: "1-2 weeks",
          description: "Site assessment and trade coordination planning",
          tasks: [
            "Site survey and existing services review",
            "Trade scheduling and sequencing",
            "Material procurement",
            "Access and protection planning"
          ]
        },
        {
          phase: "Services Installation",
          duration: "2-3 weeks",
          description: "Electrical, data, and HVAC installation",
          tasks: [
            "Electrical wiring and circuits",
            "Data and communications cabling",
            "HVAC ducting and units",
            "Plumbing for amenities"
          ]
        },
        {
          phase: "Partition & Ceiling Work",
          duration: "2-3 weeks",
          description: "Internal walls and suspended ceilings",
          tasks: [
            "Stud framing for partitions",
            "Gib lining and stopping",
            "Suspended ceiling grid and tiles",
            "Fire-rated construction where required"
          ]
        },
        {
          phase: "Finishes & Fixtures",
          duration: "2-3 weeks",
          description: "Painting, flooring, and fixture installation",
          tasks: [
            "Interior painting",
            "Commercial flooring installation",
            "Joinery and cabinetry",
            "Hardware and accessories"
          ]
        },
        {
          phase: "Final Fit-out & Handover",
          duration: "1-2 weeks",
          description: "Final details and practical completion",
          tasks: [
            "Signage installation",
            "Final cleaning and touch-ups",
            "Systems testing and commissioning",
            "Handover and documentation"
          ]
        }
      ],
      gallery: [
        {
          src: "/images/residential-construction-site.jpg",
          alt: "Commercial fit-out in progress",
          caption: "Interior construction for commercial space"
        },
        {
          src: "/images/modern-detached-home.jpg",
          alt: "Completed commercial interior",
          caption: "Professional commercial space ready for business"
        },
        {
          src: "/images/residential-construction-site.jpg",
          alt: "Partition framing",
          caption: "Stud framing for office partitions"
        },
        {
          src: "/images/luxury-suburban-home.jpg",
          alt: "Commercial finishes",
          caption: "Quality commercial-grade finishes and fixtures"
        },
        {
          src: "/images/residential-construction-site.jpg",
          alt: "Services installation",
          caption: "Electrical and data cabling installation"
        },
        {
          src: "/images/modern-detached-home.jpg",
          alt: "Completed fit-out",
          caption: "Functional commercial space with modern finishes"
        }
      ],
      materials: [
        {
          category: "Partitions",
          items: ["Steel stud framing", "Gib plasterboard", "Fire-rated board where required", "Acoustic insulation"]
        },
        {
          category: "Finishes",
          items: ["Commercial-grade paint", "Vinyl or carpet flooring", "Suspended ceiling tiles", "Commercial lighting"]
        },
        {
          category: "Services",
          items: ["Commercial electrical fittings", "Data and communications", "HVAC systems", "Fire and safety systems"]
        }
      ],
      standards: [
        "Commercial building code compliance",
        "Fire safety requirements",
        "Accessibility standards",
        "Electrical and data certification"
      ],
      cta: {
        title: "Fit Out Your Commercial Space",
        description: "Get a quote for your commercial interior fit-out project."
      }
    }
  }
];

// Helper functions
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug);
}
