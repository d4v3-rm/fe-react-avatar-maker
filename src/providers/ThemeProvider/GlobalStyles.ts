import { createGlobalStyle } from 'styled-components';
import type { Theme } from './types';

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-size: 16px;
    --primary-color: ${({ theme }) => theme.colors.primary};
    --accent-color: ${({ theme }) => theme.colors.accent};
    --background-color: ${({ theme }) => theme.colors.background};
    --surface-color: ${({ theme }) => theme.colors.surface};
    --text-color: ${({ theme }) => theme.colors.text.primary};
    --text-secondary-color: ${({ theme }) => theme.colors.text.secondary};
    --border-color: ${({ theme }) => theme.colors.border.default};
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: ${({ theme }) => theme.typography.lineHeight.md};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    transition: background-color 0.3s ease, color 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    line-height: ${({ theme }) => theme.typography.lineHeight.sm};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    color: ${({ theme }) => theme.colors.text.link};
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* Remove Chrome's default focus outline and implement custom one */
  *:focus {
    outline: none;
  }

  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.mode === 'light' ? '#f1f1f1' : '#2c2c2c'};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.mode === 'light' ? '#c1c1c1' : '#5c5c5c'};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.mode === 'light' ? '#a1a1a1' : '#7c7c7c'};
  }

  /* Selection styles */
  ::selection {
    background-color: ${({ theme }) => theme.colors.primary}33; /* 20% opacity */
    color: ${({ theme }) => theme.colors.text.primary};
  }

  /* Remove arrows from number inputs */
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
  input[type=number] {
    -moz-appearance: textfield;
  }

  /* Code blocks */
  code {
    font-family: ${({ theme }) => theme.typography.fontFamily.mono};
    background-color: ${({ theme }) => theme.mode === 'light' ? '#f5f5f5' : '#2d2d2d'};
    color: ${({ theme }) => theme.mode === 'light' ? '#24292e' : '#e1e4e8'};
    padding: 0.2em 0.4em;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    font-size: 0.9em;
  }

  pre {
    background-color: ${({ theme }) => theme.mode === 'light' ? '#f6f8fa' : '#1f2428'};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: ${({ theme }) => theme.spacing.md};
    overflow-x: auto;
    margin-bottom: ${({ theme }) => theme.spacing.md};

    code {
      background-color: transparent;
      padding: 0;
      border-radius: 0;
      font-size: 0.9em;
    }
  }
`;

export default GlobalStyles;
