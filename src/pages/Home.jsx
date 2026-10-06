import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import { projetos } from '../data/projetos';

function AnimatedStatValue({ value }) {
  const target = Number(value.replace(/\./g, '').replace('+', ''));
  const valueRef = useRef(null);
  const isVisible = useInView(valueRef, { once: true, amount: 0.7 });
  const count = useMotionValue(0);
  const springCount = useSpring(count, { stiffness: 110, damping: 24, mass: 0.75 });
  const formatted = useTransform(springCount, (current) => `${Math.round(current).toLocaleString('pt-BR')}+`);

  useEffect(() => {
    if (isVisible) count.set(target);
  }, [count, isVisible, target]);

  return <motion.p ref={valueRef} className="font-display text-6xl leading-none tracking-[-0.06em] text-paper sm:text-7xl">{formatted}</motion.p>;
}

function Stat({ value, label, index }) {
  return (
    <motion.div
      className="stat-cell"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.35 }}
    >
      <AnimatedStatValue value={value} />
      <p className="mt-3 max-w-[180px] text-center text-[9px] uppercase leading-4 tracking-[0.28em] text-white/60">{label}</p>
    </motion.div>
  );
}

function Eyebrow({ children }) {
  return <p className="eyebrow text-sky">{children}</p>;
}

function SectionReveal({ children, className, ...props }) {
  const prefersReducedMotion = useReducedMotion();
  return <motion.section className={className} initial={prefersReducedMotion ? false : { opacity: 0, y: 34, filter: 'blur(4px)', clipPath: 'inset(7% 0 0 0)' }} whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)', clipPath: 'inset(0 0 0 0)' }} viewport={{ once: true, amount: 0.1, margin: '0px 0px -52px' }} transition={prefersReducedMotion ? undefined : { duration: 1.05, ease: [0.22, 1, 0.36, 1] }} {...props}>{children}</motion.section>;
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const filters = ['Todos', 'Talking Head', 'Cortes', 'Institucional', 'YouTube'];
  const filteredProjects = activeFilter === 'Todos' ? projetos : projetos.filter((project) => project.filtro === activeFilter);

  return (
    <div id="top" className="reference-home">
      <section className="reference-hero">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-light-pass" aria-hidden="true" />
        <div className="reference-container hero-content">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="hero-copy">
            <Eyebrow>Pedro Rocha&nbsp; / &nbsp;Edição de vídeo</Eyebrow>
            <h1 className="mt-5 max-w-[720px] font-display text-[clamp(4.8rem,9.1vw,9rem)] uppercase leading-[.78] tracking-[-.065em] text-paper">
              <span>Melhore seu</span><span>posicionamento</span><span>com a edição certa.</span>
            </h1>
            <p className="serif-copy mt-5 max-w-[460px] text-[1.05rem] leading-[1.28] text-paper/90 sm:text-xl">
              Edição de vídeo para marcas pessoais, profissionais liberais e lançamentos digitais.
            </p>
            <Link to="/portfolio" className="reference-button mt-5">Ver minhas edições <ArrowUpRight size={16} /></Link>
          </motion.div>
        </div>
      </section>

      <SectionReveal className="stats-band" aria-label="Números de experiência">
        <div className="reference-container stats-grid">
          <Stat value="2+" label="anos de experiência" index={0} />
          <Stat value="2.000+" label={<>vídeos para médicos<br />e advogados</>} index={1} />
          <Stat value="50+" label="perfis atendidos" index={2} />
        </div>
      </SectionReveal>

      <SectionReveal id="work" className="reference-container reference-section work-section">
        <Reveal className="work-intro">
          <div className="work-intro-title"><Eyebrow>Seleção de edições&nbsp; / &nbsp;01 — {String(filteredProjects.length).padStart(2, '0')}</Eyebrow><h2 className="reference-heading mt-4">Conheça meu trabalho</h2><div className="work-description"><p className="serif-copy text-[1.03rem] leading-[1.35] text-white/70">Vídeos bem editados são o primeiro passo para apresentar seu perfil ao público. Aqui está uma seleção de algumas edições e estilos diversificados.</p></div></div>
          <div className="work-filters" role="tablist" aria-label="Filtrar projetos por categoria">{filters.map((filter) => <button key={filter} type="button" role="tab" aria-selected={activeFilter === filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
        </Reveal>
        <motion.div layout className="work-grid" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>{filteredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</motion.div>
      </SectionReveal>

      <SectionReveal className="reference-container reference-section motion-collage" aria-label="Seleção de motion e direção visual">
        <div className="motion-collage-head"><Eyebrow>Interlúdio visual&nbsp; / &nbsp;Motion</Eyebrow><span className="motion-collage-count">04</span></div>
        <div className="motion-collage-board">
          <div className="motion-collage-grid">
            {[['assaad.gif', 'Pedro Assad / SAME'], ['flavia.gif', 'Flávia Marinho / lançamentos'], ['motion.gif', 'Estudo de composição'], ['herisson.gif', 'Depoimentos / prova social']].map(([gif, label], index) => <Reveal key={gif} className={`motion-collage-item motion-collage-item-${index + 1}`} direction={index % 2 ? 'right' : 'left'}><span className="motion-collage-index">0{index + 1}</span><img src={`/gifs/${gif}`} alt={`Motion aplicado em ${label}`} loading="lazy" /><span className="motion-collage-label">{label}</span></Reveal>)}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="experience" className="reference-container reference-section launch-section">
        <Reveal className="launch-copy" direction="left"><Eyebrow>Lançamentos digitais&nbsp; / &nbsp;Parcerias</Eyebrow><h2 className="reference-heading mt-4">Edições em<br />grandes projetos.</h2></Reveal>
        <Reveal className="launch-cards" direction="right" delay={0.08}>
          <article className="editorial-card">
            <div className="editorial-card-meta"><span>01 / 03</span><span>Lançamento digital</span></div>
            <h3>Pedro Assad /<br />SAME</h3>
            <p>Participação na edição do lançamento do SAME e na seleção e edição de cortes de lives no YouTube.</p>
          </article>
          <article className="editorial-card">
            <div className="editorial-card-meta"><span>02 / 03</span><span>Parceria</span></div>
            <h3>Flávia Marinho /<br />Lançamentos digitais</h3>
            <p>A Nova Década de Ouro da Advocacia<br />Imersão Saúde em Foco 360º<br />Mastermovie<br />Novo Código de Honorários</p>
          </article>
          <article className="editorial-card editorial-card-results">
            <div className="editorial-card-meta"><span>03 / 03</span><span>Resultados</span></div>
            <h3>Projetos que<br />ganham escala</h3>
            <p><strong>Luana Pavanate</strong> · +100k seguidores e milhões de visualizações.<br /><strong>Pedro Vidoca</strong> · +1M no Instagram, 500k no TikTok e +10M de views.<br /><strong>Victória Nadalutti</strong> · +500k seguidores nas redes sociais.</p>
          </article>
        </Reveal>
      </SectionReveal>

      <SectionReveal className="reference-container reference-section about-strip">
        <Reveal className="about-portrait-panel" direction="left"><figure className="about-portrait"><img src="/images/retrato-pedro-client.jpeg" alt="Pedro Rocha em um retrato com luz azul" loading="lazy" /><figcaption className="about-portrait-meta"><span>Pedro Rocha</span><span>Editor de vídeo</span></figcaption></figure></Reveal>
        <div className="about-content">
          <Reveal className="about-title" direction="right"><Eyebrow>Sobre mim&nbsp; / &nbsp;Experiência</Eyebrow><h2 className="reference-heading mt-4">Quem está por<br />trás dos cortes.</h2></Reveal>
          <Reveal className="about-lower" direction="right" delay={0.08}>
            <div className="about-copy">
              <div className="about-copy-block"><span className="about-copy-index">01 / EXPERIÊNCIA</span><p className="serif-copy">Sou Pedro Rocha, editor de vídeo com mais de dois anos de experiência criando conteúdos para marcas pessoais, profissionais liberais e lançamentos digitais. Meu trabalho combina ritmo, clareza e identidade visual para transformar cada ideia em uma peça audiovisual que atinge seu público-alvo, se encaixando exatamente na sua estratégia de conteúdo.</p></div>
              <div className="about-copy-block"><span className="about-copy-index">02 / ALCANCE</span><p className="serif-copy">Ao longo desse caminho, já participei da edição de mais de 50 perfis e de mais de 2.000 vídeos para médicos, advogados e especialistas. Cada projeto parte de uma necessidade diferente — e termina em um conteúdo pronto para comunicar com autoridade.</p></div>
            </div>
          </Reveal>
        </div>
      </SectionReveal>

      <SectionReveal id="process" className="reference-container reference-section process-section">
        <Reveal className="process-title" direction="left"><Eyebrow>Como trabalho&nbsp; / &nbsp;Do planejamento à entrega</Eyebrow><h2 className="reference-heading mt-4">Da identidade<br />à entrega.</h2></Reveal>
        <Reveal className="process-grid" direction="right" delay={0.08}>
          {[['01', 'Alinhamento visual', 'Cores, fontes, referências e moodboard para projetos que começam do zero.'], ['02', 'Organização da demanda', 'Fluxo de pedidos, arquivos e prazos definidos.'], ['03', 'Edição e alinhamentos', 'Ajustes para encaixar o trabalho no que você precisa.'], ['04', 'Entrega', 'Vídeos finalizados dentro dos prazos combinados.']].map(([number, title, body]) => <article key={number} className="process-item"><div className="process-item-top"><span>Etapa</span><strong>{number}</strong></div><h3>{title}</h3><p className="serif-copy">{body}</p></article>)}
        </Reveal>
      </SectionReveal>

      <SectionReveal className="reference-container reference-section services-strip">
        <Reveal className="services-title" direction="left"><Eyebrow>Serviços de edição&nbsp; / &nbsp;Formatos e plataformas</Eyebrow><h2 className="reference-heading mt-4">Soluções para<br />o seu conteúdo.</h2></Reveal>
        <Reveal className="services-list" direction="right" delay={0.08}>{['Talking head e conteúdo para redes', 'Seleção e edição de cortes de lives', 'Edição institucional de eventos', 'Motion básico'].map((service, index) => <Link to="/servicos" className="service-link" key={service}><span className="service-number">0{index + 1}</span><span className="service-name">{service}</span><span className="service-arrow"><ArrowUpRight size={18} /></span></Link>)}<div className="services-footer"><span className="eyebrow">Formatos atendidos</span><p className="eyebrow">Instagram&nbsp; · &nbsp;TikTok&nbsp; · &nbsp;YouTube</p></div></Reveal>
      </SectionReveal>

      <SectionReveal id="contact" className="cta-section"><Reveal className="reference-container cta-inner"><div className="cta-topline"><p className="eyebrow">Contato&nbsp; / &nbsp;vamos conversar</p><span>06 — 06</span></div><div className="cta-main"><div className="cta-heading-wrap"><h2 className="font-display text-[clamp(4.5rem,8.7vw,8.5rem)] uppercase leading-[.78] tracking-[-.065em] text-paper">Vamos editar<br />seu próximo projeto?</h2><span className="cta-heading-rule" aria-hidden="true" /></div><div className="cta-side"><div className="cta-side-meta"><span>Disponível para novos projetos</span><span>01 — 01</span></div><p className="serif-copy text-[1.02rem] leading-[1.35] text-white/75">Pacotes de edição alinhados à sua demanda.<br />Converse comigo pelo WhatsApp ou agende uma call.</p><Link to="/contato" className="reference-button mt-5 w-full justify-between bg-sky text-ink hover:bg-paper">Conversar pelo WhatsApp <ArrowUpRight size={16} /></Link></div></div></Reveal></SectionReveal>
    </div>
  );
}
