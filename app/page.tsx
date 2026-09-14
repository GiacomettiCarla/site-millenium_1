"use client";

import {
  Anchor,
  ArrowRight,
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  FileSearch,
  Mail,
  MapPinned,
  PackageCheck,
  Plane,
  Radar,
  Route,
  ShieldCheck,
  Ship,
  TimerReset,
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
    icon: Anchor,
    title: "Importação",
    text: "Desembaraço aduaneiro, conferência documental e orientação para reduzir atrasos na chegada da carga.",
  },
  {
    icon: Plane,
    title: "Exportação",
    text: "Apoio no trâmite de documentos e condução das etapas necessárias para sua operação sair com segurança.",
  },
  {
    icon: FileSearch,
    title: "Comércio exterior",
    text: "Assessoria para regimes especiais, Drawback, Admissão Temporária, Consumo de Bordo e consultoria aduaneira.",
  },
];

const processSteps = [
  {
    icon: FileSearch,
    title: "Tenha uma análise",
    text: "Entendemos sua mercadoria, documentos, prazo e possíveis riscos antes de iniciar o processo.",
  },
  {
    icon: Route,
    title: "Organize a operação",
    text: "Definimos o melhor caminho aduaneiro, fiscal e logístico para evitar retrabalho e exigências.",
  },
  {
    icon: PackageCheck,
    title: "Receba com segurança",
    text: "Acompanhamos desembaraço, parceiros logísticos, liberação e entrega com comunicação próxima.",
  },
];

const reasons = [
  ["Conformidade aduaneira", "Cuidado técnico em cada etapa do processo aduaneiro.", ShieldCheck],
  ["Resposta próxima", "Contato direto para acompanhar dúvidas, documentos e prazos.", Mail],
  ["Experiência desde 1998", "Atuação em importação, exportação e regimes especiais.", BadgeCheck],
  ["Prazos acompanhados", "Visibilidade sobre etapas críticas para reduzir decisões no escuro.", TimerReset],
] as const;

const timeline = [
  ["1998", "Fundação da Millenium por Evaldo Sérgio dos Santos."],
  ["2015", "Crescimento nacional e especialização em bagagem desacompanhada."],
  ["2020", "Atendimento remoto estruturado para manter agilidade e continuidade na operação."],
  ["2024", "Renovação da experiência para elevar clareza, serviço e relacionamento."],
];

const contacts = [
  ["millenium.desp@uol.com.br", Mail],
  ["sergio.mille@uol.com.br", BriefcaseBusiness],
  ["imp.mille@uol.com.br", Boxes],
  ["Atendimento nacional", MapPinned],
] as const;

const faqs = [
  [
    "Em que momento devo acionar a Millenium?",
    "O ideal é antes do embarque ou antes da chegada da carga. Assim conseguimos revisar documentos, orientar o melhor caminho aduaneiro e reduzir riscos de atraso, exigência ou custo extra.",
  ],
  [
    "A Millenium atende importação e exportação?",
    "Sim. A empresa atua com importação, exportação, regimes especiais e consultoria aduaneira para empresas de diferentes segmentos.",
  ],
  [
    "Vocês ajudam em Drawback e Admissão Temporária?",
    "Sim. A Millenium presta apoio em Drawback, Admissão Temporária, Consumo de Bordo e outras demandas que exigem orientação técnica no comércio exterior.",
  ],
  [
    "O atendimento é feito somente presencialmente?",
    "Não. A operação foi estruturada para atendimento remoto, com acompanhamento próximo dos processos e comunicação direta durante as etapas da operação.",
  ],
  [
    "Que informações devo enviar para uma primeira análise?",
    "Envie o tipo de operação, origem ou destino, descrição da mercadoria, previsão de chegada ou embarque e quais documentos já possui. Com isso a equipe consegue orientar a próxima etapa.",
  ],
];

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLElement | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const node = counterRef.current;
    if (!node) return;

    let frame = 0;
    let animationFrame = 0;
    const totalFrames = 58;

    const tick = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setCount(Math.round(value * progress));
      if (frame < totalFrames) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    const start = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;
      animationFrame = window.requestAnimationFrame(tick);
    };

    const checkVisibility = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.86 && rect.bottom > 0) {
        start();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          start();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.2 },
    );

    observer.observe(node);
    checkVisibility();
    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [value]);

  return (
    <strong ref={counterRef}>
      +{count}
      {suffix}
    </strong>
  );
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
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-black/10">
        <div className="h-full bg-[var(--signal)] transition-all duration-150" style={{ width: `${pageProgress * 100}%` }} />
      </div>

      <header className="site-header fixed left-1/2 top-4 z-40 flex w-[min(1160px,calc(100%-28px))] -translate-x-1/2 items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Millenium Despachos Aduaneiros">
          <img src="/millenium-logo.webp" alt="Millenium Despachos Aduaneiros" className="header-logo" />
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] transition">
              {label}
            </a>
          ))}
        </nav>
        <a href="#contato" className="header-action inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-[0.1em] transition">
          Fale conosco
          <ArrowRight className="size-4" />
        </a>
      </header>

      <section id="inicio" className="hero-section">
        <div className="hero-media">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-12 pt-28 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-14">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow-pill">Despachos aduaneiros desde 1998</p>
            <h1>Mercadoria retida? A burocracia está travando sua operação?</h1>
            <p>
              A Millenium cuida do desembaraço aduaneiro na importação e exportação, orientando documentos, riscos, regimes especiais e logística para sua carga seguir com segurança.
            </p>
            <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contato" className="primary-action hero-primary-action">
                Fale com especialista
                <ArrowRight className="size-4" />
              </a>
              <a href="#contato" className="secondary-action">Solicitar análise</a>
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

      <section id="servicos" className="section-pad light-section">
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

      <section id="sobre" className="split-section light-section">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">
          <div className="image-frame">
            <img src="/millenium-empresa.webp" alt="Recepção da Millenium Despachos Aduaneiros" />
          </div>
          <div className="about-copy">
            <p className="eyebrow">Sobre nós</p>
            <h2>Experiência, agilidade e segurança para operações internacionais.</h2>
            <p>
              Desde 1998, a Millenium Despachos Aduaneiros une domínio técnico, transparência e acompanhamento próximo para que empresas importem e exportem com mais segurança.
            </p>
            <div className="stat-row">
              <div><CountUp value={27} /><span>anos de<br />experiência</span></div>
              <div><CountUp value={500} /><span>empresas<br />atendidas</span></div>
              <div><CountUp value={3} /><span>frentes<br />de atuação</span></div>
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
            <a href="#contato" className="dark-action section-cta desktop-process-cta">
              Solicitar análise
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="process-stack">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
              <article key={step.title} className={`process-card ${index <= activeStep ? "is-active" : ""}`}>
                <span><Icon className="size-5" /></span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
              );
            })}
          </div>
          <a href="#contato" className="light-action section-cta mobile-section-cta">
            Fale com especialista
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      <section className="section-pad brand-section">
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
          <a href="#contato" className="dark-action section-cta reasons-cta">
            Quero reduzir riscos da operação
            <ArrowRight className="size-4" />
          </a>
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
          <a href="#contato" className="light-action section-cta mobile-section-cta">
            Falar com a Millenium
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      <section id="contato" className="contact-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="form-shell">
            <div className="form-copy">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Consulta personalizada</p>
              <h2>Para fazer uma consulta, conte o que precisa desembaraçar.</h2>
              <p>
                Envie sua demanda e receba uma leitura inicial sobre documentos, riscos, prazos e o melhor caminho para sua operação.
              </p>
              <div className="contact-list">
                {contacts.map(([label, Icon]) => (
                  <div key={label}>
                    <Icon className="size-5 text-[var(--signal)]" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <form
              className="lead-form"
              action="mailto:millenium.desp@uol.com.br"
              method="post"
              encType="text/plain"
            >
              <label>
                Nome
                <input name="nome" type="text" placeholder="Seu nome" required />
              </label>
              <label>
                Empresa
                <input name="empresa" type="text" placeholder="Nome da empresa" />
              </label>
              <label>
                E-mail
                <input name="email" type="email" placeholder="seu@email.com" required />
              </label>
              <label>
                Telefone
                <input name="telefone" type="tel" placeholder="(00) 00000-0000" />
              </label>
              <label>
                Tipo de operação
                <select name="tipo_de_operacao" defaultValue="">
                  <option value="" disabled>Selecione uma opção</option>
                  <option>Importação</option>
                  <option>Exportação</option>
                  <option>Drawback</option>
                  <option>Admissão Temporária</option>
                  <option>Consultoria aduaneira</option>
                  <option>Outro</option>
                </select>
              </label>
              <label>
                Previsão ou urgência
                <input name="prazo" type="text" placeholder="Ex.: carga chega em 10 dias" />
              </label>
              <label className="full-field">
                Conte um pouco sobre sua demanda
                <textarea
                  name="mensagem"
                  placeholder="Informe origem, destino, mercadoria, etapa atual e documentos que já possui."
                  rows={5}
                  required
                />
              </label>
              <button type="submit" className="dark-action">
                Solicitar análise
                <ArrowRight className="size-4" />
              </button>
            </form>

            <div className="contact-list mobile-contact-list">
              {contacts.map(([label, Icon]) => (
                <div key={label}>
                  <Icon className="size-5 text-[var(--signal)]" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="faq-block">
            <div className="section-heading">
              <p className="eyebrow">FAQ</p>
              <h2>Perguntas frequentes.</h2>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question} className="faq-item">
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
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
