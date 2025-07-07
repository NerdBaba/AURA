"use client";

import { Text } from "@once-ui-system/core";

export function AuraLogo() {
  return (
    <Text 
      variant="heading-default-l" 
      style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 400,
        letterSpacing: '0.02em',
        lineHeight: 1,
        textTransform: 'uppercase'
      }}
    >
      Aura
    </Text>
  );
}
