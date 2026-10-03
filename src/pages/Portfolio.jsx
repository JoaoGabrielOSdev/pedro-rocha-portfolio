import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { categorias, projetos } from '../data/projetos';

export default function Portfolio() {
  const [active, setActive] = useState('Todos');
  const filtered = useMemo(() => active === 'Todos' ? projetos : projetos.filter((project) => project.categoria === active), [active]);

  return (
    <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-36 md:px-10 md:pb-36">
      <div className="grid gap-10 border-b border-line pb-16 md:grid-cols-[.75fr_1.25fr] md:items-end"><p className="eyebrow">Arquivo de trabalhos / 2026</p><div><h1 className="font-display text-[clamp(5.5rem,13vw,11rem)] uppercase leading-[.78] tracking-[-.065em] text-paper">Portfólio</h1><p className="mt-8 max-w-lg text-base leading-7 text-white/50">Uma seleção de trabalhos em edição de vídeo, conteúdo digital, lançamentos e projetos institucionais.</p></div></div>
      <div className="flex flex-wrap gap-2 border-b border-line py-8">{categorias.map((category) => <button key={category} type="button" onClick={() => setActive(category)} className={`filter-pill ${active === category ? 'active' : ''}`}>{category}</button>)}</div>
      <motion.div layout className="mt-12 grid gap-8 md:grid-cols-2">{filtered.map((project, index) => <ProjectCard key={project.id} project={project} index={index} featured={index === 0 && filtered.length > 2} />)}</motion.div>
      <div className="mt-24 flex justify-end"><Link to="/contato" className="button-quiet">Tem um projeto em mente? <ArrowUpRight size={16} /></Link></div>
    </div>
  );
}
