# Trust Trade LLC — Website

Premium methanol commodity trading website. Built with Next.js 14, Tailwind CSS, Framer Motion, next-intl, and powered by Anthropic Claude AI.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + tsParticles
- **i18n**: next-intl (ES default / EN / PT)
- **AI Chatbot**: Anthropic SDK (claude-sonnet-4-20250514)
- **Forms & Email**: React Hook Form + Zod + Resend
- **Icons**: Lucide React
- **Deploy**: Vercel

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env.local` and fill in your keys:

```bash
cp .env.example .env.local
```

Required:

| Variable | Description |
|---|---|
| `ANTHROPIC_API_KEY` | From [console.anthropic.com](https://console.anthropic.com) |
| `RESEND_API_KEY` | From [resend.com](https://resend.com) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | E.g. `+15551234567` |
| `NEXT_PUBLIC_SITE_URL` | E.g. `https://trusttradellc.com` |

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
npm run build
npm start
```

## Deployment (Vercel)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## Project Structure

```
├── app/
│   ├── [locale]/          # Localized pages (es, en, pt)
│   │   ├── page.tsx       # Home
│   │   ├── product/       # Methanol product page
│   │   ├── about/         # About us
│   │   ├── how-it-works/  # Process + FAQ
│   │   └── contact/       # RFQ form + contact
│   ├── api/
│   │   ├── chat/          # Claude AI chatbot endpoint
│   │   └── contact/       # Resend email endpoint
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── Navbar.tsx         # Sticky nav with language switcher
│   ├── Footer.tsx
│   ├── ChatBot.tsx        # AI chatbot (TrustBot)
│   ├── RFQForm.tsx        # Request for Quote form
│   ├── home/              # Home page sections
│   └── ui/                # Reusable UI primitives
├── messages/              # i18n JSON (es, en, pt)
├── lib/                   # Utilities
└── middleware.ts          # next-intl locale routing
```

## Languages

- `es` — Spanish (default, no prefix)
- `en` — English (`/en/...`)
- `pt` — Portuguese (`/pt/...`)

## Team

- Nicolas Herrera — Co-Founder
- Henry Morales — Co-Founder
- Yamil Llaver — Co-Founder

---

**Trust Trade LLC** · Florida, USA · contact@trusttradellc.com
