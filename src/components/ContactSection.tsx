import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Linkedin, 
  Github, 
  ExternalLink, 
  MessageSquare, 
  Clock,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    onShowToast(`Copied ${label} (${text}) to clipboard!`);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleQuickPreset = (presetSubject: string, presetText: string) => {
    setSubject(presetSubject);
    setMessage(presetText);
    onShowToast(`Applied inquiry preset: ${presetSubject}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) return;

    // Trigger mailto link for direct sending
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || `Recruiter Inquiry from ${senderName}`
    )}&body=${encodeURIComponent(
      `Hello Joan,\n\n${message}\n\nFrom: ${senderName} (${senderEmail})`
    )}`;

    window.location.href = mailtoUrl;
    setSentSuccess(true);
    onShowToast('Drafting message in your default email client...');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-stone-200/80 dark:border-stone-800/80 bg-stone-50/60 dark:bg-stone-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 flex items-center gap-1.5">
            <Mail className="w-4 h-4" />
            <span>Recruiter & Client Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Get in Touch / Discuss Remote Opportunities
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
            Interested in discussing open IT Support, Technical VA, or Junior Python developer roles? Reach out directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Quick Copy Channels */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Contact Channels Card */}
            <div className="bg-white dark:bg-stone-850 rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono">
                Direct Contact Information
              </h3>

              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-100 dark:border-stone-800">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-stone-500 font-mono">Email Address</div>
                      <div className="text-xs font-semibold text-stone-900 dark:text-white font-mono truncate">
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                    className="p-1.5 text-stone-400 hover:text-teal-600 dark:hover:text-teal-400 rounded-lg transition"
                    title="Copy Email"
                  >
                    {copiedItem === 'Email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-100 dark:border-stone-800">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-stone-500 font-mono">Phone / WhatsApp / Viber</div>
                      <div className="text-xs font-semibold text-stone-900 dark:text-white font-mono truncate">
                        {PERSONAL_INFO.phone}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone')}
                    className="p-1.5 text-stone-400 hover:text-teal-600 dark:hover:text-teal-400 rounded-lg transition"
                    title="Copy Phone"
                  >
                    {copiedItem === 'Phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-100 dark:border-stone-800">
                  <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-stone-500 font-mono">Current Location</div>
                    <div className="text-xs font-semibold text-stone-900 dark:text-white">
                      {PERSONAL_INFO.location}
                    </div>
                    <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-medium">
                      Available for Remote Worldwide Timezones
                    </div>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-2 border-t border-stone-100 dark:border-stone-800 grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs flex items-center justify-between hover:border-teal-500 transition group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-sky-600" />
                    <span className="font-semibold text-stone-800 dark:text-stone-200">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-teal-600" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs flex items-center justify-between hover:border-teal-500 transition group"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-stone-900 dark:text-white" />
                    <span className="font-semibold text-stone-800 dark:text-stone-200">GitHub</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-teal-600" />
                </a>
              </div>
            </div>

            {/* Recruiter Quick Message Presets */}
            <div className="bg-white dark:bg-stone-850 rounded-2xl p-5 border border-stone-200 dark:border-stone-800 shadow-xs space-y-3">
              <div className="text-xs font-mono font-bold uppercase text-stone-500 dark:text-stone-400">
                1-Click Form Presets for Recruiters:
              </div>
              <div className="grid grid-cols-1 gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickPreset(
                    'Remote IT Support Specialist Opportunity',
                    'Hello Joan, we came across your portfolio and would like to discuss an open Remote IT Support role with our team. Are you available for a brief conversation this week?'
                  )}
                  className="p-2 text-left rounded-lg bg-stone-50 dark:bg-stone-900 hover:bg-teal-50 dark:hover:bg-teal-950/40 border border-stone-200/80 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 transition flex items-center justify-between"
                >
                  <span>💻 Remote IT Support Specialist Role</span>
                  <span className="text-[10px] font-mono text-teal-600">Apply Preset</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickPreset(
                    'Technical Virtual Assistant / Executive Operations Position',
                    'Hello Joan, we are seeking a Technical Virtual Assistant with strong document management (BIR ORUS, spreadsheets, Google Workspace) and administrative coordination skills. We would love to review your background.'
                  )}
                  className="p-2 text-left rounded-lg bg-stone-50 dark:bg-stone-900 hover:bg-teal-50 dark:hover:bg-teal-950/40 border border-stone-200/80 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 transition flex items-center justify-between"
                >
                  <span>📋 Technical VA / Legal Operations Role</span>
                  <span className="text-[10px] font-mono text-teal-600">Apply Preset</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickPreset(
                    'Junior Python / Automation Developer Opportunity',
                    'Hello Joan, we reviewed your AROMIN HR Mini System and Python/SQLite project work. We have a Junior Python / Automation developer opening and would like to interview you.'
                  )}
                  className="p-2 text-left rounded-lg bg-stone-50 dark:bg-stone-900 hover:bg-teal-50 dark:hover:bg-teal-950/40 border border-stone-200/80 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 transition flex items-center justify-between"
                >
                  <span>🐍 Junior Python Developer Role</span>
                  <span className="text-[10px] font-mono text-teal-600">Apply Preset</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Message Form */}
          <div className="lg:col-span-7 bg-white dark:bg-stone-850 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-stone-100 dark:border-stone-800 pb-3 mb-2">
                <h3 className="text-base font-bold text-stone-900 dark:text-white">
                  Send Direct Inquiry
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Sends directly to Joan's primary inbox (<span className="font-mono text-teal-700 dark:text-teal-400">jherizalyn@gmail.com</span>)
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                    Work / Contact Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="e.g. sjenkins@company.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:border-teal-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                  Subject / Position Inquiry
                </label>
                <input
                  type="text"
                  placeholder="e.g. Remote IT Support Specialist Opportunity"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Hello Joan, we would love to discuss an opportunity with our team..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-xl p-3.5 text-xs text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:border-teal-500 leading-relaxed"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-stone-500 dark:text-stone-400">
                  ⚡ Typically responds within 24 business hours.
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition shadow-sm hover:shadow"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>
              </div>

              {sentSuccess && (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 rounded-xl text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Email client opened! You can also copy contact details on the left to send manually.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
