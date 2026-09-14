import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ObrigadoPage() {
  return (
    <main className="thank-you-page">
      <a href="/" className="thank-you-logo" aria-label="Voltar para a página inicial">
        <img src="/millenium-logo.webp" alt="Millenium Despachos Aduaneiros" />
      </a>

      <section className="thank-you-card">
        <CheckCircle2 className="thank-you-icon" />
        <p className="eyebrow">Solicitação enviada</p>
        <h1>Obrigado. A equipe da Millenium recebeu sua demanda.</h1>
        <p>
          Em breve entraremos em contato para analisar sua operação, revisar as informações enviadas e orientar os próximos passos.
        </p>
        <div className="thank-you-actions">
          <a href="/" className="primary-action">
            <ArrowLeft className="size-4" />
            Voltar para o site
          </a>
          <a href="/#contato" className="secondary-action thank-you-secondary">Enviar outra solicitação</a>
        </div>
      </section>
    </main>
  );
}
