import { ArrowUpRight, Instagram, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const whatsappNumber = '5588999209286';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: '', email: '', projeto: '' });
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = (event) => {
    event.preventDefault();
    const message = `Olá, Pedro! Meu nome é ${form.nome || '...'} e gostaria de conversar sobre um projeto de edição de vídeo. ${form.projeto || ''}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-36 md:px-10 md:pb-36"><section className="grid gap-12 border-b border-line pb-20 md:grid-cols-[.75fr_1.25fr] md:items-end"><p className="eyebrow">Contato / vamos conversar</p><div><h1 className="font-display text-[clamp(5.5rem,13vw,11rem)] uppercase leading-[.77] tracking-[-.065em] text-paper">Tem um<br /><span className="text-white/45">projeto</span><br />em mente?</h1><p className="mt-8 max-w-lg text-base leading-7 text-white/50">Conte um pouco sobre o que você precisa e vamos encontrar o ritmo certo para a sua próxima ideia.</p></div></section><section className="grid gap-16 py-20 md:grid-cols-[.8fr_1.2fr] md:py-28"><div><p className="eyebrow">Fale diretamente</p><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="contact-link"><MessageCircle size={18} /> (88) 99920-9286 <ArrowUpRight size={17} /></a><a href="mailto:pedrolucasrochaholanda@gmail.com" className="contact-link"><Mail size={18} /> pedrolucasrochaholanda@gmail.com <ArrowUpRight size={17} /></a><a href="https://instagram.com/pedrorochahl" target="_blank" rel="noreferrer" className="contact-link"><Instagram size={18} /> @pedrorochahl <ArrowUpRight size={17} /></a><p className="mt-14 max-w-xs text-sm leading-6 text-white/40">Atendimento para projetos selecionados, conteúdo recorrente e lançamentos digitais.</p></div><form onSubmit={submit} className="border-t border-line pt-2"><label className="form-field"><span>Seu nome</span><input name="nome" value={form.nome} onChange={update} placeholder="Como posso te chamar?" /></label><label className="form-field"><span>Seu e-mail</span><input name="email" type="email" value={form.email} onChange={update} placeholder="voce@empresa.com" /></label><label className="form-field"><span>Sobre o projeto</span><textarea name="projeto" value={form.projeto} onChange={update} placeholder="Formato, prazo, objetivo..." rows="4" /></label><button type="submit" className="button-primary mt-8">Conversar pelo WhatsApp <ArrowUpRight size={16} /></button>{sent && <p className="mt-4 text-xs text-sky">Abrindo uma conversa no WhatsApp.</p>}</form></section></div>
  );
}
