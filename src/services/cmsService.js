import { supabase, isSupabaseConfigured } from '../lib/supabase'

class CMSService {
  // Blog Posts
  async getBlogPosts(limit = 10, offset = 0) {
    if (!isSupabaseConfigured) {
      return this.getFallbackBlogPosts()
    }

    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1)

      if (error) throw error
      return { success: true, data }
    } catch (error) {
      console.error('Error fetching blog posts:', error)
      return { success: false, error: error.message, data: this.getFallbackBlogPosts().data }
    }
  }

  async getBlogPost(slug) {
    if (!isSupabaseConfigured) {
      return this.getFallbackBlogPost(slug)
    }

    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single()

      if (error) throw error
      return { success: true, data }
    } catch (error) {
      console.error('Error fetching blog post:', error)
      return { success: false, error: error.message }
    }
  }

  // Case Studies
  async getCaseStudies() {
    if (!isSupabaseConfigured) {
      return this.getFallbackCaseStudies()
    }

    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (error) throw error
      return { success: true, data }
    } catch (error) {
      console.error('Error fetching case studies:', error)
      return { success: false, error: error.message, data: this.getFallbackCaseStudies().data }
    }
  }

  // Team Members
  async getTeamMembers() {
    if (!isSupabaseConfigured) {
      return this.getFallbackTeamMembers()
    }

    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .eq('active', true)
        .order('order_index', { ascending: true })

      if (error) throw error
      return { success: true, data }
    } catch (error) {
      console.error('Error fetching team members:', error)
      return { success: false, error: error.message, data: this.getFallbackTeamMembers().data }
    }
  }

  // Services
  async getServices() {
    if (!isSupabaseConfigured) {
      return this.getFallbackServices()
    }

    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('active', true)
        .order('order_index', { ascending: true })

      if (error) throw error
      return { success: true, data }
    } catch (error) {
      console.error('Error fetching services:', error)
      return { success: false, error: error.message, data: this.getFallbackServices().data }
    }
  }

  // Testimonials
  async getTestimonials() {
    if (!isSupabaseConfigured) {
      return this.getFallbackTestimonials()
    }

    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false })

      if (error) throw error
      return { success: true, data }
    } catch (error) {
      console.error('Error fetching testimonials:', error)
      return { success: false, error: error.message, data: this.getFallbackTestimonials().data }
    }
  }

  // Settings
  async getSiteSettings() {
    if (!isSupabaseConfigured) {
      return this.getFallbackSettings()
    }

    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .single()

      if (error) throw error
      return { success: true, data }
    } catch (error) {
      console.error('Error fetching site settings:', error)
      return { success: false, error: error.message, data: this.getFallbackSettings().data }
    }
  }

  // Contact Form Submissions
  async createContactSubmission(formData) {
    if (!isSupabaseConfigured) {
      console.warn('Supabase not configured - storing locally only')
      return { success: true, data: { id: Date.now() } }
    }

    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          source: 'website_contact_form',
          created_at: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) throw error
      return { success: true, data }
    } catch (error) {
      console.error('Error creating contact submission:', error)
      return { success: false, error: error.message }
    }
  }

  // Lead Submissions
  async createLeadSubmission(formData, analysis) {
    if (!isSupabaseConfigured) {
      console.warn('Supabase not configured - storing locally only')
      return { success: true, data: { id: Date.now() } }
    }

    try {
      const { data, error } = await supabase
        .from('lead_submissions')
        .insert([{
          business_name: formData.businessName,
          contact_name: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          industry: formData.industry,
          business_size: formData.businessSize,
          marketing_budget: formData.marketingBudget,
          primary_goals: formData.primaryGoals,
          biggest_challenges: formData.biggestChallenges,
          priority_services: formData.priorityServices,
          ai_analysis: analysis,
          source: 'website_needs_analysis',
          created_at: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) throw error
      return { success: true, data }
    } catch (error) {
      console.error('Error creating lead submission:', error)
      return { success: false, error: error.message }
    }
  }

  // Fallback Data (when Supabase is not configured)
  getFallbackBlogPosts() {
    return {
      success: true,
      data: [
        {
          id: 1,
          title: 'The Future of AI Marketing: 10 Trends That Will Shape 2024',
          slug: 'future-ai-marketing-2024',
          excerpt: 'Discover the cutting-edge AI marketing trends that forward-thinking businesses are already implementing.',
          content: 'AI marketing is evolving rapidly...',
          author: 'Sarah Chen',
          featured_image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
          published: true,
          created_at: '2024-01-15T10:00:00Z'
        }
      ]
    }
  }

  getFallbackBlogPost(slug) {
    return {
      success: true,
      data: {
        id: 1,
        title: 'The Future of AI Marketing: 10 Trends That Will Shape 2024',
        slug: 'future-ai-marketing-2024',
        content: 'Full blog post content here...',
        author: 'Sarah Chen',
        featured_image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
        published: true,
        created_at: '2024-01-15T10:00:00Z'
      }
    }
  }

  getFallbackCaseStudies() {
    return {
      success: true,
      data: [
        {
          id: 1,
          title: 'E-commerce Giant Transformation',
          company: 'RetailMax',
          industry: 'E-commerce',
          results: { revenue_growth: '340%', roi_improvement: '125%' },
          featured_image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
          published: true
        }
      ]
    }
  }

  getFallbackTeamMembers() {
    return {
      success: true,
      data: [
        {
          id: 1,
          name: 'Sarah Chen',
          position: 'CEO & Founder',
          bio: 'Visionary leader with 19+ years in AI and digital marketing.',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
          linkedin: '#',
          active: true
        }
      ]
    }
  }

  getFallbackServices() {
    return {
      success: true,
      data: [
        {
          id: 1,
          name: 'AI Strategy & Consulting',
          description: 'Custom AI marketing strategies tailored to your business goals.',
          features: ['AI Audit', 'Strategy Development', 'Implementation'],
          active: true
        }
      ]
    }
  }

  getFallbackTestimonials() {
    return {
      success: true,
      data: [
        {
          id: 1,
          name: 'Sarah Mitchell',
          position: 'CEO, TechFlow Solutions',
          content: 'Infabio transformed our entire marketing approach.',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
          rating: 5,
          active: true
        }
      ]
    }
  }

  getFallbackSettings() {
    return {
      success: true,
      data: {
        site_title: 'Infabio - AI Marketing Agency',
        site_description: 'Full-service AI & Digital Marketing solutions since 2005.',
        contact_email: 'hello@infabio.com',
        contact_phone: '+1 (555) 123-4567',
        social_links: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      }
    }
  }
}

export const cmsService = new CMSService()