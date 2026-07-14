const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function StatIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <svg {...svgProps}>
          <path d="M5 21V4" />
          <path d="M5 4h12l-2.3 3.5L17 11H5" />
        </svg>
      );
    case 1:
      return (
        <svg {...svgProps}>
          <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.6" />
        </svg>
      );
    case 2:
      return (
        <svg {...svgProps}>
          <path d="M3.5 6.5c2.6-2 14.4-2 17 0" />
          <path d="M5 10h14" />
          <path d="M7 6.6V20" />
          <path d="M17 6.6V20" />
        </svg>
      );
    case 3:
      return (
        <svg {...svgProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12.2l2.6 2.6L16 9" />
        </svg>
      );
    case 4:
      return (
        <svg {...svgProps}>
          <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    default:
      return (
        <svg {...svgProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7.2V12l3.4 2" />
        </svg>
      );
  }
}

const problemIcons: Record<string, React.ReactNode> = {
  people: (
    <>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5.5 20c.6-3.7 3.3-5.5 6.5-5.5s5.9 1.8 6.5 5.5" />
    </>
  ),
  layers: (
    <>
      <ellipse cx="8.5" cy="7" rx="4.8" ry="2.3" />
      <path d="M3.7 7v4c0 1.3 2.1 2.3 4.8 2.3" />
      <path d="M10 15.7c0 1.3 2.1 2.3 4.8 2.3s4.8-1 4.8-2.3v-4" />
      <ellipse cx="14.8" cy="11.7" rx="4.8" ry="2.3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </>
  ),
  warn: (
    <>
      <path d="M12 4 2.5 20h19L12 4Z" />
      <path d="M12 10v4" />
      <path d="M12 17h.01" />
    </>
  ),
};

export function ProblemIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {problemIcons[name]}
    </svg>
  );
}

const qualityIcons: Record<string, React.ReactNode> = {
  doc: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1" />
      <path d="M8.5 12l2 2 4-4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4-4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19h16" />
      <path d="M6 19v-5M11 19V8M16 19v-9" />
    </>
  ),
};

export function QualityIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {qualityIcons[name]}
    </svg>
  );
}

const miscIcons: Record<string, React.ReactNode> = {
  trend: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 16l4-8 4 5 5-9" />
    </>
  ),
  partner: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" />
      <path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" />
      <path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" />
    </>
  ),
  check: (
    <>
      <path d="M9 12l2 2 4-4" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),
  spark: (
    <>
      <path d="M12 2v4" />
      <path d="m4.93 4.93 2.83 2.83" />
      <path d="M2 12h4" />
      <path d="m4.93 19.07 2.83-2.83" />
      <path d="M12 18v4" />
      <path d="m16.24 16.24 2.83 2.83" />
      <path d="M18 12h4" />
      <path d="m16.24 7.76 2.83-2.83" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.35a2 2 0 0 1-.45 2.11L8.09 9.43a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.32 1.54.55 2.35.68a2 2 0 0 1 1.72 2.03Z" />
  ),
  envelope: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.2V12l3.4 2" />
    </>
  ),
};

export function MiscIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {miscIcons[name]}
    </svg>
  );
}

export function DuoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 3l4 4-4 4" />
      <path d="M16 21l-4-4 4-4" />
      <path d="M12 7h6a2 2 0 0 1 2 2v2" />
      <path d="M12 17H6a2 2 0 0 1-2-2v-2" />
    </svg>
  );
}

export function CyberIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2l2.6 6.9L22 9.6l-5.4 4.7L18.2 22 12 18.3 5.8 22l1.6-7.7L2 9.6l7.4-.7Z" />
    </svg>
  );
}

export function FlowStar() {
  return (
    <svg className="star" viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 0C54 30 70 46 100 50C70 54 54 70 50 100C46 70 30 54 0 50C30 46 46 30 50 0Z" fill="#8CAF61" />
    </svg>
  );
}

export function ValuesFan() {
  return (
    <svg className="fan" viewBox="0 0 540 420" role="img" aria-label="Ba giá trị cốt lõi">
      <path className="disk" d="M36,60 A150,150 0 0 1 36,360 Z" />
      <text className="vtext" x="22" y="210" transform="rotate(-90 22 210)" textAnchor="middle">VALUE</text>
      <path className="petal" d="M139.9,43.8 A196,196 0 0 1 212.2,124.1 L151.0,153.9 A128,128 0 0 0 103.8,101.4 Z" />
      <path className="petal" d="M224.4,156.0 A196,196 0 0 1 224.4,264.0 L159.0,245.3 A128,128 0 0 0 159.0,174.7 Z" />
      <path className="petal" d="M212.2,295.9 A196,196 0 0 1 139.9,376.2 L103.8,318.6 A128,128 0 0 0 151.0,266.1 Z" />
    </svg>
  );
}
