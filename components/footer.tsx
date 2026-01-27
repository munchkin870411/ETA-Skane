import Image from "next/image";
import { Button } from "@/components/ui/button";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Background image */}
      <Image
        src="/pro-T03GMZma-1.jpeg"
        alt="Railway background"
        fill
        className="object-cover"
      />
      <div className={styles.overlay} />
      
      <div className={styles.container}>
        {/* Footer Grid */}
        <div className={styles.grid}>

          {/* Kontaktuppgifter */}
          <div>
            <h3 className={styles.columnTitle}>Kontakt</h3>
            <div className={styles.contactInfo}>
              <p>Adress: Skåne, Sverige</p>
              <p>E-post: info@etaskane.se</p>
              <p>Telefon: +46 (0)XX XXX XX XX</p>
            </div>
          </div>

          {/* Öppettider */}
          <div>
            <h3 className={styles.columnTitle}>Öppettider</h3>
            <div className={styles.contactInfo}>
              <p>Måndag - Fredag: 08:00 - 17:00</p>
              <p>Lördag - Söndag: Stängt</p>
            </div>
          </div>

          {/* CTA Column */}
          <div>
            <h3 className={styles.ctaTitle}>
              Ta nästa steg tillsammans med oss!
            </h3>
            <Button 
              size="lg"
              className="bg-white text-blue-900 hover:bg-white/90 px-6 py-3 text-sm font-semibold rounded-full"
              asChild
            >
              <a href="/kontakt">KONTAKTA OSS</a>
            </Button>
          </div>
        </div>

        <div className={styles.divider}>
          <p className={styles.copyright}>
            Upphovsrätt © 2025 Elite Train Associates Skåne AB
          </p>
        </div>
      </div>
    </footer>
  );
}
