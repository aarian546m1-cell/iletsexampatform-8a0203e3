import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-card/50">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-serif text-sm font-bold text-primary-foreground">I</span>
              </div>
              <span className="font-serif text-lg font-bold">IELTS Pro</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Practice smarter, score higher. Your complete IELTS preparation platform.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground">Practice</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tests" className="text-foreground/70 hover:text-foreground">Cambridge Tests</Link></li>
              <li><Link to="/band-scores" className="text-foreground/70 hover:text-foreground">Band Scores</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground">Modules</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tests/listening" className="text-foreground/70 hover:text-foreground">Listening</Link></li>
              <li><Link to="/tests/reading" className="text-foreground/70 hover:text-foreground">Reading</Link></li>
              <li><Link to="/writing-tests" className="text-foreground/70 hover:text-foreground">Writing</Link></li>
              <li><Link to="/tests/speaking" className="text-foreground/70 hover:text-foreground">Speaking</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-sans text-sm font-semibold uppercase tracking-wider text-muted-foreground">Account</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/dashboard" className="text-foreground/70 hover:text-foreground">Dashboard</Link></li>
              <li><Link to="/auth" className="text-foreground/70 hover:text-foreground">Sign In</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} IELTS Pro. All rights reserved. Not affiliated with British Council, IDP, or Cambridge University Press.
        </div>
      </div>
    </footer>
  );
}
