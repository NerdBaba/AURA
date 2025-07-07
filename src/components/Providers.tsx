"use client";

import { BorderStyle, ChartMode, ChartVariant, DataThemeProvider, IconProvider, NeutralColor, ScalingSize, Schemes, SolidStyle, SolidType, SurfaceStyle, Theme, ThemeProvider, ToastProvider, TransitionStyle } from "@once-ui-system/core";
import { style, dataStyle } from "../resources/once-ui.config";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';

export function Providers({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      smoothWheel: true,
      wheelMultiplier: 1,

      lerp: 0.1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return (
    <ThemeProvider
      theme={style.theme as Theme}
      brand={style.brand as Schemes}
      accent={style.accent as Schemes}
      neutral={style.neutral as NeutralColor}
      solid={style.solid as SolidType}
      solidStyle={style.solidStyle as SolidStyle}
      border={style.border as BorderStyle}
      surface={style.surface as SurfaceStyle}
      transition={style.transition as TransitionStyle}
      scaling={style.scaling as ScalingSize}
    >
      <DataThemeProvider
        variant={dataStyle.variant as ChartVariant}
        mode={dataStyle.mode as ChartMode}
        height={dataStyle.height}
        axis={{
          stroke: dataStyle.axis.stroke
        }}
        tick={{
          fill: dataStyle.tick.fill,
          fontSize: dataStyle.tick.fontSize,
          line: dataStyle.tick.line
        }}
        >
        <IconProvider>
          <ToastProvider>{children}</ToastProvider>
        </IconProvider>
      </DataThemeProvider>
    </ThemeProvider>
  );
}