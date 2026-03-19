"use client";

import { useRef } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function NewsletterSignup() {
  const url =
    "https://tristannettles.us6.list-manage.com/subscribe/post?u=3b4d67cc62297380c8173019b&id=b48a3744f0";

  const formRef = useRef(null);

  return (
    <section className="py-20 md:py-16 bg-[#1A1A1A] px-6 md:px-12 border-t border-[#00F5FF]/20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#00F5FF] mb-6 tracking-wider">
          JOIN THE FIGHT
        </h2>
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
          Sign up for updates, exclusive chapters, and news about Ashley&apos;s
          case.
        </p>

        <div className="bg-[#0F0F0F] border border-[#00F5FF]/30 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl shadow-black/40">
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message: mcMessage }) => (
              <form
                ref={formRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!formRef.current.checkValidity()) {
                    formRef.current.reportValidity();
                    return;
                  }

                  const formData = {
                    EMAIL: document.getElementById("mce-EMAIL")?.value || "",
                    FNAME: document.getElementById("mce-FNAME")?.value || "",
                    COUNTRY:
                      document.getElementById("mce-COUNTRY")?.value || "",
                    "gdpr[440]": document.getElementById("gdpr_440")?.checked
                      ? "Y"
                      : "",
                    b_3b4d67cc62297380c8173019b_b48a3744f0: "",
                  };

                  subscribe(formData);
                }}
                className="space-y-6"
              >
                {/* Status Messages - shown directly from the library */}
                {status === "sending" && (
                  <div className="text-[#00F5FF] text-center font-medium">
                    Sending your support...
                  </div>
                )}
                {status === "error" && (
                  <div
                    className="text-red-400 text-center"
                    dangerouslySetInnerHTML={{ __html: mcMessage }}
                  />
                )}
                {status === "success" && (
                  <div className="text-[#00F5FF] text-center font-bold text-xl">
                    ✓ Subscribed! Welcome to the fight. Every copy helps Ashley.
                  </div>
                )}

                {/* Form Fields */}
                <div>
                  <label
                    htmlFor="mce-EMAIL"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Email Address <span className="text-[#00F5FF]">*</span>
                  </label>
                  <input
                    type="email"
                    id="mce-EMAIL"
                    name="EMAIL"
                    required
                    className="w-full px-5 py-4 bg-black border border-[#00F5FF]/50 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-[#00F5FF]"
                    placeholder="freedomfighter@freeashley.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mce-FNAME"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="mce-FNAME"
                    name="FNAME"
                    className="w-full px-5 py-4 bg-black border border-[#00F5FF]/50 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-[#00F5FF]"
                    placeholder="Justice"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mce-COUNTRY"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Country
                  </label>
                  <select
                    id="mce-COUNTRY"
                    name="COUNTRY"
                    className="w-full px-5 py-4 bg-black border border-[#00F5FF]/50 rounded-lg text-white focus:outline-none focus:border-[#00F5FF]"
                  >
                    <option value="">Select...</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* GDPR Consent */}
                <div className="space-y-3 pt-4 border-t border-[#00F5FF]/20">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      id="gdpr_440"
                      name="gdpr[440]"
                      value="Y"
                      required
                      className="mt-1.5 h-5 w-5 rounded border-[#00F5FF]/50 bg-black text-[#00F5FF]"
                    />
                    <span className="text-sm text-white/80">
                      I consent to receiving emails with book teasers, release
                      news, exclusive content, and updates from Tristan Nettles
                      (you can unsubscribe anytime).
                    </span>
                  </label>

                  <p className="text-xs text-white/60">
                    We respect your privacy. Data processed via Mailchimp.{" "}
                    <a
                      href="https://mailchimp.com/legal/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00F5FF] hover:underline"
                    >
                      Learn more
                    </a>
                  </p>
                </div>

                {/* Honeypot */}
                <div className="hidden">
                  <input
                    type="text"
                    name="b_3b4d67cc62297380c8173019b_b48a3744f0"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-[#00F5FF] hover:bg-cyan-300 text-black font-bold text-lg rounded-full transition-all duration-300 disabled:opacity-50"
                >
                  {status === "sending" ? "SUBMITTING..." : "SUBSCRIBE"}
                </button>
              </form>
            )}
          />
        </div>
      </div>
    </section>
  );
}
