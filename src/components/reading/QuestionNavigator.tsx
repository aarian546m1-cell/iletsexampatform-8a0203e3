interface SectionRange {
  start: number;
  end: number;
}

interface QuestionNavigatorProps {
  totalQuestions: number;
  answers: Record<number, string>;
  sections: SectionRange[];
  activeSection: number;
  onSectionChange: (section: number) => void;
}

export default function QuestionNavigator({ totalQuestions, answers, sections, activeSection, onSectionChange }: QuestionNavigatorProps) {
  const activeStart = sections[activeSection]?.start ?? 1;
  const activeEnd = sections[activeSection]?.end ?? totalQuestions;

  return (
    <div className="flex flex-wrap items-center gap-1">
      {sections.map((section, si) => (
        <div key={si} className="flex items-center gap-1">
          {si > 0 && <div className="w-px h-5 bg-border mx-1" />}
          <span
            className={`text-[10px] font-bold uppercase tracking-wide mr-0.5 cursor-pointer transition-colors ${
              activeSection === si ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={() => onSectionChange(si)}
          >
            P{si + 1}
          </span>
          {Array.from({ length: section.end - section.start + 1 }, (_, i) => section.start + i).map((n) => {
            const isActive = n >= activeStart && n <= activeEnd;
            return (
              <button
                key={n}
                className={`h-7 w-7 rounded text-xs font-medium transition-all ${
                  answers[n]
                    ? isActive
                      ? "bg-primary text-primary-foreground ring-2 ring-primary/30"
                      : "bg-primary/60 text-primary-foreground"
                    : isActive
                      ? "bg-card text-foreground border-2 border-primary shadow-sm"
                      : "bg-muted text-muted-foreground border border-border opacity-60"
                }`}
                onClick={() => {
                  if (!isActive) onSectionChange(si);
                  document.getElementById(`question-${n}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                {n}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
