// src/components/ScrollShowcase.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Scene = {
  id: string;
  image: string;
  title: string;
  lineA: string;
};

const SCENES: Scene[] = [
  { id: 's1', image: '/images/hero-img-1.png', title: 'IT Outsourcing', lineA: 'Scale your business with cost-effective, high-quality execution through dedicated development teams and end-to-end project delivery.' },
  { id: 's2', image: '/images/hero-img-2.png', title: 'Application Support', lineA: 'Ensure smooth application performance every hour, every day with 24/7 monitoring, rapid incident resolution, root-cause analysis, and preventive optimization.' },
  { id: 's3', image: '/images/hero-img-3.png', title: 'Recruitment Services', lineA: 'Hire the right talent faster and smarter with specialized sourcing, technical screening, bulk and niche hiring, and seamless onboarding coordination.' },
  { id: 's4', image: '/images/hero-img-4.png', title: 'Why Choose Code IT Pvt. Ltd.?', lineA: 'Delivering professional expertise and industry experience with high response efficiency, strict SLAs, transparent communication, quality delivery, and measurable, client-centric outcomes.' },
  { id: 's5', image: '/images/hero-img-5.png', title: 'Professional expertise & industry experience', lineA: 'Professional expertise and industry experience with scalable teams and continuous improvement using modern tools and best practices.' },
];

export default function ScrollShowcase() {
  const rootRef = useRef<HTMLElement | null>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const layersRef = useRef<HTMLElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const setSectionRef = (el: HTMLElement | null, i: number) => {
    if (el) sectionsRef.current[i] = el;
  };
  const setLayerRef = (el: HTMLElement | null, i: number) => {
    if (el) layersRef.current[i] = el;
  };

  // GSAP + ScrollTrigger setup
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const triggers: ScrollTrigger[] = [];

    const mm = gsap.matchMedia();

    // Desktop animations
    mm.add("(min-width: 768px)", () => {
      sectionsRef.current.forEach((el, i) => {
        if (!el) return;

        const imgTrigger = gsap.fromTo(
          el.querySelector('.img-wrap'),
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 70%',
              end: 'bottom 30%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
        triggers.push(imgTrigger.scrollTrigger!);

        const layer = layersRef.current[i];
        if (layer) {
          const t = gsap.to(layer, {
            yPercent: -6 - i * 1.2,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            }
          });
          triggers.push(t.scrollTrigger!);
        }

        triggers.push(ScrollTrigger.create({
          trigger: el,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        }));
      });
    });

    // Mobile animations
    mm.add("(max-width: 767px)", () => {
      sectionsRef.current.forEach((el, i) => {
        if (!el) return;

        const t = gsap.fromTo(
          el.querySelector('.img-wrap'),
          { y: 12, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
        triggers.push(t.scrollTrigger!);

        triggers.push(ScrollTrigger.create({
          trigger: el,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        }));
      });
    });

    return () => {
      triggers.forEach((t) => t?.kill());
      mm.revert();
    };
  }, []);

  // left text swap animation
  useEffect(() => {
    const a = rootRef.current?.querySelector('.left-a');
    const b = rootRef.current?.querySelector('.left-b');
    if (!a || !b) return;

    const tl = gsap.timeline();
    tl.to([a, b], { y: -10, autoAlpha: 0, duration: 0.25, ease: 'power1.in' })
      .to([a, b], { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out' });

    return () => tl.kill();
  }, [activeIndex]);

  return (
    <section ref={rootRef} className="relative bg-slate-50">
      <div className="container mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="left-panel sticky top-32 self-start min-h-[300px] md:w-[55%]">
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#133B31] mb-8">CODE IT</h2>
            <p className="left-a text-3xl font-semibold text-slate-800 mb-4">{SCENES[activeIndex].title}</p>
            <p className="left-b text-2xl text-slate-600 leading-relaxed">{SCENES[activeIndex].lineA}</p>
          </div>

          {/* RIGHT */}
          <div className="right-panel space-y-12">
            {SCENES.map((s, i) => (
              <section
                key={s.id}
                ref={(el) => setSectionRef(el, i)}
                className="scene min-h-[70vh] md:min-h-[100vh] flex items-center justify-center"
              >
                <div className="relative w-full max-w-[720px]">
                  <div
                    ref={(el) => setLayerRef(el, i)}
                    className="layer absolute inset-0 rounded-2xl"
                    style={{ background: 'linear-gradient(135deg, #00b89422, #00000011)' }}
                  />
                  <div className="img-wrap relative z-20 rounded-2xl overflow-hidden shadow-lg">
                    <img src={s.image} alt={s.title} className="w-full h-[360px] md:h-[420px] object-cover" />
                  </div>
                </div>
              </section>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
