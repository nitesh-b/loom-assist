import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/marketing/PageHero';

type FeaturesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: FeaturesPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'FeaturesPage',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function FeaturesPage(props: FeaturesPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'FeaturesPage',
  });

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        image={{
          src: '/marketing/placeholder-features.svg',
          alt: t('image_alt'),
        }}
      />

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('section_core_vocab_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('section_core_vocab_body')}
          </p>
        </div>
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('section_fringe_vocab_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('section_fringe_vocab_body')}
          </p>
        </div>
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('section_phrase_builder_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('section_phrase_builder_body')}
          </p>
        </div>
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('section_color_coding_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('section_color_coding_body')}
          </p>
        </div>
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('section_therapist_tools_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('section_therapist_tools_body')}
          </p>
        </div>
        <div className="loom-card p-5">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('section_sync_title')}
          </h2>
          <p className="mt-2 text-base" style={{ color: 'var(--loom-text-muted)' }}>
            {t('section_sync_body')}
          </p>
        </div>
      </div>
    </>
  );
}
