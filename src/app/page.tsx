'use client';

import { Hero } from '@/features/hero/hero';
import { Services } from '@/features/services/services';
import { Benefits } from '@/features/benefits/benefits';
import { Testimonials } from '@/features/testimonials/testimonials';
import { CTA } from '@/features/cta/cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <CTA />
    </main>
  );
}
