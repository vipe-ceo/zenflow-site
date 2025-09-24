import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ title, image, description, link }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 group">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        {link ? (
          <Button variant="outline" className="w-full" asChild>
            <a href={link}>Saiba mais</a>
          </Button>
        ) : (
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
        )}
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;