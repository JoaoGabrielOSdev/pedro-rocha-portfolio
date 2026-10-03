import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  ['01', 'Conteúdo para redes sociais', 'Instagram · TikTok · YouTube'],
  ['02', 'Talking head', 'Marcas pessoais · Especialistas · Autoridade'],
  ['03', 'Lançamentos digitais', 'Campanhas · Aulas · Conteúdo de apoio'],
  ['04', 'Eventos e institucional', 'Cobertura · Recortes · Manifestos'],
  ['05', 'Motion', 'Tipografia · Ritmo · Camadas de informação'],
];

export default function Services() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-36 md:px-10 md:pb-36"><section className="border-b border-line pb-20"><p className="eyebrow">Serviços de edição / formatos e plataformas</p><h1 className="mt-7 max-w-5xl font-display text-[clamp(5.5rem,13vw,11rem)] uppercase leading-[.77] tracking-[-.065em] text-paper">Soluções<br /><span className="text-white/45">para o seu</span><br />conteúdo.</h1></section><section className="py-16 md:py-24"><p className="eyebrow mb-6">Onde a edição encontra a intenção</p><div className="border-t border-line">{services.map(([number, title, caption], index) => <motion.div key={number} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="service-row group"><span className="service-number">{number}</span><div><h2 className="font-display text-5xl uppercase leading-[.85] tracking-[-.05em] text-paper md:text-8xl">{title}</h2><p className="mt-3 text-xs uppercase tracking-[.16em] text-white/35">{caption}</p></div><ArrowUpRight className="ml-auto h-8 w-8 text-white/25 transition duration-300 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:text-sky" strokeWidth={1.3} /></motion.div>)}</div></section><section className="grid gap-12 border-y border-line py-20 md:grid-cols-[.8fr_1.2fr] md:py-28"><div><p className="eyebrow">Como trabalho</p><h2 className="mt-6 max-w-md font-display text-7xl uppercase leading-[.78] tracking-[-.06em] text-paper md:text-9xl">Da identidade<br />à entrega.</h2></div><div className="divide-y divide-line border-t border-line">{[['01', 'Alinhamento', 'Entendimento da marca, objetivo, público e referências.'], ['02', 'Direção visual', 'Benchmarking, fontes, cores e moodboard.'], ['03', 'Edição', 'Narrativa, ritmo, identidade e acabamento.'], ['04', 'Entrega', 'Organização, revisão, ajustes e envio final.']].map(([num, title, body]) => <div key={num} className="grid gap-5 py-6 md:grid-cols-[50px_180px_1fr]"><span className="text-xs text-sky">{num}</span><h3 className="font-display text-3xl uppercase leading-none tracking-[-.04em] text-paper">{title}</h3><p className="max-w-sm text-sm leading-6 text-white/45">{body}</p></div>)}</div></section><section className="pt-20 md:pt-28"><div className="flex flex-col justify-between gap-10 border-b border-line pb-10 md:flex-row md:items-end"><h2 className="max-w-4xl font-display text-7xl uppercase leading-[.78] tracking-[-.06em] text-paper md:text-[clamp(6rem,10vw,9rem)]">Vamos editar<br />seu próximo<br />projeto?</h2><Link to="/contato" className="button-primary">Iniciar um projeto <ArrowUpRight size={16} /></Link></div></section></div>
  );
}
