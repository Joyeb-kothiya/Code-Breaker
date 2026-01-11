const MAX_CODE_LENGTH = 50000; // 50KB max code size
const MAX_INPUT_LENGTH = 10000; // 10KB max input size
const SUPPORTED_LANGUAGES = ['c', 'cpp'];

const validateRunRequest = (req, res, next) => {
  const { language, code, input } = req.body;

  // Check required fields
  if (!language) {
    return res.status(400).json({
      output: '',
      error: 'Language is required',
      cpuTime: '',
      memory: ''
    });
  }

  if (!code || typeof code !== 'string') {
    return res.status(400).json({
      output: '',
      error: 'Code is required and must be a string',
      cpuTime: '',
      memory: ''
    });
  }

  // Validate language
  if (!SUPPORTED_LANGUAGES.includes(language.toLowerCase())) {
    return res.status(400).json({
      output: '',
      error: `Unsupported language. Supported: ${SUPPORTED_LANGUAGES.join(', ')}`,
      cpuTime: '',
      memory: ''
    });
  }

  // Validate code length
  if (code.length > MAX_CODE_LENGTH) {
    return res.status(400).json({
      output: '',
      error: `Code exceeds maximum length of ${MAX_CODE_LENGTH} characters`,
      cpuTime: '',
      memory: ''
    });
  }

  // Validate input length
  if (input && input.length > MAX_INPUT_LENGTH) {
    return res.status(400).json({
      output: '',
      error: `Input exceeds maximum length of ${MAX_INPUT_LENGTH} characters`,
      cpuTime: '',
      memory: ''
    });
  }

  // Normalize language to lowercase
  req.body.language = language.toLowerCase();
  req.body.input = input || '';

  next();
};

module.exports = { validateRunRequest };
