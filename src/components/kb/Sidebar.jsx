import {
  Bot,
  BookOpen,
  Boxes,
  Briefcase,
  Cable,
  Cpu,
  FileText,
  HardDrive,
  PlaySquare,
  Shield,
  TowerControl,
  Zap,
} from "lucide-react";

const sections = [
  {
    title: "MY PROJECTS",
    items: [
      { label: "Agents", icon: Bot },
      { label: "AI Models", icon: Cpu },
      { label: "Library", icon: BookOpen },
    ],
  },
  {
    title: "ORCHESTRATOR",
    items: [
      { label: "Published", icon: Briefcase },
      { label: "Machines", icon: HardDrive },
      { label: "Queues", icon: Boxes },
      { label: "Triggers", icon: Zap },
      { label: "Jobs", icon: FileText },
      { label: "Executions", icon: PlaySquare },
      { label: "Vault", icon: Shield },
      { label: "Knowledge Base", icon: BookOpen, active: true },
      { label: "Key Store", icon: TowerControl },
    ],
  },
  {
    title: "ADMIN",
    items: [
      { label: "Tenant", icon: Briefcase },
      { label: "Integrations", icon: Cable },
    ],
  },
];

function Sidebar() {
  return (
    <aside className="w-[300px] shrink-0 border-r border-[#ECECF2] bg-[#FCFCFE] px-4 py-5">
      {sections.map((section) => (
        <div key={section.title} className="mb-7">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-[#9A9AAA]">
            {section.title}
          </p>

          <div className="space-y-1">
            {section.items.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className={`cursor-pointer flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[13px] transition ${
                    item.active
                      ? "bg-[#EEF0FF] text-[#5B54F6]"
                      : "text-[#4B4B5C] hover:bg-[#F5F6FB]"
                  }`}
                >
                  <Icon size={15} strokeWidth={1.8} />
                  <span className="font-semibold">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;