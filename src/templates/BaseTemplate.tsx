"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AppConfig } from "@/utils/AppConfig";

export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
  sticky?: boolean;
}) => {
  const t = useTranslations("BaseTemplate");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = [
    props.sticky ? "sticky top-0 z-50 w-full" : "w-full",
    "px-5 py-6 transition-all duration-300",
    props.sticky && isScrolled ? "shadow-sm" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const headerStyle = props.sticky
    ? {
        background: isScrolled
          ? "linear-gradient(135deg, rgba(47, 111, 102, 0.96) 0%, rgba(201, 218, 214, 0.92) 100%)"
          : "transparent",
        border: isScrolled ? "1px solid rgba(255,255,255,0.16)" : "none",
        borderRadius: "0px",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        color: "var(--loom-surface)",
      }
    : {
        background: `linear-gradient(135deg, var(--loom-accent) 0%, var(--loom-accent-soft) 100%)`,
        border: "1px solid var(--loom-outline)",
        borderRadius: "0px",
        color: "var(--loom-surface)",
      };

  return (
    <div className="w-full">
      <div className=" w-full">
        <header className={headerClassName} style={headerStyle}>
          <div className="flex flex-col gap-1">
            <h1
              className="text-3xl font-bold"
              style={{ color: "var(--loom-surface)" }}
            >
              {AppConfig.name}
            </h1>
            <h2 className="text-base" style={{ color: "var(--loom-surface)" }}>
              {t("description")}
            </h2>
          </div>

          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <nav
              aria-label={t("main_navigation_label")}
              className="hidden md:block"
            >
              <ul className="flex flex-wrap gap-x-2 gap-y-2 text-base">
                {props.leftNav}
              </ul>
            </nav>

            <nav className="hidden md:block">
              <ul className="flex flex-wrap gap-x-2 gap-y-2 text-base">
                {props.rightNav}
              </ul>
            </nav>

            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="rounded-md p-2 hover:bg-gray-100 md:hidden"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="mt-4 border-t pt-4 md:hidden">
              <nav aria-label={t("main_navigation_label")}>
                <ul className="flex flex-col gap-2">{props.leftNav}</ul>
              </nav>
              <nav className="mt-4">
                <ul className="flex flex-col gap-2">{props.rightNav}</ul>
              </nav>
            </div>
          )}
        </header>

        <main className="loom-card mt-6">{props.children}</main>

        <footer
          className="mt-6 mb-10 text-center text-sm"
          style={{ color: "var(--loom-text-muted)" }}
        >
          {t.rich("footer_text", {
            year: new Date().getFullYear(),
            name: AppConfig.name,
            author: () => (
              <a
                href="https://nextjs-boilerplate.com"
                className="hover:border-b-2"
                style={{
                  color: "var(--loom-accent)",
                  borderColor: "var(--loom-accent)",
                }}
              >
                Next.js Boilerplate
              </a>
            ),
          })}

          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </footer>
      </div>
    </div>
  );
};
