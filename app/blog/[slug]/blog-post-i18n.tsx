"use client";

import { useLanguage } from "../../components/i18n/language-context";
import type { Locale } from "../../components/i18n/translations";
import { BreadcrumbSchema } from "../../components/json-ld";

const content: Record<Locale, {
  home: string;
  blog: string;
  backToAll: string;
  sythioTeam: string;
  keepReading: string;
}> = {
  en: {
    home: "Home",
    blog: "Blog",
    backToAll: "Back to all articles",
    sythioTeam: "Sythio Team",
    keepReading: "Keep reading",
  },
  es: {
    home: "Inicio",
    blog: "Blog",
    backToAll: "Volver a todos los artículos",
    sythioTeam: "Equipo Sythio",
    keepReading: "Sigue leyendo",
  },
  fr: {
    home: "Accueil",
    blog: "Blog",
    backToAll: "Retour aux articles",
    sythioTeam: "Équipe Sythio",
    keepReading: "Continuer la lecture",
  },
  pt: {
    home: "Início",
    blog: "Blog",
    backToAll: "Voltar para todos os artigos",
    sythioTeam: "Equipe Sythio",
    keepReading: "Continue lendo",
  },
  it: {
    home: "Home",
    blog: "Blog",
    backToAll: "Torna a tutti gli articoli",
    sythioTeam: "Team Sythio",
    keepReading: "Continua a leggere",
  },
};

export function BackToArticles() {
  const { locale } = useLanguage();
  const c = content[locale] || content.en;
  return <>{c.backToAll}</>;
}

export function SythioTeamLabel() {
  const { locale } = useLanguage();
  const c = content[locale] || content.en;
  return <>{c.sythioTeam}</>;
}

export function KeepReadingHeading() {
  const { locale } = useLanguage();
  const c = content[locale] || content.en;
  return <>{c.keepReading}</>;
}

export function TranslatedBreadcrumb({ postTitle, postSlug }: { postTitle: string; postSlug: string }) {
  const { locale } = useLanguage();
  const c = content[locale] || content.en;
  return (
    <BreadcrumbSchema
      items={[
        { name: c.home, href: "/" },
        { name: c.blog, href: "/blog" },
        { name: postTitle, href: `/blog/${postSlug}` },
      ]}
    />
  );
}
