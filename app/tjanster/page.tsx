import Image from "next/image";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import styles from "./page.module.css";

export default function TjansterPage() {
  return (
    <div className={styles.page}>
      <Header />

      <HeroSection
        title="Våra Tjänster"
        subtitle="Expertis och lösningar för alla dina tågunderhållsbehov"
      />

      {/* Tjänster Section */}
      <section className={styles.tjansterSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              Våra huvudtjänster
            </h2>
            <p className={styles.subtitle}>
              Våra huvudsakliga tjänster för din framgång
            </p>
          </div>

          <div className={styles.grid}>
            {/* Tjänst 1 - Teknisk Rådgivning */}
            <div className={styles.serviceCard}>
              <Image
                src="/pro-kgKlAj8B.jpeg"
                alt="Teknisk Rådgivning"
                fill
                className="object-cover"
              />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  Teknisk Rådgivning
                </h3>
                <p className={styles.cardDescription}>
                  Rådgivning om bästa praxis för underhåll och felsökning.
                </p>
              </div>
            </div>

            {/* Tjänst 2 - Tågunderhåll */}
            <div className={styles.serviceCard}>
              <Image
                src="/pro-tUbcFWsk.jpeg"
                alt="Tågunderhåll"
                fill
                className="object-cover"
              />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  Tågunderhåll
                </h3>
                <p className={styles.cardDescription}>
                  Regelbundet och omfattande underhåll för att säkerställa att alla tåg är i toppskick och redo att möta dagens transportutmaningar.
                </p>
              </div>
            </div>

            {/* Tjänst 3 - Förebyggande Underhåll */}
            <div className={styles.serviceCard}>
              <Image
                src="/pro-q1n3xa89-768x1024.jpeg"
                alt="Förebyggande Underhåll"
                fill
                className="object-cover"
              />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  Förebyggande Underhåll
                </h3>
                <p className={styles.cardDescription}>
                  Planering och genomförande av underhåll för att förlänga komponenternas livslängd. Uppdateringar och förbättringar för optimal prestanda.
                </p>
              </div>
            </div>

            {/* Tjänst 4 - Avancerad Diagnostik */}
            <div className={styles.serviceCard}>
              <Image
                src="/pro-RTaibBoU_square-1024x1024.jpg"
                alt="Avancerad Diagnostik"
                fill
                className="object-cover"
              />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  Avancerad Diagnostik
                </h3>
                <p className={styles.cardDescription}>
                  Användning av avancerad diagnostisk utrustning för att identifiera fel exakt.
                </p>
              </div>
            </div>

            {/* Tjänst 5 - Regelbundna Inspektioner */}
            <div className={styles.serviceCard}>
              <Image
                src="/pro-T03GMZma-1.jpeg"
                alt="Regelbundna Inspektioner"
                fill
                className="object-cover"
              />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  Regelbundna Inspektioner
                </h3>
                <p className={styles.cardDescription}>
                  Kompletta lösningar för tågoperatörer, inklusive bemanning, utbildning och driftstöd.
                </p>
              </div>
            </div>

            {/* Tjänst 6 - Akut Felsökning och Reparation */}
            <div className={styles.serviceCard}>
              <Image
                src="/pro-tA4FKtiR-1024x768.jpeg"
                alt="Akut Felsökning och Reparation"
                fill
                className="object-cover"
              />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  Akut Felsökning och Reparation
                </h3>
                <p className={styles.cardDescription}>
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
