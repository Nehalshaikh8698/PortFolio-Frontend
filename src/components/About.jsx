import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Heart, ArrowUpRight } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';

export default function About() {
  const about = portfolio.about;
  return (
    // ABOUT SECTION: personalize the paragraphs, degree, college, year, and interests in data/portfolio.js.
    <section id="about" className="content-panel section-anchor">
      <div className="section-heading">
        <div><p className="eyebrow">{about.eyebrow}</p><h2>{about.title}</h2></div>
        <span className="section-index">01 / ABOUT</span>
      </div>
      <div className="about-layout">
        <motion.div className="about-copy" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {about.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          <a className="text-link" href={portfolio.resumePath} target="_blank" rel="noreferrer">More about my journey <ArrowUpRight size={15} /></a>
        </motion.div>
        <div className="about-facts">
          <article className="fact-card">
            <div className="fact-icon fact-purple"><GraduationCap size={19} /></div>
            <div><span className="fact-label">Education</span><strong>{about.education}</strong><small>{about.college}</small><small>Expected graduation: {about.graduation}</small></div>
          </article>
          <article className="fact-card">
            <div className="fact-icon fact-blue"><MapPin size={19} /></div>
            <div><span className="fact-label">Based in</span><strong>{portfolio.location}</strong><small>Interested in on-site, hybrid, or remote opportunities.</small></div>
          </article>
          <article className="fact-card">
            <div className="fact-icon fact-pink"><Heart size={19} /></div>
            <div><span className="fact-label">Things I enjoy</span><div className="interest-list">{about.interests.map((interest) => <span key={interest}>{interest}</span>)}</div></div>
          </article>
        </div>
      </div>
    </section>
  );
}
