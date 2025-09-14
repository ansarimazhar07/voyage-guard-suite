import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Users, MapPin, TrendingUp, Clock, CheckCircle } from "lucide-react";
import AuthorityLayout from "@/components/layouts/AuthorityLayout";

const AuthorityDashboard = () => {
  const kpiData = [
    {
      title: "Active Tourists",
      value: "1,247",
      change: "+12%",
      icon: Users,
      trend: "up",
    },
    {
      title: "Panic Alerts Today",
      value: "3",
      change: "-25%",
      icon: AlertTriangle,
      trend: "down",
    },
    {
      title: "Avg. Safety Score",
      value: "87.5",
      change: "+5.2%",
      icon: TrendingUp,
      trend: "up",
    },
  ];

  const recentAlerts = [
    {
      id: "ALT-001",
      tourist: "MAZHAR ANSARI",
      type: "Panic Button",
      location: "NASHIK ROAD",
      time: "2 min ago",
      status: "urgent",
    },
    {
      id: "ALT-002",
      tourist: "OM BHARASKAR",
      type: "Route Deviation",
      location: "MAKHMALABAD",
      time: "15 min ago",
      status: "medium",
    },
    {
      id: "ALT-003",
      tourist: "DURGESH BAGUL",
      type: "Inactivity Alert",
      location: "MHASRUL",
      time: "1 hour ago",
      status: "low",
    },
     {
      id: "ALT-003",
      tourist: "GANESH BAGUL",
      type: "Inactivity Alert",
      location: "MUMBAI NAKA",
      time: "5 hour ago",
      status: "low",
    },
     {
      id: "ALT-003",
      tourist: "SHRUTI BORSE",
      type: "Inactivity Alert",
      location: "NASHIK",
      time: "2 hour ago",
      status: "low",
    },
     {
      id: "ALT-003",
      tourist: "SHRUTIKA BHAVAR",
      type: "Inactivity Alert",
      location: "NASHIK",
      time: "2 hour ago",
      status: "low",
    },
     
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "urgent": return "destructive";
      case "medium": return "warning";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <AuthorityLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Authority Dashboard</h1>
          <p className="text-muted-foreground">Real-time overview of tourist safety and security</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {kpiData.map((kpi) => (
            <Card key={kpi.title} className="border-0 shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {kpi.title}
                </CardTitle>
                <kpi.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{kpi.value}</div>
                <p className={`text-xs ${kpi.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                  {kpi.change} from last week
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Alerts Feed */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                Recent Alerts
              </CardTitle>
              <CardDescription>
                Latest panic events and security notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{alert.tourist}</span>
                      <Badge variant={getStatusColor(alert.status) as any} className="text-xs">
                        {alert.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {alert.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {alert.time}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                    <Button size="sm" variant="default">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Acknowledge
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Access key features and tools
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" size="lg" variant="default">
                <MapPin className="w-4 h-4 mr-2" />
                Open Map & Tracking
              </Button>
              <Button className="w-full justify-start" size="lg" variant="outline">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Incident Management
              </Button>
              <Button className="w-full justify-start" size="lg" variant="outline">
                <TrendingUp className="w-4 h-4 mr-2" />
                Analytics & Reports
              </Button>
              <Button className="w-full justify-start" size="lg" variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Geofence Management
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AuthorityLayout>
  );
};

export default AuthorityDashboard;