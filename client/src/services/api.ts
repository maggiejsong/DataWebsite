import axios from 'axios';
import { Survey, SurveyResponse, RepositoryStats, ApiResponse } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const healthCheck = async (): Promise<ApiResponse<any>> => {
  try {
    const response = await api.get('/health');
    return { data: response.data };
  } catch (error: any) {
    return { error: 'Health check failed', details: error.message };
  }
};

export const getSurveys = async (): Promise<ApiResponse<Survey[]>> => {
  try {
    const response = await api.get<SurveyResponse>('/surveys');
    return { data: response.data.result?.elements || [] };
  } catch (error: any) {
    return { 
      error: 'Failed to fetch surveys', 
      details: error.response?.data?.details || error.message 
    };
  }
};

export const getSurveyDetails = async (surveyId: string): Promise<ApiResponse<Survey>> => {
  try {
    const response = await api.get(`/surveys/${surveyId}`);
    return { data: response.data.result };
  } catch (error: any) {
    return { 
      error: 'Failed to fetch survey details', 
      details: error.response?.data?.details || error.message 
    };
  }
};

export const getSurveyResponses = async (surveyId: string): Promise<ApiResponse<any>> => {
  try {
    const response = await api.get(`/surveys/${surveyId}/responses`);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: 'Failed to fetch survey responses', 
      details: error.response?.data?.details || error.message 
    };
  }
};

export const getRepositoryStats = async (): Promise<ApiResponse<RepositoryStats>> => {
  try {
    const response = await api.get<RepositoryStats>('/repository/stats');
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: 'Failed to fetch repository stats', 
      details: error.response?.data?.details || error.message 
    };
  }
};

export const exportSurvey = async (surveyId: string, format: string = 'json'): Promise<ApiResponse<any>> => {
  try {
    const response = await api.post(`/surveys/${surveyId}/export`, { format });
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: 'Failed to export survey', 
      details: error.response?.data?.details || error.message 
    };
  }
};