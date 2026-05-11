import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/marketing/PageHero';

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: AboutPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function About(props: AboutPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('mission')}
        image={{
          src: '/marketing/placeholder-home.svg',
          alt: t('image_alt'),
        }}
      />

      <div
        className="loom-card mt-8 space-y-3 p-5 text-base"
        style={{ color: 'var(--loom-text-muted)' }}
      >
        <p>{t('values_1')}</p>
        <p>{t('values_2')}</p>
        <p>{t('values_3')}</p>
      </div>
    </>
  );
}
