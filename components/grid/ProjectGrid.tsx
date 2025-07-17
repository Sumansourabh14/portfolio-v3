import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import projects from "@/data/projects.json";
import Link from "next/link";

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-8 px-4 md:px-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300 flex flex-col py-0"
          >
            <Image
              src={project.imgSrc}
              alt={project.alt}
              width={500}
              height={300}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <CardContent className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {project.projectName}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 text-xs text-muted-foreground">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted px-2 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-between text-sm font-medium">
                <Link
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Live
                </Link>
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:underline"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
