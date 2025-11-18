# Cybco Site

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design with header, main content, and footer
- Contact form with spam protection (Cloudflare Turnstile)
- Dark mode support
- TypeScript for type safety
- Tailwind CSS for styling
- Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Copy the environment variables template:

```bash
cp .env.local.example .env.local
```

4. Configure your environment variables in `.env.local`:
   - Get Cloudflare Turnstile keys from https://dash.cloudflare.com/
   - Add your email service credentials (optional for development)

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and add environment variables when asked

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Add environment variables in the dashboard:
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
   - `TURNSTILE_SECRET_KEY`
   - `CONTACT_EMAIL` (optional)
6. Click "Deploy"

## Configuring Cloudflare Turnstile

1. Go to https://dash.cloudflare.com/
2. Navigate to Turnstile
3. Create a new site
4. Copy the Site Key to `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
5. Copy the Secret Key to `TURNSTILE_SECRET_KEY`

For development, the default test keys will work:
- Site Key: `1x00000000000000000000AA` (always passes)
- Secret Key: `1x0000000000000000000000000000000AA`

## Email Integration (Optional)

The contact form currently logs submissions to the console. To send actual emails:

1. Choose an email service (Resend, SendGrid, or SMTP)
2. Add your API keys to `.env.local`
3. Uncomment and modify the email sending code in `src/app/api/contact/route.ts`

### Recommended: Resend

```bash
npm install resend
```

Update the API route with Resend integration.

## Project Structure

```
Site/
├── src/
│   ├── app/
│   │   ├── api/contact/    # Contact form API route
│   │   ├── contact/        # Contact page
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Header.tsx      # Site header
│       ├── Footer.tsx      # Site footer
│       ├── MainLayout.tsx  # Main layout wrapper
│       └── ContactForm.tsx # Contact form with Turnstile
├── public/                 # Static assets
├── .env.local.example      # Environment variables template
└── package.json
```

## License

MIT
