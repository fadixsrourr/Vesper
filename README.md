# 🌌 Vesper: Ambient Generative Art Visualizer

> "A symphony of physics-based particles, interactive flow, and premium glassmorphic design."

Vesper is a high-performance generative art engine built with **React**, **TypeScript**, and **HTML5 Canvas**. It provides a relaxing, interactive visual experience where particles react to user proximity, forming dynamic networks and topography.

---

## ✨ Features

- **🧠 Intelligent Particle Physics**: Particles exhibit fluid-like motion with repulsion and attraction physics.
- **🖱️ Interactive Flow**: Real-time response to mouse and touch movement.
- **💎 Glassmorphic Interface**: A premium control panel built with modern CSS and `backdrop-filter`.
- **⚙️ Dynamic Configuration**: Instantly adjust velocity, density, and interaction radius.
- **⚡ High-Performance Rendering**: Optimized 2D Canvas loop ensuring ~60FPS on most devices.

## 🛠️ Technology Stack

- **Framework**: [React 18/19](https://react.dev/)
- **Logic**: [TypeScript](https://www.typescriptlang.org/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Bundler**: [Vite 6](https://vitejs.dev/)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Local development environment

### Quick Start
1. **Clone the Repo**
   ```bash
   git clone https://github.com/user/vesper.git
   ```
2. **Install Dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
3. **Launch the Engine**
   ```bash
   npm run dev
   ```

## 📂 Architecture Overview

- `src/hooks/useParticles.ts`: The physics engine and logic core.
- `src/components/Core/CanvasEngine.tsx`: The primary rendering loop.
- `src/components/UI/Controls.tsx`: Interactive HUD and parameter management.
- `src/index.css`: Global design tokens and glassmorphic styling system.

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
*Crafted for visual excellence and technical precision.*
