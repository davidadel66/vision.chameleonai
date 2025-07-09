export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export interface DashboardRoute {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  description?: string
}

export interface CryptoData {
  id: string
  symbol: string
  name: string
  price: number
  change24h: number
  marketCap: number
  volume24h: number
  lastUpdated: Date
}

export interface EventData {
  id: string
  title: string
  description: string
  date: Date
  category: 'crypto' | 'market' | 'news'
  severity: 'low' | 'medium' | 'high'
}

export interface ScreenerFilter {
  priceRange: {
    min: number
    max: number
  }
  marketCapRange: {
    min: number
    max: number
  }
  volumeRange: {
    min: number
    max: number
  }
  categories: string[]
}

export interface APIResponse<T> {
  data: T
  message: string
  status: 'success' | 'error'
  timestamp: Date
}

export type ThemeMode = 'light' | 'dark' | 'system' 