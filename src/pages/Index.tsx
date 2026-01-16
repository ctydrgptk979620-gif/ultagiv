import CountdownTimer from '@/components/CountdownTimer';
import ParticipationStep from '@/components/ParticipationStep';
import heroImage from '@/assets/hero-beauty.jpg';
import { Button } from '@/components/ui/button';
import { MousePointer, Mail, CheckSquare, Gift, Sparkles, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Ulta Beauty Products" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-button text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce-gentle">
              <Sparkles className="w-4 h-4" />
              EXCLUSIVE GIVEAWAY
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-foreground">Win a</span>
              <br />
              <span className="text-gradient">$750 Ulta Gift Card</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              <strong className="text-foreground">10,000 Winners</strong> will each receive a <strong className="text-foreground">$750 Ulta Beauty Gift Card!</strong> Enter now for your chance to win.
            </p>

            {/* Countdown */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                Giveaway ends in:
              </p>
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>

      {/* Prize Highlight */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card p-8 md:p-12 rounded-3xl shadow-card border-2 border-primary/20">
              <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Gift className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-gradient">$750</span>
              </h2>
              <p className="text-xl text-foreground font-semibold mb-2">Ulta Beauty Gift Card</p>
              <p className="text-muted-foreground mb-8">
                10,000 lucky winners • Each receives $750 • Shop anything at Ulta Beauty
              </p>
              
              {/* Join Giveaway Button */}
              <a 
                href="https://glctrk.org/aff_c?offer_id=1181&aff_id=18811&source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-gradient-button hover:opacity-90 text-primary-foreground font-bold px-10 py-6 text-lg rounded-full shadow-glow transition-all hover:scale-105"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Join Giveaway
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Steps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              How to <span className="text-gradient">Enter</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Follow these simple steps to enter the giveaway
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <ParticipationStep 
              number={1}
              icon={<MousePointer className="w-6 h-6" />}
              title="Join the Giveaway"
              description="Click the 'Join Giveaway' button above to get started."
            />
            
            <ParticipationStep 
              number={2}
              icon={<Mail className="w-6 h-6" />}
              title="Enter Your Info"
              description="Provide your email address and basic information to register."
            />
            
            <ParticipationStep 
              number={3}
              icon={<CheckSquare className="w-6 h-6" />}
              title="Complete Deals"
              description="Complete 4-5 recommended deals from our partners to qualify."
            />
            
            <ParticipationStep 
              number={4}
              icon={<Gift className="w-6 h-6" />}
              title="Receive Your Gift Card"
              description="Once verified, receive your $750 Ulta Beauty gift card!"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Ulta Beauty Giveaway. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            This giveaway is not sponsored, endorsed, or administered by Ulta Beauty Inc.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
