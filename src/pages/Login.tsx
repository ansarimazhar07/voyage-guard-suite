import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<string>("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !role) {
      toast({
        title: "Login Failed",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Mock login - store role in localStorage
    localStorage.setItem("userRole", role);
    localStorage.setItem("isAuthenticated", "true");
    
    if (role === "authority") {
      navigate("/authority-dashboard");
    } else {
      navigate("/tourist-dashboard");
    }

    toast({
      title: "Login Successful",
      description: `Welcome ${role}!`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-large border-0">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              SafeTour Portal
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Secure access for authorities and tourists
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Select Role</Label>
                <Select value={role} onValueChange={setRole} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="authority">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Authority (Admin/Police)
                      </div>
                    </SelectItem>
                    <SelectItem value="tourist">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Tourist (User)
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;