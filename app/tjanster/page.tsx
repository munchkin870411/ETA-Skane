import Image from "next/image";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";

export default function TjansterPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />

      <HeroSection
        title="Våra Tjänster"
        subtitle="Expertis och lösningar för alla dina tågunderhållsbehov"
      />

      {/* Tjänster Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Våra huvudtjänster
            </h2>
            <p className="text-gray-600 text-lg">
              Våra huvudsakliga tjänster för din framgång
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tjänst 1 - Teknisk Rådgivning */}
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <Image
                src="/pro-kgKlAj8B.jpeg"
                alt="Teknisk Rådgivning"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-blue-950/60 to-slate-950/80" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Teknisk Rådgivning
                </h3>
                <p className="text-white/90 text-base">
                  Rådgivning om bästa praxis för underhåll och felsökning.
                </p>
              </div>
            </div>

            {/* Tjänst 2 - Tågunderhåll */}
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <Image
                src="/pro-tUbcFWsk.jpeg"
                alt="Tågunderhåll"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-blue-950/60 to-slate-950/80" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Tågunderhåll
                </h3>
                <p className="text-white/90 text-base">
                  Regelbundet och omfattande underhåll för att säkerställa att alla tåg är i toppskick och redo att möta dagens transportutmaningar.
                </p>
              </div>
            </div>

            {/* Tjänst 3 - Förebyggande Underhåll */}
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <Image
                src="/pro-q1n3xa89-768x1024.jpeg"
                alt="Förebyggande Underhåll"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-blue-950/60 to-slate-950/80" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Förebyggande Underhåll
                </h3>
                <p className="text-white/90 text-base">
                  Planering och genomförande av underhåll för att förlänga komponenternas livslängd. Uppdateringar och förbättringar för optimal prestanda.
                </p>
              </div>
            </div>

            {/* Tjänst 4 - Avancerad Diagnostik */}
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <Image
                src="/pro-RTaibBoU_square-1024x1024.jpg"
                alt="Avancerad Diagnostik"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-blue-950/60 to-slate-950/80" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Avancerad Diagnostik
                </h3>
                <p className="text-white/90 text-base">
                  Användning av avancerad diagnostisk utrustning för att identifiera fel exakt.
                </p>
              </div>
            </div>

            {/* Tjänst 5 - Regelbundna Inspektioner */}
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <Image
                src="/pro-T03GMZma-1.jpeg"
                alt="Regelbundna Inspektioner"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-blue-950/60 to-slate-950/80" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Regelbundna Inspektioner
                </h3>
                <p className="text-white/90 text-base">
                  Kompletta lösningar för tågoperatörer, inklusive bemanning, utbildning och driftstöd.
                </p>
              </div>
            </div>

            {/* Tjänst 6 - Akut Felsökning och Reparation */}
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <Image
                src="/pro-tA4FKtiR-1024x768.jpeg"
                alt="Akut Felsökning och Reparation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-blue-950/60 to-slate-950/80" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Akut Felsökning och Reparation
                </h3>
                <p className="text-white/90 text-base">
                  Snabb insats vid akuta problem för att minimera driftstopp och omfattande diagnostisering och reparation direkt på plats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
