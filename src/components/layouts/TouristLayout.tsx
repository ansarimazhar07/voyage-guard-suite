import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LayoutDashboard, QrCode, Shield, Settings, LogOut, Users } from "lucide-react";

interface TouristLayoutProps {
  children: ReactNode;
}

const TouristLayout = ({ children }: TouristLayoutProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  const navItems = [
    { title: "Dashboard", url: "/tourist-dashboard", icon: LayoutDashboard },
    { title: "Digital ID", url: "/digital-id", icon: QrCode },
    { title: "Safety Score", url: "/safety-score", icon: Shield },
    { title: "Settings", url: "/tourist-settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">SafeTour</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  variant="ghost"
                  className="flex items-center gap-2"
                  onClick={() => navigate(item.url)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.title}
                </Button>
              ))}
            </nav>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-primary text-primary-foreground">SJ</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default TouristLayout;