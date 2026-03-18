import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logga in",
  description: "Logga in på ditt konto hos ETA Skåne AB.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
