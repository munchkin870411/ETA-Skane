"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import styles from "./header.module.css";

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      {/* Bakgrundsbild */}
      <Image
        src="/pexels-photo-1824169.jpeg"
        alt="Header background"
        fill
        className="object-cover"
        priority
      />
      <div className={styles.overlay} />
      
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <div className={styles.logoWrapper}>
            <Image
              src="/pro-ALg7Xr2S-1-e1726012538431.png"
              alt="ETA Skåne Logo"
              fill
              className="object-cover"
            />
          </div>
          <h1 className={styles.logoTitle}>
            Elite Train Associates Skåne AB
          </h1>
        </div>

        {/* Mobile Menu - Hamburger */}
        <Sheet>
          <SheetTrigger className={styles.hamburger}>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </SheetTrigger>
          <SheetContent side="right" className={styles.sheetContent}>
            <SheetHeader>
              <SheetTitle className={styles.sheetTitle}>Meny</SheetTitle>
            </SheetHeader>
            <nav className={styles.mobileNav}>
              <Link 
                href="/" 
                className={`${styles.mobileNavLink} ${pathname === "/" ? styles.active : ""}`}
              >
                Hem
              </Link>
              <Link 
                href="/tjanster" 
                className={`${styles.mobileNavLink} ${pathname === "/tjanster" ? styles.active : ""}`}
              >
                Tjänster
              </Link>
              <Link 
                href="/om" 
                className={`${styles.mobileNavLink} ${pathname === "/om" ? styles.active : ""}`}
              >
                Om ETA Skåne
              </Link>
              <Link 
                href="/kontakt" 
                className={`${styles.mobileNavLink} ${pathname === "/kontakt" ? styles.active : ""}`}
              >
                Kontakt
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link 
            href="/" 
            className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
          >
            Hem
          </Link>
          <Link 
            href="/tjanster" 
            className={`${styles.navLink} ${pathname === "/tjanster" ? styles.active : ""}`}
          >
            Tjänster
          </Link>
          <Link 
            href="/om" 
            className={`${styles.navLink} ${pathname === "/om" ? styles.active : ""}`}
          >
            Om ETA Skåne
          </Link>
          <Link 
            href="/kontakt" 
            className={`${styles.navLink} ${pathname === "/kontakt" ? styles.active : ""}`}
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
