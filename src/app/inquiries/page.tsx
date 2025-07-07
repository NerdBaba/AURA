"use client";

import {
  Column,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Row,
} from "@once-ui-system/core";
import { FormEvent } from "react";
import { Flex } from "@once-ui-system/core"; // Added Flex import

export default function Inquiries() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic will go here
    alert('Form submitted!');
  };

  return (
    <Flex direction="column" fillWidth fillHeight style={{ justifyContent: 'center', alignItems: 'center', padding: 'var(--spacing-xl)' }}> {/* Outer Flex for overall page alignment */}
      <Column gap="xl" padding="xl" fillWidth style={{ maxWidth: '900px' }}> {/* Adjusted max-width for content */}
        <Heading variant="display-strong-xl" style={{ marginLeft: 'var(--spacing-l)' }}>Inquiries</Heading> {/* Offset heading */}
        <div style={{ maxWidth: 'var(--spacing-m)', marginRight: 'var(--spacing-xl)' }}> {/* Offset text block */}
          <Text variant="heading-default-l" onBackground="neutral-weak">
            Let's collaborate on something extraordinary.
          </Text>
        </div>

      <form onSubmit={handleSubmit}>
        <Column gap="m">
          <Row gap="m">
            <Input id="name" name="name" label="" placeholder="Your name" required />
            <Input
              id="email"
              name="email"
              type="email"
              label=""
              placeholder="your.email@example.com"
              required
            />
          </Row>
          <Textarea
            id="message"
            name="message"
            label="Message"
            placeholder="Tell us about your project..."
            rows={6}
            required
          />
          <Button type="submit" variant="primary" size="l">
            Send Message
          </Button>
        </Column>
      </form>
    </Column>
    </Flex>
  );
}
