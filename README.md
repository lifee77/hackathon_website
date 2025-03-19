# Hackathon Website

A beautiful, responsive website for "The World's Largest Hackathon" built with React, TypeScript, and Tailwind CSS.

## 📋 Features

- **Modern UI** with sleek blue gradient theme
- **Fully responsive design** for all device sizes
- **Interactive components** including countdown timer and FAQ accordions
- **Multi-page navigation** with React Router
- **Complete hackathon experience** with registration flow

## 📱 Pages

- **Home Page** - Event overview, challenge tracks, workshops, judges, and FAQ
- **Registration Page** - User-friendly form with validation
- **Learn More Page** - Detailed information about the event and participation benefits

## 🛠️ Technologies

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [Vite](https://vitejs.dev/) - Fast build tool
- [React Router](https://reactrouter.com/) - Navigation
- [Lucide React](https://lucide.dev/) - Beautiful icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd <project-folder>
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

Production files will be generated in the dist directory.

## 📝 Project Structure

```
src/
├── App.tsx              # Main component with routes
├── main.tsx            # Entry point
├── index.css           # Global styles with Tailwind
└── pages/
    ├── HomePage.tsx    # Landing page
    ├── RegisterPage.tsx # Registration form
    └── LearnMorePage.tsx # Detailed information
```

## 🔧 Customization

Edit the content in the page components to customize the hackathon details, dates, prizes, and other information specific to your event.

## 📄 License

This project is open source and available under the MIT License.