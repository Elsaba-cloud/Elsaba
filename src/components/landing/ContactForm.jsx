import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { MessageCircle } from 'lucide-react';

const WA_NUMBER = '628129229688';

const CATEGORIES = [
  'Gravir Kayu',
  'Gravir Akrilik',
  'Gravir Logam',
  'Gravir Kulit',
  'Plakat / Trophy',
  'Souvenir / Gift',
  'Lainnya',
];

export default function ContactForm() {
  const [form, setForm] = useState({ nama: '', jenis: '', deskripsi: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Halo Elsaba, saya ingin pesan gravir custom.\n\nNama: ${form.nama}\nJenis Barang: ${form.jenis}\nDeskripsi Kebutuhan: ${form.deskripsi}`;
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="kontak" className="py-20 md:py-32 px-5 md:px-8 bg-[#121212]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#8C7356] mb-3">
            Kontak
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
            Mulai Pesanan Anda
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="border border-white/10 p-6 md:p-10 space-y-6"
        >
          <div>
            <Label className="text-sm text-[#D1CDC7] tracking-wide uppercase mb-2 block">
              Nama
            </Label>
            <Input
              placeholder="Nama Anda"
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 focus:border-[#8C7356]"
            />
          </div>

          <div>
            <Label className="text-sm text-[#D1CDC7] tracking-wide uppercase mb-2 block">
              Jenis Barang
            </Label>
            <Select
              value={form.jenis}
              onValueChange={(v) => setForm({ ...form, jenis: v })}
              required
            >
              <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 focus:border-[#8C7356] [&>span]:text-white/30 [&[data-state=closed]>span]:text-white/30">
                <SelectValue placeholder="Pilih jenis barang" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sm text-[#D1CDC7] tracking-wide uppercase mb-2 block">
              Deskripsi Kebutuhan
            </Label>
            <Textarea
              placeholder="Jelaskan detail kebutuhan Anda (desain, jumlah, ukuran, dll)"
              value={form.deskripsi}
              onChange={(e) => setForm({ ...form, deskripsi: e.target.value })}
              rows={4}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#8C7356] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 bg-[#8C7356] hover:bg-[#7A6348] text-white px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5" />
            Kirim via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}