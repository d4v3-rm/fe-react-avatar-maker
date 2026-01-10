# 🎨 Avatar Maker

> Create and customize an avatar with a clean UI, smooth GSAP animations, and a modular Feature-Sliced Design architecture.

## ✨ Overview

`fe-react-avatar-maker` is a React + TypeScript app for building avatars with DiceBear (`avataaars` style).

The project is intentionally structured to stay maintainable over time:

- 🧩 **Feature-Sliced Design (FSD)** for scalable architecture
- 🧠 **Redux Toolkit** for predictable state management
- 🎞️ **GSAP** for smooth and reusable UI animations
- 🎯 **Sass (SCSS)** for simple, clean styling (no visual gradients)
- 🧹 **ESLint + Prettier** for code quality and consistency

---

## 🛠️ Tech Stack

| Area          | Tools                                    |
| ------------- | ---------------------------------------- |
| Frontend      | React 18, TypeScript, Vite               |
| State         | Redux Toolkit, React Redux               |
| Avatar Engine | DiceBear Core + Collection (`avataaars`) |
| Animations    | GSAP                                     |
| Styling       | Sass (SCSS)                              |
| Quality       | ESLint, Prettier                         |

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## 📜 Available Scripts

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start local Vite dev server      |
| `npm run build`        | Type-check + production build    |
| `npm run preview`      | Preview production bundle        |
| `npm run lint`         | Run ESLint                       |
| `npm run lint:fix`     | Run ESLint with auto-fix         |
| `npm run format`       | Format code with Prettier        |
| `npm run format:check` | Check formatting without changes |

---

## 🧱 Project Architecture (FSD)

```text
src/
  app/        # app bootstrap, providers, global styles
  pages/      # page-level composition
  widgets/    # bigger UI blocks composed from features/entities
  features/   # user actions and interactions
  entities/   # core business/domain models (avatar)
  shared/     # reusable libs/utilities/hooks
```

### Key modules

- `entities/avatar`:
  - avatar model, Redux slice/selectors
  - avatar SVG generator (`buildAvatarSvg`)
  - avatar preview UI
- `features/avatar-customization`:
  - customization form controls
  - split UI components (`ColorControlGroup`, `SelectControlGroup`, `ControlActions`)
- `shared/lib/animations`:
  - reusable GSAP hooks:
    - `useRevealAnimation`
    - `useInteractiveMotion`
    - `usePulseOnChange`

---

## 🎯 UX Notes

- Rounded, soft UI elements for a modern visual feel
- Simple color palette (no gradients) for clarity
- Smooth interactions with GSAP:
  - page reveal animation
  - interactive hover/press motion
  - preview pulse on avatar change
- Motion-safe behavior respecting `prefers-reduced-motion`

---

## 🔄 Avatar Flow

1. User changes options (hair, eyes, clothes, colors, etc.)
2. Redux state updates through `updateOption`
3. SVG is regenerated with DiceBear
4. Preview animates subtly on update
5. User can download the final SVG

---

## 📦 License

This project is licensed under the MIT License.  
See [`LICENSE`](LICENSE) for details.

---

## 🙌 Contributing

Contributions are welcome.

- Keep architecture aligned with FSD
- Prefer small, composable components
- Run lint/format/build before opening a PR
