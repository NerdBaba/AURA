'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArchiveDecorativeElements } from './ArchiveDecorativeElements';
gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: 'Crimson & Clover', image: 'https://raw.githubusercontent.com/codrops/ImageStackGrid/main/assets/images/1.jpg' },
  { title: 'Ebony & Ivory', image: 'https://raw.githubusercontent.com/codrops/ImageStackGrid/main/assets/images/2.jpg' },
  { title: 'Golden Hour', image: 'https://raw.githubusercontent.com/codrops/ImageStackGrid/main/assets/images/3.jpg' },
  { title: 'Oceanic Dreams', image: 'https://raw.githubusercontent.com/codrops/ImageStackGrid/main/assets/images/4.jpg' },
  { title: 'Urban Canvas', image: 'https://raw.githubusercontent.com/codrops/ImageStackGrid/main/assets/images/5.jpg' },
  { title: 'Desert Mirage', image: 'https://raw.githubusercontent.com/codrops/ImageStackGrid/main/assets/images/6.jpg' },
];

export default function ArchiveGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip during SSR
    if (typeof window === 'undefined') return;
    
    const initGallery = async () => {
      try {
        // Dynamically import Splitting to avoid SSR issues
        const Splitting = (await import('splitting')).default;
        
        // Initialize Splitting
        Splitting();
        document.body.classList.remove('loading');
        
        // Wait briefly for DOM to settle
        await new Promise(resolve => setTimeout(resolve, 50));
        
        // GSAP animation setup
        const items = galleryRef.current?.querySelectorAll('.gallery__item');
        if (!items || items.length === 0) return;
        
        const timeline = gsap.timeline();
        
        // Initial stack position
        items.forEach((item, i) => {
          const img = item.querySelector('.gallery__item-img');
          if (!img) return;
          
          const rect = img.getBoundingClientRect();
          timeline.set(img, {
            x: window.innerWidth / 2 - rect.left - rect.width / 2,
            y: window.innerHeight / 2 - rect.top - rect.height / 2,
            scale: 0.6,
            rotation: 0,
            opacity: 1,
            delay: 0.2 * i,
          }, 0);
        });
        
        timeline.addLabel('start', '+=0.5')
          .to([...items], { 
            x: 0, 
            y: 0, 
            scale: 1, 
            rotation: 0, 
            opacity: 1, 
            duration: 1 
          }, 'start');
        
        // Parallax text on scroll - only create if elements exist
        const titles = document.querySelectorAll('.gallery__item-title');
        if (titles.length > 0) {
          titles.forEach((el: any) => {
            const speed = parseFloat(el.dataset.scrollSpeed) || 1;
            gsap.to(el, {
              yPercent: speed * 100,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            });
          });
        }

        // Parallax images on scroll
        const images = galleryRef.current?.querySelectorAll('.gallery__item-imginner');
        if (images && images.length > 0) {
          images.forEach((el: any) => {
            const speed = parseFloat(el.dataset.scrollSpeed) || 1;
            gsap.to(el, {
              yPercent: speed * 100,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            });
          });
        }

        // Refresh ScrollTrigger to recalculate positions
        ScrollTrigger.refresh();
      } catch (error) {
        console.error('Error initializing gallery:', error);
      }
    };
    
    initGallery();
    
    return () => {
      // Cleanup GSAP instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main data-scroll-container>
      <ArchiveDecorativeElements />
      <div className="frame">
        <h1 className="frame__title">Archive</h1>
      </div>
      <h2 className="title" data-splitting>Collection</h2>
      <div ref={galleryRef} className="gallery">
        {projects.map((project, idx) => (
          <figure key={idx} className="gallery__item">
            <div className="gallery__item-img">
              <div
                className="gallery__item-imginner"
                style={{ backgroundImage: `url(${project.image})` }}
                data-scroll-speed="1"
              />
            </div>
            <figcaption className="gallery__item-caption">
              <h2 className="gallery__item-title" 
                  data-splitting 
                  data-scroll 
                  data-scroll-speed="2">
                {project.title}
              </h2>
              <span className="gallery__item-number">0{idx + 1}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <svg className="cursor" width="30" height="30" viewBox="0 0 30 30">
        <circle className="cursor__inner" cx="15" cy="15" r="7.5" />
      </svg>
    </main>
  );
}
