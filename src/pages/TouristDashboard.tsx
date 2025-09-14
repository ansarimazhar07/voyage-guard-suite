import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QrCode, MapPin, Phone, Shield, Calendar, AlertTriangle } from "lucide-react";
import TouristLayout from "@/components/layouts/TouristLayout";

const TouristDashboard = () => {
  const touristData = {
    name: "Sarah Johnson",
    id: "TID-2024-001",
    passport: "US123456789",
    phone: "+1 (555) 123-4567",
    safetyScore: 92,
    location: "Central Plaza, Barcelona",
    emergencyContact: {
      name: "John Johnson",
      relation: "Emergency Contact",
      phone: "+1 (555) 987-6543",
    },
  };

  const itinerary = [
    {
      time: "09:00",
      activity: "Sagrada Familia Visit",
      location: "Carrer de Mallorca, 401",
      status: "completed",
    },
    {
      time: "14:00",
      activity: "Lunch at La Boqueria",
      location: "La Rambla, 91",
      status: "current",
    },
    {
      time: "16:30",
      activity: "Park Güell Tour",
      location: "Carrer d'Olot, s/n",
      status: "upcoming",
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 70) return "text-warning";
    return "text-destructive";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "secondary";
      case "current": return "default";
      case "upcoming": return "outline";
      default: return "secondary";
    }
  };

  return (
    <TouristLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, {touristData.name}</h1>
          <p className="text-muted-foreground">Your personal travel companion and safety portal</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Digital ID Card */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="w-5 h-5 text-primary" />
                Digital ID Card
              </CardTitle>
              <CardDescription>
                Your official tourist identification
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                    {touristData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">{touristData.name}</h3>
                  <p className="text-sm text-muted-foreground">Tourist ID: {touristData.id}</p>
                  <p className="text-sm text-muted-foreground">Passport: {touristData.passport}</p>
                </div>
              </div>
              
              <div className="flex justify-center p-6 bg-muted rounded-lg">
                <div className="w-32 h-32 bg-card border-2 border-dashed border-border rounded-lg flex items-center justify-center">
                  <QrCode className="w-16 h-16 text-muted-foreground" />
                </div>
              </div>
              
              <Button className="w-full" variant="outline">
                <QrCode className="w-4 h-4 mr-2" />
                Show QR Code
              </Button>
            </CardContent>
          </Card>

          {/* Safety Score */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                Safety Score
              </CardTitle>
              <CardDescription>
                Your current safety rating
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className={`text-4xl font-bold ${getScoreColor(touristData.safetyScore)}`}>
                  {touristData.safetyScore}
                </div>
                <div className="text-sm text-muted-foreground">out of 100</div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Safety Level</span>
                  <Badge variant="default" className="bg-success text-success-foreground">Excellent</Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-success h-2 rounded-full transition-all duration-300"
                    style={{ width: `${touristData.safetyScore}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 bg-success/10 rounded-lg">
                <MapPin className="w-4 h-4 text-success" />
                <span className="text-sm text-success-foreground">
                  Current Location: {touristData.location}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Trip Itinerary */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-info" />
                Today's Itinerary
              </CardTitle>
              <CardDescription>
                Your planned activities and schedule
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {itinerary.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-3 border border-border rounded-lg">
                  <div className="text-sm font-medium text-muted-foreground min-w-[3rem]">
                    {item.time}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="font-medium text-foreground">{item.activity}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </div>
                  </div>
                  <Badge variant={getStatusColor(item.status) as any}>
                    {item.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Emergency Contacts */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-destructive" />
                Emergency Contacts
              </CardTitle>
              <CardDescription>
                Quick access to emergency services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">{touristData.emergencyContact.name}</h4>
                    <p className="text-sm text-muted-foreground">{touristData.emergencyContact.relation}</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Phone className="w-3 h-3 mr-1" />
                    Call
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Button className="w-full bg-destructive hover:bg-destructive/90" size="lg">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Emergency Panic Button
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">Police: 112</Button>
                  <Button variant="outline" size="sm">Medical: 061</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TouristLayout>
  );
};

export default TouristDashboard;