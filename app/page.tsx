"use client";

import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  Container,
  FileSearch,
  Globe2,
  Mail,
  MapPinned,
  Plane,
  Radar,
  Route,
  ShieldCheck,
  Ship,
  Sparkles,
  TimerReset,
  TrendingUp,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const navItems = ["Inicio", "Historia", "Servicos", "Processo", "Contato"];

const heroStats = [
  { label: "desde", value: "1998" },
  { label: "operacao", value: "BR" },
  { label: "modelo", value: "100% remoto" },
];

const services = [
  {
    icon: Ship,
    title: "Despacho aduaneiro",
    text: "Liberacao legal de mercadorias em portos, aeroportos e fronteiras, com acompanhamento das normas alfandegarias.",
  },
  {
    icon: Globe2,
    title: "Assessoria em comercio exterior",
    text: "Orientacao para empresas que precisam operar com seguranca em importacao, exportacao e regimes especiais.",
  },
  {
    icon: Route,
    title: "Logistica internacional",
    text: "Planejamento e coordenacao do transporte internacional de mercadorias com eficiencia, rastreabilidade e controle.",
  },
  {
    icon: ClipboardCheck,
    title: "Consultoria aduaneira",
    text: "Apoio tecnico em Drawback, Admissao Temporaria, Consumo de Bordo e procedimentos regulados.",
  },
];

const compliance = [
  {
    icon: FileSearch,
    title: "Auditoria de processos",
    text: "Revisao de processos aduaneiros para reduzir falhas, evitar penalidades e manter conformidade.",
  },
  {
    icon: ShieldCheck,
    title: "Gerenciamento de riscos",
    text: "Identificacao preventiva de riscos operacionais, fiscais e documentais nas operacoes internacionais.",
  },
  {
    icon: TrendingUp,
    title: "Recuperacao de tributos",
    text: "Mapeamento de valores pagos a mais e apoio na recuperacao para ganho de eficiencia financeira.",
  },
];

const timeline = [
  {
    year: "1998",
    month: "Maio",
    title: "Fundacao da empresa",
    text: "Evaldo Sergio dos Santos inicia a Millenium prestando servicos de exportacao, importacao, Drawback, Admissao Temporaria, Consumo de Bordo e consultoria aduaneira.",
  },
  {
    year: "2015",
    month: "Fevereiro",
    title: "Crescimento nacional",
    text: "A empresa alcanca crescimento substancial, atende grandes clientes por todo o Brasil e aprofunda sua especializacao em bagagem desacompanhada.",
  },
  {
    year: "2020",
    month: "Marco",
    title: "Operacao remota",
    text: "A pandemia acelera a transformacao para trabalho 100% home office, mantendo agilidade, atendimento e eficiencia operacional.",
  },
  {
    year: "2024",
    month: "Junho",
    title: "Renovacao da experiencia",
    text: "A Millenium entra em uma nova fase de aprimoramento para entregar um atendimento ainda mais alto, consultivo e transparente.",
  },
];

const workSteps = [
  "Diagnostico do processo e dos documentos",
  "Classificacao, estrategia e checagem regulatoria",
  "Coordenacao com parceiros logisticos",
  "Liberacao, entrega e acompanhamento final",
];

const team = ["Evaldo Sergio - Socio Diretor", "Maria Alice - Socia", "Vinicios - Especialista"];

export default function Home() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const activeTimeline = useMemo(() => timeline[active % timeline.length], [active]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      setProgress(ratio);
      setActive(Math.min(timeline.length - 1, Math.floor(ratio * timeline.length * 1.35)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-white/10">
        <div className="h-full bg-[var(--signal)] transition-all duration-150" style={{ width: `${progress * 100}%` }} />
      </div>

      <header className="fixed left-1/2 top-5 z-40 flex w-[min(1120px,calc(100%-28px))] -translate-x-1/2 items-center justify-between rounded-full border border-white/12 bg-[rgba(7,18,30,0.72)] px-4 py-3 shadow-2xl shadow-black/25 backdrop-blur-xl">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Millenium Despachos Aduaneiros">
          <span className="grid size-10 place-items-center rounded-full bg-[var(--signal)] text-sm font-black text-slate-950">M</span>
          <span className="hidden text-sm font-semibold tracking-[0.2em] text-white sm:block">MILLENIUM</span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/64 transition hover:bg-white/10 hover:text-white">
              {item}
            </a>
          ))}
        </nav>
        <a href="mailto:millenium.desp@uol.com.br" className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-[var(--signal)]">
          Consulta
          <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
        </a>
      </header>

      <section id="inicio" className="relative min-h-screen overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-14">
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1769144256207-bc4bb75b29db?auto=format&fit=crop&fm=jpg&q=72&w=2600"
            alt="Navio cargueiro em terminal portuario visto de cima"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,15,0.94),rgba(2,12,23,0.72),rgba(2,8,15,0.28))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(91,209,215,0.24),transparent_34%)]" />
        </div>

        <div className="mx-auto grid min-h-[calc(100vh-150px)] max-w-7xl items-end gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="reveal">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--signal)] backdrop-blur">
              <Sparkles className="size-4" />
              Um "Millenium" a frente
            </div>
            <h1 className="max-w-4xl text-balance text-[clamp(3.4rem,10vw,9.4rem)] font-black uppercase leading-[0.84] tracking-[-0.04em] text-white">
              Despacho aduaneiro sem atrito.
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-slate-200 sm:text-xl">
              Desde 1998, a Millenium orienta empresas em importacao, exportacao, logistica internacional e conformidade aduaneira com etica, transparencia e compromisso.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#servicos" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--signal)] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-slate-950 transition hover:scale-[1.02]">
                Ver solucoes
                <ArrowRight className="size-4" />
              </a>
              <a href="#historia" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/10">
                Explorar historia
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay grid gap-4 lg:justify-end">
            <div className="glass-panel w-full max-w-[520px] p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Painel operacional</span>
                <Radar className="size-5 text-[var(--signal)]" />
              </div>
              <div className="grid gap-3">
                {["Importacao", "Exportacao", "Drawback", "Admissao temporaria"].map((item, index) => (
                  <div key={item} className="scan-row" style={{ animationDelay: `${index * 180}ms` }}>
                    <span>{item}</span>
                    <CheckCircle2 className="size-4 text-[var(--signal)]" />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-[8px] border border-white/14 bg-white/8 p-4 backdrop-blur">
                  <strong className="block text-2xl font-black text-white">{stat.value}</strong>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/48">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="historia" className="timeline-stage">
        <div className="sticky top-0 grid min-h-screen items-center gap-10 px-5 py-28 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-14">
          <div className="mx-auto max-w-xl">
            <p className="eyebrow">Historia da Millenium</p>
            <h2 className="mt-4 text-balance text-[clamp(2.5rem,6vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.04em]">
              Uma linha do tempo em movimento.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              A trajetoria combina experiencia pratica, evolucao remota e renovacao da experiencia do cliente.
            </p>
          </div>
          <div className="mx-auto w-full max-w-3xl">
            <div className="relative overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.04] p-6 shadow-2xl shadow-black/30">
              <div className="absolute right-5 top-5 text-[clamp(5rem,16vw,12rem)] font-black leading-none text-white/[0.05]">{activeTimeline.year}</div>
              <div className="relative z-10">
                <span className="text-sm font-black uppercase tracking-[0.3em] text-[var(--signal)]">{activeTimeline.month}</span>
                <h3 className="mt-5 max-w-xl text-4xl font-black uppercase tracking-[-0.03em] text-white sm:text-6xl">{activeTimeline.title}</h3>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{activeTimeline.text}</p>
                <div className="mt-10 grid grid-cols-4 gap-2">
                  {timeline.map((item, index) => (
                    <div key={item.year} className={`h-2 rounded-full transition ${index <= active ? "bg-[var(--signal)]" : "bg-white/12"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Especializacoes e servicos</p>
              <h2 className="mt-4 max-w-4xl text-balance text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-7xl">
                Da documentacao ao transporte.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-slate-300">
              Solucoes para empresas que precisam importar, exportar e manter conformidade sem perder velocidade.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="service-card reveal" style={{ animationDelay: `${index * 90}ms` }}>
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-xs font-black text-white/32">0{index + 1}</span>
                    <Icon className="size-8 text-[var(--signal)]" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-[-0.02em] text-white">{service.title}</h3>
                  <p className="mt-5 leading-7 text-slate-300">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden px-5 py-24 sm:px-8 lg:px-14">
        <img
          src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=75&w=2400"
          alt="Containers empilhados em operacao logistica internacional"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,8,15,0.95),rgba(2,8,15,0.72),rgba(2,8,15,0.94))]" />
        <div className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Parcerias estrategicas</p>
            <h2 className="mt-4 text-balance text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-7xl">
              Rede logistica para reduzir friccao.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              ["Transporte internacional", "Parcerias solidas com empresas de logistica internacional para transportar mercadorias com eficiencia e seguranca."],
              ["Armazenagem e distribuicao", "Contratacao de solucoes para otimizar a cadeia global dos clientes, buscando o melhor custo-beneficio."],
              ["Atendimento personalizado", "Suporte ajustado a cada operacao, do pequeno empreendimento a grandes corporacoes."],
            ].map(([title, text]) => (
              <div key={title} className="glass-panel p-6">
                <h3 className="text-2xl font-black uppercase text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="px-5 py-24 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="eyebrow">Como trabalhamos</p>
            <h2 className="mt-4 text-balance text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white md:text-7xl">
              Controle de ponta a ponta.
            </h2>
            <div className="mt-10 grid gap-3">
              {team.map((member) => (
                <div key={member} className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
                  <BadgeCheck className="size-5 text-[var(--signal)]" />
                  <span className="font-semibold text-slate-200">{member}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {workSteps.map((step, index) => (
              <div key={step} className="process-row">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--signal)] text-sm font-black text-slate-950">{index + 1}</span>
                <p className="text-xl font-bold text-white">{step}</p>
              </div>
            ))}
            <div className="grid gap-4 md:grid-cols-3">
              {compliance.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-[8px] border border-white/10 bg-white/[0.04] p-5">
                    <Icon className="mb-5 size-7 text-[var(--signal)]" />
                    <h3 className="text-lg font-black uppercase text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="px-5 pb-8 pt-20 sm:px-8 lg:px-14">
        <div className="mx-auto overflow-hidden rounded-[8px] border border-white/12 bg-white text-slate-950">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 sm:p-12 lg:p-16">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Contato</p>
              <h2 className="mt-4 max-w-4xl text-balance text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl">
                Entre em contato para uma consulta personalizada.
              </h2>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:millenium.desp@uol.com.br" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-slate-800">
                  Enviar email
                  <Mail className="size-4" />
                </a>
                <a href="mailto:sergio.mille@uol.com.br" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] transition hover:bg-slate-100">
                  Falar com Sergio
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
            <div className="bg-slate-950 p-7 text-white sm:p-12 lg:p-16">
              <div className="grid h-full content-between gap-10">
                <div className="grid gap-5">
                  {[
                    ["millenium.desp@uol.com.br", Mail],
                    ["sergio.mille@uol.com.br", BriefcaseBusiness],
                    ["imp.mille@uol.com.br", Boxes],
                    ["Atendimento nacional", MapPinned],
                  ].map(([label, Icon]) => {
                    const TypedIcon = Icon as typeof Mail;
                    return (
                      <div key={label as string} className="flex items-center gap-4 border-b border-white/10 pb-4">
                        <TypedIcon className="size-5 text-[var(--signal)]" />
                        <span className="font-semibold">{label as string}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="rounded-[8px] border border-[var(--signal)]/30 bg-[var(--signal)]/10 p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <TimerReset className="size-5 text-[var(--signal)]" />
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[var(--signal)]">Proxima etapa</span>
                  </div>
                  <p className="text-2xl font-black uppercase tracking-[-0.03em]">Analise da sua operacao e orientacao do melhor caminho aduaneiro.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-3 py-8 text-sm text-slate-500 sm:flex-row">
          <span>Millenium Despachos Aduaneiros</span>
          <span>Etica, transparencia e compromisso com seus clientes.</span>
        </footer>
      </section>
    </main>
  );
}
