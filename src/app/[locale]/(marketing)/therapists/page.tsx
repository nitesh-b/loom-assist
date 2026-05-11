import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/marketing/PageHero';

type TherapistsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: TherapistsPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'TherapistsPage',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function TherapistsPage(props: TherapistsPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'TherapistsPage',
  });

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        image={{
          src: '/marketing/placeholder-therapists.svg',
          alt: t('image_alt'),
        }}
      />

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('section_workflows_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('section_workflows_body')}
          </p>
        </div>
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('section_customization_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('section_customization_body')}
          </p>
        </div>
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('section_support_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('section_support_body')}
          </p>
        </div>
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('section_printables_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('section_printables_body')}
          </p>
        </div>
      </div>
    </>
  );
}
