'use client'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ArchiveDecorativeElements() {
  useEffect(() => {
    // Animate floating elements
    gsap.to('.floating-element', {
      y: '+=20',
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      stagger: {
        amount: 2
      }
    });

    // Rotate elements on scroll
    gsap.utils.toArray('.rotate-on-scroll').forEach((el: any) => {
      gsap.to(el, {
        rotation: 360,
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });
  }, []);

  return (
    <>
      {/* Asymmetric grid background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(17, 24, 39, 0.7) 1px, transparent 1px),
          linear-gradient(90deg, rgba(17, 24, 39, 0.7) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 20px 20px',
        opacity: 0.1,
        zIndex: 999,
      }} />

      {/* Floating elements */}
      <div className="floating-element" style={{
        position: 'fixed',
        top: '15%',
        right: '5%',
        width: '200px',
        height: '200px',
        borderRadius: '40% 60% 60% 40% / 70% 30% 70% 30%',
        background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
        filter: 'blur(40px)',
        zIndex: 999,
      }} />

      <div className="floating-element" style={{
        position: 'fixed',
        bottom: '10%',
        left: '8%',
        width: '300px',
        height: '300px',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(99, 102, 241, 0.1))',
        filter: 'blur(50px)',
        zIndex: 999,
      }} />

      {/* Decorative shapes */}
      <div className="rotate-on-scroll" style={{
        position: 'fixed',
        top: '70%',
        right: '20%',
        width: '100px',
        height: '100px',
        border: '2px dashed rgba(168, 85, 247, 0.3)',
        borderRadius: '20px',
        transform: 'rotate(45deg)',
        zIndex: 999,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'fixed',
        top: '20%',
        left: '15%',
        width: '50px',
        height: '50px',
        background: 'rgba(99, 102, 241, 0.1)',
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        transform: 'rotate(15deg)',
        zIndex: 999,
      }} />

      {/* Connecting lines */}
      <svg style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 999 }}>
        <line 
          x1="15%" 
          y1="30%" 
          x2="30%" 
          y2="50%" 
          stroke="rgba(168, 85, 247, 0.2)" 
          strokeWidth="1" 
          strokeDasharray="5,5"
        />
        <line 
          x1="85%" 
          y1="70%" 
          x2="70%" 
          y2="40%" 
          stroke="rgba(99, 102, 241, 0.2)" 
          strokeWidth="1" 
          strokeDasharray="3,3"
        />
      </svg>

      {/* Floating circle */}
      <div style={{
        position: 'fixed',
        bottom: '20%',
        right: '5%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        border: '1px solid rgba(168, 85, 247, 0.1)',
        zIndex: 999,
        pointerEvents: 'none',
      }} />

      {/* Glow effects */}
      <div style={{
        position: 'fixed',
        top: '10vh',
        right: '10vw',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(20px)',
        zIndex: 999,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'fixed',
        bottom: '15vh',
        left: '10vw',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(25px)',
        zIndex: 999,
        pointerEvents: 'none',
      }} />
    </>
  );
}
