/* ============================================================
   MI CODING SCHOOL — CENTRAL DATA CONFIG
   Edit everything in this file to update site content.
   No other file needs to change for routine content updates.
   ============================================================ */

// ---------- ACADEMY INFO ----------
const ACADEMY = {
  name: "Mi Coding School",
  shortName: "Mi Coding",
  tagline: "Learn Skills. Build Projects. Shape Your Future.",
  subTagline: "Live online technology courses, real projects and instructor support — from anywhere.",
  foundedYear: "2026",
  email: "micodingschool1@gmail.com",   // placeholder — replace with real email
  phone: "+92 318 1350287",                    // placeholder — replace with real number
  whatsapp: "+92 318 1350287",                    // placeholder — digits only, country code first
  address: "Online Academy — Live Classes Worldwide", // placeholder
};

// ---------- SOCIAL LINKS (edit once, updates everywhere) ----------
const socialLinks = {
  whatsapp: "https://wa.me/923181350287",   // placeholder
  facebook: "#",                             // placeholder
  instagram: "#",                            // placeholder
  tiktok: "#",                               // placeholder
  linkedin: "#",                             // placeholder
  youtube: "#",                              // placeholder
};

// ---------- GOOGLE SHEETS REGISTRATION CONFIG ----------
// Replace scriptUrl with your deployed Google Apps Script Web App URL.
// See README.md → "Google Sheets Setup" for full instructions.
const GOOGLE_SHEETS_CONFIG = {
  scriptUrl: "https://script.google.com/macros/s/AKfycbxYqUXv_OfdlpeTj1Rqol6rSWdUq-SfatNTBlsr8r4TEqEvsYG7APPtUn3aFQW_mFUF/exec",
  enabled: true, // set to true once scriptUrl is a real deployed URL
};

// ---------- COURSES ----------
// ---------- COURSES ----------
const courses = [
  {
    id: "mern-stack",
    title: "MERN Stack Development",
    short: "Build full-stack web apps with MongoDB, Express, React and Node.js.",
    duration: "6 Months",
    mode: "Live Online",
    level: "Beginner → Advanced",
    fee: "PKR 30,000",
    status: "Admissions Open",
    isNew: true,
    image: "https://www.codebook.in/static/main/img/courses/2.jpg",
    outline: "course-outlines/mern-stack.pdf",
    modules: [
      { title: "Module 01 — HTML & Web Fundamentals", items: ["HTML Structure", "Forms", "Tables", "Semantic HTML"] },
      { title: "Module 02 — CSS", items: ["Selectors", "Flexbox", "Grid", "Responsive Design"] },
      { title: "Module 03 — JavaScript", items: ["Variables & Functions", "DOM", "Events", "ES6+"] },
      { title: "Module 04 — React", items: ["Components", "Hooks", "State Management", "Routing"] },
      { title: "Module 05 — Node.js & Express", items: ["REST APIs", "Middleware", "Authentication"] },
      { title: "Module 06 — MongoDB & Deployment", items: ["Schema Design", "Aggregation", "Cloud Deployment"] },
    ],
  },
  {
    id: "python-fullstack",
    title: "Python Full-Stack Development",
    short: "Learn Python, Django and modern tooling to ship production-ready apps.",
    duration: "5 Months",
    mode: "Live Online",
    level: "Beginner → Advanced",
    fee: "PKR 25,000",
    status: "Admissions Open",
    isNew: false,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1M0mxckbqQqmDYDZrYi05PKNlgH2ykZeQ7w_TX86ExoXoPCN5zVY7kUmo&s=10",
    outline: "course-outlines/python-full-stack.pdf",
    modules: [
      { title: "Module 01 — Python Fundamentals", items: ["Syntax", "Data Structures", "OOP"] },
      { title: "Module 02 — Django Framework", items: ["Models", "Views", "Templates", "Admin"] },
      { title: "Module 03 — Databases", items: ["SQL Basics", "ORM", "Migrations"] },
      { title: "Module 04 — APIs & Deployment", items: ["REST Framework", "Authentication", "Hosting"] },
    ],
  },
  {
    id: "web-development",
    title: "Web Development Fundamentals",
    short: "A practical introduction to building modern, responsive websites.",
    duration: "3 Months",
    mode: "Live Online",
    level: "Beginner",
    fee: "PKR 8,000",
    status: "Admissions Open",
    isNew: false,
    image: "https://www.creativeitinstitute.com/images/course/course_1663052056.jpg",
    outline: "course-outlines/web-development.pdf",
    modules: [
      { title: "Module 01 — HTML & CSS", items: ["Structure", "Styling", "Layout"] },
      { title: "Module 02 — JavaScript Basics", items: ["Logic", "DOM Manipulation", "Events"] },
      { title: "Module 03 — Responsive Design", items: ["Tailwind CSS", "Mobile-first Design"] },
      { title: "Module 04 — Mini Project", items: ["Portfolio Website Build"] },
    ],
  },
  {
    id: "devops-cloud",
    title: "DevOps Engineering and Cloud Computing",
    short: "Automate deployments and manage scalable infrastructure with industry-standard DevOps and cloud tools.",
    duration: "4 Months",
    mode: "Live Online",
    level: "Intermediate",
    fee: "PKR 15,000",
    status: "Admissions Open",
    isNew: false,
    image: "https://www.wedigraf.com/wp-content/uploads/2024/04/DevOps-TRAINING-AT-WEDIGRAF-TECHNOLOGIES-LTD-UYO-AKWA-IBOM-STATE-AND-PORT-HARCOURT-RIVERS-STATE.png",
    outline: "course-outlines/devops-cloud.pdf",
    modules: [
      { title: "Module 01 — Linux & Networking Basics", items: ["Linux CLI", "Shell Scripting", "Networking Fundamentals"] },
      { title: "Module 02 — Version Control & CI/CD", items: ["Git & GitHub", "Jenkins", "GitHub Actions"] },
      { title: "Module 03 — Containers & Orchestration", items: ["Docker", "Docker Compose", "Kubernetes Basics"] },
      { title: "Module 04 — Infrastructure as Code", items: ["Terraform", "Ansible", "Configuration Management"] },
      { title: "Module 05 — Cloud Platforms", items: ["AWS Core Services", "EC2 & S3", "IAM & Security"] },
      { title: "Module 06 — Monitoring & Deployment", items: ["Prometheus & Grafana", "Logging", "Production Deployment"] },
    ],
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    short: "Design and deploy AI-powered workflows and automation systems using modern no-code and API-based tools.",
    duration: "2 Months",
    mode: "Live Online",
    level: "Beginner",
    fee: "PKR 9,000",
    status: "Seats Filling Fast",
    isNew: false,
    image: "https://revavenues-logos.s3.ap-south-1.amazonaws.com/logos/1779896056696-xvi04tpxwgh.jpg",
    outline: "course-outlines/ai-automation.pdf",
    modules: [
      { title: "Module 01 — AI & Automation Foundations", items: ["LLM Basics", "Prompt Engineering", "Use Case Mapping"] },
      { title: "Module 02 — No-Code Automation", items: ["n8n / Zapier / Make", "Trigger-Action Workflows", "Data Pipelines"] },
      { title: "Module 03 — Working with APIs", items: ["REST APIs", "OpenAI / Claude API Integration", "Webhooks"] },
      { title: "Module 04 — Real-World AI Agents", items: ["Chatbot Automation", "Business Process Automation", "Deployment & Monitoring"] },
    ],
  },
  {
    id: "wordpress-development",
    title: "WordPress Development",
    short: "Build, customize and launch professional WordPress websites — from themes to WooCommerce stores.",
    duration: "2 Months",
    mode: "Live Online",
    level: "Beginner",
    fee: "PKR 7,000",
    status: "Seats Filling Fast",
    isNew: false,
    image: "https://career.edu.pk/storage/websiteadmin/67063a44d88b6.jpg",
    outline: "course-outlines/wordpress-development.pdf",
    modules: [
      { title: "Module 01 — WordPress Basics", items: ["Installation & Setup", "Dashboard", "Pages & Posts"] },
      { title: "Module 02 — Themes & Customization", items: ["Theme Installation", "Elementor / Page Builders", "Custom CSS"] },
      { title: "Module 03 — Plugins & Functionality", items: ["Essential Plugins", "Forms & SEO Plugins", "Security & Backups"] },
      { title: "Module 04 — WooCommerce & Deployment", items: ["Online Store Setup", "Payment Gateways", "Hosting & Domain Deployment"] },
    ],
  },
];
// ---------- FACULTY ----------
const faculty = [
  {
    name: "Instructor Name",                 // placeholder
    designation: "Senior Web Development Instructor",
    experience: "5+ Years",
    specialization: "JavaScript, React, Node.js",
    bio: "Passionate about turning beginners into confident, job-ready developers through hands-on projects.",
    image: "images/faculty/instructor-1.jpg",
    linkedin: "#",
  },
  {
    name: "Instructor Name",                 // placeholder
    designation: "Python & Backend Instructor",
    experience: "6+ Years",
    specialization: "Python, Django, REST APIs",
    bio: "Focused on clean architecture and real-world backend engineering practices.",
    image: "images/faculty/instructor-2.jpg",
    linkedin: "#",
  },
  {
    name: "Instructor Name",                 // placeholder
    designation: "UI/UX & Frontend Instructor",
    experience: "4+ Years",
    specialization: "HTML, CSS, Tailwind, Design Systems",
    bio: "Believes great interfaces come from strong fundamentals and a lot of practice.",
    image: "images/faculty/instructor-3.jpg",
    linkedin: "#",
  },
  {
    name: "Instructor Name",                 // placeholder
    designation: "Digital Marketing Instructor",
    experience: "5+ Years",
    specialization: "SEO, Paid Ads, Content Strategy",
    bio: "Helps students turn marketing theory into measurable online growth.",
    image: "images/faculty/instructor-4.jpg",
    linkedin: "#",
  },
];

// ---------- TESTIMONIALS ----------
const testimonials = [
  {
    name: "Student Name",     // placeholder
    course: "MERN Stack Development",
    rating: 5,
    text: "The instructors explain concepts clearly and the practical projects helped me improve my skills fast.",
    image: "images/testimonials/student-1.jpg",
  },
  {
    name: "Student Name",     // placeholder
    course: "Python Full-Stack Development",
    rating: 5,
    text: "Live online classes made it easy to learn from home while still getting real instructor support.",
    image: "images/testimonials/student-2.jpg",
  },
  {
    name: "Student Name",     // placeholder
    course: "Web Development Fundamentals",
    rating: 4,
    text: "Great structure, practical assignments, and a supportive online community throughout the course.",
    image: "images/testimonials/student-3.jpg",
  },
  {
    name: "Student Name",     // placeholder
    course: "Digital Marketing Essentials",
    rating: 5,
    text: "I started freelancing within weeks of finishing the course. Highly recommend this academy.",
    image: "images/testimonials/student-4.jpg",
  },
];

// ---------- VIDEO FEEDBACK ----------
const videoFeedback = [
  {
    name: "Student Name",             // placeholder
    course: "MERN Stack Development",
    description: "Shares how live online classes helped land a first internship.",
    thumbnail: "images/videos/thumb-1.jpg",
    type: "youtube",                  // "youtube" or "mp4"
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ", // placeholder
  },
  {
    name: "Student Name",             // placeholder
    course: "Python Full-Stack Development",
    description: "Talks about building a real project during the course.",
    thumbnail: "images/videos/thumb-2.jpg",
    type: "youtube",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ", // placeholder
  },
  {
    name: "Student Name",             // placeholder
    course: "Web Development Fundamentals",
    description: "Explains the learning experience and instructor support.",
    thumbnail: "images/videos/thumb-3.jpg",
    type: "youtube",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ", // placeholder
  },
];

// ---------- GALLERY ----------
const gallery = [
  { image: "images/gallery/class-1.jpg", caption: "Live online class session" },
  { image: "images/gallery/project-1.jpg", caption: "Student project showcase" },
  { image: "images/gallery/workshop-1.jpg", caption: "Weekend coding workshop" },
  { image: "images/gallery/certificate-1.jpg", caption: "Certificate distribution" },
  { image: "images/gallery/event-1.jpg", caption: "Online academy event" },
  { image: "images/gallery/session-1.jpg", caption: "Instructor mentoring session" },
  { image: "images/gallery/class-2.jpg", caption: "Live online class session" },
  { image: "images/gallery/project-2.jpg", caption: "Student capstone project" },
];

// ---------- FAQ ----------
const faqs = [
  { q: "What courses do you offer?", a: "We currently offer MERN Stack Development, Python Full-Stack Development, Web Development Fundamentals and Digital Marketing Essentials, with more courses added regularly." },
  { q: "Are classes completely online?", a: "Yes. All classes are delivered live online — you can join from anywhere with an internet connection." },
  { q: "Are classes live?", a: "Yes, classes are live and interactive, not pre-recorded, so you can ask questions in real time." },
  { q: "Do I need previous programming experience?", a: "No. Most of our courses start from the basics and gradually move to advanced, practical topics." },
  { q: "What are the course fees?", a: "Fees vary by course and are listed on each course card. Contact us for the latest fee structure and available discounts." },
  { q: "What is the duration?", a: "Course duration ranges from 2 to 6 months depending on the program you choose." },
  { q: "Do you provide certificates?", a: "Yes, students receive a certificate of completion after successfully finishing their course." },
  { q: "How can I register?", a: "Click \"Enroll Now\" on any course or in the navbar to open the registration form and submit your details." },
  { q: "What are the class timings?", a: "We offer multiple timing slots — morning, evening and weekend — so you can choose what fits your schedule." },
  { q: "How can I contact the academy?", a: "You can reach us via WhatsApp, email, phone, or the contact form at the bottom of this page." },
  { q: "Do you provide practical projects?", a: "Yes, every course includes hands-on assignments and real-world projects to build your portfolio." },
  { q: "Do students receive instructor support?", a: "Yes, our instructors provide ongoing support during and after live classes to help you stay on track." },
];

// ---------- COURSE OPTIONS FOR REGISTRATION FORM ----------
const courseOptions = courses.map(c => c.title);
