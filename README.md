# 3D Portfolio

An experimental 3D personal-portfolio project built with React, Three.js, React Three Fiber, GSAP, and Tailwind CSS.

This repository explores interactive hero experiences, motion-driven UI, and real-time 3D rendering for a developer portfolio. It is separate from my current production portfolio and is being developed as a focused experiment in 3D web presentation.

## Current Status

**Early development.** The current application mounts the portfolio hero experience while the remaining sections are still being designed and integrated.

## Technology Stack

| Area | Technology |
| --- | --- |
| Frontend | React 19 |
| Build tooling | Vite 8 |
| Styling | Tailwind CSS 4 |
| 3D rendering | Three.js |
| React 3D | React Three Fiber, Drei |
| Post-processing | React Three Postprocessing |
| Animation | GSAP, `@gsap/react` |
| Responsive behavior | react-responsive |
| Code quality | ESLint |

## Project Structure

```text
src/
├── assets/       # Images, models, and static visual assets
├── components/   # Reusable UI / 3D components
├── constants/    # Shared content and configuration values
├── sections/     # Page-level portfolio sections
│   └── Hero.jsx  # Current primary experience
├── App.jsx       # Application composition
├── index.css     # Global styles / Tailwind integration
└── main.jsx      # React entry point
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/SahanPramuditha-Dev/3d-portfolio.git
cd 3d-portfolio
npm install
```

The active development branch for this experiment is currently `dev`.

```bash
git checkout dev
npm run dev
```

## Available Scripts

```bash
npm run dev      # start Vite development server
npm run build    # create a production build
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Development Goals

This project is being used to explore:

- interactive 3D hero scenes;
- performant real-time rendering in a portfolio context;
- GSAP-driven motion and transitions;
- responsive 3D experiences across screen sizes;
- reusable React Three Fiber scene components;
- post-processing without overwhelming the UI;
- balancing visual impact with accessibility and performance.

## Production Portfolio

My main portfolio is available at:

**https://sahanpramuditha.me**

For a more complete portfolio codebase, see [Space_Portfolio](https://github.com/SahanPramuditha-Dev/Space_Portfolio).

## Author

**Sahan Pramuditha**  
BICT Undergraduate — University of Colombo
