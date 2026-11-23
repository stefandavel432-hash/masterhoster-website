'use client';

import React, { useState } from 'react';
import { TowerControl, Radio, Activity, ShieldCheck, Zap } from 'lucide-react';

type NetworkOrbCanvasProps = {
  onSelectTown?: (town: string) => void;
};

export const NetworkOrbCanvas: React.FC<NetworkOrbCanvasProps> = ({
  onSelectTown,
}) => {
  const towns = [
    { name: 'Balfour', distance: 'Local Hub', ping: '4ms' },
    { name: 'Heidelberg', distance: '12 km', ping: '8ms' },
    { name: 'Nigel', distance: '24 km', ping: '11ms' },
    { name: 'Greylingstad', distance: '32 km', ping: '14ms' },
    { name: 'Grootvlei', distance: '28 km', ping: '12ms' },
    { name: 'Vaal', distance: '41 km', ping: '15ms' },
  ];

  const [activeTown, setActiveTown] = useState<string | null>(null);

  const handleSelect = (town: string) => {
    setActiveTown(town);
    if (onSelectTown) {
      onSelectTown(town);
    } else {
      // dispatch a global custom event for listeners that may not use the prop
      window.dispatchEvent(
        new CustomEvent('masterhoster:select-town', { detail: town })
      );
    }
  };

  return (
    <div className="w-full max-w-xl rounded-2xl bg-slate-900/90 border border-cyan-500/25 shadow-[0_0_50px_-12px_rgba(6,182,212,0.22)] relative overflow-hidden p-6">
      {/* Dual radial glows */}
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <TowerControl className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Highveld Microwave Core
            </h4>
            <p className="text-xs text-slate-400">Primary Wireless Backbone</p>
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          99.9% Online
        </div>
      </div>

      {/* Grid of Town Nodes */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {towns.map((town) => {
          const isActive = activeTown === town.name;
          return (
            <button
              key={town.name}
              type="button"
              onClick={() => handleSelect(town.name)}
              className={`w-full p-3 rounded-xl flex items-center justify-between transition-all border ${isActive ? 'border-cyan-500 bg-slate-800/70' : 'border-slate-800/80 bg-slate-950/60'} hover:border-cyan-500/40 group`}
            >
              <div className="flex items-center gap-2.5">
                <Radio className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs font-semibold text-slate-200">{town.name}</div>
                  <div className="text-[10px] text-slate-400">{town.distance}</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                  {town.ping}
                </span>
                {/* live signal dot */}
                <span className="block w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Telemetry Footer */}
      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800 text-center">
        <div className="p-2 rounded-lg border border-slate-800 bg-slate-950/75">
          <div className="flex items-center justify-center gap-1 text-cyan-400 text-xs mb-0.5">
            <Zap className="w-3 h-3" /> <span className="font-bold">&lt;15ms</span>
          </div>
          <div className="text-[10px] text-slate-400">Avg Latency</div>
        </div>
        <div className="p-2 rounded-lg border border-slate-800 bg-slate-950/75">
          <div className="flex items-center justify-center gap-1 text-emerald-400 text-xs mb-0.5">
            <ShieldCheck className="w-3 h-3" /> <span className="font-bold">99.9%</span>
          </div>
          <div className="text-[10px] text-slate-400">Tower Uptime</div>
        </div>
        <div className="p-2 rounded-lg border border-slate-800 bg-slate-950/75">
          <div className="flex items-center justify-center gap-1 text-purple-400 text-xs mb-0.5">
            <Activity className="w-3 h-3" /> <span className="font-bold">1 Gbps</span>
          </div>
          <div className="text-[10px] text-slate-400">Backhaul</div>
        </div>
      </div>
    </div>
  );
};

export default NetworkOrbCanvas;
