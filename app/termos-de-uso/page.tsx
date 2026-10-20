import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso do site da Autoescola Essencial, CFC privado credenciado nº 027 em Paulínia/SP.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermosDeUso() {
  return (
    <LegalPage title="Termos de Uso" updatedAt="20 de outubro de 2026">
      <p>
        Estes Termos de Uso regulam o acesso a este site, mantido pela{" "}
        <strong>{BUSINESS.legalName}</strong>, CNPJ {BUSINESS.cnpj}, com sede na{" "}
        {BUSINESS.address.full} (“Autoescola Essencial”). Ao navegar pelo site, você declara estar
        de acordo com as condições abaixo.
      </p>

      <h2>1. Natureza da empresa</h2>
      <p>{BUSINESS.disclaimer}</p>
      <p>
        A Autoescola Essencial <strong>não é</strong> um órgão público, nem representa qualquer
        órgão de trânsito. Não aplicamos exames oficiais, não emitimos a Carteira Nacional de
        Habilitação (CNH) e não arrecadamos taxas estatais. Para serviços oficiais, procure
        diretamente o órgão oficial de trânsito.
      </p>

      <h2>2. Finalidade do site</h2>
      <p>
        Este site tem caráter informativo sobre os serviços privados de formação de condutores
        oferecidos pela Autoescola Essencial (aulas teóricas e práticas, preparação para o exame
        prático oficial e encaminhamento do aluno, adição de categoria e aulas para
        habilitados). As informações não constituem oferta vinculante; valores e condições são
        informados individualmente pelos canais oficiais de atendimento.
      </p>

      <h2>3. Resultados</h2>
      <p>
        A aprovação nos exames oficiais depende do desempenho do candidato e das regras e
        avaliações dos órgãos de trânsito. A Autoescola Essencial se compromete com a qualidade
        da formação, mas não garante aprovação nem prazos de emissão da CNH, que são de
        competência do órgão oficial de trânsito.
      </p>

      <h2>4. Canais oficiais de contato</h2>
      <p>
        Nossos únicos canais oficiais são: WhatsApp e telefones{" "}
        {BUSINESS.phones.map((p) => p.label).join(" / ")} e atendimento presencial no
        endereço acima. Não solicitamos senhas, dados bancários ou pagamentos de taxas públicas
        por meio deste site.
      </p>

      <h2>5. Propriedade intelectual</h2>
      <p>
        Marcas, logotipos, textos e imagens deste site pertencem à Autoescola Essencial ou são
        utilizados com autorização, sendo vedada sua reprodução sem consentimento prévio.
      </p>

      <h2>6. Links de terceiros</h2>
      <p>
        O site pode conter links para serviços de terceiros (WhatsApp, Google Maps e redes sociais). Não
        nos responsabilizamos pelo conteúdo ou pelas práticas de privacidade desses serviços.
      </p>

      <h2>7. Privacidade</h2>
      <p>
        O tratamento de dados pessoais segue nossa{" "}
        <a href="/politica-de-privacidade">Política de Privacidade</a>, elaborada em conformidade
        com a LGPD.
      </p>

      <h2>8. Legislação e foro</h2>
      <p>
        Estes Termos são regidos pela legislação brasileira, incluindo o Código de Defesa do
        Consumidor. Fica eleito o foro da comarca de Paulínia/SP, ressalvado o direito do
        consumidor de optar pelo foro de seu domicílio.
      </p>
    </LegalPage>
  );
}
