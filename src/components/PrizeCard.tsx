import { Gift, Star } from 'lucide-react';

interface PrizeCardProps {
  title: string;
  value: string;
  description: string;
  featured?: boolean;
}

const PrizeCard = ({ title, value, description, featured = false }: PrizeCardProps) => {
  return (
    <div 
      className={`relative p-6 rounded-2xl transition-all duration-500 group
        ${featured 
          ? 'bg-gradient-hero text-primary-foreground shadow-glow scale-105' 
          : 'bg-card shadow-card hover:shadow-glow hover:-translate-y-2'
        }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-accent-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Star className="w-3 h-3" fill="currentColor" />
          PREMIUL MARE
        </div>
      )}

      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto
        ${featured ? 'bg-white/20' : 'bg-gradient-hero'}`}>
        <Gift className={`w-7 h-7 ${featured ? 'text-white' : 'text-primary-foreground'}`} />
      </div>

      <h3 className={`text-xl font-bold text-center mb-2 ${featured ? 'text-white' : 'text-foreground'}`}>
        {title}
      </h3>
      
      <div className={`text-3xl font-bold text-center mb-3 ${featured ? 'text-white' : 'text-gradient'}`}>
        {value}
      </div>
      
      <p className={`text-sm text-center ${featured ? 'text-white/80' : 'text-muted-foreground'}`}>
        {description}
      </p>
    </div>
  );
};

export default PrizeCard;
