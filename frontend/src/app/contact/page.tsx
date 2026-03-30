"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Sparkles } from "lucide-react";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

// ─── Contact Info Items ───────────────────────────────────
const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    sub: "Mon–Sat, 9 AM – 8 PM",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@easemyvenue.com",
    sub: "We reply within 2 hours",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Monday – Saturday",
    sub: "9:00 AM to 8:00 PM IST",
  },
];

// ─── Corner Ornament ──────────────────────────────────────
function Corner({ className }: { className: string }) {
  return (
    <div className={`absolute w-10 h-10 opacity-25 pointer-events-none ${className}`}>
      <svg viewBox="0 0 40 40" fill="none" stroke="#C9A84C" strokeWidth="1">
        <path d="M2 20 L2 2 L20 2" />
      </svg>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    eventType: "", guests: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST to your API
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#080604] text-[#e8dfc8] min-h-screen pt-16">

        {/* ── Hero ── */}
        <section className="relative h-[280px] overflow-hidden flex items-center justify-center text-center">
          <img
            src="/venues/v1.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-[0.22]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,6,4,0.3),rgba(8,6,4,0.88))]" />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[#080604]" />
          <Corner className="top-5 left-5" />
          <Corner className="top-5 right-5 scale-x-[-1]" />

          <div className="relative z-10 px-6">
            <div className="inline-flex items-center gap-2 border border-[rgba(201,168,76,0.32)] rounded-full px-3.5 py-1.5 text-[#C9A84C] text-[10.5px] font-medium tracking-[0.12em] uppercase bg-[rgba(201,168,76,0.06)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              Get In Touch
            </div>
            <h1 className="font-['Cormorant_Garamond',Georgia,serif] text-[clamp(28px,4.5vw,46px)] font-bold text-[#f5ead8] leading-tight mb-3">
              We'd Love to <em className="italic text-[#C9A84C]">Hear</em> From You
            </h1>
            <p className="text-[13.5px] text-[#7a7060] max-w-md mx-auto leading-relaxed">
              Have a question or need a free venue consultation? Our team responds within 2 hours.
            </p>
          </div>
        </section>

        {/* ── Body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-5 max-w-[1100px] mx-auto px-10 py-8 pb-20">

          {/* ── Left: Contact Info ── */}
          <div className="flex flex-col gap-3.5">
            {contactInfo.map(({ icon: Icon, label, value, sub }) => (
              <div
                key={label}
                className="flex items-start gap-3.5 p-4.5 p-[18px] bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.12)] rounded-[14px] transition-all duration-200 hover:bg-[rgba(201,168,76,0.08)] hover:border-[rgba(201,168,76,0.3)] group"
              >
                <div className="w-[42px] h-[42px] rounded-[11px] border border-[rgba(201,168,76,0.28)] bg-[rgba(201,168,76,0.08)] flex items-center justify-center shrink-0 transition-all group-hover:bg-[rgba(201,168,76,0.18)] group-hover:border-[rgba(201,168,76,0.5)]">
                  <Icon size={18} strokeWidth={1.8} className="text-[#C9A84C]" />
                </div>
                <div>
                  <div className="text-[10.5px] font-semibold tracking-widest uppercase text-[#5a5045] mb-1">{label}</div>
                  <div className="text-[14px] text-[#b09070] font-medium">{value}</div>
                  <div className="text-[11.5px] text-[#4a4035] mt-0.5">{sub}</div>
                </div>
              </div>
            ))}

            {/* AI chat CTA */}
            <div className="p-5 bg-gradient-to-br from-[rgba(201,168,76,0.1)] to-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.25)] rounded-[16px] text-center">
              <Sparkles size={22} strokeWidth={1.8} className="text-[#C9A84C] mx-auto mb-3" />
              <h3 className="font-['Cormorant_Garamond',serif] text-[18px] font-semibold text-[#f0e6cc] mb-1.5">
                Need Instant Help?
              </h3>
              <p className="text-[12.5px] text-[#5a5045] leading-relaxed mb-4">
                Chat with our AI assistant for instant venue recommendations tailored to your event.
              </p>
              <button className="w-full py-2.5 rounded-[11px] bg-[#C9A84C] text-[#0f0d0a] text-[12.5px] font-bold tracking-wide transition-all hover:bg-[#a8843a]">
                Start AI Chat →
              </button>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="bg-[rgba(15,12,8,0.8)] border border-[rgba(201,168,76,0.14)] rounded-[20px] p-7">
            <h2 className="font-['Cormorant_Garamond',serif] text-[22px] font-semibold text-[#f0e6cc] mb-1">
              Send Us a Message
            </h2>
            <p className="text-[12.5px] text-[#5a5045] mb-5 leading-relaxed">
              Our team will get back to you within 2 business hours.
            </p>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.35)] flex items-center justify-center">
                  <Send size={22} className="text-[#C9A84C]" strokeWidth={1.8} />
                </div>
                <h3 className="font-['Cormorant_Garamond',serif] text-[20px] font-semibold text-[#f0e6cc]">Message Sent!</h3>
                <p className="text-[13px] text-[#5a5045] max-w-xs">We've received your message and will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div className="grid grid-cols-2 gap-3">
                  {[["firstName","First Name","Rahul"]].map(([key,label,ph])=>(
                    <div key={key}>
                      <label className="block text-[11px] font-semibold tracking-widest uppercase text-[#5a5045] mb-1.5">{label}</label>
                      <input placeholder={ph} value={(form as any)[key]} onChange={e=>setForm(p=>({...p,[key]:e.target.value}))} className="w-full px-3.5 py-3 rounded-[12px] bg-black/60 border border-[rgba(201,168,76,0.18)] text-[#e8dfc8] placeholder-[#3d3428] text-[13px] outline-none focus:border-[rgba(201,168,76,0.48)] transition-colors"/>
                    </div>
                  ))}
                  <div>
                    <label className="block text-[11px] font-semibold tracking-widest uppercase text-[#5a5045] mb-1.5">Phone Number</label>
                    <input placeholder="+91 98765 43210" value={form.phone} onChange={e=>setForm(p=>({...p,phone:e.target.value}))} className="w-full px-3.5 py-3 rounded-[12px] bg-black/60 border border-[rgba(201,168,76,0.18)] text-[#e8dfc8] placeholder-[#3d3428] text-[13px] outline-none focus:border-[rgba(201,168,76,0.48)] transition-colors"/>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-widest uppercase text-[#5a5045] mb-1.5">Event Type</label>
                    <select value={form.eventType} onChange={e=>setForm(p=>({...p,eventType:e.target.value}))} className="w-full px-3.5 py-3 rounded-[12px] bg-black/60 border border-[rgba(201,168,76,0.18)] text-[#e8dfc8] text-[13px] outline-none focus:border-[rgba(201,168,76,0.48)] transition-colors">
                      <option value="">Select type</option>
                      <option>Wedding</option><option>Reception</option><option>Corporate</option><option>Birthday</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-widest uppercase text-[#5a5045] mb-1.5">Guest Count</label>
                    <input placeholder="e.g. 200" value={form.guests} onChange={e=>setForm(p=>({...p,guests:e.target.value}))} className="w-full px-3.5 py-3 rounded-[12px] bg-black/60 border border-[rgba(201,168,76,0.18)] text-[#e8dfc8] placeholder-[#3d3428] text-[13px] outline-none focus:border-[rgba(201,168,76,0.48)] transition-colors"/>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-widest uppercase text-[#5a5045] mb-1.5">Message</label>
                  <textarea rows={3} placeholder="Tell us about your event, preferred locations, or any questions…" value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))} className="w-full px-3.5 py-3 rounded-[12px] bg-black/60 border border-[rgba(201,168,76,0.18)] text-[#e8dfc8] placeholder-[#3d3428] text-[13px] outline-none focus:border-[rgba(201,168,76,0.48)] transition-colors resize-none"/>
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-[12px] bg-[#C9A84C] text-[#0f0d0a] text-[13px] font-bold tracking-wide transition-all hover:bg-[#a8843a] hover:-translate-y-0.5">
                  Send Message <Send size={14} strokeWidth={2.5} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}