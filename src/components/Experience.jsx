import { motion } from 'framer-motion';
import { Briefcase, CalendarDays, MapPin, Sparkles } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';

export default function Experience() {
  return (
    // EXPERIENCE SECTION: include internships, jobs, volunteering, hackathons, or research. Keep bullet points factual.
    <section id="experience" className="content-panel section-anchor experience-panel">
      <div className="section-heading">
        <div><p className="eyebrow">WHERE I’VE LEARNED</p><h2>My <span>Journey</span></h2></div>
        <p className="heading-description">Experience is also about the problems you’ve worked on and the lessons you’ve carried forward.</p>
      </div>
      <div className="timeline">
        {portfolio.experience.map((item, index) => (
          <motion.article className="timeline-item" key={`${item.organization}-${item.role}`} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <div className="timeline-marker"><Briefcase size={17} /></div>
            <div className="timeline-date"><CalendarDays size={14} /> {item.period}</div>
            <div className="timeline-main">
              <div className="experience-title-row"><div><h3>{item.role}</h3><p>{item.organization}</p></div><span className="experience-badge"><Sparkles size={12} /> Internship</span></div>
              {item.location && <p className="experience-location"><MapPin size={13} /> {item.location}</p>}
              <ul>{item.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}>{bullet}</li>)}</ul>
            </div>
          </motion.article>
        ))}
      </div>

    </section>
  );
}
