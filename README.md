# Cruise News Digest

A modern, responsive React/Next.js application for cruise industry news, optimized for Cloudflare Pages deployment.

## Features

- **20 Static Articles**: Pre-loaded with cruise industry content
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Category Filtering**: Filter articles by cruise type
- **Featured Articles**: Highlighted top stories
- **Modern UI**: Dark theme with clean, professional design

## Tech Stack

- **Next.js 14**: React framework with static export
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Cloudflare Pages**: Static site hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Deployment to Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `out`
4. Deploy!

## Project Structure

```
├── components/          # React components
│   ├── Header.tsx
│   ├── ArticleCard.tsx
│   ├── FeaturedArticle.tsx
│   ├── FilterButtons.tsx
│   └── Footer.tsx
├── data/               # Static data
│   └── articles.ts
├── pages/              # Next.js pages
│   ├── _app.tsx
│   └── index.tsx
├── styles/             # Global styles
│   └── globals.css
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind configuration
└── package.json
```

## Data Structure

Articles are stored in `data/articles.ts` with the following structure:

```typescript
interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  alt: string;
  featured?: boolean;
  date: string;
}
```

## Future Enhancements

- Database integration for dynamic content
- User authentication
- Article search functionality
- Newsletter subscription
- Social media integration

## License

© 2024 Cruise News Digest. All rights reserved.
