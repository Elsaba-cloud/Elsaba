import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-12 md:py-16 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <h3 className="font-display text-2xl md:text-3xl tracking-wide text-white mb-4">
              ELSABA
            </h3>
            <p className="text-sm text-[#D1CDC7]/60 leading-relaxed max-w-xs">
              Workshop gravir custom Jakarta — mengukir cerita Anda dengan presisi dan keindahan.
            </p>
          </div>

          {/* Address */}
          <div className="md:col-span-4">
            <div className="flex gap-3 mb-4">
              <MapPin className="w-4 h-4 text-[#8C7356] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[#D1CDC7]/70 leading-relaxed">
                Jl. Hayam Wuruk No.1&9 Blk. c1, RT.1/RW.6,
                Mangga Besar, Kec. Taman Sari,
                Kota Jakarta Barat
              </p>
            </div>
            <div className="flex gap-3">
              <Clock className="w-4 h-4 text-[#8C7356] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[#D1CDC7]/70">
                Senin – Sabtu, 09.00 – 18.00 WIB
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="flex gap-3">
              <Phone className="w-4 h-4 text-[#8C7356] mt-0.5 flex-shrink-0" />
              <a
                href="tel:+62812929688"
                className="text-sm text-[#D1CDC7]/70 hover:text-[#8C7356] transition-colors"
              >
                +62 812-9229-688
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#D1CDC7]/40 tracking-wide">
            &copy; {new Date().getFullYear()} Elsaba. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Tentang', 'Layanan', 'Portofolio', 'Kontak'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs tracking-widest uppercase text-[#D1CDC7]/40 hover:text-[#8C7356] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}