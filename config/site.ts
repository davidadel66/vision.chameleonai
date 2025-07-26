export const siteConfig = {
  name: 'VisionAI',
  description: 'Your personal risk management assistance',
  url: 'https://vision.chameleonai.com',
  ogImage: 'https://vision.chameleonai.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/chameleonai',
    github: 'https://github.com/chameleonai/vision',
    docs: 'https://docs.chameleonai.com',
  },
  creator: 'ChameleonAI',
};

export const apiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.chameleonai.com',
  timeout: 10000,
  retryAttempts: 3,
};

export const features = {
  auth: process.env.NEXT_PUBLIC_AUTH_ENABLED === 'true',
  analytics: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true',
  realtime: process.env.NEXT_PUBLIC_REALTIME_ENABLED === 'true',
};
