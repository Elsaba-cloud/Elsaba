const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const SERVICES = [
  {
    title: 'Gravir Kayu',
    image: 'https://media.db.com/images/public/6a383ccf1ae2f8f63e54f742/c0a97118a_generated_082fbb67.png',
    description: 'Ukiran presisi pada berbagai jenis kayu — dari cutting board, bingkai foto, hingga dekorasi dinding.',
  },
  {
    title: 'Gravir Akrilik',
    image: 'https://media.db.com/images/public/6a383ccf1ae2f8f63e54f742/3c3644661_generated_1ef8e83b.png',
    description: 'Plakat, trophy, namedesk, dan signage akrilik dengan finishing kristal yang memukau.',
  },
  {
    title: 'Gravir Logam',
    image: 'https://media.db.com/images/public/6a383ccf1ae2f8f63e54f742/f7615e9c8_generated_f5a1c399.png',
    description: 'Engraving pada stainless steel, kuningan, dan aluminium untuk kebutuhan industrial & personal.',
  },
  {
    title: 'Gravir Kulit',
    image: 'https://media.db.com/images/public/6a383ccf1ae2f8f63e54f742/6a3c2db2e_generated_0bf9797c.png',
    description: 'Personalisasi dompet, cover buku, tas, dan aksesori kulit premium dengan monogram custom.',
  },
];

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-20 md:py-32 px-5 md:px-8 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#8C7356] mb-3">
            Material Library
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
            Pilih Material Anda
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}