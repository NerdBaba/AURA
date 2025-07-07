import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import '@/resources/custom.css';

import classNames from 'classnames';
import { baseURL, meta, fonts } from '@/resources/once-ui.config';
import { Meta, Schema, Column, Flex } from '@once-ui-system/core';
import { Providers } from '@/components/Providers';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export async function generateMetadata() {
  return Meta.generate({
    title: meta.home.title,
    description: meta.home.description,
    baseURL: baseURL,
    path: meta.home.path,
    canonical: meta.home.canonical,
    image: meta.home.image,
    robots: meta.home.robots,
    alternates: meta.home.alternates,
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>

      </head>
      <body style={{
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }} className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}>

        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
          zIndex: 0,
        }} />
        <Providers>
            <Flex as="main" fillWidth direction="column" style={{ position: 'relative', zIndex: 1, flex: 1 }}>
              <Schema
                as="webPage"
                baseURL={baseURL}
                title={meta.home.title}
                description={meta.home.description}
                path={meta.home.path}
              />
              <Header />
              <div style={{ flex: 1 }}>
                {children}
              </div>
              <Footer />
            </Flex>

        </Providers>
      </body>
    </html>
  );
}
