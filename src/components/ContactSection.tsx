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
    <section id="contact" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-mono font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
            <Mail className="w-4 h-4" />
            <span>Recruiter & Client Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Get in Touch / Discuss Remote Roles
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Open for remote IT Support, Technical Virtual Assistant, or Junior Python developer opportunities.
          </p>
        </div>

        {/* Contact Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Direct Info & 1-Click Presets */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Channels Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-xs font-mono font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Direct Contact Channels
              </h3>

              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-slate-400 font-mono font-bold uppercase">Email Address</div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white font-mono truncate">
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                    className="p-1.5 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition"
                    title="Copy Email"
                  >
                    {copiedItem === 'Email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] text-slate-400 font-mono font-bold uppercase">Phone / Viber / WhatsApp</div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white font-mono truncate">
                        {PERSONAL_INFO.phone}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone')}
                    className="p-1.5 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl transition"
                    title="Copy Phone"
                  >
                    {copiedItem === 'Phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700">
                  <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono font-bold uppercase">Current Base</div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {PERSONAL_INFO.location}
                    </div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      Remote Worldwide Timezone Availability
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs flex items-center justify-between hover:border-blue-500 transition group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-sky-600" />
                    <span className="font-bold text-slate-800 dark:text-slate-200">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs flex items-center justify-between hover:border-blue-500 transition group"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                    <span className="font-bold text-slate-800 dark:text-slate-200">GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                </a>
              </div>
            </div>

            {/* Recruiter Quick Presets Bento Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="text-xs font-mono font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                1-Click Inquiries for Recruiters:
              </div>
              <div className="grid grid-cols-1 gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickPreset(
                    'Remote IT Support Specialist Opportunity',
                    'Hello Joan, we came across your portfolio and would like to discuss an open Remote IT Support role with our team. Are you available for a brief conversation this week?'
                  )}
                  className="p-2.5 text-left rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200/80 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 transition flex items-center justify-between group font-medium"
                >
                  <span>💻 Remote IT Support Role</span>
                  <span className="text-[10px] font-mono font-bold text-blue-600 group-hover:underline">Apply</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickPreset(
                    'Technical Virtual Assistant / Operations Position',
                    'Hello Joan, we are seeking a Technical Virtual Assistant with strong document management (BIR ORUS, spreadsheets, Google Workspace) and administrative coordination skills. We would love to review your background.'
                  )}
                  className="p-2.5 text-left rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200/80 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 transition flex items-center justify-between group font-medium"
                >
                  <span>📋 Technical VA / Legal Operations</span>
                  <span className="text-[10px] font-mono font-bold text-blue-600 group-hover:underline">Apply</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleQuickPreset(
                    'Junior Python / Automation Developer Opportunity',
                    'Hello Joan, we reviewed your AROMIN HR Mini System and Python/SQLite project work. We have a Junior Python / Automation developer opening and would like to interview you.'
                  )}
                  className="p-2.5 text-left rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200/80 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 transition flex items-center justify-between group font-medium"
                >
                  <span>🐍 Junior Python Developer Role</span>
                  <span className="text-[10px] font-mono font-bold text-blue-600 group-hover:underline">Apply</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Message Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-9 border border-slate-200 dark:border-slate-800 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 mb-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Send Direct Inquiry
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Sends directly to Joan's verified inbox (<span className="font-mono text-blue-600 dark:text-blue-400 font-bold">{PERSONAL_INFO.email}</span>)
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Work / Contact Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="e.g. sjenkins@company.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject / Position Inquiry
                </label>
                <input
                  type="text"
                  placeholder="e.g. Remote IT Support Specialist Opportunity"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Hello Joan, we would love to discuss an opportunity with our team..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 leading-relaxed font-medium"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  ⚡ Typically responds within 24 business hours.
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-2xl flex items-center justify-center gap-2 transition shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>
              </div>

              {sentSuccess && (
                <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 rounded-2xl text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
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
