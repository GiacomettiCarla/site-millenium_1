import type { Metadata } from "next";
import { ArrowLeft, Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade | Millenium Despachos Aduaneiros",
  description: "Saiba como a Millenium trata os dados pessoais enviados pelo formulário de contato.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="privacy-page">
      <header className="privacy-header">
        <a href="/" aria-label="Voltar para a página inicial">
          <img src="/millenium-logo.webp" alt="Millenium Despachos Aduaneiros" />
        </a>
        <a href="/" className="privacy-back-link">
          <ArrowLeft className="size-4" />
          Voltar ao site
        </a>
      </header>

      <article className="privacy-content">
        <div className="privacy-intro">
          <ShieldCheck className="privacy-icon" aria-hidden="true" />
          <p className="eyebrow">Privacidade e proteção de dados</p>
          <h1>Política de Privacidade</h1>
          <p>
            Esta política explica, de forma clara, como a Millenium Despachos Aduaneiros trata os dados pessoais recebidos por meio deste site, em conformidade com a Lei nº 13.709/2018, a Lei Geral de Proteção de Dados Pessoais (LGPD).
          </p>
          <span>Última atualização: 16 de setembro de 2026.</span>
        </div>

        <section>
          <h2>1. Quem trata seus dados</h2>
          <p>O controlador dos dados pessoais é <strong>Millenium Despachos Aduaneiros Ltda.</strong>, inscrita no CNPJ sob o nº <strong>02.566.190/0001-34</strong>.</p>
          <p>Canal para assuntos de privacidade e proteção de dados: <a href="mailto:millenium.desp@uol.com.br">millenium.desp@uol.com.br</a>.</p>
        </section>

        <section>
          <h2>2. Dados que podemos coletar</h2>
          <p>Quando você envia uma solicitação pelo formulário, podemos receber nome, empresa, e-mail, telefone, tipo de operação, prazo ou urgência e a mensagem informada.</p>
          <p>O servidor de hospedagem também pode registrar dados técnicos de acesso, como endereço IP, data e horário, navegador e páginas acessadas, em logs necessários para segurança, prevenção de fraude e funcionamento do serviço. O endereço IP não é incluído no e-mail enviado pelo formulário.</p>
        </section>

        <section>
          <h2>3. Para que usamos os dados</h2>
          <ul>
            <li>Responder à solicitação e entrar em contato com você.</li>
            <li>Entender a operação aduaneira e preparar uma análise inicial.</li>
            <li>Dar andamento a procedimentos preliminares relacionados à possível contratação de serviços.</li>
            <li>Proteger o site, prevenir abusos e cumprir obrigações legais ou regulatórias.</li>
          </ul>
          <p>O tratamento pode se apoiar nas hipóteses legais previstas no artigo 7º da LGPD, especialmente procedimentos preliminares relacionados a contrato solicitados pelo titular, cumprimento de obrigação legal ou regulatória, exercício regular de direitos e legítimo interesse, quando aplicável e respeitados os direitos do titular.</p>
        </section>

        <section>
          <h2>4. Compartilhamento</h2>
          <p>Os dados podem ser tratados por fornecedores necessários ao funcionamento do site e do atendimento, como hospedagem e serviço de e-mail. A Millenium não vende dados pessoais. Informações somente serão compartilhadas com terceiros quando isso for necessário para responder à solicitação, prestar o serviço, cumprir uma obrigação legal ou proteger direitos.</p>
        </section>

        <section>
          <h2>5. Armazenamento e eliminação</h2>
          <p>Os dados são mantidos pelo tempo necessário para atender à finalidade informada, manter o histórico do relacionamento e cumprir prazos legais ou regulatórios. Encerrada a necessidade, os dados serão eliminados ou anonimizados, salvo quando a conservação for permitida ou exigida pela legislação.</p>
        </section>

        <section>
          <h2>6. Seus direitos</h2>
          <p>Nos termos da LGPD, você pode solicitar confirmação da existência de tratamento, acesso, correção, anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade, informação sobre compartilhamentos, portabilidade quando regulamentada, revisão de decisões automatizadas e demais direitos previstos em lei.</p>
          <p>Para exercer seus direitos, envie uma mensagem para <a href="mailto:millenium.desp@uol.com.br">millenium.desp@uol.com.br</a>. Poderemos solicitar informações para confirmar sua identidade e proteger seus dados contra acesso indevido.</p>
        </section>

        <section>
          <h2>7. Segurança</h2>
          <p>Adotamos medidas técnicas e administrativas compatíveis com a natureza dos dados tratados para reduzir riscos de acesso não autorizado, perda, alteração ou divulgação indevida. Nenhum ambiente digital é totalmente livre de riscos, mas eventuais incidentes serão tratados conforme a legislação aplicável.</p>
        </section>

        <section>
          <h2>8. Cookies e tecnologias semelhantes</h2>
          <p>Na versão atual, este site não utiliza cookies de publicidade, análise de comportamento ou criação de perfis. Por isso, não exibimos um banner de consentimento para cookies não essenciais. Recursos técnicos estritamente necessários podem ser usados pela infraestrutura de hospedagem para segurança e funcionamento.</p>
          <p>Se ferramentas de análise, publicidade ou outros cookies não essenciais forem adicionados no futuro, esta política será atualizada e serão disponibilizados controles adequados de escolha antes da ativação dessas tecnologias.</p>
        </section>

        <section>
          <h2>9. Transferência e fornecedores</h2>
          <p>Alguns fornecedores de tecnologia podem utilizar infraestrutura localizada fora do Brasil. Quando isso ocorrer, serão observadas as regras da LGPD aplicáveis à transferência internacional e à proteção dos dados pessoais.</p>
        </section>

        <section>
          <h2>10. Atualizações desta política</h2>
          <p>Esta política poderá ser atualizada para refletir mudanças no site, nos serviços ou na legislação. A data da revisão mais recente ficará indicada no início da página.</p>
        </section>

        <div className="privacy-contact">
          <Mail className="size-5" aria-hidden="true" />
          <div>
            <strong>Fale com a Millenium sobre seus dados</strong>
            <a href="mailto:millenium.desp@uol.com.br">millenium.desp@uol.com.br</a>
          </div>
        </div>
      </article>

      <footer className="privacy-footer">
        <span>Millenium Despachos Aduaneiros Ltda. · CNPJ 02.566.190/0001-34</span>
        <span>© 2026. Todos os direitos reservados.</span>
      </footer>
    </main>
  );
}
