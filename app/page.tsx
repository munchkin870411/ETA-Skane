import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />

      <HeroSection
        title="Erfaret konsultteam för högsta kvalitet"
        subtitle="Vi erbjuder engagerad service med fokus även på de minsta detaljerna."
        showButton={true}
      />

      {/* Om Oss Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Vår unika historia och passion
          </h3>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bild */}
            <div className="relative rounded-lg h-80 overflow-hidden">
              <Image
                src="/pexels-photo-889831-889831-1024x683.jpg"
                alt="Train interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Text content */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900">
                Vårt engagemang för hög kvalitet
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Elite Train Associates Skåne AB är en ledande aktör inom tågbranschen, baserad i Skåne, Sverige. Vår strävan efter säkerhet, kvalitet och innovation driver oss att leverera exceptionella tjänster inom tågunderhåll, service och operatörstjänster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section with Parallax */}
      <section 
        className="relative h-96 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/pro-Eg9rHyUy-1.jpeg)' }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-slate-900/80 via-blue-950/60 to-slate-950/80" />
      </section>

      {/* Tjänster Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Våra huvudtjänster
              </h3>
            </div>
            <Button 
              size="lg"
              className="bg-blue-900 text-white hover:bg-blue-700 px-8 py-6 text-base font-semibold rounded-full"
            >
              LÄS MER
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tjänst 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="mb-6">
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Tågunderhåll
              </h4>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/pro-q1n3xa89-768x1024.jpeg"
                  alt="Tågunderhåll"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Tjänst 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="mb-6">
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Akut felsökning och reparation
              </h4>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/pro-tA4FKtiR-1024x768.jpeg"
                  alt="Akut felsökning och reparation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Tjänst 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="mb-6">
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Teknisk rådgivning
              </h4>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/pro-RTaibBoU_square-1024x1024.jpg"
                  alt="Teknisk rådgivning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unikt värdeerbjudande Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="text-white space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold">
                Unikt värdeerbjudande
              </h3>
              <p className="text-lg text-white/90">
                Vi levererar högsta kvalitet med passion och precision
              </p>

              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Kundfokus</h4>
                    <p className="text-white/80">
                      Vi sätter våra kunders behov främst
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Specialister</h4>
                    <p className="text-white/80">
                      Erfarna specialister för bästa resultat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/pro-RTaibBoU_square-1024x1024.jpg"
                alt="Train maintenance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spacer Section */}
      <section className="py-12 bg-slate-50"></section>

      <Footer />
    </div>
  );
}
