'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Akmal Karimov",
    role: "Villa egasi",
    text: "FullEnergy bilan ishlash juda yoqimli bo'ldi. Professional yondashuv va sifatli xizmat. Quyosh panellarini o'rnatganimdan so'ng elektr xarajatlarim 70% ga kamaydi.",
    image: "/testimonials/person1.jpg"
  },
  {
    name: "Nilufar Azizova",
    role: "Restoran egasi",
    text: "Biznesimiz uchun quyosh panellarini o'rnatish eng to'g'ri qaror bo'ldi. FullEnergy jamoasi bizga eng optimal yechimni taklif qildi va professional darajada o'rnatdi.",
    image: "/testimonials/person2.jpg"
  },
  {
    name: "Jamshid Rahimov",
    role: "Fermer xo'jaligi rahbari",
    text: "Qishloq xo'jaligida elektr energiyasi juda muhim. FullEnergy yordamida biz barqaror va arzon energiya manbaiga ega bo'ldik.",
    image: "/testimonials/person3.jpg"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-muted/30" id="testimonials">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Mijozlarimiz Fikri</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Bizning mijozlarimiz tomonidan bildirilgan fikrlar va tajribalar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <blockquote>
                <p className="text-lg text-muted-foreground italic">"{testimonial.text}"</p>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};