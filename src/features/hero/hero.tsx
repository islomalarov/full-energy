'use client';

import { AuroraBackground } from '@/components/ui/aurora-background';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-4 items-center justify-center min-h-screen px-4 py-20">
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center max-w-5xl">
          Quyosh Panellari Bilan Kelajagingizni Yoriting.
        </div>
        <div className="font-extralight text-center md:text-4xl dark:text-neutral-200 py-4 max-w-4xl">
          FullEnergy O'zbekistonda yuqori sifatli quyosh panellarini o'rnatish va texnik xizmat
          ko'rsatish bo'yicha yetakchi kompaniya. Biz bilan energiyani tejashni boshlang!
        </div>
        <Button className="mt-8 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-xl font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 cursor-pointer">
          <Link href="https://t.me/ziyaev_d" target="_blank" rel="noopener noreferrer">
            Bepul Konsultatsiya Oling
          </Link>
        </Button>
      </motion.div>
    </AuroraBackground>
  );
};
