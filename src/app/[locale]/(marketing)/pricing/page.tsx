import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/marketing/PageHero';

type PricingPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: PricingPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'PricingPage',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function PricingPage(props: PricingPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'PricingPage',
  });

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        image={{
          src: '/marketing/placeholder-pricing.svg',
          alt: t('image_alt'),
        }}
      />

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('plan_free_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('plan_free_body')}
          </p>
        </div>
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('plan_family_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('plan_family_body')}
          </p>
        </div>
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('plan_therapist_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('plan_therapist_body')}
          </p>
        </div>
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('plan_school_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('plan_school_body')}
          </p>
        </div>
      </div>
    </>
  );
}
