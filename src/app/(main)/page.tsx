"use client";

import React, { useEffect, useState } from 'react';
import { Column, Heading, Text, Row } from "@once-ui-system/core";
import { DecorativeElements } from "@/components/DecorativeElements";

type SpacingToken = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | '10xl' | '11xl' | '12xl' | '13xl' | '14xl' | '15xl' | '16xl' | '17xl' | '18xl' | '19xl' | '20xl';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export default function Home() {
  const isMobile = useIsMobile();
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <DecorativeElements />
      <Column 
        as="main" 
        fillWidth 
        padding={isMobile ? 'm' : 'xl'}
        gap={isMobile ? 'm' : 'xl'}
        style={{ 
          minHeight: 'calc(100vh - 80px)',
          position: 'relative',
          zIndex: 2,
          paddingTop: isMobile ? '80px' : '120px',
          paddingBottom: isMobile ? '100px' : 'xl',
        }}
      >
        <Column 
          fillWidth 
          gap={isMobile ? 'l' : 'xl'}
          style={{ 
            flexGrow: 1,
            position: 'relative',
            maxWidth: '100%',
          }}
        >
          {/* Main Heading Section */}
          <Column gap={isMobile ? 's' : 'm'} style={{ maxWidth: '100%' }}>
            <div style={{ 
              position: 'relative',
              marginLeft: isMobile ? '1.5rem' : '0'
            }}>
              <Heading 
                variant={isMobile ? 'display-strong-l' : 'display-strong-xl'}
                as="h1" 
                onBackground="neutral-strong" 
                style={{
                  position: 'relative',
                  zIndex: 1,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: isMobile ? '0.5rem' : '1rem',
                  fontSize: isMobile ? '3rem' : '4.5rem',
                  lineHeight: 1,
                  wordBreak: 'break-word',
                }}
              >
                AURA
              </Heading>
              {!isMobile && (
                <div style={{
                  position: 'absolute',
                  left: '-2rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  height: '80%',
                  width: '4px',
                  background: 'linear-gradient(to bottom, rgba(168, 85, 247, 0.8), transparent)',
                  borderRadius: '2px',
                }} />
              )}
            </div>
            
            <div style={{ 
              position: 'relative',
              marginLeft: isMobile ? '1.5rem' : '2rem',
              marginBottom: isMobile ? '1.5rem' : '2rem'
            }}>
              <Heading 
                variant={isMobile ? 'display-default-l' : 'display-default-xl'}
                as="h2" 
                onBackground="neutral-strong" 
                style={{
                  fontWeight: 300,
                  letterSpacing: '0.05em',
                  fontSize: isMobile ? '1.5rem' : '2.5rem',
                  lineHeight: 1.2,
                }}
              >
                Ethereal Tech Fashion
              </Heading>
              {!isMobile && (
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '-3rem',
                  height: '1px',
                  width: '2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  transform: 'rotate(-45deg)',
                  transformOrigin: 'right center',
                }} />
              )}
            </div>
          </Column>
          
          {/* Description Box */}
          <div style={{
            maxWidth: isMobile ? '100%' : '400px',
            marginLeft: isMobile ? '0' : 'auto',
            marginTop: isMobile ? '2rem' : '0',
            position: 'relative',
            alignSelf: isMobile ? 'stretch' : 'flex-end',
          }}>
            {!isMobile && (
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: 0,
                width: '100px',
                height: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              }} />
            )}
            <div className="elegant-text">
              <Text 
                variant={isMobile ? 'body-default-m' : 'body-default-l'}
                align={isMobile ? 'left' : 'right'}
                onBackground="neutral-strong" 
                style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: isMobile ? '1rem 0' : '1.5rem 0',
                  width: '100%',
                  lineHeight: '1.8',
                  letterSpacing: '0.02em',
                  fontStyle: 'italic',
                }}
              >
                <span className="text-highlight">
                  Exploring the intersection of digital art and avant-garde fashion through innovative design and technology.
                </span>
              </Text>
            </div>
          </div>
        </Column>
        
        {/* Footer Text */}
        <Text 
          variant={isMobile ? 'body-default-s' : 'body-default-m'}
          onBackground="neutral-strong"
          style={{
            position: isMobile ? 'static' : 'absolute',
            bottom: isMobile ? '0' : '60px',
            left: isMobile ? '0' : '32px',
            marginTop: isMobile ? 'auto' : '0',
            padding: isMobile ? '1.5rem 0' : '0',
            textAlign: isMobile ? 'center' : 'left',
            width: '100%',
          }}
        >
          Where code meets couture.
        </Text>
      </Column>
    </div>
  );
}
