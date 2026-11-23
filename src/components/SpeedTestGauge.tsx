'use client';

import React, { useState } from 'react';

/**
 * Simple placeholder Speed Test Gauge component.
 * Renders a button that simulates a speed test and displays a mock result.
 */
export const SpeedTestGauge: React.FC = () => {
  const [speed, setSpeed] = useState<number | null>(null);
  const [testing, setTesting] = useState(false);

  const runTest = () => {
    setTesting(true);
    // Simulate async test
    setTimeout(() => {
      const fakeSpeed = Math.floor(Math.random() * 100) + 20; // 20-119 Mbps
      setSpeed(fakeSpeed);
      setTesting(false);
    }, 2000);
  };

  return (
    <section className="flex flex-col items-center space-y-4 p-6 bg-slate-800 rounded-lg">
      <h2 className="text-xl font-semibold text-cyan-400">Speed Test Gauge</h2>
      {speed !== null && (
        <div className="text-4xl font-bold text-green-400">{speed} Mbps</div>
      )}
      <button
        onClick={runTest}
        disabled={testing}
        className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded disabled:opacity-50"
      >
        {testing ? 'Testing…' : 'Run Speed Test'}
      </button>
    </section>
  );
};

export default SpeedTestGauge;
