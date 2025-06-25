import { apiClient } from './api';

class CampaignService {
  async getCampaigns(params = {}) {
    return apiClient.get('/campaigns', params);
  }

  async getCampaign(campaignId) {
    return apiClient.get(`/campaigns/${campaignId}`);
  }

  async createCampaign(campaignData) {
    return apiClient.post('/campaigns', campaignData);
  }

  async updateCampaign(campaignId, campaignData) {
    return apiClient.put(`/campaigns/${campaignId}`, campaignData);
  }

  async deleteCampaign(campaignId) {
    return apiClient.delete(`/campaigns/${campaignId}`);
  }

  async pauseCampaign(campaignId) {
    return apiClient.post(`/campaigns/${campaignId}/pause`);
  }

  async resumeCampaign(campaignId) {
    return apiClient.post(`/campaigns/${campaignId}/resume`);
  }

  async getCampaignPerformance(campaignId, dateRange = {}) {
    return apiClient.get(`/campaigns/${campaignId}/performance`, dateRange);
  }

  async getCampaignAudiences(campaignId) {
    return apiClient.get(`/campaigns/${campaignId}/audiences`);
  }

  async updateCampaignAudiences(campaignId, audiences) {
    return apiClient.put(`/campaigns/${campaignId}/audiences`, { audiences });
  }

  async getCampaignCreatives(campaignId) {
    return apiClient.get(`/campaigns/${campaignId}/creatives`);
  }

  async addCampaignCreative(campaignId, creativeData) {
    return apiClient.post(`/campaigns/${campaignId}/creatives`, creativeData);
  }

  async updateCampaignCreative(campaignId, creativeId, creativeData) {
    return apiClient.put(`/campaigns/${campaignId}/creatives/${creativeId}`, creativeData);
  }

  async deleteCampaignCreative(campaignId, creativeId) {
    return apiClient.delete(`/campaigns/${campaignId}/creatives/${creativeId}`);
  }

  async optimizeCampaign(campaignId, optimizationConfig) {
    return apiClient.post(`/campaigns/${campaignId}/optimize`, optimizationConfig);
  }

  async getCampaignRecommendations(campaignId) {
    return apiClient.get(`/campaigns/${campaignId}/recommendations`);
  }

  async applyCampaignRecommendation(campaignId, recommendationId) {
    return apiClient.post(`/campaigns/${campaignId}/recommendations/${recommendationId}/apply`);
  }
}

export const campaignService = new CampaignService();