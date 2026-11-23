'use client';
import React, { useState } from "react";
import Link from "next/link";

/**
 * SpeedTestSection – a glass‑morphic card that runs a lightweight network test.
 * It measures latency, jitter, packet loss, download and (simulated) upload speed.
 * The implementation uses simple fetch timing against a tiny static asset for ping
 * and a larger asset for download speed. Upload speed is mocked because a real
 * endpoint is unavailable in this demo.
 */
export const SpeedTestSection: React.FC = () => {
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [latency, setLatency] = useState<number | null>(null);
  const [jitter, setJitter] = useState<number | null>(null);
  const [packetLoss, setPacketLoss] = useState<number | null>(null);
  const [download, setDownload] = useState<number | null>(null);
  const [upload, setUpload] = useState<number | null>(null);

  const SAMPLE_COUNT = 5; // number of pings to compute jitter & loss
  const SMALL_ASSET = "/favicon.ico"; // tiny file for latency pings
  const LARGE_ASSET = "/placeholder-icasa-badge.png"; // approx 30‑KB, use as download sample

  const runTest = async () => {
    setRunning(true);
    setFinished(false);
    // ---------- LATENCY & PACKET LOSS ----------
    const pingTimes: number[] = [];
    let lost = 0;
    for (let i = 0; i < SAMPLE_COUNT; i++) {
      const start = performance.now();
      try {
        await fetch(SMALL_ASSET + "?t=" + Date.now()); // cache‑bust
        const duration = performance.now() - start;
        pingTimes.push(duration);
      } catch {
        lost++;
      }
    }
    const avgLatency = pingTimes.reduce((a, b) => a + b, 0) / pingTimes.length || 0;
    const jitterVal = pingTimes.reduce((sum, val) => sum + Math.pow(val - avgLatency, 2), 0);
    const jitterStd = Math.sqrt(jitterVal / pingTimes.length) || 0;
    setLatency(Math.round(avgLatency));
    setJitter(Math.round(jitterStd));
    setPacketLoss(Math.round((lost / SAMPLE_COUNT) * 100));

    // ---------- DOWNLOAD SPEED ----------
    try {
      const start = performance.now();
      const resp = await fetch(LARGE_ASSET + "?t=" + Date.now());
      const blob = await resp.blob();
      const durationSec = (performance.now() - start) / 1000;
      const bits = blob.size * 8;
      const mbps = (bits / durationSec) / 1_000_000;
      setDownload(Math.round(mbps));
    } catch {
      setDownload(null);
    }

    // ---------- UPLOAD SPEED (simulated) ----------
    // In a real app we'd POST data to an endpoint; here we just fake a value.
    const simulatedUpload = Math.round((Math.random() * 5 + 5) * 10) / 10; // 5‑15 Mbps
    setUpload(simulatedUpload);

    setRunning(false);
    setFinished(true);
  };

  const summaryCta = (
    <div className="mt-4 p-4 bg-slate-800/60 backdrop-blur-md rounded-lg text-center">
      <p className="text-cyan-300 mb-2">
        Experiencing high ping or dropped packets on your current ISP? MasterHoster offers
        low‑latency microwave backhaul with &lt;15 ms local latency across Balfour &amp; Heidelberg.
      </p>
      <Link
        href="/packages"
        className="inline-block mt-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded"
      >
        Check MasterHoster Packages
      </Link>
    </div>
  );

  return (
    <section className="w-full max-w-4xl mx-auto my-12 p-6 bg-slate-900/80 backdrop-blur-lg border border-slate-700 rounded-2xl text-white">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Network Speed & Quality Test</h2>
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={runTest}
          disabled={running}
          className={`px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium rounded ${running ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {running ? "Testing…" : "Start Network Test"}
        </button>
        {finished && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
            <Metric label="Latency (Ping)" value={latency != null ? `${latency} ms` : "—"} />
            <Metric label="Jitter" value={jitter != null ? `${jitter} ms` : "—"} />
            <Metric label="Packet Loss" value={packetLoss != null ? `${packetLoss}%` : "—"} />
            <Metric label="Download Speed" value={download != null ? `${download} Mbps` : "—"} />
            <Metric label="Upload Speed" value={upload != null ? `${upload} Mbps` : "—"} />
          </div>
        )}
        {finished && (latency != null && packetLoss != null && (latency > 35 || packetLoss > 0)) && summaryCta}
      </div>
    </section>
  );
};

interface MetricProps {
  label: string;
  value: string;
}

const Metric: React.FC<MetricProps> = ({ label, value }) => (
  <div className="p-3 bg-slate-800/60 rounded-lg text-center">
    <p className="text-sm text-slate-400">{label}</p>
    <p className="text-lg font-semibold text-cyan-300">{value}</p>
  </div>
);
