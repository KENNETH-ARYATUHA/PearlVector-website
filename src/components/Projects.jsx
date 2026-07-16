import { useEffect, useState } from "react";
import PhotoFrame from "./PhotoFrame";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/projects`)
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  if (projects.length === 0) return null;

  return (
    <section id="projects" className="bg-pearl py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald">Our Work</p>
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="text-left">
              {project.image_url && (
                <PhotoFrame src={project.image_url} alt={project.title} className="aspect-[4/3] w-full" />
              )}
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-medium text-emerald hover:underline">
                  View project &#8594;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
