import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { skills, superpower } from "@/content/skills";
import { SkillsView } from "./SkillsView";

export function Skills() {
  return (
    <section id="skills" className="container section">
      <SectionHeading index={4} label="toolbox">
        Tools I <em className="accent">love</em>.
      </SectionHeading>
      <SkillsView groups={skills} superpower={superpower} />
    </section>
  );
}
