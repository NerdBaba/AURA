"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Text, Card } from "@once-ui-system/core";
import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  image: string;
};

type GlitchCardProps = {
  project: Project;
  isActive: boolean;
};

export function GlitchCard({ project, isActive }: GlitchCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [glitch, setGlitch] = useState({ x: 0, y: 0 });
  const glitchRef = useRef<HTMLDivElement>(null);

  // Generate random glitch effect
  const glitchEffect = () => {
    if (!isHovered) return;
    
    const x = (Math.random() - 0.5) * 20;
    const y = (Math.random() - 0.5) * 20;
    setGlitch({ x, y });
    
    if (isHovered) {
      requestAnimationFrame(glitchEffect);
    }
  };

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(glitchEffect, 100);
      return () => clearInterval(interval);
    } else {
      setGlitch({ x: 0, y: 0 });
    }
  }, [isHovered]);

  return (
    <motion.div
      ref={glitchRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        x: glitch.x,
        y: glitch.y,
        filter: isHovered ? 'hue-rotate(20deg)' : 'none',
      }}
      transition={{ 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        x: { duration: 0.05 },
        y: { duration: 0.05 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        position: 'relative',
        zIndex: isActive ? 10 : 1,
        cursor: 'pointer',
      }}
    >
      <Card 
        style={{ 
          width: 360,
          overflow: 'hidden',
          position: 'relative',
          border: `1px solid ${isActive ? 'rgba(168, 85, 247, 0.5)' : 'rgba(255, 255, 255, 0.1)'}`,
          backgroundColor: isActive ? 'rgba(168, 85, 247, 0.1)' : 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
        data-hover 
        data-shadow={isActive ? 'l' : 'm'}
      >
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            style={{
              objectFit: 'cover',
              filter: isHovered ? 'contrast(1.2) saturate(1.2)' : 'none',
              transition: 'all 0.3s ease',
            }}
          />
          {isHovered && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.1), rgba(99, 102, 241, 0.1))',
              mixBlendMode: 'overlay',
              pointerEvents: 'none',
            }} />
          )}
        </div>
        <div style={{ padding: '1.5rem' }}>
          <Text 
            variant="heading-strong-m" 
            style={{
              background: 'linear-gradient(90deg, #fff, #ddd)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '0.5rem',
            }}
          >
            {project.title}
          </Text>
          <Text onBackground="neutral-medium">
            {project.description}
          </Text>
        </div>
        
        {/* Glitch overlay effect */}
        {isHovered && (
          <>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.1\'/%3E%3C/svg%3E")',
              mixBlendMode: 'overlay',
              pointerEvents: 'none',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }} />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.1), rgba(99, 102, 241, 0.1))',
              mixBlendMode: 'overlay',
              pointerEvents: 'none',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }} />
          </>
        )}
      </Card>
    </motion.div>
  );
}
