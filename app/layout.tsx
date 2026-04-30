import type { Metadata } from "next";
import "./globals.css";

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
      className={"h-full antialiased"}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
