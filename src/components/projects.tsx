import { Link } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Building2 } from "lucide-react";
import tampinesImage from "../../photo/Tam1.JPG";

export function Projects() {
  const projects = [
    {
      title: "Capital Square Project",
      category: "Office Tower Facade",
      description: "Premium office tower facade in the heart of Singapore's CBD",
      image: "https://images.unsplash.com/photo-1696208734190-37dd63b2f37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGN1cnRhaW4lMjB3YWxsfGVufDF8fHx8MTc2NDYwMDgwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "/projects/capital-square"
    },
    {
      title: "Tampines One Shopping Mall Renovation Project",
      category: "Retail Facade",
      description: "Complete facade renovation for major retail center",
      image: tampinesImage,
      link: "/projects/tampines-one"
    },
    {
      title: "Changi Airport T5 Hangar Project",
      category: "Airport Infrastructure",
      description: "Terminal 5 hangar facade construction for Singapore's airport expansion",
      image: "https://images.unsplash.com/photo-1763963301694-3784effa96ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NjQ1NzgwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "/projects/changi-airport"
    },
    {
      title: "Link@896 Dunnearn Village Renovation",
      category: "Commercial Building",
      description: "Commercial building facade renovation",
      image: "https://images.unsplash.com/photo-1696208734190-37dd63b2f37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGN1cnRhaW4lMjB3YWxsfGVufDF8fHx8MTc2NDYwMDgwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      link: "/projects/dunnearn-village"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our expertise in building facade construction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-sm text-blue-300 mb-2">{project.category}</p>
                  <h3 className="text-2xl">{project.title}</h3>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Building2 className="w-5 h-5 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}