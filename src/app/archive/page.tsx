'use client';

import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArchiveSlide, { ArchiveItem } from '@/components/ArchiveSlide';
import { ArchiveDecorativeElements } from '@/components/ArchiveDecorativeElements';
import '@/resources/archive.css';

const archiveItems: ArchiveItem[] = [
  { id: 1, title: 'Echoes of the Past', description: 'A forgotten memory, unearthed from the digital dust.', date: '2023-01-15', imageUrl: 'https://picsum.photos/id/274/3824/2520.jpg' },
  { id: 2, title: 'Fragmented Visions', description: 'Glimpses of a future that never was.', date: '2022-11-01', imageUrl: 'https://images.unsplash.com/photo-1630420897767-c49c43ef2c1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWVzdGhldGljJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 3, title: 'The Silent Code', description: 'An algorithm that once hummed, now still.', date: '2024-03-20', imageUrl: 'https://images.unsplash.com/photo-1745219356183-cc7a7c0cd2bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFlc3RoZXRpYyUyMGZhc2hpb258ZW58MHwxfDB8fHwy' },
  { id: 4, title: 'Whispers from the Void', description: 'Unsent messages from a parallel dimension.', date: '2021-07-07', imageUrl: 'https://images.unsplash.com/photo-1624407302982-3d99224f6a99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFlc3RoZXRpYyUyMGZhc2hpb258ZW58MHwxfDB8fHwy' },
  { id: 5, title: 'Digital Relics', description: 'Scanned remnants of a lost era.', date: '2023-09-10', imageUrl: 'https://images.unsplash.com/photo-1655562135011-6285c6e75985?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFlc3RoZXRpYyUyMGZhc2hpb258ZW58MHwxfDB8fHwy' },
  { id: 6, title: 'Forgotten Algorithms', description: 'The ghost in the machine.', date: '2020-05-12', imageUrl: 'https://images.unsplash.com/photo-1630420897833-1d453402f4a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGFlc3RoZXRpYyUyMGZhc2hpb258ZW58MHwxfDB8fHwy' },
  { id: 7, title: 'Quantum Entanglement', description: 'Threads of destiny, intertwined.', date: '2024-01-01', imageUrl: 'https://images.unsplash.com/photo-1567090719721-4f7e824fa7df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGFlc3RoZXRpYyUyMGZhc2hpb258ZW58MHwxfDB8fHwy' },
  { id: 8, title: 'Stardust Memories', description: 'Cosmic dust, eternal echoes.', date: '2019-08-23', imageUrl: 'https://images.unsplash.com/photo-1711708406805-c72070433802?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFlc3RoZXRpYyUyMGZhc2hpb258ZW58MHwxfDB8fHwy' },
  { id: 9, title: 'Ephemeral Dreams', description: 'Visions fading with the dawn.', date: '2022-02-14', imageUrl: 'https://images.unsplash.com/photo-1745219499842-1a5b045b8adc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFlc3RoZXRpYyUyMGZhc2hpb258ZW58MHwxfDB8fHwy' },
  { id: 10, title: 'Chronos Fragments', description: 'Time\'s broken pieces, scattered.', date: '2023-06-01', imageUrl: 'https://images.unsplash.com/photo-1651782560763-12d32c36515f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxhZXN0aGV0aWMlMjBmYXNoaW9ufGVufDB8MXwwfHx8Mg%3D%3D' },
];

export default function ArchivePage() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    gsap.registerPlugin(ScrollTrigger);
    const slides = gsap.utils.toArray('.gallery__item') as HTMLElement[];
    // Initial stack
    gsap.set(slides, { y: 100, scale: 0.8, opacity: 0 });
    // Intro animation
    gsap.to(slides, {
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2,
      onComplete: () => {
        slides.forEach((slide: HTMLElement) => {
          gsap.to(slide.querySelector('.gallery__item-img'), {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: slide,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
          gsap.to(slide.querySelector('.gallery__item-caption'), {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: slide,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });
        });
      },
    });
  });

    return () => ctx.revert();
  }, []);

  return (
    <div className="archive-wrapper">
      <h1 className="archive-title">THE ARCHIVE</h1>
      <div className="archive-decorations">
        <ArchiveDecorativeElements />
      </div>
      {archiveItems.map(item => (
        <ArchiveSlide key={item.id} item={item} />
      ))}
    </div>
  );
}