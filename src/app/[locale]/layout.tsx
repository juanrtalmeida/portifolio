import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["300", "700"], subsets: ["latin"] });

const locales = ["en", "pt"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ locale }: { locale: string }): Promise<Metadata> {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "metadata" });
  console.log(t("title"));
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className={poppins.className + "h-full"}>{children}</body>
    </html>
  );
}
