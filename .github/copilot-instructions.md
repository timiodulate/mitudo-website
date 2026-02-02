# Copilot Instructions for Mitudo Website

## Project Overview

Mitudo is a Next.js 15 portfolio website using Chakra UI v3 for styling, TypeScript, and Cypress for component testing. The site is a single-page marketing website with multiple sections (Hero, Services, Portfolio, Testimonials, CTA, Footer).

## Architecture & Key Patterns

### Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: Chakra UI v3 with Panda CSS recipes
- **Styling**: Tailwind CSS 4 + Chakra UI recipes (not traditional Tailwind classes)
- **Theming**: `next-themes` with light/dark mode support
- **Testing**: Cypress for component testing
- **Linting**: ESLint v9 + TypeScript

### Project Structure

- `src/app/` - Next.js app router configuration (layout, page, providers)
- `src/components/` - React components organized by feature (Header, Hero, Portfolio, etc.)
    - Shared components: `shared/` (Logo, SectionTitleWrapper)
    - UI utilities: `ui/` (color-mode, provider, toaster, tooltip)
- `src/styles/` - Theme configuration and Chakra recipes
    - `theme.ts` - Global theme setup with custom colors, fonts, spacing
    - `components/` - Recipe files (button, link, container, input, etc.)
- `src/images/` - Image exports/references

### Styling Approach

- **No raw Tailwind classes** - use Chakra UI component props and recipes instead
- **Recipes** define component variants using `defineRecipe` (e.g., `button.recipe.ts` defines `visual` variants like `outline` and `solid`)
- **Theme recipes** imported in `theme.ts` and configured via Chakra's `defineConfig`
- **CSS-in-JS**: Emotion for runtime styling, Panda CSS for static extraction
- **Custom theme tokens**: Colors (black, white, grays, semantic colors), fonts (Inter for headings, Roboto for body), spacing, etc.
- **Gradients**: Use `bgGradient` with `gradientFrom`, `gradientVia`, `gradientTo` props instead of `linear()` syntax
    - ✅ `bgGradient="to-br" gradientFrom="#0D1B2A" gradientVia="#142535" gradientTo="#0D1B2A"`
    - ❌ `bgGradient="linear(to-br, #0D1B2A, #142535, #0D1B2A)"`
- **External links**: Use `target="_blank" rel="noopener noreferrer"` instead of `isExternal` prop on ChakraLink
    - ✅ `<ChakraLink target="_blank" rel="noopener noreferrer">...</ChakraLink>`
    - ❌ `<ChakraLink isExternal>...</ChakraLink>`
- **Button icons**: Add icon as a child element, not as `leftIcon` prop
    - ✅ `<Button><MessageCircle className="w-4 h-4" /></Button>`
    - ❌ `<Button leftIcon={<MessageCircle className="w-4 h-4" />}>...</Button>`
- **Stack spacing**: Use `gap` prop instead of `spacing` for VStack, HStack, Flex
    - ✅ `<VStack gap={4}>...</VStack>`
    - ❌ `<VStack spacing={4}>...</VStack>`
- **Hover styles**: Combine all hover properties into single `_hover` object
    - ✅ `_hover={{ borderColor: "#color", bg: "#color2" }}`
    - ❌ `_hoverBorder={{ borderColor: "#color" }}` or separate hover props

### Component Patterns

1. **Page sections** (Hero, Services, Portfolio, Testimonials) are exported from `src/components/[ComponentName]/index.tsx`
2. **Props-based configuration** - components accept data via props; no hardcoded content
3. **Example**: `ProjectCard.tsx` - accepts `title`, `description`, `imagePlaceholder`, `technologies`, `link`
4. **Shared utilities**: `SectionTitleWrapper` for consistent section headers
5. **Client components**: Use `"use client"` directive when needed (e.g., Header for state, ColorThemeToggler for theme switching)

### Color Mode & Theming

- Theme provided via `next-themes` in `src/app/providers.tsx`
- Use `useColorMode()` and `useColorModeValue()` from `src/components/ui/color-mode` for dynamic theming
- Global theme in `src/styles/theme.ts` defines light/dark mode colors:
    - Light: `gray.50` background, `gray.900` text
    - Dark: `gray.900` background, `whiteAlpha.900` text
- Chakra recipes use `_dark:` selectors for dark mode (see `button.recipe.ts`)

## Developer Workflows

### Development

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Build for production
npm run start      # Run production build
npm run lint       # Run ESLint (Next.js configured)
npm run check-code # ESLint + TypeScript type checking
npm run cypress:open # Open Cypress component test runner
```

### Key Commands

- **Type checking**: `npx tsc --noEmit` (no code generation, just validation)
- **Linting**: Uses ESLint 9 with flat config (`eslint.config.mjs`)
- **Hot reload**: Automatic via Next.js dev server

## Critical File References

### Must-Know Files

- **[src/app/layout.tsx](src/app/layout.tsx)** - Root layout with font imports (Inter, Roboto) and Providers wrapper
- **[src/app/page.tsx](src/app/page.tsx)** - Main page; imports all major sections (Header, Hero, Services, etc.) and composes them
- **[src/styles/theme.ts](src/styles/theme.ts)** - Global theme configuration; modify for color/font changes
- **[src/components/ui/color-mode.tsx](src/components/ui/color-mode.tsx)** - Wrapper exports for Chakra's color mode hooks
- **[cypress.config.ts](cypress.config.ts)** - Cypress configuration for component testing

### Recipe Files (Update When Changing Component Styles)

- `src/styles/components/button.recipe.ts` - Button variants (outline, solid)
- `src/styles/components/link.recipe.ts` - Link styling
- `src/styles/components/container.recipe.ts` - Container/wrapper recipes
- All recipes imported into `theme.ts`

## Common Tasks

### Adding a New Section

1. Create `src/components/YourSection/index.tsx` (or `index.tsx` + `YourCardComponent.tsx` for card-based sections)
2. Use Chakra UI components (Box, Flex, Heading, Text, Button)
3. Import into [src/app/page.tsx](src/app/page.tsx) and add to JSX tree
4. Follow existing pattern: use `SectionTitleWrapper` for titles, responsive Chakra props

### Modifying Theme Colors or Fonts

1. Edit `src/styles/theme.ts` - update `tokens` for colors/fonts
2. Recipes reference tokens via `"{colors.colorName}"` syntax
3. Rebuild to see changes; dev server auto-reloads

### Adding a Component with Variants

1. Create recipe file in `src/styles/components/yourcomponent.recipe.ts`
2. Export from recipe file
3. Import in `theme.ts` and add to `defineConfig`
4. Use variants via Chakra UI `variant` prop in component

### Ensuring Dark Mode Support

- Use `useColorModeValue()` for conditional values or `_dark:` in Chakra props
- Test theme toggle via Header's ColorThemeToggler component
- Recipes should include `_dark:` overrides (see button.recipe.ts for pattern)

## Import Paths & Configuration

- Path alias: `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- Use `@/components`, `@/styles`, `@/images` throughout the codebase
- Next.js experimental: `optimizePackageImports` for Chakra to reduce bundle size

## Quality Standards

- **Type Safety**: `strict: true` in `tsconfig.json` - use TypeScript for all components and utilities
- **Linting**: Run `npm run check-code` before committing (catches ESLint + type errors)
- **Testing**: Cypress tests in `cypress/component/` - add tests for interactive components
- **Accessibility**: Use semantic Chakra components (Heading, Link, Button) for better a11y defaults

## Conventions & Anti-Patterns

### DO

- ✅ Use Chakra UI component props for styling
- ✅ Define new styles as Chakra recipes (`defineRecipe`) in `src/styles/components/`
- ✅ Import with `@/` path alias
- ✅ Use TypeScript interfaces for component props
- ✅ Mark client-only components with `"use client"`
- ✅ Test via Cypress for visual/interaction testing
- ✅ Use `bgGradient="to-br" gradientFrom="#color1" gradientVia="#color2" gradientTo="#color3"` for gradients
- ✅ Use `target="_blank" rel="noopener noreferrer"` on ChakraLink for external links
- ✅ Add icons to Button as children elements, not as props
- ✅ Use `gap` prop on Stack components (VStack, HStack, Flex)
- ✅ Combine all hover styles into single `_hover` object

### DON'T

- ❌ Write raw CSS or Tailwind utility classes (use Chakra recipes)
- ❌ Hardcode colors - reference `theme.ts` tokens
- ❌ Add external styling libraries without discussing theme integration
- ❌ Skip type annotations on props/state
- ❌ Use `bgGradient="linear(to-br, ...)"` syntax for gradients
- ❌ Use `isExternal` prop on ChakraLink (use explicit target and rel attributes instead)
- ❌ Use `leftIcon`, `rightIcon` props on Button (pass icons as children instead)
- ❌ Use `spacing` prop on Stack components such as VStack, HStack, Flex (use `gap` instead)
- ❌ Use separate hover pseudo-props like `_hoverBorder`, `_hoverBg` (combine into `_hover` object)

---

**Last Updated**: 2026-02-01
