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
  ShieldAlert,
  ShieldCheck,
  Ship,
  TimerReset,
  TrendingUp,
} from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type IconType = typeof Ship;

const navItems = [
  ["Inicio", "inicio"],
  ["Riscos", "riscos"],
  ["Historia", "historia"],
  ["Servicos", "servicos"],
  ["Operação", "operacao"],
  ["Contato", "contato"],
];

const painPoints = [
  {
    icon: TimerReset,
    title: "Carga parada custa caro",
    text: "Cada atraso no desembaraço pressiona armazenagem, prazo comercial e fluxo de caixa.",
  },
  {
    icon: FileSearch,
    title: "Documento errado trava a operação",
    text: "Uma classificação, licença ou informação inconsistente pode virar exigência, multa ou retrabalho.",
  },
  {
    icon: ShieldAlert,
    title: "Risco fiscal não avisa antes",
    text: "Auditoria, conformidade e estratégia tributária precisam entrar antes do problema aparecer.",
  },
];

const timeline = [
  {
    year: "1998",
    label: "Fundação",
    title: "Uma operação criada para resolver comércio exterior na prática.",
    text: "A Millenium nasce com Evaldo Sérgio dos Santos atuando em importação, exportação, Drawback, Admissão Temporária, Consumo de Bordo e consultoria aduaneira.",
  },
  {
    year: "2015",
    label: "Escala",
    title: "Grandes clientes pelo Brasil e especialização em bagagem desacompanhada.",
    text: "O crescimento amplia a capacidade de atendimento e consolida a empresa em operações que pedem precisão documental e resposta rápida.",
  },
  {
    year: "2020",
    label: "Agilidade",
    title: "Modelo 100% remoto sem perder acompanhamento.",
    text: "A operação passa por uma virada digital, mantendo produtividade, contato próximo e continuidade nos processos aduaneiros.",
  },
  {
    year: "2024",
    label: "Renovação",
    title: "Uma nova fase para elevar experiência, clareza e performance.",
    text: "A empresa aprimora sua forma de atender, com foco em orientação consultiva e mais previsibilidade para o cliente.",
  },
];

const services: Array<{
  icon: IconType;
  title: string;
  tag: string;
  text: string;
}> = [
  {
    icon: Ship,
    title: "Despacho aduaneiro",
    tag: "Portos, aeroportos e fronteiras",
    text: "Desembaraço para importação e exportação com leitura técnica das normas e acompanhamento até a liberação.",
  },
  {
    icon: Globe2,
    title: "Assessoria em comércio exterior",
    tag: "Estratégia antes do embarque",
    text: "Orientação para evitar travas alfandegárias, organizar documentos e conduzir operações internacionais com segurança.",
  },
  {
    icon: Route,
    title: "Logística internacional",
    tag: "Transporte coordenado",
    text: "Planejamento com parceiros de transporte, armazenagem e distribuição para reduzir atrito na cadeia global.",
  },
  {
    icon: ClipboardCheck,
    title: "Regimes e consultoria",
    tag: "Drawback, admissão temporária e consumo de bordo",
    text: "Apoio em regimes especiais e processos que exigem conhecimento técnico para capturar eficiência e evitar risco.",
  },
];

const operationSteps = [
  "Analisamos a operação e os documentos antes do ponto crítico.",
  "Definimos o melhor caminho aduaneiro, fiscal e logístico.",
  "Coordenamos parceiros para manter a carga em movimento.",
  "Acompanhamos exigências, liberação e entrega com clareza.",
];

const compliance = [
  ["Auditoria", "Conformidade dos processos aduaneiros para evitar penalidades.", FileCheck2],
  ["Riscos", "Identificação de fragilidades fiscais, documentais e operacionais.", ShieldCheck],
  ["Tributos", "Recuperação de valores pagos a mais e ganho financeiro.", TrendingUp],
] as const;

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
  const [scrollY, setScrollY] = useState(0);
  const [pageProgress, setPageProgress] = useState(0);
  const timelineRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const operationRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollY(window.scrollY);
      setPageProgress(max > 0 ? window.scrollY / max : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionProgress = (element: HTMLElement | null) => {
    if (!element || typeof window === "undefined") return 0;
    const distance = Math.max(1, element.offsetHeight - window.innerHeight);
    return clamp((scrollY - element.offsetTop) / distance);
  };

  const timelineProgress = sectionProgress(timelineRef.current);
  const servicesProgress = sectionProgress(servicesRef.current);
  const operationProgress = sectionProgress(operationRef.current);
  const activeTimeline = Math.min(timeline.length - 1, Math.floor(timelineProgress * timeline.length));
  const activeOperation = Math.min(operationSteps.length - 1, Math.floor(operationProgress * operationSteps.length));

  const heroShift = useMemo(() => Math.min(scrollY * 0.16, 120), [scrollY]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-white/10">
        <div className="h-full bg-[var(--signal)]" style={{ width: `${pageProgress * 100}%` }} />
      </div>

      <header className="fixed left-1/2 top-4 z-40 flex w-[min(1180px,calc(100%-28px))] -translate-x-1/2 items-center justify-between border border-white/12 bg-[rgba(5,13,23,0.72)] px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Millenium Despachos Aduaneiros">
          <span className="grid size-8 place-items-center bg-[var(--signal)] text-xs font-black text-slate-950">M</span>
          <span className="text-[0.72rem] font-black tracking-[0.18em] text-white sm:text-sm">MILLENIUM</span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegacao principal">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/56 transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <a href="mailto:millenium.desp@uol.com.br" className="inline-flex items-center gap-2 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-slate-950 transition hover:bg-[var(--signal)]">
          Consulta
          <ArrowRight className="size-4" />
        </a>
      </header>

      <section id="inicio" className="relative min-h-screen overflow-hidden px-5 pb-14 pt-28 sm:px-8 lg:px-14">
        <div className="absolute inset-0 -z-20">
          <video
            className="h-full w-full object-cover opacity-70"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1769144256207-bc4bb75b29db?auto=format&fit=crop&fm=jpg&q=74&w=2400"
          >
            <source src="https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,18,0.96),rgba(2,8,18,0.74),rgba(2,8,18,0.34))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(91,209,215,0.28),transparent_32rem)]" />
        </div>

        <div className="mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl items-end gap-12 lg:grid-cols-[1fr_0.86fr]">
          <div className="intro-reveal" style={{ transform: `translateY(${heroShift * -0.18}px)` }}>
            <p className="eyebrow">Despachos aduaneiros desde 1998</p>
            <h1 className="mt-5 max-w-4xl text-balance text-[clamp(2.35rem,5.2vw,5.25rem)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
              Sua mercadoria não pode ficar refém da burocracia.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-200 sm:text-xl">
              A Millenium conduz importadores e exportadores por processos aduaneiros complexos com estratégia documental, conformidade e acompanhamento próximo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#riscos" className="inline-flex items-center justify-center gap-2 bg-[var(--signal)] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-slate-950 transition hover:translate-y-[-2px]">
                Ver a jornada
                <ArrowRight className="size-4" />
              </a>
              <a href="mailto:millenium.desp@uol.com.br" className="inline-flex items-center justify-center border border-white/20 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/10">
                Falar com especialista
              </a>
            </div>
          </div>

          <div className="intro-reveal intro-delay">
            <div className="ops-panel">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-white/54">Operacao em curso</span>
                <Radar className="size-5 text-[var(--signal)]" />
              </div>
              <div className="mt-5 grid gap-3">
                {["RADAR ativo", "Documentos conferidos", "Carga monitorada", "Risco fiscal mapeado"].map((item, index) => (
                  <div key={item} className="signal-row" style={{ animationDelay: `${index * 180}ms` }}>
                    <span>{item}</span>
                    <CheckCircle2 className="size-4 text-[var(--signal)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="riscos" className="relative px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-head">
            <p className="eyebrow">O problema real</p>
            <h2 className="mt-4 max-w-5xl text-balance text-[clamp(2.4rem,5.4vw,5.8rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-white">
              Comércio exterior não perdoa improviso.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <article key={point.title} className="motion-card" style={{ "--delay": `${index * 110}ms` } as CSSProperties}>
                  <Icon className="mb-8 size-9 text-[var(--signal)]" />
                  <h3 className="text-2xl font-black uppercase tracking-[-0.02em] text-white">{point.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{point.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="historia" ref={timelineRef} className="scroll-cinema">
        <div className="sticky top-0 flex min-h-screen items-center px-5 py-24 sm:px-8 lg:px-14">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="eyebrow">Historia em movimento</p>
              <h2 className="mt-4 text-balance text-[clamp(2.25rem,4.8vw,4.9rem)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
                26 anos criando previsibilidade onde outros veem burocracia.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
                Role para atravessar os marcos da Millenium sem cair em uma seção vazia.
              </p>
            </div>

            <div className="timeline-shell">
              <div className="timeline-track">
                <div className="timeline-fill" style={{ width: `${timelineProgress * 100}%` }} />
              </div>
              <div className="grid gap-5">
                {timeline.map((item, index) => {
                  const isActive = index === activeTimeline;
                  const distance = index - activeTimeline;
                  return (
                    <article
                      key={item.year}
                      className={`timeline-card ${isActive ? "is-active" : ""}`}
                      style={{
                        transform: `translateY(${distance * 10}px) scale(${isActive ? 1 : 0.96})`,
                        opacity: isActive ? 1 : 0,
                      }}
                      aria-hidden={!isActive}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-xs font-black uppercase tracking-[0.24em] text-[var(--signal)]">{item.label}</span>
                          <h3 className="mt-2 text-4xl font-black leading-none text-white sm:text-6xl">{item.year}</h3>
                        </div>
                        <span className="hidden text-right text-xs font-black uppercase tracking-[0.18em] text-white/32 sm:block">
                          0{index + 1}/04
                        </span>
                      </div>
                      <h4 className="mt-6 text-balance text-2xl font-black uppercase tracking-[-0.02em] text-white sm:text-4xl">{item.title}</h4>
                      <p className="mt-4 max-w-2xl leading-7 text-slate-300">{item.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" ref={servicesRef} className="relative min-h-[240vh]">
        <div className="sticky top-0 grid min-h-screen items-center overflow-hidden px-5 py-24 sm:px-8 lg:px-14">
          <div className="absolute inset-0 -z-20">
            <img
              src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=74&w=2400"
              alt="Containers em operação logística"
              className="h-full w-full object-cover opacity-34"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#020812,rgba(2,8,18,0.82),#020812)]" />
          </div>

          <div className="mx-auto w-full max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="eyebrow">Servicos</p>
                <h2 className="mt-4 text-balance text-[clamp(2.25rem,4.8vw,4.9rem)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
                  Uma operação aduaneira que anda antes do problema estourar.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                A estrutura segue o que o cliente mais precisa enxergar: importação, exportação, regimes especiais, logística e segurança regulatória.
              </p>
            </div>

            <div className="service-rail" style={{ transform: `translateX(${-servicesProgress * 34}%)` }}>
              {services.map((service, index) => {
                const Icon = service.icon;
                const reveal = clamp((servicesProgress * services.length - index) * 1.3);
                return (
                  <article
                    key={service.title}
                    className="service-slide"
                    style={{
                      opacity: 0.2 + reveal * 0.8,
                      transform: `translateY(${(1 - reveal) * 34}px)`,
                    }}
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-sm font-black text-white/34">0{index + 1}</span>
                      <Icon className="size-10 text-[var(--signal)]" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-[var(--signal)]">{service.tag}</span>
                    <h3 className="mt-4 text-3xl font-black uppercase leading-none tracking-[-0.03em] text-white">{service.title}</h3>
                    <p className="mt-5 leading-7 text-slate-300">{service.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="operacao" ref={operationRef} className="px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.84fr_1.16fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Como trabalhamos</p>
              <h2 className="mt-4 text-balance text-[clamp(2.25rem,4.8vw,4.9rem)] font-black uppercase leading-[0.92] tracking-[-0.025em] text-white">
                Menos susto. Mais controle de ponta a ponta.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
              Do diagnóstico documental à liberação da carga, a Millenium acompanha as etapas que costumam travar prazo, custo e conformidade.
            </p>
          </div>

          <div className="operation-grid">
            {operationSteps.map((step, index) => (
              <article key={step} className={`operation-step ${index <= activeOperation ? "is-on" : ""}`}>
                <span className="step-index">0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
            <div className="grid gap-4 md:grid-cols-3">
              {compliance.map(([title, text, Icon]) => (
                <article key={title} className="compliance-card">
                  <Icon className="mb-5 size-7 text-[var(--signal)]" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-10 border-y border-white/10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Experiencia do cliente</p>
            <h2 className="mt-4 text-balance text-[clamp(2.2rem,4.8vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-white">
              Atendimento personalizado para quem importa, exporta e precisa decidir rápido.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Pequenos empreendimentos", "Grandes corporacoes", "Importadores", "Exportadores"].map((item) => (
              <div key={item} className="client-chip">
                <BadgeCheck className="size-5 text-[var(--signal)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-5 pb-8 pt-10 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl overflow-hidden bg-white text-slate-950">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="p-7 sm:p-12 lg:p-16">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Consulta personalizada</p>
              <h2 className="mt-4 max-w-4xl text-balance text-[clamp(2.35rem,5.2vw,5.6rem)] font-black uppercase leading-[0.9] tracking-[-0.04em]">
                Antes de embarcar, destrave o caminho aduaneiro.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Envie sua demanda e receba uma leitura inicial sobre documentos, riscos, prazos e próxima etapa da operação.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:millenium.desp@uol.com.br" className="inline-flex items-center justify-center gap-2 bg-slate-950 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-slate-800">
                  Enviar email
                  <Mail className="size-4" />
                </a>
                <a href="mailto:sergio.mille@uol.com.br" className="inline-flex items-center justify-center gap-2 border border-slate-200 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] transition hover:bg-slate-100">
                  Falar com Sergio
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
            <div className="bg-slate-950 p-7 text-white sm:p-12 lg:p-16">
              <div className="grid gap-5">
                {contacts.map(([label, Icon]) => (
                  <div key={label} className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <Icon className="size-5 text-[var(--signal)]" />
                    <span className="font-semibold">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 border border-[var(--signal)]/36 bg-[var(--signal)]/10 p-5">
                <Container className="mb-5 size-8 text-[var(--signal)]" />
                <p className="text-2xl font-black uppercase tracking-[-0.03em]">
                  Importação, exportação, Drawback, Admissão Temporária e consultoria aduaneira.
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-3 py-8 text-sm text-slate-500 sm:flex-row">
          <span>Millenium Despachos Aduaneiros</span>
          <span>Ética, transparência e compromisso com seus clientes.</span>
        </footer>
      </section>
    </main>
  );
}
