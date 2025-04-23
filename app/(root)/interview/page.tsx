import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/signup-actions";

export default async function InterviewPage() {
  const user = await getCurrentUser();
  return (
    <>
      <h3>Interview Generation</h3>
      {/* <Agent userName={user?.name} userId={user?.id} type="generate" /> */}
      <Agent
        userName={user?.name ?? "Guest"}
        userId={user?.id}
        type="generate"
      />
    </>
  );
}
