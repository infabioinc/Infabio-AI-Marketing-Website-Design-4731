import { apiClient } from './api';

class AIService {
  async generateContent(contentConfig) {
    return apiClient.post('/ai/content/generate', contentConfig);
  }

  async optimizeContent(contentId, optimizationParams) {
    return apiClient.post(`/ai/content/${contentId}/optimize`, optimizationParams);
  }

  async analyzeContent(content, analysisType) {
    return apiClient.post('/ai/content/analyze', {
      content,
      analysisType,
    });
  }

  async generateAudiences(audienceConfig) {
    return apiClient.post('/ai/audiences/generate', audienceConfig);
  }

  async optimizeAudiences(campaignId, optimizationConfig) {
    return apiClient.post(`/ai/audiences/optimize/${campaignId}`, optimizationConfig);
  }

  async predictPerformance(campaignData) {
    return apiClient.post('/ai/predict/performance', campaignData);
  }

  async optimizeBidding(campaignId, biddingStrategy) {
    return apiClient.post(`/ai/bidding/optimize/${campaignId}`, biddingStrategy);
  }

  async generateInsights(dataConfig) {
    return apiClient.post('/ai/insights/generate', dataConfig);
  }

  async getRecommendations(context, params = {}) {
    return apiClient.post('/ai/recommendations', {
      context,
      ...params,
    });
  }

  async analyzeCustomerJourney(customerId, analysisConfig) {
    return apiClient.post(`/ai/customer-journey/${customerId}/analyze`, analysisConfig);
  }

  async generatePersonalization(userId, context) {
    return apiClient.post('/ai/personalization/generate', {
      userId,
      context,
    });
  }

  async optimizeCreatives(campaignId, creativeConfig) {
    return apiClient.post(`/ai/creatives/optimize/${campaignId}`, creativeConfig);
  }

  async generateCreatives(creativeConfig) {
    return apiClient.post('/ai/creatives/generate', creativeConfig);
  }

  async analyzeSentiment(text, context) {
    return apiClient.post('/ai/sentiment/analyze', {
      text,
      context,
    });
  }

  async detectAnomalies(dataConfig) {
    return apiClient.post('/ai/anomalies/detect', dataConfig);
  }

  async forecastTrends(forecastConfig) {
    return apiClient.post('/ai/forecast', forecastConfig);
  }

  async optimizeStrategy(strategyConfig) {
    return apiClient.post('/ai/strategy/optimize', strategyConfig);
  }
}

export const aiService = new AIService();