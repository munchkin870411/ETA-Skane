import Image from "next/image";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";

export default function OmPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <Header />

      <HeroSection
        title="Om ETA Skåne"
        subtitle="Lär känna vårt team och vår passion för tågbranschen"
      />

      {/* Om företaget Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left column - Text content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Om företaget
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Elite Train Associates Skåne AB är ett uppåtsträvande konsultteam med års erfarenhet inom branschen. Vår öga för detaljer kombinerat med passionen för jobbet innebär att du får ett engagerat team som fokuserar på att leverera högkvalitativa resultat.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Varför välja oss?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Våra tekniker har många års erfarenhet och är utbildade i de senaste teknologierna och metoderna inom tågindustrin. Vi förstår vikten av tid i tågdrift och erbjuder snabb och effektiv service för att minimera driftstopp. Vårt engagemang för kvalitet säkerställer att varje reparation och underhåll utförs till högsta standard. Våra tjänster anpassas efter dina specifika behov och tidsscheman.
                </p>
              </div>
            </div>

            {/* Right column - Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/pexels-photo-1824169.jpeg"
                alt="Train station"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vår vision */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Vår vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Att vara det självklara valet för tågoperatörer och transportföretag som söker pålitliga och högkvalitativa lösningar. Vi strävar efter att sätta en ny standard inom branschen genom vårt engagemang för hållbarhet och teknisk excellens.
              </p>
            </div>

            {/* Vår mission */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Vår mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Att säkerställa smidiga och säkra järnvägsresor genom förstklassigt underhåll och service av tåg. Vi arbetar kontinuerligt med att förbättra och utveckla våra metoder för att möta och överträffa våra kunders förväntningar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vårt Team & Hållbarhet Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vårt Team */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Vårt Team
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vårt team består av erfarna och högt kvalificerade tekniker, ingenjörer och järnvägsexperter som alla delar en passion för tåg och transport. Vi är stolta över att erbjuda en arbetsmiljö som främjar innovation och ständig förbättring.
              </p>
            </div>

            {/* Hållbarhet */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Hållbarhet
              </h3>
              <p className="text-gray-600 leading-relaxed">
                På Elite Train Associates Skåne AB är vi engagerade i att bidra till en hållbar framtid. Vi arbetar aktivt med att implementera miljövänliga teknologier och processer för att minska vår miljöpåverkan och stödja hållbara transportlösningar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kärnvärden Section */}
      <section className="py-20 px-6 bg-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kärnvärden
            </h2>
            <p className="text-gray-600 text-lg">
              Våra grundläggande principer styr allt vi gör.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left column - Värde 1 & 2 */}
            <div className="space-y-8">
              {/* Värde 1 */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Engagemang</h4>
                    <p className="text-gray-600">
                      Dedikerade till att överträffa förväntningar och leverera kvalitet.
                    </p>
                    <div className="h-0.5 w-95 bg-blue-600/40 mt-20"></div>
                  </div>
                </div>
              </div>

              {/* Värde 2 */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Integritet</h4>
                    <p className="text-gray-600">
                      Ärlighet och trovärdighet i allt vi gör är av yttersta vikt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/pexels-photo-1658967.jpeg"
                alt="Beautiful landscape with train"
                fill
                className="object-cover"
              />
            </div>

            {/* Right column - Värde 3 & 4 */}
            <div className="space-y-8">
              {/* Värde 3 */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation</h4>
                    <p className="text-gray-600">
                      Ständig strävan efter att tänka nytt och skapa värde för klienter.
                    </p>
                    <div className="h-0.5 w-95 bg-blue-600/40 mt-20"></div>
                  </div>
                </div>
              </div>

              {/* Värde 4 */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Samarbete</h4>
                    <p className="text-gray-600">
                      Vi uppskattar samarbetet och tror att tillsammans når vi längre.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
