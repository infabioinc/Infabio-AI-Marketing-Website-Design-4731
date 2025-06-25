import { apiClient } from './api';

class AnalyticsService {
  async getDashboardData(dateRange = {}) {
    return apiClient.get('/analytics/dashboard', dateRange);
  }

  async getPerformanceMetrics(params = {}) {
    return apiClient.get('/analytics/performance', params);
  }

  async getAudienceInsights(params = {}) {
    return apiClient.get('/analytics/audience', params);
  }

  async getConversionFunnel(params = {}) {
    return apiClient.get('/analytics/funnel', params);
  }

  async getAttributionData(params = {}) {
    return apiClient.get('/analytics/attribution', params);
  }

  async getCohortAnalysis(params = {}) {
    return apiClient.get('/analytics/cohort', params);
  }

  async getCustomReport(reportConfig) {
    return apiClient.post('/analytics/custom-report', reportConfig);
  }

  async exportData(exportConfig) {
    return apiClient.post('/analytics/export', exportConfig);
  }

  async getRealTimeMetrics() {
    return apiClient.get('/analytics/realtime');
  }

  async getPredictiveAnalytics(modelType, params = {}) {
    return apiClient.get(`/analytics/predictive/${modelType}`, params);
  }

  async getAnomalyDetection(params = {}) {
    return apiClient.get('/analytics/anomalies', params);
  }

  async getCompetitorAnalysis(params = {}) {
    return apiClient.get('/analytics/competitors', params);
  }

  async getMarketTrends(params = {}) {
    return apiClient.get('/analytics/market-trends', params);
  }

  async getCustomerLifetimeValue(params = {}) {
    return apiClient.get('/analytics/clv', params);
  }

  async getChurnPrediction(params = {}) {
    return apiClient.get('/analytics/churn-prediction', params);
  }

  async getRecommendationEngine(userId, params = {}) {
    return apiClient.get(`/analytics/recommendations/${userId}`, params);
  }
}

export const analyticsService = new AnalyticsService();