import { MarketingImage } from '@/components/marketing/MarketingImage';

export const PageHero = (props: {
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
  };
}) => (
  <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
    <div className="space-y-3">
      <h1 className="text-3xl font-bold" style={{ color: 'var(--loom-text)' }}>
        {props.title}
      </h1>
      <p className="text-base" style={{ color: 'var(--loom-text-muted)' }}>
        {props.subtitle}
      </p>
    </div>

    <div className="loom-card overflow-hidden p-2">
      <MarketingImage
        src={props.image.src}
        alt={props.image.alt}
        width={1200}
        height={720}
        className="h-auto w-full"
      />
    </div>
  </div>
);
