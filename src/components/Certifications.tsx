import { GraduationCap, BadgeCheck } from "lucide-react";

const certs = [
  { title: "SQL Certification", issuer: "HackerRank", color: "from-primary to-primary-glow" },
  { title: "NTT Data Certifications", issuer: "NTT Data", color: "from-accent to-accent-glow" },
  { title: "AWS Cloud Practitioner", issuer: "In Progress", color: "from-primary to-accent" },
];

const Certifications = () => (
  <section id="certifications" className="section-pad bg-gradient-hero mesh-bg">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-accent font-semibold uppercase tracking-widest text-sm">Credentials</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          <span className="text-gradient">Certifications</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c) => (
          <div key={c.title} className="glass-card p-6 rounded-2xl text-center hover:shadow-glow transition-all hover:-translate-y-2 group">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} mx-auto mb-4 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform`}>
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-lg mb-1">{c.title}</h3>
            <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
              <BadgeCheck className="w-4 h-4 text-primary" />
              {c.issuer}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
