// src/components/ScrollShowcase.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
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
  {
    id: 's1',
    image: '/images/hero-img-4.png',
    title: 'Software Development',
    lineA:
      'Custom enterprise software solutions\nSecure & scalable system architecture\nAPI & system integrations',
  },
  {
    id: 's2',
    image: '/images/hero-img-3.png',
    title: 'Web Development',
    lineA:
      'Responsive & high-performance web applications\nFront-end & back-end development\nPerformance optimization & security',
  },
  {
    id: 's3',
    image: '/images/hero-img-5.png',
    title: 'iOS Application Development',
    lineA:
      'Native iOS app development\nUI/UX focused design\nSecure and scalable architecture',
  },
  {
    id: 's4',
    image: '/images/hero-img-2.png',
    title: 'Application Support & Maintenance',
    lineA:
      'Application monitoring & issue resolution\nBug fixes & performance tuning\nSecurity updates & enhancements',
  },
  {
    id: 's5',
    image: '/images/hero-img-1.png',
    title: 'IT Outsourcing Services',
    lineA:
      'Dedicated development teams\nProject-based delivery models\nLong-term technology partnerships',
  },
];


export default function ScrollShowcase() {
  const rootRef = useRef<HTMLElement | null>(null);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);
  const layersRef = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const setSectionRef = (el: HTMLElement | null, i: number) => {
    sectionsRef.current[i] = el;
  };

  const setLayerRef = (el: HTMLElement | null, i: number) => {
    layersRef.current[i] = el;
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      sectionsRef.current.forEach((el, i) => {
        if (!el) return;

        gsap.fromTo(
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
            },
          }
        );

        const layer = layersRef.current[i];
        if (layer) {
          gsap.to(layer, {
            yPercent: -5 - i * 1.2,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
            },
          });
        }

        ScrollTrigger.create({
          trigger: el,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });
      });
    });

    mm.add('(max-width: 767px)', () => {
      sectionsRef.current.forEach((el) => {
        if (!el) return;

        gsap.fromTo(
          el.querySelector('.img-wrap'),
          { y: 15, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-6">

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:grid grid-cols-2 gap-16 items-start">

          {/* LEFT STATIC TEXT */}
          <div className="sticky top-24 lg:top-32 w-[55%] min-h-[300px]">
            <h2 className="text-6xl font-extrabold text-[#133B31] mb-8">
              CODEIT
            </h2>

            <p className="text-3xl font-semibold text-slate-800 mb-4">
              {SCENES[activeIndex].title}
            </p>

            <p className="text-2xl text-slate-600 leading-relaxed whitespace-pre-line">
              {SCENES[activeIndex].lineA}
            </p>

            <Link href="/services">
              <div className="mt-8 inline-block rounded-full bg-[#133B31] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-emerald-800">
                Get Started
              </div>
            </Link>
          </div>

          {/* RIGHT IMAGES */}
          <div className="space-y-12">
            {SCENES.map((s, i) => (
              <section
                key={s.id}
                ref={(el) => setSectionRef(el, i)}
                className="scene min-h-[100vh] flex items-center justify-center"
              >
                <div className="relative w-full max-w-[720px]">
                  <div
                    ref={(el) => setLayerRef(el, i)}
                    className="layer absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        'linear-gradient(135deg, #0F4F3F22, #00000011)',
                    }}
                  />

                  <div className="img-wrap relative z-20 overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-[420px] object-cover"
                    />
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="md:hidden space-y-16">
          {SCENES.map((s) => (
            <div key={s.id} className="space-y-4">
              <h3 className="text-3xl font-bold text-slate-900">
                {s.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {s.lineA}
              </p>
              <div className="relative rounded-2xl overflow-hidden shadow-md img-wrap">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
