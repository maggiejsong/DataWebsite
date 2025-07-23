const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Qualtrics API configuration
const QUALTRICS_API_TOKEN = process.env.QUALTRICS_API_TOKEN;
const QUALTRICS_BASE_URL = process.env.QUALTRICS_BASE_URL || 'https://co1.qualtrics.com';

// Helper function to make Qualtrics API requests
const makeQualtricsRequest = async (endpoint, method = 'GET', data = null) => {
  try {
    const config = {
      method,
      url: `${QUALTRICS_BASE_URL}/API/v3/${endpoint}`,
      headers: {
        'X-API-TOKEN': QUALTRICS_API_TOKEN,
        'Content-Type': 'application/json'
      }
    };

    if (data) {
      config.data = data;
    }

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('Qualtrics API Error:', error.response?.data || error.message);
    throw error;
  }
};

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Research Visualization API is running' });
});

// Get all surveys
app.get('/api/surveys', async (req, res) => {
  try {
    const response = await makeQualtricsRequest('surveys');
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch surveys', details: error.message });
  }
});

// Get specific survey details
app.get('/api/surveys/:surveyId', async (req, res) => {
  try {
    const { surveyId } = req.params;
    const response = await makeQualtricsRequest(`surveys/${surveyId}`);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch survey details', details: error.message });
  }
});

// Get survey responses
app.get('/api/surveys/:surveyId/responses', async (req, res) => {
  try {
    const { surveyId } = req.params;
    const { limit = 100, skipToken } = req.query;
    
    let endpoint = `surveys/${surveyId}/export-responses`;
    if (skipToken) {
      endpoint += `?skipToken=${skipToken}`;
    }
    
    const response = await makeQualtricsRequest(endpoint);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch survey responses', details: error.message });
  }
});

// Export survey data (for creating download files)
app.post('/api/surveys/:surveyId/export', async (req, res) => {
  try {
    const { surveyId } = req.params;
    const { format = 'json' } = req.body;
    
    const exportRequest = {
      surveyId: surveyId,
      format: format
    };
    
    const response = await makeQualtricsRequest(
      `surveys/${surveyId}/export-responses`, 
      'POST', 
      exportRequest
    );
    
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create export', details: error.message });
  }
});

// Get export progress
app.get('/api/exports/:progressId', async (req, res) => {
  try {
    const { progressId } = req.params;
    const response = await makeQualtricsRequest(`surveys/export-responses/${progressId}`);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to check export progress', details: error.message });
  }
});

// Download export file
app.get('/api/exports/:progressId/file', async (req, res) => {
  try {
    const { progressId } = req.params;
    const response = await makeQualtricsRequest(`surveys/export-responses/${progressId}/file`);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to download export file', details: error.message });
  }
});

// Mock research repository data endpoint (you can replace this with actual repo data)
app.get('/api/repository/stats', (req, res) => {
  // This is mock data - replace with actual repository statistics
  const mockStats = {
    totalProjects: 12,
    activeProjects: 8,
    totalParticipants: 245,
    completedSurveys: 156,
    monthlyData: [
      { month: 'Jan', projects: 2, participants: 15 },
      { month: 'Feb', projects: 3, participants: 22 },
      { month: 'Mar', projects: 1, participants: 18 },
      { month: 'Apr', projects: 4, participants: 35 },
      { month: 'May', projects: 2, participants: 28 },
      { month: 'Jun', projects: 0, participants: 12 }
    ],
    projectCategories: [
      { category: 'User Experience', count: 5 },
      { category: 'Market Research', count: 3 },
      { category: 'Customer Satisfaction', count: 2 },
      { category: 'Product Testing', count: 2 }
    ]
  };
  
  res.json(mockStats);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;