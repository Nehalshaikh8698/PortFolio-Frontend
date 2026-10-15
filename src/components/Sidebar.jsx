import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, UserRound, Layers, FolderKanban, Briefcase, Mail,
  Download, Github, Linkedin, Menu, X, Moon, Sun,
} from 'lucide-react';
import { portfolio } from '../data/portfolio.js';

const navigation = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: UserRound },
  { id: 'skills', label: 'Skills', icon: Layers },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Sidebar({ activeSection, onNavigate, theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = (id) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* MOBILE TOP BAR: visible on small screens; opens the same navigation drawer. */}
      <header className="mobile-topbar">
        <button className="icon-button menu-trigger" onClick={() => setMobileOpen(true)} aria-label="Open navigation">
          <Menu size={20} />
        </button>
        <a href="#home" className="brand" onClick={() => navigate('home')}>{portfolio.name.split(' ')[0]} <span>{portfolio.name.split(' ').slice(1).join(' ')}</span></a>
        <button className="icon-button" onClick={onToggleTheme} aria-label="Toggle color theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </header>

      {/* MOBILE OVERLAY: tapping outside the drawer closes it. */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.button
            className="mobile-overlay"
            aria-label="Close navigation overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR: update the navigation array above if you add or rename sections. */}
      <motion.aside
        className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}
      >
        <button className="sidebar-close icon-button" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X size={18} /></button>

        {/* PROFILE SUMMARY: replace avatarPath in src/data/portfolio.js to show your own image. */}
        <div className="sidebar-profile">
          <a href="#home" className="avatar avatar-small" onClick={() => navigate('home')} aria-label="Back to home">
            {portfolio.avatarPath ? <img src={portfolio.avatarPath} alt={`${portfolio.name} portrait`} /> : <span>NS</span>}
            <span className="online-dot" />
          </a>
          <a href="#home" className="sidebar-name" onClick={() => navigate('home')}>{portfolio.name.split(' ')[0]} <span>{portfolio.name.split(' ').slice(1).join(' ')}</span></a>
          <p>{portfolio.roleLines[0]}</p>
          <p>{portfolio.roleLines[1]}</p>
        </div>

        <div className="sidebar-divider" />

        <nav className="side-nav" aria-label="Main navigation">
          {navigation.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`nav-link ${activeSection === id ? 'nav-link-active' : ''}`}
              onClick={() => navigate(id)}
              aria-current={activeSection === id ? 'page' : undefined}
            >
              <Icon size={18} strokeWidth={1.8} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          {/* RESUME: add your actual PDF to frontend/public/resume.pdf. */}
          <a className="button button-primary resume-button" href={portfolio.resumePath} target="_blank" rel="noreferrer">
            <Download size={16} /> AI & DATA Engi.
          </a>
          <a className="button button-primary resume-button" href={portfolio.resumePath1} target="_blank" rel="noreferrer">
            <Download size={16} /> Software Developer
          </a>
          <div className="social-row sidebar-socials">
            {portfolio.socials.github && <a className="social-link" href={portfolio.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>}
            {portfolio.socials.linkedin && <a className="social-link social-text-icon" href={portfolio.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>}
            <a className="social-link" href={`mailto:${portfolio.socials.email}`} aria-label="Email"><Mail size={17} /></a>
            <button className="social-link" onClick={onToggleTheme} aria-label="Toggle color theme">
              {theme === 'dark' ? <Moon size={17} /> : <Sun size={17} />}
            </button>
          </div>
          <p className="sidebar-copyright">© {new Date().getFullYear()} {portfolio.name}<br /><span>Made with React & curiosity ♥</span></p>
        </div>
      </motion.aside>
    </>
  );
}
