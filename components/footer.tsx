import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative text-white py-16 px-6">
      {/* Background image */}
      <Image
        src="/pro-T03GMZma-1.jpeg"
        alt="Railway background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-blue-950/60 to-slate-950/90" />
      
      <div className="relative container mx-auto max-w-6xl z-10">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-3 gap-20 mb-8">

          {/* Kontaktuppgifter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>Adress: Skåne, Sverige</p>
              <p>E-post: info@etaskane.se</p>
              <p>Telefon: +46 (0)XX XXX XX XX</p>
            </div>
          </div>

          {/* Öppettider */}
          <div>
            <h3 className="text-lg font-bold mb-4">Öppettider</h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>Måndag - Fredag: 08:00 - 17:00</p>
              <p>Lördag - Söndag: Stängt</p>
            </div>
          </div>

          {/* CTA Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Ta nästa steg tillsammans med oss!
            </h3>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Kontakta oss idag för att uppleva skillnaden med Elite Train Associates Skåne AB.
            </p>
            <Button 
              size="lg"
              className="bg-white text-blue-900 hover:bg-white/90 px-6 py-3 text-sm font-semibold rounded-full"
              asChild
            >
              <a href="/kontakt">KONTAKTA OSS</a>
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            Upphovsrätt © 2025 Elite Train Associates Skåne AB
          </p>
        </div>
      </div>
    </footer>
  );
}
