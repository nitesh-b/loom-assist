import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/marketing/PageHero';

type FaqPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: FaqPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'FaqPage',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function FaqPage(props: FaqPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'FaqPage',
  });

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        image={{
          src: '/marketing/placeholder-faq.svg',
          alt: t('image_alt'),
        }}
      />

      <div className="mt-8 space-y-4">
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('q1_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('q1_body')}
          </p>
        </div>
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('q2_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('q2_body')}
          </p>
        </div>
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('q3_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('q3_body')}
          </p>
        </div>
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('q4_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('q4_body')}
          </p>
        </div>
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('q5_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('q5_body')}
          </p>
        </div>
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('q6_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('q6_body')}
          </p>
        </div>
      </div>
    </>
  );
}
