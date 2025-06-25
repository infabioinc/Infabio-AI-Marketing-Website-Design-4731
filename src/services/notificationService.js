import { apiClient } from './api';

class NotificationService {
  async getNotifications(params = {}) {
    return apiClient.get('/notifications', params);
  }

  async markAsRead(notificationId) {
    return apiClient.patch(`/notifications/${notificationId}/read`);
  }

  async markAllAsRead() {
    return apiClient.patch('/notifications/read-all');
  }

  async deleteNotification(notificationId) {
    return apiClient.delete(`/notifications/${notificationId}`);
  }

  async getNotificationSettings() {
    return apiClient.get('/notifications/settings');
  }

  async updateNotificationSettings(settings) {
    return apiClient.put('/notifications/settings', settings);
  }

  async subscribeToWebPush(subscription) {
    return apiClient.post('/notifications/web-push/subscribe', subscription);
  }

  async unsubscribeFromWebPush() {
    return apiClient.post('/notifications/web-push/unsubscribe');
  }

  async testNotification(type, data) {
    return apiClient.post('/notifications/test', { type, data });
  }

  async getUnreadCount() {
    return apiClient.get('/notifications/unread-count');
  }

  // Real-time notifications using WebSocket
  connectWebSocket() {
    const wsUrl = import.meta.env.VITE_WS_URL || 'wss://api.infabio.com/ws';
    const token = localStorage.getItem('auth_token');
    
    this.ws = new WebSocket(`${wsUrl}?token=${token}`);
    
    this.ws.onopen = () => {
      console.log('WebSocket connected');
    };
    
    this.ws.onmessage = (event) => {
      const notification = JSON.parse(event.data);
      this.handleRealTimeNotification(notification);
    };
    
    this.ws.onclose = () => {
      console.log('WebSocket disconnected');
      // Attempt to reconnect after 5 seconds
      setTimeout(() => this.connectWebSocket(), 5000);
    };
    
    this.ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }

  disconnectWebSocket() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  handleRealTimeNotification(notification) {
    // Dispatch custom event for components to listen to
    window.dispatchEvent(new CustomEvent('notification', {
      detail: notification
    }));

    // Show browser notification if permitted
    if (Notification.permission === 'granted') {
      new Notification(notification.title, {
        body: notification.message,
        icon: '/favicon.ico',
        tag: notification.id,
      });
    }
  }

  async requestNotificationPermission() {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }
    return false;
  }
}

export const notificationService = new NotificationService();