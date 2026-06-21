import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation } from 'lucide-react';

const ADDRESS = 'Jl. Hayam Wuruk No.1&9 Blk. c1, RT.1/RW.6, Mangga Besar, Kec. Taman Sari, Kota Jakarta Barat';
const MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6!2d106.8!3d-6.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDknMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid';
const MAPS_LINK = 'https://maps.google.com/?q=Jl.+Hayam+Wuruk+No.1%269+Blk.+c1+Mangga+Besar+Jakarta+Barat';

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-20 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
            The Destination
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Kunjungi Workshop Kami
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5 space-y-8"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 border border-primary/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">Alamat</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ADDRESS}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 border border-primary/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">Jam Operasional</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Senin – Sabtu
                  <br />
                  09.00 – 18.00 WIB
                </p>
              </div>
            </div>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 min-h-[48px]"
            >
              <Navigation className="w-5 h-5" />
              Buka di Google Maps
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-7"
          >
            <div className="border border-border p-3 md:p-4 bg-card">
              <div className="aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden">
                <iframe
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'saturate(0.3) contrast(1.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Elsaba - Hayam Wuruk, Jakarta Barat"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}