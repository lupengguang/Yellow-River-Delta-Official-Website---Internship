import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

export const IMG = (prompt, size) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;

const ACCENTS = {
  emerald: 'from-emerald-500 to-teal-600 shadow-emerald-500/30',
  teal: 'from-teal-500 to-cyan-600 shadow-teal-500/30',
  blue: 'from-sky-500 to-indigo-600 shadow-sky-500/30'
};

export const SectionTitle = ({ index, title, subtitle, accent = 'emerald' }) => (
  <div className="flex items-start gap-4 mb-8">
    <span
      className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${ACCENTS[accent]} text-white font-bold text-lg flex items-center justify-center shadow-lg`}
    >
      {index}
    </span>
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
      {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
    </div>
  </div>
);

// 跟随鼠标倾斜的玻璃卡片
export function TiltCard({ children, className = '', base = 'glass-card', intensity = 7 }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    const el = ref.current;
    if (!el || window.matchMedia('(hover: none)').matches) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * intensity).toFixed(
      2
    )}deg) rotateY(${(px * intensity).toFixed(2)}deg) translateY(-6px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`topic-tilt ${base} ${className}`}
    >
      {children}
    </div>
  );
}

export function TopicHero({ kicker, title, description, image, alt, stats = [] }) {
  return (
    <>
      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img src={image} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-[#eef5f3]" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-20 md:pb-24">
            <div className="max-w-3xl glass-panel p-6 md:p-8">
              <p className="text-emerald-700 font-medium tracking-wide mb-2">{kicker}</p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                {title}
              </h1>
              <p className="text-gray-700 text-sm md:text-base mb-0">{description}</p>
            </div>
          </div>
        </div>
      </section>

      {stats.length > 0 && (
        <section className="container mx-auto px-4 -mt-10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((item) => (
              <TiltCard key={item.label} base="glass-card-soft" className="p-5 text-center">
                <p className="text-lg md:text-2xl font-bold text-emerald-700 mb-1 topic-float">
                  {item.value}
                </p>
                <p className="text-sm text-gray-700 font-medium leading-snug">{item.label}</p>
                {item.note && <p className="text-xs text-gray-500 mt-1">{item.note}</p>}
              </TiltCard>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

// 悬停/聚焦展开的条目
export function RevealRow({ title, badge, children, className = '' }) {
  return (
    <div tabIndex={0} className={`group topic-row ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="topic-dot" aria-hidden="true" />
          <h3 className="font-semibold text-gray-800 text-sm md:text-base leading-snug">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {badge && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 whitespace-nowrap">
              {badge}
            </span>
          )}
          <svg
            className="topic-chevron w-4 h-4 text-emerald-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="hover-expand">
        <div className="pt-3 text-sm text-gray-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

// 页尾继续浏览
export function TopicNav({ items }) {
  return (
    <section className="container mx-auto px-4 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="glass-card topic-sheen group flex items-center justify-between p-6"
          >
            <div>
              <p className="text-xs text-emerald-700 mb-1">继续浏览</p>
              <p className="text-lg font-semibold text-gray-800 mb-0">{item.label}</p>
            </div>
            <span className="text-emerald-600 text-xl transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
