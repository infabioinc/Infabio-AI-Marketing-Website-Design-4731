import { apiClient } from './api';

class ReportService {
  async getReports(params = {}) {
    return apiClient.get('/reports', params);
  }

  async getReport(reportId) {
    return apiClient.get(`/reports/${reportId}`);
  }

  async createReport(reportConfig) {
    return apiClient.post('/reports', reportConfig);
  }

  async updateReport(reportId, reportConfig) {
    return apiClient.put(`/reports/${reportId}`, reportConfig);
  }

  async deleteReport(reportId) {
    return apiClient.delete(`/reports/${reportId}`);
  }

  async generateReport(reportId, params = {}) {
    return apiClient.post(`/reports/${reportId}/generate`, params);
  }

  async scheduleReport(reportId, scheduleConfig) {
    return apiClient.post(`/reports/${reportId}/schedule`, scheduleConfig);
  }

  async getScheduledReports() {
    return apiClient.get('/reports/scheduled');
  }

  async cancelScheduledReport(scheduleId) {
    return apiClient.delete(`/reports/scheduled/${scheduleId}`);
  }

  async exportReport(reportId, format = 'pdf', params = {}) {
    return apiClient.post(`/reports/${reportId}/export`, {
      format,
      ...params,
    });
  }

  async shareReport(reportId, shareConfig) {
    return apiClient.post(`/reports/${reportId}/share`, shareConfig);
  }

  async getSharedReports() {
    return apiClient.get('/reports/shared');
  }

  async getReportTemplates() {
    return apiClient.get('/reports/templates');
  }

  async createReportTemplate(templateConfig) {
    return apiClient.post('/reports/templates', templateConfig);
  }

  async getReportHistory(reportId, params = {}) {
    return apiClient.get(`/reports/${reportId}/history`, params);
  }

  async duplicateReport(reportId, newName) {
    return apiClient.post(`/reports/${reportId}/duplicate`, { name: newName });
  }

  async getReportInsights(reportId) {
    return apiClient.get(`/reports/${reportId}/insights`);
  }

  async getReportComments(reportId) {
    return apiClient.get(`/reports/${reportId}/comments`);
  }

  async addReportComment(reportId, comment) {
    return apiClient.post(`/reports/${reportId}/comments`, { comment });
  }

  async getReportCollaborators(reportId) {
    return apiClient.get(`/reports/${reportId}/collaborators`);
  }

  async addReportCollaborator(reportId, collaboratorData) {
    return apiClient.post(`/reports/${reportId}/collaborators`, collaboratorData);
  }

  async removeReportCollaborator(reportId, collaboratorId) {
    return apiClient.delete(`/reports/${reportId}/collaborators/${collaboratorId}`);
  }
}

export const reportService = new ReportService();