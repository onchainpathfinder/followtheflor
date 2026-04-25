"use client";
import { useState } from "react";

type Status = "secure" | "moderate" | "vulnerable" | "exploited";

interface Protocol {
  name: string;
  multisig: string;
  threshold: number;
  total: number;
  timelock: string;
  timelockMinutes: number;
  tvl: string;
  status: Status;
}

const protocols: Protocol[] = [
  { name: "Jupiter Lend", multisig: "4/7", threshold: 4, total: 7, timelock: "12h", timelockMinutes: 720, tvl: "$1.8B", status: "secure" },
  { name: "Kamino", multisig: "5/10", threshold: 5, total: 10, timelock: "12h", timelockMinutes: 720, tvl: "$3.0B", status: "secure" },
  { name: "Solstice", multisig: "3/5", threshold: 3, total: 5, timelock: "24h", timelockMinutes: 1440, tvl: "—", status: "moderate" },
  { name: "Loopscale", multisig: "3/5", threshold: 3, total: 5, timelock: "None", timelockMinutes: 0, tvl: "—", status: "vulnerable" },
  { name: "Exponent", multisig: "2/3", threshold: 2, total: 3, timelock: "None", timelockMinutes: 0, tvl: "—", status: "vulnerable" },
  { name: "Drift", multisig: "2/5", threshold: 2, total: 5, timelock: "None", timelockMinutes: 0, tvl: "$550M → $230M", status: "exploited" },
];

const statusConfig: Record<Status, { bg: string; border: string; badge: string; badgeBg: string; label: string }> = {
  secure: { bg: "rgba(16, 185, 129, 0.08)", border: "rgba(16, 185, 129, 0.25)", badge: "#10B981", badgeBg: "rgba(16, 185, 129, 0.12)", label: "SECURED" },
  moderate: { bg: "rgba(245, 158, 11, 0.06)", border: "rgba(245, 158, 11, 0.2)", badge: "#F59E0B", badgeBg: "rgba(245, 158, 11, 0.12)", label: "MODERATE" },
  vulnerable: { bg: "rgba(239, 68, 68, 0.06)", border: "rgba(239, 68, 68, 0.2)", badge: "#EF4444", badgeBg: "rgba(239, 68, 68, 0.12)", label: "VULNERABLE" },
  exploited: { bg: "rgba(239, 68, 68, 0.12)", border: "rgba(239, 68, 68, 0.5)", badge: "#DC2626", badgeBg: "rgba(220, 38, 38, 0.18)", label: "EXPLOITED" },
};

function TimelockBar({ minutes, label }: { minutes: number; label: string }) {
  const maxMinutes = 1440;
  const width = minutes === 0 ? 3 : Math.max(8, (minutes / maxMinutes) * 100);
  const color = minutes >= 720 ? "#10B981" : minutes > 0 ? "#F59E0B" : "#EF4444";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ width: 120, height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" }}>
        <div style={{ width: `${width}%`, height: "100%", background: color, borderRadius: 3, transition: "width 0.6s ease" }} />
      </div>
      <span style={{ fontSize: 13, fontFamily: "'JetBrains Mono', monospace", color, fontWeight: 600 }}>{label}</span>
    </div>
  );
}

function MultisigRatio({ threshold, total }: { threshold: number; total: number }) {
  const ratio = threshold / total;
  const color = ratio <= 0.4 ? "#10B981" : ratio <= 0.6 ? "#F59E0B" : "#EF4444";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ display: "flex", gap: 3 }}>
        {Array.from({ length: total }, (_, i) => (
          <div key={i} style={{ width: 8, height: 20, borderRadius: 2, background: i < threshold ? color : "rgba(255,255,255,0.08)", transition: "background 0.3s" }} />
        ))}
      </div>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 15, fontWeight: 700, color }}>{threshold}/{total}</span>
    </div>
  );
}

export default function DriftComparison() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0F", color: "#E8E8ED", fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", padding: "40px 20px" }}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet" />
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A78BFA 100%)", padding: "6px 14px", borderRadius: 6, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "white" }}>FLOR ONCHAIN</div>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "'JetBrains Mono', monospace" }}>April 2026</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.15, margin: 0, marginBottom: 16, letterSpacing: "-0.02em" }}>
            Solana DeFi Multisig Security
            <br />
            <span style={{ color: "#EF4444" }}>After the Drift Exploit</span>
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", maxWidth: 680, margin: 0 }}>
            On April 1, 2026, attackers drained $285M from Drift Protocol in 12 minutes using social-engineered multisig approvals and zero timelock. Here&apos;s how other Solana protocols compare.
          </p>
        </div>

        <div style={{ background: "linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(239, 68, 68, 0.04) 100%)", border: "1px solid rgba(239, 68, 68, 0.25)", borderRadius: 12, padding: 28, marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444", boxShadow: "0 0 12px rgba(239,68,68,0.5)", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", color: "#EF4444", textTransform: "uppercase" }}>INCIDENT SUMMARY</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 20 }}>
            {[
              { label: "Amount stolen", value: "$285M" },
              { label: "Time to drain", value: "12 min" },
              { label: "Multisig config", value: "2/5" },
              { label: "Timelock", value: "0 sec" },
              { label: "Attack vector", value: "Social eng." },
              { label: "Attribution", value: "DPRK (suspected)" },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4, fontFamily: "'JetBrains Mono', monospace" }}>{item.label}</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#F87171", fontFamily: "'JetBrains Mono', monospace" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, marginBottom: 4, letterSpacing: "-0.01em" }}>Protocol Comparison</h2>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", margin: 0 }}>Multisig threshold + timelock configuration</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {protocols.map((p, i) => {
            const cfg = statusConfig[p.status];
            const isHovered = hoveredRow === i;
            return (
              <div
                key={p.name}
                onMouseEnter={() => setHoveredRow(i)}
                onMouseLeave={() => setHoveredRow(null)}
                style={{
                  background: isHovered ? "rgba(255,255,255,0.04)" : cfg.bg,
                  border: `1px solid ${isHovered ? "rgba(255,255,255,0.15)" : cfg.border}`,
                  borderRadius: 10,
                  padding: "18px 24px",
                  transition: "all 0.2s ease",
                  display: "grid",
                  gridTemplateColumns: "180px 1fr 1fr 100px",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 2, color: p.status === "exploited" ? "#F87171" : "#E8E8ED", textDecoration: p.status === "exploited" ? "line-through" : "none", textDecorationColor: "rgba(239,68,68,0.4)" }}>{p.name}</div>
                  {p.tvl && (
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "'JetBrains Mono', monospace" }}>TVL: {p.tvl}</div>
                  )}
                </div>
                <MultisigRatio threshold={p.threshold} total={p.total} />
                <TimelockBar minutes={p.timelockMinutes} label={p.timelock} />
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", padding: "4px 10px", borderRadius: 4, color: cfg.badge, background: cfg.badgeBg, border: `1px solid ${cfg.border}`, fontFamily: "'JetBrains Mono', monospace" }}>{cfg.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 36, background: "rgba(99, 102, 241, 0.06)", border: "1px solid rgba(99, 102, 241, 0.2)", borderRadius: 12, padding: 28 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", color: "#818CF8", textTransform: "uppercase", marginBottom: 12 }}>THE TAKEAWAY</div>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.7)", margin: 0 }}>
            A low multisig threshold without a timelock is a single point of failure. Drift&apos;s 2/5 configuration with zero delay meant two social-engineered signatures were enough to drain $285M instantly. Protocols with higher thresholds AND timelocks give the community a window to detect and respond to malicious transactions. If a protocol you use doesn&apos;t publish its multisig configuration — ask.
          </p>
        </div>

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", fontFamily: "'JetBrains Mono', monospace" }}>floronchain.com · followtheflor.com</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", fontFamily: "'JetBrains Mono', monospace" }}>Data as of April 5, 2026</div>
        </div>
      </div>
      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </div>
  );
}
