import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import multer from 'multer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuração para ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carrega variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração do multer para upload de arquivos
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB
  }
});

// Configuração do transporter do nodemailer
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true para 465, false para outras portas
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, // App Password do Gmail ou senha do servidor SMTP
    },
    connectionTimeout: 10000, // 10 segundos
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });
};

// Função para formatar os dados do formulário em HTML
const formatEmailHTML = (answers, fileName = null) => {
  const fields = {
    nome: 'Nome',
    nascimento: 'Data de Nascimento',
    email: 'E-mail',
    telefone: 'Telefone',
    formacao: 'Formação',
    fimEscola: 'Previsão de Conclusão da Escola',
    fimTecnico: 'Previsão de Conclusão do Curso Técnico',
    fimSuperior: 'Previsão de Conclusão da Faculdade',
    cursoTecnico: 'Curso Técnico',
    cursoSuperior: 'Curso Superior',
    cidadeResidente: 'Cidade',
    cargoPretendido: 'Cargo Pretendido',
    experiencia: 'Tem Experiência Anterior',
    nomeEmpresa: 'Última Empresa',
    dataInicio: 'Data de Início',
    dataFim: 'Data de Saída',
    atividades: 'Responsabilidades',
    comoConheceu: 'Como Conheceu a Clever',
  };

  let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        h2 { color: #F1B434; border-bottom: 2px solid #F1B434; padding-bottom: 10px; }
        .field { margin: 15px 0; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 10px; background-color: #f9f9f9; border-left: 3px solid #F1B434; }
        .attachment { margin-top: 20px; padding: 10px; background-color: #e8f4f8; border-radius: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Nova Candidatura Recebida</h2>
        <div class="field">
          <div class="label">📋 Dados do Candidato:</div>
        </div>
  `;

  Object.entries(answers).forEach(([key, value]) => {
    const label = fields[key] || key;
    if (value && value !== 'Sem arquivo') {
      html += `
        <div class="field">
          <div class="label">${label}:</div>
          <div class="value">${value}</div>
        </div>
      `;
    }
  });

  if (fileName) {
    html += `
      <div class="attachment">
        <div class="label">📎 Currículo Anexado:</div>
        <div class="value">${fileName}</div>
      </div>
    `;
  }

  html += `
      </div>
    </body>
    </html>
  `;

  return html;
};

// Função para formatar texto simples (fallback)
const formatEmailText = (answers, fileName = null) => {
  const fields = {
    nome: 'Nome',
    nascimento: 'Data de Nascimento',
    email: 'E-mail',
    telefone: 'Telefone',
    formacao: 'Formação',
    fimEscola: 'Previsão de Conclusão da Escola',
    fimTecnico: 'Previsão de Conclusão do Curso Técnico',
    fimSuperior: 'Previsão de Conclusão da Faculdade',
    cursoTecnico: 'Curso Técnico',
    cursoSuperior: 'Curso Superior',
    cidadeResidente: 'Cidade',
    cargoPretendido: 'Cargo Pretendido',
    experiencia: 'Tem Experiência Anterior',
    nomeEmpresa: 'Última Empresa',
    dataInicio: 'Data de Início',
    dataFim: 'Data de Saída',
    atividades: 'Responsabilidades',
    comoConheceu: 'Como Conheceu a Clever',
  };

  let text = 'Nova Candidatura Recebida\n\n';
  text += 'Dados do Candidato:\n';
  text += '='.repeat(50) + '\n\n';

  Object.entries(answers).forEach(([key, value]) => {
    const label = fields[key] || key;
    if (value && value !== 'Sem arquivo') {
      text += `${label}: ${value}\n`;
    }
  });

  if (fileName) {
    text += `\nCurrículo Anexado: ${fileName}\n`;
  }

  return text;
};

// Rota de teste
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend está funcionando!' });
});

// Rota principal para envio de email
app.post('/api/send-email', upload.single('attachment'), async (req, res) => {
  try {
    // Validação básica
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return res.status(500).json({ 
        error: 'Configuração de email não encontrada. Verifique as variáveis de ambiente.' 
      });
    }

    // Extrai os dados do formulário
    const answers = {};
    Object.keys(req.body).forEach(key => {
      if (key !== 'attachment') {
        answers[key] = req.body[key];
      }
    });

    // Debug: log dos dados recebidos (pode remover depois)
    console.log('Dados recebidos:', Object.keys(answers));

    // Validação: pelo menos o nome deve estar presente
    // Verifica tanto 'nome' quanto 'start' (caso o frontend ainda use currentStep)
    if (!answers.nome && !answers.start) {
      return res.status(400).json({ 
        error: 'Nome é obrigatório',
        details: `Campos recebidos: ${Object.keys(answers).join(', ')}`
      });
    }
    
    // Se o nome estiver em 'start', move para 'nome'
    if (answers.start && !answers.nome) {
      answers.nome = answers.start;
      delete answers.start;
    }

    const transporter = createTransporter();
    const file = req.file;
    const fileName = file ? file.originalname : null;

    // Configuração do email
    const mailOptions = {
      from: `"Site Clever" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER,
      replyTo: answers.email || process.env.SMTP_USER,
      subject: `Nova Candidatura: ${answers.cargoPretendido || 'Site'}`,
      text: formatEmailText(answers, fileName),
      html: formatEmailHTML(answers, fileName),
    };

    // Adiciona anexo se houver
    if (file) {
      mailOptions.attachments = [{
        filename: file.originalname,
        content: file.buffer,
      }];
    }

    // Envia o email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email enviado com sucesso:', info.messageId);
    
    res.json({ 
      success: true, 
      message: 'Email enviado com sucesso',
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    
    // Mensagens de erro mais específicas
    let errorMessage = 'Erro ao enviar email';
    let errorDetails = error.message;

    // Erros comuns do nodemailer
    if (error.code === 'EAUTH') {
      errorMessage = 'Erro de autenticação';
      errorDetails = 'Usuário ou senha incorretos. Verifique SMTP_USER e SMTP_PASS no arquivo .env';
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Erro de conexão ao servidor SMTP';
      const host = process.env.SMTP_HOST || 'não configurado';
      errorDetails = `Não foi possível conectar ao servidor SMTP "${host}" na porta ${process.env.SMTP_PORT || '587'}. `;
      errorDetails += `Possíveis causas: 1) SMTP_HOST incorreto (tente "mail.${host}" ou "smtp.${host}"), 2) Porta bloqueada pelo firewall, 3) Servidor SMTP indisponível. `;
      errorDetails += `Verifique as configurações no arquivo .env e tente porta 465 com SMTP_SECURE=true`;
    } else if (error.code === 'EENVELOPE') {
      errorMessage = 'Erro no endereço de email';
      errorDetails = 'O endereço de email de destino está inválido';
    } else if (error.message && error.message.includes('Invalid login')) {
      errorMessage = 'Login inválido';
      errorDetails = 'Usuário ou senha incorretos. Verifique as credenciais no arquivo .env';
    } else if (error.message && error.message.includes('self signed certificate')) {
      errorMessage = 'Erro de certificado SSL';
      errorDetails = 'Problema com certificado SSL. Tente usar porta 587 com SMTP_SECURE=false';
    }

    res.status(500).json({ 
      error: errorMessage,
      details: errorDetails,
      code: error.code || 'UNKNOWN'
    });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
