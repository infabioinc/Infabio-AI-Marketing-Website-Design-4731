// Simplified EmailJS service without external dependencies
class EmailService {
  constructor() {
    this.isInitialized = false;
    this.initEmailJS();
  }

  async initEmailJS() {
    try {
      // Check if EmailJS is available globally
      if (typeof window !== 'undefined' && window.emailjs) {
        window.emailjs.init("i0odoiRTxLT63bPAf");
        this.isInitialized = true;
        console.log('✅ EmailJS initialized successfully');
        return;
      }
      
      console.warn('EmailJS not available - using fallback');
      this.isInitialized = false;
    } catch (error) {
      console.error('EmailJS initialization failed:', error);
      this.isInitialized = false;
    }
  }

  async sendContactForm(contactData) {
    try {
      if (!this.isInitialized) {
        throw new Error('EmailJS not initialized');
      }

      if (!window.emailjs?.send) {
        throw new Error('EmailJS send function not available');
      }

      const templateParams = {
        to_email: 'hello@infabio.com',
        from_name: contactData.name,
        from_email: contactData.email,
        subject: `Contact Form: ${contactData.name}`,
        message: contactData.message,
        company: contactData.company || 'Not provided',
        submission_date: new Date().toLocaleString()
      };

      const response = await window.emailjs.send(
        'service_gxfnxxq',
        'template_zdjs93p',
        templateParams
      );

      console.log('✅ Email sent successfully:', response);
      return {
        success: true,
        message: 'Email sent successfully!'
      };

    } catch (error) {
      console.error('❌ Email sending failed:', error);
      
      // Store locally as backup
      this.storeContactLocally(contactData);
      
      return {
        success: false,
        error: error.message || 'Failed to send email',
        stored_locally: true
      };
    }
  }

  async sendFormData(formData, analysis) {
    try {
      if (!this.isInitialized) {
        throw new Error('EmailJS not initialized');
      }

      const templateParams = {
        to_email: 'hello@infabio.com',
        from_name: formData.contactName,
        from_email: formData.email,
        subject: `New Lead: ${formData.businessName}`,
        business_name: formData.businessName,
        industry: formData.industry,
        contact_email: formData.email,
        phone: formData.phone || 'Not provided',
        primary_service: analysis.primaryService,
        urgency_level: analysis.urgencyLevel,
        formatted_content: this.formatFormData(formData, analysis),
        submission_date: new Date().toLocaleString()
      };

      const response = await window.emailjs.send(
        'service_gxfnxxq',
        'template_zdjs93p',
        templateParams
      );

      console.log('✅ Form data email sent successfully:', response);
      return {
        success: true,
        message: 'Form data sent successfully!'
      };

    } catch (error) {
      console.error('❌ Form data email failed:', error);
      
      // Store locally as backup
      this.storeFormDataLocally(formData, analysis);
      
      return {
        success: false,
        error: error.message || 'Failed to send form data',
        stored_locally: true
      };
    }
  }

  formatFormData(formData, analysis) {
    return `
BUSINESS ANALYSIS SUBMISSION
============================

Company: ${formData.businessName}
Industry: ${formData.industry}
Size: ${formData.businessSize}
Contact: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Marketing Budget: ${formData.marketingBudget}
Primary Goals: ${formData.primaryGoals.join(', ')}
Biggest Challenges: ${formData.biggestChallenges.join(', ')}
Priority Services: ${formData.priorityServices.join(', ')}

AI RECOMMENDATIONS:
- Primary Service: ${analysis.primaryService}
- Urgency Level: ${analysis.urgencyLevel}
- Recommended Services: ${analysis.recommendedServices.join(', ')}

Submitted: ${new Date().toLocaleString()}
    `;
  }

  storeContactLocally(contactData) {
    try {
      const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
      submissions.push({
        id: Date.now(),
        timestamp: new Date().toISOString(),
        data: contactData,
        type: 'contact'
      });
      localStorage.setItem('contact_submissions', JSON.stringify(submissions));
      console.log('📦 Contact data stored locally');
    } catch (error) {
      console.error('Failed to store contact data:', error);
    }
  }

  storeFormDataLocally(formData, analysis) {
    try {
      const submissions = JSON.parse(localStorage.getItem('form_submissions') || '[]');
      submissions.push({
        id: Date.now(),
        timestamp: new Date().toISOString(),
        formData,
        analysis,
        type: 'needs_analysis'
      });
      localStorage.setItem('form_submissions', JSON.stringify(submissions));
      console.log('📦 Form data stored locally');
    } catch (error) {
      console.error('Failed to store form data:', error);
    }
  }

  async testEmail() {
    const testData = {
      name: 'Test User',
      email: 'test@infabio.com',
      company: 'Test Company',
      message: 'Test email from Infabio website'
    };
    return await this.sendContactForm(testData);
  }

  getStatus() {
    return {
      initialized: this.isInitialized,
      hasEmailJS: !!(typeof window !== 'undefined' && window.emailjs),
      hasEmailJSSend: !!(typeof window !== 'undefined' && window.emailjs?.send)
    };
  }
}

export const emailService = new EmailService();

// Debug helpers
if (typeof window !== 'undefined') {
  window.emailService = emailService;
  window.checkEmailStatus = () => emailService.getStatus();
  window.testEmail = () => emailService.testEmail();
}