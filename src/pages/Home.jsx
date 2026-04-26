import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud, Code, Database, Linkedin, Github, ShieldCheck, TerminalSquare,
  Settings, CheckCircle2, Server, Activity, Layers, GitBranch, Trophy,
  Sparkles, RotateCw, ArrowRight, Target, Zap, Moon, Sun, Menu, X,
  MessageCircle, Send, Mail, Phone, MapPin, Globe,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "sonner";
import profilePhoto from "@/assets/profile.jpg";

/* ================= DATA ================= */

const HERO_TECH = [
  "S3","CloudFront","Route 53","EC2","IAM","VPC","RDS","ALB",
  "Auto Scaling","WAF","Terraform","GitHub Actions","Docker","Kubernetes","CloudWatch","Bash",
];

const ROTATING_IMPACTS = [
  "99.9% Uptime","70%+ Faster Deployments","Multi-Region AWS","Terraform IaC",
  "CI/CD Automation","90%+ Threats Blocked","30–50% Latency Reduction",
  "Zero-Downtime Releases","Cost-Optimized Architectures","Production Reliability",
];

const DELIVERABLES = [
  "Production-Ready AWS Infrastructure",
  "Automated CI/CD Pipelines",
  "Scalable & High-Availability Systems",
  "Secure, Cost-Optimized Architectures",
  "Faster delivery through automation, reliability engineering, and cloud-native best practices",
];

const CAREER_OBJECTIVE =
  "Actively seeking opportunities as a Cloud Engineer / AWS DevOps Engineer to build scalable, secure, and automated cloud solutions.";
const CAREER_AVAILABILITY =
  "Available for Hire: Full-time • Contract • Remote | Based in India • Open to Remote / Relocation";

const projects = [
  {
    title: "Production-Ready Multi-Region 3-Tier AWS Platform",
    summary: "Multi-tier AWS architecture (web, application, database) provisioned with Terraform across multi-AZ and multi-region environments, with end-to-end CI/CD via GitHub Actions.",
    tags: ["Terraform","AWS","GitHub Actions","EC2","ALB","Auto Scaling","VPC","S3"],
    github: "https://github.com/rajoli-girisai-madhav/aws-3tier-multi-region-terraform-platform",
    highlights: [
      "Fault-tolerant deployments across multi-AZ and multi-region environments",
      "GitHub Actions matrix strategy across dev, QA, and prod for consistent automated releases",
      "70%+ reduction in deployment time — under 15 minutes end-to-end",
      "Approval-based prod deploys for release governance and risk mitigation",
      "S3 remote state with locking — ~60% fewer configuration conflicts",
      "Scalable compute with EC2, Auto Scaling Groups, and ALB",
      "Centralized logging and observability for faster incident detection",
    ],
  },
  {
    title: "Secure Two-Tier AWS Architecture",
    summary: "Highly available two-tier cloud architecture leveraging Route 53 failover, CloudFront CDN, ACM TLS, and WAF — engineered for global performance and edge security.",
    tags: ["Route 53","CloudFront","ACM","WAF","AWS"],
    github: null,
    highlights: [
      "Route 53 DNS failover with health checks for continuous availability",
      "ACM-enforced end-to-end HTTPS for secure communication",
      "CloudFront CDN delivering 30–50% latency reduction globally",
      "AWS WAF managed rules blocking 90%+ malicious traffic at the edge",
      "CloudFront origin access controls preventing direct backend exposure",
      "Optimized caching strategy reducing backend load by 40–60%",
    ],
  },
  {
    title: "Serverless CI/CD Pipeline for React Application",
    summary: "Fully automated GitHub Actions pipeline that builds, tests, and deploys a React app to S3 + CloudFront with production-grade DNS and edge security.",
    tags: ["GitHub Actions","S3","CloudFront","Route 53","WAF","AWS CLI"],
    github: "https://github.com/rajoli-girisai-madhav",
    highlights: [
      "End-to-end CI/CD with GitHub Actions — build, test, deploy",
      "Hosted on S3 with CloudFront distribution for global low-latency delivery",
      "Route 53 domain routing integrated with CloudFront for prod-grade DNS",
      "AWS WAF host-header validation rules preventing unauthorized access",
      "Versioned S3 sync deploys via AWS CLI for consistent releases",
      "CloudFront cache invalidation for immediate update propagation",
      "Pipeline validation checks preventing deployment of broken builds",
    ],
  },
];

const skillsData = [
  { category: "Cloud & Distributed Systems", icon: Cloud,
    skills: ["EC2","VPC","S3","EBS","EFS","RDS","IAM","CloudFront","Route 53","ELB","Auto Scaling","WAF","SNS"] },
  { category: "Infrastructure as Code & DevOps", icon: GitBranch,
    skills: ["Terraform","Modules","Workspaces","Remote State (S3)","GitHub Actions","Git","GitHub"] },
  { category: "Containers & Orchestration", icon: Layers, skills: ["Docker","Kubernetes (Fundamentals)"] },
  { category: "Monitoring & Observability", icon: Activity, skills: ["CloudWatch","AppDynamics"] },
  { category: "Programming & Scripting", icon: TerminalSquare, skills: ["Bash","Shell Scripting"] },
  { category: "Databases", icon: Database, skills: ["Oracle SQL","IBM DB2"] },
  { category: "Operating Systems", icon: Server, skills: ["Linux","Unix","Stratus VOS"] },
  { category: "Mainframe & Legacy Systems", icon: Code,
    skills: ["COBOL (Transaction Processing, Screen Maps)","Transaction Systems","File Processing","Logging Mechanisms"] },
  { category: "Tools & Collaboration", icon: Settings, skills: ["JIRA","Confluence"] },
  { category: "Additional Exposure", icon: Sparkles,
    skills: ["IBM z/OS — JCL","IBM z/OS — VSAM","IBM z/OS — CICS (Training)","AWS Textract","AWS Comprehend","AWS Rekognition","AWS Translate","AWS Transcribe","AWS Polly","AWS Lex"] },
];

const experiences = [
  {
    role: "AWS DevOps Intern", company: "Vcube Software Solutions",
    location: "Hyderabad", period: "Aug 2025 — Present",
    bullets: [
      "Designed and implemented multi-tier AWS architecture (web, application, database) using Terraform — fault-tolerant across multi-AZ and multi-region",
      "Built CI/CD pipelines across dev, QA, and prod with GitHub Actions matrix strategy for consistent automated releases",
      "Reduced deployment time by 70%+ (under 15 minutes) through end-to-end IaC and pipeline automation",
      "Engineered AWS networking (VPC, subnets, routing, SGs) and scalable compute with EC2, ASGs, and ALB",
      "Implemented S3 remote state with locking, reducing configuration conflicts by ~60%",
      "Strengthened security with AWS WAF managed rules, blocking 90%+ malicious traffic at the edge",
      "Improved global performance using CloudFront, achieving 30–50% latency reduction",
    ],
  },
  {
    role: "Info Tech Senior Associate (Mainframe Systems)", company: "NTT Data",
    location: "Bangalore", period: "May 2022 — Dec 2024",
    bullets: [
      "Managed high-volume transaction processing systems on enterprise mainframe with 99.9% uptime for mission-critical workloads",
      "Reduced incident resolution time by 25–30% through root cause analysis and debugging",
      "Automated operational workflows using Bash/Shell scripting, improving reliability and reducing manual effort",
      "Developed monitoring and alerting systems for transaction anomalies, enabling proactive incident response",
      "Ensured compliance with Visa/MasterCard financial regulations and security standards",
      "Monitored production systems using AppDynamics; supported Linux-based Stratus VOS environments in Agile teams (JIRA, Confluence)",
    ],
  },
];

const certifications = [
  { title: "Mainframe Application Developer", issuer: "NTT DATA", icon: ShieldCheck },
  { title: "Financial Services Systems", issuer: "NTT DATA", icon: ShieldCheck },
  { title: "SQL (Intermediate)", issuer: "HackerRank", icon: ShieldCheck },
  { title: "Performance Excellence Award", issuer: "100% SLA compliance in high-volume production environments", icon: Trophy },
];

const achievements = [
  "Improved engineering efficiency by 70–80% with Terraform IaC and CI/CD automation",
  "Maintained 99.9% uptime across cloud and mainframe systems for mission-critical workloads",
  "Improved application performance by 30–50% via CloudFront CDN optimization and caching",
  "Blocked 90%+ malicious traffic using AWS WAF security controls",
  "Reduced incident resolution time by 25–30% through monitoring and RCA improvements",
];

/* ================= NAVBAR ================= */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: "smooth" }); setMobileMenuOpen(false); }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  const ThemeBtn = (
    <Button
      variant="ghost" size="sm" onClick={toggleTheme}
      className="rounded-full gap-2 h-9 px-3 bg-foreground text-background hover:bg-foreground/90 hover:text-background shadow-sm"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="relative inline-flex items-center justify-center w-4 h-4">
        <Moon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Sun className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </span>
      <span className="text-sm font-medium">{isDark ? "Light" : "Dark"}</span>
    </Button>
  );

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight">
          <span className="text-blue-600 dark:text-blue-400">RGS</span>{" "}
          <span className="text-primary">Madhav</span>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {item.label}
            </button>
          ))}
          {ThemeBtn}
        </div>

        <div className="lg:hidden flex items-center gap-2">
          {ThemeBtn}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" /><span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <button key={item.id} onClick={() => scrollTo(item.id)}
                    className="text-lg font-medium text-left px-4 py-2 hover:bg-muted rounded-md transition-colors">
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

/* ================= ROTATING IMPACT ================= */

function RotatingImpact() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROTATING_IMPACTS.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="bg-card border border-border/60 rounded-full shadow-sm px-4 py-2.5 flex items-center justify-center gap-2 overflow-hidden min-h-[44px]">
      <Zap className="w-4 h-4 text-accent shrink-0" />
      <div className="relative flex-1 h-5 overflow-hidden text-center">
        <AnimatePresence mode="wait">
          <motion.span key={ROTATING_IMPACTS[index]}
            initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 text-sm font-semibold text-foreground tracking-tight">
            {ROTATING_IMPACTS[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ================= PROJECT CARD ================= */

function ProjectCard({ project, index }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-[460px] [perspective:1500px]"
    >
      <div className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}>
        {/* FRONT */}
        <Card className="absolute inset-0 bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow [backface-visibility:hidden] [-webkit-backface-visibility:hidden] aws-glow">
          <CardContent className="p-6 h-full flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0"><Cloud className="w-6 h-6" /></div>
              <button type="button" onClick={() => setFlipped(true)}
                className="text-xs font-medium text-muted-foreground hover:text-primary inline-flex items-center gap-1.5 transition-colors">
                <RotateCw className="w-3.5 h-3.5" />Details
              </button>
            </div>
            <h3 className="text-lg font-bold mb-3 leading-snug">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{project.summary}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-secondary/40 text-xs font-normal">{tag}</Badge>
              ))}
            </div>
            <div className="mt-auto">
              {project.github ? (
                <Button variant="outline" className="w-full gap-2" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />View on GitHub
                  </a>
                </Button>
              ) : (
                <Button variant="outline" className="w-full gap-2" onClick={() => setFlipped(true)}>
                  <Sparkles className="w-4 h-4" />See project details
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
        {/* BACK */}
        <Card className="absolute inset-0 bg-card border-border/50 shadow-sm [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] aws-glow">
          <CardContent className="p-6 h-full flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="bg-accent/10 p-3 rounded-xl text-accent shrink-0"><Sparkles className="w-6 h-6" /></div>
              <button type="button" onClick={() => setFlipped(false)}
                className="text-xs font-medium text-muted-foreground hover:text-primary inline-flex items-center gap-1.5 transition-colors">
                <RotateCw className="w-3.5 h-3.5 -scale-x-100" />Back
              </button>
            </div>
            <h3 className="text-base font-bold mb-3 leading-snug">{project.title}</h3>
            <ul className="space-y-2 overflow-y-auto pr-1 flex-1">
              {project.highlights.map((point, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            {project.github && (
              <div className="mt-4 pt-4 border-t border-border/50">
                <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />View on GitHub
                  </a>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

/* ================= CONTACT SECTION ================= */

function ContactSection() {
  const items = [
    { icon: Mail, label: "Email", value: "rajoligirisai.madhav@gmail.com", href: "mailto:rajoligirisai.madhav@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 91217 75542", href: "tel:+919121775542" },
    { icon: MapPin, label: "Location", value: "Hyderabad, India" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rajoli-girisai-madhav", href: "https://linkedin.com/in/rajoli-girisai-madhav" },
    { icon: Github, label: "GitHub", value: "github.com/rajoli-girisai-madhav", href: "https://github.com/rajoli-girisai-madhav" },
    { icon: Globe, label: "Website", value: "rajoligirisaimadhav.online", href: "https://rajoligirisaimadhav.online" },
  ];
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-primary">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm open to Cloud Engineer / AWS DevOps Engineer roles. Reach out anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, label, value, href }) => (
            <Card key={label} className="border border-border/50 bg-card hover:border-primary/50 transition-colors aws-glow">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0"><Icon className="h-6 w-6" /></div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="text-base font-medium hover:text-primary transition-colors break-all">{value}</a>
                  ) : (
                    <p className="text-base font-medium">{value}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= FLOATING CONTACT ================= */

function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) e.email = "Valid email is required";
    if (!message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSend = () => {
    if (!validate()) return;
    window.location.href = `mailto:rajoligirisai.madhav@gmail.com?subject=${encodeURIComponent("Portfolio Contact from " + name)}&body=${encodeURIComponent("Name: " + name + "\n\nEmail: " + email + "\n\nMessage: " + message)}`;
    toast.success("Opening your email client...", { description: "Thanks for reaching out!" });
    setOpen(false); setName(""); setEmail(""); setMessage(""); setErrors({});
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }} transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm origin-bottom-right" role="dialog">
            <div className="bg-card border border-border/60 rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden flex flex-col max-h-[calc(100vh-8rem)]">
              <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 shrink-0"><Mail className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-bold text-base leading-tight">Send me a message</h3>
                    <p className="text-xs text-primary-foreground/80 mt-0.5">I'll reply to your email shortly</p>
                  </div>
                </div>
                <button onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground p-1 rounded-md hover:bg-white/10">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-4 space-y-3 overflow-y-auto">
                <div className="grid gap-1.5">
                  <Label htmlFor="fc-name" className="text-xs">Name</Label>
                  <Input id="fc-name" value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Your name" className={`h-9 text-sm ${errors.name ? "border-destructive" : ""}`} />
                  {errors.name && <p className="text-[11px] text-destructive">{errors.name}</p>}
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="fc-email" className="text-xs">Email</Label>
                  <Input id="fc-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com" className={`h-9 text-sm ${errors.email ? "border-destructive" : ""}`} />
                  {errors.email && <p className="text-[11px] text-destructive">{errors.email}</p>}
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="fc-message" className="text-xs">Message</Label>
                  <Textarea id="fc-message" value={message} onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can I help you?" rows={4}
                    className={`text-sm resize-none ${errors.message ? "border-destructive" : ""}`} />
                  {errors.message && <p className="text-[11px] text-destructive">{errors.message}</p>}
                </div>
              </div>
              <div className="p-4 pt-2 border-t border-border/50">
                <Button onClick={handleSend} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  <Send className="h-4 w-4" />Send Message
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Button size="icon" onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close message panel" : "Open message panel"}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:scale-105 transition-transform z-50 bg-accent hover:bg-accent/90 text-accent-foreground">
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }} className="flex items-center justify-center">
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }} className="flex items-center justify-center">
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </>
  );
}

/* ================= PROJECTS SECTION ================= */

function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-primary">Featured Projects</h2>
          <div className="text-muted-foreground text-lg max-w-2xl mx-auto space-y-1">
            <p>Hands-on AWS, Terraform, and CI/CD projects built end-to-end.</p>
            <p>Tap
              <span className="inline-flex items-center gap-1 mx-1 align-middle">
                <RotateCw className="w-3.5 h-3.5" /> Details
              </span>
              on any card to flip and see the full breakdown.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= HOME (root) ================= */

export default function Home() {
  const [profileSrc, setProfileSrc] = useState(profilePhoto);
  const [resumeHref, setResumeHref] = useState("/resume.pdf");
  const [resumeName, setResumeName] = useState("resume.pdf");

  useEffect(() => {
    const sync = () => {
      const pic = localStorage.getItem("rgsm:profile_pic");
      const resume = localStorage.getItem("rgsm:resume_pdf");
      const name = localStorage.getItem("rgsm:resume_name");
      setProfileSrc(pic || profilePhoto);
      setResumeHref(resume || "/resume.pdf");
      setResumeName(name || "resume.pdf");
    };
    sync();
    window.addEventListener("rgsm:assets-updated", sync);
    return () => window.removeEventListener("rgsm:assets-updated", sync);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
      <Navbar />

      {/* HERO */}
      <section id="home" className="pt-28 pb-12 md:pt-36 md:pb-16 px-6 overflow-hidden relative">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }} className="flex flex-col items-start text-left">
            <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 flex items-center shadow-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to Cloud Engineer / AWS DevOps Engineer roles
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
              <span className="text-teal-700 dark:text-teal-300">Rajoli Girisai</span>{" "}
              <span className="text-primary">Madhav</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-black dark:text-white mb-6">
              AWS DevOps Engineer | Cloud & Infrastructure Specialist
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Designing and optimizing scalable, secure AWS infrastructure using Terraform — driving CI/CD automation and delivering resilient, production-grade systems with 99.9% uptime.
            </p>
            <div className="mb-10 max-w-xl">
              <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-3">
                Core Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {HERO_TECH.map((skill) => (
                  <span key={skill}
                    className="px-3 py-1 bg-muted text-foreground/80 rounded-full text-xs font-medium border border-border/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base shadow-lg shadow-primary/20">
                <a href={resumeHref} download={resumeName}>Resume</a>
              </Button>
              <Button asChild variant="outline" size="icon" className="h-12 w-12 rounded-full border-border/50 shadow-sm">
                <a href="https://linkedin.com/in/rajoli-girisai-madhav" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" /><span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="h-12 w-12 rounded-full border-border/50 shadow-sm">
                <a href="https://github.com/rajoli-girisai-madhav" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" /><span className="sr-only">GitHub</span>
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full mt-12 lg:mt-0 flex flex-col items-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-primary/30 via-accent/20 to-primary/10 blur-2xl" />
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-card">
                <img src={profileSrc} alt="Rajoli Girisai Madhav"
                  className="absolute inset-0 w-full h-full object-cover object-top" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-[260px] md:w-[280px] z-10">
                <RotatingImpact />
              </div>
            </div>

            <Card className="bg-card border-border/50 shadow-sm w-full max-w-md mt-4 aws-glow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 p-2 rounded-lg text-accent"><Sparkles className="w-5 h-5" /></div>
                  <h3 className="font-bold text-lg">What I Deliver</h3>
                </div>
                <ul className="space-y-2.5">
                  {DELIVERABLES.map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CAREER OBJECTIVE */}
      <section id="objective" className="py-20 border-b border-border/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Card className="relative bg-card border-border/50 shadow-sm overflow-hidden">
              <div className="absolute h-1 inset-x-0 top-0 bg-gradient-to-r from-primary via-accent to-primary" />
              <CardContent className="p-8 md:p-10">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0 hidden sm:block">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 p-2 rounded-lg text-primary sm:hidden"><Target className="w-4 h-4" /></div>
                      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">Career Objective</h2>
                    </div>
                    <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">{CAREER_OBJECTIVE}</p>
                    <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">{CAREER_AVAILABILITY}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
                <span className="text-black dark:text-white">From Mainframes to the</span>{" "}
                <span className="text-primary">Cloud</span>
              </h2>
              <div className="space-y-6 text-lg text-black dark:text-white leading-relaxed">
                <p>I began my career in enterprise banking systems at NTT Data, working with Mainframes (COBOL, JCL), where I learned the importance of reliability, production stability, and maintaining 99.9% uptime in mission-critical environments.</p>
                <p>Driven by a passion for modern infrastructure, I transitioned into Cloud and DevOps. I've since designed and deployed scalable AWS architectures, implemented CI/CD pipelines, and reduced deployment times to under 15 minutes through automation.</p>
                <p>Today, I focus on building secure, high-availability systems using AWS and Terraform — combining the discipline of mainframe-era reliability with the agility of cloud-native engineering.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-6">
              <Card className="bg-card border-border/50 shadow-sm aws-glow">
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit"><Cloud className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">AWS Expertise</h3>
                    <p className="text-muted-foreground">Deep hands-on experience with EC2, VPC, S3, RDS, CloudFront, Route 53, IAM, ALB, Auto Scaling, WAF, and CloudWatch.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50 shadow-sm aws-glow">
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-accent/10 p-3 rounded-xl h-fit"><Settings className="w-6 h-6 text-accent" /></div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Cloud Automation</h3>
                    <p className="text-muted-foreground">Reusable Terraform modules with S3 remote state and GitHub Actions matrix pipelines, cutting deploy times to under 15 minutes.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50 shadow-sm aws-glow">
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit"><ShieldCheck className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Production Reliability</h3>
                    <p className="text-muted-foreground">Mission-critical mainframe operations background at NTT Data — bringing 99.9% uptime discipline to modern cloud infrastructure.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Skills &amp; Technologies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, i) => {
              const Icon = category.icon;
              return (
                <motion.div key={category.category} initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}>
                  <Card className="h-full bg-card border-border/50 shadow-sm hover:shadow-md transition-shadow aws-glow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary"><Icon className="w-5 h-5" /></div>
                        <h3 className="font-bold text-lg">{category.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-secondary/50 font-normal py-1">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">Experience</h2>
          </div>
          <div className="space-y-12 md:space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:ml-0 md:before:left-1/2 before:-translate-x-px md:before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {experiences.map((exp, i) => {
              const isIntern = exp.company === "Vcube Software Solutions";
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 mt-2">
                    <span className="h-2 w-2 bg-background rounded-full"></span>
                  </div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] bg-card p-6 rounded-2xl border border-border/50 shadow-sm">
                    <div className="flex flex-col mb-4 gap-2">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold leading-tight">{exp.role}</h3>
                        <p className="text-primary font-medium mt-1 text-sm md:text-base">{exp.company} · {exp.location}</p>
                      </div>
                      <Badge variant="outline" className="w-fit">{exp.period}</Badge>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.bullets.map((b, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                          <span className="text-sm leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                    {isIntern && (
                      <div className="mt-5 pt-4 border-t border-border/50">
                        <Button variant="outline" size="sm" className="w-full sm:w-auto gap-2" asChild>
                          <a href="#projects">View Related Projects<ArrowRight className="w-4 h-4" /></a>
                        </Button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-12">
            <Card className="bg-card border-border/50 shadow-sm aws-glow">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-accent/10 p-2 rounded-lg text-accent"><Trophy className="w-5 h-5" /></div>
                  <h3 className="text-xl font-bold">Key Achievements</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  {achievements.map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1.5" />
                      <span className="text-sm md:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <ProjectsSection />

      {/* EDUCATION & CERTIFICATIONS */}
      <section id="education" className="py-24 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-8 tracking-tight text-primary">Education</h2>
              <Card className="bg-card border-border/50 shadow-sm h-full aws-glow">
                <CardContent className="p-6 md:p-8 flex flex-col justify-center h-full">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">B.Tech in Electrical and Electronics Engineering</h3>
                    <p className="text-lg text-primary font-medium mb-1">S.V. College of Engineering</p>
                    <p className="text-muted-foreground font-medium">Sep 2017 — Aug 2021</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Foundation in electrical systems, electronics, and computing — bridging into software and cloud engineering.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div id="certifications">
              <h2 className="text-2xl font-bold mb-8 tracking-tight text-primary">Certifications &amp; Awards</h2>
              <div className="grid gap-4">
                {certifications.map((cert, i) => {
                  const Icon = cert.icon;
                  return (
                    <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                      <Card className="bg-card border-border/50 shadow-sm hover:border-primary/30 transition-colors aws-glow">
                        <CardContent className="p-5 flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-full shrink-0"><Icon className="w-6 h-6 text-primary" /></div>
                          <div>
                            <h4 className="font-bold mb-1 leading-tight">{cert.title}</h4>
                            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <FloatingContact />
    </div>
  );
}
