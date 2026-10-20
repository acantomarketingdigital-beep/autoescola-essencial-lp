import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Autoescola Essencial: como tratamos dados pessoais em conformidade com a LGPD (Lei nº 13.709/2018).",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaDePrivacidade() {
  return (
    <LegalPage title="Política de Privacidade" updatedAt="20 de outubro de 2026">
      <p>
        Esta Política de Privacidade descreve como a <strong>{BUSINESS.legalName}</strong>, inscrita
        no CNPJ sob o nº {BUSINESS.cnpj}, com sede na {BUSINESS.address.full} (“Autoescola
        Essencial”, “nós”), trata os dados pessoais dos visitantes deste site e das pessoas que
        entram em contato conosco, em conformidade com a Lei Geral de Proteção de Dados Pessoais
        (LGPD — Lei nº 13.709/2018).
      </p>

      <h2>1. Quem somos</h2>
      <p>
        A Autoescola Essencial é uma empresa privada, Centro de Formação de Condutores (CFC)
        credenciado ao DETRAN sob o nº {BUSINESS.cfcNumber}. Não somos um órgão público e não
        coletamos, por meio deste site, dados para fins de processos oficiais de habilitação.
      </p>

      <h2>2. Dados que coletamos</h2>
      <ul>
        <li>
          <strong>Dados fornecidos por você:</strong> nome, telefone e informações que você enviar
          voluntariamente ao nos contatar pelo WhatsApp, telefone ou e-mail.
        </li>
        <li>
          <strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas acessadas,
          data e horário de acesso, coletados de forma automática por meio de cookies e
          tecnologias semelhantes, inclusive de ferramentas de medição e publicidade (como Google
          Ads e Google Analytics), quando utilizadas.
        </li>
      </ul>
      <p>Este site não possui formulários de cadastro e não solicita dados bancários ou senhas.</p>

      <h2>3. Finalidades e bases legais</h2>
      <ul>
        <li>Responder às suas solicitações e enviar informações sobre nossos serviços (execução de procedimentos preliminares a contrato — art. 7º, V, LGPD);</li>
        <li>Executar o contrato de prestação de serviços de formação de condutores, quando contratado (art. 7º, V);</li>
        <li>Cumprir obrigações legais e regulatórias aplicáveis aos CFCs (art. 7º, II);</li>
        <li>Medir a audiência e melhorar o site e nossas campanhas (legítimo interesse — art. 7º, IX — ou consentimento, quando exigido).</li>
      </ul>

      <h2>4. Compartilhamento</h2>
      <p>
        Não vendemos dados pessoais. Podemos compartilhá-los apenas com: (i) órgãos de trânsito e
        autoridades, quando exigido por lei ou necessário ao processo de formação contratado;
        (ii) prestadores de serviço que nos apoiam (hospedagem, mensageria, ferramentas de
        medição), sob dever de confidencialidade; (iii) mediante ordem judicial ou requisição de
        autoridade competente.
      </p>

      <h2>5. WhatsApp e serviços de terceiros</h2>
      <p>
        Ao clicar nos botões de contato, você é direcionado diretamente ao WhatsApp
        (wa.me), serviço operado pela WhatsApp LLC/Meta, que possui política de privacidade
        própria. O mapa de localização é fornecido pelo Google Maps.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Utilizamos cookies essenciais ao funcionamento do site e, quando aplicável, cookies de
        medição e publicidade. Você pode gerenciar ou bloquear cookies nas configurações do seu
        navegador; isso pode afetar algumas funcionalidades.
      </p>

      <h2>7. Armazenamento e segurança</h2>
      <p>
        Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas ou as
        obrigações legais, adotando medidas técnicas e administrativas razoáveis para protegê-los
        contra acessos não autorizados, perda ou alteração.
      </p>

      <h2>8. Seus direitos</h2>
      <p>Nos termos do art. 18 da LGPD, você pode solicitar a qualquer momento:</p>
      <ul>
        <li>confirmação da existência de tratamento e acesso aos dados;</li>
        <li>correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>anonimização, bloqueio ou eliminação de dados desnecessários;</li>
        <li>portabilidade, informação sobre compartilhamento e revogação do consentimento;</li>
        <li>eliminação dos dados tratados com base no consentimento.</li>
      </ul>

      <h2>9. Contato do controlador</h2>
      <p>
        Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato pelo
        e-mail <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>, pelos telefones{" "}
        {BUSINESS.phones.map((p) => p.label).join(" / ")} ou presencialmente em nosso endereço.
        Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <h2>10. Alterações</h2>
      <p>
        Esta política pode ser atualizada periodicamente. A versão vigente estará sempre
        disponível nesta página, com a data da última atualização.
      </p>
    </LegalPage>
  );
}
