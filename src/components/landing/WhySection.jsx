import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Palette, BadgeDollarSign, Sparkles } from 'lucide-react';

const VALUES = [
  {
    icon: Gem,
    title: 'Detail Presisi',
    desc: 'Teknologi laser modern menghasilkan ukiran tajam dan konsisten hingga ke detail terkecil.',
  },
  {
    icon: Palette,
    title: 'Desain Custom',
    desc: 'Setiap pesanan didiskusikan dan dikerjakan sesuai keinginan — bukan template massal.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Harga Bersaing',
    desc: 'Kualitas premium tidak harus mahal. Kami tawarkan harga terbaik untuk setiap segmen.',
  },
  {
    icon: Sparkles,
    title: 'Pengerjaan Rapi',
    desc: 'Quality control ketat memastikan setiap produk keluar dengan finishing sempurna.',
  },
];

export default function WhySection() {
  return (
    <section className="py-20 md:py-32 px-5 md:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
            Keunggulan
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Kenapa Pilih Elsaba?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {VALUES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 border border-primary/20 mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}