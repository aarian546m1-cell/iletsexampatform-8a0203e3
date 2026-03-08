import { ReadingQuestion } from "@/lib/reading-tests-data";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface QuestionGroupProps {
  questions: ReadingQuestion[];
  type: string;
  answers: Record<number, string>;
  onAnswer: (qNum: number, value: string) => void;
}

function getGroupInstruction(type: string, startQ: number, endQ: number): React.ReactNode {
  const range = startQ === endQ ? `Question ${startQ}` : `Questions ${startQ}–${endQ}`;

  switch (type) {
    case "multiple_choice":
      return (
        <>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground mb-2">{range}</h4>
          <p className="text-sm text-foreground font-medium">Choose the correct letter, <strong>A</strong>, <strong>B</strong>, <strong>C</strong> or <strong>D</strong>.</p>
        </>
      );
    case "true_false_not_given":
      return (
        <>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground mb-2">{range}</h4>
          <p className="text-sm text-foreground font-medium mb-2">Do the following statements agree with the information given in the passage?</p>
          <p className="text-sm text-foreground mb-1">Write</p>
          <div className="text-sm space-y-0.5 ml-4">
            <p><strong>TRUE</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement agrees with the information</p>
            <p><strong>FALSE</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement contradicts the information</p>
            <p><strong>NOT GIVEN</strong> &nbsp;&nbsp; if there is no information on this</p>
          </div>
        </>
      );
    case "yes_no_not_given":
      return (
        <>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground mb-2">{range}</h4>
          <p className="text-sm text-foreground font-medium mb-2">Do the following statements agree with the views/claims of the writer?</p>
          <p className="text-sm text-foreground mb-1">Write</p>
          <div className="text-sm space-y-0.5 ml-4">
            <p><strong>YES</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement agrees with the views of the writer</p>
            <p><strong>NO</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; if the statement contradicts the views of the writer</p>
            <p><strong>NOT GIVEN</strong> &nbsp;&nbsp; if it is impossible to say what the writer thinks about this</p>
          </div>
        </>
      );
    case "matching_headings":
      return (
        <>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground mb-2">{range}</h4>
          <p className="text-sm text-foreground font-medium mb-1">The passage has several sections.</p>
          <p className="text-sm text-foreground font-medium">Choose the correct heading for each section from the list of headings below.</p>
        </>
      );
    case "matching_information":
      return (
        <>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground mb-2">{range}</h4>
          <p className="text-sm text-foreground font-medium">Which paragraph contains the following information?</p>
          <p className="text-sm text-muted-foreground italic mt-1">Write the correct letter, <strong>A–F</strong>.</p>
        </>
      );
    case "matching_features":
      return (
        <>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground mb-2">{range}</h4>
          <p className="text-sm text-foreground font-medium">Match each statement with the correct person/feature from the list below.</p>
        </>
      );
    case "sentence_completion":
      return (
        <>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground mb-2">{range}</h4>
          <p className="text-sm text-foreground font-medium">Complete the sentences below.</p>
          <p className="text-sm text-muted-foreground italic mt-1">Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for each answer.</p>
        </>
      );
    case "summary_completion":
      return (
        <>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground mb-2">{range}</h4>
          <p className="text-sm text-foreground font-medium">Complete the summary below.</p>
          <p className="text-sm text-muted-foreground italic mt-1">Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.</p>
        </>
      );
    case "table_completion":
      return (
        <>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground mb-2">{range}</h4>
          <p className="text-sm text-foreground font-medium">Complete the table below.</p>
          <p className="text-sm text-muted-foreground italic mt-1">Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.</p>
        </>
      );
    case "diagram_completion":
      return (
        <>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground mb-2">{range}</h4>
          <p className="text-sm text-foreground font-medium">Label the diagram below.</p>
          <p className="text-sm text-muted-foreground italic mt-1">Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.</p>
        </>
      );
    case "short_answer":
      return (
        <>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground mb-2">{range}</h4>
          <p className="text-sm text-foreground font-medium">Answer the questions below.</p>
          <p className="text-sm text-muted-foreground italic mt-1">Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer.</p>
        </>
      );
    case "flow_chart_completion":
      return (
        <>
          <h4 className="text-sm font-bold uppercase tracking-wide text-foreground mb-2">{range}</h4>
          <p className="text-sm text-foreground font-medium">Complete the flow chart below.</p>
          <p className="text-sm text-muted-foreground italic mt-1">Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.</p>
        </>
      );
    default:
      return null;
  }
}

// Extract clean question text (strip embedded instructions that are now in the group header)
function cleanQuestionText(text: string): string {
  // Remove common embedded instruction prefixes
  return text
    .replace(/^Choose the correct letter.*?\.\n\n/s, "")
    .replace(/^Do the following statements.*?\.\n\nWrite TRUE.*?NOT GIVEN\.\n\n/s, "")
    .replace(/^Do the following statements.*?\.\n\nWrite YES.*?NOT GIVEN\.\n\n/s, "")
    .replace(/^Do the following statements.*?\n\n(?:Write:?\n)?(?:TRUE|YES).*?\n(?:FALSE|NO).*?\n(?:NOT GIVEN).*?\n\n/s, "")
    .trim();
}

function MCQuestion({ q, answer, onAnswer }: { q: ReadingQuestion; answer: string; onAnswer: (v: string) => void }) {
  return (
    <div className="py-3">
      <p className="text-sm text-foreground mb-3">
        <span className="font-bold mr-1.5">{q.number}</span>
        {cleanQuestionText(q.text)}
      </p>
      {q.options && (
        <RadioGroup value={answer} onValueChange={onAnswer} className="ml-6 space-y-1.5">
          {q.options.map((opt) => {
            const letter = opt.charAt(0);
            return (
              <div key={opt} className="flex items-start gap-2">
                <RadioGroupItem value={letter} id={`q${q.number}-${letter}`} className="mt-0.5" />
                <Label htmlFor={`q${q.number}-${letter}`} className="cursor-pointer text-sm font-normal leading-relaxed">
                  {opt}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      )}
    </div>
  );
}

function TFNGQuestion({ q, answer, onAnswer, variant }: { q: ReadingQuestion; answer: string; onAnswer: (v: string) => void; variant: "tfng" | "ynng" }) {
  const options = variant === "tfng" ? ["TRUE", "FALSE", "NOT GIVEN"] : ["YES", "NO", "NOT GIVEN"];
  return (
    <div className="py-3 flex items-start gap-4">
      <div className="flex-1">
        <p className="text-sm text-foreground">
          <span className="font-bold mr-1.5">{q.number}</span>
          {cleanQuestionText(q.text)}
        </p>
      </div>
      <div className="flex-shrink-0">
        <RadioGroup value={answer} onValueChange={onAnswer} className="flex gap-2">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => onAnswer(opt)}
              className={`rounded border px-2.5 py-1 text-xs font-medium transition-colors ${
                answer === opt
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:bg-muted"
              }`}
            >
              {opt}
            </button>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}

function MatchingQuestion({ q, answer, onAnswer }: { q: ReadingQuestion; answer: string; onAnswer: (v: string) => void }) {
  return (
    <div className="py-3">
      <p className="text-sm text-foreground mb-3">
        <span className="font-bold mr-1.5">{q.number}</span>
        {cleanQuestionText(q.text)}
      </p>
      {q.options && (
        <RadioGroup value={answer} onValueChange={onAnswer} className="ml-6 space-y-1.5">
          {q.options.map((opt) => {
            const val = opt.split(/[.\s]/)[0];
            return (
              <div key={opt} className="flex items-start gap-2">
                <RadioGroupItem value={val} id={`q${q.number}-${val}`} className="mt-0.5" />
                <Label htmlFor={`q${q.number}-${val}`} className="cursor-pointer text-sm font-normal leading-relaxed">
                  {opt}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      )}
    </div>
  );
}

function CompletionQuestion({ q, answer, onAnswer }: { q: ReadingQuestion; answer: string; onAnswer: (v: string) => void }) {
  return (
    <div className="py-3">
      <div className="flex items-start gap-3">
        <span className="font-bold text-sm text-foreground flex-shrink-0">{q.number}</span>
        <div className="flex-1 space-y-2">
          <p className="text-sm text-foreground leading-relaxed">{cleanQuestionText(q.text)}</p>
          <Input
            value={answer}
            onChange={(e) => onAnswer(e.target.value)}
            placeholder="Your answer..."
            className="max-w-xs h-8 text-sm border-b-2 border-t-0 border-x-0 rounded-none bg-transparent px-1 focus-visible:ring-0 focus-visible:border-primary"
          />
        </div>
      </div>
    </div>
  );
}

export default function QuestionGroup({ questions, type, answers, onAnswer }: QuestionGroupProps) {
  const startQ = questions[0].number;
  const endQ = questions[questions.length - 1].number;

  return (
    <div className="mb-10">
      {/* Instruction block */}
      <div className="border-l-4 border-primary bg-muted/40 rounded-r-md p-4 mb-5">
        {getGroupInstruction(type, startQ, endQ)}
      </div>

      {/* ── Matching Headings: Cambridge layout ── */}
      {type === "matching_headings" && (() => {
        // Collect all unique options from all questions in this group
        const allOptions: string[] = [];
        const seen = new Set<string>();
        for (const q of questions) {
          if (q.options) {
            for (const opt of q.options) {
              if (!seen.has(opt)) {
                seen.add(opt);
                allOptions.push(opt);
              }
            }
          }
        }
        return (
          <>
            {/* Headings list box */}
            <div className="border rounded-lg bg-card p-5 mb-6 shadow-sm">
              <p className="text-sm font-bold text-foreground mb-3 border-b border-border pb-2">List of Headings</p>
              <div className="space-y-2">
                {allOptions.map((opt, i) => (
                  <p key={i} className="text-sm text-foreground leading-relaxed pl-1">{opt}</p>
                ))}
              </div>
            </div>

            {/* Questions as "Section X" with select */}
            <div className="space-y-3">
              {questions.map((q) => {
                const answer = answers[q.number] || "";
                const handleAnswer = (v: string) => onAnswer(q.number, v);
                return (
                  <div key={q.number} className="flex items-center gap-3 py-2 border-b border-border/40 last:border-0">
                    <span className="font-bold text-sm text-foreground w-6 text-center">{q.number}</span>
                    <p className="text-sm text-foreground flex-1">{cleanQuestionText(q.text)}</p>
                    <select
                      value={answer}
                      onChange={(e) => handleAnswer(e.target.value)}
                      className="h-8 w-16 rounded border border-input bg-background px-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">—</option>
                      {allOptions.map((opt) => {
                        const val = opt.split(/[.\s]/)[0];
                        return <option key={val} value={val}>{val}</option>;
                      })}
                    </select>
                  </div>
                );
              })}
            </div>
          </>
        );
      })()}

      {/* ── All other question types ── */}
      {type !== "matching_headings" && (
        <div className="divide-y divide-border/50">
          {questions.map((q) => {
            const answer = answers[q.number] || "";
            const handleAnswer = (v: string) => onAnswer(q.number, v);

            switch (type) {
              case "multiple_choice":
                return <MCQuestion key={q.number} q={q} answer={answer} onAnswer={handleAnswer} />;
              case "true_false_not_given":
                return <TFNGQuestion key={q.number} q={q} answer={answer} onAnswer={handleAnswer} variant="tfng" />;
              case "yes_no_not_given":
                return <TFNGQuestion key={q.number} q={q} answer={answer} onAnswer={handleAnswer} variant="ynng" />;
              case "matching_information":
              case "matching_features":
                return <MatchingQuestion key={q.number} q={q} answer={answer} onAnswer={handleAnswer} />;
              default:
                return <CompletionQuestion key={q.number} q={q} answer={answer} onAnswer={handleAnswer} />;
            }
          })}
        </div>
      )}
    </div>
  );
}
