import { Activity, Crosshair, Terminal, Zap, ShieldCheck } from 'lucide-react';
import { portfolioData } from './data/portfolioData';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="scanlines fixed inset-0 z-50 opacity-20 mix-blend-overlay"></div>
      
      <main className="max-w-6xl mx-auto px-6 py-16 relative z-10 flex flex-col gap-32">
        <header className="relative border-l-2 border-cyan-500 pl-8 py-2">
          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#08090D] border-2 border-cyan-500 flex items-center justify-center">
            <div className="w-1 h-1 bg-cyan-400"></div>
          </div>
          
          <div className="font-mono text-xs tracking-widest text-cyan-400 uppercase mb-6 flex items-center gap-3">
            <span>[ ID: {portfolioData.profile.name.replace(/\s+/g, '_')} ]</span>
            <span className="w-8 h-[1px] bg-cyan-500/30"></span>
            <span>LOC: {portfolioData.profile.location}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4">
            {portfolioData.profile.name}
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-widest mb-8">
            {portfolioData.profile.role}
          </h2>

          <div className="bg-[#0D1017] border border-[#1A1F2E] p-6 max-w-3xl mb-8 relative">
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-slate-600"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-slate-600"></div>
            <strong className="text-cyan-400 block mb-2 font-mono text-sm uppercase">&gt; {portfolioData.profile.headline}</strong>
            <p className="text-slate-300 leading-relaxed text-lg">{portfolioData.profile.bio}</p>
          </div>

          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <a href={`mailto:${portfolioData.profile.email}`} className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 px-8 py-3 hover:bg-cyan-400 hover:text-[#08090D] transition-all flex items-center gap-2 uppercase">
              <Terminal size={16} /> Open Channel
            </a>
            <div className="flex items-center px-6 py-3 border border-[#1A1F2E] text-slate-500 bg-[#0A0C11]">
              <Activity className="w-4 h-4 mr-3 text-amber-500 animate-pulse" /> 
              STATUS: DEPLOYED
            </div>
          </div>
        </header>

        <section className="border-y border-[#1A1F2E] py-4 bg-[#0A0C11] flex flex-col md:flex-row md:items-center gap-6 overflow-hidden">
          <div className="font-mono text-xs text-slate-500 uppercase whitespace-nowrap shrink-0">
            [ ACTIVE_FRANCHISES ]
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-bold text-slate-300 uppercase tracking-wider">
            {portfolioData.ticker.franchises.map((f: string) => (
              <span key={f} className="flex items-center gap-2">
                <Crosshair size={12} className="text-cyan-500/50" /> {f}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-mono text-xs text-slate-500 uppercase mb-8 flex items-center gap-4">
            <ShieldCheck size={16} className="text-cyan-400" /> Operational Impact Matrix
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.impactMatrix.map((item: { metric: string; label: string; context: string; tag: string }, idx: number) => (
              <div key={idx} className="bg-[#0D1017] border border-[#1A1F2E] p-8 relative group hover:border-cyan-500/30 transition-colors">
                <div className="absolute top-4 right-4 font-mono text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-1 border border-emerald-400/20">
                  {item.tag}
                </div>
                <div className="text-5xl font-black text-white mb-2 tracking-tighter">{item.metric}</div>
                <div className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-1">{item.label}</div>
                <div className="font-mono text-xs text-slate-500">{item.context}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-mono text-xs text-slate-500 uppercase mb-8 flex items-center gap-4">
            <Zap size={16} className="text-amber-500" /> Strategic Execution Sequence
          </h3>
          <div className="space-y-4">
            {portfolioData.roadmap.map((step: { id: string; title: string; desc: string }) => (
              <div key={step.id} className="flex flex-col md:flex-row gap-6 bg-[#0A0C11] border border-[#1A1F2E] p-6 items-start">
                <div className="font-mono text-2xl text-slate-600 font-black">{step.id.replace('PHASE_', '')}</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-200 uppercase tracking-wide mb-2">{step.title}</h4>
                  <p className="text-slate-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h3 className="font-mono text-xs text-slate-500 uppercase mb-8">[ BATTLE-TESTED DEPLOYMENTS ]</h3>
          <div className="grid grid-cols-1 gap-8">
            {portfolioData.caseStudies.map((cs: { id: string; title: string; problem: string; execution: string; result: string }) => (
              <article key={cs.id} className="border border-[#1A1F2E] bg-[#0D1017]">
                <div className="border-b border-[#1A1F2E] px-6 py-3 font-mono text-xs text-cyan-400 flex justify-between bg-[#0A0C11]">
                  <span>FILE: {cs.id}</span>
                  <span>STATUS: RESOLVED</span>
                </div>
                <div className="p-8">
                  <h4 className="text-3xl font-black text-white uppercase tracking-tight mb-6">{cs.title}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h5 className="font-mono text-xs text-amber-500 mb-2 uppercase">Target Profile</h5>
                      <p className="text-slate-300 text-sm">{cs.problem}</p>
                    </div>
                    <div>
                      <h5 className="font-mono text-xs text-cyan-500 mb-2 uppercase">Tactical Execution</h5>
                      <p className="text-slate-300 text-sm">{cs.execution}</p>
                    </div>
                    <div>
                      <h5 className="font-mono text-xs text-emerald-500 mb-2 uppercase">Audited Result</h5>
                      <p className="text-slate-300 text-sm">{cs.result}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
