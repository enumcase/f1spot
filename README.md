# f1spot
## Features

- View upcoming and past F1 races
- Get information about race dates, times, and locations
- Interactive circuit maps with detailed seating information 
(coming soon)
- Comprehensive guides for attending each Grand Prix (coming soon)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.0.0 or later)
  - Download and install from [nodejs.org](https://nodejs.org/)
  - Verify installation with `node -v` and `npm -v`

- **Git** (optional, for cloning the repository)
  - Download and install from [git-scm.com](https://git-scm.com/)
  - Verify installation with `git --version`

## Development Setup

1. **Clone the repository** (or download the ZIP file)
   ```bash
   git clone https://github.com/yourusername/f1spot.git
   cd f1spot
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The page will automatically update as you edit files

## Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

To test the production build locally:

```bash
npm run start
# or
yarn start
```

## Project Structure

```
f1spot/
├── public/           # Static assets like images
├── src/
│   ├── app/          # App router pages
│   ├── components/   # React components
│   ├── lib/          # Utility functions and data
│   └── styles/       # Global styles
├── next.config.js    # Next.js configuration
├── package.json      # Project dependencies
└── tailwind.config.js # Tailwind CSS configuration
```

## Tech Stack

- **Next.js** - React framework with App Router
- **React** - UI component library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

## Troubleshooting

- **Port 3000 already in use**: Use a different port with `npm run dev -- -p 3001`
- **Build errors**: Try clearing `.next` folder and node_modules: `rm -rf .next node_modules && npm install`
- **Image loading issues**: Ensure public directory contains all referenced images