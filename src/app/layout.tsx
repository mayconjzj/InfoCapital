import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "InfoCapital — Informação que move o mercado",
    template: "%s | InfoCapital",
  },
  description:
    "Notícias, análises e contexto sobre economia, empresas, política e investimentos no Brasil.",
  applicationName: "InfoCapital",
  keywords: [
    "mercado financeiro",
    "economia brasileira",
    "ações",
    "empresas",
    "investimentos",
    "política econômica",
  ],
  openGraph: {
    title: "InfoCapital — Informação que move o mercado",
    description:
      "O que acontece na economia, nas empresas e na política — explicado para quem investe.",
    type: "website",
    locale: "pt_BR",
    siteName: "InfoCapital",
  },
};

export const viewport: Viewport = {
  themeColor: "#102b43",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
