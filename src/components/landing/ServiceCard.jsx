import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WA_NUMBER = '628129229688';

export default function ServiceCard({ title, image, description, index }) {
  const [hovered, setHovered] = useState(false);
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo Elsaba, saya tertarik untuk jasa gravir ${title}. Bisa dibantu info lebih lanjut?`)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={`Gravir ${title}`}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'scale-105' : 'scale-100 grayscale-[40%]'
          }`}
        />
        {/* Overlay */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            hovered
              ? 'bg-[#121212]/60'
              : 'bg-gradient-to-t from-[#121212]/70 via-[#121212]/20 to-transparent'
          }`}
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <h3 className="font-display text-xl md:text-2xl text-white mb-1">{title}</h3>
        <p className={`text-sm text-white/70 leading-relaxed mb-4 transition-all duration-500 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {description}
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 bg-[#8C7356] text-white px-5 py-3 text-xs tracking-widest uppercase transition-all duration-500 min-h-[48px] ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <MessageCircle className="w-4 h-4" />
          Pesan via WA
        </a>
      </div>

      {/* Monolith border frame */}
      <div className="absolute inset-3 border border-white/10 pointer-events-none" />
    </motion.div>
  );
}