import { Id } from "@/convex/_generated/dataModel";
import { ProjectIdView } from "@/src/features/projects/components/project-id-view";

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ projectId: Id<"projects"> }>;
}) => {
  const { projectId } = await params;
  return <ProjectIdView projectId={projectId} />;
};

export default ProjectPage;
