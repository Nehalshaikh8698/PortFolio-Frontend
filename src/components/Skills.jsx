import { motion } from 'framer-motion';
import { Code2, Database, BrainCircuit, LayoutDashboard, Wrench } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';

const groupIcons = [LayoutDashboard, Code2, Database, BrainCircuit, Wrench];

export default function Skills() {
  return (
    // SKILLS SECTION: add, remove, or reorder skills in portfolio.js to match your actual experience level.
    <section id="skills" className="content-panel section-anchor">
      <div className="section-heading">
        <div><p className="eyebrow">THE TOOLKIT</p><h2>Technologies <span>I Work With</span></h2></div>
        <p className="heading-description">A growing mix of development, database, and AI skills I use to build end-to-end solutions.</p>
      </div>
      <div className="skill-groups">
        {portfolio.skills.map((group, index) => {
          const Icon = groupIcons[index % groupIcons.length];
          return (
            <motion.article className="skill-group" key={group.group} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
              <div className="skill-group-title"><span><Icon size={16} /></span><h3>{group.group}</h3></div>
              <div className="skill-tags">{group.items.map((item) => <span className="skill-tag" key={item}><i />{item}</span>)}</div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
