# Claude AI Development Guide

This React Native Expo project follows specific patterns and uses built-in features for consistency and reusability.

## Project Context

**Technology Stack:**

- React Native with Expo SDK 54
- TypeScript (strict mode)
- Expo Router v6 (flat config)
- Redux Toolkit for state management
- ESLint 9 with flat config
- React 19.1 and React Native 0.81.4

## Always Use These Built-in Features

### Configuration & Environment

- **`utils/config.ts`** - For all environment variables and app configuration
- **`utils/deviceInfo.ts`** - For platform detection, screen dimensions, and device info
- Never hardcode values that should come from configuration

### Theme & Styling

- **`@/theme/colors`** - For all color values (supports dark/light mode)
- **`@/theme/fonts`** - For font loading and typography
- **`@/theme/images`** - For image assets and loading
- Always use theme system instead of hardcoded styles

### Custom Hooks (Reuse These)

- **`useColorScheme` from `@/hooks`** - For dark/light theme detection
- **`useDataPersist` from `@/hooks`** - For local storage operations
- **`useKeyboard` from `@/hooks`** - For keyboard state management
- **`useAppSlice` from `@/slices`** - For global state operations

### State Management

- **Redux Toolkit slices in `@/slices`** - For all global state
- Use `useAppSlice` for accessing global state
- Keep local state minimal, prefer global state for shared data

### Services & API

- **`@/services`** - For all API calls and external integrations
- Never make direct API calls from components
- Use the services layer for data transformation

### Type Definitions

- **`@/types`** - For all TypeScript interfaces and types
- Always define component prop interfaces
- Use strict TypeScript - project is configured for it

## Directory Structure

```
app/                 # Expo Router routes (keep minimal, delegate to scenes)
components/
  elements/          # Reusable UI components (Button, Image, etc.)
  layouts/           # Layout-specific components (headers, navigation)
scenes/              # Screen components (main UI logic)
hooks/               # Custom React hooks
slices/              # Redux Toolkit slices
services/            # API and external services
theme/               # Colors, fonts, styling system
types/               # TypeScript type definitions
utils/               # Utility functions (config, deviceInfo)
```

## Component Development Patterns

### Component Structure

1. Define TypeScript interface for props
2. Use function declarations (not arrow functions)
3. Place hooks at the top
4. Use early returns for conditional rendering
5. Use `StyleSheet.create` for styles
6. Export default at bottom

### Import Order

1. React and React Native
2. Third-party libraries
3. Internal imports with `@/` paths
4. Relative imports

### File Naming

- **Components**: PascalCase (`Button.tsx`)
- **Hooks**: camelCase with "use" prefix (`useColorScheme.ts`)
- **Utils**: camelCase (`deviceInfo.ts`)
- **Types**: PascalCase (`User.ts`)

## Development Guidelines

### When Creating Components

1. Check if similar component exists in `components/elements`
2. Use existing built-in features instead of creating new ones
3. Import theme colors instead of hardcoding
4. Use TypeScript interfaces for all props
5. Write tests for all new components

### State Management Rules

- Use Redux Toolkit for global state
- Use `useAppSlice` for state operations
- Keep component state local only when not shared
- Use built-in hooks for common functionality

### Styling Rules

- Always import from `@/theme/colors`
- Use `StyleSheet.create` for performance
- Use platform-specific styles when needed
- Support dark/light mode through theme system

### Testing Requirements

- One test file per component
- Test behavior, not implementation
- Use descriptive test names
- Mock external dependencies

## Navigation (Expo Router v5)

- Use flat config format (already configured)
- Keep route files minimal - delegate to scene components
- Use `<Redirect>` for programmatic navigation
- Handle deep linking through router

## Code Quality Standards

- No `console.log` in production code
- Always handle loading and error states
- Write self-documenting code
- Keep functions focused and small
- Use TypeScript strictly

## Key Development Principles

1. **Reuse First** - Always check existing components and utilities before creating new ones
2. **Follow Patterns** - Use established patterns in the codebase
3. **Use Built-ins** - Leverage project's built-in features (theme, hooks, utils)
4. **Type Safety** - Use TypeScript strictly for better code quality
5. **Test Everything** - Write tests for all components
6. **Stay Consistent** - Follow naming conventions and code structure

## Common Utilities Available

### Device & Platform

```typescript
// From utils/deviceInfo.ts
import { isIos, isAndroid, windowWidth, windowHeight } from '@/utils/deviceInfo';
```

### Configuration

```typescript
// From utils/config.ts
import config from '@/utils/config';
// Access env and apiUrl
```

### Theme

```typescript
// From @/theme
import { colors, loadFonts, loadImages } from '@/theme';
```

### Hooks

```typescript
// From @/hooks
import useColorScheme from '@/hooks/useColorScheme';
import { useDataPersist } from '@/hooks';
```

## Architecture Notes

- Project upgraded to Expo SDK 54
- Using React 19.1 with React Native 0.81.4
- ESLint 9 with flat config
- Directory "pages" was renamed to "scenes"
- TypeScript strict mode enabled (v5.9.2)
- Custom theme system with dark/light support
- SafeAreaView imported from react-native-safe-area-context (not React Native)
- Required peer dependencies: @expo/metro-runtime, react-native-worklets

## Available Scripts

### Development Commands:
- `npm run dev` - Start Expo development server for all platforms with cache cleared
- `npm run dev:ios` - Start development server for iOS simulator only
- `npm run dev:android` - Start development server for Android emulator only  
- `npm run dev:web` - Start development server for web browser only
- `npm run dev:doctor` - Run Expo diagnostics to check project health

### Building & Deployment:
- `npm run dev:build:mobile` - Build iOS (IPA) and Android (APK) using EAS Build for development
- `npm run dev:build:web` - Export static web application to `dist/` directory
- `npm run dev:serve:web` - Serve the built web app locally (run after `dev:build:web`)
- `npm run dev:deploy:web` - Build and deploy web app to EAS Hosting

### Environment & Configuration:
- `npm run dev:secret:push` - Upload environment variables from `.env.dev` to EAS secrets
- `npm run dev:secret:list` - List all environment variables stored in EAS
- `npm run dev:config:public` - Display current Expo configuration for debugging

### Code Quality & Testing:
- `npm run lint` - Run ESLint to check code quality and style
- `npm run lint:staged` - Run linting only on staged Git files (used in pre-commit)
- `npm run format` - Format code using Prettier
- `npm run test` - Run Jest unit tests
- `npm run test:watch` - Run Jest tests in watch mode for development

### Git Hooks:
- `npm run prepare` - Set up Husky Git hooks for pre-commit quality checks

## When in Doubt

- Check existing components in `components/elements` for similar functionality
- Use built-in utilities from `utils/`, `@/theme`, and `@/hooks`
- Follow the established patterns in the codebase
- Prefer extending existing components over creating new ones
- Always use the theme system for consistent UI
