import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Sun, Moon, Menu, LogOut, LayoutDashboard, BookOpen, GraduationCap, Shield, PenLine } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { user, isAdmin, signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/tests", label: "Practice Tests", icon: BookOpen },
    { to: "/writing-tests", label: "Writing Tests", icon: PenLine },
    { to: "/band-scores", label: "Band Scores", icon: GraduationCap },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="font-serif text-lg font-bold text-primary-foreground">I</span>
          </div>
          <span className="font-serif text-xl font-bold">IELTS Pro</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              <Button variant="ghost" size="sm"><link.icon className="mr-1.5 h-4 w-4" />{link.label}</Button>
            </Link>
          ))}
          {user && (
            <Link to="/dashboard">
              <Button variant="ghost" size="sm"><LayoutDashboard className="mr-1.5 h-4 w-4" />Dashboard</Button>
            </Link>
          )}
          {isAdmin && (
            <Link to="/admin">
              <Button variant="ghost" size="sm"><Shield className="mr-1.5 h-4 w-4" />Admin</Button>
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {user ? (
            <Button variant="outline" size="sm" onClick={handleSignOut} className="hidden md:flex">
              <LogOut className="mr-1.5 h-4 w-4" />Sign Out
            </Button>
          ) : (
            <div className="hidden gap-2 md:flex">
              <Link to="/auth"><Button variant="outline" size="sm">Sign In</Button></Link>
              <Link to="/auth?tab=signup"><Button size="sm">Get Started</Button></Link>
            </div>
          )}

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="font-serif">Menu</SheetTitle>
              <nav className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start"><link.icon className="mr-2 h-4 w-4" />{link.label}</Button>
                  </Link>
                ))}
                {user && (
                  <Link to="/dashboard" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start"><LayoutDashboard className="mr-2 h-4 w-4" />Dashboard</Button>
                  </Link>
                )}
                {isAdmin && (
                  <Link to="/admin" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start"><Shield className="mr-2 h-4 w-4" />Admin</Button>
                  </Link>
                )}
                <div className="my-2 border-t" />
                {user ? (
                  <Button variant="outline" onClick={() => { handleSignOut(); setOpen(false); }}>
                    <LogOut className="mr-2 h-4 w-4" />Sign Out
                  </Button>
                ) : (
                  <>
                    <Link to="/auth" onClick={() => setOpen(false)}><Button variant="outline" className="w-full">Sign In</Button></Link>
                    <Link to="/auth?tab=signup" onClick={() => setOpen(false)}><Button className="w-full">Get Started</Button></Link>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
