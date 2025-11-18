# Website Development Todo

## Project Overview
Simple website with header, main area, and footer featuring a contact form with spam protection.

**Tech Stack:**
- Node.js
- TypeScript
- React (Next.js)
- Vercel (hosting)

## Tasks

### 1. Project Setup
- [ ] Initialize Next.js project with TypeScript
- [ ] Install necessary dependencies
- [ ] Set up project structure

### 2. Layout Components
- [ ] Create Header component
- [ ] Create Footer component
- [ ] Create Main layout wrapper
- [ ] Add responsive styling (Tailwind CSS recommended)

### 3. Contact Form
- [ ] Create contact form component
- [ ] Add form validation
- [ ] Implement form state management
- [ ] Style form fields

### 4. Spam Protection
- [ ] Choose spam protection solution:
  - Cloudflare Turnstile (free, privacy-friendly)
  - Google reCAPTCHA v3 (invisible)
  - hCaptcha
- [ ] Integrate spam protection on client side
- [ ] Verify spam protection on server side

### 5. Backend/API
- [ ] Create API route for form submission (Next.js API route)
- [ ] Implement server-side validation
- [ ] Set up email service integration (e.g., Resend, SendGrid, or Nodemailer)
- [ ] Add error handling and rate limiting

### 6. Deployment
- [ ] Configure Vercel project settings
- [ ] Set up environment variables
- [ ] Test deployment
- [ ] Configure custom domain (if applicable)

## Notes
- Next.js is recommended for this stack as it works seamlessly with React, TypeScript, and Vercel
- Consider using Tailwind CSS for styling
- Cloudflare Turnstile is recommended for spam protection (free tier, GDPR-compliant)
