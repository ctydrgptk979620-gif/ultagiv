import { Check } from 'lucide-react';
import { useState } from 'react';

interface ParticipationStepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

const ParticipationStep = ({ number, icon, title, description, link, linkText }: ParticipationStepProps) => {
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
      setCompleted(true);
    }
  };

  return (
    <div 
      className={`relative p-6 rounded-2xl transition-all duration-300 cursor-pointer group
        ${completed 
          ? 'bg-primary/10 border-2 border-primary' 
          : 'bg-card border-2 border-transparent hover:border-primary/30 shadow-card hover:shadow-glow'
        }`}
      onClick={handleClick}
    >
      {/* Step number badge */}
      <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
        ${completed ? 'bg-primary text-primary-foreground' : 'bg-gradient-button text-primary-foreground'}`}>
        {completed ? <Check className="w-4 h-4" /> : number}
      </div>

      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl transition-all duration-300
          ${completed ? 'bg-primary text-primary-foreground' : 'bg-gradient-hero text-primary-foreground group-hover:scale-110'}`}>
          {icon}
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
          {link && linkText && (
            <span className="text-primary font-medium text-sm mt-2 inline-block hover:underline">
              {linkText} →
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParticipationStep;
