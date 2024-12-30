import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
        Saharat Vithchataya
      </h1>
      <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto mb-8">
        I’m into coding (lie 🤓), building weird projects, quantum computers,
        aerospace engineering, travel, and F1 racing! I made this website to
        share my thoughts and lectures. I believe if I can explain something
        clearly, then I really get it.
      </p>
      <Button size="lg">Learn More</Button>
    </section>
  );
}
