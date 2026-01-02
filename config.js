// Portfolio Configuration - Edit your details here
const CONFIG = {
    // Personal Information
    personal: {
        name: "Aditya Prakash",
        initials: "AP",
        role: "Full-Stack Developer",
        tagline: "Full-Stack Web Developer | MERN Stack Expert | Python & Java Specialist",
        email: "telltoadityap@gmail.com",
        hourlyRate: "$55/hr",
        responseTime: "Within 24 hours",
        availability: "Remote Worldwide"
    },

    // Hero Section
    hero: {
        badge: "Available for Projects",
        greeting: "Hi, I'm",
        typingTexts: [
            "Full-Stack Developer",
            "MERN Stack Expert", 
            "Python & Java Specialist",
            "Problem Solver"
        ],
        description: `Crafting scalable, enterprise-grade web applications with <strong>12+ years</strong> of expertise in MERN Stack, Python & Java. Specialized in eCommerce, Banking & SaaS platforms.`,
        ctaPrimary: "View My Work",
        ctaSecondary: "Get In Touch"
    },

    // Statistics
    stats: [
        { number: "12+", label: "Years Experience" },
        { number: "50+", label: "Projects Delivered" },
        { number: "100%", label: "Client Satisfaction" }
    ],

    // Social Links
    social: {
        github: "https://github.com/telltoadityap-svg",
        linkedin: "https://www.linkedin.com/in/aditya-prakash-50b6873a2/",
        upwork: "https://www.upwork.com/freelancers/~01a611eb88692e6b85"
    },

    // Code Window Content
    codeWindow: {
        filename: "developer.js",
        content: {
            name: "Aditya Prakash",
            role: "Full-Stack Developer",
            experience: "12+ years",
            skills: ["React", "Node.js", "Python", "Java"],
            passion: "Building scalable apps"
        }
    },

    // About Section
    about: {
        sectionTag: "Get to know me",
        title: "About Me",
        subtitle: "A Passionate Developer Building Digital Solutions",
        paragraphs: [
            `I am a <strong>Full-Stack Web Developer</strong> with over 12 years of professional experience specializing in the MERN Stack (MongoDB, Express.js, React, Node.js), Python, Java, and REST API design.`,
            `I've successfully delivered scalable web applications and complex systems for <strong>eCommerce</strong>, <strong>banking</strong>, and <strong>business platforms</strong>. My expertise spans system architecture, database optimization, DevOps practices, and agile methodologies.`
        ],
        highlights: [
            "Expert in MERN development & system modernization",
            "Scaled platforms handling millions of transactions",
            "Strong DevOps background with Docker, K8s & AWS",
            "Available for immediate engagement"
        ],
        experienceYears: "12+",
        ctaText: "Let's Collaborate"
    },

    // Skills Section
    skills: {
        sectionTag: "What I work with",
        title: "Technical Skills",
        techShowcaseTitle: "Technologies I Work With",
        categories: [
            {
                icon: "fa-laptop-code",
                title: "Frontend Development",
                skills: [
                    { name: "React.js & Next.js", level: "expert" },
                    { name: "HTML5, CSS3, JavaScript", level: "expert" },
                    { name: "TypeScript", level: "advanced" },
                    { name: "Redux & Context API", level: "expert" },
                    { name: "Tailwind CSS, Material-UI", level: "expert" }
                ]
            },
            {
                icon: "fa-server",
                title: "Backend Development",
                skills: [
                    { name: "Node.js & Express.js", level: "expert" },
                    { name: "Python (Django, Flask)", level: "expert" },
                    { name: "Java (Spring Boot)", level: "advanced" },
                    { name: "REST API Design", level: "expert" },
                    { name: "Microservices Architecture", level: "expert" }
                ]
            },
            {
                icon: "fa-database",
                title: "Database & Storage",
                skills: [
                    { name: "MongoDB & NoSQL", level: "expert" },
                    { name: "MySQL & PostgreSQL", level: "expert" },
                    { name: "Database Optimization", level: "advanced" },
                    { name: "Redis Caching", level: "advanced" },
                    { name: "Data Modeling", level: "expert" }
                ]
            },
            {
                icon: "fa-cloud",
                title: "DevOps & Cloud",
                skills: [
                    { name: "Docker & Kubernetes", level: "advanced" },
                    { name: "AWS (EC2, S3, RDS, Lambda)", level: "expert" },
                    { name: "CI/CD Pipelines", level: "advanced" },
                    { name: "System Architecture", level: "expert" },
                    { name: "Agile & Scrum", level: "expert" }
                ]
            }
        ],
        techIcons: [
            { icon: "fab fa-react", title: "React" },
            { icon: "fab fa-node-js", title: "Node.js" },
            { icon: "fab fa-python", title: "Python" },
            { icon: "fab fa-java", title: "Java" },
            { icon: "fab fa-js-square", title: "JavaScript" },
            { icon: "fab fa-aws", title: "AWS" },
            { icon: "fab fa-docker", title: "Docker" },
            { icon: "fab fa-git-alt", title: "Git" }
        ]
    },

    // Projects Section
    projects: {
        sectionTag: "My recent work",
        title: "Featured Projects",
        ctaText: "View All Projects on GitHub",
        items: [
            {
                icon: "fa-shopping-cart",
                title: "eCommerce Platform",
                badge: "Full-Stack",
                badgeClass: "fullstack",
                description: "Built a full-featured eCommerce platform with secure Stripe payment integration, comprehensive inventory management, user authentication, order tracking, and admin dashboard.",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                metrics: [
                    { icon: "fa-bolt", text: "50% faster checkout" },
                    { icon: "fa-server", text: "99.5% uptime" }
                ],
                link: "#"
            },
            {
                icon: "fa-university",
                title: "Banking System",
                badge: "Enterprise",
                badgeClass: "enterprise",
                description: "Developed secure banking sector project with transaction processing, regulatory compliance (RBI standards), robust backend architecture, MFA, and comprehensive audit logging.",
                tech: ["Java", "Spring Boot", "PostgreSQL", "AWS"],
                metrics: [
                    { icon: "fa-shield-alt", text: "Bank-grade security" },
                    { icon: "fa-check-double", text: "100% compliance" }
                ],
                link: "#"
            },
            {
                icon: "fa-cloud-upload-alt",
                title: "SaaS Application",
                badge: "Scalable",
                badgeClass: "scalable",
                description: "Created scalable SaaS solution with microservices architecture, multi-tenant support, real-time analytics dashboard, automated billing, and Kubernetes orchestration.",
                tech: ["MERN", "Docker", "Kubernetes", "AWS"],
                metrics: [
                    { icon: "fa-users", text: "10K+ concurrent users" },
                    { icon: "fa-tachometer-alt", text: "99.9% availability" }
                ],
                link: "#"
            }
        ]
    },

    // Contact Section
    contact: {
        sectionTag: "Get in touch",
        title: "Let's Work Together",
        subtitle: "Ready to Start Your Project?",
        description: "I'm open to long-term remote contracts, high-impact freelance projects, and architectural consulting. Let's discuss how I can help bring your vision to life.",
        connectTitle: "Connect With Me",
        links: [
            { icon: "fas fa-briefcase", text: "Upwork Profile", url: "https://www.upwork.com/freelancers/~01a611eb88692e6b85", class: "upwork" },
            { icon: "fab fa-linkedin-in", text: "LinkedIn Profile", url: "https://www.linkedin.com/in/aditya-prakash-50b6873a2/", class: "linkedin" },
            { icon: "fas fa-envelope", text: "Send Email", url: "mailto:telltoadityap@gmail.com", class: "email" }
        ]
    },

    // Footer
    footer: {
        tagline: "Building scalable solutions for the digital world.",
        quickLinks: [
            { text: "About", href: "#about" },
            { text: "Skills", href: "#skills" },
            { text: "Projects", href: "#projects" },
            { text: "Contact", href: "#contact" }
        ],
        connectLinks: [
            { text: "GitHub", href: "https://github.com/telltoadityap-svg" },
            { text: "LinkedIn", href: "https://www.linkedin.com/in/aditya-prakash-50b6873a2/" },
            { text: "Upwork", href: "https://www.upwork.com/freelancers/~01a611eb88692e6b85" },
            { text: "Email", href: "mailto:telltoadityap@gmail.com" }
        ],
        copyright: "2026 Aditya Prakash"
    },

    // Navigation
    nav: {
        links: [
            { text: "Home", href: "#home" },
            { text: "About", href: "#about" },
            { text: "Skills", href: "#skills" },
            { text: "Projects", href: "#projects" },
            { text: "Contact", href: "#contact" }
        ],
        ctaText: "Hire Me"
    },

    // Meta Information (for SEO)
    meta: {
        title: "Aditya Prakash | Full-Stack MERN Developer | 12+ Years Experience",
        description: "Aditya Prakash - Full-Stack MERN Developer with 12+ years experience. Specialist in scalable web applications, eCommerce, banking, and SaaS systems.",
        keywords: "Full-Stack Developer, MERN Stack, React, Node.js, MongoDB, Express, Freelancer, Web Developer",
        themeColor: "#6366f1"
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
