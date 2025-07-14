# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
NativeBase is a React Native UI component library providing cross-platform mobile components. It's built with a sophisticated theme system and supports both iOS and Android platforms.

## Common Development Commands

### Building & Compilation
```bash
npm run compile        # Babel transpilation to dist folder
npm run transpile      # Full build including asset copying
```

### Code Quality
```bash
npm run lint          # ESLint with auto-fix
```

### Testing
```bash
npm test             # Run Jest tests
```

### Theme Development
```bash
node ejectTheme.js   # Eject theme for customization
```

## Architecture Overview

### Core Structure
- **src/basic/**: Individual UI components (Button, Text, Header, Icon, etc.)
- **src/theme/**: Theme system with component-specific themes and platform variables
- **src/utils/**: Style computation helpers and property mapping utilities
- **dist/**: Transpiled output (built via Babel)

### Component Architecture
All components extend from `Base/NativeBaseComponent.js` and use the shoutem-theme system for styling. Components are self-contained with their own styling logic and support platform-specific theming.

### Theme System
The theme system is built on native-base-shoutem-theme and supports:
- Platform-specific variables (iOS/Android)
- Component-level theme overrides
- Theme ejection for complete customization
- StyleProvider for theme context

### Key Dependencies
- React Native (^0.71.12) and React (^18.2.0) as peer dependencies
- native-base-shoutem-theme for theming
- react-native-vector-icons for icon support
- react-native-easy-grid for grid layouts

## Build Configuration

### Babel Setup
Uses `react-native` preset with output to `dist/` directory. Asset copying is handled by the transpile script.

### Font Management
Fonts are located in `Fonts/` directory and configured via `react-native.config.js` for automatic linking.

### TypeScript Support
Comprehensive TypeScript definitions in `index.d.ts` with interfaces for all components.

## Testing Setup
Jest is configured with React Native preset and transform ignore patterns for shoutem-theme modules. Use React test renderer for component testing.

## Code Quality Tools
- ESLint with Airbnb config and Prettier integration
- Flow type checking (v0.47.0)
- Husky pre-commit hooks for linting
- Prettier for code formatting

## Development Workflow
Follows Git Flow methodology with fork-based contributions. ESLint enforcement is mandatory, and commits should be squashed before merging. Use the TestBed app for development testing.

## Distribution
The library exports components, theme utilities, grid system, and utility functions. Main entry point is `dist/src/index.js` with TypeScript definitions.