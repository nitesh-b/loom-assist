# Loom Assist — Customer Facing Website Plan

## Overview

Loom Assist is an AAC (Augmentative and Alternative Communication) platform designed to help non-speaking and minimally speaking individuals communicate effectively using visual vocabulary, phrases, and customizable AAC tools.

This document outlines the development plan for the public-facing customer website.

---

# Goals

The customer-facing website should:

- Explain what Loom Assist is
- Demonstrate how AAC works
- Build trust with families, therapists, and schools
- Convert visitors into users/customers
- Showcase accessibility and inclusivity
- Provide onboarding and contact pathways
- Support SEO and future growth

---

# Recommended Website Pages

## Core Pages

1. Home
2. Pricing
3. Contact
4. Features
5. About
6. For Therapists
7. Accessibility
8. FAQ
9. Blog / Resources
10. Login / Sign Up

---

# Recommended Folder Structure

```txt
src/
 ├── app/
 ├── components/
 │    ├── common/
 │    ├── marketing/
 │    ├── pricing/
 │    ├── forms/
 │    └── layout/
 ├── pages/
 │    ├── Home/
 │    ├── Pricing/
 │    ├── Contact/
 │    ├── Features/
 │    ├── About/
 │    └── FAQ/
 ├── routes/
 ├── services/
 ├── store/
 ├── hooks/
 ├── types/
 ├── constants/
 ├── assets/
 └── styles/


Design System
Design Goals

The website should feel:

Calm
Accessible
Inclusive
Modern
Easy to understand
Low cognitive load
Recommended Typography
Inter
Nunito
Lexend
UI Style
Use
Large typography
Rounded cards
Soft shadows
Spacious layouts
Accessible contrast
Simple navigation
Avoid
Overly technical dashboards
Tiny text
Excessive animations
Cluttered screens
Home Page Plan
Sections
1. Hero Section
Include
Product name
Tagline
AAC visual demo
CTA buttons
Example Headline

Communication without barriers.

Example CTA
Get Started
Watch Demo
Explore Vocabulary
2. Who Loom Assist Helps
Audience Cards
Children with autism
Stroke recovery patients
Non-verbal users
Speech therapists
Families
Schools
3. How AAC Works

Explain:

Symbols represent words
Words build phrases
Color coding supports language learning
Core vocabulary accelerates communication
4. Interactive AAC Demo

Users can click symbols to build phrases.

Example:

[I] [want] [more] [drink]


Result:

"I want more drink"

5. Features Section
Features
Core Vocabulary
Fringe Vocabulary
Phrase Builder
Color-Coded Language
Therapist Tools
Cloud Sync
6. Real-Life Scenarios

Examples:

At school
During meals
Emotional expression
At home
Doctor visits
7. Accessibility Section

Highlight:

Large touch targets
Keyboard navigation
High contrast
Screen-reader support
Cognitive accessibility
8. Testimonials

Include:

Parents
Teachers
Speech therapists
AAC users
9. Vocabulary Showcase

Display:

AAC symbols
Categories
Core words
Phrases
10. Final CTA

Example:

Every voice deserves to be heard.

Buttons:

Get Started
Request Demo
Pricing Page Plan
Suggested Plans
Free
Limited vocabulary
Basic AAC boards
Family
Unlimited phrases
Personalization
Cloud sync
Therapist
Multiple users
Vocabulary management
Reporting
School
Classroom management
Shared libraries
Student groups
Pricing Features
Monthly / annual toggle
Feature comparison
FAQ
CTA
Contact Page Plan
Contact Form Fields
Name
Email
Organization
Inquiry type
Message
Inquiry Types
General support
Therapist demo
School partnership
Accessibility issue
Features Page Plan
Sections
AAC Vocabulary
Core Vocabulary
Fringe Vocabulary
Phrase Builder
Color Coding
Therapist Features
Symbol Management
Accessibility Support
About Page Plan
Include
Company mission
Accessibility philosophy
Why Loom Assist exists
Team values
For Therapists Page
Include
Student workflows
Vocabulary customization
Therapy support
Classroom tools
Printable AAC boards
Accessibility Page
Include
WCAG goals
Keyboard support
Screen reader support
Touch accessibility
Cognitive accessibility
FAQ Page
Questions
What is AAC?
Who is Loom Assist for?
Does it work offline?
Can vocabulary be customized?
Is it suitable for autism?
Can schools use it?
Blog / Resources
Content Ideas
AAC communication tips
Speech therapy resources
Autism communication guides
Core vocabulary learning
Interactive AAC Demo
Features
Symbol selection
Phrase building
Text-to-speech
Color coding
Core vocabulary examples
Backend Integration
Existing Backend Features

Current backend already supports:

Vocabulary management
Categories
Image uploads
JWT authentication
S3 image storage
Additional APIs Needed
GET /public/features
GET /public/testimonials
POST /contact
POST /newsletter
GET /pricing

Authentication Plan
Public Auth Features
Login
Signup
Forgot password
Email verification
SEO Plan
Add
Metadata
OpenGraph support
Sitemap
Structured data
Blog SEO
Performance Plan
Optimize
Route splitting
Lazy loading
Image optimization
Responsive layouts
Mobile Optimization

AAC users heavily use tablets and mobile devices.

Prioritize
iPad layouts
Large buttons
Responsive grids
Touch-friendly spacing
Analytics Plan
Suggested Tools
GA4
PostHog
Hotjar
Track
CTA clicks
Demo interactions
Pricing views
Contact submissions
Recommended Navigation
Home
Features
Pricing
For Therapists
Resources
Contact
Login
Get Started

Recommended Reusable Components
Navbar
Footer
HeroSection
AACDemoSection
FeatureCards
PricingCards
FAQAccordion
TestimonialSlider
CTASection
AccessibilitySection

Recommended Development Timeline
Sprint 1
Project setup
Layout system
Navigation
Home page
Sprint 2
Pricing page
Contact page
Features page
Sprint 3
Interactive AAC demo
Responsive optimization
Animations
Sprint 4
Authentication
Backend integration
SEO improvements
Sprint 5
Accessibility audit
Analytics
Production deployment
Recommended Deployment
Frontend
Vercel
Netlify
Backend

Existing Micronaut backend

Storage

AWS S3

Key UX Principles

The website should communicate:

Empowerment
Communication
Accessibility
Inclusion
Simplicity

The experience should feel emotionally supportive rather than technical.

Most Important Conversion Principle

The website must visually demonstrate communication happening.

Not just screenshots.

Users should see:

symbol → phrase → spoken communication


This is the core emotional value of Loom Assist.