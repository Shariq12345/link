import { Id } from "@/convex/_generated/dataModel";
import { ProjectLayout } from "@/src/features/projects/components/project-layout";
import React from "react";

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ projectId: Id<"projects"> }>;
}) => {
  const { projectId } = await params;
  return <ProjectLayout projectId={projectId}>{children}</ProjectLayout>;
};

export default Layout;
