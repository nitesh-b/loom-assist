import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageHero } from '@/components/marketing/PageHero';

type AccessibilityPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: AccessibilityPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'AccessibilityPage',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function AccessibilityPage(props: AccessibilityPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'AccessibilityPage',
  });

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        image={{
          src: '/marketing/placeholder-accessibility.svg',
          alt: t('image_alt'),
        }}
      />

      <div className="loom-card mt-8 p-5">
        <ul
          className="list-disc space-y-2 pl-5 text-base"
          style={{ color: 'var(--loom-text-muted)' }}
        >
          <li>{t('item_touch_targets')}</li>
          <li>{t('item_keyboard')}</li>
          <li>{t('item_contrast')}</li>
          <li>{t('item_screen_readers')}</li>
          <li>{t('item_cognitive')}</li>
        </ul>
      </div>
    </>
  );
}
