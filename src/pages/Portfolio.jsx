import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { categorias, projetos } from '../data/projetos';

export default function Portfolio() {
  const [active, setActive] = useState('Todos');
  const filtered = useMemo(() => active === 'Todos' ? projetos : projetos.filter((project) => project.filtro === active), [active]);
  const reveal = { hidden: { opacity: 0, y: 22 }, visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: .7, ease: [0.22, 1, 0.36, 1] } }) };

  return (
    <div className="site-shell mx-auto max-w-[1440px] px-5 pb-24 pt-36 md:px-10 md:pb-36">
      <motion.header className="portfolio-hero" initial="hidden" animate="visible" variants={reveal}>
        <motion.div className="portfolio-hero-topline" variants={reveal} custom={0}><p className="eyebrow">Arquivo de trabalhos / 2026</p><span>01 — {String(projetos.length).padStart(2, '0')}</span></motion.div>
        <div className="portfolio-hero-grid">
          <motion.h1 variants={reveal} custom={.12}>Portfólio</motion.h1>
          <motion.div className="portfolio-hero-aside" variants={reveal} custom={.2}><p>Uma seleção de trabalhos em edição de vídeo, conteúdo digital, lançamentos e projetos institucionais.</p><div><span>Seleção curada</span><span>{String(projetos.length).padStart(2, '0')} projetos / 2026</span></div></motion.div>
        </div>
      </motion.header>
      <motion.div className="portfolio-filters" aria-label="Filtrar projetos por categoria" initial="hidden" animate="visible" variants={reveal} custom={.25}><span className="eyebrow">Filtrar seleção</span><div className="portfolio-filter-list">{categorias.map((category, index) => <motion.button key={category} type="button" onClick={() => setActive(category)} aria-pressed={active === category} className={active === category ? 'active' : ''} variants={reveal} custom={.3 + index * .04}>{category}</motion.button>)}</div></motion.div>
      <motion.div layout className="mt-12 grid gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((project, index) => <motion.div key={project.id} layout initial={{ opacity: 0, y: 24, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: index * .06, duration: .55, ease: [0.22, 1, 0.36, 1] } }} exit={{ opacity: 0, y: -16, scale: .98, transition: { duration: .25 } }}><ProjectCard project={project} index={index} featured={index === 0 && filtered.length > 2} /></motion.div>)}
        </AnimatePresence>
      </motion.div>
      <motion.div className="mt-24 flex justify-end" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={reveal}><Link to="/contato" className="button-quiet">Tem um projeto em mente? <ArrowUpRight size={16} /></Link></motion.div>
    </div>
  );
}
