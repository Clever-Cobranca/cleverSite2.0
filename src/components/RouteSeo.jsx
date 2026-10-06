
//atualiza canonical, título, meta description e Open Graph ao navegar, sem incluir parâmetros de campanha na URL canônica. Cada post usa seu próprio título, resumo e imagem.
import { useLayoutEffect } from "react";
import { useLocation } from "react-router";
import { posts } from "../Pages/blog/blogPost";

const siteUrl = "https://www.clevercobranca.com.br";

const pages = {
  "/": {
    title: "Clever — Assessoria de Cobrança para Escolas",
    description: "Recuperação de inadimplência escolar sem desgastar a relação com a família. A escola não paga nada para começar.",
  },
  "/escolas": {
    title: "Cobrança para Escolas — Clever",
    description: "Assessoria de cobrança especializada em instituições de ensino. Recupere mensalidades atrasadas sem perder o aluno.",
  },
  "/educacao": {
    title: "Treinamento em Cobrança Educacional — Clever",
    description: "Curso e materiais para a equipe da escola cobrar com método. Baixe o e-book gratuito.",
  },
  "/diagnostico": {
    title: "Diagnóstico de Inadimplência Escolar — Clever",
    description: "Responda 10 perguntas e receba um raio-x da inadimplência da sua escola, com relatório em PDF.",
  },
  "/servicos": {
    title: "Serviços de Recuperação de Crédito — Clever",
    description: "Cobrança de inativos e ativos, negociação e assessoria jurídica para instituições de ensino.",
  },
  "/blog": {
    title: "Blog — Cobrança e Inadimplência Escolar",
    description: "Artigos sobre cobrança, inadimplência, contratos e gestão financeira em escolas.",
  },
  "/pagar": {
    title: "Negociar Minha Dívida — Clever",
    description: "Consulte seu débito e negocie condições de pagamento com a Clever.",
  },
  "/sobre": {
    title: "Sobre a Clever — Assessoria de Cobrança",
    description: "Conheça a Clever e nossa atuação em assessoria jurídica, cobrança e recuperação de crédito.",
  },
  "/cultura": {
    title: "Nossa Cultura — Clever",
    description: "Conheça os valores e a forma de trabalho da Clever Assessoria Jurídica e Cobrança.",
  },
  "/trabalhe-conosco": {
    title: "Trabalhe Conosco — Clever",
    description: "Conheça a equipe da Clever e as oportunidades para trabalhar com cobrança e recuperação de crédito.",
  },
  "/termos-de-servico": {
    title: "Termos de Serviço — Clever",
    description: "Leia os termos de serviço da Clever Assessoria Jurídica e Cobrança.",
  },
  "/politica-de-privacidade": {
    title: "Política de Privacidade — Clever",
    description: "Saiba como a Clever trata seus dados pessoais em sua política de privacidade.",
  },
  "/links": {
    title: "Links Oficiais — Clever",
    description: "Acesse os canais e conteúdos oficiais da Clever Assessoria Jurídica e Cobrança.",
  },
  "/kath": {
    title: "Área Interna — Clever",
    description: "Área interna da Clever Assessoria Jurídica e Cobrança.",
  },
};

function setHeadAttribute(selector, tag, attribute, value) {
  // Verifica se o elemento já existe no head
  let element = document.head.querySelector(selector);

  if (!element) {
    // Se não existir, cria o elemento e adiciona ao head
    element = document.createElement(tag);
    // Extrai o atributo e valor do seletor para definir no novo elemento
    const [, identityAttribute, identityValue] = selector.match(/\[(\w+)="([^"]+)"\]/);
    element.setAttribute(identityAttribute, identityValue);
    document.head.appendChild(element);
  }
  // Atualiza o valor do atributo especificado
  element.setAttribute(attribute, value);
}

export default function RouteSeo() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {

    //Remove a barra final da URL, exceto para a página inicial
    const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const post = path.startsWith("/blog/")
      ? posts.find((item) => `/blog/${item.slug}` === path)
      : null;
    const pageNumber = path.match(/^\/blog\/pagina\/([1-9]\d*)$/)?.[1];
    const validBlogPage = pageNumber && Number(pageNumber) >= 2 && Number(pageNumber) <= Math.ceil(posts.length / 9);
    const found = Boolean(post || pages[path] || validBlogPage);
    
      //Altera o título, descrição e image padrão do metadata se for um artigo do Blog, se não fica com os metadados padrões
    const page = post
      ? { title: `${post.title} — Clever`, description: (post.about || post.title).slice(0, 155), image: post.banner }
      : validBlogPage
        ? { title: `Blog da Clever — Página ${pageNumber}`, description: `Artigos sobre cobrança e inadimplência da Clever. Página ${pageNumber} do blog.` }
        : pages[path] || { title: "Página não encontrada — Clever", description: "O endereço acessado não existe ou foi removido." };
    const url = `${siteUrl}${path}`;
    const image = new URL(page.image || "/Logo.png", siteUrl).href;

    document.title = page.title;
    if (found) setHeadAttribute('link[rel="canonical"]', "link", "href", url);
    else document.head.querySelector('link[rel="canonical"]')?.remove();
    setHeadAttribute('meta[name="description"]', "meta", "content", page.description);
    setHeadAttribute('meta[property="og:title"]', "meta", "content", page.title);
    setHeadAttribute('meta[property="og:description"]', "meta", "content", page.description);
    setHeadAttribute('meta[property="og:url"]', "meta", "content", url);
    setHeadAttribute('meta[property="og:type"]', "meta", "content", post ? "article" : "website");
    setHeadAttribute('meta[property="og:image"]', "meta", "content", image);
  }, [pathname]);

  return null;
}
