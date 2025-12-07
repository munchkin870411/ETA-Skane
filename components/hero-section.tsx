import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  showButton?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  buttonText = "KONTAKTA OSS",
  buttonLink = "/kontakt",
  showButton = false,
}: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[500px] items-center justify-center px-6">
      {/* Bakgrundsbild - alltid samma */}
      <Image
        src="/pexels-photo-1824169.jpeg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-blue-950/60 to-slate-950/80" />

      <div className="relative z-10 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        {showButton && (
          <Button
            size="lg"
            className="bg-white text-blue-800 hover:bg-white/90 px-8 py-6 text-base font-semibold rounded-full"
            asChild
          >
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        )}
      </div>
    </section>
  );
}
