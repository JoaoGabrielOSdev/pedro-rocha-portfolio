import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projetos } from '../data/projetos';

function Stat({ value, label }) {
  return (
    <div className="stat-cell">
      <p className="font-display text-6xl leading-none tracking-[-0.06em] text-paper sm:text-7xl">{value}</p>
      <p className="mt-3 max-w-[180px] text-center text-[9px] uppercase leading-4 tracking-[0.28em] text-white/60">{label}</p>
    </div>
  );
}

function Eyebrow({ children }) {
  return <p className="eyebrow text-sky">{children}</p>;
}

export default function Home() {
  return (
    <div id="top" className="reference-home">
      <section className="reference-hero">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="reference-container hero-content">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="hero-copy">
            <Eyebrow>Pedro Rocha&nbsp; / &nbsp;Edição de vídeo</Eyebrow>
            <h1 className="mt-5 max-w-[720px] font-display text-[clamp(4.8rem,9.1vw,9rem)] uppercase leading-[.78] tracking-[-.065em] text-paper">
              Cada frame.<br />Uma intenção.
            </h1>
            <p className="serif-copy mt-5 max-w-[460px] text-[1.05rem] leading-[1.28] text-paper/90 sm:text-xl">
              Edição de vídeo para marcas pessoais, profissionais liberais e lançamentos digitais.
            </p>
            <Link to="/portfolio" className="reference-button mt-5">Ver minhas edições <ArrowUpRight size={16} /></Link>
          </motion.div>
        </div>
      </section>

      <section className="stats-band" aria-label="Números de experiência">
        <div className="reference-container stats-grid">
          <Stat value="2+" label="anos de experiência" />
          <Stat value="2.000+" label={<>vídeos para médicos<br />e advogados</>} />
          <Stat value="50+" label="perfis atendidos" />
        </div>
      </section>

      <section id="work" className="reference-container reference-section work-section">
        <div className="work-intro">
          <div><Eyebrow>Seleção de edições&nbsp; / &nbsp;01 — 06</Eyebrow><h2 className="reference-heading mt-4">O trabalho fala.</h2></div>
          <div className="work-description"><p className="serif-copy text-[1.03rem] leading-[1.35] text-white/70">Vídeos bem editados geram conexões reais. Aqui está uma seleção de edições que traduzem ideias em conteúdo que funciona.</p></div>
          <div className="work-filters" aria-label="Categorias de edição"><span className="active">Todos</span><span>Talking head</span><span>Cortes</span><span>Institucional</span></div>
        </div>
        <div className="work-grid">{projetos.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
      </section>

      <section id="experience" className="reference-container reference-section launch-section">
        <div className="launch-copy"><Eyebrow>Lançamentos digitais&nbsp; / &nbsp;Parcerias</Eyebrow><h2 className="reference-heading mt-4">Edição em<br />grandes lançamentos.</h2></div>
        <div className="launch-cards">
          <article className="editorial-card"><h3>Pedro Assad /<br />SAME</h3><p>Participação na edição do lançamento do SAME e na seleção e edição de cortes de lives no YouTube.</p></article>
          <article className="editorial-card"><h3>Flávia Marinho /<br />Lançamentos digitais</h3><p>A Nova Década de Ouro da Advocacia<br />Imersão Saúde em Foco 360º<br />Mastermovie<br />Novo Código de Honorários</p></article>
        </div>
      </section>

      <section className="reference-container reference-section about-strip">
        <div className="about-title"><Eyebrow>Sobre mim&nbsp; / &nbsp;Experiência</Eyebrow><h2 className="reference-heading mt-4">Quem está por<br />trás dos cortes.</h2></div>
        <div className="about-copy"><p className="serif-copy text-[1.03rem] leading-[1.35] text-white/75">Sou Pedro Rocha. Tenho mais de 2 anos de experiência em edição para marcas pessoais, com atuação em agências de marketing e projetos de lançamento digital.</p><p className="serif-copy mt-5 text-[1.03rem] leading-[1.35] text-white/75">Já participei da edição de mais de 50 perfis e editei mais de 2.000 vídeos para médicos e advogados.</p></div>
        <div className="client-list"><Eyebrow>Principais projetos e parcerias</Eyebrow><p className="serif-copy mt-4 leading-7 text-white/75">Sublime Cariri&nbsp; · &nbsp;Verz&nbsp; · &nbsp;ALP<br />Pedro Vidoca&nbsp; · &nbsp;Luana Pavanate</p></div>
      </section>

      <section id="process" className="reference-container reference-section process-section">
        <div className="process-title"><Eyebrow>Como trabalho&nbsp; / &nbsp;Do planejamento à entrega</Eyebrow><h2 className="reference-heading mt-4">Da identidade<br />à entrega.</h2></div>
        <div className="process-grid">
          {[['01', 'Alinhamento visual', 'Cores, fontes, referências e moodboard para projetos que começam do zero.'], ['02', 'Organização da demanda', 'Fluxo de pedidos, arquivos e prazos definidos.'], ['03', 'Edição e alinhamentos', 'Ajustes para encaixar o trabalho no que você precisa.'], ['04', 'Entrega', 'Vídeos finalizados dentro dos prazos combinados.']].map(([number, title, body]) => <article key={number} className="process-item"><strong>{number}</strong><h3>{title}</h3><p className="serif-copy">{body}</p></article>)}
        </div>
      </section>

      <section className="reference-container reference-section services-strip">
        <div className="services-title"><Eyebrow>Serviços de edição&nbsp; / &nbsp;Formatos e plataformas</Eyebrow><h2 className="reference-heading mt-4">Soluções para<br />o seu conteúdo.</h2></div>
        <div className="services-list">{['Talking head e conteúdo para redes', 'Seleção e edição de cortes de lives', 'Edição institucional de eventos', 'Motion básico'].map((service) => <Link to="/servicos" className="service-link" key={service}><span>{service}</span><ArrowUpRight size={18} /></Link>)}<p className="eyebrow mt-4 text-right text-sky">Instagram&nbsp; · &nbsp;TikTok&nbsp; · &nbsp;YouTube</p></div>
      </section>

      <section id="contact" className="cta-section"><div className="reference-container cta-inner"><h2 className="font-display text-[clamp(4.5rem,8.7vw,8.5rem)] uppercase leading-[.78] tracking-[-.065em] text-paper">Vamos editar<br />seu próximo projeto?</h2><div className="cta-side"><p className="serif-copy text-[1.02rem] leading-[1.35] text-white/75">Pacotes de edição alinhados à sua demanda.<br />Converse comigo pelo WhatsApp ou agende uma call.</p><Link to="/contato" className="reference-button mt-5 w-full justify-between bg-sky text-ink hover:bg-paper">Conversar on WhatsApp <ArrowUpRight size={16} /></Link></div></div></section>
    </div>
  );
}
