export type ProcessItem = {
  id: string;
  title: string;
  summary: string;
  clientRole: string;
  deliverables: string[];
};

export const processSteps: ProcessItem[] = [
  {
    id: "discover",
    title: "Discover",
    summary:
      "Intake questionnaire to understand goals and constraints followed by a video consultation or in-person one-on-one.",
    clientRole: "Share background, assets, and success metrics. Approve the plan together.",
    deliverables: ["Project brief", "Success metrics", "Roadmap with milestones"],
  },
  {
    id: "design",
    title: "Design",
    summary:
      "Wireframes and visual directions that translate your brand into a clear, calm digital experience.",
    clientRole: "Review and provide feedback quickly so we can iterate with momentum.",
    deliverables: ["Page maps and wireframes", "Design system tokens", "High-fidelity key screens"],
  },
  {
    id: "build",
    title: "Build",
    summary:
      "Accessible, component-driven build in Next.js with clean code, animations where they count, and QA.",
    clientRole: "Provide assets, final copy, and approvals so launches stay on schedule.",
    deliverables: ["Production-ready code", "Content population", "Performance and accessibility pass"],
  },
  {
    id: "launch",
    title: "Launch & Care",
    summary:
      "Deploy, monitor, and support launch. Option to roll into a care plan for proactive improvements.",
    clientRole: "Review final checks and share launch comms. Decide on ongoing support needs.",
    deliverables: ["Launch checklist", "Training or walkthrough", "Post-launch monitoring"],
  },
];
