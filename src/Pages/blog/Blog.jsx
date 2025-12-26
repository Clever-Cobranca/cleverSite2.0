import styles from "./Blog.module.css";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../components/dropdowMenu";
import { SearchComponent } from "../../components/SearchComponent";
import { Header } from "../../components/Header/Header";


export default function Blog() {
  const post = {
    id: 48,
    banner: "/bigbang-relogio.jpg",
    date: "2025-09-29T00:00",
    slug: "reincidencia-inadimplencia-bate-recorde",
    title:
      "Reincidência na Inadimplência Bate Recorde: Como Proteger seu Crédito na Janela Crítica de 74 Dias",
  };

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <img src={post.banner} alt={post.title} />
        <div className={styles.wrapContainer}>
          <div className={styles.wrap}>
            <div class={styles.heroAlternative}>
              <h1>Linha do Tempo da Inadimplência</h1>
              <div class="subtitle">Análise Estratégica 2025/2026</div>
            </div>
            <article class="content">
              <div class="year-section">
                <h2 class="year-title">2025</h2>
                <div class={styles.event}>
                  <h3>Black Friday (novembro/2025)</h3>
                  <p>
                    O consumo dispara e os devedores priorizam compras ao invés
                    de quitar dívidas. Gastos com eletrônicos, roupase viagens
                    reduzem a liquidez disponível para pagamentos.
                  </p>
                </div>
                <div class={styles.event}>
                  <h3>Natal (dezembro/2025)</h3>
                  <p>
                    Mês de maior consumo do ano. Presentes, confraternizações e
                    viagens reduzem drasticamente a prioridade depagamento de
                    dívidas.
                  </p>
                </div>
                <div class={styles.event}>
                  <h3>Ano Novo (dezembro/2025)</h3>
                  <p>
                    Além dos gastos com festas e viagens, muitas famílias entram
                    em janeiro já comprometidas financeiramente.
                  </p>
                </div>
              </div>
              <div class="year-section">
                <h2 class="year-title">2026</h2>
                <div class={styles.event}>
                  <h3>Férias Escolares (janeiro/2026)</h3>
                  <p>
                    Período de alto gasto familiar com lazer, viagens e
                    matrícula/renovação escolar. Dívidas perdem espaço frente às
                    prioridades familiares.
                  </p>
                </div>
                <div class={styles.event}>
                  <h3>Carnaval (fevereiro/2026)</h3>
                  <p>
                    Um dos maiores eventos do país. Viagens, festas e consumo
                    intenso drenam ainda mais os recursos que poderiamser usados
                    para quitação de dívidas.
                  </p>
                </div>
                <div class={styles.event}>
                  <h3>Festa Junina (junho/2026)</h3>
                  <p>
                    Tradicional em todo o Brasil, especialmente em regiões do
                    Nordeste. Festividades locais elevam os gastos e desviam a
                    atenção dos devedores.
                  </p>
                </div>
                <div class={styles.event}>
                  <h3>Copa do Mundo (11 de junho a 19 de julho de 2026)</h3>
                  <p>
                    O evento esportivo mais assistido do planeta terá impacto
                    direto na economia brasileira. Comércio, turismo e lazer
                    movimentam bilhões, mas também aumentam a inadimplência.
                    Devedores priorizam gastos imediatos ligados ao
                    entretenimento e deixam de lado compromissos financeiros.
                  </p>
                </div>
                <div class="event">
                  <h3>Eleições Presidenciais (outubro/2026)</h3>
                  <p>
                    Mobilizam grande parte da população e drenam recursos de
                    empresas e candidatos. Muitos devedores usam esse período
                    como justificativa para atrasar pagamentos. Além disso,
                    cresce a insegurança em quitar dívidas, já queo cenário
                    político gera incerteza no país e gera receio quanto ao
                    futuro econômico.
                  </p>
                </div>
              </div>
              <div class="comparison-section">
                <h2 class="comparison-title">
                  Inadimplência Comparativa no Brasil - 2024 x 2025
                </h2>
                <div class={styles.tableContainer}>
                  <table>
                    <thead>
                      <tr>
                        <th>Indicador</th>
                        <th>2024</th>
                        <th>2025</th>
                        <th>Aumento (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Pessoas físicas inadimplentes</td>
                        <td>71,9 milhões</td>
                        <td>74,6 milhões</td>
                        <td class={styles.increase}>+3,8%</td>
                      </tr>
                      <tr>
                        <td>Valor médio da dívida (PF)</td>
                        <td>R$ 4.580</td>
                        <td>R$ 4.762</td>
                        <td class={styles.increase}>+4,0%</td>
                      </tr>
                      <tr>
                        <td>Empresas negativadas</td>
                        <td>6,6 milhões</td>
                        <td>6,7 milhões</td>
                        <td class={styles.increase}>+1,5%</td>
                      </tr>
                      <tr>
                        <td>Estoque de dívidas (PJ)</td>
                        <td>R$ 126,1 bi</td>
                        <td>R$ 127,8 bi</td>
                        <td class={styles.increase}>+1,3%</td>
                      </tr>
                      <tr>
                        <td>Agro no Banco do Brasil {"atraso >90d"}</td>
                        <td>1,32%</td>
                        <td>3,49%</td>
                        <td class={styles.increase}>+164,4%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="highlight-box">
                <h2>A inadimplência só Cresce!</h2>
                <p>
                  O cenário deixa claro: o credor que esperar para cobrar em
                  meio a tantos eventos{" "}
                  <strong>
                    perderá prioridade na lista de pagamentos do devedor
                  </strong>
                  . O momento de agir é agora, antes que aconcorrência do
                  consumo e os grandes eventos nacionais sufoquem a chance de
                  recebimento.
                </p>
              </div>
              <div class="recommendation">
                <blockquote>
                  Recomendamos que todos os credores{" "}
                  <strong>
                    nos encaminhem imediatamente os devedores que já se sabe que
                    não irão pagar nos próximos meses
                  </strong>
                  , para que possamos intensificar a cobrança e aumentar as
                  chances de recuperação do crédito.
                </blockquote>
              </div>
              <div class="recommendation">
                <blockquote>
                  Além disso, sugerimos que os credores incentivem seus
                  colaboradores a acompanhar o Instagram da Clever e baixar
                  nosso E-Book gratuito. Esse simples movimento amplia o
                  conhecimento, reforça a autoridade da empresa e gera maior
                  engajamento com os conteúdos, tornando a recuperação de
                  crédito ainda mais eficiente.
                </blockquote>
              </div>
            </article>
            <div class={styles.callout}>
              <div class="footer-content">
                <div class="contact-info">
                  <h3>Informações de Contato</h3>
                  <p>Site: https://clevercobranca.com.br/educacao/</p>
                  <p>Instagram: @clevercobranca</p>
                </div>
                <div class="author">
                  <h4>Alan Clever</h4>
                  <p>CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FBFBFB] mt-14 px-4 mr-8 flex flex-col gap-12 h-[300px] max-lg:hidden ">
            <SearchComponent />
            <DropdownMenu className="z-10">
              <DropdownMenuTrigger>Categorias</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="w-full">
                  <option>Cobrança</option>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <option>Crédito</option>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <option>Inadimplência</option>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </main>
    </>
  );
}
