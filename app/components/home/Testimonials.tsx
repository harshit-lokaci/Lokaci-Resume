'use client'

import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import PoweredByLokaci from "../other/PoweredByLokaci";

const testimonials = [
  {
    name: "Alice Johnson",
    handle: "@alicepm",
    avatar: "/profile-placeholder-image.jpg",
    quote:
      "This product transformed our workflow! The team is impressed with its speed and usability.",
  },
  {
    name: "Mark Thompson",
    handle: "@markbuilds",
    avatar: "/profile-placeholder-image.jpg",
    quote:
      "Absolutely amazing experience. The features are intuitive and the support is top-notch!",
  },
  {
    name: "Sophie Lee",
    handle: "@sophieux",
    avatar: "/profile-placeholder-image.jpg",
    quote:
      "I love the clean design and smooth interactions. It makes collaboration a breeze!",
  },
  {
    name: "Jordan Lee",
    handle: "@jordantalks",
    avatar: "/profile-placeholder-image.jpg",
    quote:
      "Clean UI, fast performance, and a joy to use. Helped our team ship faster.",
  },
  {
    name: "Briar Martin",
    handle: "@neilstellar",
    avatar: "/profile-placeholder-image.jpg",
    quote:
      "Made undercutting all of our competitors an absolute breeze.",
  },
  {
    name: "Avery Johnson",
    handle: "@averywrites",
    avatar: "/profile-placeholder-image.jpg",
    quote:
      "The templates are modern and effective. Our recruiters noticed the difference.",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="shrink-0 w-[380px] bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-4">
        <Image
          src={t.avatar}
          alt={t.name}
          width={44}
          height={44}
          className="rounded-full ring-2 ring-yellow-100"
        />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 leading-tight truncate">{t.name}</p>
          <p className="text-sm text-gray-500 truncate">{t.handle}</p>
        </div>
        <div className="flex items-center gap-1 text-yellow-500">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>
      </div>
      <div className="flex gap-2 text-gray-700">
        <FaQuoteLeft className="mt-1 text-yellow-400" />
        <p className="leading-relaxed">
          {t.quote}
        </p>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  speed = "15s",
}: {
  items: typeof testimonials;
  direction?: "left" | "right";
  speed?: string;
}) {
  const track = [...items, ...items];
  const duration = parseInt(speed);

  const marqueeVariants = {
    animate: {
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <motion.div
        className="flex gap-6 py-2"
        variants={marqueeVariants}
        animate="animate"
      >
        {track.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  const topRow = testimonials;
  const bottomRow = [...testimonials].reverse();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-20 text-center lg:py-32">
        <div className="flex justify-center">
          <PoweredByLokaci text="Testimonials" Icon={FaStar} />
        </div>
        <h2 className="mt-4 text-4xl font-extrabold tracking-wide text-gray-900 sm:text-5xl">
          Don’t just take our <span className="text-yellow-600">word</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Hear what our users say about us. We’re always looking for ways to improve.
          If you’ve had a positive experience, leave a review.
        </p>
        <div className="mt-12 space-y-8">
          <MarqueeRow items={topRow} direction="left" speed="15s" />
          <MarqueeRow items={bottomRow} direction="right" speed="15s" />
        </div>
      </div>
    </section>
  );
}