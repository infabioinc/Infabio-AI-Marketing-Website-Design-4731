import { apiClient } from './api';

class IntegrationService {
  // Google Ads Integration
  async connectGoogleAds(authCode) {
    return apiClient.post('/integrations/google-ads/connect', { authCode });
  }

  async getGoogleAdsAccounts() {
    return apiClient.get('/integrations/google-ads/accounts');
  }

  async syncGoogleAdsCampaigns(accountId) {
    return apiClient.post(`/integrations/google-ads/sync/${accountId}`);
  }

  async getGoogleAdsPerformance(accountId, params = {}) {
    return apiClient.get(`/integrations/google-ads/performance/${accountId}`, params);
  }

  // Facebook/Meta Integration
  async connectFacebook(accessToken) {
    return apiClient.post('/integrations/facebook/connect', { accessToken });
  }

  async getFacebookAdAccounts() {
    return apiClient.get('/integrations/facebook/ad-accounts');
  }

  async syncFacebookCampaigns(adAccountId) {
    return apiClient.post(`/integrations/facebook/sync/${adAccountId}`);
  }

  async getFacebookInsights(adAccountId, params = {}) {
    return apiClient.get(`/integrations/facebook/insights/${adAccountId}`, params);
  }

  // LinkedIn Integration
  async connectLinkedIn(authCode) {
    return apiClient.post('/integrations/linkedin/connect', { authCode });
  }

  async getLinkedInAdAccounts() {
    return apiClient.get('/integrations/linkedin/ad-accounts');
  }

  async syncLinkedInCampaigns(adAccountId) {
    return apiClient.post(`/integrations/linkedin/sync/${adAccountId}`);
  }

  // Google Analytics Integration
  async connectGoogleAnalytics(authCode) {
    return apiClient.post('/integrations/google-analytics/connect', { authCode });
  }

  async getGoogleAnalyticsProperties() {
    return apiClient.get('/integrations/google-analytics/properties');
  }

  async getGoogleAnalyticsData(propertyId, params = {}) {
    return apiClient.get(`/integrations/google-analytics/data/${propertyId}`, params);
  }

  // HubSpot Integration
  async connectHubSpot(apiKey) {
    return apiClient.post('/integrations/hubspot/connect', { apiKey });
  }

  async syncHubSpotContacts() {
    return apiClient.post('/integrations/hubspot/sync/contacts');
  }

  async getHubSpotDeals(params = {}) {
    return apiClient.get('/integrations/hubspot/deals', params);
  }

  // Salesforce Integration
  async connectSalesforce(credentials) {
    return apiClient.post('/integrations/salesforce/connect', credentials);
  }

  async syncSalesforceLeads() {
    return apiClient.post('/integrations/salesforce/sync/leads');
  }

  async getSalesforceOpportunities(params = {}) {
    return apiClient.get('/integrations/salesforce/opportunities', params);
  }

  // Shopify Integration
  async connectShopify(shopDomain, accessToken) {
    return apiClient.post('/integrations/shopify/connect', {
      shopDomain,
      accessToken,
    });
  }

  async syncShopifyProducts() {
    return apiClient.post('/integrations/shopify/sync/products');
  }

  async getShopifyOrders(params = {}) {
    return apiClient.get('/integrations/shopify/orders', params);
  }

  // Zapier Integration
  async createZapierWebhook(triggerConfig) {
    return apiClient.post('/integrations/zapier/webhook', triggerConfig);
  }

  async getZapierIntegrations() {
    return apiClient.get('/integrations/zapier/integrations');
  }

  // General Integration Management
  async getConnectedIntegrations() {
    return apiClient.get('/integrations/connected');
  }

  async disconnectIntegration(integrationId) {
    return apiClient.delete(`/integrations/${integrationId}/disconnect`);
  }

  async getIntegrationStatus(integrationId) {
    return apiClient.get(`/integrations/${integrationId}/status`);
  }

  async refreshIntegrationToken(integrationId) {
    return apiClient.post(`/integrations/${integrationId}/refresh-token`);
  }

  async testIntegrationConnection(integrationId) {
    return apiClient.post(`/integrations/${integrationId}/test`);
  }
}

export const integrationService = new IntegrationService();