import { useEffect } from "react";

/**
 * Página de vendas da Clever · /escolas
 * Versão 2 · 20/09/2026
 *
 * COMO USAR
 * 1) Salve este arquivo como src/pages/PaginaEscolas.jsx
 * 2) Adicione a rota no seu roteador, por exemplo:
 *        <Route path="/escolas" element={<PaginaEscolas />} />
 * 3) Coloque as fotos em public/escolas/img/callcenter-1.jpg e callcenter-2.jpg
 *    (enquanto não existirem, a página mostra um espaço cinza no lugar)
 * 4) Preencha ADS_CONVERSAO e META_PIXEL no CONFIG abaixo quando tiver os IDs
 *
 * O CSS está todo escopado em #clever-lp, então não afeta o resto do site.
 * A página não deve entrar no menu. A tag noindex é aplicada enquanto ela
 * estiver montada, para não aparecer no Google.
 */

const CONFIG = {
  WPP: "5511910699108",      // WhatsApp do comercial, só números, com 55 na frente
  FOTOS: "/",    // pasta das fotos dentro de public
  ADS_CONVERSAO: "",         // ex.: "AW-123456789/AbCdEfGhIj"
  META_PIXEL: "",            // ex.: "1234567890"
};

const CSS = `#clever-lp{--ink:#0E2F3C;--teal:#15697B;--amber:#C9821F;--gold:#F3C77A;--tint:#EEF4F5;--bg:#F4F8F9;--line:#D6E2E5;--tx:#1A2A30;--tx2:#5A6B72;
--serif:Georgia,Cambria,"Times New Roman",serif;--sans:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif}
#clever-lp *{box-sizing:border-box;margin:0;padding:0}
#clever-lp{scroll-behavior:smooth}
#clever-lp{font-family:var(--sans);background:#fff;color:var(--tx);font-size:17px;line-height:1.55;-webkit-text-size-adjust:100%}
#clever-lp img{max-width:100%;display:block}
#clever-lp .w{max-width:1080px;margin:0 auto;padding:0 22px}
#clever-lp h1,#clever-lp h2,#clever-lp h3{font-family:var(--serif);color:var(--ink);line-height:1.15}
#clever-lp h1{font-size:50px}
#clever-lp h2{font-size:34px}
#clever-lp h3{font-size:22px}
#clever-lp p+p{margin-top:12px}
#clever-lp .btn{display:inline-flex;align-items:center;gap:10px;background:var(--amber);color:#fff;text-decoration:none;font-weight:700;font-size:19px;padding:18px 30px;border-radius:12px;box-shadow:0 4px 0 #99631399;transition:transform .12s}
#clever-lp .btn:hover{transform:translateY(-2px)}
#clever-lp .btn:before{content:"";width:20px;height:20px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.6 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .3-3.4-.7-2.9-1.2-4.7-4.2-4.8-4.4-.2-.2-1.2-1.5-1.2-2.9s.7-2 1-2.3c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.9 2c.1.2.1.4 0 .6l-.4.5-.3.4c-.1.2-.3.3-.1.6.1.3.7 1.2 1.5 1.9 1 .9 1.8 1.2 2.1 1.3.2.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l2 1c.2.1.4.2.4.3.1.2.1.9-.1 1.6z'/%3E%3C/svg%3E") center/contain no-repeat}
#clever-lp .kick{font:700 13px var(--sans);letter-spacing:.16em;text-transform:uppercase;color:var(--teal)}
#clever-lp .sec{padding:74px 0}
#clever-lp .sec.alt{background:var(--bg)}
#clever-lp .sec.dark{background:var(--ink)}
#clever-lp .sec.dark h2,#clever-lp .sec.dark h3{color:#fff}
#clever-lp .sec.dark p{color:#D2E2E6}
#clever-lp .sec.dark .kick{color:var(--gold)}
#clever-lp .center{text-align:center}
#clever-lp /* HERO */
.hero{background:var(--ink);color:#fff;padding:26px 0 0;position:relative;overflow:hidden}
#clever-lp .hero .logo{height:34px;margin-bottom:38px}
#clever-lp .hero:after{content:"";position:absolute;right:-60px;top:40px;width:520px;height:458px;opacity:.09;pointer-events:none;
background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 505 445'%3E%3Cg fill='none' stroke='%23F3C77A' stroke-width='44' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M28 420 L250 30 L478 420'/%3E%3Cpath d='M196 402 L100 402 L250 160 L404 402 L310 402'/%3E%3C/g%3E%3C/svg%3E") center/contain no-repeat}
#clever-lp .hero .in{position:relative;z-index:1;padding-bottom:54px;max-width:820px}
#clever-lp .hero h1{color:#fff;font-size:54px}
#clever-lp .hero h1 span{color:var(--gold)}
#clever-lp .hero .sub{font-size:21px;color:#D2E2E6;margin:20px 0 28px;max-width:720px}
#clever-lp .selos{display:flex;flex-wrap:wrap;gap:10px;margin:28px 0 0}
#clever-lp .selos span{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.22);border-radius:30px;padding:8px 16px;font-size:15px;font-weight:700}
#clever-lp .selos span:before{content:"✓ ";color:var(--gold)}
#clever-lp .nums{border-top:1px solid rgba(255,255,255,.16);display:grid;grid-template-columns:repeat(4,1fr);gap:18px;padding:22px 0 30px;position:relative;z-index:1}
#clever-lp .nums .n{font:700 27px var(--serif);color:var(--gold);white-space:nowrap}
#clever-lp .nums .t{font-size:14px;color:#C4D6DB}
#clever-lp .marcas{background:var(--tint);padding:16px 0}
#clever-lp .marcas .l{display:flex;flex-wrap:wrap;gap:10px 30px;align-items:center;justify-content:center;font:700 17px var(--serif);color:var(--ink);opacity:.85}
#clever-lp .marcas .l small{font:400 14px var(--sans);color:var(--tx2);width:100%;text-align:center;margin-bottom:2px}
#clever-lp /* blocos dor + remédio */
.dor{display:grid;grid-template-columns:1fr 1fr;gap:44px;align-items:center}
#clever-lp .dor.inv .txt{order:2}
#clever-lp .fala{background:#fff;border-left:5px solid var(--amber);border-radius:0 14px 14px 0;padding:22px 26px;box-shadow:0 8px 24px rgba(14,47,60,.08)}
#clever-lp .sec.alt .fala{background:#fff}
#clever-lp .fala .q{font:italic 700 23px/1.35 var(--serif);color:var(--ink)}
#clever-lp .fala .a{font-size:15px;color:var(--tx2);margin-top:10px}
#clever-lp .remedio h2{margin-bottom:14px}
#clever-lp .remedio ul{list-style:none;margin:16px 0 0}
#clever-lp .remedio li{position:relative;padding-left:32px;margin:10px 0}
#clever-lp .remedio li:before{content:"✓";position:absolute;left:0;top:2px;width:22px;height:22px;border-radius:50%;background:var(--teal);color:#fff;font:700 13px/22px var(--sans);text-align:center}
#clever-lp .sec.dark .remedio li:before{background:var(--gold);color:var(--ink)}
#clever-lp .sec.dark .remedio li,#clever-lp .sec.dark .legenda,#clever-lp .sec.dark li{color:#D2E2E6}
#clever-lp .sec.dark .fala{background:rgba(255,255,255,.06);box-shadow:none}
#clever-lp .sec.dark .fala .q{color:#fff}
#clever-lp .sec.dark .fala .a{color:#A9C1C8}
#clever-lp .cta-linha{margin-top:26px;display:flex;align-items:center;gap:18px;flex-wrap:wrap}
#clever-lp .cta-linha .obs{font-size:15px;color:var(--tx2)}
#clever-lp .sec.dark .cta-linha .obs{color:#A9C1C8}
#clever-lp .conta{background:linear-gradient(135deg,#FFF6E6,#FDEBCB);border:1.5px solid #E9C27F;border-radius:16px;padding:22px 26px;margin-top:24px}
#clever-lp .conta b{font-family:var(--serif);font-size:21px;color:var(--ink);display:block;margin-bottom:6px}
#clever-lp .conta .g{font-size:16px}
#clever-lp .conta .n{font:700 34px var(--serif);color:var(--amber);line-height:1.1;margin:8px 0 2px}
#clever-lp .foto{border-radius:16px;overflow:hidden;background:var(--tint);box-shadow:0 10px 30px rgba(14,47,60,.14)}
#clever-lp .foto img{width:100%;height:100%;object-fit:cover}
#clever-lp .foto span{display:none}
#clever-lp .foto.sem-foto{border:2px dashed #9FB9C0;min-height:320px;display:flex;align-items:center;justify-content:center;text-align:center;color:var(--tx2);font-size:15px;padding:24px;box-shadow:none}
#clever-lp .foto.sem-foto img{display:none}
#clever-lp .foto.sem-foto span{display:block}
#clever-lp .legenda{font-size:14px;color:var(--tx2);margin-top:8px}
#clever-lp /* provas */
.cases{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:30px}
#clever-lp .case{background:#fff;border-radius:16px;padding:26px;border-top:5px solid var(--amber)}
#clever-lp .sec.dark .case{background:rgba(255,255,255,.06);border-top-color:var(--gold)}
#clever-lp .case .w2{font-size:13px;letter-spacing:.08em;text-transform:uppercase;font-weight:700;color:var(--teal)}
#clever-lp .sec.dark .case .w2{color:var(--gold)}
#clever-lp .case .n{font:700 40px var(--serif);color:var(--ink);line-height:1.05;margin:10px 0 8px}
#clever-lp .sec.dark .case .n{color:#fff}
#clever-lp .case p{font-size:15.5px}
#clever-lp .alan{display:grid;grid-template-columns:auto 1fr;gap:26px;align-items:start;background:var(--tint);border-radius:18px;padding:30px}
#clever-lp .alan .ini{width:180px;height:180px;border-radius:50%;background:var(--ink);color:var(--gold);display:inline-block;}
#clever-lp .eag{display:inline-block;margin-top:14px;background:#fff;border:1px solid var(--line);border-radius:30px;padding:7px 16px;font-size:15px;font-weight:700;color:var(--ink)}
#clever-lp .final{background:var(--teal);color:#fff;border-radius:20px;padding:44px;text-align:center}
#clever-lp .final h2{color:#fff;font-size:36px}
#clever-lp .final p{color:#D4EBEF;font-size:19px;margin:14px auto 26px;max-width:640px}
#clever-lp .final .btn{background:var(--amber);font-size:21px;padding:20px 36px}
#clever-lp footer{background:var(--ink);color:#B9CDD3;padding:40px 0 110px;font-size:15px}
#clever-lp footer .r{display:flex;flex-wrap:wrap;gap:12px 26px;margin-top:14px}
#clever-lp footer a{color:#fff;text-decoration:none;font-weight:700}
#clever-lp footer .cnpj{margin-top:18px;font-size:13px;color:#7E9AA3}
#clever-lp /* barra fixa */
.fixa{position:fixed;left:0;right:0;bottom:0;background:rgba(14,47,60,.97);padding:12px 16px;display:flex;gap:14px;align-items:center;justify-content:center;z-index:20;box-shadow:0 -6px 20px rgba(0,0,0,.22)}
#clever-lp .fixa span{color:#fff;font-weight:700;font-size:16px}
#clever-lp .fixa .btn{padding:13px 22px;font-size:17px;box-shadow:0 3px 0 #99631399}
@media (max-width:880px){#clever-lp h1,#clever-lp .hero h1{font-size:34px}
#clever-lp h2{font-size:26px}
#clever-lp h3{font-size:20px}
#clever-lp{font-size:16px}
#clever-lp .sec{padding:48px 0}
#clever-lp .hero .sub{font-size:18px}
#clever-lp .hero:after{width:280px;height:247px;right:-70px;top:20px}
#clever-lp .nums{grid-template-columns:1fr 1fr;gap:14px}
#clever-lp .dor{grid-template-columns:1fr;gap:26px}
#clever-lp .dor.inv .txt{order:0}
#clever-lp .cases{grid-template-columns:1fr}
#clever-lp .alan{grid-template-columns:1fr}
#clever-lp .final{padding:30px 22px}
#clever-lp .final h2{font-size:27px}
#clever-lp .btn{width:100%;justify-content:center;text-align:center}
#clever-lp .fixa span{display:none}
#clever-lp .fixa .btn{width:100%}
#clever-lp .foto.sem-foto{min-height:200px}}
#clever-lp{background:#fff;color:#1A2A30;font-size:17px;line-height:1.55}
`;

const HTML = `<!-- ===================== HERO ===================== -->
<header class="hero">
  <div class="w">
    <img class="logo" alt="Clever" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 505 445'%3E%3Cg fill='none' stroke='%23F3C77A' stroke-width='44' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M28 420 L250 30 L478 420'/%3E%3Cpath d='M196 402 L100 402 L250 160 L404 402 L310 402'/%3E%3C/g%3E%3C/svg%3E">
    <div class="in">
      <div class="kick" style="color:var(--gold)">Cobrança especializada em escolas</div>
      <h1 style="margin-top:14px">Recupere o dinheiro que a sua escola <span>já deu como perdido.</span></h1>
      <p class="sub">A Clever assume a cobrança da sua escola e trabalha exclusivamente na defesa do credor. Na carteira de inativos, o investimento é zero: a escola não paga, a escola recebe.</p>
      <a class="btn" data-secao="hero" data-msg="Quero a análise gratuita da carteira da minha escola." href="#">Quero a análise gratuita</a>
      <div class="selos"><span>Análise da carteira sem custo</span><span>Relatório todo dia às 7h</span><span>Repasse todo dia 16</span><span>Implantação em 3 dias</span></div>
    </div>
    <div class="nums">
      <div><div class="n">+400</div><div class="t">escolas atendidas</div></div>
      <div><div class="n">R$ 150 mi</div><div class="t">negociados com devedores</div></div>
      <div><div class="n">R$ 180 mi</div><div class="t">em carteira sob gestão</div></div>
      <div><div class="n">+250</div><div class="t">unidades Microlins</div></div>
    </div>
  </div>
</header>

<div class="marcas"><div class="w"><div class="l"><small>Quem já confia na Clever</small>
<span>Wizard</span><span>CCAA</span><span>Microlins</span><span>Prepara</span><span>Microcamp</span><span>Levon Idiomas</span><span>Avance Cursos</span><span>Macrobyte</span><span>Jumper Idiomas</span><span>Escolas Turma da Mônica</span></div></div></div>

<!-- ===================== DOR 1 ===================== -->
<section class="sec">
  <div class="w dor">
    <div class="txt">
      <div class="fala">
        <div class="q">"Eu nem sei o tamanho real da minha inadimplência."</div>
        <div class="a">Dono de escola, na primeira conversa com a Clever</div>
      </div>
    </div>
    <div class="remedio">
      <div class="kick">O remédio</div>
      <h2 style="margin-top:8px">A gente analisa a sua carteira de graça e te mostra o número.</h2>
      <p>Você envia a lista que já existe no seu sistema. A Clever cruza, higieniza e devolve quanto está parado, há quanto tempo e quanto dá para recuperar.</p>
      <ul>
        <li>Análise sem custo e sem compromisso.</li>
        <li>Você descobre quantos contratos ainda podem ser recuperados.</li>
        <li>Em 3 dias a operação já pode estar rodando.</li>
      </ul>
      <div class="cta-linha"><a class="btn" data-secao="dor1-analise" data-msg="Quero a análise gratuita da carteira da minha escola." href="#">Quero a análise gratuita</a><span class="obs">Leva 2 minutos para enviar a lista.</span></div>
    </div>
  </div>
</section>

<!-- ===================== DOR 2 ===================== -->
<section class="sec alt">
  <div class="w dor inv">
    <div class="txt">
      <div class="fala">
        <div class="q">"Tenho gente devendo há anos. Esse dinheiro já era."</div>
        <div class="a">Dono de escola, sobre a carteira de alunos que saíram</div>
      </div>
      <div class="conta">
        <b>A conta que ninguém faz</b>
        <div class="g">500 alunos que saíram devendo, com R$ 800 de dívida média, são</div>
        <div class="n">R$ 400 mil parados</div>
        <div class="g">esperando alguém cobrar. Metade do que voltar é da escola.</div>
      </div>
    </div>
    <div class="remedio">
      <div class="kick">O remédio · Cobrança de Inativos</div>
      <h2 style="margin-top:8px">A escola não paga nada. A escola recebe.</h2>
      <p>A Clever custeia toda a operação: call center, telefonia, WhatsApp, localização, notificações e até o deslocamento da equipe para atender dentro da sua unidade.</p>
      <ul>
        <li>Trabalhamos toda a carteira histórica, inclusive os contratos mais antigos.</li>
        <li>Atendimento presencial na sua escola, com hora marcada, para carteiras a partir de 300 devedores.</li>
        <li>Todo acordo presencial é formalizado em confissão de dívida.</li>
        <li>Se o devedor quebrar o acordo, Serasa e protesto são por conta da Clever.</li>
        <li>Custo zero: você só recebe.</li>
      </ul>
      <div class="cta-linha"><a class="btn" data-secao="dor2-inativos" data-msg="Quero recuperar os alunos inativos da minha escola." href="#">Quero recuperar meus inativos</a><span class="obs">Sem taxa, sem setup, sem mensalidade.</span></div>
    </div>
  </div>
</section>

<!-- ===================== DOR 3 ===================== -->
<section class="sec dark">
  <div class="w dor">
    <div class="txt">
      <!--== FOTO 1 · coloque o arquivo em img/callcenter-1.jpg ==-->
      <div class="foto" data-foto="callcenter-1.jpeg">
        <img alt="Equipe da Clever no call center">
        <span>Espaço da foto 1<br>img/callcenter-1.jpg</span>
      </div>
      <div class="legenda" style="color:#A9C1C8">Mais de 80 posições de atendimento trabalhando a sua carteira.</div>
    </div>
    <div class="remedio">
      <div class="kick">O remédio · Cobrança de Ativos</div>
      <h2 style="margin-top:8px">"Minha funcionária cobra só por WhatsApp e ninguém liga."</h2>
      <p>A Clever assume o setor de cobrança da sua escola. Equipe e supervisor dedicados, falando em nome da sua marca, com ligação de verdade e régua configurada com você.</p>
      <ul>
        <li>Lembrete antes do vencimento com boleto, Pix e ligação.</li>
        <li>Roteiros e scripts feitos para a sua instituição, com o tom definido por você.</li>
        <li>A escola volta a receber os juros e a multa que são seus por contrato.</li>
        <li>Todo pagamento cai direto na conta da escola.</li>
        <li>Sem contratar, treinar, substituir ou cobrir falta de cobrador.</li>
      </ul>
      <div class="cta-linha"><a class="btn" data-secao="dor3-ativos" data-msg="Quero a cobrança dos meus alunos ativos com a Clever." href="#">Quero minha cobrança nas mãos da Clever</a></div>
    </div>
  </div>
</section>

<!-- ===================== DOR 4 ===================== -->
<section class="sec">
  <div class="w dor inv">
    <div class="txt">
      <div class="fala">
        <div class="q">"Não tenho tempo nem equipe para montar isso."</div>
        <div class="a">Dono de escola, que faz financeiro, comercial e pedagógico ao mesmo tempo</div>
      </div>
      <!--== FOTO 2 · coloque o arquivo em img/callcenter-2.jpg ==-->
      <div class="foto" data-foto="callcenter-2.jpeg" style="margin-top:22px">
        <img alt="Operação da Clever">
        <span>Espaço da foto 2<br>img/callcenter-2.jpeg</span>
      </div>
    </div>
    <div class="remedio">
      <div class="kick">O remédio</div>
      <h2 style="margin-top:8px">Você envia a lista. A Clever faz o resto.</h2>
      <p>Não existe projeto para montar, sistema para aprender nem equipe para treinar. Em 3 dias a operação está rodando, e o seu trabalho passa a ser só acompanhar os relatórios.</p>
      <ul>
        <li>Relatório todo dia às 7h, com os acordos e os pagamentos do dia anterior.</li>
        <li>Repasse todo dia 16, com prestação de contas detalhada.</li>
        <li>Quatro frentes ao mesmo tempo: digital, call center, vídeo e presencial.</li>
        <li>Jurídico próprio para confissão de dívida, protesto, negativação e ação quando necessário.</li>
      </ul>
      <div class="cta-linha"><a class="btn" data-secao="dor4-comecar" data-msg="Quero começar com a Clever na minha escola." href="#">Quero começar em 3 dias</a></div>
    </div>
  </div>
</section>

<!-- ===================== PROVA ===================== -->
<section class="sec alt">
  <div class="w">
    <div class="center"><div class="kick">Resultados reais</div><h2 style="margin-top:8px">Escolas que já receberam o que davam como perdido</h2></div>
    <div class="cases">
      <div class="case"><div class="w2">Prepara · Aracaju</div><div class="n">R$ 650 mil</div><p>recuperados de alunos inativos que a unidade dava como perdidos, sem nenhum custo.</p></div>
      <div class="case"><div class="w2">Microlins · Estância</div><div class="n">R$ 500 mil</div><p>recuperados na carteira de inativos, com investimento zero da unidade.</p></div>
      <div class="case"><div class="w2">Levon Idiomas · Assis, SP</div><div class="n">18% → 3%</div><p>de inadimplência em 30 dias, com as famílias pagando 3 dias antes do vencimento.</p></div>
    </div>
    <div class="center" style="margin-top:34px"><a class="btn" data-secao="provas" data-msg="Quero saber quanto a minha escola pode recuperar." href="#">Quero saber quanto a minha escola pode recuperar</a></div>
  </div>
</section>

<!-- ===================== QUEM CONDUZ ===================== -->
<section class="sec">
  <div class="w alan">
    <div class="ini"><img alt="Alan Clever" style="width:100%;height:100%;border-radius:100%;object-fit:cover;object-position:center;" src="/alan-escola.jpeg"/></div>
    <div>
      <div class="kick">Quem conduz essa estratégia</div>
      <h3 style="margin-top:6px">Alan Clever, fundador e CEO da Clever</h3>
      <p style="margin-top:10px">Engenheiro, pós-graduado em Advocacia, Direito dos Contratos, Execução Contratual e Responsabilidade Civil. Foi dono de duas escolas e viveu a inadimplência do outro lado do balcão. Começou cobrando pessoalmente, em vários estados, e transformou essa experiência no Método Clever. Hoje conduz mentorias e cursos com grandes nomes do mercado.</p>
      <span class="eag">Membro do EAG Soluções: networking e treinamentos com mais de 5 mil empresários</span>
    </div>
  </div>
</section>

<!-- ===================== FECHAMENTO ===================== -->
<section class="sec" style="padding-top:0">
  <div class="w">
    <div class="final">
      <h2>Cada mês parado, a dívida fica mais difícil de recuperar.</h2>
      <p>Quem começa agora chega ao fim de ano, período de 13º salário, com a carteira já trabalhada. A análise é gratuita e o retorno é em até 24 horas.</p>
      <a class="btn" data-secao="final" data-msg="Quero a análise gratuita da carteira da minha escola." href="#">Quero a análise gratuita</a>
    </div>
  </div>
</section>

<footer>
  <div class="w">
    <b style="color:#fff;font-size:17px">Clever Assessoria Jurídica e Cobrança</b>
    <div class="r">
      <a href="https://www.clevercobranca.com.br" target="_blank">clevercobranca.com.br</a>
      <a href="https://www.instagram.com/clevercobranca/" target="_blank">@clevercobranca</a>
      <a href="https://www.instagram.com/oalanclever/" target="_blank">@oalanclever</a>
      <a href="https://www.youtube.com/@clevercobranca" target="_blank">YouTube</a>
      <a href="https://www.tiktok.com/@cleverassessoria1" target="_blank">TikTok</a>
      <a href="https://www.facebook.com/clevercobranca" target="_blank">Facebook</a>
      <a href="mailto:contato@clevercobranca.com.br">contato@clevercobranca.com.br</a>
    </div>
    <div class="cnpj">Clever Assessoria Jurídica e Cobrança LTDA · São Paulo, SP</div>
  </div>
</footer>

<div class="fixa"><span>Análise da carteira sem custo</span><a class="btn" data-secao="barra-fixa" data-msg="Quero a análise gratuita da carteira da minha escola." href="#">Falar com a Clever agora</a></div>`;

export default function PaginaEscolas() {
  useEffect(() => {
    const raiz = document.getElementById("clever-lp");
    if (!raiz) return;

    // noindex enquanto a página estiver aberta
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    const tituloAntigo = document.title;
    document.title = "Clever · Recupere o dinheiro que a sua escola já deu como perdido";

    // Meta Pixel (só se ainda não existir no site)
    if (CONFIG.META_PIXEL && !window.fbq) {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
      window.fbq("init", CONFIG.META_PIXEL);
      window.fbq("track", "PageView");
    }
    if (CONFIG.ADS_CONVERSAO && window.gtag) {
      window.gtag("config", CONFIG.ADS_CONVERSAO.split("/")[0]);
    }

    // fotos: se o arquivo não existir, mantém o espaço cinza
    raiz.querySelectorAll(".foto[data-foto]").forEach((d) => {
      const img = d.querySelector("img");
      console.log(img)
      if (!img) return;
      img.onerror = () => d.classList.add("sem-foto");
      img.src = CONFIG.FOTOS + d.getAttribute("data-foto");
    });

    function registrar(secao) {
      try {
        if (window.gtag) {
          window.gtag("event", "clique_whatsapp", { secao, pagina: "escolas" });
          if (CONFIG.ADS_CONVERSAO) window.gtag("event", "conversion", { send_to: CONFIG.ADS_CONVERSAO });
        }
        if (window.dataLayer) window.dataLayer.push({ event: "clique_whatsapp", secao });
        if (window.fbq) window.fbq("track", "Lead", { content_name: secao, content_category: "escolas" });
      } catch (e) { console.log(e)}
    }

    const limpar = [];
    raiz.querySelectorAll("a.btn").forEach((a, i) => {
      const msg = a.getAttribute("data-msg") || "Quero falar com a Clever.";
      const secao = a.getAttribute("data-secao") || "botao-" + (i + 1);
      a.href = "https://wa.me/" + CONFIG.WPP + "?text=" + encodeURIComponent(msg);
      a.target = "_blank";
      a.rel = "noopener";
      const fn = () => registrar(secao);
      a.addEventListener("click", fn);
      limpar.push(() => a.removeEventListener("click", fn));
    });

    return () => {
      limpar.forEach((f) => f());
      meta.remove();
      document.title = tituloAntigo;
    };
  }, []);

  return (
    <>
      <style>{CSS}</style>
      <div id="clever-lp" dangerouslySetInnerHTML={{ __html: HTML }} />
    </>
  );
}
