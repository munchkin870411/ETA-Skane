import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section className="relative py-15 px-6">
      {/* Background image */}
      <Image
        src="/pro-T03GMZma-1.jpeg"
        alt="Railway background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-blue-950/60 to-slate-950/90" />
      
      <div className="relative container mx-auto max-w-4xl text-center z-10">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ta nästa steg tillsammans med oss
        </h3>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Kontakta oss idag för att uppleva skillnaden med Elite Train Associates Skåne AB.
        </p>
        <Button 
          size="lg"
          className="bg-white text-blue-600 hover:bg-white/90 px-10 py-7 text-base font-semibold rounded-full"
          asChild
        >
          <a href="/kontakt">KONTAKTA OSS</a>
        </Button>
      </div>
    </section>
  );
}
