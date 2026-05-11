import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/marketing/PageHero';
import { Link } from '@/libs/I18nNavigation';

type ResourcesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ResourcesPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'ResourcesPage',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function ResourcesPage(props: ResourcesPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'ResourcesPage',
  });

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        image={{
          src: '/marketing/placeholder-resources.svg',
          alt: t('image_alt'),
        }}
      />

      <div className="mt-8 grid grid-cols-1 gap-3 text-base md:grid-cols-2">
        <Link
          href="/faq/"
          className="loom-card p-5 hover:border-[var(--loom-outline-variant)]"
          style={{ borderColor: 'var(--loom-outline)' }}
        >
          <div className="font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('card_faq_title')}
          </div>
          <div className="mt-1" style={{ color: 'var(--loom-text-muted)' }}>
            {t('card_faq_body')}
          </div>
        </Link>
        <div className="loom-card p-5">
          <div className="font-semibold" style={{ color: 'var(--loom-text)' }}>
            {t('card_coming_soon_title')}
          </div>
          <div className="mt-1" style={{ color: 'var(--loom-text-muted)' }}>
            {t('card_coming_soon_body')}
          </div>
        </div>
      </div>
    </>
  );
}
