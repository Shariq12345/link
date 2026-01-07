"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";

export default function Home() {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);

  return (
    <div className="flex flex-col gap-2 p-4">
      {projects?.map((project) => (
        <div key={project._id} className="p-2 border rounded">
          {project.name}
        </div>
      ))}
      <Button onClick={() => createProject({ name: "New Project" })}>
        Create Project
      </Button>
    </div>
  );
}
