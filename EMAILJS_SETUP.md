# EmailJS Setup Guide for Infabio

## Your Current Configuration
- **Service ID**: `service_gxfnxxq`
- **Public Key**: `i0odoiRTxLT63bPAf`
- **Main Template ID**: `template_zdjs93p` ✅

## Template Configuration

### Your Existing Template: `template_zdjs93p`

**Template ID**: `template_zdjs93p` (Your existing template)

**Subject Line**:
```
New Lead: {{business_name}} - {{from_name}}
```

**Required Template Variables**:
The system will send these variables to your template:

```
{{to_email}} - hello@infabio.com
{{from_name}} - Contact person's name
{{from_email}} - Contact person's email
{{subject}} - Email subject line

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
{{success_metrics}} - Success measurement metrics
{{priority_services}} - Preferred services
{{previous_experience}} - Previous AI/marketing experience

// Contact Information
{{phone}} - Phone number
{{preferred_contact}} - Preferred contact method

// AI Analysis Results
{{recommended_services}} - AI-recommended services
{{primary_service}} - Top recommended service
{{urgency_level}} - Priority level (high/medium/low)
{{estimated_budget}} - Suggested budget range
{{custom_recommendations}} - Personalized recommendations

// Metadata
{{submission_date}} - Form submission timestamp
{{formatted_content}} - Complete formatted email content
```

### Optional: Contact Form Template (`template_contact_form`)

If you want to create a separate template for contact form submissions, use these variables:

```
{{from_name}} - Contact name
{{from_email}} - Contact email
{{company}} - Company name
{{message}} - Contact message
{{submission_date}} - Submission timestamp
{{formatted_content}} - Formatted contact form content
```

## Email Delivery

All form submissions will be sent to: **hello@infabio.com**

### What Gets Sent:
- **Complete Business Profile**: Name, industry, size, revenue
- **Marketing Situation**: Current budget, channels, challenges
- **Business Goals**: Objectives, timeframe, success metrics
- **Service Preferences**: Priority services, previous experience
- **AI Analysis**: Recommended services, urgency level, custom advice
- **Contact Information**: Name, email, phone, preferences
- **Submission Details**: Date, time, formatted summary

## Testing Your Setup

1. **Form Submission Test**:
   - Go to your website
   - Click "Get Started"
   - Fill out the complete form
   - Submit and check hello@infabio.com

2. **Check EmailJS Dashboard**:
   - Verify template `template_zdjs93p` exists
   - Check service status
   - Review recent email logs

3. **Verify Email Content**:
   - All business information included
   - AI analysis results present
   - Professional formatting
   - Complete contact details

## Current Status ✅

- **Service**: `service_gxfnxxq` - Ready
- **Public Key**: `i0odoiRTxLT63bPAf` - Configured  
- **Template**: `template_zdjs93p` - Using your existing template
- **Destination**: `hello@infabio.com` - Configured
- **Backup System**: Local storage fallback - Active

Your EmailJS integration is now configured to use your existing template `template_zdjs93p`. The system will send comprehensive lead data with AI analysis to hello@infabio.com.