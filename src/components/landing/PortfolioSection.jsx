const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { motion } from 'framer-motion';

const PORTFOLIO = [
  { src: 'https://media.db.com/images/public/6a383ccf1ae2f8f63e54f742/0d85bd649_generated_51254e13.png', alt: 'Cutting board gravir custom' },
  { src: 'https://media.db.com/images/public/6a383ccf1ae2f8f63e54f742/43230dcc7_generated_01e460e6.png', alt: 'Trophy akrilik custom' },
  { src: 'https://media.db.com/images/public/6a383ccf1ae2f8f63e54f742/2d8681c63_generated_d8851c1e.png', alt: 'Dompet kulit gravir inisial' },
  { src: 'https://media.db.com/images/public/6a383ccf1ae2f8f63e54f742/6cdedfc57_generated_30201054.png', alt: 'Gantungan kunci gravir logam' },
  { src: 'https://media.db.com/images/public/6a383ccf1ae2f8f63e54f742/6b087a215_generated_ba40f30a.png', alt: 'Bingkai foto gravir kayu' },
  { src: 'https://media.db.com/images/public/6a383ccf1ae2f8f63e54f742/3e4479336_generated_a9b2442e.png', alt: 'Namedesk akrilik corporate' },
];

export default function PortfolioSection() {
  return (
    <section id="portofolio" className="py-20 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
            The Vault
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Portofolio Kami
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {PORTFOLIO.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative"
            >
              {/* Monolith Frame */}
              <div className="border border-border p-3 md:p-5 bg-card">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}