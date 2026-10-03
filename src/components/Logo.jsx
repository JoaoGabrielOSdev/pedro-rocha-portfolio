import { Link } from 'react-router-dom';

export default function Logo({ light = true }) {
  return (
    <Link to="/" className="group inline-flex items-center" aria-label="Pedro Rocha, página inicial">
      <img
        src="/images/logo-pedro-rocha.png"
        alt="Pedro Rocha — editor de vídeo"
        className={`h-auto w-[180px] object-contain brightness-0 invert transition-opacity duration-300 group-hover:opacity-70 ${light ? '' : 'opacity-70'}`}
      />
    </Link>
  );
}
