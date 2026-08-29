"use client";

import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Container,
  FileCheck2,
  FileSearch,
  Globe2,
  Mail,
  MapPinned,
  Radar,
  Route,
  ShieldCheck,
  Ship,
  TimerReset,
  TrendingUp,
} from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type IconType = typeof Ship;

const navItems = [
  ["Home", "inicio"],
  ["Serviços", "servicos"],
  ["Sobre nós", "sobre"],
  ["Processo", "processo"],
  ["Contato", "contato"],
];

const quickServices: Array<{ icon: IconType; title: string; text: string }> = [
  {
    icon: Ship,
    title: "Importação",
    text: "Desembaraço aduaneiro, conferência documental e orientação para reduzir atrasos na chegada da carga.",
  },
  {
    icon: Globe2,
    title: "Exportação",
    text: "Apoio no trâmite de documentos e condução das etapas necessárias para sua operação sair com segurança.",
  },
  {
    icon: ClipboardCheck,
    title: "Comércio exterior",
    text: "Assessoria para regimes especiais, Drawback, Admissão Temporária, Consumo de Bordo e consultoria aduaneira.",
  },
];

const processSteps = [
  {
    title: "Tenha uma análise",
    text: "Entendemos sua mercadoria, documentos, prazo e possíveis riscos antes de iniciar o processo.",
  },
  {
    title: "Organize a operação",
    text: "Definimos o melhor caminho aduaneiro, fiscal e logístico para evitar retrabalho e exigências.",
  },
  {
    title: "Receba com segurança",
    text: "Acompanhamos desembaraço, parceiros logísticos, liberação e entrega com comunicação próxima.",
  },
];

const reasons = [
  ["Segurança no trâmite", "Cuidado técnico em cada etapa do processo aduaneiro.", ShieldCheck],
  ["Atendimento próximo", "Contato direto para acompanhar dúvidas, documentos e prazos.", Mail],
  ["Equipe experiente", "Atuação desde 1998 em importação, exportação e regimes especiais.", BadgeCheck],
  ["Processo acompanhado", "Feedback sobre a operação para reduzir incerteza e tomada de decisão no escuro.", Radar],
] as const;

const timeline = [
  ["1998", "Fundação da Millenium por Evaldo Sérgio dos Santos."],
  ["2015", "Crescimento nacional e especialização em bagagem desacompanhada."],
  ["2020", "Operação 100% remota com agilidade e continuidade no atendimento."],
  ["2024", "Renovação da experiência para elevar clareza, serviço e relacionamento."],
];

const contacts = [
  ["millenium.desp@uol.com.br", Mail],
  ["sergio.mille@uol.com.br", BriefcaseBusiness],
  ["imp.mille@uol.com.br", Boxes],
  ["Atendimento nacional", MapPinned],
] as const;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export default function Home() {
  const [pageProgress, setPageProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const processRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPageProgress(max > 0 ? window.scrollY / max : 0);

      if (processRef.current) {
        const distance = Math.max(1, processRef.current.offsetHeight - window.innerHeight);
        const progress = clamp((window.scrollY - processRef.current.offsetTop) / distance);
        setActiveStep(Math.min(processSteps.length - 1, Math.floor(progress * processSteps.length)));
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-white/10">
        <div className="h-full bg-[var(--signal)] transition-all duration-150" style={{ width: `${pageProgress * 100}%` }} />
      </div>

      <header className="fixed left-1/2 top-4 z-40 flex w-[min(1160px,calc(100%-28px))] -translate-x-1/2 items-center justify-between border border-white/12 bg-[rgba(4,14,25,0.74)] px-4 py-3 shadow-2xl shadow-black/25 backdrop-blur-xl">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Millenium Despachos Aduaneiros">
          <span className="grid size-8 place-items-center bg-[var(--signal)] text-xs font-black text-slate-950">M</span>
          <span className="text-xs font-black tracking-[0.18em] text-white sm:text-sm">MILLENIUM</span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white/58 transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <a href="mailto:millenium.desp@uol.com.br" className="inline-flex items-center gap-2 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.1em] text-slate-950 transition hover:bg-[var(--signal)]">
          Fale conosco
          <ArrowRight className="size-4" />
        </a>
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-media">
          <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1769144256207-bc4bb75b29db?auto=format&fit=crop&fm=jpg&q=74&w=2400">
            <source src="https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-12 pt-28 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-14">
          <div className="hero-copy">
            <p className="eyebrow">Despachos aduaneiros desde 1998</p>
            <h1>Mercadoria retida? A burocracia está travando sua operação?</h1>
            <p>
              A Millenium cuida do desembaraço aduaneiro na importação e exportação, orientando documentos, riscos, regimes especiais e logística para sua carga seguir com segurança.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contato" className="primary-action">
                Fale com especialista
                <ArrowRight className="size-4" />
              </a>
              <a href="#servicos" className="secondary-action">Ver serviços</a>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span>Operação acompanhada</span>
              <Radar className="size-5 text-[var(--signal)]" />
            </div>
            {["Análise documental", "Estratégia aduaneira", "Coordenação logística", "Liberação com segurança"].map((item, index) => (
              <div key={item} className="signal-row" style={{ animationDelay: `${index * 160}ms` }}>
                <span>{item}</span>
                <CheckCircle2 className="size-4 text-[var(--signal)]" />
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section id="servicos" className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="section-heading">
            <p className="eyebrow">Serviços</p>
            <h2>Descomplicamos todo o processo aduaneiro.</h2>
            <p>
              Do primeiro documento à liberação da mercadoria, a Millenium auxilia empresas que precisam importar, exportar e operar com mais previsibilidade.
            </p>
          </div>

          <div className="service-grid">
            {quickServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="service-card" style={{ "--delay": `${index * 120}ms` } as CSSProperties}>
                  <div className="service-icon"><Icon className="size-6" /></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sobre" className="split-section">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">
          <div className="image-frame">
            <img src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=74&w=1800" alt="Containers em operação logística internacional" />
          </div>
          <div className="about-copy">
            <p className="eyebrow">Sobre nós</p>
            <h2>Experiência, agilidade e segurança para operações internacionais.</h2>
            <p>
              Fundada em 1998, a Millenium Despachos Aduaneiros tem como base ética, transparência e compromisso com seus clientes, mantendo-se atualizada com regulamentações aduaneiras.
            </p>
            <div className="stat-row">
              <div><strong>1998</strong><span>fundação</span></div>
              <div><strong>100%</strong><span>home office</span></div>
              <div><strong>BR</strong><span>atendimento</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="processo" ref={processRef} className="process-cinema">
        <div className="sticky top-0 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-14">
          <div className="section-heading compact">
            <p className="eyebrow">Como trabalhamos</p>
            <h2>Entenda nosso processo.</h2>
            <p>
              Uma condução clara para que prazo, documentação e risco não virem surpresa no meio da operação.
            </p>
          </div>

          <div className="process-stack">
            {processSteps.map((step, index) => (
              <article key={step.title} className={`process-card ${index <= activeStep ? "is-active" : ""}`}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="section-heading">
            <p className="eyebrow">Por que escolher</p>
            <h2>Custo, segurança e agilidade na mesma operação.</h2>
          </div>

          <div className="reason-grid">
            {reasons.map(([title, text, Icon], index) => (
              <article key={title} className="reason-card" style={{ "--delay": `${index * 90}ms` } as CSSProperties}>
                <Icon className="size-6 text-[var(--signal)]" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="section-heading">
            <p className="eyebrow">História da Millenium</p>
            <h2>Uma trajetória construída dentro da operação.</h2>
          </div>
          <div className="timeline-grid">
            {timeline.map(([year, text], index) => (
              <article key={year} className="timeline-item" style={{ "--delay": `${index * 100}ms` } as CSSProperties}>
                <strong>{year}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="contact-section">
        <div className="mx-auto grid max-w-7xl overflow-hidden bg-white text-slate-950 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-7 sm:p-12 lg:p-14">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Contato</p>
            <h2>Para fazer uma consulta, entre em contato com a gente.</h2>
            <p>
              Envie sua demanda e receba uma leitura inicial sobre documentos, riscos, prazos e o melhor caminho para sua operação.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:millenium.desp@uol.com.br" className="dark-action">
                Enviar e-mail
                <Mail className="size-4" />
              </a>
              <a href="mailto:sergio.mille@uol.com.br" className="light-action">
                Falar com Sergio
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
          <div className="bg-slate-950 p-7 text-white sm:p-12 lg:p-14">
            <div className="grid gap-5">
              {contacts.map(([label, Icon]) => (
                <div key={label} className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <Icon className="size-5 text-[var(--signal)]" />
                  <span className="font-semibold">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 border border-[var(--signal)]/30 bg-[var(--signal)]/10 p-5">
              <Container className="mb-4 size-7 text-[var(--signal)]" />
              <p className="text-lg font-semibold leading-snug">
                Importação, exportação, Drawback, Admissão Temporária, Consumo de Bordo e consultoria aduaneira.
              </p>
            </div>
          </div>
        </div>
        <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:px-8 lg:px-14">
          <span>Millenium Despachos Aduaneiros</span>
          <span>Ética, transparência e compromisso com seus clientes.</span>
        </footer>
      </section>
    </main>
  );
}
