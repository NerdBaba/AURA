"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  description: string;
  image: string;
  bgColor?: string;
};

type ScrollBackgroundProps = {
  projects: Project[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
};

export function ScrollBackground({ projects, activeIndex, onIndexChange }: ScrollBackgroundProps) {
  const bgRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Update refs array
  const setBgRef = (el: HTMLDivElement | null, index: number) => {
    bgRefs.current[index] = el;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Create a timeline for the background transitions
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          // Calculate which project should be active based on scroll progress
          const sections = projects.length;
          const progressPerSection = 1 / sections;
          const activeSection = Math.min(
            Math.floor(self.progress / progressPerSection),
            sections - 1
          );
          
          if (activeSection !== activeIndex) {
            onIndexChange(activeSection);
          }
        },
      },
    });

    // Set initial state
    bgRefs.current.forEach((bg, i) => {
      if (!bg) return;
      
      gsap.set(bg, {
        opacity: i === 0 ? 1 : 0,
        scale: 1.1,
        filter: 'blur(5px)',
      });

      // Add to timeline
      tl.to(
        bg,
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1,
        },
        i * (1 / projects.length)
      ).to(
        bg,
        {
          opacity: 0,
          scale: 1.1,
          filter: 'blur(5px)',
          duration: 1,
        },
        (i + 1) * (1 / projects.length)
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [projects.length, activeIndex, onIndexChange]);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {projects.map((project, i) => (
        <div
          key={project.title}
          ref={el => setBgRef(el, i)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: i === 0 ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            zIndex: 1,
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 2,
            }}
          />
        </div>
      ))}
    </div>
  );
}
