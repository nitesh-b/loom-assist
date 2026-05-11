import { getTranslations, setRequestLocale } from "next-intl/server";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Link } from "@/libs/I18nNavigation";
import { BaseTemplate } from "@/templates/BaseTemplate";

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: "RootLayout",
  });

  return (
    <>
      <BaseTemplate
        sticky
        leftNav={
          <>
            <li>
              <Link
                href="/"
                className="nav-link loom-chip border-none px-4 py-2 font-semibold transition-all duration-200"
                style={{ color: "var(--loom-text)" }}
              >
                {t("home_link")}
              </Link>
            </li>
            <li>
              <Link
                href="/features/"
                className="nav-link loom-chip border-none px-4 py-2 font-semibold transition-all duration-200"
                style={{ color: "var(--loom-text)" }}
              >
                {t("features_link")}
              </Link>
            </li>
            <li>
              <Link
                href="/pricing/"
                className="nav-link loom-chip border-none px-4 py-2 font-semibold transition-all duration-200"
                style={{ color: "var(--loom-text)" }}
              >
                {t("pricing_link")}
              </Link>
            </li>
            <li>
              <Link
                href="/therapists/"
                className="nav-link loom-chip border-none px-4 py-2 font-semibold transition-all duration-200"
                style={{ color: "var(--loom-text)" }}
              >
                {t("therapists_link")}
              </Link>
            </li>
            <li>
              <Link
                href="/resources/"
                className="nav-link loom-chip border-none px-4 py-2 font-semibold transition-all duration-200"
                style={{ color: "var(--loom-text)" }}
              >
                {t("resources_link")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact/"
                className="nav-link loom-chip border-none px-4 py-2 font-semibold transition-all duration-200"
                style={{ color: "var(--loom-text)" }}
              >
                {t("contact_link")}
              </Link>
            </li>
          </>
        }
        rightNav={
          <>
            <li>
              <Link
                href="/sign-in/"
                className="nav-link loom-chip border-none px-4 py-2 font-semibold transition-all duration-200"
                style={{ color: "var(--loom-text-muted)" }}
              >
                {t("sign_in_link")}
              </Link>
            </li>

            <li>
              <Link
                href="/sign-up/"
                className="nav-link loom-chip border-none bg-[var(--loom-accent)] px-4 py-2 font-semibold text-white transition-all duration-200"
              >
                {t("sign_up_link")}
              </Link>
            </li>

            <li>
              <LocaleSwitcher />
            </li>
          </>
        }
      >
        <div className="text-xl [&_p]:my-6">{props.children}</div>
      </BaseTemplate>
    </>
  );
}
