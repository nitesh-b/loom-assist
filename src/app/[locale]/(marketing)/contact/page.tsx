import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ContactForm } from '@/components/marketing/ContactForm';
import { PageHero } from '@/components/marketing/PageHero';

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: ContactPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'ContactPage',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function ContactPage(props: ContactPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'ContactPage',
  });

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        image={{
          src: '/marketing/placeholder-contact.svg',
          alt: t('image_alt'),
        }}
      />

      <div className="loom-card mt-8 p-5">
        <ContactForm />
      </div>
    </>
  );
}
