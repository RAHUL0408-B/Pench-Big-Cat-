# Pench Big Cat Nature Resort — Deployment & Environment Configuration

## Environment Variables

Create a `.env.local` file in the project root:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://penchbigcat.com

# Resort Administration Contact
ADMIN_INQUIRY_EMAIL=reservations@penchbigcat.com
EMAIL_FROM=inquiries@penchbigcat.com

# Transactional Email Provider (Resend / SendGrid / Postmark / SMTP)
EMAIL_API_KEY=your_transactional_email_api_key_here

# Optional: Rate Limiting & Spam Protection
RATE_LIMIT_MAX_REQUESTS=5
RATE_LIMIT_WINDOW_MS=60000
```

## Production Deployment Checklist
1. **Domain & DNS**: Point custom domain DNS records (A and CNAME) to Vercel / Cloudflare.
2. **Transactional Email**: Verify sender domain DNS records (DKIM, SPF, DMARC) with email provider (e.g., Resend, Postmark).
3. **Environment Variables**: Add `EMAIL_API_KEY`, `ADMIN_INQUIRY_EMAIL`, and `EMAIL_FROM` in production hosting dashboard.
4. **Build Validation**: Run `npm run build` locally or in CI/CD pipeline to verify zero TypeScript errors or broken routes.
