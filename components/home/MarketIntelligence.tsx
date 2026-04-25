'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Brain, Radio, TrendingUp, Zap, Globe2, ShieldCheck, Clock, BarChart3 } from 'lucide-react';

const chartPoints = [42, 38, 55, 48, 62, 58, 70, 65, 78, 72, 85, 80, 92, 88, 95];

function AnimatedCounter({ target, decimals = 0, suffix = '' }: { target: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(value) {
        if (ref.current) ref.current.textContent = value.toFixed(decimals) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, target, decimals, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function LiveChart() {
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView({ current: pathRef.current }, { once: true });
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) setLength(pathRef.current.getTotalLength());
  }, []);

  const w = 400;
  const h = 120;
  const pad = 10;
  const xs = chartPoints.map((_, i) => pad + (i / (chartPoints.length - 1)) * (w - pad * 2));
  const max = Math.max(...chartPoints);
  const min = Math.min(...chartPoints);
  const ys = chartPoints.map(v => h - pad - ((v - min) / (max - min)) * (h - pad * 2));
  const d = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x},${ys[i]}`).join(' ');
  const area = `${d} L${xs[xs.length - 1]},${h} L${xs[0]},${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#chartGrad)" />
      <motion.path
        ref={pathRef}
        d={d}
        fill="none"
        stroke="#C9A84C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      {xs.map((x, i) => (
        i === chartPoints.length - 1 && (
          <motion.circle
            key={i}
            cx={x} cy={ys[i]} r="4"
            fill="#C9A84C"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2, duration: 0.3 }}
          />
        )
      ))}
    </svg>
  );
}

const metrics = [
  { icon: Globe2, label: 'Markets Covered', value: 50, suffix: '+' },
  { icon: Clock, label: 'Avg. Response Time', value: 24, suffix: 'h' },
  { icon: ShieldCheck, label: 'Deal Success Rate', value: 98, suffix: '%' },
  { icon: BarChart3, label: 'Client Satisfaction', value: 4.9, decimals: 1, suffix: '/5' },
];

const ticker = [
  'Methanol FOB Rotterdam · Indicative',
  'CH₃OH ASTM Grade AA · Purity ≥99.85%',
  'CIF Asia Pacific · Available',
  'Chemical Tanker · On Request',
  'Response within 24-48h · Global',
  'Florida LLC · US Registered',
];

export default function MarketIntelligence() {
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTickerIndex(i => (i + 1) % ticker.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-navy-dark section-padding relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-gold text-xs font-semibold uppercase tracking-wider">Live Intelligence</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Brain className="w-3.5 h-3.5 text-gold" />
                <span className="text-white/60 text-xs font-medium">Powered by AI</span>
              </div>
            </div>
            <h2 className="font-inter text-3xl md:text-4xl font-bold text-white">
              Market Intelligence
            </h2>
          </div>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Real-time data processing</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Chart panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 bg-white/[0.03] rounded-2xl border border-gold/10 p-6 hover:border-gold/20 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Methanol Global Demand Index</p>
                <div className="flex items-end gap-2">
                  <span className="font-inter text-3xl font-bold text-white">CH₃OH</span>
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-semibold">+12.4%</span>
                    <span className="text-white/30 text-xs">YTD</span>
                  </div>
                </div>
              </div>
              <span className="text-white/20 text-xs">Indicative · Not financial advice</span>
            </div>

            <div className="h-32 mt-4">
              <LiveChart />
            </div>

            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
              <Zap className="w-4 h-4 text-gold flex-shrink-0" />
              <motion.p
                key={tickerIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="text-white/50 text-sm"
              >
                {ticker[tickerIndex]}
              </motion.p>
            </div>
          </motion.div>

          {/* Metrics column */}
          <div className="grid grid-rows-4 gap-3">
            {metrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/[0.03] rounded-xl border border-gold/10 hover:border-gold/25 hover:bg-white/[0.05] transition-all p-4 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">{m.label}</p>
                    <p className="font-inter text-2xl font-bold text-white">
                      <AnimatedCounter target={m.value} decimals={m.decimals} suffix={m.suffix} />
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* AI badge bottom */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10">
            <Brain className="w-4 h-4 text-gold" />
            <span className="text-white/50 text-sm">
              AI-powered analysis via <span className="text-white/80 font-medium">Claude AI</span> · Integrated into TrustBot
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
