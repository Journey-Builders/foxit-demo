# Rsbuild Project

## Setup

Install the dependencies:

```bash
pnpm install
```

Create a new `.env` file in the root directory and add your environment variables:

```bash
touch .env
```

```env {title=".env"}
PUBLIC_FOXIT_SN="YOUR_FOXIT_SN"
PUBLIC_FOXIT_KEY="YOUR_FOXIT_KEY"
```

## Get Started

Start the dev server:

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```
