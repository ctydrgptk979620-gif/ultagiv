import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Sparkles, Gift } from 'lucide-react';

const EntryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    acceptTerms: false,
    acceptNewsletter: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      toast.error('You must accept the official rules to participate!');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success('Success! You have entered the giveaway! 🎉', {
        description: 'Check your email for next steps.',
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        acceptTerms: false,
        acceptNewsletter: false,
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="h-12 bg-background border-2 border-border focus:border-primary transition-colors"
          />
        </div>
        
        <div>
          <Input
            type="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="h-12 bg-background border-2 border-border focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <div className="flex items-start gap-3">
          <Checkbox
            id="terms"
            checked={formData.acceptTerms}
            onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked as boolean })}
            className="mt-1"
          />
          <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
            I accept the <span className="text-primary hover:underline">official rules</span> and confirm I am 18 years or older *
          </label>
        </div>
        
        <div className="flex items-start gap-3">
          <Checkbox
            id="newsletter"
            checked={formData.acceptNewsletter}
            onCheckedChange={(checked) => setFormData({ ...formData, acceptNewsletter: checked as boolean })}
            className="mt-1"
          />
          <label htmlFor="newsletter" className="text-sm text-muted-foreground cursor-pointer">
            I want to receive exclusive news and offers from Ulta Beauty
          </label>
        </div>
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full h-14 bg-gradient-button hover:opacity-90 text-primary-foreground font-semibold text-lg shadow-glow transition-all duration-300 hover:scale-[1.02]"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 animate-spin" />
            Processing...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Gift className="w-5 h-5" />
            Join Giveaway
          </span>
        )}
      </Button>
    </form>
  );
};

export default EntryForm;
