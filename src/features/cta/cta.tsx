'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

export const CTA = () => {
  return (
    <section className="py-16 px-4 bg-primary text-primary-foreground" id="contact">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Quyosh energiyasi orqali tejamkorlikka erishing
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Professional maslahat va bepul hisob-kitob uchun bizga murojaat qiling.
              Mutaxassislarimiz siz uchun eng optimal yechimni taklif etadi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-lg shadow-lg bg-card text-card-foreground">
            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="block text-lg font-medium text-foreground">
                  Ismingiz
                </Label>
                <Input
                  type="text"
                  id="name"
                  className="mt-1 block w-full p-3 border border-border rounded-md bg-background text-foreground"
                  placeholder="Ismingizni kiriting"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-lg font-medium text-foreground">
                  Emailingiz
                </Label>
                <Input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-3 border border-border rounded-md bg-background text-foreground"
                  placeholder="Emailingizni kiriting"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-lg font-medium text-foreground">
                  Xabar
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  className="mt-1 block w-full p-3 border border-border rounded-md bg-background text-foreground"
                  placeholder="Xabaringizni yozing"></Textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md text-xl font-semibold hover:opacity-90 transition-opacity duration-300">
                Yuborish
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center">
            <p className="text-lg opacity-90">Yoki biz bilan bog'laning</p>
            <div className="mt-4 space-x-4 grid">
              <Link
                href="tel:+998901234567"
                className="text-xl font-semibold hover:opacity-80 transition-opacity">
                +998 90 123-45-67
              </Link>
              <span className="opacity-60">•</span>
              <Link
                href="mailto:info@fullenergy.uz"
                className="text-xl font-semibold hover:opacity-80 transition-opacity">
                info@fullenergy.uz
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
