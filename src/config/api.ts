// API Configuration for Ziki Code Breaker
// Backend deployed on Render

export const API_CONFIG = {
  // Render backend URL (fallback)
  BASE_URL:
    import.meta.env.VITE_API_URL ||
    'https://code-breaker-backend.onrender.com',

  // API Endpoints
  ENDPOINTS: {
    RUN: '/api/compile',   // ✅ correct route
    HEALTH: '/health'
  },

  // Timeout in milliseconds
  TIMEOUT: 30000
};

// Helper to check if backend is configured
export const isBackendConfigured = (): boolean => {
  const url = API_CONFIG.BASE_URL;
  return url.startsWith('https://');
};