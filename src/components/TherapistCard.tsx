import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TherapistCardProps {
  name: string;
  photo: string;
  specialty: string;
  bio: string;
  techniques?: string[];
}

const TherapistCard = ({ name, photo, specialty, bio, techniques }: TherapistCardProps) => {
  return (
    <Card className="overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
      <CardHeader className="p-0">
        <div className="relative">
          <img 
            src={photo} 
            alt={`${name} - ${specialty}`}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">{name}</h3>
        <p className="text-primary font-medium mb-3">{specialty}</p>
        <p className="text-muted-foreground text-sm mb-4">{bio}</p>
        
        {techniques && techniques.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techniques.map((technique, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {technique}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full gradient-primary text-primary-foreground hover:opacity-90"
          asChild
        >
          <a 
            href="https://wa.me/11966588962" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Agendar pelo WhatsApp
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TherapistCard;