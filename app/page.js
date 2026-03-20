"use client";

import Image from "next/image";
import { useState } from "react";
import NewsletterSignup from "./components/NewsletterSignup";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <>
      {/* HERO – gritty collage banner + book cover overlay */}
      {/* HERO SECTION – SPLIT LAYOUT ON MD+ SCREENS */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="-mt-10 md:mt-0 relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-4  md:mt-0 lg:gap-28 items-center min-h-[90vh]">
            {/* LEFT: BOOK COVER (centered on mobile, right-aligned on desktop) */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-[2/3] drop-shadow-2xl border-4 border-[#00F5FF]/40 rounded-2xl overflow-hidden">
                <Image
                  src="/cover2.jpg"
                  alt="False Positive by Tristan Nettles"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* RIGHT: ALL TEXT + BUTTON (stacked, left-aligned on desktop) */}
            <div className="text-center md:text-left -mt-10 md:mt-0 md:pt-0">
              <div className="hidden  md:block">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-widest text-white leading-none mb-4">
                  FALSE
                  <br />
                  POSITIVE
                </h1>

                <p className="text-2xl sm:text-3xl md:text-4xl text-[#00F5FF] font-light tracking-widest mb-10">
                  A SOUTHERN BOY&apos;S
                  <br />
                  DESCENT INTO THE GLOBAL DRUG WAR
                </p>
              </div>
              <a
                href="https://www.simonandschuster.com/books/False-Positive/Tristan-Nettles/9781592117772"
                target="_blank"
                className="inline-block bg-[#00F5FF] hover:bg-cyan-300 text-black font-bold text-xl md:text-2xl px-12 py-5 rounded-full transition-all shadow-2xl mb-8"
              >
                PRE-ORDER NOW
              </a>

              <p className="text-white/80 text-lg max-w-md md:max-w-none mx-auto md:mx-0">
                Every book sold helps free Ashley Oosthuizen from Thai prison
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SYNOPSIS */}
      <section className="py-24 bg-[#0A0A0A] px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-[#00F5FF] text-center mb-12 tracking-wider">
            THE STORY
          </h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* LEFT: SCROLLABLE TEXT BOX */}
            <div className="bg-[#111111] border border-[#00F5FF]/30 rounded-3xl p-8 md:p-10 max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#00F5FF]/70 scrollbar-track-transparent pr-6">
              <div className="prose prose-invert text-lg leading-relaxed text-white/90">
                <h3 className="text-3xl md:text-4xl font-bold text-[#00F5FF] mb-6 tracking-wide">
                  Synopsis
                </h3>
                <p className="mb-6">
                  <span className="font-bold">False Positive</span> is a
                  gripping, unflinching memoir that takes readers from the
                  American South to global battlefields and prisons, chronicling
                  a life shaped by survival, love, and the pursuit of justice.
                  It is both a modern epic and a raw, authentic exploration of
                  resilience in the face of extreme circumstances.
                </p>

                <p className="mb-6">
                  From a troubled childhood in the American South to the
                  battle-scarred fields of Ukraine,{" "}
                  <span className="font-bold">Tristan Seth Nettles</span> has
                  lived a life that almost defies belief.
                </p>

                <p className="mb-6">
                  Born between wealth and poverty, armed with stubborn
                  determination and a restless spirit, Tristan navigates a world
                  that seems determined to break him to its mold — and somehow
                  survives, grows stronger, and fights back.
                </p>

                <p className="mb-6">
                  False Positive is the true story of a man who outruns his past
                  but never forgets it. As a rambunctious youth, soldier,
                  international dark web drug dealer, outlaw, lover, and
                  mercenary, Tristan travels the world — from armed home
                  invasions in Mississippi to mountain top temples in Nepal,
                  from Southeast Asian prisons to battlefields in Eastern Europe
                  — chasing truth, redemption, and ultimately, justice. When the
                  woman he loves,{" "}
                  <span className="font-bold">Ashley Oosthuizen</span>, is
                  wrongfully imprisoned and sentenced to death in Thailand,
                  Tristan&apos;s mission becomes clear. What began as a reckless
                  search for freedom turns into an international fight for
                  someone else&apos;s.
                </p>
                <p className="mb-6">
                  Told with dark humor, brutal honesty, and heart-stopping
                  intensity, False Positive is a modern epic — a real-life
                  odyssey in the spirit of Forrest Gump and Catch Me If You Can.
                </p>
                <p className="text-[#00f5ff] mb-6">
                  It&apos;s a raw, unforgettable journey through love, loss,
                  crime, war, and the deep, messy beauty of being human.
                </p>
                <div className=" text-center">
                  <a
                    href="https://www.simonandschuster.com/books/False-Positive/Tristan-Nettles/9781592117772"
                    target="_blank"
                    className="bg-[#00F5FF] hover:bg-[#00F5dd] text-black font-bold text-xl px-12 py-4 rounded-full transition-all duration-300 shadow-2xl inline-block"
                  >
                    PRE-ORDER NOW
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: IMAGE (Ashley legal battle poster) */}
            <div className="relative h-[500px]  rounded-3xl overflow-hidden border border-[#00F5FF]/20 shadow-2xl">
              <Image
                src="/ash.jpeg"
                alt="Ashley Oosthuizen - A Legal Battle Still Ongoing"
                fill
                className="object-fit"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
      {/* AT A GLANCE */}
      <section className="py-20 bg-black px-6 border-t border-[#00F5FF]/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#00F5FF] mb-16">
            AT A GLANCE
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-6xl mb-4">📖</div>
              <p className="text-2xl font-bold">True Crime Memoir</p>
              <p className="text-white/70 mt-2">
                Raw, unfiltered, real-life odyssey spanning the globe
              </p>
            </div>
            <div>
              <div className="text-6xl mb-4">📄</div>
              <p className="text-2xl font-bold">673 pages</p>
              <p className="text-white/70 mt-2">
                Split into six corresponding parts
              </p>
            </div>
            <div>
              <div className="text-6xl mb-4">🔥</div>
              <p className="text-2xl font-bold">17+</p>
              <p className="text-white/70 mt-2">
                Mature only. Contains intensely adult themes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION + NEWSLETTER */}
      <section className="py-24 bg-[#0A0A0A] px-6">
        <div className="max-w-2xl mx-auto text-center">
          <NewsletterSignup />
          <div className="mt-8">
            <a
              href="https://www.tristannettles.com"
              target="_blank"
              className="inline-block text-[#00F5FF] hover:text-[#00e5FF] text-xl underline"
            >
              Visit Tristan Nettles Author Site →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-[#00F5FF]/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 mb-8">
            <a
              href="https://www.simonandschuster.com/"
              target="_blank"
              className="text-[#00F5FF] font-bold cursor-pointer"
            >
              SIMON & SCHUSTER
            </a>
            <a
              href="https://histriabooks.com/"
              target="_blank"
              className="text-[#00F5FF] font-bold cursor-pointer"
            >
              HISTRIA BOOKS
            </a>
          </div>
          <p className="text-white/60">
            © 2026 Tristan Nettles • All Rights Reserved
          </p>
          <a
            href="https://www.FreeAshley.org/"
            target="_blank"
            className="text-[#00F5FF]/70 text-sm mt-4 cursor-pointer"
          >
            #FreeAshleyOosthuizen
          </a>
        </div>
      </footer>
    </>
  );
}
