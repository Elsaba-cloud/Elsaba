import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15 },
  }),
};

export default function AboutSection() {
  return (
    <section id="tentang" className="py-20 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left label */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="md:col-span-4"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
              Tentang Kami
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-foreground">
              Cerita di Balik
              <br />
              <span className="italic">Setiap Goresan</span>
            </h2>
          </motion.div>

          {/* Right content */}
          <div className="md:col-span-8 md:col-start-6 space-y-6">
            <motion.p
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="text-base md:text-lg leading-[1.7] text-muted-foreground"
            >
              <span className="text-foreground font-medium">Elsaba</span> hadir di Jakarta sebagai workshop gravir custom
              yang mengedepankan kualitas detail dan desain personal. Setiap produk yang kami hasilkan
              bukan sekadar ukiran — melainkan sebuah karya yang membawa makna, identitas, dan kesan mendalam.
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="text-base md:text-lg leading-[1.7] text-muted-foreground"
            >
              Dengan teknologi laser presisi tinggi dan sentuhan craftsman berpengalaman, kami melayani
              berbagai kebutuhan — mulai dari hadiah personal yang berkesan, souvenir pernikahan,
              hingga plakat corporate dan merchandise brand dalam jumlah besar.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="pt-4"
            >
              <div className="w-16 h-px bg-primary" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}