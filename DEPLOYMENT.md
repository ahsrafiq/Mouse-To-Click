# MouseToClick - Production Deployment Guide (Vercel)

This document provides a step-by-step walkthrough for deploying the **MouseToClick** platform to Vercel with PostgreSQL database integration.

---

## 1. Prerequisites
- Node.js 18+ or 20+
- A GitHub, GitLab, or Bitbucket account
- A [Vercel](https://vercel.com) account
- A managed PostgreSQL instance (e.g., [Neon](https://neon.tech), [Supabase](https://supabase.com), or Vercel Postgres)

---

## 2. Environment Variables Configuration

Copy `.env.example` to your production environment or configure the following in **Vercel Project Settings &rarr; Environment Variables**:

| Variable | Description | Example / Default |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@ep-xyz.neon.tech/mousetoclick?sslmode=require` |
| `ADMIN_PASSWORD` | Master password for `/admin` portal | `A_Secure_Password_Here` |
| `NOTIFICATION_TO_EMAIL` | Target email for lead notifications | `operations@mousetoclick.com` |
| `SMTP_HOST` | (Optional) Outbound email SMTP host | `smtp.resend.com` |
| `SMTP_PORT` | (Optional) SMTP port | `587` |
| `SMTP_USER` | (Optional) SMTP username | `resend` |
| `SMTP_PASS` | (Optional) SMTP password / API key | `re_123456789` |
| `NEXT_PUBLIC_SITE_URL` | Public production domain | `https://mousetoclick.com` |

---

## 3. Database Migration with Prisma

Before the initial production launch, push your Prisma schema to your PostgreSQL database:

```bash
# Push schema migrations to production database
npx prisma db push

# Generate the Prisma client
npx prisma generate
```

---

## 4. Deploying to Vercel

### Option A: Via Vercel Web Dashboard (Recommended)
1. Push your repository to GitHub.
2. In the Vercel dashboard, click **"Add New Project"** and select the `MouseToClick` repository.
3. Framework Preset will automatically detect **Next.js**.
4. In the **Build and Output Settings**, keep defaults:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install --legacy-peer-deps`
5. Add the **Environment Variables** listed above.
6. Click **"Deploy"**.

### Option B: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Authenticate and deploy
vercel
vercel --prod
```

---

## 5. Security & Privacy Safeguards
- **HTTPS Enforcement**: Automatically handled by Vercel SSL certificates.
- **Strict Rate Limiting**: Embedded in `src/lib/rateLimit.ts` protecting `/api/inquiries` and `/api/insurance-applications`.
- **Sensitive Healthcare Data**: Patient and applicant health details are validated with Zod, encrypted in transit (TLS 1.3), and never written to unsecured logs.
- **Admin Authentication**: Password-protected `/admin` portal secured with HTTP-only session cookies.

---

## 6. Performance & Lighthouse Optimization
- 3D WebGL Canvas is dynamically imported (`ssr: false`) and rendered on the client to avoid blocking the initial server paint.
- Procedural Three.js geometry requires **0 KB** external model downloads, ensuring top Lighthouse scores on mobile and slow 3G/4G networks.
- Full reduced-motion fallback (`prefers-reduced-motion`) guarantees accessible operation for all visitors.

