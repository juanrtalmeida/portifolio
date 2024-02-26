import Image from "next/image";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {};

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("header");
  return <div className="bg-gradient-to-tr from-primary to-secondary h-full">{t("about")}</div>;
}
