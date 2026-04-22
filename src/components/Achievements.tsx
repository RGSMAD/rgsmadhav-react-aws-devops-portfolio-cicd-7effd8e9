import { Trophy, Zap, Activity, Cog, Award } from "lucide-react";

const achievements = [
  { icon: Zap, text: "Deployment time reduced to <15 minutes" },
  { icon: Activity, text: "99.9% uptime achieved on production systems" },
  { icon: Cog, text: "70–80% automation efficiency improvement" },
  { icon: Award, text: "Performance Award — 100% SLA compliance" },
];

const Achievements = () => (
  <section id="achievements" className="section-pad">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-accent font-semibold uppercase tracking-widest text-sm">Recognition</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 flex items-center justify-center gap-3">
          <Trophy className="w-10 h-10 text-accent" />
          <span>Key <span className="text-gradient">Achievements</span></span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {achievements.map((a) => (
          <div
            key={a.text}
            className="glass-card px-5 py-3 rounded-full flex items-center gap-3 hover:shadow-glow transition-all hover:-translate-y-1 hover:bg-gradient-primary hover:text-primary-foreground group cursor-default"
          >
            <a.icon className="w-5 h-5 text-accent group-hover:text-primary-foreground transition-colors" />
            <span className="font-semibold text-sm md:text-base">{a.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
