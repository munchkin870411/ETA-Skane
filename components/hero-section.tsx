import Image from "next/image";
import { Button } from "@/components/ui/button";
import styles from "./hero-section.module.css";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  showButton?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  buttonText = "KONTAKTA OSS",
  buttonLink = "/kontakt",
  showButton = false,
}: HeroSectionProps) {
  return (
    <section className={styles.section}>
      {/* Bakgrundsbild - alltid samma */}
      <Image
        src="/pexels-photo-1824169.jpeg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h2 className={styles.title}>
          {title}
        </h2>
        <p className={styles.subtitle}>
          {subtitle}
        </p>
        {showButton && (
          <Button
            size="lg"
            className="bg-white text-blue-800 hover:bg-white/90 px-8 py-6 text-base font-semibold rounded-full"
            asChild
          >
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        )}
      </div>
    </section>
  );
}
