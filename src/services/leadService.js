import { apiClient } from './api';

class LeadService {
  async getLeads(params = {}) {
    return apiClient.get('/leads', params);
  }

  async getLead(leadId) {
    return apiClient.get(`/leads/${leadId}`);
  }

  async createLead(leadData) {
    return apiClient.post('/leads', leadData);
  }

  async updateLead(leadId, leadData) {
    return apiClient.put(`/leads/${leadId}`, leadData);
  }

  async deleteLead(leadId) {
    return apiClient.delete(`/leads/${leadId}`);
  }

  async scoreLeads(leadIds) {
    return apiClient.post('/leads/score', { leadIds });
  }

  async getLeadScore(leadId) {
    return apiClient.get(`/leads/${leadId}/score`);
  }

  async qualifyLead(leadId, qualificationData) {
    return apiClient.post(`/leads/${leadId}/qualify`, qualificationData);
  }

  async assignLead(leadId, assigneeId) {
    return apiClient.post(`/leads/${leadId}/assign`, { assigneeId });
  }

  async getLeadActivity(leadId, params = {}) {
    return apiClient.get(`/leads/${leadId}/activity`, params);
  }

  async addLeadNote(leadId, note) {
    return apiClient.post(`/leads/${leadId}/notes`, { note });
  }

  async getLeadNotes(leadId) {
    return apiClient.get(`/leads/${leadId}/notes`);
  }

  async convertLead(leadId, conversionData) {
    return apiClient.post(`/leads/${leadId}/convert`, conversionData);
  }

  async getLeadFunnel(params = {}) {
    return apiClient.get('/leads/funnel', params);
  }

  async getLeadSources(params = {}) {
    return apiClient.get('/leads/sources', params);
  }

  async bulkUpdateLeads(leadIds, updateData) {
    return apiClient.post('/leads/bulk-update', {
      leadIds,
      updateData,
    });
  }

  async exportLeads(exportConfig) {
    return apiClient.post('/leads/export', exportConfig);
  }

  async importLeads(importData) {
    return apiClient.post('/leads/import', importData);
  }

  async getLeadPredictions(leadId) {
    return apiClient.get(`/leads/${leadId}/predictions`);
  }

  async getLeadRecommendations(leadId) {
    return apiClient.get(`/leads/${leadId}/recommendations`);
  }
}

export const leadService = new LeadService();