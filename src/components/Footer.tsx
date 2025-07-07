"use client";

import Link from "next/link";
import { Column, Row, Text, Logo, Flex } from "@once-ui-system/core";

export function Footer() {
  return (
    <Column as="footer" fillWidth padding="l" gap="m">
      <Text 
        variant="body-default-s" 
        onBackground="neutral-weak"
        style={{
          textAlign: 'center',
          width: '100%',
          padding: '1rem 0',
          opacity: 0.8,
          letterSpacing: '0.02em'
        }}
      >
        © {new Date().getFullYear()} AURA – Ethereal Tech Fashion Studio. All rights reserved.
      </Text>
    </Column>
  );
}
