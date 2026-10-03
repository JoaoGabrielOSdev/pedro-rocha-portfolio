import { Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="reference-footer"><div className="reference-container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><Logo /><a href="https://instagram.com/pedrorochahl" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-white/75 transition hover:text-sky"><Instagram size={17} /> @pedrorochahl</a></div></footer>
  );
}
