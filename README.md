# React Native Boilerplate

<h1 align="center">
  <img src='https://github.com/wataru-maeda/react-native-boilerplate/blob/main/__DELELE_ME__/banner.png' width='600'>
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="React Native is released under the MIT license." />
  <img src="https://github.com/wataru-maeda/react-native-boilerplate/actions/workflows/preview.yml/badge.svg" alt="" />
  <img src="https://github.com/wataru-maeda/react-native-boilerplate/actions/workflows/test.yml/badge.svg" alt="" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
</p>

<p align="center">
  <img src='https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/__DELELE_ME__/demo-light-theme.gif' width='150px'>
  <img src='https://github.com/wataru-maeda/react-native-boilerplate/blob/feat/expo-router/__DELELE_ME__/demo-dark-theme.gif' width='150px'>
</p>

## Overview

A powerful React Native boilerplate built with Expo that eliminates setup hassles and gets you coding faster. This template comes pre-configured with essential features like:

- 📱 File-based routing with Expo Router
- 🎨 Light/Dark theme support out of the box
- 🔄 Redux Toolkit for state management
- 🚀 CI/CD workflows ready to go
- 📦 Environment configuration for dev/prod
- ✨ Code quality tools (ESLint, Prettier, Jest)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 20.x or later
- npm or yarn package manager
- Expo CLI: Install using `npm install -g expo-cli`

## Quick Start Guide

1. **Create Your Project**
   ```bash
   # Option 1: Use as template
   Click the "Use this template" button on GitHub

   # Option 2: Download ZIP
   Download and extract the ZIP file
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start Development Server**
   ```bash
   npm run start
   # or
   yarn start
   ```

## Core Features

### 1. Navigation System
The project uses Expo Router with a pre-configured navigation structure:

```
Root (Drawer)
├── Home Tab
│   └── Stack
│       ├── Home Screen
│       └── Details Screen
└── Profile Tab
    └── Stack
        ├── Profile Screen
        └── Settings Screen
```

### 2. Theme Management
- Built-in support for light and dark modes
- Centralized theme configuration in `/theme` directory
- Easy color switching with `useColorScheme` hook
- Asset preloading and SVG support included

### 3. State Management
Redux Toolkit is pre-configured with:
- Ready-to-use store setup
- Example slices for common patterns
- Redux logger enabled in development
- Hooks-based state access

### 4. Environment Setup
Multiple environment support with:
```bash
.env.dev    # Development settings
.env.prod   # Production settings
```

To add new environment variables:
1. Add variables to both .env files
2. Update `app.config.ts` extra section
3. Add to `utils/config.ts`

### 5. Development Tools
Pre-configured development tools:
- ESLint for code linting
- Prettier for code formatting
- Jest for testing
- Pre-commit hooks for code quality

## Deployment

### Mobile Deployment
```bash
# Build for iOS/Android
npm run dev:build:mobile
```

### Web Deployment
```bash
# Deploy to EAS Hosting
npm run dev:deploy:web
```

## Available Scripts

Development:
- `npm run dev` - Run on all platforms
- `npm run dev:ios` - Run iOS only
- `npm run dev:android` - Run Android only
- `npm run dev:web` - Run web only

Building:
- `npm run dev:build:mobile` - Build mobile apps
- `npm run dev:build:web` - Build web version
- `npm run dev:deploy:web` - Deploy web version

Testing:
- `npm run lint` - Run ESLint
- `npm run format` - Run Prettier
- `npm run test` - Run Jest tests

## Adding Native Code

To include native code:
```bash
npx expo prebuild
```
This generates iOS and Android native projects.

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.