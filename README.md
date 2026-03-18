# Eta Skåne

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com)
- **Forms:** [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)
- **Icons:** [Lucide React](https://lucide.dev)

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check code formatting without modifying files

## Development Workflow

### Pre-commit Hooks

The project uses Husky and lint-staged to automatically run checks before each commit:

- **ESLint** - Auto-fixes linting issues on staged files
- **Prettier** - Auto-formats staged files

This ensures all committed code meets quality standards. If checks fail, the commit will be blocked.

### Creating a Pull Request

1. Create a feature branch from `master`
2. Make your changes (pre-commit hooks run automatically on commit)
3. Push your branch and open a PR to `master`
4. CI checks will run automatically (lint, typecheck, build)
5. Request review and wait for approval
6. Squash and merge when approved

### CI/CD

GitHub Actions runs automatically on:

- Pull requests to `master`
- Pushes to `master`

Checks include:

- ESLint
- Prettier formatting check
- TypeScript type checking
- Production build verification

## Project Structure

```
app/              # Next.js app router pages
components/       # React components
  ui/            # Reusable UI components (shadcn/ui)
lib/             # Utility functions
types/           # TypeScript type definitions
public/          # Static assets
```
