import { posts } from "./src/Pages/blog/blogPost.js";

// Only real SPA routes receive index.html. Unmatched paths reach Vercel's 404 handler.
const pagePaths = [
  "/escolas",
  "/sobre",
  "/diagnostico",
  "/cultura",
  "/servicos",
  "/trabalhe-conosco",
  "/educacao",
  "/pagar",
  "/termos-de-servico",
  "/politica-de-privacidade",
  "/blog",
  "/kath",
  "/links",
];

const blogPages = Array.from(
  { length: Math.max(0, Math.ceil(posts.length / 9) - 1) },
  (_, index) => `/blog/pagina/${index + 2}`,
);
const blogPosts = posts.map(({ slug }) => `/blog/${slug}`);

export const config = {
  buildCommand: "npm run build",
  outputDirectory: "dist",
  devCommand: "npm run dev",
  installCommand: "npm install",
  framework: "vite",
  trailingSlash: false,
  redirects: [
    {
      source: "/cobranca/escolar",
      destination: "https://www.clevercobranca.com.br/escolas",
      statusCode: 301,
    },
    {
      source: "/:path*",
      has: [{ type: "host", value: "clevercobranca.com.br" }],
      destination: "https://www.clevercobranca.com.br/:path*",
      statusCode: 301,
    },
  ],
  rewrites: [...pagePaths, ...blogPages, ...blogPosts].map((source) => ({
    source,
    destination: "/index.html",
  })),
};
