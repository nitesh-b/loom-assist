import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AacDemo } from "@/components/marketing/AacDemo";
import { MarketingBulletList } from "@/components/marketing/MarketingBulletList";
import { MarketingCardGrid } from "@/components/marketing/MarketingCardGrid";
import { MarketingHero } from "@/components/marketing/MarketingHero";
import { MarketingImage } from "@/components/marketing/MarketingImage";
import { MarketingSection } from "@/components/marketing/MarketingSection";

type IndexPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(
  props: IndexPageProps,
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: "HomePage",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default async function Index(props: IndexPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: "HomePage",
  });

  return (
    <>
      <div className="w-full overflow-hidden  -my-50">
        <MarketingImage
          src="/assets/images/communication-x-barriers.png"
          alt={t("hero_image_alt")}
          width={1400}
          height={780}
          className="h-auto w-full"
        />
      </div>
      <MarketingHero
        title={t("hero_title")}
        subtitle={t("hero_subtitle")}
        primaryCta={{ href: "/sign-up/", label: t("cta_primary") }}
        secondaryCta={{ href: "#demo", label: t("cta_secondary") }}
      />
      <MarketingSection title={t("whoHelps_title")}>
        <p className="text-base text-gray-700">{t("whoHelps_description")}</p>
        <MarketingCardGrid
          items={[
            t("whoHelps_item_1"),
            t("whoHelps_item_2"),
            t("whoHelps_item_3"),
            t("whoHelps_item_4"),
            t("whoHelps_item_5"),
            t("whoHelps_item_6"),
          ]}
        />
      </MarketingSection>

      <MarketingSection
        title={t("howAacWorks_title")}
        backgroundImage="/assets/images/how-aac-works.png"
        className="py-120"
      >
        <MarketingBulletList
          items={[
            t("howAacWorks_point_1"),
            t("howAacWorks_point_2"),
            t("howAacWorks_point_3"),
            t("howAacWorks_point_4"),
          ]}
        />
      </MarketingSection>

      <MarketingSection id="demo" title={t("demo_title")}>
        <p className="text-base text-gray-700">{t("demo_description")}</p>
        <AacDemo
          outputLabel={t("demo_output_label")}
          controls={{
            backspace: t("demo_backspace"),
            clear: t("demo_clear"),
            speak: t("demo_speak"),
          }}
          symbols={[
            {
              id: "i",
              label: t("demo_symbol_i"),
              ariaLabel: t("demo_symbol_i_aria"),
            },
            {
              id: "want",
              label: t("demo_symbol_want"),
              ariaLabel: t("demo_symbol_want_aria"),
            },
            {
              id: "more",
              label: t("demo_symbol_more"),
              ariaLabel: t("demo_symbol_more_aria"),
            },
            {
              id: "drink",
              label: t("demo_symbol_drink"),
              ariaLabel: t("demo_symbol_drink_aria"),
            },
          ]}
        />
      </MarketingSection>

      <MarketingSection title={t("features_title")}>
        <MarketingCardGrid
          items={[
            t("features_item_1"),
            t("features_item_2"),
            t("features_item_3"),
            t("features_item_4"),
            t("features_item_5"),
            t("features_item_6"),
          ]}
        />
      </MarketingSection>

      <MarketingSection title={t("accessibility_title")}>
        <p className="text-base text-gray-700">
          {t("accessibility_description")}
        </p>
      </MarketingSection>

      <MarketingSection title={t("finalCta_title")}>
        <p className="text-base text-gray-700">{t("finalCta_description")}</p>
        <a
          href="/pricing/"
          className="loom-button loom-button-primary inline-flex items-center px-5 py-3 text-base font-semibold"
        >
          {t("finalCta_button")}
        </a>
      </MarketingSection>
    </>
  );
}
