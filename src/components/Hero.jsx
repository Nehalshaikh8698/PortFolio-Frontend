import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Briefcase, Code2, Layers3, Mail, Sparkles, TrendingUp } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';

const statIcons = [Layers3, Briefcase, Code2, TrendingUp];

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="hero-section section-anchor">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-main">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="hello-pill"><span className="hello-wave">👋</span> Hello, I’m</div>
          <h1>{portfolio.name.split(' ')[0]} <span>{portfolio.name.split(' ').slice(1).join(' ')}</span></h1>
          <h2>{portfolio.roleLines[0]}<br />{portfolio.roleLines[1]}</h2>
          <p className="hero-description">{portfolio.intro}</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => onNavigate('projects')}>View My Work <ArrowDownRight size={17} /></button>
            <button className="button button-outline" onClick={() => onNavigate('contact')}><Mail size={16} /> Let’s Connect</button>
          </div>
          <div className="hero-location"><Sparkles size={14} /> <span>{portfolio.location}</span><span className="dot-separator">·</span><span>Open to opportunities</span></div>
        </motion.div>

        {/* HERO VISUAL: initials are shown by default. Add your own portrait to public/profile.jpg and set avatarPath in portfolio.js. */}
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12, duration: 0.8 }}>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="portrait-glow" />
          <div className="hero-portrait">
            {portfolio.avatarPath ? <img src={portfolio.avatarPath} alt={`${portfolio.name} portrait`} /> : <div className="portrait-placeholder"><span>NS</span><small>YOUR PHOTO</small></div>}
          </div>
          <div className="floating-tech tech-react"><span>⚛</span><small>React</small></div>
          <div className="floating-tech tech-js"><span>JS</span><small>JavaScript</small></div>
          <div className="floating-tech tech-python"><span>🐍</span><small>Python</small></div>
          <div className="floating-note"><Sparkles size={14} /><span>Turning ideas<br />into impact</span></div>
          <div className="handwritten-note">Build<br />Learn<br />Grow <ArrowUpRight size={18} /></div>
        </motion.div>
      </div>

      {/* QUICK STATS: edit portfolio.stats in src/data/portfolio.js; use truthful, verifiable figures only. */}
      <div className="stats-grid">
        {portfolio.stats.map((stat, index) => {
          const Icon = statIcons[index % statIcons.length];
          return (
            <motion.article className="stat-card" key={stat.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <div className={`stat-icon stat-icon-${index}`}><Icon size={19} /></div>
              <div><strong>{stat.value}</strong><span>{stat.label}</span></div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
