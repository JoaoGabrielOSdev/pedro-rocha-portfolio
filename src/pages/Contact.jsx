import { ArrowUpRight, Instagram, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const whatsappNumber = '5588999209286';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: '', email: '', projeto: '' });
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = (event) => {
    event.preventDefault();
    const nome = form.nome.trim();
    const email = form.email.trim();
    const projeto = form.projeto.trim();
    const message = [
      '*Novo contato pelo portfólio*',
      '',
      'Olá, Pedro! Tudo bem?',
      '',
      '*Dados do contato*',
      `• Nome: ${nome}`,
      `• E-mail: ${email}`,
      '',
      '*Sobre o projeto*',
      projeto,
      '',
      'Gostaria de conversar sobre este projeto e entender os próximos passos.',
    ].join('\r\n');
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <main className="contact-page">
      <header className="contact-hero">
        <div className="contact-hero-topline"><p className="eyebrow">Contato / vamos conversar</p><span>01 — 01</span></div>
        <div className="contact-hero-grid">
          <h1>Tem um<br /><span>projeto</span><br />em mente?</h1>
          <div className="contact-hero-aside"><p className="serif-copy">Conte um pouco sobre o que você precisa e vamos encontrar o ritmo certo para a sua próxima ideia.</p><div><span>Disponível para novos projetos</span><span>Resposta em até 24h</span></div></div>
        </div>
      </header>

      <section className="contact-content">
        <div className="contact-direct"><p className="eyebrow">Fale diretamente</p><div className="contact-links"><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="contact-link"><span><MessageCircle size={18} /> WhatsApp</span><span>(88) 99920-9286 <ArrowUpRight size={17} /></span></a><a href="mailto:pedrolucasrochaholanda@gmail.com" className="contact-link"><span><Mail size={18} /> E-mail</span><span>pedrolucasrochaholanda@gmail.com <ArrowUpRight size={17} /></span></a><a href="https://instagram.com/pedrorochahl" target="_blank" rel="noreferrer" className="contact-link"><span><Instagram size={18} /> Instagram</span><span>@pedrorochahl <ArrowUpRight size={17} /></span></a></div><p className="contact-note">Atendimento para projetos selecionados, conteúdo recorrente e lançamentos digitais.</p></div>
        <form onSubmit={submit} className="contact-form"><div className="contact-form-heading"><p className="eyebrow">Briefing rápido</p><p>Me conte o essencial e eu retorno com os próximos passos.</p></div><label className="form-field"><span>Seu nome</span><input name="nome" value={form.nome} onChange={update} placeholder="Como posso te chamar?" required /></label><label className="form-field"><span>Seu e-mail</span><input name="email" type="email" value={form.email} onChange={update} placeholder="voce@empresa.com" required /></label><label className="form-field"><span>Sobre o projeto</span><textarea name="projeto" value={form.projeto} onChange={update} placeholder="Formato, prazo, objetivo..." rows="4" minLength="10" required /></label><button type="submit" className="button-primary">Conversar pelo WhatsApp <ArrowUpRight size={16} /></button>{sent && <p className="contact-success">Abrindo uma conversa no WhatsApp.</p>}</form>
      </section>
    </main>
  );
}
