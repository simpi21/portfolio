import { About } from "@/components/About/About";
import { Experience } from "@/components/Experience/Experience";
import { Hero } from "@/components/Hero/Hero";
import styles from "./page.module.css";

// Sections still to build — each is replaced by its real component in Milestones 5–6.
const upcoming = [
  { id: "projects", index: 3, label: "Work" },
  { id: "skills", index: 4, label: "Skills" },
  { id: "contact", index: 5, label: "Contact" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      {upcoming.map((section) => (
        <section key={section.id} id={section.id} className={`container ${styles.stub}`}>
          <p className="eyebrow">
            {"// "}
            {String(section.index).padStart(2, "0")} · {section.label.toLowerCase()}
          </p>
          <h2 className={`display ${styles.heading}`}>
            {section.label} <em className="accent">coming soon</em>.
          </h2>
        </section>
      ))}
    </>
  );
}
