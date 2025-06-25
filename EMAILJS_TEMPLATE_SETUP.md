# EmailJS Template Setup Guide

## ✅ **FIXED**: Template ID Issue

**Problem**: `template_contact_form` doesn't exist  
**Solution**: Now using only your existing template `template_zdjs93p` for all emails

## Your EmailJS Template Configuration

### Template: `template_zdjs93p`
**Service ID**: `service_gxfnxxq`  
**Template ID**: `template_zdjs93p` ✅ (Your existing template)  
**Public Key**: `i0odoiRTxLT63bPAf`

## Template Variables Your Template Should Include

Your template `template_zdjs93p` will receive these variables for both contact forms and detailed lead forms:

### Core Variables
```
{{to_email}} - hello@infabio.com
{{from_name}} - Contact person's name
{{from_email}} - Contact person's email  
{{subject}} - Email subject line
{{submission_date}} - When submitted
{{formatted_content}} - Main email content (formatted text)
```

### Business Information
```
{{business_name}} - Company name
{{industry}} - Industry type
{{business_size}} - Company size
{{current_revenue}} - Annual revenue
```

### Marketing Information
```
{{marketing_budget}} - Monthly marketing budget
{{current_marketing}} - Current marketing channels
{{biggest_challenges}} - Marketing challenges
```

### Goals and Contact
```
{{primary_goals}} - Business goals
{{timeframe}} - Expected timeframe
{{phone}} - Phone number
{{preferred_contact}} - Contact preference
```

### AI Analysis Results
```
{{recommended_services}} - AI recommendations
{{primary_service}} - Top recommended service
{{urgency_level}} - Priority level
{{estimated_budget}} - Budget suggestions
{{custom_recommendations}} - Personalized advice
```

## How It Works Now

### Contact Form (Simple)
- Uses your template `template_zdjs93p`
- Fills business fields with "Not specified"
- Main content in `{{formatted_content}}`
- Subject: "Contact Form: [Name] - [Company]"

### Get Started Form (Detailed)
- Uses your template `template_zdjs93p`
- Fills ALL template variables with real data
- Complete business analysis in `{{formatted_content}}`
- Subject: "New Lead: [Business] - [Contact]"

## Template Content Suggestion

Your template should focus on the `{{formatted_content}}` variable, which contains the complete formatted message. Here's a simple template structure:

```
Subject: {{subject}}

From: {{from_name}} <{{from_email}}>
To: {{to_email}}
Date: {{submission_date}}

{{formatted_content}}

---
Business: {{business_name}}
Industry: {{industry}}
Recommended Service: {{primary_service}}
Urgency: {{urgency_level}}
```

## ✅ Status: READY

- ✅ Single template for all emails
- ✅ No missing template errors
- ✅ Both forms use `template_zdjs93p`
- ✅ All data properly formatted

Your email integration should now work perfectly with your existing template!