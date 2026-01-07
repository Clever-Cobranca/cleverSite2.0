# Backend - Clever Form

Backend para envio de emails do formulário de candidatura usando Node.js, Express e Nodemailer.

## Instalação

```bash
npm install
```

## Configuração

### 📚 **Leia o guia completo:** [CONFIGURACAO_EMAIL.md](./CONFIGURACAO_EMAIL.md)

1. Copie o arquivo `env.exemplo` e renomeie para `.env`
2. Abra o arquivo `.env` e preencha com suas informações de email

**Exemplo rápido (Gmail):**

```env
PORT=3001
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-app-password-aqui
RECIPIENT_EMAIL=destino@email.com
```

**⚠️ IMPORTANTE:** Para Gmail, você precisa usar uma "Senha de App", não a senha normal. Veja instruções detalhadas em [CONFIGURACAO_EMAIL.md](./CONFIGURACAO_EMAIL.md)

## Executar

```bash
# Desenvolvimento (com auto-reload)
npm run dev

# Produção
npm start
```

O servidor estará rodando em `http://localhost:3001`

## Endpoints

### GET `/api/health`
Verifica se o servidor está funcionando.

### POST `/api/send-email`
Envia o formulário por email.

**Body (FormData):**
- Campos do formulário (nome, email, telefone, etc.)
- `attachment`: arquivo PDF do currículo (opcional)

**Resposta de sucesso:**
```json
{
  "success": true,
  "message": "Email enviado com sucesso",
  "messageId": "..."
}
```

## Notas

- O limite de tamanho de arquivo é 10MB
- O servidor usa CORS para permitir requisições do frontend
- Os emails são formatados em HTML e texto simples
