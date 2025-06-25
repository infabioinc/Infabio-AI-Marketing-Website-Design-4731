# Infabio - AI Marketing Agency

Full-service 360° AI & Digital Marketing solutions since 2005. Transform your business with cutting-edge AI marketing strategies.

## Features

- **AI Strategy & Consulting** - Custom AI marketing strategies
- **Programmatic Advertising** - AI-powered ad optimization
- **SEO & Content Intelligence** - AI-driven content optimization
- **Social Media AI** - Automated social media management
- **Predictive Analytics** - Data-driven insights and forecasting
- **Email Integration** - Automatic form submission emails
- **Help Hub** - AI-powered customer support

## Email Integration Setup ✅ CONFIGURED

### EmailJS Configuration 
- **Service ID**: `service_gxfnxxq`
- **Public Key**: `i0odoiRTxLT63bPAf`
- **Template ID**: `template_zdjs93p` (Your existing template)

### Email Variables Sent to Your Template

```
// Business Information
{{business_name}} - Company name
{{industry}} - Industry type
{{business_size}} - Company size
{{current_revenue}} - Annual revenue

// Marketing Information
{{marketing_budget}} - Monthly marketing budget
{{current_marketing}} - Current marketing channels
{{biggest_challenges}} - Marketing challenges

// Goals and Objectives
{{primary_goals}} - Business goals
{{timeframe}} - Expected timeframe
{{success_metrics}} - Success metrics
{{priority_services}} - Preferred services
{{previous_experience}} - Previous experience

// Contact Information
{{from_name}} - Contact person's name
{{from_email}} - Contact email
{{phone}} - Phone number
{{preferred_contact}} - Contact preference

// AI Analysis Results
{{recommended_services}} - AI recommendations
{{primary_service}} - Top recommended service
{{urgency_level}} - Priority level
{{estimated_budget}} - Budget suggestions
{{custom_recommendations}} - Personalized advice

// Metadata
{{submission_date}} - Submission timestamp
{{formatted_content}} - Complete formatted content
```

## How It Works

### Form Data Email Flow
1. User completes the comprehensive "Get Started" form
2. AI analyzes their business needs and generates recommendations
3. Complete data package automatically emails to `hello@infabio.com` using your template `template_zdjs93p`
4. User receives confirmation of successful submission
5. Backup stored locally if email fails

### What Gets Emailed
- **Complete Business Profile**: Industry, size, revenue, goals
- **Marketing Analysis**: Current situation, budget, challenges
- **Service Preferences**: Priority services, previous experience
- **AI-Generated Insights**: Recommended services, urgency assessment
- **Custom Recommendations**: Personalized strategic advice
- **Contact Information**: Complete details for follow-up

### Backup System
- Failed submissions stored locally
- Automatic retry mechanism
- No data loss guarantee

## Deployment

```bash
npm install
npm run build
```

## Testing

1. Fill out the "Get Started" form
2. Check `hello@infabio.com` for the email
3. Verify all business data and AI analysis included

## Technologies

- React 18 + Vite
- Tailwind CSS + Framer Motion
- EmailJS (Template: `template_zdjs93p`)
- Quest Labs SDK
- AI Analysis Engine

## Contact

- Email: hello@infabio.com
- Phone: +1 (555) 123-4567
- Website: https://infabio.com

---

**Status**: ✅ Ready to capture leads with AI analysis and email delivery to hello@infabio.com