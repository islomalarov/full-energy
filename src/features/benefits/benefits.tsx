'use client';

import { motion } from 'motion/react';

const benefits = [
  {
    icon: '✅',
    title: 'Yuqori Sifat',
    description: 'Faqat eng yaxshi sifatli quyosh panellari va uskunalardan foydalanamiz.',
  },
  {
    icon: '💰',
    title: 'Tejamkorlik',
    description: 'Energiya xarajatlaringizni sezilarli darajada kamaytiring.',
  },
  {
    icon: '🔧',
    title: 'Professional Servis',
    description: '24/7 texnik yordam va professional montaj xizmati.',
  },
];

export const Benefits = () => {
  return (
    <section className="py-16 px-4 bg-background text-foreground" id="benefits">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-bold">Nima Uchun FullEnergy?</h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Bizning afzalliklarimiz sizga quyosh energiyasidan maksimal foyda olishga yordam beradi.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg shadow-lg bg-card hover:shadow-xl transition-all duration-300">
              <div className="text-primary text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground text-lg">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
