import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { encontrarProjeto, projetos } from '../data/projetos';

export default function Project() {
  const { slug } = useParams();
  const project = encontrarProjeto(slug);
  const projectTheme = project?.tema || project?.titulo || 'Projeto';

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${projectTheme} · Pedro Rocha`;

    return () => {
      document.title = previousTitle;
    };
  }, [projectTheme]);

  if (!project) return <Navigate to="/portfolio" replace />;
  const next = projetos[(projetos.findIndex((item) => item.slug === slug) + 1) % projetos.length];

  return (
    <article className="pb-24 md:pb-36">
      <section className="mx-auto max-w-[1440px] px-5 pb-10 pt-32 md:px-10 md:pb-14 md:pt-36"><Link to="/portfolio" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/40 hover:text-paper"><ArrowLeft size={14} /> Voltar ao portfólio</Link><div className="mt-10 grid gap-8 md:grid-cols-[1.3fr_.7fr] md:items-end"><div><p className="eyebrow text-sky">Tema principal · {project.categoria}</p><h1 className="mt-6 max-w-5xl font-display text-[clamp(4.5rem,8vw,8rem)] uppercase leading-[.88] tracking-[-.04em] text-paper">{projectTheme}</h1></div><div className="flex justify-between gap-7 border-t border-line pt-4 text-[10px] uppercase tracking-[.18em] text-white/45 md:mb-2 md:max-w-sm"><span>{project.cliente}</span><span>{project.ano}<br />{project.formato}</span></div></div></section>
      <motion.section initial={{ opacity: 0, clipPath: 'inset(8% 0 0 0)' }} animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }} className="project-detail-player-shell">
        <div className={`project-detail-player ${project.tipo === 'vertical' ? 'is-vertical' : 'is-horizontal'}`}>
          <div className="project-detail-player-meta">
            <span className="project-detail-player-kicker">Reprodução<br />do projeto</span>
            <span className="project-detail-player-index">01</span>
          </div>
          <div className="project-detail-video-column">
            <div className="project-detail-player-topline"><span>{project.cliente}</span><span>{project.formato}</span></div>
            <div className="project-detail-video-wrap">
              <video src={project.videoDetail || project.video} controls playsInline preload="metadata" aria-label={`Vídeo completo de ${projectTheme}`} className="project-detail-video" />
              <span className="project-detail-video-corner project-detail-video-corner--top" aria-hidden="true" />
              <span className="project-detail-video-corner project-detail-video-corner--bottom" aria-hidden="true" />
            </div>
            <p className="project-detail-video-note">Assista ao projeto completo <span>↗</span></p>
          </div>
          <div className="project-detail-player-aside" aria-hidden="true">
            <span>FEED</span>
            <i />
            <span>2026</span>
          </div>
        </div>
      </motion.section>
      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-[.8fr_1.2fr] md:px-10 md:py-24"><div><p className="eyebrow">Ficha do projeto</p><dl className="mt-8 grid grid-cols-2 gap-y-6 text-[10px] uppercase tracking-[.16em] text-white/45"><div><dt className="mb-2 text-white/25">Cliente</dt><dd className="text-paper">{project.cliente}</dd></div><div><dt className="mb-2 text-white/25">Formato</dt><dd className="text-paper">{project.formato}</dd></div><div><dt className="mb-2 text-white/25">Plataforma</dt><dd className="text-paper">{project.plataforma || 'Instagram'}</dd></div><div><dt className="mb-2 text-white/25">Categoria</dt><dd className="text-paper">{project.filtro || project.categoria}</dd></div></dl></div><div><p className="max-w-xl text-2xl leading-snug tracking-[-.03em] text-paper md:text-4xl">{project.descricao}</p><p className="mt-7 max-w-lg text-sm leading-7 text-white/45">A edição organiza o olhar antes de pedir atenção. Cada camada entra para ampliar a mensagem, não para competir com ela.</p></div></section>
      <Link to={`/projeto/${next.slug}`} data-cursor="PRÓXIMO" className="group block border-y border-line bg-[#0b0e0f] px-5 py-16 md:px-10 md:py-24"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-12 md:flex-row md:items-end"><div><p className="eyebrow">Próximo projeto</p><h2 className="mt-6 max-w-3xl font-display text-6xl uppercase leading-[.8] tracking-[-.055em] text-paper md:text-8xl">{next.tema || next.titulo}</h2><p className="mt-5 text-sm text-white/45">{next.cliente} · {next.categoria}</p></div><ArrowUpRight className="h-12 w-12 text-sky transition duration-300 group-hover:-translate-y-2 group-hover:translate-x-2" strokeWidth={1} /></div></Link>
    </article>
  );
}
