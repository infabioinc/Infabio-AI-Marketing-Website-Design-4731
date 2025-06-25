import { apiClient } from './api';

class ClientService {
  async getClients(params = {}) {
    return apiClient.get('/clients', params);
  }

  async getClient(clientId) {
    return apiClient.get(`/clients/${clientId}`);
  }

  async createClient(clientData) {
    return apiClient.post('/clients', clientData);
  }

  async updateClient(clientId, clientData) {
    return apiClient.put(`/clients/${clientId}`, clientData);
  }

  async deleteClient(clientId) {
    return apiClient.delete(`/clients/${clientId}`);
  }

  async getClientCampaigns(clientId, params = {}) {
    return apiClient.get(`/clients/${clientId}/campaigns`, params);
  }

  async getClientAnalytics(clientId, dateRange = {}) {
    return apiClient.get(`/clients/${clientId}/analytics`, dateRange);
  }

  async getClientReports(clientId, params = {}) {
    return apiClient.get(`/clients/${clientId}/reports`, params);
  }

  async generateClientReport(clientId, reportConfig) {
    return apiClient.post(`/clients/${clientId}/reports/generate`, reportConfig);
  }

  async getClientBilling(clientId, params = {}) {
    return apiClient.get(`/clients/${clientId}/billing`, params);
  }

  async updateClientSettings(clientId, settings) {
    return apiClient.patch(`/clients/${clientId}/settings`, settings);
  }

  async getClientTeam(clientId) {
    return apiClient.get(`/clients/${clientId}/team`);
  }

  async addClientTeamMember(clientId, memberData) {
    return apiClient.post(`/clients/${clientId}/team`, memberData);
  }

  async removeClientTeamMember(clientId, memberId) {
    return apiClient.delete(`/clients/${clientId}/team/${memberId}`);
  }
}

export const clientService = new ClientService();