interface QuestionNavigatorProps {
  totalQuestions: number;
  answers: Record<number, string>;
}

export default function QuestionNavigator({ totalQuestions, answers }: QuestionNavigatorProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          className={`h-7 w-7 rounded text-xs font-medium transition-colors ${
            answers[n]
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground border border-border"
          }`}
          onClick={() => {
            document.getElementById(`question-${n}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          {n}
        </button>
      ))}
    </div>
  );
}
