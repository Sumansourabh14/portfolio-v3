"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import workExperience from "@/data/workExperience.json";
import { Badge } from "../ui/badge";

export default function WorkExperience() {
  return (
    <section id="experience" className="py-8 px-4 md:px-10">
      <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
      <div className="space-y-6">
        {workExperience.map((job) => (
          <Card key={job.id} className="border-muted">
            <CardContent className="p-5 space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{job.position}</h3>
                  <a
                    href={job.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm flex items-center gap-1 hover:underline"
                  >
                    {job.organization} <ExternalLink size={14} />
                  </a>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p>{job.duration}</p>
                  <p className="italic">{job.type}</p>
                </div>
              </div>

              {job.technologies && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {job.technologies.map((tech) => (
                    <Badge variant="outline" key={tech}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}

              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
