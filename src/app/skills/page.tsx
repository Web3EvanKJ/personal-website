import SkillList from "@/components/SkillList";
import { backendSkills, frontendSkills, toolSkills } from "@/lib/skills";

export default function SkillsPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 border-b-1 py-3">Skills</h1>
      <h2 className="text-2xl mb-4">Front End</h2>
      <SkillList skills={frontendSkills} />
      <h2 className="text-2xl mb-4">Back End</h2>
      <SkillList skills={backendSkills} />
      <h2 className="text-2xl mb-4">Tools</h2>
      <SkillList skills={toolSkills} />
    </section>
  );
}
