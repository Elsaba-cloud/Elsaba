import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WA_NUMBER = '628129229688';
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Elsaba, saya ingin bertanya tentang jasa gravir custom.')}`;

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#8C7356] hover:bg-[#7A6348] shadow-lg shadow-[#8C7356]/25 flex items-center justify-center transition-colors duration-300 group"
          aria-label="Chat via WhatsApp"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />

          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full border-2 border-[#8C7356] animate-ping opacity-30" />

          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-foreground text-background text-xs tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
            Chat WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}