import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const items = [
  { label: 'Trabalhos', to: '/#work' },
  { label: 'Experiência', to: '/#experience' },
  { label: 'Processo', to: '/#process' },
  { label: 'Contato', to: '/#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 22);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ink/90 py-3 backdrop-blur-xl' : 'bg-transparent py-5'}`}>
        <div className="reference-container flex items-center justify-between"><Logo /><nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">{items.map((item) => <Link key={item.to} to={item.to} className="reference-nav-link">{item.label}</Link>)}</nav><button type="button" onClick={() => setOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center border border-white/20 text-paper md:hidden" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>{open ? <X size={18} /> : <Menu size={18} />}</button></div>
      </header>
      <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: '-100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-100%' }} transition={{ duration: 0.45 }} className="fixed inset-0 z-40 flex flex-col justify-end bg-ink px-6 pb-12 pt-28 md:hidden"><p className="eyebrow mb-8 text-sky">Navegar</p><nav className="flex flex-col gap-3">{items.map((item, index) => <motion.div key={item.to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + index * 0.05 }}><Link to={item.to} className="font-display text-6xl uppercase leading-[.86] tracking-[-.05em] text-paper">{item.label}</Link></motion.div>)}</nav></motion.div>}</AnimatePresence>
    </>
  );
}
