'use client';

import { Button } from '@/components/ui/button';

import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { sendToTelegram } from '@/actions/telegram';
import { Input } from '@/components/ui/input';

export const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('idle');

    try {
      await sendToTelegram(formData);
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      window.location.href = 'https://t.me/your_telegram_username';
    } catch (error) {
      setStatus('error');
      console.error('Xabar yuborishda xatolik:', error);
    } finally {
      setIsSending(false);
    }
  };

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
            className="bg-card/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="block text-sm font-medium mb-2">Ism</Label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    placeholder="Ismingizni kiriting"
                    required
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium mb-2">Telefon</Label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                    placeholder="+998"
                    required
                  />
                </div>
              </div>
              <div>
                <Label className="block text-sm font-medium mb-2">Email</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full "
                  placeholder="example@mail.com"
                  required
                />
              </div>
              <div>
                <Label className="block text-sm font-medium mb-2">Xabar</Label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[120px]"
                  placeholder="Xabaringizni yozing..."
                  required
                />
              </div>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-secondary/20 p-4 rounded-lg text-center">
                  <p>Xabaringiz qabul qilindi! Telegram ga yo'naltirilmoqdasiz...</p>
                </motion.div>
              )}
              {status === 'error' && (
                <div className="bg-destructive/20 p-4 rounded-lg">
                  Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.
                </div>
              )}
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSending}
                  className="w-full md:w-auto text-lg font-semibold px-8 py-6">
                  {isSending ? 'Yuborilmoqda...' : 'Yuborish'}
                </Button>
              </div>
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
