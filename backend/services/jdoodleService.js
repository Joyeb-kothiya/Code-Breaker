const axios = require('axios');

const JDOODLE_API_URL = 'https://api.jdoodle.com/v1/execute';

// Language configuration for JDoodle
const languageConfig = {
  c: {
    language: 'c',
    versionIndex: '5' // GCC 11.1.0
  },
  cpp: {
    language: 'cpp17',
    versionIndex: '1' // GCC 11.1.0
  }
};

const executeCode = async (language, code, input = '') => {
  const clientId = process.env.JDOODLE_CLIENT_ID;
  const clientSecret = process.env.JDOODLE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('JDoodle API credentials not configured');
  }

  const config = languageConfig[language];
  
  if (!config) {
    throw new Error(`Unsupported language: ${language}`);
  }

  const payload = {
    clientId,
    clientSecret,
    script: code,
    stdin: input,
    language: config.language,
    versionIndex: config.versionIndex
  };

  try {
    const response = await axios.post(JDOODLE_API_URL, payload, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 30000 // 30 second timeout
    });

    const { output, statusCode, memory, cpuTime } = response.data;

    // Check for compilation/runtime errors
    const hasError = statusCode !== 200 || (output && output.includes('error:'));
    
    return {
      output: hasError ? '' : (output || ''),
      error: hasError ? (output || 'Compilation failed') : '',
      cpuTime: cpuTime ? `${cpuTime}s` : 'N/A',
      memory: memory ? `${memory} KB` : 'N/A'
    };
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      throw new Error('Compilation timed out. Please try again.');
    }
    throw error;
  }
};

module.exports = { executeCode };
