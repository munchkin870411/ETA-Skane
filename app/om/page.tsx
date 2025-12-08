import Image from "next/image";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import styles from "./page.module.css";

export default function OmPage() {
  return (
    <div className={styles.page}>
      <Header />

      <HeroSection
        title="Om ETA Skåne"
        subtitle="Lär känna vårt team och vår passion för tågbranschen"
      />

      {/* Om företaget Section */}
      <section className={styles.omSection}>
        <div className={styles.container}>
          <div className={styles.omGrid}>
            {/* Left column - Text content */}
            <div className={styles.textColumn}>
              <div className={styles.textBlock}>
                <h2 className={styles.mainTitle}>
                  Om företaget
                </h2>
                <p className={styles.textContent}>
                  Elite Train Associates Skåne AB är ett uppåtsträvande konsultteam med års erfarenhet inom branschen. Vår öga för detaljer kombinerat med passionen för jobbet innebär att du får ett engagerat team som fokuserar på att leverera högkvalitativa resultat.
                </p>
              </div>

              <div className={styles.textBlock}>
                <h3 className={styles.sectionTitle}>
                  Varför välja oss?
                </h3>
                <p className={styles.textContentNoMargin}>
                  Våra tekniker har många års erfarenhet och är utbildade i de senaste teknologierna och metoderna inom tågindustrin. Vi förstår vikten av tid i tågdrift och erbjuder snabb och effektiv service för att minimera driftstopp. Vårt engagemang för kvalitet säkerställer att varje reparation och underhåll utförs till högsta standard. Våra tjänster anpassas efter dina specifika behov och tidsscheman.
                </p>
              </div>
            </div>

            {/* Right column - Image */}
            <div className={styles.imageWrapper}>
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
      <section className={styles.visionSection}>
        <div className={styles.container}>
          <div className={styles.visionGrid}>
            {/* Vår vision */}
            <div>
              <h3 className={styles.visionTitle}>
                Vår vision
              </h3>
              <p className={styles.textContentNoMargin}>
                Att vara det självklara valet för tågoperatörer och transportföretag som söker pålitliga och högkvalitativa lösningar. Vi strävar efter att sätta en ny standard inom branschen genom vårt engagemang för hållbarhet och teknisk excellens.
              </p>
            </div>

            {/* Vår mission */}
            <div>
              <h3 className={styles.visionTitle}>
                Vår mission
              </h3>
              <p className={styles.textContentNoMargin}>
                Att säkerställa smidiga och säkra järnvägsresor genom förstklassigt underhåll och service av tåg. Vi arbetar kontinuerligt med att förbättra och utveckla våra metoder för att möta och överträffa våra kunders förväntningar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vårt Team & Hållbarhet Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.visionGrid}>
            {/* Vårt Team */}
            <div>
              <h3 className={styles.visionTitle}>
                Vårt Team
              </h3>
              <p className={styles.textContentNoMargin}>
                Vårt team består av erfarna och högt kvalificerade tekniker, ingenjörer och järnvägsexperter som alla delar en passion för tåg och transport. Vi är stolta över att erbjuda en arbetsmiljö som främjar innovation och ständig förbättring.
              </p>
            </div>

            {/* Hållbarhet */}
            <div>
              <h3 className={styles.visionTitle}>
                Hållbarhet
              </h3>
              <p className={styles.textContentNoMargin}>
                På Elite Train Associates Skåne AB är vi engagerade i att bidra till en hållbar framtid. Vi arbetar aktivt med att implementera miljövänliga teknologier och processer för att minska vår miljöpåverkan och stödja hållbara transportlösningar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kärnvärden Section */}
      <section className={styles.coreValuesSection}>
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <h2 className={styles.coreTitle}>
              Kärnvärden
            </h2>
            <p className={styles.coreSubtitle}>
              Våra grundläggande principer styr allt vi gör.
            </p>
          </div>

          <div className={styles.coreGrid}>
            {/* Left column - Värde 1 & 2 */}
            <div className={styles.valueColumn}>
              {/* Värde 1 */}
              <div className={styles.valueItem}>
                <div className={styles.valueContent}>
                  <div>
                    <h4 className={styles.valueTitle}>Engagemang</h4>
                    <p className={styles.valueText}>
                      Dedikerade till att överträffa förväntningar och leverera kvalitet.
                    </p>
                    <div className={styles.valueDivider}></div>
                  </div>
                </div>
              </div>

              {/* Värde 2 */}
              <div className={styles.valueItem}>
                <div className={styles.valueContent}>
                  <div>
                    <h4 className={styles.valueTitle}>Integritet</h4>
                    <p className={styles.valueText}>
                      Ärlighet och trovärdighet i allt vi gör är av yttersta vikt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center image */}
            <div className={styles.centerImage}>
              <Image
                src="/pexels-photo-1658967.jpeg"
                alt="Beautiful landscape with train"
                fill
                className="object-cover"
              />
            </div>

            {/* Right column - Värde 3 & 4 */}
            <div className={styles.valueColumn}>
              {/* Värde 3 */}
              <div className={styles.valueItem}>
                <div className={styles.valueContent}>
                  <div>
                    <h4 className={styles.valueTitle}>Innovation</h4>
                    <p className={styles.valueText}>
                      Ständig strävan efter att tänka nytt och skapa värde för klienter.
                    </p>
                    <div className={styles.valueDivider}></div>
                  </div>
                </div>
              </div>

              {/* Värde 4 */}
              <div className={styles.valueItem}>
                <div className={styles.valueContent}>
                  <div>
                    <h4 className={styles.valueTitle}>Samarbete</h4>
                    <p className={styles.valueText}>
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
