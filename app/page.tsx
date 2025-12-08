import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <HeroSection
        title="Erfaret konsultteam för högsta kvalitet"
        subtitle="Vi erbjuder engagerad service med fokus även på de minsta detaljerna."
        showButton={true}
      />

      {/* Om Oss Section */}
      <section className={styles.omOssSection}>
        <div className={styles.container}>
          
          <h3 className={styles.omOssTitle}>
            Vår unika historia och passion
          </h3>

          <div className={styles.omOssGrid}>
            {/* Bild */}
            <div className={styles.imageWrapper}>
              <Image
                src="/pexels-photo-889831-889831-1024x683.jpg"
                alt="Train interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Text content */}
            <div className={styles.textContent}>
              <h4>
                Vårt engagemang för hög kvalitet
              </h4>
              <p>
                Elite Train Associates Skåne AB är en ledande aktör inom tågbranschen, baserad i Skåne, Sverige. Vår strävan efter säkerhet, kvalitet och innovation driver oss att leverera exceptionella tjänster inom tågunderhåll, service och operatörstjänster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section with Parallax */}
      <section 
        className={styles.parallaxSection}
        style={{ backgroundImage: 'url(/pro-Eg9rHyUy-1.jpeg)' }}
      >
        <div className={styles.parallaxOverlay} />
      </section>

      {/* Tjänster Section */}
      <section className={styles.tjansterSection}>
        <div className={styles.container}>
          <div className={styles.tjansterHeader}>
            <div>
              <h3 className={styles.tjansterTitle}>
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

          <div className={styles.tjansterGrid}>
            {/* Tjänst 1 */}
            <div className={styles.tjanstCard}>
              <div className={styles.spacer}>
              </div>
              <h4>
                Tågunderhåll
              </h4>
              <div className={styles.tjanstImageWrapper}>
                <Image
                  src="/pro-q1n3xa89-768x1024.jpeg"
                  alt="Tågunderhåll"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Tjänst 2 */}
            <div className={styles.tjanstCard}>
              <div className={styles.spacer}>
              </div>
              <h4>
                Akut felsökning och reparation
              </h4>
              <div className={styles.tjanstImageWrapper}>
                <Image
                  src="/pro-tA4FKtiR-1024x768.jpeg"
                  alt="Akut felsökning och reparation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Tjänst 3 */}
            <div className={styles.tjanstCard}>
              <div className={styles.spacer}>
              </div>
              <h4>
                Teknisk rådgivning
              </h4>
              <div className={styles.tjanstImageWrapper}>
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
      <section className={styles.vardeSection}>
        <div className={styles.container}>
          <div className={styles.vardeGrid}>
            {/* Text content */}
            <div className={styles.vardeTextContent}>
              <h3>
                Unikt värdeerbjudande
              </h3>
              <p>
                Vi levererar högsta kvalitet med passion och precision
              </p>

              <div className={styles.featureList}>
                {/* Feature 1 */}
                <div className={styles.feature}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.icon}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.featureContent}>
                    <h4>Kundfokus</h4>
                    <p>
                      Vi sätter våra kunders behov främst
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className={styles.feature}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.icon}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.featureContent}>
                    <h4>Specialister</h4>
                    <p>
                      Erfarna specialister för bästa resultat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className={styles.vardeImageWrapper}>
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
      <section className={styles.spacerSection}></section>

      <Footer />
    </div>
  );
}
