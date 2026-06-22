const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WA_NUMBER = '628129229688';
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Elsaba, saya tertarik untuk jasa gravir custom. Bisa dibantu?')}`;

const HERO_IMG = 'https://media.db.com/images/public/6a383ccf1ae2f8f63e54f742/6ae5abf86_generated_4b280164.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/85 via-[#121212]/60 to-[#121212]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full pt-24 pb-16 md:py-0">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase text-[#D1CDC7] mb-4 md:mb-6"
          >
            Gravir Custom &middot; Jakarta
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white mb-6 md:mb-8"
          >
            Gravir Berkualitas,
            <br />
            <span className="italic text-[#C9AD8C]">Sentuhan Personal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-[#D1CDC7] leading-relaxed max-w-lg mb-8 md:mb-10"
          >
            Dari hadiah personal hingga kebutuhan corporate — kami mengukir cerita Anda
            pada kayu, akrilik, logam, kulit, dan berbagai material pilihan dengan presisi tinggi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#8C7356] hover:bg-[#7A6348] text-white px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" />
              Pesan via WhatsApp
            </a>
            <a
              href="#portofolio"
              className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 min-h-[48px]"
            >
              Lihat Portofolio
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[#D1CDC7] text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-8 bg-gradient-to-b from-[#D1CDC7] to-transparent"
        />
      </motion.div>
    </section>
  );
}
