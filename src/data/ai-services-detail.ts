export type AIServiceDetail = {
  slug: string;
  title: string;
  headline: string;
  intro: string;
  whatYouGet: string[];
  process: { step: string; detail: string }[];
  stackNote: string;
  /** Technical SEO */
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  faqs: { question: string; answer: string }[];
};

export const aiServiceDetails: Record<string, AIServiceDetail> = {
  'ai-automation-consulting': {
    slug: 'ai-automation-consulting',
    title: 'AI Automation Consulting',
    headline: 'Practical AI adoption for owners who cannot afford a failed pilot',
    intro:
      'We help small businesses adopt AI without chaos: we map where automation saves hours, where it risks trust, and how to govern prompts, data, and approvals. You get a roadmap, vendor-neutral tooling guidance, and implementation support—so AI becomes part of operations, not a science project.',
    whatYouGet: [
      'Current-state audit: repetitive tasks, data silos, and customer touchpoints that leak revenue.',
      'Prioritized roadmap: quick wins vs. compounding bets, with realistic timelines for a small team.',
      'Policy kit: what humans must approve, how to log decisions, and how to talk about AI with customers.',
      'Hands-on build support alongside your staff—we do not disappear after a slide deck.',
    ],
    process: [
      {
        step: 'Discovery & shadowing',
        detail: 'Interviews and workflow review across sales, ops, and admin.',
      },
      {
        step: 'Pilot design',
        detail: 'One narrow use case with clear success metrics before scaling.',
      },
      {
        step: 'Scale & train',
        detail: 'Documentation, lunch-and-learns, and iteration cadence your team can keep.',
      },
    ],
    stackNote:
      'We are tool-agnostic: the right stack is the one your people will actually use and maintain.',
    seoTitle: 'AI Automation Consulting for Small Business | SE Wisconsin Business Automation',
    seoDescription:
      'Fractional AI automation consulting for small businesses in SE Wisconsin: roadmaps, governance, pilots, and implementation—human-in-the-loop by design.',
    keywords: [
      'AI automation consulting',
      'small business AI adoption',
      'AI strategy for SMB',
      'Wisconsin business automation',
      'fractional AI consultant',
    ],
    faqs: [
      {
        question: 'What is AI automation consulting?',
        answer:
          'It is a structured engagement to find where AI and automation save time and improve customer experience, then pilot, document, and scale—with clear human approval steps so quality and compliance stay intact.',
      },
      {
        question: 'Do you replace our IT provider?',
        answer:
          'No. We focus on workflows, tools, and training. We coordinate with your IT or MSP on security and access, but we do not sell hardware or act as full-time IT support.',
      },
      {
        question: 'How long is a typical engagement?',
        answer:
          'Many clients start with a 4–6 week sprint to ship one pilot, then move to a lighter monthly rhythm for iteration. Scope depends on team size and complexity.',
      },
    ],
  },
  'workflow-business-automation': {
    slug: 'workflow-business-automation',
    title: 'Workflow & Business Automation',
    headline: 'Make your CRM, inbox, and calendar actually talk to each other',
    intro:
      'Copy-paste between Jobber, HubSpot, spreadsheets, and Gmail is where small businesses lose margin. We design integrations and automations—often with Zapier, Make, n8n, or native APIs—so leads, jobs, and follow-ups flow in one direction: forward.',
    whatYouGet: [
      'Process maps from lead → job → invoice → review request, with failure points highlighted.',
      'Automation builds with logging, error handling, and owner-readable documentation.',
      'Data hygiene rules: deduping, naming conventions, and CRM fields that stay clean.',
      'Training so your office manager can tweak workflows without calling a developer every week.',
    ],
    process: [
      {
        step: 'Systems inventory',
        detail: 'What you pay for today, what is underused, and what hurts most.',
      },
      {
        step: 'Build & QA',
        detail: 'Staging tests with real records before anything touches production.',
      },
      {
        step: 'Handoff',
        detail: 'Runbooks, alerts, and a 30-day stabilization window.',
      },
    ],
    stackNote:
      'We avoid brittle automations: if a Zap fails silently, you lose money—we design for visibility.',
    seoTitle: 'Small Business Workflow Automation & CRM Integration | SE Wisconsin Business Automation',
    seoDescription:
      'Workflow and business process automation for small teams: CRM, scheduling, email, and operations integrations with Zapier, Make, and native APIs.',
    keywords: [
      'workflow automation small business',
      'CRM automation',
      'Zapier consultant',
      'Make.com automation',
      'business process automation Wisconsin',
    ],
    faqs: [
      {
        question: 'Which tools do you integrate?',
        answer:
          'Common stacks include HubSpot, Salesforce, Jobber, ServiceTitan, Google Workspace, Slack, Airtable, and QuickBooks—but we evaluate based on what you already run.',
      },
      {
        question: 'Is my data safe in automations?',
        answer:
          'We use least-privilege API keys, avoid sharing credentials in plain text, and document where data travels. For regulated industries we align with your compliance requirements.',
      },
      {
        question: 'What if we outgrow no-code tools?',
        answer:
          'We design with migration in mind: clear data models and naming so moving to custom code or a larger platform is not a rewrite from scratch.',
      },
    ],
  },
  'local-seo-services': {
    slug: 'local-seo-services',
    title: 'Local SEO Services',
    headline: 'Local search that matches how people actually look for you',
    intro:
      'Local SEO is more than a Google listing. We align on-site structure, localized content, citations, and performance measurement with your real service area—especially for home services and other high-intent local businesses across southeastern Wisconsin.',
    whatYouGet: [
      'Keyword and competitor mapping for city, neighborhood, and “near me” intent.',
      'On-page recommendations: titles, internal links, schema, and page speed priorities.',
      'Citation and NAP consistency plan; pruning spammy duplicates where possible.',
      'Dashboards that tie rankings to calls and form fills—not vanity metrics alone.',
    ],
    process: [
      {
        step: 'Baseline audit',
        detail: 'Site, GBP, backlinks, and competitor map-pack review.',
      },
      {
        step: 'Quarterly roadmap',
        detail: 'Content, technical fixes, and conversion improvements in priority order.',
      },
      {
        step: 'Ship & report',
        detail: 'Clear changelog of what we changed and what we recommend next.',
      },
    ],
    stackNote:
      'We follow Google quality guidelines—no doorway pages, no fake reviews, no risky link schemes.',
    seoTitle: 'Local SEO Services for Small Business | Milwaukee Area | SE Wisconsin Business Automation',
    seoDescription:
      'Professional local SEO services for small businesses: map pack strategy, on-site optimization, citations, and reporting—serving Milwaukee, Waukesha, and SE Wisconsin.',
    keywords: [
      'local SEO services',
      'small business local SEO',
      'Milwaukee SEO company',
      'local search optimization',
      'Google map pack SEO',
    ],
    faqs: [
      {
        question: 'How long until local SEO results show?',
        answer:
          'Many clients see directional improvements in 6–12 weeks depending on competition, site health, and review velocity. We set expectations up front with a baseline and milestones.',
      },
      {
        question: 'Do you guarantee #1 rankings?',
        answer:
          'No ethical agency can guarantee rankings. We guarantee disciplined execution, transparent reporting, and strategy tied to your revenue—not arbitrary keyword trophies.',
      },
      {
        question: 'Is local SEO separate from Google Business Profile work?',
        answer:
          'GBP is a major pillar, but local SEO also includes your website, citations, and relevance signals. We offer GBP as its own service if you only need listing help.',
      },
    ],
  },
  'google-business-profile-ai': {
    slug: 'google-business-profile-ai',
    title: 'Google Business Profile (AI)',
    headline: 'A sharper Google Business Profile—with AI speed and human judgment',
    intro:
      'Your Google Business Profile is often the first impression for local buyers. We optimize categories, services, attributes, and photos, then use AI to draft posts, Q&A, and updates your team approves before publish—ideal for busy small businesses.',
    whatYouGet: [
      'Category & service modeling aligned to how people search in your market.',
      'Photo and video guidance so proof stays authentic and compelling.',
      'AI-assisted post calendar tied to seasons, promos, and real job stories.',
      'Q&A drafted from real customer questions—verified for accuracy.',
    ],
    process: [
      {
        step: 'Audit & baseline',
        detail: 'Competitor map pack review and GBP health check.',
      },
      {
        step: 'Voice & approvals',
        detail: 'Brand rules so AI output sounds like your business, not generic filler.',
      },
      {
        step: 'Publish rhythm',
        detail: 'Weekly or biweekly cadence with performance notes you can act on.',
      },
    ],
    stackNote:
      'We never publish unreviewed claims about safety, licensing, or warranties.',
    seoTitle: 'Google Business Profile Optimization & AI Posts | SE Wisconsin Business Automation',
    seoDescription:
      'Google Business Profile optimization with AI-assisted posts, Q&A, and updates—human-approved for local small businesses in Wisconsin.',
    keywords: [
      'Google Business Profile optimization',
      'GBP management',
      'Google Maps marketing',
      'local listing optimization',
      'AI Google Business posts',
    ],
    faqs: [
      {
        question: 'Will AI posts hurt my rankings?',
        answer:
          'Low-quality or spammy posts can. We focus on useful, specific updates tied to real offers and jobs, edited by humans before they go live.',
      },
      {
        question: 'Can you manage multiple locations?',
        answer:
          'Yes. We set governance so brand, hours, and offers stay consistent while each location keeps local proof.',
      },
      {
        question: 'Do you need access to my Google account?',
        answer:
          'We request the minimum roles needed—typically manager access to the Business Profile—and document who has access for security.',
      },
    ],
  },
  'ai-review-management': {
    slug: 'ai-review-management',
    title: 'AI Review Management',
    headline: 'Reviews that grow steadily—and replies that sound like you',
    intro:
      'Reviews influence clicks and trust in local search. We implement ethical request flows, AI first drafts for responses, and escalation paths for sensitive feedback—so small teams stay fast without sounding robotic.',
    whatYouGet: [
      'SMS/email review requests timed to the right moment in the customer journey.',
      'Response templates with AI assistance, edited for tone and specifics.',
      'Alerting for negative feedback with calm, resolution-first playbooks.',
      'Reporting on themes, velocity, and impact—not just star averages.',
    ],
    process: [
      {
        step: 'Policy setup',
        detail: 'Guidelines that respect customers and platform rules.',
      },
      {
        step: 'Integrate touchpoints',
        detail: 'Connect to CRM, invoicing, or dispatch triggers you already use.',
      },
      {
        step: 'Optimize messaging',
        detail: 'Test timing and copy by segment (service type, neighborhood, etc.).',
      },
    ],
    stackNote:
      'We discourage incentivized or filtered reviews—sustainable reputation beats risky shortcuts.',
    seoTitle: 'AI Review Management & Online Reputation | Small Business | SE Wisconsin Business Automation',
    seoDescription:
      'AI-assisted review management for small businesses: ethical requests, faster replies, and reputation workflows integrated with your operations.',
    keywords: [
      'review management software',
      'Google review response service',
      'AI review replies',
      'online reputation small business',
      'get more Google reviews',
    ],
    faqs: [
      {
        question: 'Is it OK to ask every customer for a review?',
        answer:
          'You can ask, but timing and wording matter. We help you ask after success moments and avoid language that violates platform policies.',
      },
      {
        question: 'How do you handle angry reviews?',
        answer:
          'We provide frameworks: acknowledge, move conversation offline when appropriate, and never argue in public. AI drafts are reviewed before posting.',
      },
      {
        question: 'Can AI write all our responses?',
        answer:
          'AI accelerates first drafts; your team approves nuanced or sensitive replies. The goal is speed with accountability.',
      },
    ],
  },
  'ai-local-content': {
    slug: 'ai-local-content',
    title: 'AI Local Content',
    headline: 'Local pages and FAQs that sound like your shop—not a content farm',
    intro:
      'Thin “city swap” pages hurt credibility. We build structured local content—service-area pages, FAQs, and campaigns—with AI acceleration and human editing grounded in your real jobs and geography.',
    whatYouGet: [
      'Information architecture that avoids duplicate doorway spam.',
      'FAQ blocks sourced from calls, tech notes, and real customer questions.',
      'Internal linking to money pages and listings.',
      'Editorial QA for clarity, proof, and E-E-A-T signals.',
    ],
    process: [
      {
        step: 'Content map',
        detail: 'Prioritize pages with the best revenue upside.',
      },
      {
        step: 'Draft & verify',
        detail: 'AI drafts, your experts fact-check, we publish.',
      },
      {
        step: 'Refresh cadence',
        detail: 'Seasonal and offer updates on a predictable schedule.',
      },
    ],
    stackNote:
      'AI drafts speed production; your expertise is what makes content rank and convert.',
    seoTitle: 'AI Local Content Writing & SEO Pages | SE Wisconsin Business Automation',
    seoDescription:
      'AI-assisted local content for SEO: service-area pages, FAQs, and blog posts edited by humans—built for small businesses competing locally.',
    keywords: [
      'local content SEO',
      'AI content for small business',
      'service area pages SEO',
      'local landing pages',
      'FAQ content marketing',
    ],
    faqs: [
      {
        question: 'Will AI content get penalized by Google?',
        answer:
          'Google cares about quality and usefulness, not whether a human or AI drafted a first pass. We edit for accuracy, originality, and proof—and avoid mass-generated thin pages.',
      },
      {
        question: 'Who approves technical claims?',
        answer:
          'Your licensed or qualified staff approves anything involving safety, codes, warranties, or regulated statements.',
      },
      {
        question: 'How do you avoid duplicate content?',
        answer:
          'We structure pages around distinct intent, proof, and internal links—not find-and-replace city names on the same article.',
      },
    ],
  },
  'ai-lead-capture-chatbot': {
    slug: 'ai-lead-capture-chatbot',
    title: 'AI Lead Capture & Chatbot',
    headline: 'Website chat that qualifies leads instead of annoying them',
    intro:
      'Missed chats are missed revenue. We deploy conversational flows that answer common questions, qualify urgency, capture structured details, and hand off to SMS, email, or your CRM—without overpromising response times.',
    whatYouGet: [
      'Branching playbooks for emergency vs. scheduled requests.',
      'Lead cards with name, contact, address, issue, and optional photos.',
      'Handoff copy your team can act on in seconds.',
      'Optional multilingual prompts where your market needs them.',
    ],
    process: [
      {
        step: 'Conversation design',
        detail: 'Map real objections and FAQs from your best CSRs.',
      },
      {
        step: 'Pilot',
        detail: 'Start in business hours, expand to 24/7 when stable.',
      },
      {
        step: 'Tune with transcripts',
        detail: 'Weekly review to reduce drop-offs and confusion.',
      },
    ],
    stackNote:
      'We set expectations: AI assists humans and must not give unsafe instructions.',
    seoTitle: 'AI Chatbot for Lead Capture | Small Business Website | SE Wisconsin Business Automation',
    seoDescription:
      'AI lead capture chatbots for small business websites: qualify visitors, book appointments, and integrate with email or CRM—human handoff included.',
    keywords: [
      'AI chatbot small business',
      'lead capture chatbot',
      'website chat automation',
      'conversational AI sales',
      'AI appointment booking',
    ],
    faqs: [
      {
        question: 'Do chatbots hurt conversion?',
        answer:
          'Poorly designed ones can. We prioritize short paths, honest availability messaging, and easy escape hatches to call or email.',
      },
      {
        question: 'Can it integrate with my CRM?',
        answer:
          'Often yes, via native integrations, Zapier/Make, or webhooks. We confirm feasibility during discovery.',
      },
      {
        question: 'What happens when the bot does not know an answer?',
        answer:
          'It should say so and collect contact info for a human follow-up—never guess on pricing, safety, or guarantees.',
      },
    ],
  },
  'ai-call-handling': {
    slug: 'ai-call-handling',
    title: 'AI Call Handling / Voice Agent',
    headline: 'Calls answered consistently—even when everyone is on a job',
    intro:
      'Small businesses lose leads to voicemail. A voice agent can capture intent, route emergencies, and summarize calls for your team—especially after hours. We script honest service boundaries and compliant disclosures.',
    whatYouGet: [
      'Call flows aligned with dispatch rules and true coverage areas.',
      'Warm transfer or callback scheduling paths.',
      'Structured summaries to SMS/email so details are not lost.',
      'Review of recordings/transcripts for continuous improvement.',
    ],
    process: [
      {
        step: 'Script workshop',
        detail: 'Language from your best phone staff, not generic templates.',
      },
      {
        step: 'Pilot scope',
        detail: 'After-hours or overflow first—expand when stable.',
      },
      {
        step: 'Optimize weekly',
        detail: 'Track booking rate, abandon rate, and misroutes.',
      },
    ],
    stackNote:
      'Voice AI requires transparent recording/consent practices—we align with applicable laws.',
    seoTitle: 'AI Voice Agent & Call Answering Service | Small Business | SE Wisconsin Business Automation',
    seoDescription:
      'AI call handling and voice agents for small businesses: after-hours answering, intake, and structured handoff to your team—Wisconsin-based consulting.',
    keywords: [
      'AI voice agent',
      'AI phone answering',
      'after hours call answering',
      'small business virtual receptionist AI',
      'automated call intake',
    ],
    faqs: [
      {
        question: 'Is an AI voice agent right for my business?',
        answer:
          'It works well when call patterns are predictable, documentation is clear, and humans can back up exceptions. We pilot narrowly before scaling.',
      },
      {
        question: 'What about legal recording requirements?',
        answer:
          'We build disclosures and retention practices appropriate to your jurisdiction and industry. You should have legal counsel review if unsure.',
      },
      {
        question: 'Can it book directly on my calendar?',
        answer:
          'Often yes, depending on your scheduling tool and rules. We test edge cases like double-booking and service-area limits.',
      },
    ],
  },
};

export function getAIService(slug: string): AIServiceDetail | undefined {
  return aiServiceDetails[slug];
}
