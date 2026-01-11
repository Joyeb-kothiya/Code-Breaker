// API Configuration for Ziki Code Breaker
// Deploy backend to Render and set VITE_API_URL in Vercel environment variables

export const API_CONFIG = {
  // Backend API URL - Set via VITE_API_URL env variable or update the fallback
  // For Vercel: Add VITE_API_URL in project settings → Environment Variables
  BASE_URL: import.meta.env.VITE_API_URL || 'https://ziki-backend.onrender.com',
  
  // Endpoints
  ENDPOINTS: {
    RUN: '/api/run',
    HEALTH: '/health'
  },
  
  // Timeout in milliseconds
  TIMEOUT: 30000
};

// Helper to check if backend is configured
export const isBackendConfigured = (): boolean => {
  const url = API_CONFIG.BASE_URL;
  // Consider configured if it's a real URL (not placeholder)
  return url.startsWith('https://') && !url.includes('your-backend');
};
