"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Magnetic hover effect ─── */
export function MagneticHover({
  children,
  className = "",
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      gsap.to(el, { x, y, duration: 0.4, ease: "power2.out" });
    }

    function onLeave() {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ─── Text reveal line by line ─── */
export function TextReveal({
  children,
  className = "",
  tag: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "div" | "span";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0 0% 0)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);

  return (
    // @ts-expect-error - dynamic tag
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

/* ─── Parallax float on scroll ─── */
export function ParallaxFloat({
  children,
  className = "",
  speed = 0.2,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.to(el, {
      y: () => speed * -100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ─── Scale up on scroll ─── */
export function ScrollScale({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { scale: 0.85, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className={`h-full ${className}`}>
      {children}
    </div>
  );
}

/* ─── Horizontal scroll-triggered slide ─── */
export function ScrollSlide({
  children,
  className = "",
  direction = "left",
  distance = 80,
}: {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right";
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const xFrom = direction === "left" ? -distance : distance;

    gsap.fromTo(
      el,
      { x: xFrom, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          once: true,
        },
      }
    );
  }, [direction, distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ─── Stagger children with GSAP ─── */
export function GsapStagger({
  children,
  className = "",
  stagger = 0.1,
  selector = ":scope > *",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  selector?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(selector);

    gsap.fromTo(
      targets,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, [stagger, selector]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ─── Rotating 3D card tilt ─── */
export function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
      gsap.to(el, {
        rotateY: x,
        rotateX: y,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 800,
      });
    }

    function onLeave() {
      gsap.to(el, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      });
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}

/* ─── Counter animation ─── */
export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(obj.val).toLocaleString()}${suffix}`;
      },
    });
  }, [value, suffix, prefix]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}

/* ─── Smooth appear from bottom (page-level) ─── */
export function PageReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.1 }
    );
  }, []);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
