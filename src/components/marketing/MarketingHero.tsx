export const MarketingHero = (props: {
  title?: string;
  subtitle?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) => (
  <section className="space-y-4">
    {props.title && (
      <h1 className="text-4xl leading-tight font-bold" style={{ color: 'var(--loom-text)' }}>
        {props.title}
      </h1>
    )}
    <p className="text-lg" style={{ color: 'var(--loom-text-muted)' }}>
      {props.subtitle}
    </p>
    <div className="flex flex-wrap gap-3">
      <a
        href={props.primaryCta?.href}
        className="loom-button loom-button-primary inline-flex items-center px-5 py-3 text-base font-semibold"
      >
        {props.primaryCta?.label}
      </a>
      <a
        href={props.secondaryCta?.href}
        className="loom-button loom-button-secondary inline-flex items-center px-5 py-3 text-base font-semibold"
      >
        {props.secondaryCta?.label}
      </a>
    </div>
  </section>
);
