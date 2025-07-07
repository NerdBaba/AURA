"use client";

import Link from "next/link";
import { Flex, Row, Text } from "@once-ui-system/core";
import { AuraLogo } from "./AuraLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/archive", label: "Archive" },
  { href: "/studio", label: "Studio" },
  { href: "/inquiries", label: "Inquiries" },
];

export function Header() {
  return (
    <Flex as="header" align="center" horizontal="space-between" padding="m" fillWidth>
      <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <AuraLogo />
      </Link>
      <Row gap="l" align="center">
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href}>
            <Text variant="body-default-s">{label}</Text>
          </Link>
        ))}
      </Row>
    </Flex>
  );
}
