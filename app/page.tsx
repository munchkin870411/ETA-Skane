import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Om Oss Section */}
      <section className={styles.omOssSection}>
        <div className={styles.container}>
          
          <div className={styles.tjansterHeader}>
            <div>
              <h3 className={styles.omOssTitle}>
                Vår unika historia och passion
              </h3>
            </div>
            <Button 
              size="lg"
              className="bg-blue-900 text-white hover:bg-blue-700 px-8 py-6 text-base font-semibold rounded-full"
              asChild
            >
              <a href="/om">LÄS MER</a>
            </Button>
          </div>

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
              asChild
            >
              <a href="/tjanster">LÄS MER</a>
            </Button>
          </div>

          <div className={styles.tjansterGrid}>
            {/* Tjänst 1 */}
            <a href="/tjanster" className={styles.tjanstCard}>
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
            </a>

            {/* Tjänst 2 */}
            <a href="/tjanster" className={styles.tjanstCard}>
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
            </a>

            {/* Tjänst 3 */}
            <a href="/tjanster" className={styles.tjanstCard}>
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
            </a>
          </div>
        </div>
      </section>

      {/* Spacer Section */}
      <section className={styles.spacerSection}></section>

      <Footer />
    </div>
  );
}
