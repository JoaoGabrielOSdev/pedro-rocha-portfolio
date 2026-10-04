import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const services = [
  ['01', 'Conteúdo para redes sociais', 'Instagram · TikTok · YouTube'],
  ['02', 'Talking head', 'Marcas pessoais · Especialistas · Autoridade'],
  ['03', 'Lançamentos digitais', 'Campanhas · Aulas · Conteúdo de apoio'],
  ['04', 'Eventos e institucional', 'Cobertura · Recortes · Manifestos'],
  ['05', 'Motion', 'Tipografia · Ritmo · Camadas de informação'],
];

const process = [
  ['01', 'Alinhamento', 'Entendimento da marca, objetivo, público e referências.'],
  ['02', 'Direção visual', 'Benchmarking, fontes, cores e moodboard.'],
  ['03', 'Edição', 'Narrativa, ritmo, identidade e acabamento.'],
  ['04', 'Entrega', 'Organização, revisão, ajustes e envio final.'],
];

export default function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero-topline">
          <p className="eyebrow">Serviços de edição / formatos e plataformas</p>
          <span className="services-hero-index">01 — 05</span>
        </div>
        <div className="services-hero-grid">
          <h1 className="services-hero-title">Soluções<br /><span>para o seu</span><br />conteúdo.</h1>
          <div className="services-hero-aside">
            <p className="serif-copy">Edição de vídeo para marcas pessoais, profissionais liberais e lançamentos digitais.</p>
            <div className="services-hero-note"><span>Direção visual</span><span>Ritmo · Clareza · Presença</span></div>
          </div>
        </div>
      </section>

      <section className="services-catalog">
        <div className="services-catalog-head">
          <div><p className="eyebrow">Onde a edição encontra a intenção</p><h2>Formatos pensados<br />para cada mensagem.</h2></div>
          <p className="services-catalog-intro serif-copy">Cada entrega parte do objetivo do conteúdo para encontrar o ritmo, a linguagem e o acabamento certos.</p>
        </div>
        <div className="services-rows">
          {services.map(([number, title, caption], index) => (
            <MotionLink key={number} to="/contato" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="service-row" aria-label={`Solicitar orçamento para ${title}`}>
              <span className="service-row-number">{number}</span>
              <div className="service-row-main"><div className="service-row-label"><span>Serviço</span><span>{caption.split(' · ')[0]}</span></div><h3>{title}</h3><p>{caption}</p></div>
              <span className="service-row-arrow"><ArrowUpRight size={22} strokeWidth={1.2} /></span>
            </MotionLink>
          ))}
        </div>
      </section>

      <section className="services-process">
        <div className="services-process-title"><p className="eyebrow">Como trabalho</p><h2>Da identidade<br />à entrega.</h2></div>
        <div className="services-process-list">{process.map(([number, title, body]) => <article key={number} className="services-process-item"><span>{number}</span><div className="services-process-item-content"><h3>{title}</h3><p className="serif-copy">{body}</p></div></article>)}</div>
      </section>

      <section className="services-cta"><div><p className="eyebrow">Próximo passo</p><h2>Vamos editar<br />seu projeto?</h2></div><Link to="/contato" className="button-primary">Iniciar um projeto <ArrowUpRight size={16} /></Link></section>
    </main>
  );
}
