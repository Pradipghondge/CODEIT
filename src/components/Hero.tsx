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
  {
    id: 's1',
    image: '/images/hero-img-1.png',
    title: 'Customer Support',
    lineA: 'We deliver friendly, responsive support whenever you need it.Our team ensures your issues are resolved quickly and effectively.',
  },
  {
    id: 's2',
    image: '/images/hero-img-2.png',
    title: 'Exceptional Service',
    lineA: 'Experience high-quality service built around speed and accuracy.We help your business operate smoothly with reliable solutions.',
  },
  {
    id: 's3',
    image: '/images/hero-img-3.png',
    title: 'Tech Solutions',
    lineA: 'Advanced technology solutions designed for modern businesses.We optimize your systems to improve performance and efficiency.',
  },
  {
    id: 's4',
    image: '/images/hero-img-4.png',
    title: 'System Repair',
    lineA: 'Fast and dependable repair for all your system issues.We diagnose and fix problems to restore smooth operation.',
  },
  {
    id: 's5',
    image: '/images/hero-img-5.png',
    title: 'Secure Network',
    lineA: 'Protect your business with strong, modern security measures.We safeguard your data and keep your network fully secured.',
  },
];

export default function ScrollShowcase(): JSX.Element {
  // hooks always in same order
  const rootRef = useRef<HTMLElement | null>(null);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);
  const layersRef = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // helper to attach refs in map
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

    // Desktop and tablet: enable parallax + richer animations
    mm.add(
      {
        isDesktop: '(min-width: 768px)',
      },
      () => {
        // ensure any previous triggers are cleared by matchMedia revert
        sectionsRef.current.forEach((el, i) => {
          if (!el) return;

          // image entrance animation
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

          // parallax: move layer slightly with scrub
          const layer = layersRef.current[i];
          if (layer) {
            gsap.to(layer, {
              yPercent: -6 - i * 1.2,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.6,
              },
            });
          }

          // scene activation: update left text when entering center
          ScrollTrigger.create({
            trigger: el,
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () => setActiveIndex(i),
            onEnterBack: () => setActiveIndex(i),
          });
        });

        return () => {
          // matchMedia will call revert automatically on cleanup, but safe to leave empty
        };
      }
    );

    // Mobile: disable parallax, simple fades and activation
    mm.add(
      {
        isMobile: '(max-width: 767px)',
      },
      () => {
        sectionsRef.current.forEach((el, i) => {
          if (!el) return;
          gsap.fromTo(
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

          ScrollTrigger.create({
            trigger: el,
            start: 'top 60%',
            end: 'bottom 40%',
            onEnter: () => setActiveIndex(i),
            onEnterBack: () => setActiveIndex(i),
          });
        });
        return () => {
          // nothing extra
        };
      }
    );

    // revert on unmount
    return () => {
      mm.revert();
    };
  }, []); // keeps hook order stable

  // left description animation: fade/slide on change
  useEffect(() => {
    const a = rootRef.current?.querySelector('.left-a');
    const b = rootRef.current?.querySelector('.left-b');

    if (!a || !b) return;

    // small timeline for left text swap
    const tl = gsap.timeline();
    tl.to([a, b], { y: -10, autoAlpha: 0, duration: 0.25, ease: 'power1.in' })
      .call(() => {
        // content changes are controlled by React state (activeIndex)
      })
      .to([a, b], { y: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out' });

    return () => {
      tl.kill();
    };
  }, [activeIndex]); // only runs when activeIndex changes — hooks order stable

  // Render
  return (
    <section ref={rootRef} className="relative bg-slate-50">
      <div className="container mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT: Title + 2-line description that updates */}
          <div className="left-panel sticky top-32 self-start min-h-[300px] md:w-[55%]">
            <h2 className="left-main-title text-5xl md:text-6xl font-extrabold text-[#133B31] bg-clip-text mb-8">
              CODE IT
            </h2>

            <p className="left-a text-3xl font-semibold text-slate-800 mb-4">{SCENES[activeIndex].title}</p>

            <p className="left-b text-2xl text-slate-600 leading-relaxed">{SCENES[activeIndex].lineA}</p>
          </div>

          {/* RIGHT: Scenes */}
          <div className="right-panel space-y-12">
            {SCENES.map((s, i) => (
              <section
                key={s.id}
                ref={(el) => setSectionRef(el, i)}
                className="scene min-h-[70vh] md:min-h-[100vh] flex items-center justify-center"
              >
                <div className="relative w-full max-w-[720px]">
                  {/* layered background */}
                  <div
                    ref={(el) => setLayerRef(el, i)}
                    className="layer parallax-layer absolute inset-0 rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #00b89422, #00000011)',
                      transform: 'translateZ(0)',
                    }}
                    aria-hidden
                  />

                  {/* card with the image */}
                  <div className="img-wrap relative z-20 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-[360px] md:h-[420px] object-cover block"
                    />
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
