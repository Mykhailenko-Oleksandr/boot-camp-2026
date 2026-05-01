import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Головна сторінка Держстат | Державна служба статистики України",
  description:
    "Держстат — офіційний сайт Державної Служби Статистики України. Зручний доступ до статистичної інформації.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className="">
      <body>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
