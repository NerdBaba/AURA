'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { ArchiveDecorativeElements } from '@/components/ArchiveDecorativeElements';

const ArchiveGallery = dynamic(
  () => import('@/components/ArchiveGallery'),
  { 
    ssr: false,
    loading: () => (
      <div className="loading-screen">
        <div className="loading-spinner" />
      </div>
    )
  }
);

export function ArchivePageClient() {
  return (
    <main className="archive">
      <ArchiveDecorativeElements />
      <Suspense fallback={<div className="loading-screen" />}>
        <ArchiveGallery />
      </Suspense>
    </main>
  );
}
