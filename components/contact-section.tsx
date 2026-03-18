import Image from "next/image";
import { Button } from "@/components/ui/button";
import styles from "./contact-section.module.css";

export function ContactSection() {
  return (
    <section className={styles.section}>
      {/* Background image */}
      <Image
        src="/pro-T03GMZma-1.jpeg"
        alt="Railway background"
        fill
        className="object-cover"
      />
      <div className={styles.overlay} />

      <div className={styles.container}>
        <h3 className={styles.heading}>Ta nästa steg tillsammans med oss</h3>
        <p className={styles.description}>
          Kontakta oss idag för att uppleva skillnaden med Elite Train
          Associates Skåne AB.
        </p>
        <Button
          size="lg"
          className="rounded-full bg-white px-10 py-7 text-base font-semibold text-blue-600 hover:bg-white/90"
          asChild
        >
          <a href="/kontakt">KONTAKTA OSS</a>
        </Button>
      </div>
    </section>
  );
}
