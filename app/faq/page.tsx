"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../components/i18n/language-context";
import {
  TextReveal,
  ScrollScale,
  GsapStagger,
  MagneticHover,
  PageReveal,
} from "../components/gsap-effects";

/* ─── FAQ Data ─── */
const faqItems = [
  {
    question: "What exactly is Sythio?",
    answer:
      "Sythio is an audio intelligence platform that transforms your recordings into structured, actionable output. Unlike simple transcription tools, Sythio understands context, detects speakers, and generates multiple output formats from a single recording — summaries, tasks, action plans, reports, messages, study notes, and more.",
  },
  {
    question: "How does speaker detection work?",
    answer:
      "Sythio automatically identifies when different people are speaking in a recording. It separates voices, attributes statements to the correct speaker, and uses that context to create smarter outputs — like assigning tasks to the person who volunteered, or noting who made a specific decision. You can also rename detected speakers with real names for even clearer results.",
  },
  {
    question: "What output modes are available?",
    answer:
      "Sythio offers 9 output modes: Summary (concise overview), Key Points (essential facts), Tasks (action items with owners), Action Plan (step-by-step next steps), Clean Text (polished transcription), Executive Report (presentation-ready document), Ready-to-Send Message (follow-up drafts), Study Notes (organized by topic), and Ideas (categorized brainstorming output). You can generate any or all of these from the same recording.",
  },
  {
    question: "How is Sythio different from transcription services?",
    answer:
      "Transcription gives you a wall of text — essentially a written version of what was said. Sythio goes far beyond that. It understands the meaning of conversations and transforms them into useful formats. Instead of reading through 45 minutes of transcript, you get a structured summary, a task list, and a follow-up message — all generated automatically from the same audio.",
  },
  {
    question: "Is my audio data private and secure?",
    answer:
      "Absolutely. Privacy is a core principle at Sythio. Your audio is processed to help you, never to train models or share with third parties. Audio data is encrypted in transit and at rest. We follow strict data protection practices, and you maintain full ownership of everything you record and generate.",
  },
  {
    question: "What audio formats does Sythio support?",
    answer:
      "Sythio supports all common audio formats including MP3, WAV, M4A, AAC, OGG, FLAC, and WebM. You can also record directly within the app, which automatically uses an optimal format. There is no need to convert files before uploading.",
  },
  {
    question: "Can Sythio handle long recordings?",
    answer:
      "Yes. Sythio is designed to handle recordings of any practical length — from 30-second voice memos to multi-hour meetings and lectures. Processing time scales with recording length, but Pro and Premium plans include priority processing for faster results on longer files.",
  },
  {
    question: "What are the best use cases for Sythio?",
    answer:
      "Sythio works beautifully for team meetings (summaries + tasks), client calls (documentation + follow-ups), brainstorming sessions (idea capture + organization), lectures and workshops (study notes), voice memos (clean text + task extraction), and any situation where spoken information needs to become structured, shareable output.",
  },
  {
    question: "Can I export and share my outputs?",
    answer:
      "Yes. All outputs can be copied, exported as text, PDF, or Markdown, and shared directly. Pro and Premium plans unlock all export formats. Whether you need to paste a summary into Slack, email a report, or save tasks to your project management tool — Sythio makes it seamless.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Sythio offers three plans: Free ($0/month) with 5 recordings and 3 output formats, Pro ($12/month) with unlimited recordings and all features, and Premium ($29/month) with team workspace, custom templates, and API access. You can start free with no credit card required and upgrade at any time.",
  },
];

/* ─── Accordion Item ─── */
function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-border-light last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-7 text-left group"
      >
        <span className="text-base md:text-lg font-medium text-foreground group-hover:text-accent-muted transition-colors pr-8 leading-snug">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="text-muted shrink-0 w-8 h-8 rounded-full border border-border-light flex items-center justify-center group-hover:border-border transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 text-sm md:text-base text-muted leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── FAQ Page ─── */
export default function FAQPage() {
  const { s } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const relatedLinks = [
    { href: "/product", label: "Explore the Product" },
    { href: "/features", label: "See All Features" },
    { href: "/pricing", label: "View Pricing" },
  ];

  return (
    <PageReveal>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-indigo-50/30 via-violet-50/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-light mb-6 block">
              {s("faq.hero.label")}
            </span>
            <TextReveal
              tag="h1"
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
            >
              {s("faq.hero.title")}
            </TextReveal>
            <TextReveal
              tag="p"
              className="mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-xl mx-auto"
            >
              {s("faq.hero.subtitle")}
            </TextReveal>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-32 md:pb-44 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-background rounded-3xl border border-border-light p-8 lg:p-12">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <TextReveal
              tag="h2"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
            >
              Want to learn more?
            </TextReveal>
          </div>
          <GsapStagger
            className="grid sm:grid-cols-3 gap-4"
            stagger={0.08}
          >
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-center gap-2 p-6 rounded-2xl bg-white border border-border-light hover:border-border hover:shadow-[0_4px_16px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500 text-center"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-accent-muted transition-colors">
                  {link.label}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted group-hover:translate-x-1 transition-transform duration-300"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            ))}
          </GsapStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-50/40 via-violet-50/30 to-purple-50/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <TextReveal
              tag="h2"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
            >
              {s("cta.title1")}
              <br />
              {s("cta.title2")}
            </TextReveal>
            <TextReveal
              tag="p"
              className="mt-7 text-lg md:text-xl text-muted max-w-xl mx-auto leading-relaxed"
            >
              {s("cta.subtitle")}
            </TextReveal>
            <div className="mt-12">
              <MagneticHover>
                <Link
                  href="#"
                  className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-foreground text-white text-base font-medium hover:bg-accent-muted transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_12px_32px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
                >
                  {s("cta.button")}
                </Link>
              </MagneticHover>
              <p className="mt-6 text-sm text-muted">{s("cta.free")}</p>
            </div>
          </div>
        </div>
      </section>
    </PageReveal>
  );
}
