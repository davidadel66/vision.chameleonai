export const APP_NAME = 'VisionAI';
export const APP_DESCRIPTION = 'Your personal risk management assistance';

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  SCREENER: '/dashboard/screener',
  CRYPTO: '/dashboard/crypto',
  EVENTS: '/dashboard/events',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

export const API_ENDPOINTS = {
  CRYPTO: '/api/crypto',
  EVENTS: '/api/events',
  SCREENER: '/api/screener',
} as const;

export const LOCAL_STORAGE_KEYS = {
  THEME: 'vision-theme',
  USER_PREFERENCES: 'vision-user-preferences',
  SCREENER_FILTERS: 'vision-screener-filters',
} as const;
