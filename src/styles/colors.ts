// src/styles/colors.ts
// Central color palette for AURA project based on implementation plan
// These constants can be imported across the codebase for consistency.

export const colors = {
  background: "#111111",
  text: "#F5F5F5",
  accent: "#06B6D4",
  aurora: {
    cobalt: "#1E3A8A",
    electricBlue: "#2563EB",
    violet: "#9333EA",
  },
} as const;

export type AuraColor = keyof typeof colors;
