import { ArrowUpRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import VideoPreview from './VideoPreview';

export default function ProjectCard({ project, index = 0, featured = false }) {
  return (
    <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -6 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.45, delay: index * 0.04 }} className={`project-tile group ${featured ? 'md:col-span-2' : ''}`}>
      <Link to={`/projeto/${project.slug}`} aria-label={`Abrir projeto ${project.titulo}`}>
        <div className={`project-frame ${featured ? 'featured' : ''}`}>
          <VideoPreview src={project.videoDetail || project.video} label={`Prévia do projeto ${project.titulo}`} className="project-card-video h-full w-full object-contain transition duration-700 group-hover:scale-[1.02]" />
          <div className="project-frame-shade" />
          <div className="project-preview-label">PRÉVIA DO VÍDEO</div>
          <div className="project-play"><Play size={17} fill="currentColor" /></div>
          <span className="project-format">{project.formato.split('·')[0].trim()}</span>
        </div>
        <div className="project-caption"><span>{project.filtro || project.categoria} <ArrowUpRight size={14} /></span><span className="hidden text-xs text-white/35 sm:inline">{project.cliente}</span></div>
      </Link>
    </motion.article>
  );
}
