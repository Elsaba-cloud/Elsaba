const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WA_NUMBER = '628129229688';
const CORPORATE_WA = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Elsaba, saya ingin konsultasi untuk kebutuhan bulk order / corporate. Bisa dibantu?')}`;
const CORPORATE_IMG = 'https://media.db.com/images/public/6a383ccf1ae2f8f63e54f742/987b26321_generated_b0039460.png';

const CORPORATE_ITEMS = [
  'Plakat & Trophy Penghargaan',
  'Souvenir Acara & Seminar',
  'Gift Box Karyawan',
  'Merchandise Brand Custom',
  'Signage & Name Desk',
  'Packaging Branding',
];

export default function CorporateSection() {
  return (
    <section id="corporate" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={CORPORATE_IMG}
          alt="Corporate plaques production"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#121212]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#8C7356] mb-3">
              Corporate & B2B
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-[1.15]">
              Layanan Bulk Order
              <br />
              <span className="italic text-[#C9AD8C]">& Corporate</span>
            </h2>
            <p className="text-base md:text-lg text-[#D1CDC7] leading-relaxed mb-8 max-w-lg">
              Solusi gravir custom skala besar untuk perusahaan, event organizer, dan brand.
              Konsultasi desain, harga special untuk volume besar, dan timeline pengerjaan yang terukur.
            </p>

            <a
              href={CORPORATE_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#8C7356] hover:bg-[#7A6348] text-white px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi Bulk Order
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="border border-white/10 p-6 md:p-8 backdrop-blur-sm bg-white/5">
              <h3 className="font-display text-xl text-white mb-5">Layanan Tersedia</h3>
              <div className="space-y-3">
                {CORPORATE_ITEMS.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-[#D1CDC7]"
                  >
                    <div className="w-1.5 h-1.5 bg-[#8C7356] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}