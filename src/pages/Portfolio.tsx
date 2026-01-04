import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import projectAlMahtaj from "@/assets/project-al-mahtaj.jpg";
import projectAlMahtaj2 from "@/assets/project-al-mahtaj-2.jpg";
import projectAleTrigo1 from "@/assets/project-ale-trigo-1.jpg";
import projectAleTrigo2 from "@/assets/project-ale-trigo-2.jpg";
import projectAleTrigo3 from "@/assets/project-ale-trigo-3.jpg";
import projectAleTrigo4 from "@/assets/project-ale-trigo-4.jpg";
import projectAleTrigo5 from "@/assets/project-ale-trigo-5.jpg";
import projectAleTrigo6 from "@/assets/project-ale-trigo-6.jpg";
import projectBaithAlAman1 from "@/assets/project-baith-al-aman-1.jpg";
import projectBaithAlAman2 from "@/assets/project-baith-al-aman-2.jpg";
import projectBaithAlAman3 from "@/assets/project-baith-al-aman-3.jpg";
import projectBaithAlAman4 from "@/assets/project-baith-al-aman-4.jpg";
import projectBaithAlAman5 from "@/assets/project-baith-al-aman-5.jpg";

import projectBaithAlZuhur1 from "@/assets/project-baith-al-zuhur-1.jpg";
import projectBaithAlZuhur2 from "@/assets/project-baith-al-zuhur-2.jpg";
import projectBaithAlZuhur3 from "@/assets/project-baith-al-zuhur-3.jpg";
import projectBaithAlZuhur4 from "@/assets/project-baith-al-zuhur-4.jpg";
import projectBaithAlZuhur5 from "@/assets/project-baith-al-zuhur-5.jpg";
import projectBaithAlZuhur6 from "@/assets/project-baith-al-zuhur-6.jpg";
import projectBaithAlZuhur7 from "@/assets/project-baith-al-zuhur-7.jpg";
import projectBaithAlZuhur8 from "@/assets/project-baith-al-zuhur-8.jpg";
import projectBaithAlZuhur9 from "@/assets/project-baith-al-zuhur-9.jpg";

// New Al Mehtab Images
import projectAlMehtab1 from "@/assets/project-al-mehtab-1.jpg";
import projectAlMehtab2 from "@/assets/project-al-mehtab-2.jpg";
import projectAlMehtab3 from "@/assets/project-al-mehtab-3.jpg";
import projectAlMehtab4 from "@/assets/project-al-mehtab-4.jpg";
import projectAlMehtab5 from "@/assets/project-al-mehtab-5.jpg";
import projectJabalResidence1 from "@/assets/project-jabal-residence-1.jpg";
import projectJabalResidence2 from "@/assets/project-jabal-residence-2.jpg";
import projectJabalResidence3 from "@/assets/project-jabal-residence-3.jpg";
import projectJabalResidence4 from "@/assets/project-jabal-residence-4.jpg";

import projectJannahView1 from "@/assets/project-jannah-view-1.jpg";
import projectJannahView2 from "@/assets/project-jannah-view-2.jpg";
import projectJannahView3 from "@/assets/project-jannah-view-3.jpg";
import projectJannahView4 from "@/assets/project-jannah-view-4.jpg";
import projectJannahView5 from "@/assets/project-jannah-view-5.jpg";

import projectBedroomSanctuary1 from "@/assets/project-bedroom-sanctuary-1.jpeg";
import projectBedroomSanctuary2 from "@/assets/project-bedroom-sanctuary-2.jpeg";
import projectBedroomSanctuary3 from "@/assets/project-bedroom-sanctuary-3.jpeg";
import projectBedroomSanctuary4 from "@/assets/project-bedroom-sanctuary-4.jpeg";
import projectBedroomSanctuary5 from "@/assets/project-bedroom-sanctuary-5.jpeg";
import projectBedroomSanctuary6 from "@/assets/project-bedroom-sanctuary-6.jpeg";
import projectBedroomSanctuary7 from "@/assets/project-bedroom-sanctuary-7.jpeg";
import projectBedroomSanctuary8 from "@/assets/project-bedroom-sanctuary-8.jpeg";
import projectBedroomSanctuary9 from "@/assets/project-bedroom-sanctuary-9.jpeg";
import projectBedroomSanctuary10 from "@/assets/project-bedroom-sanctuary-10.jpeg";
import projectBedroomSanctuary11 from "@/assets/project-bedroom-sanctuary-11.jpeg";
import projectBedroomSanctuary12 from "@/assets/project-bedroom-sanctuary-12.jpeg";

import projectLivingHall1 from "@/assets/project-living-hall-1.jpeg";
import projectLivingHall2 from "@/assets/project-living-hall-2.jpeg";
import projectLivingHall3 from "@/assets/project-living-hall-3.jpeg";
import projectLivingHall4 from "@/assets/project-living-hall-4.jpeg";
import projectLivingHall5 from "@/assets/project-living-hall-5.jpeg";
import projectLivingHall6 from "@/assets/project-living-hall-6.jpeg";

import projectSignatureKitchen1 from "@/assets/project-signature-kitchen-1.jpeg";
import projectSignatureKitchen2 from "@/assets/project-signature-kitchen-2.jpeg";
import projectSignatureKitchen3 from "@/assets/project-signature-kitchen-3.jpeg";
import projectSignatureKitchen4 from "@/assets/project-signature-kitchen-4.jpeg";
import projectSignatureKitchen5 from "@/assets/project-signature-kitchen-5.jpeg";
import projectSignatureKitchen6 from "@/assets/project-signature-kitchen-6.jpeg";
import projectSignatureKitchen7 from "@/assets/project-signature-kitchen-7.jpeg";
import projectSignatureKitchen8 from "@/assets/project-signature-kitchen-8.jpeg";
import projectSignatureKitchen9 from "@/assets/project-signature-kitchen-9.jpeg";
import projectSignatureKitchen10 from "@/assets/project-signature-kitchen-10.jpeg";

import projectKidsBedroom1 from "@/assets/project-kids-bedroom-1.jpeg";
import projectKidsBedroom2 from "@/assets/project-kids-bedroom-2.jpeg";
import projectKidsBedroom3 from "@/assets/project-kids-bedroom-3.jpeg";
import projectKidsBedroom4 from "@/assets/project-kids-bedroom-4.jpeg";
import projectKidsBedroom5 from "@/assets/project-kids-bedroom-5.jpeg";

import projectBalconyDesign1 from "@/assets/project-balcony-design-1.jpeg";
import projectBalconyDesign2 from "@/assets/project-balcony-design-2.jpeg";
import projectBalconyDesign3 from "@/assets/project-balcony-design-3.jpeg";
import projectBalconyDesign4 from "@/assets/project-balcony-design-4.jpeg";
import projectBalconyDesign5 from "@/assets/project-balcony-design-5.jpeg";
import projectBalconyDesign6 from "@/assets/project-balcony-design-6.jpeg";
import projectBalconyDesign7 from "@/assets/project-balcony-design-7.jpeg";
import projectBalconyDesign8 from "@/assets/project-balcony-design-8.jpeg";

import projectSuiteBedroom1 from "@/assets/project-suite-bedroom-1.jpeg";
import projectSuiteBedroom2 from "@/assets/project-suite-bedroom-2.jpeg";
import projectSuiteBedroom3 from "@/assets/project-suite-bedroom-3.jpeg";
import projectSuiteBedroom4 from "@/assets/project-suite-bedroom-4.jpeg";
import projectSuiteBedroom5 from "@/assets/project-suite-bedroom-5.jpeg";
import projectSuiteBedroom6 from "@/assets/project-suite-bedroom-6.jpeg";
import projectSuiteBedroom7 from "@/assets/project-suite-bedroom-7.jpeg";

import projectCompactBedroom1 from "@/assets/project-compact-bedroom-1.jpeg";
import projectCompactBedroom2 from "@/assets/project-compact-bedroom-2.jpeg";
import projectCompactBedroom3 from "@/assets/project-compact-bedroom-3.jpeg";
import projectCompactBedroom4 from "@/assets/project-compact-bedroom-4.jpeg";

import projectKidsBedroomTwo1 from "@/assets/project-kids-bedroom-two-1.jpeg";
import projectKidsBedroomTwo2 from "@/assets/project-kids-bedroom-two-2.jpeg";
import projectKidsBedroomTwo3 from "@/assets/project-kids-bedroom-two-3.jpeg";
import projectKidsBedroomTwo4 from "@/assets/project-kids-bedroom-two-4.jpeg";

import projectOfficeSpace1 from "@/assets/project-office-space-1.jpeg";
import projectOfficeSpace2 from "@/assets/project-office-space-2.jpeg";
import projectOfficeSpace3 from "@/assets/project-office-space-3.jpeg";
import projectOfficeSpace4 from "@/assets/project-office-space-4.jpeg";
import projectOfficeSpace5 from "@/assets/project-office-space-5.jpeg";
import projectOfficeSpace6 from "@/assets/project-office-space-6.jpeg";

import projectDiningHall1 from "@/assets/project-dining-hall-1.jpeg";
import projectDiningHall2 from "@/assets/project-dining-hall-2.jpeg";
import projectDiningHall3 from "@/assets/project-dining-hall-3.jpeg";
import projectDiningHall4 from "@/assets/project-dining-hall-4.jpeg";

import { ChevronLeft, ChevronRight } from "lucide-react";


interface Project {
  image: string;
  images?: string[];
  title?: string;
  location?: string;
  category?: string;
  description?: string;
  highlights?: string[];
  client?: string;
}



const projects: Project[] = [
  {
    image: projectAlMahtaj,
    images: [projectAlMahtaj, projectAlMahtaj2],
    title: "Al Mahtaj",
    location: "Perinthalmanna",
    client: "Abdul Rasheed",
    category: "Construction",
    description: "A beautifully designed residential project in Perinthalmanna.",
    highlights: ["Contemporary Facade", "Landscape Integration", "Structural Excellence"],
  },
  {
    image: projectAleTrigo4,
    images: [
      projectAleTrigo4,
      projectAleTrigo1,
      projectAleTrigo2,
      projectAleTrigo3,
      projectAleTrigo5,
      projectAleTrigo6,
    ],
    title: "Ale-trigo",
    location: "Cherukara",
    client: "Iqbal",
    category: "Construction",
    description: "Comprehensive interior design project featuring modern amenities and stylish finishes.",
    highlights: ["Bespoke Joinery", "Ambient Lighting", "Open Concept"],
  },
  {
    image: projectAlMehtab1,
    images: [
      projectAlMehtab1,
      projectAlMehtab2,
      projectAlMehtab3,
      projectAlMehtab4,
      projectAlMehtab5,
    ],
    // The Manjeri location/title remains, just the images were wrong.
    location: "Kerala",
    title: "Premium Kitchens",
    category: "Interior Design",
    description: "A contemporary kitchen space designed for efficiency and elegance.",
    highlights: ["Modern Cabinetry", "Premium Countertops", "Smart Storage"],
  },
  {
    image: projectBaithAlZuhur2, // Switching to Zuhur (which was old Aman images), kept old 'thumb=2' logic if applicable? Let's use 1 as default since we renamed cleanly. Actually, Aman used 2 because 1 was deleted. Now Zuhur has 1..9 (derived from Aman 1..9). So 1 works.
    images: [
      projectBaithAlZuhur2,
      projectBaithAlZuhur3,
      projectBaithAlZuhur4,
      projectBaithAlZuhur5,
      projectBaithAlZuhur6,
      projectBaithAlZuhur7,
      projectBaithAlZuhur8,
      projectBaithAlZuhur9,
    ],
    // Swapped details: Previously this slot was Aman (Pattambi). Now it is Zuhur (Cherukara).
    title: "Baith Al zuhur",
    location: "Cherukara",
    client: "Jafar & fasna",
    category: "Construction",
    description: "A harmonious blend of traditional charm and modern functionality.",
    highlights: ["Classic Elevation", "Integrated Courtyard", "Natural Ventilation"],
  },
  {
    image: projectJabalResidence1,
    images: [
      projectJabalResidence1,
      projectJabalResidence2,
      projectJabalResidence3,
      projectJabalResidence4,
    ],
    // Swapped details: Previously this slot was Zuhur. Now it is Jabal Residence (as per latest request).
    title: "Jabal Residence",
    location: "Cherukara",
    client: "Shafeeq",
    category: "Construction",
    description: "A commanding residential structure designed to embrace its elevated setting.",
    highlights: ["Elevated Architecture", "Panoramic Views", "Modern Arabic Fusion"],
  },
  {
    image: projectBaithAlAman1,
    images: [
      projectBaithAlAman1,
      projectBaithAlAman2,
      projectBaithAlAman3,
      projectBaithAlAman4,
      projectBaithAlAman5,
    ],
    title: "Baith Al Aman",
    location: "Pattambi",
    client: "Ameer Pulakkal",
    category: "Construction",
    description: "A serene and secure residential haven designed for modern family living.",
    highlights: ["Timeless Design", "Family-Centric Layout", "Serene Ambience"],
  },
  {
    image: projectJannahView2, // Keeping thumbnail as 2nd image as req before
    images: [
      projectJannahView2,
      projectJannahView1,
      projectJannahView3,
      projectJannahView4,
      projectJannahView5,
    ],
    title: "Jannah View", // Renamed from Jabal Residence
    location: "Mannarkad", // Changed from Cherukara
    client: "Akhil Badhusha", // Changed from Shafeeq
    category: "Construction",
    description: "An architectural masterpiece maximizing the scenic beauty of Mannarkad.",
    highlights: ["Elevated Architecture", "Panoramic Views", "Modern Arabic Fusion"],
  },
  {
    image: project2,
    title: "Modern Villa",
    location: "Kerala",
    category: "Construction",
    description: "A spacious contemporary home designed with clean lines, natural light, and durable materials.",
    highlights: ["Open-plan living", "Custom interiors", "Premium finishes"],
  },
  {
    image: project1,
    title: "Contemporary Interior",
    location: "Kerala",
    category: "Interior Design",
    description: "A perfect blend of modern architecture and Kerala's functional principles.",
    highlights: ["Balanced ventilation", "Minimalist interiors", "Smart space planning"],
  },
  {
    image: project3,
    title: "Full Home Renovation",
    location: "Kerala",
    category: "Renovation",
    description: "An outdated home transformed into a fresh, modern living space while retaining its structural essence.",
    highlights: ["Complete redesign", "New kitchen layout", "Improved lighting"],
  },
  {
    image: projectBedroomSanctuary4,
    images: [
      projectBedroomSanctuary4,
      projectBedroomSanctuary1,
      projectBedroomSanctuary2,
      projectBedroomSanctuary3,
      projectBedroomSanctuary5,
      projectBedroomSanctuary6,
    ],
    title: "Master Bedroom Suite",
    location: "Kerala",
    category: "Interior Design",
    description: "A luxurious master bedroom designed for ultimate relaxation and comfort.",
    highlights: ["Custom Wardrobes", "Ambient Lighting", "Premium Finishes"],
  },
  {
    image: projectBedroomSanctuary7,
    images: [
      projectBedroomSanctuary7,
      projectBedroomSanctuary8,
      projectBedroomSanctuary9,
      projectBedroomSanctuary10,
      projectBedroomSanctuary11,
      projectBedroomSanctuary12,
    ],
    title: "Modern Guest Bedroom",
    location: "Kerala",
    category: "Interior Design",
    description: "A welcoming and stylish guest bedroom with space-maximizing design.",
    highlights: ["Cozy Atmosphere", "Functional Layout", "Contemporary Decor"],
  },
  {
    image: projectKidsBedroom5,
    images: [
      projectKidsBedroom5,
      projectKidsBedroom1,
      projectKidsBedroom2,
      projectKidsBedroom3,
      projectKidsBedroom4,
    ],
    title: "Kids Bedroom",
    location: "Kerala",
    category: "Interior Design",
    description: "A fun and functional space designed to inspire creativity and comfort.",
    highlights: ["Playful Themes", "Smart Storage", "Safe Materials"],
  },
  {
    image: projectBalconyDesign4,
    images: [
      projectBalconyDesign4,
      projectBalconyDesign1,
      projectBalconyDesign2,
      projectBalconyDesign3,
      projectBalconyDesign5,
      projectBalconyDesign6,
      projectBalconyDesign7,
      projectBalconyDesign8,
    ],
    title: "Premium Balconies",
    location: "Kerala",
    category: "Construction",
    description: "Serene outdoor extensions that blend nature with modern architecture.",
    highlights: ["Panoramic Views", "Outdoor Seating", "Vertical Gardens"],
  },
  {
    image: projectSuiteBedroom1,
    images: [
      projectSuiteBedroom1,
      projectSuiteBedroom2,
      projectSuiteBedroom3,
      projectSuiteBedroom5,
      projectSuiteBedroom6,
      projectSuiteBedroom7,
    ],
    title: "Luxury Bedroom Suite",
    location: "Kerala",
    category: "Interior Design",
    description: "A luxurious suite bedroom combining elegant comfort with premium finishes.",
    highlights: ["Spacious Layout", "Premium Materials", "Ambient Lighting"],
  },
  {
    image: projectCompactBedroom1,
    images: [
      projectCompactBedroom1,
      projectCompactBedroom2,
      projectCompactBedroom3,
      projectCompactBedroom4,
    ],
    title: "Compact Bedroom",
    location: "Kerala",
    category: "Interior Design",
    description: "Smart and stylish bedroom solutions for compact spaces.",
    highlights: ["Space Saving", "Modern Decor", "Cozy Ambience"],
  },
  {
    image: projectKidsBedroomTwo2,
    images: [
      projectKidsBedroomTwo2,
      projectKidsBedroomTwo1,
      projectKidsBedroomTwo3,
      projectKidsBedroomTwo4,
    ],
    title: "Playful Kids Haven",
    location: "Kerala",
    category: "Interior Design",
    description: "A vibrant and safe environment tailored for children's imagination and growth.",
    highlights: ["Interactive Spaces", "Colorful Accents", "Child-Friendly Furniture"],
  },
  {
    image: projectOfficeSpace4,
    images: [
      projectOfficeSpace4,
      projectOfficeSpace1,
      projectOfficeSpace2,
      projectOfficeSpace3,
      projectOfficeSpace5,
      projectOfficeSpace6,
    ],
    title: "Modern Home Office",
    location: "Kerala",
    category: "Interior Design",
    description: "A productive and stylish home workspace designed for focus and creativity.",
    highlights: ["Custom Desk", "Ambient Lighting", "Smart Organization"],
  },
  {
    image: projectDiningHall4,
    images: [
      projectDiningHall4,
      projectDiningHall1,
      projectDiningHall2,
      projectDiningHall3,
    ],
    title: "Elegant Dining Spaces",
    location: "Kerala",
    category: "Interior Design",
    description: "Elegant dining spaces designed for family gatherings and memorable meals.",
    highlights: ["Ambient Lighting", "Custom Furniture", "Spacious Layout"],
  },
  {
    image: projectLivingHall4,
    images: [
      projectLivingHall4,
      projectLivingHall1,
      projectLivingHall2,
      projectLivingHall3,
      projectLivingHall5,
    ],
    title: "Luxury Living Halls",
    location: "Kerala",
    category: "Interior Design",
    description: "Elegant and spacious living hall designs that define the heart of the home.",
    highlights: ["Modern Aesthetics", "Open Concept", "Premium Furnishings"],
  },
  {
    image: projectSignatureKitchen4,
    images: [
      projectSignatureKitchen4,
      projectSignatureKitchen1,
      projectSignatureKitchen2,
      projectSignatureKitchen3,
      projectSignatureKitchen5,
      projectSignatureKitchen6,
      projectSignatureKitchen7,
      projectSignatureKitchen8,
      projectSignatureKitchen9,
      projectSignatureKitchen10,
    ],
    title: "Modern Modular Kitchens",
    location: "Kerala",
    category: "Renovation",
    description: "State-of-the-art kitchen designs blending functionality with stunning aesthetics.",
    highlights: ["Modular Layouts", "Smart Storage", "Elegant Finishes"],
  },
  {
    image: project5,
    title: "Landscape Garden Makeover",
    location: "Kerala",
    category: "Landscaping",
    description: "Outdoor space redesigned into a peaceful, low-maintenance garden with functional walking paths.",
    highlights: ["Layered greenery", "Outdoor lighting", "Stone detailing"],
  },
  {
    image: project6,
    title: "Premium Interior Package",
    location: "Kerala",
    category: "Interior Design",
    description: "A full interior overhaul with personalized designs for living, dining, kitchen, and bedrooms.",
    highlights: ["Modular solutions", "Custom furniture", "Luxury textures"],
  },
];


const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const hasMultipleImages = images.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="group bg-secondary rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow relative z-[60]">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={images[currentImageIndex]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {hasMultipleImages && (
          <>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />

            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-harriet-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-harriet-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-colors shadow-sm",
                    idx === currentImageIndex ? "bg-white" : "bg-white/50"
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        {project.category && (
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
            {project.category}
          </span>
        )}

        <h3 className="text-xl font-semibold mb-2 text-foreground">
          {project.title || (project.location ? `Project in ${project.location}` : "Untitled Project")}
        </h3>

        {project.location && (
          <p className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
            <MapPin className="h-4 w-4" />
            {project.location}
          </p>
        )}

        {project.client && (
          <p className="text-sm text-foreground/80 mb-2 font-medium">
            Client: {project.client}
          </p>
        )}

        {project.description && (
          <p className="text-muted-foreground text-sm mb-4">
            {project.description}
          </p>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((highlight, hIndex) => (
              <span
                key={hIndex}
                className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | HarrietBuildesign - Our Work</title>
        <meta
          name="description"
          content="Explore our portfolio of completed construction, interior design, renovation, and landscaping projects across Kerala."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section
          className="py-20 bg-cover relative min-h-[300px] flex flex-col justify-center"
          style={{
            backgroundImage: 'url("/assets/patterns/portfolio-pattern.png")',
            backgroundRepeat: 'repeat',
            backgroundSize: '400px'
          }}
        >
          {/* Overlay to ensure text readability against pattern */}
          <div className="absolute inset-0 bg-harriet-900/70 pointer-events-none" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">
                Our Portfolio
              </h1>
              <p className="text-xl text-white/90">
                A showcase of the homes, spaces, and transformations we've proudly delivered across Kerala.
              </p>
            </div>
          </div>
        </section>

        {/* Filter */}
        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 dsk:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>



        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-primary-foreground">
              Let's Build Your Dream Space
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Whether you're planning a new home or transforming an existing one, our team is here to guide you from idea to execution.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Portfolio;
