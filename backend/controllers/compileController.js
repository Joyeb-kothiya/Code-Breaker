const jdoodleService = require('../services/jdoodleService');

const runCode = async (req, res) => {
  try {
    const { language, code, input } = req.body;
    
    console.log(`📝 Compilation request: ${language}`);
    
    const result = await jdoodleService.executeCode(language, code, input);
    
    console.log(`✅ Compilation complete for ${language}`);
    
    res.json(result);
  } catch (error) {
    console.error('❌ Compilation error:', error.message);
    
    if (error.response) {
      // JDoodle API error
      return res.status(error.response.status || 500).json({
        output: '',
        error: error.response.data?.error || 'Compilation service error',
        cpuTime: '',
        memory: ''
      });
    }
    
    res.status(500).json({
      output: '',
      error: error.message || 'Internal server error',
      cpuTime: '',
      memory: ''
    });
  }
};

module.exports = { runCode };
