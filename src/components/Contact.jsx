import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { portfolio } from '../data/portfolio.js';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [sending, setSending] = useState(false);

  const updateField = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  // CONTACT FORM: sends data to Express, which validates it and stores it in MongoDB.
  // To enable it, configure MONGODB_URI on the backend and VITE_API_URL on the frontend.
  const submitMessage = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus({ type: '', message: '' });
    try {
      const response = await axios.post(`${API_BASE_URL}/api/contact`, form);
      setStatus({ type: 'success', message: response.data.message || 'Thanks! Your message has been sent.' });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      const message = error.response?.data?.message || 'Could not send the message. Check the backend setup or email me directly.';
      setStatus({ type: 'error', message });
    } finally {
      setSending(false);
    }
  };

  return (
    // CONTACT SECTION: update your email and social URLs in portfolio.js. The backend stores submissions in MongoDB.
    <section id="contact" className="content-panel section-anchor contact-panel">
      <div className="section-heading">
        <div><p className="eyebrow">GET IN TOUCH</p><h2>Let’s <span>Connect</span></h2></div>
        <p className="heading-description">{portfolio.contact.description}</p>
      </div>
      <div className="contact-layout">
        <motion.div className="contact-info" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3>{portfolio.contact.title}</h3>
          <p>I’m happy to hear about opportunities, project ideas, or just to talk technology.</p>
          <a className="contact-detail" href={`mailto:${portfolio.email}`}><span className="contact-detail-icon contact-email"><Mail size={18} /></span><span><small>Email me</small><strong>{portfolio.email}</strong></span><ArrowUpRight size={15} /></a>
          <div className="contact-detail"><span className="contact-detail-icon contact-location"><MapPin size={18} /></span><span><small>Location</small><strong>{portfolio.location}</strong></span></div>
          <div className="contact-socials">
            {portfolio.socials.github && <a href={portfolio.socials.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>}
            {portfolio.socials.linkedin && <a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>}
          </div>
        </motion.div>

        <motion.form className="contact-form" onSubmit={submitMessage} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
          <div className="form-topline"><span>Send a message</span><span className="form-dot" /></div>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" value={form.name} onChange={updateField} placeholder="Jane Doe" autoComplete="name" minLength={2} maxLength={80} required />
          <label htmlFor="email">Your email</label>
          <input id="email" type="email" name="email" value={form.email} onChange={updateField} placeholder="jane@example.com" autoComplete="email" maxLength={254} required />
          <label htmlFor="message">Your message</label>
          <textarea id="message" name="message" value={form.message} onChange={updateField} placeholder="Tell me a little about your message…" rows={4} minLength={10} maxLength={3000} required />
          {status.message && <div className={`form-status form-status-${status.type}`} role="status">{status.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}{status.message}</div>}
          <button className="button button-primary submit-button" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send Message'} <Send size={15} /></button>
          <p className="form-privacy-note">Your message is sent to this portfolio’s backend API and stored in its MongoDB database.</p>
        </motion.form>
      </div>
      <footer className="site-footer"><span>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</span><span>{portfolio.footerNote}</span><a href="#home">Back to top ↑</a></footer>
    </section>
  );
}
