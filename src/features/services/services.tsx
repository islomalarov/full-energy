'use client';

import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: '☀️',
    title: "Quyosh Panellarini O'rnatish",
    description: "Uy va biznes uchun yuqori samarali quyosh panellarini professional o'rnatish.",
  },
  {
    icon: '🛠️',
    title: "Texnik Xizmat Ko'rsatish",
    description:
      "Quyosh panellari tizimlarining uzoq muddatli ishlashini ta'minlash uchun muntazam texnik xizmat.",
  },
  {
    icon: '💡',
    title: 'Energiya Audit va Konsultatsiya',
    description: 'Energiya ehtiyojlaringizni baholash va eng yaxshi yechimlarni taklif qilish.',
  },
];

export const Services = () => {
  return (
    <section className="py-16 px-4  text-card-foreground" id="services">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-bold">Bizning Xizmatlarimiz</h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            FullEnergy quyosh energiyasi bo'yicha keng qamrovli xizmatlarni taklif etadi.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}>
              <Card className="h-full flex flex-col justify-between">
                <CardHeader className="text-center">
                  <div className="text-primary text-5xl mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mt-2 text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
