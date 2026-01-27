import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "./page.module.css";

export default function OmPage() {
  return (
    <div className={styles.page}>
      <Header />


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

      {/* Vision & Team Section */}
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
                Vårt Team
              </h3>
              <p className={styles.textContentNoMargin}>
                Vårt team består av erfarna och högt kvalificerade tekniker, ingenjörer och järnvägsexperter som alla delar en passion för tåg och transport. Vi är stolta över att erbjuda en arbetsmiljö som främjar innovation och ständig förbättring.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
